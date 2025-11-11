import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Stack from "react-bootstrap/Stack";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";
import { NextSeo } from 'next-seo';
import { postJson } from "../../lib/api";

export default function Ezyhelpers() {
  const slides = [0, 1, 2];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [counterOn, setCounterOn] = useState(false);
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
  return (
    <>
      <NextSeo
  title="Ezyhelpers Case Study – Home Services App | Trimsel"
  description="See how Trimsel built Ezyhelpers, an AWS-hosted mobile and web platform for booking trusted home service professionals, using ReactJS, Flutter, NodeJS, and DevOps automation."
  canonical="https://www.trimsel.com/portfolio/ezyhelpers-case-study"
  openGraph={{
    type: "article",
    url: "https://www.trimsel.com/portfolio/ezyhelpers-case-study",
    title: "Ezyhelpers Case Study – Home Services App | Trimsel",
    description:
      "See how Trimsel built Ezyhelpers, an AWS-hosted mobile and web platform for booking trusted home service professionals, using ReactJS, Flutter, NodeJS, and DevOps automation.",
    locale: "en_IN",
    images: [
      {
        url: "https://www.trimsel.com/images/portfolio/ezyhelpers-og.jpg",
        width: 1200,
        height: 630,
        alt: "Trimsel Ezyhelpers mobile and web platform case study",
      },
    ],
    site_name: "Trimsel",
    article: {
      section: "Case Study",
      tags: [
        "Case Study",
        "Home Services",
        "Mobile App",
        "AWS",
        "Trimsel",
      ],
    },
  }}
  twitter={{
    handle: "@TrimselSoftwares",
    site: "@TrimselSoftwares",
    cardType: "summary_large_image",
    title: "Case Study: Ezyhelpers Home Services Platform",
    description:
      "Learn how Trimsel delivered the Ezyhelpers mobile and web platform with AWS, Flutter, and NodeJS.",
  }}
  additionalMetaTags={[
    { name: "robots", content: "index, follow" },
    {
      name: "twitter:title",
      content: "Case Study: Ezyhelpers Home Services Platform",
    },
    {
      name: "twitter:description",
      content:
        "How Trimsel delivered the Ezyhelpers on-demand home services platform across mobile and web.",
    },
    {
      name: "twitter:image:alt",
      content: "Trimsel Ezyhelpers home services case study",
    },
  ]}
/>
      <Head>
        {[
    {
      "@context": "https://schema.org",
      "@type": "CaseStudy",
      "@id": "https://www.trimsel.com/portfolio/ezyhelpers-case-study#case",
      "name": "Ezyhelpers Case Study – Home Services App",
      "headline": "Ezyhelpers Case Study – Home Services App",
      "description": "Trimsel developed Ezyhelpers, a cloud-hosted mobile and web platform for booking trusted home service professionals, using ReactJS, Flutter, NodeJS, and DevOps automation.",
      "inLanguage": "en",
      "url": "https://www.trimsel.com/portfolio/ezyhelpers-case-study",
      "isPartOf": { "@type": "WebSite", "@id": "https://www.trimsel.com/#website" },
      "about": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      "author": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      "publisher": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.trimsel.com/images/portfolio/ezyhelpers-og.jpg",
        "width": 1200,
        "height": 630
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.trimsel.com/images/portfolio/ezyhelpers-og.jpg",
        "width": 1200,
        "height": 630
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.trimsel.com/portfolio/ezyhelpers-case-study#breadcrumbs",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trimsel.com/" },
        { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.trimsel.com/portfolio" },
        { "@type": "ListItem", "position": 3, "name": "Ezyhelpers Case Study", "item": "https://www.trimsel.com/portfolio/ezyhelpers-case-study" }
      ]
    }
  ].map((schema, index) => (
          <script
            key={`ezyhelpers-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <main>
        <section id="ezy-section">
          <Header />
          <section id="ezy-hero">
            <div className="container pt-3">
              <div className="row">
                <div className="col-lg-7 col-md-7">
                  <div className="title">
                    <div className="title-inner">
                      <div className="cafe">
                        <div className="whiteLink">
                          <p className="breadcrumbs-kar">
                            <Link href="/">Home</Link> <span> &#x2027; </span>{" "}
                            <Link href="/portfolio">Portfolio</Link>{" "}
                            <span> &#x2027; </span> Ezyhelpers
                          </p>
                        </div>
                      </div>
                      <div className="cafe">
                        <div className="cafe-inner mb-2">
                          <Image
                            src="/trimsel-clients/ezyhelpers-logo.png"
                            width={224}
                            height={64}
                            alt="Ezyhelpers-logo"
                          />
                        </div>
                      </div>
                      <div className="cafe">
                        <div className="cafe-inner news-title">
                          Home Service and House Work Application
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 ezy-col">
                  <div className="imgrs">
                    <p className="ezy-hero-para">
                      Ezyheper is a digital marketplace connecting users with trusted, verified home service professionals for elder care, cleaning, cooking, and much more—right from their phone or desktop.
                    </p>
                  </div>
                </div>
              </div>
              <div className="imgrs next-imgrs">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <div className="row">
                    <div className="col-lg-3 col-md-3 xaber-border-col">
                      <div className="card kariot-counter-card">
                        <div className="card-body card-body-bg">
                          <div className="card-title">
                            <h3 className="ezycount-text">
                              {counterOn && (
                                <CountUp start={0} end={30} duration={2} delay={0} />
                              )}
                              <span>K + </span>
                            </h3>
                            <h4 className="static-text">Downloads</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="card kariot-counter-card">
                        <div className="card-body card-body-bg">
                          <div className="card-title">
                            <h3 className="ezycount1-text">
                              {counterOn && (
                                <CountUp start={0} end={10} duration={2} delay={0} />
                              )}
                              <span>K + </span>
                            </h3>
                            <h4 className="static-text">Active Users</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="card kariot-counter-card">
                        <div className="card-body card-body-bg">
                          <div className="card-title">
                            <h3 className="ezycount2-text">
                              {counterOn && (
                                <CountUp start={0} end={590} duration={2} delay={0} />
                              )}
                              <span> + </span>
                            </h3>
                            <h4 className="static-text">Booking Completed</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="card kariot-counter-card">
                        <div className="card-body card-body-bg">
                          <div className="card-title">
                            <h3 className="ezycount3-text">
                              {counterOn && (
                                <CountUp start={0} end={300} duration={2} delay={0} />
                              )}
                              <span> + </span>
                            </h3>
                            <h4 className="static-text">Trained Professionals</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollTrigger>
              </div>
            </div>
          </section>
        </section>

        <section id="pre-image">
          <Image
            src="/images/ezy-med.png"
            width={1349}
            height={617}
            alt="Ezyhelpers Mobile App Images"
            className="ezy-pre-image"
          />
        </section>

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
                  One Platform for All Your Home Service Needs
                </h2>
                <p className="kariot-abt-para pb-3">
                  Ezyhelpers is India’s all-in-one platform for home services—offering cleaning, elder care, cooking, sanitization, and more, with background-checked professionals and transparent pricing. The intuitive mobile and web apps enable users to discover, book, and manage services quickly and easily, while helping service professionals access new opportunities.
                </p>
                <p>
                  Interested in a similar project? See our <Link href="/mobile-app-development-chennai">Mobile App Development</Link>, <Link href="/web-development-company-chennai">Web Development</Link>, and <Link href="/devops-consulting-services">DevOps Consulting</Link> services.
                </p>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className=" card card-ezy">
                  <div className="card-subs-details">
                    <h5 className="pb-3 whiteLink">START YOUR PROJECT</h5>
                    <h2 className="whiteLink">
                      Interested in building something similar?
                    </h2>
                    <p className="whiteLink">
                      Request a one to one consultation for your next big idea.
                    </p>
                    <form id="home-form" onSubmit={handleSubmit(onSubmitForm)}>
                      <div className="md-form">
                        <input
                          {...register("email", {
                            required: { value: true, message: "Email id is required" },
                            pattern: {
                              value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
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
                  <p>Ezyhelpers</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="lines-section">
                  <h3>Industry :</h3>
                  <p>Home Services, Local Business</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="lines-section">
                  <h3>Duration :</h3>
                  <p>3 months</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="lines-section">
                  <h3>Platforms :</h3>
                  <p>iOS, Android, Web</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kariot-solution">
          <div className="container sol-container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <Stack direction="horizontal">
                  <div className=" badge-kariot-btn">
                    <img src="/images/Rectangle-kariot.png" className="me-2" alt="design-dot" />
                    <p> THE CHALLENGE </p>
                  </div>
                </Stack>
                <h3 className="solt-title pt-4">
                  Building Trust, Efficiency, and Scalability in Home Services
                </h3>
                <p className="ezyhelp-para pt-2">
                  Ezyhelpers faced the challenge of aggregating multiple home service categories, training and onboarding service professionals, and ensuring a high-quality, reliable experience for users in a market with high churn and trust issues. The platform needed to offer easy discovery, transparent pricing, and secure payments while handling rapid user growth and maintaining operational efficiency.
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <Image
                  src="/images/ezy-col-image.png"
                  width={667}
                  height={605}
                  className="ezyhelp-image"
                  alt="Ezyhelpers solution image preview"
                />
              </div>
            </div>
            <div className="row ezy-new-row">
              <div className="col-lg-6 col-md-6">
                <Image
                  src="/images/ezy-app-pre.png"
                  width={667}
                  height={605}
                  className="ezyhelp-image"
                  alt="Ezyhelpers mobile app preview"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <Stack direction="horizontal">
                  <div className=" badge-kariot-btn">
                    <img src="/images/Rectangle-kariot.png" className="me-2" alt="design-dot" />
                    <p> OUR APPROACH </p>
                  </div>
                </Stack>
                <h3 className="solt-title pt-4">
                  Robust Technology, User-first Design, and Automated DevOps
                </h3>
                <p className="ezyhelp-para pt-2">
                  Trimsel built the Ezyhelpers solution using a modern technology stack: <b>Flutter</b> for cross-platform mobile development, <b>ReactJS</b> for web, <b>Node.js</b> for backend APIs, and <b>PostgreSQL</b> for scalable data. The platform is fully hosted on <b>AWS</b>, with <Link href="/devops-consulting-services">DevOps automation</Link> and CI/CD pipelines to ensure rapid, reliable deployments and ongoing updates. The result: a secure, fast, and intuitive platform that delivers on both user experience and business efficiency.
                </p>
                <p>
                  Interested in seamless automation? Explore our <Link href="/devops-consulting-services">DevOps consulting</Link> and <Link href="/cloud-consulting-services">Cloud services</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="ezy-solution">
          <div className="container ezy-sol-container">
            <div className="row">
              <div className="col-lg-7 col-md-6"></div>
              <div className="col-lg-5 col-md-6">
                <Stack direction="horizontal">
                  <div className=" badge-kariot-btn">
                    <img src="/images/Rectangle-kariot.png" className="me-2" alt="design-dot" />
                    <p> RESULTS </p>
                  </div>
                </Stack>
                <h3 className="solt-title pt-4">
                  Tangible Results and Business Impact
                </h3>
                <p className="ezyhelp-para pt-2">
                  Ezyhelpers quickly grew to tens of thousands of downloads and thousands of active users, delivering a smooth booking experience and a reliable platform for service professionals. With a robust, scalable backend and automated DevOps workflows, the business is able to support rapid growth, add new services easily, and keep operational costs low.
                </p>
                <p>
                  Need a similar solution? <Link href="/contact-us">Get in touch with our experts.</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="kariot-solution">
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
                    src="/images/flutter.png"
                    alt="Flutter mobile app development"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/react-native.png"
                    alt="React Native mobile app development"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/nodejs-logo.png"
                    alt="Node.js backend"
                    width={185}
                    height={84}
                    className="me-2 mb-2 native-img mbl-design"
                  />
                  <Image
                    src="/images/postgresql-logo.png"
                    alt="PostgreSQL database"
                    width={185}
                    height={84}
                    className="me-2 mb-2 native-img mbl-design"
                  />
                  <Image
                    src="/images/aws-logo.png"
                    alt="AWS cloud hosting"
                    width={185}
                    height={84}
                    className="me-2 mb-2 native-img mbl-design"
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-4">
                <h5 className="tech-kariot-sub py-3">Design & DevOps</h5>
                <div className="tech-img-container">
                  <Image
                    src="/images/photoshop.png"
                    alt="Photoshop design"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/figma.png"
                    alt="Figma design"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/devops-logo.png"
                    alt="DevOps automation"
                    width={185}
                    height={84}
                    className="me-2 mb-2 native-img mbl-design"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots carousel (unchanged) */}
        <section id="ezy-carousel">
          <div className="container">
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
                  <div className="col-lg-3 col-md-3 col-6">
                    <img
                      src="/images/ezyapp-preview.png"
                      className="ezy-carous-image"
                      alt="Ezyhelpers-app-screenshots"
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-6">
                    <img
                      src="/images/ezyapp-preview1.png"
                      className="ezy-carous-image"
                      alt="Ezyhelpers-app-screenshots"
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-6">
                    <img
                      src="/images/ezyapp-preview2.png"
                      className="ezy-carous-image"
                      alt="Ezyhelpers-app-screenshots"
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-6">
                    <img
                      src="/images/ezyapp-preview3.png"
                      className="ezy-carous-image"
                      alt="Ezyhelpers-app-screenshots"
                    />
                  </div>
                </div>
              </Carousel.Item>
              {/* Other carousel items unchanged */}
            </Carousel>
          </div>
        </section>

        {/* CTA Section */}
        <section className="xabe-cta">
          <div className="container">
            <Card className="ezy-cta my-5">
              <Card.Body className="mbl-card-body">
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-12 xaber-card-col">
                    <h2 className="ezycta-heading pt-2">
                      Ready to build your next digital solution?
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

        {/* Related Case Studies */}
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
              Read About The Challenges We Faced and How We Helped Our Clients Achieve Their Goals.
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
                        <img src="/images/Group3001.png"  alt=""/>
                      </Card.Header>
                      <Card.Body className="case-carousel-body">
                        <h3 className="case-carousel-heading">KarIOT</h3>
                        <p className="case-carousel-para justify-content-center">
                          IoT-based smart water management system for high-rise buildings and hotels.
                        </p>
                        <Link className="case-carousel-link" href="/portfolio/kariot-case-study" passHref>
                          Read Case Study <FaLongArrowAltRight />
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Card className="case-carousel-card">
                      <Card.Header className="case-carousel-header">
                        <img src="/images/Group3002.png"  alt=""/>
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
              {/* Add a second carousel item with Mocial, etc. */}
            </Carousel>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
