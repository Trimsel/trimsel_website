import Head from "next/head";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";
import Script from "next/script";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import { gsap, Power2 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ClientLogo from "../../components/clientLogo";
import { NextSeo } from 'next-seo';
import { postJson } from "../../lib/api";

function Portfolio() {
  const { gsap } = require("gsap/dist/gsap");
  const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let maskers = document.querySelectorAll(".masker");

    maskers.forEach((masker) => {
      let images = masker.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: masker,
          toggleActions: "restart none none reset",
        },
      });
      tl.set(masker, { autoAlpha: 1 });

      tl.from(masker, 1.5, {
        yPercent: -100,
        ease: Power2.out,
      });
      tl.from(images, 1.5, {
        yPercent: 100,
        scale: 1.3,
        delay: -1.3,
        ease: Power2.out,
      });
    });

    let masks = document.querySelectorAll(".mask");

    masks.forEach((mask) => {
      let imager = mask.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: mask,
          toggleActions: "restart none none reset",
          end: "200px 80%",
        },
      });
      tl.set(mask, { autoAlpha: 1 });

      tl.from(mask, 1.5, {
        xPercent: 100,
        ease: Power2.out,
      });
      tl.from(imager, 1.5, {
        xPercent: -100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out,
      });
    });
  }, []);
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
    try {
      await postJson("/api/contact", values);
      console.log("Contact request sent");
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  }
  return (
    <>
          <NextSeo
  title="Portfolio | Case Studies & Projects | Trimsel"
  description="Explore Trimsel’s portfolio—mobile apps, web platforms, DevOps and cloud projects delivered for startups and enterprises."
  canonical="https://www.trimsel.com/portfolio"
  openGraph={{
    type: "article",
    url: "https://www.trimsel.com/portfolio",
    title: "Portfolio | Case Studies & Projects | Trimsel",
    description:
      "Explore Trimsel’s portfolio—mobile apps, web platforms, DevOps and cloud projects delivered for startups and enterprises.",
    locale: "en_IN",
    site_name: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/portfolio-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Trimsel portfolio showcasing digital products delivered in Chennai",
      },
    ],
    article: {
      section: "Portfolio",
      tags: [
        "Case Studies",
        "Mobile Apps",
        "Cloud Consulting",
        "DevOps",
        "Product Engineering",
      ],
    },
  }}
  twitter={{
    cardType: "summary_large_image",
    handle: "@TrimselSoftwares",
    site: "@TrimselSoftwares",
  }}
  additionalMetaTags={[
    { name: "robots", content: "index, follow" },
    {
      name: "twitter:title",
      content: "Trimsel Portfolio – Case Studies & Digital Products",
    },
    {
      name: "twitter:description",
      content:
        "Review Trimsel’s portfolio of mobile apps, cloud platforms, and DevOps projects delivered for startups and enterprises.",
    },
    {
      name: "twitter:image:alt",
      content: "Trimsel portfolio showcasing recent digital projects",
    },
  ]}
/>

{/* JSON-LD */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      // 1) Portfolio listing as a CollectionPage with an ItemList of case studies
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://www.trimsel.com/portfolio#collection",
        "name": "Trimsel Portfolio",
        "description": "Case studies across mobile, web, DevOps and cloud.",
        "url": "https://www.trimsel.com/portfolio",
        "isPartOf": { "@type": "WebSite", "@id": "https://www.trimsel.com/#website" },
        "about": { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
        "mainEntity": {
          "@type": "ItemList",
          "itemListOrder": "https://schema.org/ItemListOrderAscending",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "url": "https://www.trimsel.com/portfolio/ezyhelpers-case-study",
              "name": "Ezyhelpers — Home Services App (iOS/Android/Web)"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "url": "https://www.trimsel.com/portfolio/kariot-case-study",
              "name": "KarIOT — Smart Water Management (IoT/Web)"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "url": "https://www.trimsel.com/portfolio/xaber-case-study",
              "name": "Xaber — Ride-hailing App Solution"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "url": "https://www.trimsel.com/portfolio/mocial-case-study",
              "name": "Mocial — DevOps & Cloud Transformation"
            }
          ]
        }
      },
      // 2) Breadcrumbs
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.trimsel.com/portfolio#breadcrumbs",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trimsel.com/" },
          { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.trimsel.com/portfolio" }
        ]
      }
    ])
  }}
/>
      <main>
        <section id="portfolio-hero">
          <Header />
          <section className="portfolio-hero">
            <div className="container prt-container">
              <div className="breadcrum">
                <p className="breadcrumbs-kar">
                  <Link href="/">Home</Link> <span> &#x2027; </span> Portfolio
                </p>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-8">
                  <div className="port-heading pt-3">
                    <h1 className="port-title">
                      We create successful digital experiences, turning your
                      ideas into great applications.
                    </h1>
                    <p className="abot-hero-para">
  From innovative mobile apps to robust web platforms, we help businesses turn ideas into exceptional digital products.  
  Our portfolio spans a range of solutions including{" "}
  <strong>Websites, Desktop and Mobile Applications</strong> for clients in diverse industries.
