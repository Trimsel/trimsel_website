import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
// import Button from "react-bootstrap/Button";
// import Carousel from "react-bootstrap/Carousel";
import Stack from "react-bootstrap/Stack";
import { useForm } from "react-hook-form";
import Card from "react-bootstrap/Card";
// import ScrollSection from "../components/ScrollSection";
import dynamic from 'next/dynamic';
import { NextSeo } from "next-seo";
// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
import ContactForm from "../components/ContactForm";
// import { useRouter } from "next/router";
// import { NextSeo } from 'next-seo';
// import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";
// import axios from "axios";
// import Footer from "../components/footer";
// import { useRouter } from "next/router";
// import HomeSlider from "../components/homeSlider";
// import ContactModal from "../components/ContactModal";

// Lazy Load Components for Performance Optimization
const Footer = dynamic(() => import("../components/footer"), { ssr: false });
const HomeSlider = dynamic(() => import("../components/homeSlider"), { ssr: false });
const ContactModal = dynamic(() => import("../components/ContactModal"), { ssr: false });

export default function Home() {
 

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

  const slides = [0, 1, 2];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
       {/* ✅ Next-SEO for SEO Optimization */}
       <NextSeo
  title="Digital Transformation Company in Chennai | Custom Software Services"
  description="Trimsel is a digital transformation company in Chennai offering software development, cloud solutions, DevOps & product engineering to scale your business."
  canonical="https://www.trimsel.com"
  openGraph={{
    type: "website",
    url: "https://www.trimsel.com",
    title: "Digital Transformation Company in Chennai | Custom Software Services",
    description: "Trimsel is a digital transformation company in Chennai offering software development, cloud solutions, DevOps & product engineering to scale your business.",
    images: [
      {
        url: "https://www.trimsel.com/images/home-hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Digital Transformation Company - Trimsel",
      },
    ],
    site_name: "Trimsel",
  }}
  additionalMetaTags={[
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ]}
  additionalJsonLd={[
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://www.trimsel.com",
      "name": "Trimsel - Digital Transformation & Software Services",
      "telephone": "+91 72008 41581",
      "description": "Trimsel is a digital transformation company offering custom software development, cloud consulting, DevOps, and digital product engineering.",
      "url": "https://www.trimsel.com",
      "logo": "https://www.trimsel.com/logo.png",
      "image": "https://www.trimsel.com/images/home-hero-banner.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 72008 41581",
        "contactType": "Customer Service",
        "areaServed": "Worldwide"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 21-B, 5th Cross St, South Phase, Thiru Vi Ka Industrial Estate, Guindy",
        "addressLocality": "Chennai",
        "addressRegion": "TN",
        "postalCode": "600032",
        "addressCountry": "IN"
      },
      "areaServed": [
  {
    "@type": "Place",
    "name": "Chennai",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0827",
      "longitude": "80.2707"
    }
  },
  { "@type": "Country", "name": "India" },
  { "@type": "Country", "name": "United Arab Emirates" },
  { "@type": "Country", "name": "Australia" },
  { "@type": "Country", "name": "United States" },
  { "@type": "Country", "name": "United Kingdom" },
  { "@type": "Country", "name": "Canada" },
  { "@type": "Country", "name": "Germany" },
  { "@type": "Country", "name": "France" },
  { "@type": "Country", "name": "Netherlands" },
  { "@type": "Country", "name": "Singapore" },
  { "@type": "Country", "name": "Malaysia" },
  { "@type": "Country", "name": "Kenya" },
  { "@type": "Country", "name": "South Africa" }
],
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "13.0827",
  "longitude": "80.2707"
},
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software & Digital Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps Consulting & Automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Consulting & Modernization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing & SEO" } }
        ]
      },
      "sameAs": [
        "https://www.linkedin.com/company/trimsel",
        "https://www.instagram.com/trimsel_softwares/",
        "https://www.google.com/maps/place/Trimsel/@13.0125615,80.1988776,904m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a52679044415e91:0xf6d63600f08408c6!8m2!3d13.0125615!4d80.2014525!16s%2Fg%2F11wm_p7v38?entry=ttu"
      ]
    }
  ]}
/>
      {/* ✅ Keep only necessary elements in <Head> */}
      <main>
        <HomeSlider />
        {/* ✅ Client Section */}
