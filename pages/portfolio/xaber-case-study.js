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
import { NextSeo } from "next-seo";
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
      reset();
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
        title="Xaber Case Study – Ride-hailing Platform (Uber-like) | Trimsel"
        description="See how Trimsel helped Xaber launch a scalable ride-hailing platform inspired by Uber, with rider & driver apps, admin console, and DevOps foundations for growth."
        canonical="https://www.trimsel.com/portfolio/xaber-case-study"
        openGraph={{
          type: "article",
          url: "https://www.trimsel.com/portfolio/xaber-case-study",
          title:
            "Xaber Case Study – Ride-hailing Platform (Uber-like) | Trimsel",
          description:
            "End-to-end ride-hailing platform engineered by Trimsel: rider and driver apps, admin console, and scalable backend with DevOps automation.",
          locale: "en_IN",
          images: [
            {
              url: "https://www.trimsel.com/images/portfolio/xaber-og.jpg",
              width: 1200,
              height: 630,
              alt: "Trimsel Xaber ride-hailing app case study",
            },
          ],
          site_name: "Trimsel",
          article: {
            section: "Case Study",
            tags: [
              "Case Study",
              "Ride-hailing",
              "Taxi Booking",
              "Mobile App",
              "DevOps",
              "Trimsel",
            ],
          },
        }}
        twitter={{
          handle: "@TrimselSoftwares",
          site: "@TrimselSoftwares",
          cardType: "summary_large_image",
          title: "Case Study: Xaber Ride-hailing Platform",
          description:
            "Discover how Trimsel delivered Xaber’s Uber-like ride-hailing platform with mobile apps, admin console, and scalable DevOps foundations.",
        }}
        additionalMetaTags={[
          { name: "robots", content: "index, follow" },
          {
            name: "twitter:title",
            content: "Case Study: Xaber Ride-hailing Platform",
          },
          {
            name: "twitter:description",
            content:
              "Discover how Trimsel delivered Xaber’s Uber-like ride-hailing platform with mobile apps, admin console, and scalable DevOps foundations.",
          },
          {
            name: "twitter:image:alt",
            content: "Trimsel Xaber ride-hailing case study",
          },
        ]}
      />
      <Head>
        {[
          // CaseStudy entity
          {
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            "@id": "https://www.trimsel.com/portfolio/xaber-case-study#case",
            name: "Xaber Case Study – Ride-hailing Platform",
            headline: "Xaber Case Study – Ride-hailing Platform",
            description:
              "How Trimsel helped Xaber launch a scalable Uber-like ride-hailing platform with rider & driver apps, admin console, and DevOps foundations for growth.",
            inLanguage: "en",
            url: "https://www.trimsel.com/portfolio/xaber-case-study",
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
              url: "https://www.trimsel.com/images/portfolio/xaber-og.jpg",
              width: 1200,
              height: 630,
            },
            image: {
              "@type": "ImageObject",
              url: "https://www.trimsel.com/images/portfolio/xaber-og.jpg",
              width: 1200,
              height: 630,
            },
          },
          // Breadcrumbs
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id":
              "https://www.trimsel.com/portfolio/xaber-case-study#breadcrumbs",
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
                name: "Xaber Case Study",
                item: "https://www.trimsel.com/portfolio/xaber-case-study",
              },
            ],
          },
        ].map((schema, index) => (
          <script
            key={`xaber-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      {/* HERO */}
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
                          alt="Xaber ride-hailing logo"
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
                          <div className="chip chip-lg badge-btn">ADMIN</div>
                        </Stack>
                      </div>
                    </div>
                    <div className="cafes">
                      <div className="cafes-inner">
                        <h1 className="heading-title">
                          Xaber – Ride-hailing Platform Inspired by Uber
                        </h1>
                      </div>
                    </div>
                    <div className="mozarts">
                      <div className="mozarts-inner">
                        <p className="hero-para">
                          Xaber wanted to give local taxi operators the power of
                          an Uber-like app under their own brand. Trimsel helped
                          them launch a scalable ride-hailing platform with
                          rider & driver apps, admin console, and a DevOps
                          backbone ready for growth.
                        </p>
                      </div>
                    </div>
                    <div className="mozarts">
                      <div className="mozarts-inner">
                        <Link href="/contact-us" passHref>
                          <button className="btn btn-primary case-study-btn">
                            Talk to Our Experts{" "}
                            <img
                              src="/images/material-symbols_arrow-right-alt.png"
                              alt="Arrow icon"
                            />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right side is intentionally empty in this layout – hero visual can come from CSS/bg */}
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + STATS */}
      <section id="xaber-about">
        <div className="container xaber-about-container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <Stack direction="horizontal">
                <div className="badge-xaber-btn">
                  <img src="/images/Rectangle550.png" className="me-2" alt="" />{" "}
                  OVERVIEW
                </div>
              </Stack>
              <h2 className="xaber-title pt-3">
                From Idea to Launch-Ready Ride-hailing Platform
              </h2>
              <p className="xaber-abt-para pb-3">
                Xaber set out to build a modern ride-hailing and taxi booking
                platform that gives local operators the same capabilities as
                global apps like Uber—but with their own brand, pricing, and
                operating rules. Riders needed a seamless way to book,
                track, and pay for trips, while drivers and operations teams
                required a reliable system for assignments, earnings, and
                fleet oversight.
              </p>
              <p className="xaber-abt-para pb-3">
                The founders partnered with Trimsel to design and implement the
                complete stack: rider and driver mobile apps, an admin console
                for operations, and a scalable backend with DevOps automation so
                new features could be shipped safely as the platform expanded to
                new cities.
              </p>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="card card-sub">
                <div className="card-sub-details">
                  <h5 className="pb-3">START YOUR PROJECT</h5>
                  <h2>Planning a ride-hailing or taxi app?</h2>
                  <p>
                    Request a one-to-one consultation to discuss your product
                    vision, tech stack, and go-to-market plan.
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

          {/* Project meta */}
          <div className="row xaber-details-row">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="line-section">
                <h3>Client :</h3>
                <p>Xaber (Ride-hailing Startup)</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="line-section">
                <h3>Industry :</h3>
                <p>Mobility, Local Services</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="line-section">
                <h3>Duration :</h3>
                <p>3 months (MVP) + ongoing</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="line-section">
                <h3>Platforms :</h3>
                <p>iOS, Android, Web, Admin Console</p>
              </div>
            </div>
          </div>

          {/* Counters – keep numbers modest & believable */}
          <div className="xaber-counter">
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
                              end={3}
                              duration={2}
                              delay={0}
                            />
                          )}
                          <span> Cities</span>
                        </h3>
                        <h4 className="static-text">Launched During MVP</h4>
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
                              end={100}
                              duration={2}
                              delay={0}
                            />
                          )}
                          <span>+</span>
                        </h3>
                        <h4 className="static-text">Drivers Onboarded</h4>
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
                              end={99}
                              duration={2}
                              delay={0}
                            />
                          )}
                          <span>%</span>
                        </h3>
                        <h4 className="static-text">Crash-free Sessions</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </section>

      {/* Optional animated section – keep existing component */}
      <section id="xaber-about">
        <SlideComponent />
      </section>

      {/* CHALLENGE (business & technical) */}
      <section id="xaber-challenge">
        <div className="container challenge-container">
          <div className="row mbl-abt">
            <div className="col-lg-10 col-md-9">
              <Stack direction="horizontal">
                <div className="badge-xaber-btn">
                  <img
                    src="/images/Rectangle550.png"
                    className="me-2"
                    alt=""
                  />{" "}
                  THE CHALLENGE
                </div>
              </Stack>
              <h2 className="challenge-heading pt-4">
                Fragmented Operations and No Production-Ready Platform
              </h2>
              <p className="challenge-para">
                Xaber’s founders had a clear vision: offer a localized,
                Uber-like ride-hailing experience where riders can discover
                nearby taxis, track trips in real time, and pay securely—while
                operators manage fleets, fares, and payouts from a single
                system. But turning this vision into a launch-ready platform
                came with several challenges:
              </p>
              <p className="challenge-para">
                Operationally, bookings were still fragmented across phone
                calls, messaging apps, and manual spreadsheets, making it hard
                to monitor demand or driver performance. On the technical side,
                they needed a platform that could support peak-hour traffic,
                multiple cities, and frequent feature updates without risking
                downtime or data loss.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center overlay-images align-content-center">
          <Image
            src="/images/Group25321.png"
            width={900}
            height={474}
            alt="Xaber ride-hailing dashboards overview"
          />
        </div>
      </section>

      {/* OUR APPROACH */}
      <section id="xaber-prob">
        <div className="container prob-container">
          <Stack direction="horizontal">
            <div className="badge-xaber-btn">
              <img
                src="/images/Rectangle550.png"
                className="me-2"
                alt=""
              />{" "}
              OUR APPROACH
            </div>
          </Stack>
          <h2 className="prob-heading pt-4">
            Product Blueprint, Scalable Architecture, and DevOps from Day One
          </h2>
          <p className="prob-para">
            Trimsel engaged with Xaber in three stages. First, we mapped the
            journeys for riders, drivers, and operations teams, defining what
            belonged in the MVP and what could be scheduled for later phases.
            Next, we designed a modular backend architecture and data model that
            separates authentication, trips, payments, notifications, and admin
            functions to avoid a fragile monolith.
          </p>
          <p className="prob-para">
            Finally, we put a DevOps foundation in place from day one—with
            dedicated Dev, QA, and Production environments, containerized
            services, and CI/CD pipelines. This let Xaber ship features safely
            and quickly, with rollback options and monitoring instead of manual
            server changes.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="xaber-solution">
        <div className="container sol-container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <Stack direction="horizontal">
                <div className="badge-xaber-btn">
                  <img
                    src="/images/Rectangle550.png"
                    className="me-2"
                    alt=""
                  />{" "}
                  THE SOLUTION
                </div>
              </Stack>
              <h3 className="sol-heading pt-4">
                End-to-End Ride-hailing Stack: Rider, Driver, Admin & DevOps
              </h3>
              <p className="sol-para">
                We delivered a complete ride-hailing platform that connects
                riders, drivers, and operations teams on top of a scalable,
                cloud-based backend:
              </p>
              <ul className="sol-para">
                <li>
                  <strong>Rider app:</strong> location-based pickup, drop
                  selection via map, fare estimates, live driver tracking,
                  in-app notifications, trip history, and invoice access.
                </li>
                <li>
                  <strong>Driver app:</strong> online/offline toggle, trip
                  requests with accept/decline, in-app navigation handoff,
                  earnings dashboard, trip history, and basic KYC workflows.
                </li>
                <li>
                  <strong>Admin console:</strong> fleet and driver management,
                  fare configuration, zones and service areas, promo code
                  management, trip monitoring dashboard, and reporting for
                  revenue and utilization.
                </li>
                <li>
                  <strong>Backend & DevOps:</strong> modular services built on
                  Node.js, a relational database for core entities, caching for
                  fast lookups, and CI/CD pipelines for automated testing and
                  deployments across Dev, QA, and Production.
                </li>
              </ul>
              <p className="sol-para">
                With this foundation, Xaber can continuously iterate on new
                features—such as loyalty programs, corporate accounts, or
                advanced analytics—without re-architecting the core platform.
              </p>
              <p className="sol-para">
                Want to design a similar architecture for your mobility
                product? Explore our{" "}
                <Link href="/mobile-app-development-chennai">
                  mobile app development services
                </Link>{" "}
                and{" "}
                <Link href="/devops-consulting-services">
                  DevOps consulting offerings
                </Link>
                .
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <Image
                src="/images/Group25331.png"
                width={662}
                height={603}
                className="sol-image"
                alt="Xaber rider, driver, and admin experience"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="xaber-tech">
        <div className="container tech-container mb-5">
          <Stack direction="horizontal">
            <div className="badge-xaber-btn">
              <img
                src="/images/Rectangle550.png"
                className="me-2"
                alt=""
              />{" "}
              TECHNOLOGY
            </div>
          </Stack>
          <h3 className="tech-heading pt-5">Tools And Technology</h3>
          <div className="row pt-4">
            <div className="col-lg-7 col-md-8">
              <h5 className="tech-sub py-3">Development</h5>
              <div className="tech-img-container">
                <Image
                  src="/images/flutter.png"
                  alt="Flutter for cross-platform mobile app development"
                  width={216}
                  height={84}
                  className="me-2 mb-2 mbl-design"
                />
                <Image
                  src="/images/react-native.png"
                  alt="React Native for mobile app development"
                  width={216}
                  height={84}
                  className="me-2 mb-2 mbl-design"
                />
                <Image
                  src="/images/native.png"
                  alt="NativeScript for native-like mobile development"
                  width={185}
                  height={84}
                  className="me-2 mb-2 native-img mbl-design"
                />
                <Image
                  src="/images/js.png"
                  alt="JavaScript for frontend and backend logic"
                  width={216}
                  height={84}
                  className="me-2 mb-2 mbl-design"
                />
                <Image
                  src="/images/c++.png"
                  alt="C++ for performance-critical components"
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
                  alt="Adobe Photoshop for UI assets"
                  width={216}
                  height={84}
                  className="me-2 mb-2 mbl-design"
                />
                <Image
                  src="/images/figma.png"
                  alt="Figma for product design and prototyping"
                  width={216}
                  height={84}
                  className="me-2 mb-2 mbl-design"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOT CAROUSEL – keep as generic UI preview */}
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
              <img
                src="/images/Frame2.png"
                className="carousel-image"
                alt="Xaber rider app screens"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/images/Frame2.png"
                className="carousel-image"
                alt="Xaber driver app screens"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/images/Frame2.png"
                className="carousel-image"
                alt="Xaber admin dashboard screens"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="xabe-cta">
        <div className="container">
          <Card className="xaber-cta my-5">
            <Card.Body className="mbl-card-body">
              <div className="row">
                <div className="col-lg-7 col-md-12 col-12 xaber-card-col">
                  <Stack direction="horizontal">
                    <div className="badge-xaber-btn">
                      <img
                        src="/images/Rectangle550.png"
                        className="me-2"
                        alt=""
                      />{" "}
                      GET IN TOUCH
                    </div>
                  </Stack>
                  <h2 className="mblcta-heading pt-2">
                    Want to launch your own ride-hailing or taxi booking app?
                  </h2>
                  <p className="hero-para">
                    Trimsel can help you architect the product, choose the right
                    tech stack, and build a scalable platform with strong DevOps
                    foundations.
                  </p>
                  <Link href="/contact-us" passHref>
                    <button className="xabercta-button btn-lg btn-info mt-3">
                      Get In Touch{" "}
                      <span className="icon">
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

      {/* RELATED CASE STUDIES */}
      <section className="xaber-case">
        <div className="container case-container">
          <Stack direction="horizontal">
            <div className="badge-xaber-btn">
              <img
                src="/images/Rectangle550.png"
                className="me-2"
                alt=""
              />{" "}
              RELATED CASE STUDIES
            </div>
          </Stack>
          <h2 className="casex-heading pt-4">
            Read How We Helped Other Clients Build and Scale Their Products.
          </h2>
          <div className="row py-5">
            <div className="col-lg-6 col-md-6">
              <Card className="case-carousel-card">
                <Card.Header className="case-carousel-header">
                  <img
                    src="/images/Group3001.png"
                    alt="Ezyhelpers case study"
                  />
                </Card.Header>
                <Card.Body className="case-carousel-body">
                  <h3 className="case-carousel-heading">Ezyhelpers</h3>
                  <p className="case-carousel-para justify-content-center">
                    Mobile and web platform for booking verified home service
                    professionals with real-time tracking and reviews.
                  </p>
                  <Link
                    className="case-carousel-link"
                    href="/portfolio/ezyhelpers-case-study"
                  >
                    Read Case Study <FaLongArrowAltRight />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-md-6">
              <Card className="case-carousel-card">
                <Card.Header className="case-carousel-header">
                  <img
                    src="/images/kariot-case.png"
                    alt="KarIOT case study"
                  />
                </Card.Header>
                <Card.Body className="case-carousel-body">
                  <h3 className="case-carousel-heading">KarIOT</h3>
                  <p className="case-carousel-para justify-content-center">
                    IoT-enabled smart water management platform for cities and
                    industries, powered by cloud and DevOps automation.
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
