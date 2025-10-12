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
import Card from "react-bootstrap/Card"
import Carousel from "react-bootstrap/Carousel"
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";
import { NextSeo } from 'next-seo';
import { postJson } from "../../lib/api";

export default function Mocial() {
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
  const slides = [0, 1, 2];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <NextSeo
  title="Mocial Case Study – Social Network Platform | Trimsel"
  description="How Trimsel engineered Mocial, a scalable social network with rich media, groups, live streaming, and admin tools built for growth."
  canonical="https://www.trimsel.com/portfolio/mocial-case-study"
  openGraph={{
    type: "article",
    url: "https://www.trimsel.com/portfolio/mocial-case-study",
    title: "Mocial Case Study – Social Network Platform | Trimsel",
    description:
      "Scalable social network engineered by Trimsel: posts, groups, voice/video, live streams, notifications, and admin tools.",
    locale: "en_IN",
    images: [
      {
        url: "https://www.trimsel.com/images/portfolio/mocial-og.jpg", // update if your OG image differs
        width: 1200,
        height: 630,
        alt: "Trimsel Mocial social network case study",
      },
    ],
    site_name: "Trimsel",
    article: {
      section: "Case Study",
      tags: [
        "Case Study",
        "Social Network",
        "Live Streaming",
        "Mobile App",
        "Trimsel",
      ],
    },
  }}
  twitter={{
    handle: "@TrimselSoftwares",
    site: "@TrimselSoftwares",
    cardType: "summary_large_image",
    title: "Case Study: Mocial Social Network",
    description:
      "Discover how Trimsel built Mocial’s scalable social media platform with live streaming and community tools.",
  }}
  additionalMetaTags={[
    { name: "robots", content: "index, follow" },
    {
      name: "twitter:title",
      content: "Case Study: Mocial Social Network",
    },
    {
      name: "twitter:description",
      content:
        "Discover how Trimsel built Mocial’s scalable social media platform with live streaming and community tools.",
    },
    {
      name: "twitter:image:alt",
      content: "Trimsel Mocial social network case study",
    },
  ]}
  additionalJsonLd={[
    // CaseStudy entity
    {
      "@context": "https://schema.org",
      "@type": "CaseStudy",
      "@id": "https://www.trimsel.com/portfolio/mocial-case-study#case",
      "name": "Mocial Case Study – Social Network Platform",
      "headline": "Mocial Case Study – Social Network Platform",
      "description": "Trimsel engineered Mocial, a robust social platform supporting rich media, community features, live streaming, notifications, and growth-ready admin controls.",
      "inLanguage": "en",
      "url": "https://www.trimsel.com/portfolio/mocial-case-study",
      "isPartOf": { "@type": "WebSite", "@id": "https://www.trimsel.com/#website" },
      "about": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      "author": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      "publisher": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.trimsel.com/images/portfolio/mocial-og.jpg",
        "width": 1200,
        "height": 630
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.trimsel.com/images/portfolio/mocial-og.jpg",
        "width": 1200,
        "height": 630
      }
      // Optional:
      // "datePublished": "2024-09-22",
      // "dateModified": "2025-08-21",
      // "keywords": ["social network","live streaming","mobile apps","Trimsel"]
    },
    // Breadcrumbs
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.trimsel.com/portfolio/mocial-case-study#breadcrumbs",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trimsel.com/" },
        { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.trimsel.com/portfolio" },
        { "@type": "ListItem", "position": 3, "name": "Mocial Case Study", "item": "https://www.trimsel.com/portfolio/mocial-case-study" }
      ]
    }
  ]}
