import React from "react";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactModal({ title }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [selectedOption, setSelectedOption] = useState(0);
  const [recaptchaToken, setRecaptchaToken] = useState("");

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
      reset();
    } catch (error) {
      setMessage("Failed to send your message. Please try again.");
    }
  }
  
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="contact-body">
          <div
            className={`contact-form ${isSubmitted ? "fade-out" : "fade-in"}`}
          >
            <div className="card contact-card">
              <div className="row">
                <div className="col-lg-5 col-md-5">
                  <div className="card-background">
                    <div className="content p-2">
                      <h2 className="inner-heading">Hello!</h2>
                      <h5 className="dffrnt-title">{title}</h5>
                      <p className="lets-popup-para mb-3">
                        Send Us An Email:{" "}
                        <Link
                          href="mailto:contact@trimsel.com"
                          className="lets-popup-link"
                        >
                          contact@trimsel.com
                        </Link>{" "}
                      </p>
                      <p className="lets-popup-para mb-3">
                        Call Us:{" "}
                        <Link href="tel:72000841581" className="lets-popup-link">
                          +91-72000841581
                        </Link>{" "}
                        {/* <span> & </span> */}
                        {/* <Link href="tel:7200841581" className="lets-popup-link">
                          +91-7200841581
                        </Link>{" "} */}
                      </p>
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="card addr-card">
                            <h5 className="addr-popup-heading">
                              21B 5th Cross St, South Phase Thiru VI KA
                              Industrial Estate, Guindy, Chennai, Tamilnadu
                              600032, India
                            </h5>
                          </div>
                        </div>
                      </div>

                      <div className="card visit-card mt-1">
                        <h5 className="visit-popup-heading">
                          Visit Us : <FaMapMarkerAlt />
                        </h5>
                      </div>
                      <div className="scan mt-5 pt-3">
                        <div className="card scan-card mb-2" >
                          <h6>
                           <Image src="/images/whatsapp-icon.png" width={21} height={20} alt="Trimsel Whatsapp Icon" loading="lazy"/>
                            Scan and Chat</h6>
                        </div>
                      </div>

                      <div className="whatsapp-qr">
                        <Image
                          src="/images/trimselqr.png"
                          width={90}
                          height={90}
                          alt="Trimsel Whatsapp QR Code"
                          className="qr-cde"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 ">
                  <form id="home-form" onSubmit={handleSubmit(onSubmitForm)}>
                    {message && <p className="form-message">{message}</p>}
                    <div className="row">
                      <div className="col-lg-6 py-3">
                        <div className="md-form pe-3">
                          <label htmlFor="name" className="labels">
                            <h5>Full Name *</h5>
                          </label>
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
                            className="form-control popup-form"
                            placeholder="Enter your Full Name"
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
                        <div className="md-form pe-3">
                          <label htmlFor="email" className="labels">
                            <h5>Email *</h5>
                          </label>
                          <input
                            {...register("email", {
                              required: {
                                value: true,
                                message: "Email id is required",
                              },
                              pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid email address",
                              }
                            })}
                            type="email"
                            name="email"
                            id="email"
                            className="form-control popup-form"
                            placeholder="jackdempsey@gmail.com"
                          />
                          <span className="error-design pt-3">
                            {errors?.email?.message}
                            {errors?.email?.pattern?.message}
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 py-3">
                        <div className="md-form pe-3">
                          <label htmlFor="company" className="labels">
                            <h5>Company</h5>
                          </label>
                          <input
                            {...register("company")}
                            type="text"
                            name="company"
                            id="company"
                            className="form-control popup-form"
                            placeholder="Tech, Marketing, Agency"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 py-3">
                        <div className="md-form pe-3">
                          <label htmlFor="service" className="labels">
                            <h5>I'm intrested in</h5>
                          </label>
                          <select
                            name="service"
                            id="service"
                            {...register("service")}
                            className="form-control popup-form"
                            placeholder="Services"
                          >
                            <option value="">Select</option>
                            <option value="Mobile App Development">
                              Mobile App Development
                            </option>
                            <option value="Website Development">
                              Website Development
                            </option>
                            <option value="Digital Marketing">
                              Digital Marketing
                            </option>
                            <option value="Cloud and DevOps">
                              Cloud and DevOps
                            </option>
                            <option value="Other">
                              Other
                            </option>
                            {/* <option value="Quality Engineering and Testing">
                              Quality Engineering and Testing
                            </option> */}
                            {/* <option value="Blockchain Development">
                              Blockchain Development
                            </option> */}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12 py-3">
                        <div className="md-form pe-3">
                          <label htmlFor="message" className="labels">
                            <h5>Your Message</h5>
                          </label>
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
          <div className={`thank-you ${isSubmitted ? "fade-in" : "fade-out"}`}>
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

                {/* <Link
                  href="/portfolio"
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="primary" className="mt-3 mb-2">
                    View Our Case Studies
                  </Button>
                </Link> */}
              </h6>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-6 follow-col">
                <h4 className="contact-addrs">Follow Us:</h4>
                <Link
                  href="https://www.facebook.com/trimsel.softwares"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-icon"
                    src="/images/fb-icon.png"
                    alt="Facebook Icon"
                  />
                </Link>{" "}
                <Link
                  href="https://www.instagram.com/trimsel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-icon"
                    src="/images/insta-icon.png"
                    alt="Instagram Icon"
                  />
                </Link>{" "}
                <Link href="#" target="_blank">
                  <img
                    className="social-icon"
                    src="/images/linkedin-icon.png"
                    alt="Linkedin Icon"
                  />
                </Link>{" "}
                <Link href="https://in.pinterest.com/trimsel/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="social-icon"
                    src="/images/pinterest-icon.png"
                    alt="Pinterest Icon"
                  />
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className="card thank-card">
                  <Image
                    src="/images/scan.png"
                    width={159}
                    height={49}
                    alt="whatsapp-icon"
                  />
                  <Image
                    src="/images/trimselqr.png"
                    width={90}
                    height={90}
                    alt="Trimsel Whatsapp QR Code"
                    className="wht-qr"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
