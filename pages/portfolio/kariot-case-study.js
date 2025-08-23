import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import Stack from "react-bootstrap/Stack";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";
import { NextSeo } from "next-seo";

export default function Kariot() {
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

  const [counterOn, setCounterOn] = useState(false);

  const slides = [0, 1, 2];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
  <NextSeo
  title="KarIOT Case Study – Smart IoT Water Management | Trimsel"
  description="See how Trimsel enabled KarIOT to deliver real-time water management and sustainability through IoT, cloud, and automation for cities and industry."
  canonical="https://www.trimsel.com/portfolio/kariot-case-study"
  openGraph={{
    type: "article",
    url: "https://www.trimsel.com/portfolio/kariot-case-study",
    title: "KarIOT Case Study – Smart IoT Water Management | Trimsel",
    description:
      "See how Trimsel enabled KarIOT to deliver real-time water management and sustainability through IoT, cloud, and automation for cities and industry.",
    images: [
      {
        url: "https://www.trimsel.com/images/portfolio/kariot-og.jpg",
        width: 1200,
        height: 630,
        alt: "KarIOT Portfolio",
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
    {
      "@context": "https://schema.org",
      "@type": "CaseStudy",
      "@id": "https://www.trimsel.com/portfolio/kariot-case-study#case",
      "name": "KarIOT Case Study – Smart IoT Water Management",
      "headline": "KarIOT Case Study – Smart IoT Water Management",
      "description": "Trimsel developed KarIOT, an IoT-based platform for smart water management with real-time monitoring, automation, and cloud scalability for sustainable cities and industries.",
      "inLanguage": "en",
      "url": "https://www.trimsel.com/portfolio/kariot-case-study",
      "isPartOf": { "@type": "WebSite", "@id": "https://www.trimsel.com/#website" },
      "about": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      "author": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      "publisher": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.trimsel.com/images/portfolio/kariot-og.jpg",
        "width": 1200,
        "height": 630
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.trimsel.com/images/portfolio/kariot-og.jpg",
        "width": 1200,
        "height": 630
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.trimsel.com/portfolio/kariot-case-study#breadcrumbs",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trimsel.com/" },
        { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.trimsel.com/portfolio" },
        { "@type": "ListItem", "position": 3, "name": "KarIOT Case Study", "item": "https://www.trimsel.com/portfolio/kariot-case-study" }
      ]
    }
  ]}
/>
      <main>
        {/* HERO SECTION */}
        <section className="kar-hero">
          <Header />
          <section className="hero-kar">
            <div className="container pt-3">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="title">
                    <div className="title-inner">
                      <div className="cafe">
                        <div className="whiteLink">
                          <p className="breadcrumbs-kar">
                            <Link href="/">Home</Link> <span> &#x2027; </span>{" "}
                            <Link href="/portfolio">Portfolio</Link>{" "}
                            <span> &#x2027; </span> KarIOT
                          </p>
                        </div>
                      </div>
                      <div className="cafe">
                        <div className="cafe-inner mb-2">
                          <Image
                            src="/images/kariot-logo.png"
                            width={130}
                            height={62}
                            alt="kariot-logo"
                          />
                        </div>
                      </div>
                      <div className="cafe">
                        <div className="cafe-inner news-title">
                          KarIOT: IoT-Enabled Smart Water Management
                        </div>
                      </div>
                      <div className="mozart">
                        <div className="mozart-inner">
                          <p className="kar-para">
                            KarIOT is an advanced IoT and cloud platform that enables cities, industries, and property owners to monitor, control, and optimize water usage in real time. The system combines wireless sensors, cloud analytics, and user-friendly dashboards to reduce leaks, lower operational costs, and support water sustainability goals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="imgrs">
                    <img
                      src="/images/kariot-hero.png"
                      className="kar-hero-img"
                      alt="Kariot-App-Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* ABOUT / OVERVIEW */}
        <section id="kariot-about">
          <div className="container xaber-about-container">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <Stack direction="horizontal">
                  <div className=" badge-kariot-btn">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> OVERVIEW </p>
                  </div>
                </Stack>
                <h2 className="kariot-title pt-3">
                  Enabling Data-Driven, Sustainable Water Management with IoT
                </h2>
                <p className="kariot-abt-para pb-3">
                  The KarIOT platform empowers government agencies, commercial buildings, and communities to remotely track water supply, detect anomalies, and automate control of valves and pumps. By providing actionable insights through mobile and web dashboards, KarIOT helps users cut water waste, improve reporting, and support compliance and sustainability.
                </p>
                <p>
                  Interested in similar digital transformation? Learn more about our <Link href="/cloud-consulting-services">cloud solutions</Link>, <Link href="/devops-consulting-services">DevOps consulting</Link>, and <Link href="/contact-us">contact us</Link> for a strategy session.
                </p>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className=" card card-subs">
                  <div className="card-subs-details">
                    <h5 className="pb-3">START YOUR PROJECT</h5>
                    <h2>Interested in building something similar?</h2>
                    <p>
                      Request a one to one consultation for your next big idea.
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
                          className="form-control subs-form"
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
                        value="Book A  Consultation"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row xaber-details-row">
              <div className="col-lg-3 col-md-3 col-6">
                <div className="lines-section">
                  <h3>Client :</h3>
                  <p>Karikala (KarIOT)</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="lines-section">
                  <h3>Industry :</h3>
                  <p>Smart Water, IoT, Sustainability</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="lines-section">
                  <h3>Duration :</h3>
                  <p>6 months</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="lines-section">
                  <h3>Platforms :</h3>
                  <p>IoT, iOS, Android, Web</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTERS */}
        <div className=" xaber-counter">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="row">
              <div className="col-lg-4 col-md-4 xaber-border-col">
                <div className="card kariot-counter-card">
                  <div className="card-body card-body-bg">
                    <div className="card-title">
                      <h3 className="filled-text">
                        {counterOn && (
                          <CountUp start={0} end={100} duration={2} delay={0} />
                        )}
                        <span>+</span>
                      </h3>
                      <h4 className="static-text">Sites Deployed</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card kariot-counter-card">
                  <div className="card-body card-body-bg">
                    <div className="card-title">
                      <h3 className="filleds-text">
                        {counterOn && (
                          <CountUp start={0} end={5} duration={2} delay={0} />
                        )}
                        <span>Cr+ </span>
                      </h3>
                      <h4 className="static-text">Litres Managed</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card kariot-counter-card">
                  <div className="card-body card-body-bg">
                    <div className="card-title">
                      <h3 className="filledss-text">
                        {counterOn && (
                          <CountUp start={0} end={200} duration={2} delay={0} />
                        )}
                        <span>+</span>
                      </h3>
                      <h4 className="static-text">Clients Impacted</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>

        {/* CHALLENGE */}
        <section id="kariot-challenge">
          <div className="container kar-challenge-container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <Stack direction="horizontal">
                  <div className=" badge-kariot-btn">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> THE CHALLENGE </p>
                  </div>
                </Stack>
                <h3 className="chall-title pt-4">
                  The Challenge: Manual Systems & Water Waste
                </h3>
                <p className="chall-para pt-2">
                  Before KarIOT, water supply management relied on manual readings, reactive maintenance, and limited transparency—leading to leaks, wastage, and high costs. Our client needed a scalable, real-time solution for monitoring, analytics, and automated control.
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <Image
                  src="/images/kariot-challenge.png"
                  width={550}
                  height={448}
                  className="mt-5 mbl-chall"
                  alt="Kariot-challenges-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section id="kariot-solution">
          <div className="container sol-container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <Stack direction="horizontal">
                  <div className=" badge-kariot-btn">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> THE SOLUTION </p>
                  </div>
                </Stack>
                <h3 className="solt-title pt-4">
                  Our Solution: Scalable IoT & Cloud Automation
                </h3>
                <p className="chall-para pt-2">
                  Working with the KarIOT team, Trimsel architected and deployed a cloud-native solution that collects live data from IoT sensors, automates water control systems, and provides user-friendly dashboards for administrators. Our <Link href="/devops-consulting-services">DevOps</Link> and <Link href="/cloud-consulting-services">cloud automation</Link> expertise ensures high uptime, fast deployments, and secure, scalable operations.
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <Image
                  src="/images/kar-solution.png"
                  width={480}
                  height={470}
                  className="solt-image"
                  alt="Kariot-solution-image-preview"
                />
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="kariot-results">
          <div className="container sol-container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <Stack direction="horizontal">
                  <div className=" badge-kariot-btn">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> RESULTS </p>
                  </div>
                </Stack>
                <h3 className="solt-title pt-4">
                  Results: Measurable Savings & Impact
                </h3>
                <p className="chall-para pt-2">
                  With KarIOT, customers now enjoy real-time visibility, proactive alerts for leaks or supply issues, and automated regulatory reports. The platform has been adopted by government and private sector clients, reducing water waste and operational costs while supporting compliance and sustainability.
                </p>
                <p>
                  Want to discuss your IoT or digital transformation challenge? <Link href="/contact-us">Contact our team today.</Link>
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <Image
                  src="/images/kariot-hero.png"
                  width={550}
                  height={448}
                  className="mt-5 mbl-chall"
                  alt="Kariot-results-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="kariot-tech">
          <div className="container tech-container mb-5">
            <Stack direction="horizontal">
              <div className=" badge-kariot-btn">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p> TECHNOLOGY</p>
              </div>
            </Stack>
            <h3 className="tech-kariot-heading pt-5">Tools And Technology</h3>
            <div className="row pt-4">
              <div className="col-lg-7 col-md-8">
                <h5 className="tech-kariot-sub py-3">Development</h5>
                <div className="tech-img-container">
                  <Image
                    src="/images/iot-logo.png"
                    alt="IoT sensors"
                    width={120}
                    height={70}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/aws-logo.png"
                    alt="AWS cloud hosting"
                    width={120}
                    height={70}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/nodejs-logo.png"
                    alt="Node.js backend"
                    width={120}
                    height={70}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/react-native.png"
                    alt="React Native dashboard"
                    width={120}
                    height={70}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/postgresql-logo.png"
                    alt="PostgreSQL database"
                    width={120}
                    height={70}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/devops-logo.png"
                    alt="DevOps automation"
                    width={120}
                    height={70}
                    className="me-2 mb-2 mbl-design"
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-4">
                <h5 className="tech-kariot-sub py-3">Design & Cloud</h5>
                <div className="tech-img-container">
                  <Image
                    src="/images/figma.png"
                    alt="Figma design"
                    width={120}
                    height={70}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/photoshop.png"
                    alt="Photoshop design"
                    width={120}
                    height={70}
                    className="me-2 mb-2 mbl-design"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCREENSHOTS/CAROUSEL */}
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
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <img
                      src="/images/kariot-dashboard1.png"
                      className="case-carousel-img"
                      alt="KarIOT Dashboard Screenshot"
                    />
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <img
                      src="/images/kariot-dashboard2.png"
                      className="case-carousel-img"
                      alt="KarIOT Admin Panel Screenshot"
                    />
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <img
                      src="/images/kariot-dashboard3.png"
                      className="case-carousel-img"
                      alt="KarIOT Mobile Screenshot"
                    />
                  </div>
                </div>
              </Carousel.Item>
              {/* Add more Carousel.Items if you want more screenshots */}
            </Carousel>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="xabe-cta">
          <div className="container">
            <Card className="ezy-cta my-5">
              <Card.Body className="mbl-card-body">
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-12 xaber-card-col">
                    <h2 className="ezycta-heading pt-2">
                      Ready to start your IoT or cloud transformation journey?
                    </h2>
                    <Link href="/contact-us">
                      <button className="karcta-button btn-lg btn-info mt-3">
                        Get In Touch{" "}
                        <span className="icon">
                          {" "}
                          <img
                            src="/images/arrowiconblue.png"
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

        {/* RELATED CASE STUDIES */}
        <section id="kariot-case-carousel">
          <div className="container kariot-case-container">
            <Stack direction="horizontal">
              <div className=" badge-kariot-btn">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p> RELATED CASE STUDIES</p>
              </div>
            </Stack>
            <h2 className="case-kariot-heading pt-4">
              Read About More Digital Success Stories
            </h2>
            <Carousel
              className="case-carousel"
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
              interval={null}
              controls={false}
            >
              <Carousel.Item>
                <div className="row py-5">
                  <div className="col-lg-6 col-md-6">
                    <Card className="case-carousel-card">
                      <Card.Header className="case-carousel-header">
                        <img src="/images/Group3001.png" />
                      </Card.Header>
                      <Card.Body className="case-carousel-body">
                        <h3 className="case-carousel-heading">Ezyhelpers</h3>
                        <p className="case-carousel-para justify-content-center">
                          Mobile/web platform for booking verified home service professionals.
                        </p>
                        <Link className="case-carousel-link" href="/portfolio/ezyhelpers-case-study" passHref>
                          Read Case Study <FaLongArrowAltRight />
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Card className="case-carousel-card">
                      <Card.Header className="case-carousel-header">
                        <img src="/images/Group3002.png" />
                      </Card.Header>
                      <Card.Body className="case-carousel-body">
                        <h3 className="case-carousel-heading">Xaber</h3>
                        <p className="case-carousel-para justify-content-center">
                          Ride-hailing platform inspired by Uber for scalable taxi business operations.
                        </p>
                        <Link className="case-carousel-link" href="/portfolio/xaber-case-study" passHref>
                          Read Case Study <FaLongArrowAltRight />
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              {/* Add another item for Mocial, etc. */}
            </Carousel>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
