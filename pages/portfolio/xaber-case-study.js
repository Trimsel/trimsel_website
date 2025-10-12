import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";
import Link from "next/link";
import Footer from "../../components/footer";
import Stack from "react-bootstrap/Stack";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import SlideComponent from "../../components/slideComponent";
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";
import { NextSeo } from 'next-seo';
import { postJson } from "../../lib/api";

export default function Xaber() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(values) {
    try {
      await postJson("/api/newcontact", values);
      console.log("Contact request sent");
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  }

  const [counterOn, setCounterOn] = useState(false);

  const slides = [0, 1, 2];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <NextSeo
  title="Xaber Case Study – Ride-hailing App (Uber-like) | Trimsel"
  description="How Trimsel built Xaber, a multi-platform ride-hailing solution with web, iOS, Android and desktop apps—covering booking, growth automation, and scale."
  canonical="https://www.trimsel.com/portfolio/xaber-case-study"
  openGraph={{
    type: "article",
    url: "https://www.trimsel.com/portfolio/xaber-case-study",
    title: "Xaber Case Study – Ride-hailing App (Uber-like) | Trimsel",
    description:
      "Multi-platform Uber-like taxi booking solution built by Trimsel with growth-focused UX and scalable architecture.",
    images: [
      {
        url: "https://www.trimsel.com/images/portfolio/xaber-og.jpg", // update if your OG image differs
        width: 1200,
        height: 630,
        alt: "Xaber case study cover",
      },
    ],
    site_name: "Trimsel",
  }}
  twitter={{
    handle: "@TrimselSoftwares",
    site: "@TrimselSoftwares",
    cardType: "summary_large_image",
  }}
  additionalMetaTags={[
    { name: "robots", content: "index, follow" }
  ]}
  additionalJsonLd={[
    // CaseStudy entity
    {
      "@context": "https://schema.org",
      "@type": "CaseStudy",
      "@id": "https://www.trimsel.com/portfolio/xaber-case-study#case",
      "name": "Xaber Case Study – Ride-hailing App",
      "headline": "Xaber Case Study – Ride-hailing App",
      "description": "How Trimsel built Xaber, a multi-platform Uber-like taxi booking solution with web, iOS, Android and desktop apps—covering booking, growth automation, and scale.",
      "inLanguage": "en",
      "url": "https://www.trimsel.com/portfolio/xaber-case-study",
      "isPartOf": { "@type": "WebSite", "@id": "https://www.trimsel.com/#website" },
      "about": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      "author": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      "publisher": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.trimsel.com/images/portfolio/xaber-og.jpg",
        "width": 1200,
        "height": 630
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.trimsel.com/images/portfolio/xaber-og.jpg",
        "width": 1200,
        "height": 630
      }
      // Optional if you display it on-page:
      // "datePublished": "2024-10-05",
      // "dateModified": "2025-08-21",
      // "keywords": ["ride-hailing","Uber clone","mobile apps","web app","Trimsel"]
    },
    // Breadcrumbs
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.trimsel.com/portfolio/xaber-case-study#breadcrumbs",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trimsel.com/" },
        { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.trimsel.com/portfolio" },
        { "@type": "ListItem", "position": 3, "name": "Xaber Case Study", "item": "https://www.trimsel.com/portfolio/xaber-case-study" }
      ]
    }
  ]}