<section id="client" className="client-section">
  <div className="container mt-5 clt-container">
    <Stack direction="horizontal">
      <div className="badge-abot-btn">
        <Image
          src="/images/Rectangle-kariot.png"
          className="me-2"
          width={15}
          height={15}
          alt="Trimsel Section Divider"
          loading="lazy"
        />
        <p> OUR CLIENTS </p>
      </div>
    </Stack>

    <div className="row pt-3">
      <div className="col-lg-6 col-md-6">
        <h2 className="client-title">
          Trusted Digital Transformation Partner for Global Brands
        </h2>
      </div>
      <div className="col-lg-6 col-md-6">
        <p className="cliented-text">
          From ambitious startups to established enterprises, Trimsel has been a
          reliable technology partner delivering <strong>custom software solutions</strong>,{" "}
          <strong>cloud consulting</strong>, and <strong>mobile app development services</strong>.
          Our team thrives on innovation and continuously adapts to the latest tech trends to
          deliver scalable and high-performing digital products for diverse industries.
        </p>
      </div>
    </div>
            <div className="row client-row pt-3 text-center">
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg">
                  <Image
                    src="/trimsel-clients/taxpare.png"
                    width={130}
                    height={31.1}
                    alt="Taxpare Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg">
                  <Image
                    src="/trimsel-clients/transparent3x.png"
                    width={130}
                    height={33.35}
                    alt="Transparent Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg">
                  <Image
                    src="/trimsel-clients/ero.png"
                    width={120}
                    height={36.48}
                    alt="Ero Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg">
                  <Image
                    src="/trimsel-clients/xaber-logo.png"
                    width={130}
                    height={35.54}
                    alt="Xaber Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg">
                  <Image
                    src="/trimsel-clients/Logo-Main.png"
                    width={120}
                    height={39.37}
                    alt="Logo Main"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg">
                  <Image
                    src="/trimsel-clients/gobuzzr.png"
                    width={93.17}
                    height={39}
                    alt="GoBuzzr Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg new-pd">
                  <Image
                    src="/trimsel-clients/ezyhelpers-logo.png"
                    width={172}
                    height={54}
                    alt="Ezyhelpers Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg">
                  <Image
                    src="/trimsel-clients/celeb_gap.png"
                    width={160}
                    height={34.29}
                    alt="Celeb Gap Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg new-pd1">
                  <Image
                    src="/trimsel-clients/encompass-logo-regular 1.png"
                    width={120}
                    height={72.14}
                    alt="Encompass Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg">
                  <Image
                    src="/trimsel-clients/fisto.png"
                    width={110}
                    height={37.07}
                    alt="Fisto Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg">
                  <Image
                    src="/trimsel-clients/marc-shiparo.png"
                    width={164}
                    height={38.64}
                    alt="Marc Shiparo Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg">
                  <Image
                    src="/trimsel-clients/wood.png"
                    width={138}
                    height={42.71}
                    alt="Wood Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg new-pd2">
                  <Image
                    src="/trimsel-clients/kariot-logo.png"
                    width={110}
                    height={52}
                    alt="Kariot Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg new-pd3">
                  <Image
                    src="/trimsel-clients/progreen.png"
                    width={130}
                    height={53.18}
                    alt="Progreen Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg new-pd4">
                  <Image
                    src="/trimsel-clients/Collision-Masters.png"
                    width={125}
                    height={70}
                    alt="Collision Masters Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg new-pd5">
                  <Image
                    src="/trimsel-clients/mocile.png"
                    width={106}
                    height={106}
                    alt="Mocile Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg new-pd6">
                  <Image
                    src="/trimsel-clients/progreen1.png"
                    width={138.81}
                    height={50}
                    alt="Progreen Logo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 client-col">
                <div className="card client-bg new-pd6">
                  <Image
                    src="/trimsel-clients/housetoproofing1.png"
                    width={148}
                    height={50}
                    alt="House Top Roofing Logo"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="new-about">
          <div className="container nw-abt-container">
            <Stack direction="horizontal">
              <div className=" badge-abot-btn">
                <Image src={"/images/Rectangle-kariot.png"} className="me-2" width={15} height={15} alt="design-dot" loading="lazy"/>
                <p> WHO WE ARE </p>
              </div>
            </Stack>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <h3 className="client-abt-title pt-3">
                Powering Business Growth through Custom Software & Digital Innovation
                </h3>
                <div className="card ab-card">
                  <h4 className="sim-heading">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-3">
                        <span>
                          <Image
                            src="/images/mission-new.png"
                            width={70}
                            height={75}
                            alt="Check Icon"
                            className="check-image"
                            loading="lazy"
                          />
                        </span>
                      </div>
                      <div className="col-lg-9 col-md-12 col-9">
                        <h4 className="nwabt-heading">
                          Mission -{" "}
                          <span style={{ color: "#6b738a" }}>
                            {" "}
                            Driving Digital Transformation with Cutting-Edge Software Solutions{" "}
                          </span>
                        </h4>
                      </div>
                    </div>
                  </h4>
                </div>
                <Link href="/aboutus" passHref>
                  <button className="abt-btn">
                    Explore More{" "}
                    <Image src="/images/material-symbols_arrow-right-alt.png" width={24} height={24} alt="Arrow Icon" loading="lazy"/>
                  </button>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 mbvl">
              <p className="abt-hero-para">
          <strong>Trimsel is a digital transformation company</strong> focused on solving business challenges through
          <strong> custom software solutions, mobile apps, and cloud infrastructure.</strong> We help companies evolve from outdated systems to modern, scalable digital ecosystems.
        </p>
        <p className="abt-hero-para">
          Since 2020, we’ve empowered organizations with tailor-made technology that enhances performance, security, and customer engagement.
        </p>
        <p className="abt-hero-para">
          Backed by a team of top-tier <strong>developers, cloud architects, and DevOps engineers</strong>, Trimsel has delivered innovative digital products to <strong>Fortune 500 companies, SMEs, and startups</strong> across the globe.
        </p>
              </div>
              <div className="col-lg-4 col-md-12">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                {/* <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                > */}
                  <div className="row tblt-dvc">
                    <div className="col-md-6">
                      <div className="card smp-card">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-3">
                            <Image
                              src="/images/box-icon.png"
                              width={64}
                              height={64}
                              alt="Product Box Icon"
                              className="me-2 mt-3"
                              loading="lazy"
                            />
                          </div>
                          <div className="col-lg-9 col-md-9 col-9">
                            <h2 className="nwabt-car-heading">
                              {counterOn && (
                                <CountUp
                                  start={0}
                                  end={30}
                                  duration={2}
                                  delay={0}
                                />
                              )}
                              <span>+</span>
                            </h2>
                            <h3 className="abt-car-para">
                              {" "}
                              Web & Mobile Products{" "}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card smp-card mt-3">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-3">
                            <Image
                              src="/images/cstmr-icon.png"
                              width={64}
                              height={64}
                              alt="Users Icon"
                              className="me-2 mt-2"
                              loading="lazy"
                            />
                          </div>
                          <div className="col-lg-9 col-md-9 col-9">
                            <h2 className="nwabt-car-heading">
                              {counterOn && (
                                <CountUp
                                  start={0}
                                  end={2000}
                                  duration={2}
                                  delay={0}
                                />
                              )}
                              <span> + </span>
                            </h2>
                            <h3 className="abt-car-para">
                              {" "}
                              Million Users Touched
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card smp-card mt-3">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-3">
                            <Image
                              src="/images/rckt-icon.png"
                              width={64}
                              height={64}
                              alt="Rocket Launch Icon"
                              className="me-2 mt-2"
                              loading="lazy"
                            />
                          </div>
                          <div className="col-lg-9 col-md-9 col-9">
                            <h2 className="nwabt-car-heading">
                              {counterOn && (
                                <CountUp
                                  start={0}
                                  end={110}
                                  duration={2}
                                  delay={0}
                                />
                              )}
                              <span>+</span>
                            </h2>
                            <h3 className="abt-car-para"> Project Launched</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card smp-card mt-3">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-3">
                            <Image
                              src="/images/threestar.png"
                              width={64}
                              height={64}
                              alt="Customer Review Icon"
                              className="me-2 mt-2"
                              loading="lazy"
                            />
                          </div>
                          <div className="col-lg-9 col-md-9 col-9">
                            <h2 className="nwabt-car-heading">
                              {counterOn && (
                                <CountUp
                                  start={0}
                                  end={100}
                                  duration={2}
                                  delay={0}
                                />
                              )}
                              <span>%</span>
                            </h2>
                            <h3 className="abt-car-para">
                              {" "}
                              Customer Satisfication{" "}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card smp-card tbd">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-3">
                        <Image
                          src="/images/box-icon.png"
                          width={64}
                          height={64}
                          alt="Product Box Icon"
                          className="me-2 mt-3"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-lg-9 col-md-9 col-9">
                        <h2 className="nwabt-car-heading">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={30}
                              duration={2}
                              delay={0}
                            />
                          )}
                          <span>+</span>
                        </h2>
                        <h3 className="abt-car-para">
                          {" "}
                          Web & Mobile Products{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="card smp-card tbd mt-3">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-3">
                        <Image
                          src="/images/cstmr-icon.png"
                          width={64}
                          height={64}
                          alt="Users Icon"
                          className="me-2 mt-2"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-lg-9 col-md-9 col-9">
                        <h2 className="nwabt-car-heading">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={2000}
                              duration={2}
                              delay={0}
                            />
                          )}
                          <span> + </span>
                        </h2>
                        <h3 className="abt-car-para"> Million Users Touched</h3>
                      </div>
                    </div>
                  </div>
                  <div className="card smp-card tbd mt-3">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-3">
                        <Image
                          src="/images/rckt-icon.png"
                          width={64}
                          height={64}
                          alt="Rocket Launch Icon"
                          className="me-2 mt-2"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-lg-9 col-md-9 col-9">
                        <h2 className="nwabt-car-heading">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={110}
                              duration={2}
                              delay={0}
                            />
                          )}
                          <span>+</span>
                        </h2>
                        <h3 className="abt-car-para"> Project Launched</h3>
                      </div>
                    </div>
                  </div>
                  <div className="card smp-card tbd mt-3">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-3">
                        <Image
                          src="/images/threestar.png"
                          width={64}
                          height={64}
                          alt="Customer Review Icon"
                          className="me-2 mt-2"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-lg-9 col-md-9 col-9">
                        <h2 className="nwabt-car-heading">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={100}
                              duration={2}
                              delay={0}
                            />
                          )}
                          <span>%</span>
                        </h2>
                        <h3 className="abt-car-para">
                          {" "}
                          Customer Satisfication{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </ScrollTrigger>
              </div>
            </div>
            <div className="nwd-image">
              <Image
                src="/images/bullseye.webp"
                width={1340}
                height={754}
                alt="Trimsel Team - Building Digital Products"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* <section id="recent-works">
          <div className="container new-ds">
            <Stack direction="horizontal">
              <div className=" badge-abot-btn">
                <Image src={"/images/Rectangle-kariot.png"} className="me-2" width={15} height={15} alt="design-dot" loading="lazy"/>
                <p> CASE STUDIES </p>
              </div>
            </Stack>
            <div className="row pt-4">
              <div className="col-lg-3 col-md-3">
                <h2 className="case-heading">Our Recent Works</h2>
              </div>
              <div className="col-lg-6 col-md-6">
              <p className="case-para">
          Explore how Trimsel has delivered <strong>custom application development</strong>, 
          <strong> software solutions</strong>, and <strong>mobile app projects</strong> that drive real results. 
          Over the past 6 years, we’ve completed more than 200 digital transformation projects across industries worldwide.
        </p>
              </div>
              <div className="col-lg-3 col-md-3">
                <Link href="/portfolio" passHref>
                  <button className="about-btn">
                    View All Cases{" "}
                    <img src="/images/material-symbols_arrow-right-alt.png" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <ScrollSection />
        </section> */}
        

        {/*CTA Section */}
        <section className="hm-sec-cta">
  <div className="container">
    <Card className="home-cta my-5">
      <Card.Body>
        <div className="row">
          {/* CTA Content Left */}
          <div className="col-lg-7 col-md-7 col-12">
            <Stack direction="horizontal">
              <div className="badge-abot-btn">
                <Image
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  width={15}
                  height={15}
                  alt="design-dot"
                  loading="lazy"
                />
                <p> GET IN TOUCH </p>
              </div>
            </Stack>

            <h2 className="homcta-heading pt-2">
              Transform Your Vision into a Scalable Digital Product
            </h2>

            <p className="hmcta-para">
              Partner with Trimsel — your trusted{" "}
              <strong>custom software development company</strong> in Chennai — 
              for end-to-end digital transformation, application development, and cloud-first strategies.
            </p>

            <Link href="/contact-us" passHref>
              <button type="button" className="about-btn mt-3">
                Book a Free Strategy Call{" "}
                <Image
                  src="/images/material-symbols_arrow-right-alt.png"
                  width={24}
                  height={24}
                  alt="Arrow Right Icon"
                  loading="lazy"
                />
              </button>
            </Link>
          </div>

          {/* CTA Image Right */}
          <div className="col-lg-5 col-md-5">
            <Image
              src="/images/homecta.webp"
              width={640}
              height={660}
              alt="Connect with Trimsel's Digital Experts"
              className="hmcta-image"
              loading="lazy"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
