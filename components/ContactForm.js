import React from "react";
import Image from "next/image";
import Link from "next/link";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "react-bootstrap/Modal";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedOption, setSelectedOption] = useState(0);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const handleThankYouClose = () => {
    setShowThankYou(false);
    setIsSubmitted(false);         // ✅ reset success state
    setRecaptchaToken(null);       // ✅ reset captcha
  };
  const handleThankYouShow = () => setShowThankYou(true);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleCaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setValue("selectOption", event.target.value);
  };

  async function onSubmitForm(values) {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`;
  
    if (!recaptchaToken) {
      setMessage("Please verify you are not a robot.");
      return;
    }
  
    const payload = {
      ...values,
      phone,
      service: selectedOption,
      recaptchaToken,
    };
  
    try {
      await axios.post(apiUrl, payload);
      setMessage("Thank you! We have received your message. Our team will get back to you soon.");
      setIsSubmitted(true);
      handleThankYouShow();
      reset();
    } catch (error) {
      setMessage("Failed to send your message. Please try again.");
    }
  }
  

  return (
    <section id="contact" className="my-4 py-4">
    <div className="container contact-container">
      <div className="row py-2">
        <Stack direction="horizontal">
          <div className=" badge-abot-btn">
            <img
              src="/images/Rectangle-kariot.png"
              className="me-2"
              alt="design-dot"
            />
            <p> GET INTO TOUCH </p>
          </div>
        </Stack>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <h2 className="contact-heading">
          Let’s Build Your Dream App – Get a Free Consultation!{" "}
            <span> &#129304; </span>{" "}
          </h2>
          <p className="contact-text">
          Have an idea or need expert help with your digital project? At Trimsel, we help businesses of all sizes with end-to-end development services — from websites and mobile apps to cloud, DevOps, and digital marketing.
          </p>
        </div>
        <div className="col-lg-4 col-md-4">
          <Button href="/portfolio" className="cntct-btn">
            <p>look at our</p> <h6>Case Studies</h6>{" "}
          </Button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 col-md-4">
          <h2 className="contct-heading">Hey! Got a startup idea?</h2>
          <p className="contct-para">
            Let us give you our honest opinion. Book your{" "}
            <strong style={{ color: "#1e2436" }}> 30-Minute Free Consultation to discuss your app idea </strong>{" "}
            consultation:
          </p>
          <div className="card contct-card">
            <div className="row">
              <div className="col-lg-2 col-md-12 col-2">
                <Image
                  src="/images/contact-us-mail.png"
                  width={50}
                  height={50}
                  alt="Contact us mail icon"
                  className="contct-icon"
                />
              </div>
              <div className="col-lg-10 col-md-12 col-10">
                <p className="lets-para mb-0">Let's talk</p>
                <Link href="/contact-us" className="lets-link">
                  Prefer a direct chat? Call our co-founders:
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="card ceo-card">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-3">
                <Image
                  src="/images/person.png"
                  width={74}
                  height={74}
                  alt="CEO Linked in profile image"
                  className="person-icon"
                />
              </div>
              <div className="col-lg-9 col-md-12 col-9">
                <h3 className="ceo-heading mb-0 pb-1">
                  Mr. Balaji Kailasasundaram
                </h3>
                <p className="lets-para mb-0 pb-1">Co-Founder</p>
                <h4 className="ceo-contact">
                  Phone No : <span>+91 72008 41581</span>
                </h4>
              </div>
            </div>
          </div> */}
          <div className="card contct-card mt-4">
            <div className="row">
              <div className="col-lg-2 col-md-12 col-2">
                <Image
                  src="/images/mailer-icon.png"
                  width={50}
                  height={50}
                  alt="Mailer icon"
                  className="contct-icon"
                />
              </div>
              <div className="col-lg-10 col-md-12 col-9">
                <p className="lets-para mb-0">Send us an email</p>
                <Link
                  href="mailto:contact@trimsel.com"
                  className="lets-link"
                >
                  contact@trimsel.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8">
          <div className="card ntoct-card">
            <h3 className="stages-heading">Have an idea?</h3>
            <h4 className="cntoct-heading">Fill out the form below & let’s start building your success story!</h4>

            <form id="home-form" onSubmit={handleSubmit(onSubmitForm)}>
            {message && <p className="form-message">{message}</p>}
              <p className="mt-5 form-lbl-para"> I'm intrested in :</p>
              <div className="options">
                <input
                  {...register("product")}
                  type="radio"
                  name="selectOption"
                  value="Product Development"
                  id="product"
                  checked={selectedOption === "Product Development"}
                  onChange={handleOptionChange}
                  className="form-control"
                  placeholder="product"
                />
                <label
                  htmlFor="product"
                  className="abot-radio-style mt-3"
                >
                  Product Development
                </label>

                <input
                  {...register("mobile-app")}
                  type="radio"
                  name="selectOption"
                  value="Mobile App Development"
                  id="mobile-app"
                  checked={selectedOption === "Mobile App Development"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="mobile-app"
                  className="abot-radio-style mt-3"
                >
                  Mobile App Development
                </label>

                <input
                  {...register("cloud-devops")}
                  type="radio"
                  name="selectOption"
                  value="Cloud and DevOps"
                  id="cloud-devops"
                  checked={selectedOption === "Cloud and DevOps"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="cloud-devops"
                  className="abot-radio-style mt-3"
                >
                  Cloud & DevOps
                </label>
                <input
                  {...register("website-development")}
                  type="radio"
                  name="selectOption"
                  value="Website Development"
                  id="website-development"
                  checked={selectedOption === "Website Development"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="website-development"
                  className="mt-3 abot-radio-style"
                >
                  Website Development
                </label>
                <input
                  {...register("digital-marketing")}
                  type="radio"
                  name="selectOption"
                  value="Digital Marketing"
                  id="digital-marketing"
                  checked={selectedOption === "Digital Marketing"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="digital-marketing"
                  className="mt-3 abot-radio-style"
                >
                  Digital Marketing
                </label>
                <input
                  {...register("blockchain-development")}
                  type="radio"
                  name="selectOption"
                  value="Blockchain Development"
                  id="blockchain-development"
                  checked={selectedOption === "Blockchain Development"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="blockchain-development"
                  className="mt-3 abot-radio-style"
                >
                  Block Chain Development
                </label>
                <input
                  {...register("quality-testing")}
                  type="radio"
                  name="selectOption"
                  value="Quality Engineering and Technology"
                  id="quality-testing"
                  checked={
                    selectedOption ===
                    "Quality Engineering and Technology"
                  }
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="quality-testing"
                  className="mt-3 abot-radio-style"
                >
                  Quality Engineering & Technology
                </label>
                <input
                  {...register("other")}
                  type="radio"
                  name="selectOption"
                  value="Other"
                  id="other"
                  checked={selectedOption === "Other"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="other" className="mt-3 abot-radio-style">
                  Other
                </label>
              </div>
              <div className="row py-3">
                <div className="col-lg-6 py-3">
                  <div className="md-form ps-3">
                    <input
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Your name is required",
                        },
                      })}
                      type="text"
                      id="name"
                      name="name"
                      className="form-control abot-form"
                      placeholder="Full Name*"
                    />
                    <span className="error-design pt-3">
                      {errors?.name?.message}
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 py-3">
  <div className="md-form pe-3">
    <label htmlFor="phone" className="labels">
      <h5>Mobile Number *</h5>
    </label>
    <div className="phone-input-container">
    <PhoneInput
  country={'in'}
  enableSearch={true}
  value={phone}
  onChange={(phone) => setPhone(phone)}
  inputProps={{
    name: 'mobile',
    required: true,
  }}
  inputStyle={{
    width: '100%',
    height: '58px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    paddingLeft: '45px',
  }}
  containerStyle={{ width: '100%' }}
/>
{errors?.mobile && (
  <span className="error-design pt-3">Mobile number is required</span>
)}

    </div>
  </div>
</div>
                <div className="col-lg-6 py-3">
                  <div className="md-form ps-3">
                    <input
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email id is required",
                        },
                        pattern: {
                          value:
                            /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      type="email"
                      name="email"
                      id="email"
                      className="form-control abot-form"
                      placeholder="Email*"
                    />
                    <span className="error-design pt-3">
                      {errors?.email?.message}
                      {errors?.email?.pattern?.message}
                    </span>
                  </div>
                </div>
                {/* <div className="col-lg-6 py-3">
                  <div className="md-form ps-3">
                    <input
                      {...register("skype")}
                      type="text"
                      name="skype"
                      id="skype"
                      className="form-control abot-form"
                      placeholder="SkypeID"
                    />
                  </div>
                </div> */}
                <div className="col-lg-12 py-3">
                  <div className="md-form ps-3">
                    <input
                      {...register("company")}
                      type="text"
                      name="company"
                      id="company"
                      className="form-control abot-form"
                      placeholder="Company"
                    />
                  </div>
                </div>

                <div className="col-lg-12 py-3">
                  <div className="md-form ps-3">
                  <textarea
  {...register('message', {
    required: {
      value: true,
      message: 'Please describe your project',
    }
  })}
  name="message"
  id="message"
  className="form-control lg-textarea"
  placeholder="Describe your Project"
/>
<span className="error-design pt-3">{errors?.message?.message}</span>
                  </div>
                </div>
                <div className="col-lg-12 py-3">
                <ReCAPTCHA
  sitekey={siteKey}
  onChange={handleCaptchaChange}
  onExpired={() => setRecaptchaToken(null)}
/>
                    </div>
                <div className="col-lg-12 py-3">
                  <div className="text-right text-md-end">
                    <input type="submit" className="sbmt-btn" disabled={!recaptchaToken}/>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Modal show={showThankYou} onHide={handleThankYouClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="contact-body text-center px-4">
    {isSubmitted && (
  <div className="thank-you fade-in">
    <div className="container thank-container">
      <img
        src="/images/astronaut-thanking.gif"
        alt="Astronaut Thanking For Form Submit"
        className="gif-thanks"
      />
      <h2 className="thank-heading">Thank you for Contacting us!</h2>
      <p className="thank-para">
        We have received your message. We'll reach you out immediately!
      </p>
      <h6>
        <Link
          href="/"
          passHref
          style={{ textDecoration: "none" }}
          className="me-3"
        >
          <Button variant="outline-primary" className="mt-3 mb-2">
            Back To Homepage
          </Button>
        </Link>
      </h6>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-6 follow-col">
          <h4 className="contact-addrs">Follow Us:</h4>
          <Link href="https://www.facebook.com/trimsel.softwares" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src="/images/fb-icon.png" alt="Facebook Icon" />
          </Link>
          <Link href="https://www.instagram.com/trimsel/" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src="/images/insta-icon.png" alt="Instagram Icon" />
          </Link>
          <Link href="#" target="_blank">
            <img className="social-icon" src="/images/linkedin-icon.png" alt="Linkedin Icon" />
          </Link>
          <Link href="https://in.pinterest.com/trimsel/" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src="/images/pinterest-icon.png" alt="Pinterest Icon" />
          </Link>
        </div>
        <div className="col-lg-6 col-md-6 col-6">
          <div className="card thank-card">
            <img src="/images/scan.png" width={159} height={49} alt="whatsapp-icon" />
            <img src="/images/trimselqr.png" width={90} height={90} alt="Trimsel Whatsapp QR Code" className="wht-qr" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
)}
</Modal.Body>
</Modal>
  </section>
  );
}