/>
      <section id="xaber-hero">
        <Header />
        <div className="container xaber-container">
          <div id="app">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="titles">
                  <div className="titles-inner">
                    <div className="cafes">
                      <div className="cafes-inner mb-2">
                        <ol className="bread d-flex align-items-center">
                          <li className="case-breadcrumb">
                            <a href="/">Home</a>
                          </li>
                          <li className="case-dot">&middot;</li>
                          <li className="cases-breadcrumb">
                            <a href="/portfolio">Portfolio</a>
                          </li>
                          <li className="case-dot">&middot;</li>
                          <li className="active-bread">Xaber</li>
                        </ol>
                      </div>
                    </div>
                    <div className="cafes">
                      <div className="cafes-inner mb-2">
                        <img
                          src="/trimsel-clients/xaber-logo.png"
                          width={211}
                          height={58}
                        />
                      </div>
                    </div>
                    <div className="cafes">
                      <div className="cafes-inner mb-4">
                        <Stack
                          direction="horizontal"
                          gap={3}
                          className="xaber-stack"
                        >
                          <div className="chip chip-lg badge-btn">
                            IOS & ANDROID
                          </div>
                          <div className="chip chip-lg badge-btn">WEB</div>
                          <div className="chip chip-lg badge-btn">DESKTOP</div>
                        </Stack>
                      </div>
                    </div>
                    <div className="cafes">
                      <div className="cafes-inner">
                        <h1 className="heading-title">
                          {" "}
                          Uber Clone: Online Taxi-Booking For Your Business
                          Success{" "}
                        </h1>
                      </div>
                    </div>
                    <div className="mozarts">
                      <div className="mozarts-inner">
                        <p className="hero-para">
                          If you want to take your taxi business digital, go for
                          Uber like app development by partnering with us
                        </p>
                      </div>
                    </div>
                    <div className="mozarts">
                      <div className="mozarts-inner">
                        <button className="btn btn-primary case-study-btn">
                          Get Started Today{" "}
                          <img src="/images/material-symbols_arrow-right-alt.png" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="xaber-about">
        <div className="container xaber-about-container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <Stack direction="horizontal">
                <div className=" badge-xaber-btn">
                  <img src="/images/Rectangle550.png" className="me-2" />{" "}
                  OVERVIEW
                </div>
              </Stack>
              <h2 className="xaber-title pt-3">
                Xaber – Uber Clone App That Automates and Drives Growth for
                Businesses
              </h2>
              <p className="xaber-abt-para pb-3">
                Uber clone is an on-demand taxi booking software that helps
                expand business reach by providing taxi services to customers
                anytime. Any services like taxi booking, carpooling, taxi
                renting, car sharing, etc., are all managed within the platform.
              </p>
              <p className="xaber-abt-para pb-3">
                If you are an entrepreneur or business owner and wish to start
                your ride-hailing business online, we provide a white label Uber
                clone app solution for any range of businesses.
              </p>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className=" card card-sub">
                <div className="card-sub-details">
                  <h5 className="pb-3">START YOUR PROJECT</h5>
                  <h2>Interested in building something similar?</h2>
                  <p>
                    Request a one to one consultation for your next big
                    idea.
                  </p>
                  <form id="home-form" onSubmit={handleSubmit(onSubmitForm)}>
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
                        className="form-control sub-form"
                        placeholder="Enter Email Address"
                      />
                      <span className="error-design pt-3">
                        {errors?.email?.message}
                        {errors?.email?.pattern?.message}
                      </span>
                    </div>
                    <input
                      type="submit"
                      className="sub-btn my-3"
                      value="Book A Consultation"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row xaber-details-row">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="line-section">
                <h3>Client :</h3>
                <p>Xaber - Uber Clone</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="line-section">
                <h3>Industry :</h3>
                <p>Services, Local Business</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="line-section">
                <h3>Duration :</h3>
                <p>3 months</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="line-section">
                <h3>Platforms :</h3>
                <p>iOS, Android, Web & Desktop</p>
              </div>
            </div>
          </div>
          <div className=" xaber-counter">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 xaber-border-col">
                  <div className="card xaber-counter-card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3 className="outline-text">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={30}
                              duration={2}
                              delay={0}
                            />
                          )}
                          <span>K + </span>
                        </h3>
                        <h4 className="static-text">Downloads</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="card xaber-counter-card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3 className="outlines-text">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={10}
                              duration={2}
                              delay={0}
                            />
                          )}
                          <span>K + </span>
                        </h3>
                        <h4 className="static-text">Active Users</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="card xaber-counter-card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3 className="outliness-text">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={590}
                              duration={2}
                              delay={0}
                            />
                          )}
                          <span> + </span>
                        </h3>
                        <h4 className="static-text">Request A Ride</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </section>
      <section id="xaber-about">
        <SlideComponent />
      </section>
      <section id="xaber-challenge">
        <div className="container challenge-container">
          <div className="row mbl-abt">
            <div className="col-lg-10 col-md-9">
              <Stack direction="horizontal">
                <div className=" badge-xaber-btn">
                  <img src="/images/Rectangle550.png" className="me-2" /> THE
                  CHALLENGE
                </div>
              </Stack>
              <h2 className="challenge-heading pt-4">
                Xaber - Uber Clone App That Automates And Drives Growth For
                Businesses
              </h2>
              <p className="challenge-para">
                If you want to take your taxi business digital, go for Uber like
                app development by partnering with us. We have integrated the
                top features and user experiences from every successful taxi
                booking app in the market. Our expert team of developers will
                customize and follow a proven Uber clone app development
                process. This will let you differentiate it from the competition
                while keeping it easy to use for your customers and unique to
                you to ensure success for your business.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center overlay-images align-content-center">
          <Image
            src="/images/Group25321.png"
            width={900}
            height={474}
            alt="xaber app dashboard"
          />
        </div>
      </section>
      <section id="xaber-prob">
        <div className="container prob-container">
          <Stack direction="horizontal">
            <div className=" badge-xaber-btn">
              <img src="/images/Rectangle550.png" className="me-2" /> THE
              CHALLENGE
            </div>
          </Stack>
          <h2 className="prob-heading pt-4">
            Uber Clone For Your Ride-hailing Business Success
          </h2>
          <p className="prob-para">
            If you want to take your taxi business digital, go for Uber like app
            development by partnering with us. We have integrated the top
            features and user experiences from every successful taxi booking app
            in the market. Our expert team of developers will customize and
            follow a proven Uber clone app development process. This will let
            you differentiate it from the competition while keeping it easy to
            use for your customers and unique to you to ensure success for your
            business.
          </p>
        </div>
      </section>
      <section id="xaber-solution">
        <div className="container sol-container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <Stack direction="horizontal">
                <div className=" badge-xaber-btn">
                  <img src="/images/Rectangle550.png" className="me-2" /> THE
                  SOLUTION
                </div>
              </Stack>
              <h3 className="sol-heading pt-4">
                Uber Clone For Your Ride-Hailing Business Success
              </h3>
              <p className="sol-para">
                If you want to take your taxi business digital, go for Uber like
                app development by partnering with us. We have integrated the
                top features and user experiences from every successful taxi
                booking app in the market. Our expert team of developers will
                customize and follow a proven Uber clone app development
                process. This will let you differentiate it from the competition
                while keeping it easy to use for your customers and unique to
                you to ensure success for your business.
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <Image
                src="/images/Group25331.png"
                width={662}
                height={603}
                className="sol-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="xaber-tech">
        <div className="container tech-container mb-5">
          <Stack direction="horizontal">
            <div className=" badge-xaber-btn">
              <img src="/images/Rectangle550.png" className="me-2" /> THE
              SOLUTION
            </div>
          </Stack>
          <h3 className="tech-heading pt-5">Tools And Technology</h3>
          <div className="row pt-4">
            <div className="col-lg-7 col-md-8">
              <h5 className="tech-sub py-3">Development</h5>
              <div className="tech-img-container">
                <Image
                  src="/images/flutter.png"
                  alt="Fluttermobile-app-development-image"
                  width={216}
                  height={84}
                  className="me-2 mb-2 mbl-design"
                />
                <Image
                  src="/images/react-native.png"
                  alt="React-native mobile-app-development-image"
                  width={216}
                  height={84}
                  className="me-2 mb-2 mbl-design"
                />
                <Image
                  src="/images/native.png"
                  alt="Nativescript mobile-app-development-image"
                  width={185}
                  height={84}
                  className="me-2 mb-2 native-img mbl-design"
                />
                <Image
                  src="/images/js.png"
                  alt="Javascript mobile-app-development-image"
                  width={216}
                  height={84}
                  className="me-2 mb-2 mbl-design"
                />
                <Image
                  src="/images/c++.png"
                  alt="C++-mobile-app-development-image"
                  width={216}
                  height={84}
                  className="me-2 mb-2 mbl-design"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <h5 className="tech-sub py-3">Design</h5>
              <div className="tech-img-container">
                <Image
                  src="/images/photoshop.png"
                  alt="photoshop"
                  width={216}
                  height={84}
                  className="me-2 mb-2 mbl-design"
                />
                <Image
                  src="/images/figma.png"
                  alt="figma"
                  width={216}
                  height={84}
                  className="me-2 mb-2 mbl-design"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="xaber-carousel my-5 py-5">
        <div className="carousel-container">
          <Carousel
            className="xaber-car"
            animation="fade"
            prevIcon={
              <img
                src="/images/prev1.png"
                className="full-img-previous"
                alt="Previous"
              />
            }
            nextIcon={
              <img
                src="/images/next1.png"
                className="full-img-next"
                alt="Next"
              />
            }
            interval={null}
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
          >
            <Carousel.Item>
              <img src="/images/Frame2.png" className="carousel-image" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/Frame2.png" className="carousel-image" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/Frame2.png" className="carousel-image" />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <section className="xabe-cta">
        <div className="container">
          <Card className="xaber-cta my-5">
            <Card.Body className="mbl-card-body">
              <div className="row">
                <div className="col-lg-7 col-md-12 col-12 xaber-card-col">
                  <Stack direction="horizontal">
                    <div className=" badge-xaber-btn">
                      <img src="/images/Rectangle550.png" className="me-2" />{" "}
                      GET IN TOUCH
                    </div>
                  </Stack>
                  <h2 className="mblcta-heading pt-2">
                    Wanna Develop a Mobile Application? Contact us Now!
                  </h2>
                  <Link href="/contact-us" passHref>
                    <button className="xabercta-button btn-lg btn-info mt-3">
                      Get In Touch{" "}
                      <span className="icon">
                        {" "}
                        <img
                          src="/images/iconorange.png"
                          alt="arrow-icon"
                        />{" "}
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section className="xaber-case">
        <div className="container case-container">
          <Stack direction="horizontal">
            <div className=" badge-xaber-btn">
              <img src="/images/Rectangle550.png" className="me-2" /> GET IN
              TOUCH
            </div>
          </Stack>
          <h2 className="casex-heading pt-4">
            Read About The Challenges We Faced and How We Helped Our Clients
            Achieve Their Goals.
          </h2>
          <div className="row py-5">
            <div className="col-lg-6 col-md-6">
              <Card className="case-carousel-card">
                <Card.Header className="case-carousel-header">
                  <img src="/images/Group3001.png" />
                </Card.Header>
                <Card.Body className="case-carousel-body">
                  <h3 className="case-carousel-heading">Ezyhelpers</h3>
                  <p className="case-carousel-para justify-content-center">
                    Quisque a pretium nulla, at porttitor eros. Mauris pharetra
                    nisl sit amet mauris efficitur malesuada.
                  </p>
                  <Link className="case-carousel-link" href="#">
                    Read Case Study <FaLongArrowAltRight />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-md-6">
              <Card className="case-carousel-card">
                <Card.Header className="case-carousel-header">
                  <img src="/images/kariot-case.png" />
                </Card.Header>
                <Card.Body className="case-carousel-body">
                  <h3 className="case-carousel-heading">KarIOT</h3>
                  <p className="case-carousel-para justify-content-center">
                    Quisque a pretium nulla, at porttitor eros. Mauris pharetra
                    nisl sit amet mauris efficitur malesuada.
                  </p>
                  <Link
                    className="case-carousel-link"
                    href="/portfolio/kariot-case-study"
                  >
                    Read Case Study <FaLongArrowAltRight />
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