/>
      <main>
        <section id="moc-section">
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
                            <span> &#x2027; </span> Mocial
                          </p>
                        </div>
                      </div>
                      <div className="cafe" style={{ marginTop: "-20px" }}>
                        <div className="cafe-inner mb-2">
                          <div className="badge moc-badge">
                            <h4 className="badge-txt mb-0">DevOps Service</h4>
                          </div>
                        </div>
                      </div>
                      <div className="cafe">
                        <div className="cafe-inner moc-title">
                          An all-in-one platform that is going to be a right
                          choice for your brand.
                        </div>
                      </div>
                      <div className="mozart">
                        <div className="mozart-inner">
                          <p className="moc-para">
                            Search your family, colleagues, new friends and
                            people as well as stay connected with them. Upload
                            photos, post updates and share someone else's posts
                            to spread what is happening around you.
                          </p>
                        </div>
                      </div>
                      <div className="mozart">
                        <div className="mozart-inner">
                          <Stack
                            direction="horizontal"
                            gap={1}
                            className="kar-mbl-stack"
                          >
                            <Link href="#">
                              <Image
                                src="/images/google-play.png"
                                width={200}
                                height={60}
                                className="app-link"
                                alt="google-play"
                              />
                            </Link>
                            <Link href="#">
                              <Image
                                src="/images/app-store.png"
                                width={200}
                                height={60}
                                className="app-link"
                                alt="app-store"
                              />
                            </Link>
                          </Stack>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 moc-col">
                  <div className="imgrs">
                    <Image
                      src="/images/mocial-img.png"
                      width={500}
                      height={589}
                      alt="Mocial App Hero Image"
                      className="moc-app-image"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section id="moc-about">
          <div className="container xaber-about-container">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <Stack direction="horizontal">
                  <div className=" badge-kariot-btn mb-3">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> OVERVIEW </p>
                  </div>
                </Stack>
                <Image
                  src="/images/mocile-logo.png"
                  width={98}
                  height={98}
                  alt="Mocial App Logo"
                  className="moc-logo"
                />
                <h2 className="kariot-title pt-1">
                  Building an extensive Social Network of the future
                </h2>
                <p className="kariot-abt-para pb-3">
                  We built a robust social media app for Mocial, that can take
                  and handle traffic of millions of people to ensure they can
                  scale with ease. We built a robust social media app for the
                  client that can take and handle traffic of millions of people
                  to ensure they can scale with ease. We also had built an admin
                  backend for them to handle brand partnerships etc.
                </p>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className=" card card-subs">
                  <div className="card-moc-details">
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
                        className="moc-btn my-3"
                        value="Book A Consultation"
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
                  <p>Mocial</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="lines-section">
                  <h3>Industry :</h3>
                  <p>Services, Local Business</p>
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
                  <h3>Service :</h3>
                  <p>DevOps Services</p>
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
                    <div className="card kariot-counter-card">
                      <div className="card-body card-body-bg">
                        <div className="card-title">
                          <h3 className="filled-moc-text">
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
                    <div className="card kariot-counter-card">
                      <div className="card-body card-body-bg">
                        <div className="card-title">
                          <h3 className="filleds-moc-text">
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
                    <div className="card kariot-counter-card">
                      <div className="card-body card-body-bg">
                        <div className="card-title">
                          <h3 className="filledss-moc-text">
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

        <section id="moc-challenge">
          <div className="container moc-ch-container">
            <Stack direction="horizontal">
              <div className=" badge-kariot-btn mb-3">
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
                  Building an extensive Social Network of the future
                </h2>

                <Image
                  src="/images/mocial-work-bg.png"
                  width={790}
                  height={393}
                  alt="Mocial App Work Infographic"
                  className="moc-work pt-3"
                  quality={100}
                />
              </div>
              <div className="col-lg-5 col-md-5">
                <p className="mocial-chl-para">
                  Upload photos, post updates and share someone else's posts to
                  spread what is happening around you. Create group chats and
                  calls with your loved ones for effective communication.
                </p>
                <p className="mocial-chl-para">
                  Search your family, colleagues, new friends and people as well
                  as stay connected with them. Upload photos, post updates and
                  share someone else's posts to spread what is happening around
                  you. Create group chats and calls with your loved ones for
                  effective communication. Be notified when someone rates,
                  comments or share your posts. Organize the photos you uploaded
                  Live broadcast, watch streams and other videos anywhere,
                  anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="moc-problem">
          <div className="container prob-container">
            <Stack direction="horizontal">
              <div className=" badge-kariot-btn mb-3">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p> PROBLEM FACED </p>
              </div>
            </Stack>
            <div className="col-lg-12 col-md-12">
              <h2 className="moprob-heading">
                Mocial is a social mobility platform that operates through web
                and mobile applications. It fulfills the 360 ​​degree
                requirement of an internet channel or financial sectors.
              </h2>
              <p className="mocial-chl-para">
                Upload photos, post updates and share someone else's posts to
                spread what is happening around you. Create group chats and
                calls with your loved ones for effective communication. Be
                notified when someone rates, comments or share your posts.
                Organize the photos you uploaded Live broadcast, watch streams
                and other videos anywhere, anytime. Follow popular artists,
                influencers and organizations to keep in touch with their recent
                updates. Search your favorite jobs and apply them using your
                profile as resume. Search potential clients and the right
                candidates for recruiters and organizations. Network with people
                from the organizations you are interested in
              </p>
            </div>
          </div>
        </section>

        <section id="moc-solution">
          <div className="container mocsol-container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <Image
                  src="/images/mocial-screens.png"
                  width={658}
                  height={860}
                  alt="Mocial App Screens"
                  className="moc-screen"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <Stack direction="horizontal">
                  <div className=" badge-kariot-btn mb-3">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> THE SOLUTION </p>
                  </div>
                </Stack>
                <h2 className="moprob-heading">
                  An all-in-one platform that is going to be a right choice for
                  your brand.
                </h2>
                <ol className="moc-list">
                  <li>
                    <p className="mocial-chl-para">
                      Upload photos, post updates and share someone else's posts
                      to spread what is happening around you.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      Create group chats and calls with your loved ones for
                      effective communication.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      Be notified when someone rates, comments or share your
                      posts.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      Organize the photos you uploaded
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      Live broadcast, watch streams and other videos anywhere,
                      anytime.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      Follow popular artists, influencers and organizations to
                      keep in touch with their recent updates.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      Search your favorite jobs and apply them using your
                      profile as resume.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      Search potential clients and the right candidates for
                      recruiters and organizations.
                    </p>
                  </li>

                  <li>
                    <p className="mocial-chl-para">
                      Network with people from the organizations you are
                      interested in
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section id="xaber-tech">
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
                    alt="Fluttermobile-app-development-image"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/react-native.png"
                    alt="React-native-mobile-app-development-image"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/native.png"
                    alt="Nativescript-mobile-app-development-image"
                    width={185}
                    height={84}
                    className="me-2 mb-2 native-img mbl-design"
                  />
                  <Image
                    src="/images/js.png"
                    alt="Javascript-mobile-app-development-image"
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
                <h5 className="tech-kariot-sub py-3">Design</h5>
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
        <section className="xabe-cta">
          <div className="container">
            <Card className="kariot-cta my-5">
              <Card.Body className="mbl-card-body">
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-12 xaber-card-col">
                    <Stack direction="horizontal">
                      <div className=" badge-kariot-btn mb-3">
                        <img
                          src="/images/Rectangle-kariot.png"
                          className="me-2"
                          alt="design-dot"
                        />
                        <p> GET IN TOUCH</p>
                      </div>
                    </Stack>
                    <h2 className="mblcta-heading pt-2">
                      Wanna Develop a Mobile Application? Contact us Now!
                    </h2>
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
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </section>
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
                        <img src="/images/Group3001.png" />
                      </Card.Header>
                      <Card.Body className="case-carousel-body">
                        <h3 className="case-carousel-heading">Ezyhelpers</h3>
                        <p className="case-carousel-para justify-content-center">
                          Quisque a pretium nulla, at porttitor eros. Mauris
                          pharetra nisl sit amet mauris efficitur malesuada.
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
                        <img src="/images/Group3002.png" />
                      </Card.Header>
                      <Card.Body className="case-carousel-body">
                        <h3 className="case-carousel-heading">Xaber</h3>
                        <p className="case-carousel-para justify-content-center">
                          Quisque a pretium nulla, at porttitor eros. Mauris
                          pharetra nisl sit amet mauris efficitur malesuada.
                        </p>
                        <Link
                          className="case-carousel-link"
                          href="/portfolio/xaber-case-study"
                          passHref
                        >
                          Read Case Study <FaLongArrowAltRight />
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
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
                          Quisque a pretium nulla, at porttitor eros. Mauris
                          pharetra nisl sit amet mauris efficitur malesuada.
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
                        <img src="/images/Group3002.png" />
                      </Card.Header>
                      <Card.Body className="case-carousel-body">
                        <h3 className="case-carousel-heading">Xaber</h3>
                        <p className="case-carousel-para justify-content-center">
                          Quisque a pretium nulla, at porttitor eros. Mauris
                          pharetra nisl sit amet mauris efficitur malesuada.
                        </p>
                        <Link
                          className="case-carousel-link"
                          href="/portfolio/xaber-case-study"
                          passHref
                        >
                          Read Case Study <FaLongArrowAltRight />
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
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
                          Quisque a pretium nulla, at porttitor eros. Mauris
                          pharetra nisl sit amet mauris efficitur malesuada.
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
                        <img src="/images/Group3002.png" />
                      </Card.Header>
                      <Card.Body className="case-carousel-body">
                        <h3 className="case-carousel-heading">Xaber</h3>
                        <p className="case-carousel-para justify-content-center">
                          Quisque a pretium nulla, at porttitor eros. Mauris
                          pharetra nisl sit amet mauris efficitur malesuada.
                        </p>
                        <Link
                          className="case-carousel-link"
                          href="/portfolio/xaber-case-study"
                          passHref
                        >
                          Read Case Study <FaLongArrowAltRight />
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              <ol className="carousel-indicators">
                {slides.map((slide, i) => (
                  <li
                    className={`carousel-indicator ${
                      i === index ? "active" : ""
                    }`}
                    key={i}
                    data-slide-to={i}
                    onClick={(e) => handleSelect(i, e)}
                  />
                ))}
              </ol>
            </Carousel>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
