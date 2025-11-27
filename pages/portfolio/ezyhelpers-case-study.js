import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Stack from "react-bootstrap/Stack";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";
import { NextSeo } from "next-seo";
import { postJson } from "../../lib/api";

export default function Ezyhelpers() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [counterOn, setCounterOn] = useState(false);
  const [index, setIndex] = useState(0);
  const slides = [0, 1, 2];

  async function onSubmitForm(values) {
    try {
      await postJson("/api/newcontact", values);
      console.log("Contact request sent");
      reset();
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <NextSeo
        title="Ezyhelpers Case Study – Home Services App | Trimsel"
        description="See how Trimsel engineered Ezyhelpers, an all-in-one home services marketplace that connects users with verified professionals, powered by Flutter, React, Node.js, PostgreSQL, AWS, and DevOps automation."
        canonical="https://www.trimsel.com/portfolio/ezyhelpers-case-study"
        openGraph={{
          type: "article",
          url: "https://www.trimsel.com/portfolio/ezyhelpers-case-study",
          title: "Ezyhelpers Case Study – Home Services App | Trimsel",
          description:
            "Ezyhelpers is India’s all-in-one home services platform. Trimsel built a scalable, secure, and user-friendly solution using Flutter, React, Node.js, PostgreSQL, AWS, and automated DevOps pipelines.",
          locale: "en_IN",
          images: [
            {
              url: "https://www.trimsel.com/images/portfolio/ezyhelpers-og.jpg",
              width: 1200,
              height: 630,
              alt: "Trimsel Ezyhelpers home services app case study",
            },
          ],
          site_name: "Trimsel",
          article: {
            section: "Case Study",
            tags: [
              "Case Study",
              "Home Services",
              "Marketplace",
              "Mobile App",
              "Trimsel",
            ],
          },
        }}
        twitter={{
          handle: "@TrimselSoftwares",
          site: "@TrimselSoftwares",
          cardType: "summary_large_image",
          title: "Case Study: Ezyhelpers Home Services Marketplace",
          description:
            "Discover how Trimsel built Ezyhelpers, a scalable home services platform connecting users with verified professionals.",
        }}
        additionalMetaTags={[
          { name: "robots", content: "index, follow" },
          {
            name: "twitter:title",
            content: "Case Study: Ezyhelpers Home Services Marketplace",
          },
          {
            name: "twitter:description",
            content:
              "Discover how Trimsel built Ezyhelpers, a scalable home services platform connecting users with verified professionals.",
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
            "@id":
              "https://www.trimsel.com/portfolio/ezyhelpers-case-study#case",
            name: "Ezyhelpers Case Study – Home Services App",
            headline: "Ezyhelpers Case Study – Home Services App",
            description:
              "Trimsel engineered Ezyhelpers, a home services marketplace connecting users with verified professionals, using Flutter, ReactJS, Node.js, PostgreSQL, AWS, and DevOps automation.",
            inLanguage: "en",
            url: "https://www.trimsel.com/portfolio/ezyhelpers-case-study",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.trimsel.com/#website",
            },
            about: {
              "@type": "Organization",
              "@id": "https://www.trimsel.com/#org",
            },
            author: {
              "@type": "Organization",
              "@id": "https://www.trimsel.com/#org",
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://www.trimsel.com/#org",
            },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://www.trimsel.com/images/portfolio/ezyhelpers-og.jpg",
              width: 1200,
              height: 630,
            },
            image: {
              "@type": "ImageObject",
              url: "https://www.trimsel.com/images/portfolio/ezyhelpers-og.jpg",
              width: 1200,
              height: 630,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id":
              "https://www.trimsel.com/portfolio/ezyhelpers-case-study#breadcrumbs",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.trimsel.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Portfolio",
                item: "https://www.trimsel.com/portfolio",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Ezyhelpers Case Study",
                item: "https://www.trimsel.com/portfolio/ezyhelpers-case-study",
              },
            ],
          },
        ].map((schema, index) => (
          <script
            key={`ezyhelpers-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <main>
        {/* HERO */}
        <section id="ezy-hero">
          <Header />
          <div className="container xaber-container pt-3">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="titles">
                  <div className="titles-inner">
                    <div className="cafes">
                      <div className="cafes-inner mb-2">
                        <ol className="bread d-flex align-items-center">
                          <li className="case-breadcrumb">
                            <Link href="/">Home</Link>
                          </li>
                          <li className="case-dot">&middot;</li>
                          <li className="cases-breadcrumb">
                            <Link href="/portfolio">Portfolio</Link>
                          </li>
                          <li className="case-dot">&middot;</li>
                          <li className="active-bread">Ezyhelpers</li>
                        </ol>
                      </div>
                    </div>

                    <div className="cafes">
                      <div className="cafes-inner mb-3">
                        <Image
                          src="/trimsel-clients/ezyhelpers-logo.png"
                          width={180}
                          height={50}
                          alt="Ezyhelpers Logo"
                        />
                      </div>
                    </div>

                    <div className="cafes">
                      <div className="cafes-inner">
                        <h1 className="heading-title">
                          Home service marketplace for trusted, on-demand help
                        </h1>
                      </div>
                    </div>

                    <div className="mozarts">
                      <div className="mozarts-inner">
                        <p className="hero-para">
                          Ezyhelpers is India’s all-in-one home service
                          platform, connecting users with verified professionals
                          for cleaning, cooking, elder care, sanitisation and
                          more—through a single mobile and web app.
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

              <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                <div className="imgrs">
                  <Image
                    src="/images/ezy-app-pre.png"
                    width={500}
                    height={520}
                    alt="Ezyhelpers app hero preview"
                    className="moc-app-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW + FORM */}
        <section id="ezy-about">
          <div className="container xaber-about-container">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <Stack direction="horizontal">
                  <div className="badge-kariot-btn mb-3">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> OVERVIEW </p>
                  </div>
                </Stack>

                <h2 className="kariot-title pt-1">
                  One platform for trusted, on-demand home services
                </h2>

                <p className="kariot-abt-para pb-3">
                  Ezyhelpers is India’s all-in-one platform for home
                  services—covering elder care, cleaning, cooking, deep
                  cleaning, sanitisation and more. The product connects
                  customers with background-verified professionals, transparent
                  pricing and reliable time slots, all from a single mobile and
                  web app. For service partners, Ezyhelpers acts as a steady
                  demand engine, helping them receive bookings, manage schedules
                  and get paid on time.
                </p>

                <p className="kariot-abt-para pb-3">
                  Trimsel partnered with Ezyhelpers to design, architect and
                  build this platform end-to-end—from user flows and booking
                  journeys to scalable backend APIs and DevOps automation on
                  AWS.
                </p>

                <p className="kariot-abt-para pb-3">
                  Interested in something similar? Explore our{" "}
                  <Link href="/mobile-app-development-chennai">
                    mobile app development
                  </Link>
                  ,{" "}
                  <Link href="/web-development-company-chennai">
                    web development
                  </Link>
                  ,{" "}
                  <Link href="/devops-consulting-services">
                    DevOps consulting
                  </Link>{" "}
                  and{" "}
                  <Link href="/cloud-consulting-services">
                    cloud services
                  </Link>
                  .
                </p>
              </div>

              <div className="col-lg-5 col-md-6">
                <div className="card card-subs">
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
                          {errors?.email?.message ||
                            errors?.email?.pattern?.message}
                        </span>
                      </div>
                      <input
                        type="submit"
                        className="subs-btn my-3"
                        value="Book A Consultation"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Meta details */}
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

        {/* COUNTERS */}
        <div className="xaber-counter">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="row">
              <div className="col-lg-3 col-md-3 xaber-border-col">
                <div className="card kariot-counter-card">
                  <div className="card-body card-body-bg">
                    <div className="card-title">
                      <h3 className="filled-text">
                        {counterOn && (
                          <CountUp start={0} end={30} duration={2} delay={0} />
                        )}
                        <span>K+</span>
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
                      <h3 className="filleds-text">
                        {counterOn && (
                          <CountUp start={0} end={10} duration={2} delay={0} />
                        )}
                        <span>K+</span>
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
                      <h3 className="filledss-text">
                        {counterOn && (
                          <CountUp
                            start={0}
                            end={50}
                            duration={2}
                            delay={0}
                          />
                        )}
                        <span>K+</span>
                      </h3>
                      <h4 className="static-text">Bookings Completed</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3">
                <div className="card kariot-counter-card">
                  <div className="card-body card-body-bg">
                    <div className="card-title">
                      <h3 className="filledss-text">
                        {counterOn && (
                          <CountUp start={0} end={500} duration={2} delay={0} />
                        )}
                        <span>+</span>
                      </h3>
                      <h4 className="static-text">Trained Professionals</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>

        {/* CHALLENGE */}
        <section id="ezy-challenge">
          <div className="container moc-ch-container">
            <Stack direction="horizontal">
              <div className="badge-kariot-btn mb-3">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p> THE CHALLENGE </p>
              </div>
            </Stack>
            <div className="row">
              <div className="col-lg-7 col-md-7">
                <h2 className="mochallenge-heading">
                  Building trust, reliability and scale in home services
                </h2>
                <p className="mocial-chl-para">
                  Before Ezyhelpers, customers typically relied on word-of-mouth
                  or generic listing platforms to find home service
                  professionals. That created three major problems:
                </p>
                <ul className="mocial-chl-para">
                  <li>
                    <strong>Low trust & inconsistent quality</strong> – no easy
                    way to verify professionals, track ratings or ensure
                    repeatable service standards.
                  </li>
                  <li>
                    <strong>Operational chaos for the business</strong> – manual
                    booking, rescheduling and payments across phone calls and
                    WhatsApp, leading to missed appointments and poor customer
                    experience.
                  </li>
                  <li>
                    <strong>No foundation for scale</strong> – as the customer
                    base grew, the existing processes could not handle peak-time
                    demand, performance or support.
                  </li>
                </ul>
                <p className="mocial-chl-para">
                  Ezyhelpers needed a unified platform where customers could
                  discover, book and manage services in a few taps, while the
                  business could onboard and manage professionals, track
                  performance and operate efficiently as volumes grew.
                </p>
              </div>
              <div className="col-lg-5 col-md-5 d-flex justify-content-center">
                <Image
                  src="/images/ezy-col-image.png"
                  width={500}
                  height={420}
                  alt="Ezyhelpers home services concept"
                  className="moc-work pt-3"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section id="ezy-solution">
          <div className="container mocsol-container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <Stack direction="horizontal">
                  <div className="badge-kariot-btn mb-3">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> OUR APPROACH </p>
                  </div>
                </Stack>
                <h2 className="moprob-heading">
                  Robust technology, user-first design and automated DevOps
                </h2>
                <p className="mocial-chl-para">
                  Trimsel designed and implemented Ezyhelpers as a product that
                  can grow with the business, not just an app for launch.
                </p>
                <ul className="mocial-chl-para">
                  <li>
                    <strong>Modern, scalable architecture</strong> – Flutter for
                    cross-platform mobile apps, ReactJS for the web application,
                    Node.js for backend APIs and PostgreSQL for transactional
                    data. The entire stack runs on AWS with separate
                    environments for staging and production.
                  </li>
                  <li>
                    <strong>Frictionless booking experience</strong> – clear
                    categories, guided flows, time-slot selection and integrated
                    payments designed to minimise drop-offs and support repeat
                    bookings.
                  </li>
                  <li>
                    <strong>Tools for operations & partners</strong> – admin
                    views to manage categories, pricing, promotions and service
                    areas, plus dashboards to monitor bookings and
                    supply–demand balance.
                  </li>
                  <li>
                    <strong>DevOps & CI/CD on AWS</strong> – automated
                    pipelines so every change is built, tested and deployed
                    consistently, enabling frequent releases without impacting
                    live bookings.
                  </li>
                </ul>
                <p className="mocial-chl-para">
                  Want similar reliability in your product stack? Learn more
                  about our{" "}
                  <Link href="/devops-consulting-services">
                    DevOps consulting
                  </Link>{" "}
                  and{" "}
                  <Link href="/cloud-consulting-services">
                    cloud services
                  </Link>
                  .
                </p>
              </div>
              <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                <Image
                  src="/images/ezyapp-preview.png"
                  width={480}
                  height={860}
                  alt="Ezyhelpers app screen preview"
                  className="moc-screen"
                />
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="ezy-results">
          <div className="container sol-container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <Stack direction="horizontal">
                  <div className="badge-kariot-btn mb-3">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> RESULTS </p>
                  </div>
                </Stack>
                <h3 className="solt-title pt-4">
                  Tangible results for both users and professionals
                </h3>
                <p className="chall-para pt-2">
                  After launch, Ezyhelpers quickly grew to tens of thousands of
                  app downloads and thousands of active users across its target
                  cities, with a steady increase in repeat bookings month over
                  month.
                </p>
                <ul className="chall-para pt-2">
                  <li>
                    <strong>Reliable experience for customers</strong> – users
                    can now find verified professionals, compare services and
                    book in a few taps instead of relying on unstructured phone
                    calls.
                  </li>
                  <li>
                    <strong>New opportunities for professionals</strong> –
                    service partners receive a predictable flow of leads, better
                    schedule visibility and timely payouts via the platform.
                  </li>
                  <li>
                    <strong>Scalable operations for the business</strong> – with
                    a robust backend and automated DevOps workflows, the team
                    can add new service categories, cities and promotions
                    without heavy engineering overhead.
                  </li>
                </ul>
                <p className="chall-para pt-2">
                  Need a similar marketplace or on-demand services platform?{" "}
                  <Link href="/contact-us">Get in touch with our experts</Link>{" "}
                  to discuss your idea.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                <Image
                  src="/images/ezy-col-image.png"
                  width={550}
                  height={448}
                  alt="Ezyhelpers results illustration"
                  className="mt-5 mbl-chall"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section id="ezy-tech">
          <div className="container tech-container mb-5">
            <Stack direction="horizontal">
              <div className="badge-kariot-btn">
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
                    alt="React Native for web & mobile"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/nodejs-logo.png"
                    alt="Node.js backend development"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/postgresql-logo.png"
                    alt="PostgreSQL database"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/aws-logo.png"
                    alt="AWS cloud hosting"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
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
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCREENSHOTS CAROUSEL */}
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
                <Image
                  src="/images/ezyapp-preview.png"
                  width={300}
                  height={600}
                  alt="Ezyhelpers app screenshot 1"
                  className="carousel-image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/images/ezyapp-preview.png"
                  width={300}
                  height={600}
                  alt="Ezyhelpers app screenshot 2"
                  className="carousel-image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/images/ezyapp-preview.png"
                  width={300}
                  height={600}
                  alt="Ezyhelpers app screenshot 3"
                  className="carousel-image"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </section>

        {/* CTA */}
        <section className="xabe-cta">
          <div className="container">
            <Card className="kariot-cta my-5">
              <Card.Body className="mbl-card-body">
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-12 xaber-card-col">
                    <Stack direction="horizontal">
                      <div className="badge-kariot-btn mb-3">
                        <img
                          src="/images/Rectangle-kariot.png"
                          className="me-2"
                          alt="design-dot"
                        />
                        <p> GET IN TOUCH</p>
                      </div>
                    </Stack>
                    <h2 className="mblcta-heading pt-2">
                      Ready to build your next digital solution?
                    </h2>
                    <Link href="/contact-us" passHref>
                      <button className="karcta-button btn-lg btn-info mt-3">
                        Get In Touch{" "}
                        <span className="icon">
                          <img
                            src="/images/arrowiconblue.png"
                            alt="arrow-icon"
                          />
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
              <div className="badge-kariot-btn">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p> RELATED CASE STUDIES</p>
              </div>
            </Stack>
            <h2 className="case-kariot-heading pt-4">
              Read About The Challenges We Faced and How We Helped Our Clients
              Achieve Their Goals.
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
                        <img src="/images/kariot-case.png" alt="KarIOT card" />
                      </Card.Header>
                      <Card.Body className="case-carousel-body">
                        <h3 className="case-carousel-heading">KarIOT</h3>
                        <p className="case-carousel-para justify-content-center">
                          IoT-based smart water management system for high-rise
                          buildings and hotels.
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
                  <div className="col-lg-6 col-md-6">
                    <Card className="case-carousel-card">
                      <Card.Header className="case-carousel-header">
                        <img src="/images/Group3002.png" alt="Xaber card" />
                      </Card.Header>
                      <Card.Body className="case-carousel-body">
                        <h3 className="case-carousel-heading">Xaber</h3>
                        <p className="case-carousel-para justify-content-center">
                          Ride-hailing platform inspired by Uber for scalable
                          taxi business operations.
                        </p>
                        <Link
                          className="case-carousel-link"
                          href="/portfolio/xaber-case-study"
                        >
                          Read Case Study <FaLongArrowAltRight />
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}