</section>


        {/*Service Section */}

        <section id="services">
  <div className="container service-container">
    <Stack direction="horizontal">
      <div className="badge-abot-btn">
        <Image src="/images/Rectangle-kariot.png" className="me-2" width={15} height={15} alt="design-dot" loading="lazy" />
        <p> WHAT WE DO </p>
      </div>
    </Stack>

    <div className="row pt-4">
      <div className="col-lg-6 col-md-6">
        <h2 className="service-heading pb-1">
          Comprehensive Digital Solutions for Your Business Growth
        </h2>
      </div>
      <div className="col-lg-6 col-md-6">
        <p className="service-para pb-3">
          From innovative web and mobile development to DevOps and cloud consulting, Trimsel empowers businesses with future-ready technology. Scale with us through tailored digital transformation services.
        </p>
      </div>
    </div>

    <div className="row">
      {/* Mobile App */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card">
          <Card.Body>
            <Image src="/images/app-development.png" width={80} height={80} className="do-icon pb-3" alt="App Development icon" loading="lazy" />
            <h3 className="qs-card-heading">Mobile App Development</h3>
            <p className="qsd-para">
              As a <a href="/mobile-app-development-chennai">top mobile app development company in Chennai</a>, we deliver custom Android, iOS & cross-platform solutions with exceptional UX, performance, and scalability.
            </p>
            <Link href="/mobile-app-development-chennai" passHref>
              <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="Mobile App CTA" loading="lazy" />
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* Web Development */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card">
          <Card.Body>
            <Image src="/images/backend.png" width={80} height={80} className="do-icon pb-3" alt="Web Development icon" loading="lazy" />
            <h3 className="qs-card-heading">Website Development</h3>
            <p className="qsd-para">
              We’re a <a href="/web-development-compant-chennai">leading website development company in Chennai</a> building fast, SEO-friendly websites and enterprise-grade web applications that scale with your business.
            </p>
            <Link href="/web-development-company-chennai" passHref>
              <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="Web CTA" loading="lazy" />
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* Cloud Services */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card">
          <Card.Body>
            <Image src="/images/cloud-computing.png" width={80} height={80} className="do-icon pb-3" alt="Cloud Computing icon" loading="lazy" />
            <h3 className="qs-card-heading">Cloud Consulting Services</h3>
            <p className="qsd-para">
              Our <a href="/cloud-consulting-services">cloud consulting experts</a> help you migrate, modernize, and optimize with AWS, Azure, and GCP for scalable and cost-effective cloud infrastructure.
            </p>
            <Link href="/cloud-consulting-services" passHref>
              <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="Cloud CTA" loading="lazy" />
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* DevOps */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card">
          <Card.Body>
            <Image src="/images/devops.png" width={80} height={80} className="do-icon pb-3" alt="DevOps icon" loading="lazy" />
            <h3 className="qs-card-heading">DevOps Consulting</h3>
            <p className="qsd-para">
              Our <a href="/devops-consulting-service">DevOps services in India</a> bring automation, CI/CD, and container orchestration (Kubernetes, Docker) to boost development speed and infrastructure reliability.
            </p>
            <Link href="/devops-consulting-service" passHref>
              <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="DevOps CTA" loading="lazy" />
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* Digital Marketing */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card">
          <Card.Body>
            <Image src="/images/digital-marketing.png" width={80} height={80} className="do-icon pb-3" alt="Digital Marketing icon" loading="lazy" />
            <h3 className="qs-card-heading">Digital Marketing</h3>
            <p className="qsd-para">
              As a performance-driven <a href="/digital-marketing">digital marketing agency in Chennai</a>, we offer SEO, PPC, social ads & content strategies to help you grow visibility and leads.
            </p>
            <Link href="/digital-marketing" passHref>
              <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="Marketing CTA" loading="lazy" />
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* Testing */}
      {/* <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card">
          <Card.Body>
            <Image src="/images/testing.png" width={80} height={80} className="do-icon pb-3" alt="Testing icon" loading="lazy" />
            <h3 className="asd-card-heading">Quality Engineering & Testing</h3>
            <p className="qsd-para">
              Ensure flawless delivery with <a href="/quality-engineering-testing">automated & manual software testing services</a>. We cover performance, functional, and security testing to deliver reliable systems.
            </p>
            <Link href="/quality-engineering-testing" passHref>
              <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="Testing CTA" loading="lazy" />
            </Link>
          </Card.Body>
        </Card>
      </div> */}
    </div>
  </div>