</p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4"
                  style={{ textAlign: "center" }}
                >
                  <Link href="contact-us" passHref>
                    <Image
                      src="/images/lettlk.png"
                      width={217}
                      height={219}
                      alt="Lets talk contact image"
                      className="lttalk"
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="portfolio-list py-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-5 col-md-5 content">
                  <Image
                    src="/images/01ezy.png"
                    width={190}
                    height={122}
                    alt="List number"
                    className="lez pb-3"
                  />
                  <h2 className="portlist-heading" style={{ color: "#10a8ef", fontWeight: 700 }}>Ezyhelpers</h2>
<div className="new-stack pt-3">
  <Stack direction="horizontal" gap={3}>
    <div className="badges-new">IOS & ANDROID</div>
    <div className="badges-new">WEB</div>
  </Stack>
</div>
<h2 className="portlist-desc py-2">
  Home Service & House Work App
</h2>
<p className="portlist-para">
  Ezyhelpers is a seamless mobile and web platform connecting users with trusted home service professionals. 
  Whether you need cleaning, elder care, cooking, plumbing, or other daily assistance, Ezyhelpers makes it easy to book reliable help—right from your phone.<br /><br />
  Designed for convenience and peace of mind, Ezyhelpers empowers busy families and individuals to manage household tasks effortlessly, with verified service providers and transparent booking.
</p>
<div id="container">
  <Link href="/portfolio/ezyhelpers-case-study" passHref className="new-portbtn">
    <button className="btn btn-primary get-btn">
      View Case Study{" "}
      <img src="/images/material-symbols_arrow-right-alt.png" alt="arrow icon" aria-label="View Case Study" />
    </button>
  </Link>
</div>
                </div>
                <div className="col-lg-7 col-md-7 col-image">
                  <div className="parent">
                    <div className="mask">
                      <img
                        className="image1"
                        align="right"
                        src="/Group 231.png"
                        alt="people cleaning house image"
                      />
                    </div>
                    <div className="masker">
                      <img
                        className="image2"
                        align="left"
                        src="/5399417 1.png"
                        width="480px"
                        height="531px"
                        alt="ezyhelper app preview"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row reversed-row my-5">
                <div className="col-lg-7 col-md-7 col-image">
                  <div className="parent">
                    <div className="mask">
                      <img
                        className="image1"
                        align="left"
                        src="/Group 233.png"
                        alt="kariot-background-image"
                      />
                    </div>
                    <div className="masker">
                      <Image
                        className="image3"
                        align="right"
                        src="/images/kariot-nwimg.webp"
                        width={623}
                        height={358}
                        alt="kariot-website-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 content">
                  <Image
                    src="/images/02kar.png"
                    width={190}
                    height={122}
                    alt="List number"
                    className="lek pb-3"
                  />
                  <h2 className="portlist-heading" style={{ color: "#10a8ef", fontWeight: 700 }}>KarIOT</h2>
<div className="new-stack pt-3">
  <Stack direction="horizontal" gap={3}>
    <div className="badges-new">IOS & ANDROID</div>
    <div className="badges-new">WEB</div>
  </Stack>
</div>
<h2 className="portlist-desc py-2">
  We aim to build a better world where clean water is accessible
</h2>
<p className="portlist-para">
  KarIOT is a smart water management system leveraging IoT technology to monitor, optimize, and automate water usage in high-rise buildings, commercial properties, and hotels. The platform enables real-time data collection, leak detection, and predictive maintenance, helping organizations conserve water, reduce costs, and achieve sustainability goals.<br /><br />
  KarIOT empowers facility managers and building owners to make data-driven decisions for efficient water usage—protecting resources and supporting a cleaner, greener future.
</p>
<div id="container">
  <Link href="/portfolio/kariot-case-study" passHref className="new-portbtn">
    <button className="btn btn-primary get-btn">
      View Case Study{" "}
      <img src="/images/material-symbols_arrow-right-alt.png" alt="arrow icon" aria-label="View Case Study" />
    </button>
  </Link>
</div>

                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-5 col-md-5 content">
                  <Image
                    src="/images/03.xab.png"
                    width={190}
                    height={122}
                    alt="List number"
                    className="lez pb-3"
                  />

<h2 className="portlist-heading" style={{ color: "#10a8ef", fontWeight: 700 }}>Xaber</h2>
<div className="new-stack pt-3">
  <Stack direction="horizontal" gap={3}>
    <div className="badges-new">IOS & ANDROID</div>
    <div className="badges-new">WEB</div>
  </Stack>
</div>
<h2 className="portlist-desc py-2">
  Taxi Business With Our Uber Clone Software
</h2>
<p className="portlist-para">
  Xaber is a robust ride-hailing app solution inspired by the Uber model, designed for startups and taxi businesses to launch their own branded service. The platform supports real-time bookings, driver tracking, fare calculation, and seamless payment integration—delivering a convenient and scalable experience for both riders and drivers.<br /><br />
  With Xaber, entrepreneurs and taxi operators can quickly enter the mobility market with a proven, customizable solution—empowering them to offer safe, reliable, and user-friendly transportation services.
