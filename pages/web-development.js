import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import CarouselComponent from "../components/carouselComponent";
import ClientLogo from "../components/clientLogo";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import ContactForm from "../components/ContactForm";
import ContactModal from "../components/ContactModal";

export default function WebDevelopment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/newcontact`,
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
  const slides = [0, 1, 2];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Head>
        <title>Best Web Development Company in India </title>
        <meta
          name="description"
          content="Best Web Development Company in India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-min.ico" />
      </Head>
      <section className="web-hero">
        <Header />
        <section className="hero-dev">
          <div className="container pt-3">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="title">
                  <div className="title-inner">
                    <div className="cafe">
                      <div className="whiteLink">
                        <p className="breadcrumbs-kar">
                          <Link href="/">Home</Link> <span> &#x2027; </span>{" "}
                          <Link href="#">Services</Link> <span> &#x2027; </span>{" "}
                          Web Development Services
                        </p>
                      </div>
                    </div>
                    <div className="cafe">
                      <div className="cafe-inner news-title">
                        Your Trusted Web Development Service Company
                      </div>
                    </div>
                    <div className="mozart">
                      <div className="mozart-inner">
                        <p className="dev-para">
                          We provide robust and unparalleled web development
                          services to our clients with proficiency in UI/UX
                          designs, programming language and JavaScript
                          frameworks.
                        </p>
                      </div>
                    </div>
                    <div className="mozarts">
                      <div className="mozarts-inner">
                        <button className="btn btn-primary dev-btn">
                          Get Started Today{" "}
                          <img
                            src="/images/material-symbols_arrow-right-alt.png"
                            alt="arrow-icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="imgrs">
                  <Image
                    src="/images/web-dev-hero.png"
                    className="web-hero-img"
                    alt="Web-development-Hero-Image"
                    width={646}
                    height={651}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="web-about">
        <div className="container web-container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <h2 className="webdev-title pt-3">
                Web Development Company in Chennai
              </h2>
              <Button className="web-btn mb-3" href="#">
                <img
                  src="/images/Group309.png"
                  width={40}
                  alt="icon-fire-clock"
                />{" "}
                Quick Delivery at{" "}
                <span style={{ color: "#01aaec" }}> Half the Cost </span>{" "}
              </Button>
              <p className="web-abt-para pb-3">
                Minitzon web development company in India has been serving
                businesses with their digital needs for years. Our experts have
                helped start-ups, enterprises and businesses of all scales
                enhance their profits in the B2C and B2B sectors of various
                industries. We create endless possibilities to help businesses
                achieve great heights in the marketplace.
              </p>
              <p className="web-abt-para pb-3">
                If you are on the lookout for the best web app development
                company in India to set up your digital presence, you have
                reached the right place. Our custom solutions will fit right
                into your requirements at an affordable price.
              </p>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className=" card card-web">
                <div className="card-web-details">
                  <h5 className="pb-3">START YOUR PROJECT</h5>
                  <h2>
                    Are You Looking Out To Develop A Website For Your Business?
                  </h2>
                  <p>
                    Request a free one to one consultation for your next big
                    idea.
                  </p>
                  <form id="home-form" onSubmit={handleSubmit(onSubmitForm)}>
                    <div className="md-form">
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
                        className="form-control web-form mb-3"
                        placeholder="Phone Number"
                      />
                      <span className="error-design pt-3">
                        {errors?.phone?.message}
                        {errors?.phone?.maxLength?.message}
                        {errors?.phone?.minLength?.message}
                      </span>
                    </div>
                    <div className="md-form">
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
                        className="form-control web-form"
                        placeholder="Enter Email Address"
                      />
                      <span className="error-design pt-3">
                        {errors?.email?.message}
                        {errors?.email?.pattern?.message}
                      </span>
                    </div>
                    <input
                      type="submit"
                      className="subs-btn my-3"
                      value="Book A Free Consultation"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="web-do">
        <div className="container do-container">
          <Stack direction="horizontal" className="mb-3">
            <div className=" badge-web-btn">
              <img
                src="/images/web-rect.png"
                className="me-2"
                alt="design-dot"
              />
              <p> WHAT WE DO </p>
            </div>
          </Stack>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h2 className="do-heading">
                Full Stack Web Development Services in India
              </h2>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="dos-para">
                Minitzon web development agency in India undertakes consultancy,
                for businesses regarding website building, understanding your
                needs
              </p>
            </div>
          </div>
          <div className="row do-card-row">
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="do-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/doedit1.png"
                    width={76}
                    height={76}
                    className="do-icon pb-3"
                    alt="ui/ux icon"
                  />
                  <h3 className="do-card-heading">User Centric UI/UX Design</h3>
                  <p className="do-para">
                    Experience the best UI/UX designs by the top web development
                    agency in India. Mintizon web app development company in
                    Chennai is capable of elevating your business with optimized
                    UI/UX solutions and applications.
                  </p>
                  <Link href="#" passHref>
                    <Image
                      src="/images/do-card-button.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="do-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/do-front-end.png"
                    width={76}
                    height={76}
                    className="do-icon pb-3"
                    alt="Frontend Development-Icon"
                  />
                  <h3 className="do-card-heading">Front End Development</h3>
                  <p className="do-para">
                    Experience the best UI/UX designs by the top web development
                    agency in India. Mintizon web app development company in
                    Chennai is capable of elevating your business with optimized
                    UI/UX solutions and applications.
                  </p>
                  <Link href="#" passHref>
                    <Image
                      src="/images/do-card-button.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="do-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/do-backend.png"
                    width={76}
                    height={76}
                    className="do-icon pb-3"
                    alt="Backend Development-Icon"
                  />
                  <h3 className="do-card-heading">Back End Development</h3>
                  <p className="do-para">
                    Experience the best UI/UX designs by the top web development
                    agency in India. Mintizon web app development company in
                    Chennai is capable of elevating your business with optimized
                    UI/UX solutions and applications.
                  </p>
                  <Link href="#" passHref>
                    <Image
                      src="/images/do-card-button.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="do-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/do-api.png"
                    width={76}
                    height={76}
                    className="do-icon pb-3"
                    alt="API-Development-Icon"
                  />
                  <h3 className="do-card-heading">
                    Multi-Tier API Development{" "}
                  </h3>
                  <p className="do-para">
                    Experience the best UI/UX designs by the top web development
                    agency in India. Mintizon web app development company in
                    Chennai is capable of elevating your business with optimized
                    UI/UX solutions and applications.
                  </p>
                  <Link href="#" passHref>
                    <Image
                      src="/images/do-card-button.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="do-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/do-cms.png"
                    width={76}
                    height={76}
                    className="do-icon pb-3"
                    alt="CMS-Icon"
                  />
                  <h3 className="do-card-heading">CMS Web Development</h3>
                  <p className="do-para">
                    Experience the best UI/UX designs by the top web development
                    agency in India. Mintizon web app development company in
                    Chennai is capable of elevating your business with optimized
                    UI/UX solutions and applications.
                  </p>
                  <Link href="#" passHref>
                    <Image
                      src="/images/do-card-button.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="do-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/do-ecom.png"
                    width={76}
                    height={76}
                    className="do-icon pb-3"
                    alt="Ecommerce-Icon"
                  />
                  <h3 className="do-card-heading" style={{ fontSize: "19px" }}>
                    Ecommerce Web Development
                  </h3>
                  <p className="do-para">
                    Experience the best UI/UX designs by the top web development
                    agency in India. Mintizon web app development company in
                    Chennai is capable of elevating your business with optimized
                    UI/UX solutions and applications.
                  </p>
                  <Link href="#" passHref>
                    <Image
                      src="/images/do-card-button.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="do-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/do-devops.png"
                    width={76}
                    height={76}
                    className="do-icon pb-3"
                    alt="devops-icon"
                  />
                  <h3 className="do-card-heading">DevOps As A Service </h3>
                  <p className="do-para">
                    Experience the best UI/UX designs by the top web development
                    agency in India. Mintizon web app development company in
                    Chennai is capable of elevating your business with optimized
                    UI/UX solutions and applications.
                  </p>
                  <Link href="#" passHref>
                    <Image
                      src="/images/do-card-button.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="do-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/do-testing.png"
                    width={76}
                    height={76}
                    className="do-icon pb-3"
                    alt="Quality-testing-Icon"
                  />
                  <h3 className="do-card-heading">
                    Quality Engineering & Testing
                  </h3>
                  <p className="do-para">
                    Experience the best UI/UX designs by the top web development
                    agency in India. Mintizon web app development company in
                    Chennai is capable of elevating your business with optimized
                    UI/UX solutions and applications.
                  </p>
                  <Link href="#" passHref>
                    <Image
                      src="/images/do-card-button.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="do-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/do-24-hours.png"
                    width={76}
                    height={76}
                    className="do-icon pb-3"
                    alt="24/7 icon"
                  />
                  <h3 className="do-card-heading" style={{ fontSize: "19px" }}>
                    24/7 Maintenance & Support
                  </h3>
                  <p className="do-para">
                    Experience the best UI/UX designs by the top web development
                    agency in India. Mintizon web app development company in
                    Chennai is capable of elevating your business with optimized
                    UI/UX solutions and applications.
                  </p>
                  <Link href="#" passHref>
                    <Image
                      src="/images/do-card-button.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="web-source">
        <div className="container source-container">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <h2 className="websor-title pt-3">
                Outsource Web App Development Services And Incresed ROI
              </h2>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link href="/contact-us" style={{ textDecoration: "none" }}>
                <Button className="gif-button mt-3">
                  <img
                    src="/images/slightly-smiling-face.gif"
                    alt="Smiling Face GIF Image"
                    className="new-smile"
                  />
                  <h6 className="smile-heading">
                    <p className=" smile-para"> Talk to a </p>
                    Web Develop. Expert{" "}
                    <img src="/images/gifbtniconarrow.png" alt="arrow-icon" />
                  </h6>
                </Button>
              </Link>
            </div>
          </div>
          <div className="row source-card-row">
            <div className="col-lg-3 col-md-6">
              <Card className="source-card mt-3">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/pedestal.png"
                    width={60}
                    height={60}
                    className="do-icon pb-3"
                    alt="Pedestal Icon"
                  />
                  <h3 className="source-card-heading">
                    Access To Top Worldwide Talent
                  </h3>
                  <p className="source-para">
                    Web development company in Chennai helps you access top
                    talents in the industry to meet your business needs with the
                    best-in-class technology and industry knowledge.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6">
              <Card className="source-card mt-3">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/wait-time.png"
                    width={60}
                    height={60}
                    className="do-icon pb-3"
                    alt="Hour-Clock-Icon"
                  />
                  <h3 className="source-card-heading">
                    Reduce Turnaround Time
                  </h3>
                  <p className="source-para">
                    Building a website on your own can consume a lot of time and
                    effort. Outsourcing web development to the best web
                    development company in India can help you save costs.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6">
              <Card className="source-card mt-3">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/businessman.png"
                    width={60}
                    height={60}
                    className="do-icon pb-3"
                    alt="Businessman-Icon"
                  />
                  <h3 className="source-card-heading">
                    Experienced Professionals
                  </h3>
                  <p className="source-para">
                    Get access to experienced developers and professionals to
                    help you construct and manage your project. We implement the
                    best practices and trends to deliver products.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6">
              <Card className="source-card mt-3">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/money.png"
                    width={60}
                    height={60}
                    className="do-icon pb-3"
                    alt="Banalytics-Icon"
                  />
                  <h3 className="source-card-heading">
                    Cut Down Extra <br /> Cost
                  </h3>
                  <p className="source-para">
                    Not needing to hire in-house teams and resources can help
                    you save a lot of money and capital by simply investing in
                    the top web development agency in India.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="web-app">
        <div className="container app-container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h2 className="websor-title pt-3">
                Why Does Your Website Need a Web App Service?
              </h2>
              <p className="webapp-para pt-3">
                Minitzon have excelled in various fields and have enabled
                several businesses globally to meet impeccable profits. Our
                experienced professionals and advanced IT resources serve
                adequately to meet business demands of any scale quickly and
                efficiently. See where our Mintizon has guided businesses to
                excellence.
              </p>
              <button className="btn btn-primary dev-btn mb-4 ">
                Contact Us{" "}
                <img
                  src="/images/material-symbols_arrow-right-alt.png"
                  alt="arrow-icon"
                />
              </button>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <Card className="webapp-card ipad-card1 mb-3 ">
                    <Card.Body
                      style={{ paddingRight: "0px", paddingLeft: "0px" }}
                    >
                      <Image
                        src="/images/maintenance.png"
                        width={66}
                        height={66}
                        alt="24/7-maintenance-support"
                      />
                      <h4 className="webapp-card-heading pt-2">24/7 Support</h4>
                      <p className="webapp-card-para pt-2">
                        Reach out to Minitzon at any time to get your
                        requirements fulfilled or your queries answered.
                      </p>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-6 col-md-6">
                  <Card className="webapp-card ipad-card2 mb-3">
                    <Card.Body
                      style={{ paddingRight: "0px", paddingLeft: "0px" }}
                    >
                      <Image
                        src="/images/higher-performance.png"
                        width={66}
                        height={66}
                        alt="Higher Performance"
                      />
                      <h4 className="webapp-card-heading pt-2">
                        Higher Efficiency
                      </h4>
                      <p className="webapp-card-para pt-2">
                        Reach out to Minitzon at any time to get your
                        requirements fulfilled or your queries answered.
                      </p>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-6 col-md-6">
                  <Card className="webapp-card ipad-card3 mb-3 ">
                    <Card.Body
                      style={{ paddingRight: "0px", paddingLeft: "0px" }}
                    >
                      <Image
                        src="/images/security-icon.png"
                        width={66}
                        height={66}
                        alt="Security Icon"
                      />
                      <h4 className="webapp-card-heading pt-2">
                        Multi-Layer Security
                      </h4>
                      <p className="webapp-card-para pt-2">
                        Reach out to Minitzon at any time to get your
                        requirements fulfilled or your queries answered.
                      </p>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-6 col-md-6">
                  <Card className="webapp-card ipad-card4 mb-3">
                    <Card.Body
                      style={{ paddingRight: "0px", paddingLeft: "0px" }}
                    >
                      <Image
                        src="/images/customisable-icon.png"
                        width={66}
                        height={66}
                        alt="Customisable Icon"
                      />
                      <h4 className="webapp-card-heading pt-2">
                        Customisable & Scalable Solution
                      </h4>
                      <p className="webapp-card-para pt-2">
                        Reach out to Minitzon at any time to get your
                        requirements fulfilled or your queries answered.
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="web-growth">
        <div className="container growth-container">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <h2 className="websor-title pt-3">
                Enabling Web Development Company For Exponential Growth
              </h2>
            </div>
            <div className="col-md-5 col-lg-5">
              <p className="webgrowth-para pt-3">
                Mintizon creates new avenues for your business with top of the
                grade web development services.
              </p>
            </div>
          </div>
          <Carousel
            className="web-car"
            animation="fade"
            prevIcon={
              <img
                src="/images/chevron-right-icon.png"
                className="previous-icon"
                alt="Previous"
              />
            }
            nextIcon={
              <img
                src="/images/chevron-left.png"
                className="next-icon"
                alt="Next"
              />
            }
            interval={null}
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
          >
            <Carousel.Item>
              <div className="row">
                <div className="col-lg-3 col-md-3 mt-3">
                  <Card className="carel-card">
                    <h4 className="carel-heading">Save Up to 50%</h4>
                    <p className="carel-para">
                      Minitzon blockchain development company uses blockchain’s
                      distributed ledger technology that allows every member.
                    </p>
                  </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt-3">
                  <Card className="carel-card">
                    <h4 className="carel-heading">Best IT Talents</h4>
                    <p className="carel-para">
                      Minitzon blockchain development company uses blockchain’s
                      distributed ledger technology that allows every member.
                    </p>
                  </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt-3">
                  <Card className="carel-card">
                    <h4 className="carel-heading">Enhance IT Workforce</h4>
                    <p className="carel-para">
                      Minitzon blockchain development company uses blockchain’s
                      distributed ledger technology that allows every member.
                    </p>
                  </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt-3">
                  <Card className="carel-card">
                    <h4 className="carel-heading">30% Higher Productivity</h4>
                    <p className="carel-para">
                      Minitzon blockchain development company uses blockchain’s
                      distributed ledger technology that allows every member.
                    </p>
                  </Card>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-lg-3 col-md-3 mt-3 ">
                  <Card className="carel-card">
                    <h4 className="carel-heading">Save Up to 50%</h4>
                    <p className="carel-para">
                      Minitzon blockchain development company uses blockchain’s
                      distributed ledger technology that allows every member.
                    </p>
                  </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt-3 ">
                  <Card className="carel-card">
                    <h4 className="carel-heading">Best IT Talents</h4>
                    <p className="carel-para">
                      Minitzon blockchain development company uses blockchain’s
                      distributed ledger technology that allows every member.
                    </p>
                  </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt-3 ">
                  <Card className="carel-card">
                    <h4 className="carel-heading">Enhance IT Workforce</h4>
                    <p className="carel-para">
                      Minitzon blockchain development company uses blockchain’s
                      distributed ledger technology that allows every member.
                    </p>
                  </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt-3 ">
                  <Card className="carel-card">
                    <h4 className="carel-heading">30% Higher Productivity</h4>
                    <p className="carel-para">
                      Minitzon blockchain development company uses blockchain’s
                      distributed ledger technology that allows every member.
                    </p>
                  </Card>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-lg-3 col-md-3 mt-3">
                  <Card className="carel-card">
                    <h4 className="carel-heading">Save Up to 50%</h4>
                    <p className="carel-para">
                      Minitzon blockchain development company uses blockchain’s
                      distributed ledger technology that allows every member.
                    </p>
                  </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt-3">
                  <Card className="carel-card">
                    <h4 className="carel-heading">Best IT Talents</h4>
                    <p className="carel-para">
                      Minitzon blockchain development company uses blockchain’s
                      distributed ledger technology that allows every member.
                    </p>
                  </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt-3 ">
                  <Card className="carel-card">
                    <h4 className="carel-heading">Enhance IT Workforce</h4>
                    <p className="carel-para">
                      Minitzon blockchain development company uses blockchain’s
                      distributed ledger technology that allows every member.
                    </p>
                  </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt-3">
                  <Card className="carel-card">
                    <h4 className="carel-heading">30% Higher Productivity</h4>
                    <p className="carel-para">
                      Minitzon blockchain development company uses blockchain’s
                      distributed ledger technology that allows every member.
                    </p>
                  </Card>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <section id="web-destination">
        <div className="container dest-container">
          <div className="dest-top">
            <Stack direction="horizontal" className="hor-new">
              <div className=" badge-kariot-btn">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p> TOP DESTINATION </p>
              </div>
            </Stack>

            <h2 className="new-lnr pt-4 pb-3">
              {"<"} WEB{" "}
              <span className="slash">
                {" "}
                <img
                  src="/images/new-linear.png"
                  className="slasher"
                  alt="Slash-Image"
                />{" "}
              </span>{" "}
              DEVELOPMENT {">"}
            </h2>
            <p className="lnr-para">
              Web app development company in India can be outsourced to help
              businesses unlock their full potential in the marketplace and stay
              competitive.
            </p>
          </div>
          <div className="row source-card-row">
            <div className="col-lg-3 col-md-6">
              <Card className="dest-card mt-3">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <h3 className="dest-card-heading">
                    Grade A Service Available 24/7
                  </h3>
                  <p className="dest-para">
                    Minitzon provides support, assistance and consulting
                    regarding our products and services on all days and at all
                    times. Technical experts, consultants and customer support
                    are always on board and active to help you gain the best
                    from our services.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6">
              <Card className="dest-card mt-3">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <h3 className="dest-card-heading">
                    Well - Trained <br /> Experts
                  </h3>
                  <p className="dest-para">
                    Minitzon provides support, assistance and consulting
                    regarding our products and services on all days and at all
                    times. Technical experts, consultants and customer support
                    are always on board and active to help you gain the best
                    from our services.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6">
              <Card className="dest-card mt-3">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <h3 className="dest-card-heading">
                    Efficient Communications
                  </h3>
                  <p className="dest-para">
                    Minitzon provides support, assistance and consulting
                    regarding our products and services on all days and at all
                    times. Technical experts, consultants and customer support
                    are always on board and active to help you gain the best
                    from our services.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6">
              <Card className="dest-card mt-3">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <h3 className="dest-card-heading">
                    Best Services at Reasonable Cost
                  </h3>
                  <p className="dest-para">
                    Minitzon provides support, assistance and consulting
                    regarding our products and services on all days and at all
                    times. Technical experts, consultants and customer support
                    are always on board and active to help you gain the best
                    from our services.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="web-approach">
        <div className="container approach-container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h3 className="approach-heading">
                Approach to Web Application Development
              </h3>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="approach-para">
                We will take your project through a comprehensive app
                development process that comprises the following phases.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 col-md-6"
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            >
              <Accordion
                defaultActiveKey="0"
                flush
                className=" app-accordion pt-2"
              >
                <Accordion.Item eventKey="0" className=" dev-acc-item pb-3">
                  <Accordion.Header className="dev-acc-header">
                    <img
                      src="/images/bino-icon.png"
                      width={40}
                      height={40}
                      alt="Discovery-Icon"
                    />{" "}
                    <h3 className="dev-app-header ms-2">
                      {" "}
                      Pre-Discovery Phase{" "}
                    </h3>
                  </Accordion.Header>

                  <Accordion.Body
                    style={{ paddingBottom: "0px", paddingTop: "10px" }}
                  >
                    <ul className="accordion-para">
                      <li className="pb-2">
                        Analysis Of The Legislative Environment
                      </li>
                      <li className="pb-2">
                        Assessment of user complaints and the shortcomings of
                        existing services
                      </li>
                      <li className="pb-2">
                        Measurements related to the service
                      </li>
                      <li className="pb-2">Team alignment</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="pb-3">
                  <Accordion.Header>
                    <img
                      src="/images/discoveryicon.png"
                      width={40}
                      height={40}
                      alt="Discovery-Icon"
                    />{" "}
                    <h3 className="dev-app-header ms-2"> Discovery Phase </h3>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{ paddingBottom: "0px", paddingTop: "10px" }}
                  >
                    <ul className="accordion-para">
                      <li className="pb-2">
                        Analysis Of The Legislative Environment
                      </li>
                      <li className="pb-2">
                        Assessment of user complaints and the shortcomings of
                        existing services
                      </li>
                      <li className="pb-2">
                        Measurements related to the service
                      </li>
                      <li className="pb-2">Team alignment</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="pb-3">
                  <Accordion.Header>
                    <img
                      src="/images/designicon.png"
                      width={40}
                      height={40}
                      alt="Design-Icon"
                    />{" "}
                    <h3 className="dev-app-header ms-2"> Design Phase </h3>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{ paddingBottom: "0px", paddingTop: "10px" }}
                  >
                    <ul className="accordion-para">
                      <li className="pb-2">
                        Analysis Of The Legislative Environment
                      </li>
                      <li className="pb-2">
                        Assessment of user complaints and the shortcomings of
                        existing services
                      </li>
                      <li className="pb-2">
                        Measurements related to the service
                      </li>
                      <li className="pb-2">Team alignment</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="pb-3">
                  <Accordion.Header>
                    <img
                      src="/images/gearicon.png"
                      width={40}
                      height={40}
                      alt="Gear-Icon"
                    />{" "}
                    <h3 className="dev-app-header ms-2"> Delivery Phase </h3>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{ paddingBottom: "0px", paddingTop: "10px" }}
                  >
                    <ul className="accordion-para">
                      <li className="pb-2">
                        Analysis Of The Legislative Environment
                      </li>
                      <li className="pb-2">
                        Assessment of user complaints and the shortcomings of
                        existing services
                      </li>
                      <li className="pb-2">
                        Measurements related to the service
                      </li>
                      <li className="pb-2">Team alignment</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="pb-3">
                  <Accordion.Header>
                    <img
                      src="/images/launchicon.png"
                      width={40}
                      height={40}
                      alt="Delployment-icon"
                    />{" "}
                    <h3 className="dev-app-header ms-2">
                      {" "}
                      Launch and Deployment{" "}
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{ paddingBottom: "0px", paddingTop: "10px" }}
                  >
                    <ul className="accordion-para">
                      <li className="pb-2">
                        Analysis Of The Legislative Environment
                      </li>
                      <li className="pb-2">
                        Assessment of user complaints and the shortcomings of
                        existing services
                      </li>
                      <li className="pb-2">
                        Measurements related to the service
                      </li>
                      <li className="pb-2">Team alignment</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section id="WEB-tools">
        <div className="container devtool-container">
          <Stack direction="horizontal" className="mb-3">
            <div className=" badge-abot-btn">
              <img
                src="/images/Rectangle-kariot.png"
                className="me-2"
                alt="design-dot"
              />
              <p> TOOLS WE USE </p>
            </div>
          </Stack>
          <Row>
            <Col lg={7} md={7}>
              <h3 className="tools-heading">
                Web Development Tools & Technology Stack
              </h3>
            </Col>
            <Col lg={5} md={5}>
              <p className="tools-para">
                We offer Custom Blockchain development service with scalable and
                tested technologies to deliver excellence.
              </p>
            </Col>
          </Row>
          <Row className="tool-img-row">
            <Col lg={2} md={2} xs={6} className="pt-4 client-col">
              <Image
                src="/images/tools-image/nodejs-logo-vector.png"
                width={138}
                height={39}
                alt="Nodejs Web Technology Icon"
                className="web-tools-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-4 client-col">
              <Image
                src="/images/tools-image/angularjs.png"
                width={138}
                height={39}
                alt="Angularjs Web Technology Icon"
                className="web-tools-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-4 client-col">
              <Image
                src="/images/tools-image/React_logo.png"
                width={138}
                height={39}
                alt="Reactjs Web Technology Icon"
                className="web-tools-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-4 client-col">
              <Image
                src="/images/tools-image/vuejs-wide.png"
                width={138}
                height={39}
                alt="Vuejs Web Technology Icon"
                className="web-tools-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-4 client-col">
              <Image
                src="/images/tools-image/nextjs.png"
                width={138}
                height={39}
                alt="Nextjs Web Technology Icon"
                className="web-next-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-4 client-col">
              <Image
                src="/images/tools-image/mongodb.png"
                width={147}
                height={45}
                alt="MongoDB Web Technology Icon"
                className="web-mongodb-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-2 client-col">
              <Image
                src="/images/tools-image/postgresql.png"
                width={130}
                height={65}
                alt="Postgressql Web Technology Icon"
                className="web-postgres-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-2 client-col">
              <Image
                src="/images/tools-image/Mysql_logo.png"
                width={130}
                height={65}
                alt="Mysql Web Technology Icon"
                className="web-sql-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-2 client-col">
              <Image
                src="/images/tools-image/RabbitMQ_logo.png"
                width={149}
                height={23}
                alt="RabbitMQ  Web Technology Logo"
                className="web-rabbit-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-2 client-col">
              <Image
                src="/images/tools-image/Redis-Logo.png"
                width={149}
                height={54}
                alt="Redis  Web Technology Logo"
                className="web-redis-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-2 client-col">
              <Image
                src="/images/tools-image/socketio.png"
                width={146}
                height={73}
                alt="Socketio Web Technology Logo"
                className="web-socket-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-2 client-col">
              <Image
                src="/images/tools-image/NET-Framework-Logo.png"
                width={107}
                height={60}
                alt=".NET Web Technology Logo"
                className="web-net-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-2 client-col">
              <Image
                src="/images/tools-image/WordPress-Logo.png"
                width={152}
                height={85}
                alt="Wordpress Web Technology Logo"
                className="web-net-img"
              />
              <hr></hr>
            </Col>
            <Col lg={2} md={2} xs={6} className="pt-2 client-col">
              <Image
                src="/images/tools-image/php-logo.png"
                width={100}
                height={52}
                alt="Php Web Technology Logo"
                className="web-php-img"
              />
              <hr></hr>
            </Col>
          </Row>
        </div>
      </section>

      <section id="web-sec-cta">
        <div className="container">
          <Card className="website-dev-cta my-5">
            <Card.Body>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
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
                  <h2 className="webkcta-heading pt-2">
                    Wanna Develop A Website? <br />
                    Contact Us Now!
                  </h2>
                  <p className="webkcta-para">
                    Reach out to us to identify business challenges and get
                    efficient digital solutions.
                  </p>
                  <Link href="/contact-us" passHref>
                    <button className="portcta-btn mt-3">
                      <FaRegEnvelope className="me-2" /> Get In Touch{" "}
                    </button>
                  </Link>
                </div>
                <div className="col-lg-5 col-md-5">
                  <Image
                    src="/images/web-cta-secondary.webp"
                    width={521}
                    height={557}
                    alt="Web Development Consultant Image "
                    className="webcta-image"
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section id="recent-dev-work">
        <div className="container new-ds">
          <div className="row">
            <Stack direction="horizontal" className="mb-5">
              <div className=" badge-abot-btn">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p> CASE STUDIES </p>
              </div>
            </Stack>
            <div className="col-lg-3 col-md-3">
              <h2 className="case-heading">CASE STUDIES</h2>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="casecarousel-para">
                In <strong> 6 years we have completed </strong> more than{" "}
                <strong>200 individual projects </strong>
                to develop modern{" "}
                <strong> Websites, Web and Mobile Applications </strong> for
                clients from <strong> all over the world.</strong>
              </p>
            </div>
            <div className="col-lg-3 col-md-3">
              <button className="about-btn">
                View All Cases{" "}
                <img src="/images/material-symbols_arrow-right-alt.png" alt="Arrow-Icon"/>
              </button>
            </div>
          </div>
          <CarouselComponent />
        </div>
      </section>

      <section id="client" className="client-section">
        <div className="container mt-5">
          <Stack direction="horizontal" className="mb-5">
            <div className=" badge-abot-btn">
              <img
                src="/images/Rectangle-kariot.png"
                className="me-2"
                alt="design-dot"
              />
              <p> OUR CLIENTS </p>
            </div>
          </Stack>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h4 className="client-block-title">
                We're a Trusted Growth Partner
              </h4>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="clients-block-text">
                At Minitzon, there is continuous learning that happens as we
                work on various projects. We also love to update and upgrade
                with the latest innovations in the field of technology and apps.
              </p>
            </div>
          </div>
          <ClientLogo />
        </div>
      </section>

      <ContactForm />

      <section id="faq">
        <div className="container faq-container">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0" flush className="py-5">
            <Accordion.Item eventKey="0" className="pb-3">
              <Accordion.Header>
                Why Choose Minitzon For Mobile App Development in India?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                  Minitzon mobile app development company in Chennai has a team
                  of experienced developers with an in-depth knowledge of
                  frameworks and mobile technologies. They have the capacity to
                  meet demands on time without compromising on the quality and
                  functionalities. We are a recognised mobile app development
                  company in India for our robust apps and cost-effective
                  services.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="pb-3">
              <Accordion.Header>
                How Much Does It Cost To Build A Mobile App?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                  Minitzon mobile app development company in Chennai has a team
                  of experienced developers with an in-depth knowledge of
                  frameworks and mobile technologies. They have the capacity to
                  meet demands on time without compromising on the quality and
                  functionalities. We are a recognised mobile app development
                  company in India for our robust apps and cost-effective
                  services.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="pb-3">
              <Accordion.Header>
                What Things To Consider When Hiring A Mobile App Development
                Company?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                  Minitzon mobile app development company in Chennai has a team
                  of experienced developers with an in-depth knowledge of
                  frameworks and mobile technologies. They have the capacity to
                  meet demands on time without compromising on the quality and
                  functionalities. We are a recognised mobile app development
                  company in India for our robust apps and cost-effective
                  services.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="pb-3">
              <Accordion.Header>
                Why Should I Choose A Mobile Application Development Company In
                India?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                  Minitzon mobile app development company in Chennai has a team
                  of experienced developers with an in-depth knowledge of
                  frameworks and mobile technologies. They have the capacity to
                  meet demands on time without compromising on the quality and
                  functionalities. We are a recognised mobile app development
                  company in India for our robust apps and cost-effective
                  services.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="pb-3">
              <Accordion.Header>
                How Long Does It Take To Build An App?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                  Minitzon mobile app development company in Chennai has a team
                  of experienced developers with an in-depth knowledge of
                  frameworks and mobile technologies. They have the capacity to
                  meet demands on time without compromising on the quality and
                  functionalities. We are a recognised mobile app development
                  company in India for our robust apps and cost-effective
                  services.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      <ContactModal title="Need A Website To Digitialize Your Business?" />
      <Footer />
    </>
  );
}