</section>

<section id="why-mnt">
  <div className="container mnt-container">
    <Stack direction="horizontal">
      <div className="badge-abot-btn">
        <Image src="/images/Rectangle-kariot.png" className="me-2" width={15} height={15} alt="design-dot" loading="lazy" />
        <p> WHY TRIMSEL </p>
      </div>
    </Stack>

    <div className="row pt-4">
      <div className="col-lg-6 col-md-6">
        <h2 className="service-heading pb-1">
          Empowering Businesses with 360° Digital Transformation
        </h2>
      </div>
      <div className="col-lg-6 col-md-6">
        <p className="abot-hero-para">
          Trimsel is a trusted <strong>software development company in Chennai</strong> offering full-cycle digital solutions — from <strong>mobile app development</strong> and <strong>cloud services</strong> to <strong>DevOps automation</strong>. Our client-first approach, technology depth, and end-to-end delivery model make us a reliable digital growth partner.
        </p>
      </div>
    </div>

    <div className="row pt-4">
      <div className="col-lg-3 col-md-6 my-3">
        <Card className="hm-card tbt">
          <Image src="/images/group-icon.png" width={50} height={50} alt="Client Portfolio Icon" className="grp" />
          <h4 className="hmcard-heading pt-3">Diverse Global Clientele</h4>
          <p className="carels-para">
            From startups and SMBs to Fortune 500 enterprises, Trimsel has delivered <strong>custom software solutions</strong> tailored to unique business models and challenges across industries.
          </p>
        </Card>
      </div>

      <div className="col-lg-3 col-md-6 my-3">
        <Card className="hm-card">
          <Image src="/images/expert-icon.png" width={50} height={50} alt="Expert Icon" className="grp" loading="lazy" />
          <h4 className="hmcard-heading pt-3">Domain & Tech Expertise</h4>
          <p className="carels-para">
            Our certified developers, DevOps engineers, and UI/UX designers have deep expertise in <strong>cloud computing, full stack development,</strong> and emerging tech like AI & automation.
          </p>
        </Card>
      </div>

      <div className="col-lg-3 col-md-6 my-3">
        <Card className="hm-card tbt">
          <Image src="/images/solution.png" width={50} height={50} alt="Solution Icon" className="grp" loading="lazy" />
          <h4 className="hmcard-heading pt-3">Flexible Engagement Models</h4>
          <p className="carels-para">
            Whether you need end-to-end product delivery, team augmentation, or <strong>application development outsourcing</strong>, we adapt our approach to your preferred engagement style.
          </p>
        </Card>
      </div>

      <div className="col-lg-3 col-md-6 my-3">
        <Card className="hm-card">
          <Image src="/images/selection.png" width={50} height={50} alt="Selection Icon" className="grp" loading="lazy" />
          <h4 className="hmcard-heading pt-3">All-in-One IT Partner</h4>
          <p className="carels-para">
            We manage your entire digital journey in-house — design, development, DevOps, QA, and support — ensuring seamless collaboration and better cost control.
          </p>
        </Card>
      </div>
    </div>
  </div>