</p>
<div id="container">
  <Link href="/portfolio/xaber-case-study" passHref className="new-portbtn">
    <button className="btn btn-primary get-btn">
      View Case Study{" "}
      <img src="/images/material-symbols_arrow-right-alt.png" alt="arrow icon" aria-label="View Case Study" />
    </button>
  </Link>
</div>

                </div>
                <div className="col-lg-7 col-md-7 col-image">
                  <div className="parent">
                    <div className="mask">
                      <img
                        className="image1"
                        align="right"
                        src="/Group 235.png"
                        alt="taxi background"
                      />
                    </div>
                    <div className="masker">
                      <img
                        className="image2"
                        align="left"
                        src="/5399417 2.png"
                        width="480px"
                        height="531px"
                        alt="xaber-app-preview"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 reversed-row">
                <div className="col-lg-7 col-md-7 col-image">
                  <div className="parent">
                    <div className="mask">
                      <img
                        className="image1"
                        align="left"
                        src="/images/mocial-portbg.png"
                        alt="social media background"
                      />
                    </div>
                    <div className="masker">
                      <img
                        className="image4"
                        align="right"
                        src="/images/mocial-app.webp"
                        width="420px"
                        height="472px"
                        alt="Mocial App Preview"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 content">
                  <Image
                    src="/images/04.moc.png"
                    width={190}
                    height={122}
                    alt="List number"
                    className="lek pb-3"
                  />
                  <h2 className="portlist-heading" style={{ color: "#10a8ef", fontWeight: 700 }}>Mocial</h2>
<div className="new-stack pt-3">
  <Stack direction="horizontal" gap={3}>
    <div className="badges-new">DevOps</div>
    <div className="badges-new">Cloud</div>
    <div className="badges-new">Architecture</div>
    <div className="badges-new">Consulting</div>
  </Stack>
</div>
<h2 className="portlist-desc py-2">
  DevOps & Cloud Transformation for a Next-Gen Social Platform
</h2>
<p className="portlist-para">
  Mocial is an ambitious all-in-one social super app, bringing together streaming, networking, and sharing into one unified experience. While the platform was developed by another team, the Mocial leadership engaged Trimsel to overcome major stability and scalability challenges that hindered user growth and reliability.<br /><br />
  <b>Our Impact:</b> Working closely with Mocial’s development team, Trimsel re-architected the platform using a microservices approach and modern cloud infrastructure. We designed and implemented an end-to-end DevOps strategy, including automated CI/CD pipelines, infrastructure-as-code, cloud monitoring, and self-healing deployments—ensuring the app could scale rapidly and run reliably at all times.<br /><br />
  Our DevOps and cloud transformation empowered Mocial to move faster, improve user experience, and focus on new features—without worrying about downtime, deployment issues, or scaling roadblocks.
</p>
<div id="container">
  <Link href="/portfolio/mocial-case-study" passHref className="new-portbtn">
    <button className="btn btn-primary get-btn">
      View Case Study{" "}
      <img src="/images/material-symbols_arrow-right-alt.png" alt="arrow icon" aria-label="View Case Study" />
    </button>
  </Link>
</div>

                </div>
              </div>
            </div>
          </section>
          <section className="pm-sec-cta">
            <div className="container">
              <Card className="port-cta my-5">
                <Card.Body>
                  <div className="row">
                    <div className="col-lg-7 col-md-7 col-12">
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
                      <h2 className="homcta-heading pt-2">
                        Have a project? We would love to help.
                      </h2>
                      <p className="hmcta-para">
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
                        src="/images/portcta.webp"
                        width={640}
                        height={660}
                        alt="Chat with our expert "
                        className="hmcta-image"
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </section>
        </section>
        <section id="client" className="client-section">
          <div className="container mt-5">
            <Stack direction="horizontal">
              <div className=" badge-abot-btn">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p> OUR CLIENTS </p>
              </div>
            </Stack>
            <div className="row pt-3">
              <div className="col-lg-6 col-md-6">
                <h2 className="client-title">
                  We're A Trusted Growth Partner
                </h2>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="cliented-text">
                  At Trimsel, there is continuous learning that happens as we
                  work on various projects. We also love to update and upgrade
                  with the latest innovations in the field of technology and
                  apps.
                </p>
              </div>
            </div>
            <ClientLogo />
          </div>
        </section>
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
                  Hello! Let's make great work together.{" "}
                  <span> &#129304; </span>{" "}
                </h2>
                <p className="contact-text">
                  Take your startup to the next level. Our process revolves
                  around your unique business needs.
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
                  <strong style={{ color: "#1e2436" }}> 30-Minute </strong>{" "}
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
                      <label
                        htmlFor="product"
                        className="abot-radio-style mt-3"
                      >
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
                      <label
                        htmlFor="mobile-app"
                        className="abot-radio-style mt-3"
                      >
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
                          selectedOption ===
                          "Quality Engineering and Technology"
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
        <Footer />
        <Script type="module" src="/sc.js"></Script>
      </main>
    </>
  );
}

export default Portfolio;
