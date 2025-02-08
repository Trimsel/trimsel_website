import React from "react";
import Image from "next/image";
import Link from "next/link";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setValue("selectOption", event.target.value);
  };

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
    } catch (error) {
      console.log(error);
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
              Hello! Let's make great work together. <span> &#129304; </span>{" "}
            </h2>
            <p className="contact-text">
              Take your startup to the next level. Our process revolves around
              your unique business needs.
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
              <strong style={{ color: "#1e2436" }}> FREE 30-Minute </strong>{" "}
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
                    Consult Our Experts
                  </Link>
                </div>
              </div>
            </div>
            <div className="card ceo-card">
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
            </div>
            <div className="card ceo-card">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-3">
                  <Image
                    src="/images/person1.png"
                    width={74}
                    height={74}
                    alt="CEO Linked in profile image"
                    className="person-icon"
                  />
                </div>
                <div className="col-lg-9 col-md-12 col-9">
                  <h3 className="ceo-heading mb-0 pb-1">
                    Mr. Karthick Ganesan
                  </h3>
                  <p className="lets-para mb-0 pb-1">Co-Founder</p>
                  <h4 className="ceo-contact">
                    Phone No : <span>+91 72047 94844</span>
                  </h4>
                </div>
              </div>
            </div>
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
              <h3 className="cntoct-heading">Let's get in touch</h3>

              <form id="home-form" onSubmit={handleSubmit(onSubmitForm)}>
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
                  <label htmlFor="product" className="abot-radio-style mt-3">
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
                  <label htmlFor="mobile-app" className="abot-radio-style mt-3">
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
                      selectedOption === "Quality Engineering and Technology"
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
                    <div className="md-form ps-3">
                      <input
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "Your phone number is required",
                          },
                          minLength: {
                            value: 10,
                            message: "Enter a valid mobile number",
                          },
                          maxLength: {
                            value: 11,
                            message: "Enter a valid mobile number",
                          },
                        })}
                        type="tel"
                        name="phone"
                        id="phone"
                        className="form-control abot-form"
                        placeholder="Mobile Number*"
                      />
                      <span className="error-design pt-3">
                        {errors?.phone?.message}
                        {errors?.phone?.maxLength?.message}
                        {errors?.phone?.minLength?.message}
                      </span>
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
                  <div className="col-lg-6 py-3">
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
                  </div>
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
                        {...register("message")}
                        type="textarea"
                        name="message"
                        id="message"
                        className="form-control  abot-form"
                        placeholder="Your Message"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 py-3">
                    <div className="text-right text-md-end">
                      <input type="submit" className="sbmt-btn" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