</section>


        {/* <section id="stage-modal">
          <div className="container new-ds">
            <Stack direction="horizontal">
              <div className=" badge-abot-btn">
                <Image src="/images/Rectangle-kariot.png" className="me-2" width={15} height={15} alt="design-dot" loading="lazy"/>
                <p> FIVE STAGES </p>
              </div>
            </Stack>
            <div className="row pt-4">
              <div className="col-lg-4 col-md-4">
                <h2 className="case-heading">Our Proven 5-Step Digital Transformation Process for Business Growth</h2>
              </div>
              <div className="col-lg-4 col-md-4">
                <p className="case-para">
                At Trimsel, our <strong>digital transformation process</strong> is built on a structured 5-step model designed to maximize ROI and minimize risk. We blend <strong>strategic planning, agile development,</strong> and scalable cloud-native solutions to turn your ideas into business-ready digital products. From discovery to continuous improvement, our approach ensures end-to-end success.
                </p>
              </div>
              <div className="col-lg-4 col-md-4">
                <Button href="/portfolio" className="cntct-btn">
                  <p>look at our</p> <h6>Case Studies</h6>{" "}
                </Button>
              </div>
            </div>
            <div className="img-containers">
              <img src="/images/5stages.svg" />
            </div>
          </div>
        </section>

        <section id="testimonials" className="my-4 py-4">
          <div className="container testimonial-container">
            <Stack direction="horizontal">
              <div className=" badge-abot-btn">
                <Image src="/images/Rectangle-kariot.png" className="me-2" width={15} height={15} alt="design-dot" loading="lazy"/>
                <p> TESTIMONIALS </p>
              </div>
            </Stack>
            <div className="row py-4">
              <div className="col-lg-6 col-md-6">
                <h3 className="tst-heading">
                  What Clients are Saying About Our Collaboration
                </h3>
              </div>
            </div>
            <Carousel
              className="hm-cars"
              animation="fade"
              prevIcon={
                <img
                  src="/images/newarleft.png"
                  width={58}
                  className="previousdm-icon"
                  alt="Previous"
                  loading="lazy"
                />
              }
              nextIcon={
                <img
                  src="/images/newarrow.png"
                  width={58}
                  className="nextdm-icon"
                  alt="Next"
                  loading="lazy"
                />
              }
              interval={null}
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
            >
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mt-3">
                    <Card className="dm-customize-card">
                      <Card.Body
                        style={{ paddingRight: "0px", paddingLeft: "0px" }}
                      >
                        <div className="cl-container">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-3 col-md-3 col-3">
                              <Image
                                src="/images/client.webp"
                                width={120}
                                height={120}
                                className="client-icon pb-3"
                                alt="Client Icon"
                                loading="lazy"
                              />
                            </div>
                            <div
                              className="col-lg-7 col-md-6 col-6"
                              style={{
                                paddingLeft: "0px",
                                paddingRight: "0px",
                              }}
                            >
                              <h3 className="dm-card-heading">
                                Kalyan Krishnamurthy,
                                <br />
                                <span className="txt">CEO at Flipkart</span>
                              </h3>
                            </div>
                            <div className="col-lg-2 col-md-3 col-3">
                              <span className="lnkimg">
                                <Image
                                  src="/images/bi_linkedin.png"
                                  width={30}
                                  height={30}
                                  alt="Linkedin Icon image"
                                  loading="lazy"
                                />
                              </span>
                            </div>
                          </div>
                        </div>

                        <blockquote className="test-text align-middle card-row">
                          It's a big team and what's really good is that it's a
                          specialized team, so that means they have to be the
                          best at what they do. I am very happy and impressed.
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-3">
                    <Card className="dm-customize-card">
                      <Card.Body
                        style={{ paddingRight: "0px", paddingLeft: "0px" }}
                      >
                        <div className="cl-container">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-3 col-md-3 col-3">
                              <Image
                                src="/images/client.webp"
                                width={120}
                                height={120}
                                className="client-icon pb-3"
                                alt="Client Icon"
                                loading="lazy"
                              />
                            </div>
                            <div
                              className="col-lg-7 col-md-6 col-6"
                              style={{
                                paddingLeft: "0px",
                                paddingRight: "0px",
                              }}
                            >
                              <h3 className="dm-card-heading">
                                Kalyan Krishnamurthy,
                                <br />
                                <span className="txt">CEO at Flipkart</span>
                              </h3>
                            </div>
                            <div className="col-lg-2 col-md-3 col-3">
                              <span className="lnkimg">
                                <Image
                                  src="/images/bi_linkedin.png"
                                  width={30}
                                  height={30}
                                  alt="Linkedin Icon image"
                                  loading="lazy"
                                />
                              </span>
                            </div>
                          </div>
                        </div>

                        <blockquote className="test-text align-middle card-row">
                          It's a big team and what's really good is that it's a
                          specialized team, so that means they have to be the
                          best at what they do. I am very happy and impressed.
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mt-3">
                    <Card className="dm-customize-card">
                      <Card.Body
                        style={{ paddingRight: "0px", paddingLeft: "0px" }}
                      >
                        <div className="cl-container">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-3 col-md-3 col-3">
                              <Image
                                src="/images/client.webp"
                                width={120}
                                height={120}
                                className="client-icon pb-3"
                                alt="Client Icon"
                                loading="lazy"
                              />
                            </div>
                            <div
                              className="col-lg-7 col-md-6 col-6"
                              style={{
                                paddingLeft: "0px",
                                paddingRight: "0px",
                              }}
                            >
                              <h3 className="dm-card-heading">
                                Kalyan Krishnamurthy,
                                <br />
                                <span className="txt">CEO at Flipkart</span>
                              </h3>
                            </div>
                            <div className="col-lg-2 col-md-3 col-3">
                              <span className="lnkimg">
                                <Image
                                  src="/images/bi_linkedin.png"
                                  width={30}
                                  height={30}
                                  alt="Linkedin Icon image"
                                  loading="lazy"
                                />
                              </span>
                            </div>
                          </div>
                        </div>

                        <blockquote className="test-text align-middle card-row">
                          It's a big team and what's really good is that it's a
                          specialized team, so that means they have to be the
                          best at what they do. I am very happy and impressed.
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-3">
                    <Card className="dm-customize-card">
                      <Card.Body
                        style={{ paddingRight: "0px", paddingLeft: "0px" }}
                      >
                        <div className="cl-container">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-3 col-md-3 col-3">
                              <Image
                                src="/images/client.webp"
                                width={120}
                                height={120}
                                className="client-icon pb-3"
                                alt="Client Icon"
                                loading="lazy"
                              />
                            </div>
                            <div
                              className="col-lg-7 col-md-6 col-6"
                              style={{
                                paddingLeft: "0px",
                                paddingRight: "0px",
                              }}
                            >
                              <h3 className="dm-card-heading">
                                Kalyan Krishnamurthy,
                                <br />
                                <span className="txt">CEO at Flipkart</span>
                              </h3>
                            </div>
                            <div className="col-lg-2 col-md-3 col-3">
                              <span className="lnkimg">
                                <Image
                                  src="/images/bi_linkedin.png"
                                  width={30}
                                  height={30}
                                  alt="Linkedin Icon image"
                                  loading="lazy"
                                />
                              </span>
                            </div>
                          </div>
                        </div>

                        <blockquote className="test-text align-middle card-row">
                          It's a big team and what's really good is that it's a
                          specialized team, so that means they have to be the
                          best at what they do. I am very happy and impressed.
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mt-3">
                    <Card className="dm-customize-card">
                      <Card.Body
                        style={{ paddingRight: "0px", paddingLeft: "0px" }}
                      >
                        <div className="cl-container">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-3 col-md-3 col-3">
                              <Image
                                src="/images/client.webp"
                                width={120}
                                height={120}
                                className="client-icon pb-3"
                                alt="Client Icon"
                                loading="lazy"
                              />
                            </div>
                            <div
                              className="col-lg-7 col-md-6 col-6"
                              style={{
                                paddingLeft: "0px",
                                paddingRight: "0px",
                              }}
                            >
                              <h3 className="dm-card-heading">
                                Kalyan Krishnamurthy,
                                <br />
                                <span className="txt">CEO at Flipkart</span>
                              </h3>
                            </div>
                            <div className="col-lg-2 col-md-3 col-3">
                              <span className="lnkimg">
                                <Image
                                  src="/images/bi_linkedin.png"
                                  width={30}
                                  height={30}
                                  alt="Linkedin Icon image"
                                  loading="lazy"
                                />
                              </span>
                            </div>
                          </div>
                        </div>

                        <blockquote className="test-text align-middle card-row">
                          It's a big team and what's really good is that it's a
                          specialized team, so that means they have to be the
                          best at what they do. I am very happy and impressed.
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-3">
                    <Card className="dm-customize-card">
                      <Card.Body
                        style={{ paddingRight: "0px", paddingLeft: "0px" }}
                      >
                        <div className="cl-container">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-3 col-md-3 col-3">
                              <Image
                                src="/images/client.webp"
                                width={120}
                                height={120}
                                className="client-icon pb-3"
                                alt="Client Icon"
                                loading="lazy"
                              />
                            </div>
                            <div
                              className="col-lg-7 col-md-6 col-6"
                              style={{
                                paddingLeft: "0px",
                                paddingRight: "0px",
                              }}
                            >
                              <h3 className="dm-card-heading">
                                Kalyan Krishnamurthy,
                                <br />
                                <span className="txt">CEO at Flipkart</span>
                              </h3>
                            </div>
                            <div className="col-lg-2 col-md-3 col-3">
                              <span className="lnkimg">
                                <Image
                                  src="/images/bi_linkedin.png"
                                  width={30}
                                  height={30}
                                  alt="Linkedin Icon image"
                                  loading="lazy"
                                />
                              </span>
                            </div>
                          </div>
                        </div>

                        <blockquote className="test-text align-middle card-row">
                          It's a big team and what's really good is that it's a
                          specialized team, so that means they have to be the
                          best at what they do. I am very happy and impressed.
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </section> */}
        {/* <section id="blog" className="py-4">
          <div className="container blog-container">
            <div className="row py-3">
              <Stack direction="horizontal">
                <div className=" badge-abot-btn">
                  <Image src="/images/Rectangle-kariot.png" className="me-2" width={15} height={15} alt="design-dot" loading="lazy"/>
                  <p> <b> OUR BLOGS </b> </p>
                </div>
              </Stack>
              <div className="col-lg-5 col-md-5 py-4">
                <h2 className="contacts-heading">
                  Read Our Latest Blogs and News
                </h2>
              </div>
              <div className="col-lg-7 col-md-7 py-4">
                <p className="blog-para">
                  At Trimsel, there is continuous learning that happens as we
                  work on various projects. We also love to update and upgrade
                  with the latest innovations in the field of technology and
                  apps.
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="card blog-card">
                  <div className="row no-gutters">
                    <div className="col-lg-5 col-md-5 py-3">
                      <img
                        className="card-img"
                        src="/images/blog-img.png"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <Button className="card-badge mb-2">Development</Button>
                      <h5 className="blog-card-title">
                        Top 10 Mobile App Development Frameworks in 2023
                      </h5>
                      <p className="blog-card-para">
                        We've entered on age where our lives are...{" "}
                        <Link href="#">Read More</Link>
                      </p>
                    </div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col-lg-5 col-md-5 py-3">
                      <img
                        className="card-img"
                        src="/images/blogs-img.png"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-7 col-md-7 py-3">
                      <Button className="card-badge mb-2">Development</Button>
                      <h5 className="blog-card-title">
                        Top 10 Mobile App Development Frameworks in 2023
                      </h5>
                      <p className="blog-card-para">
                        We've entered on age where our lives are...{" "}
                        <Link href="#">Read More</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card blog-card">
                  <div className="card-image">
                    <img className="blog-image" src="/images/blog-image.png" />
                  </div>
                  <div className="card-content">
                    <Button className="card-badge my-2">Development</Button>
                    <h5 className="blogs-card-title">
                      How hybrid app development can help you build custom apps
                    </h5>
                    <p className="blog-card-para">
                      Digitization has taken over every industry and business
                      aspect. The pandemic only fuelled our shift tower...
                      <Link href="#">Read More</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <ContactForm />
        {/* <ContactModal title = "Have A Project Idea ? Contact Us" /> */}
        <section id="faq">
  <div className="container faq-container">
    <h2 className="faq-heading">Frequently Asked Questions</h2>
    <Accordion defaultActiveKey="0" flush className="py-5">
      <Accordion.Item eventKey="0" className="pb-3">
        <Accordion.Header>
          What services does Trimsel provide?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Trimsel offers <a href="/custom-software-development">custom software development</a>, <a href="/mobile-app-development-chennai">mobile app development in Chennai</a>, web design, <a href="/cloud-consulting-services">cloud consulting</a>, DevOps automation, digital marketing, and quality engineering services. Our solutions are tailored to help businesses digitally transform and scale efficiently.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="pb-3">
        <Accordion.Header>
          What industries does Trimsel serve?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            We work across multiple industries including Fintech, Healthcare, E-commerce, SaaS, Logistics, and Startups. Our <a href="/digital-transformation">digital transformation solutions</a> are customized to suit industry-specific needs such as scalability, compliance, and automation.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="pb-3">
        <Accordion.Header>
          How much does custom application development cost?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            The cost of <a href="/custom-software-development">custom application development</a> varies based on project complexity, tech stack, timeline, and features. We offer flexible engagement models for startups, SMEs, and enterprises. Get a free consultation to receive a tailored quote.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className="pb-3">
        <Accordion.Header>
          Do you offer DevOps and CI/CD automation?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes. Our <a href="/devops-consulting-service">DevOps consulting services</a> include CI/CD pipeline setup, Kubernetes deployment, infrastructure automation using Terraform, and cloud-native implementation across AWS, GCP, and Azure.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className="pb-3">
        <Accordion.Header>
          Can I hire a dedicated development team from Trimsel?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Absolutely. You can hire dedicated developers, UI/UX designers, cloud engineers, or DevOps specialists on a full-time or project basis. Our agile teams follow best practices to deliver quality software efficiently.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className="pb-3">
        <Accordion.Header>
          What makes Trimsel different from other IT service providers?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Our client-first approach, commitment to innovation, and cross-functional expertise make us a reliable <strong>digital transformation partner</strong>. We deliver scalable, secure, and future-ready tech solutions, not just code.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</section>

        <Footer />
      </main>
    </>
  );
}
