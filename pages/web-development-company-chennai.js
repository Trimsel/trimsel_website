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
import { NextSeo } from 'next-seo';

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
<NextSeo
  title="Top Web Development Company in Chennai | Website Design Experts"
  description="Trimsel is a top web development company in Chennai offering website design, CMS, ecommerce, and custom solutions in ReactJS & NodeJS."
  canonical="https://trimsel.com/web-development-company-chennai"
  openGraph={{
    type: "website",
    url: "https://trimsel.com/web-development-company-chennai",
    title: "Top Web Development Company in Chennai | Website Design & Development",
    description:
      "Trimsel is a trusted web development company in Chennai, offering high-performance web development services, including ReactJS, NodeJS, CMS, and ecommerce.",
    images: [
      {
        url: "https://trimsel.com/images/web-dev-hero.png",
        width: 1200,
        height: 630,
        alt: "Top Web Development Company in Chennai"
      }
    ],
    site_name: "Trimsel"
  }}
  additionalMetaTags={[
    {
      name: "robots",
      content: "noindex, nofollow"
    }
  ]}
  additionalJsonLd={[
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://trimsel.com/web-development-company-chennai",
      "name": "Trimsel - Web Development Company",
      "telephone": "+91 72008 41581",
      "description": "Trimsel is a top web development company in Chennai, India. We specialize in website design, ecommerce, CMS, and web app development using ReactJS & NodeJS.",
      "url": "https://trimsel.com/web-development-company-chennai",
      "logo": "https://trimsel.com/logo.png",
      "image": "https://trimsel.com/images/web-dev-hero.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 72008 41581",
        "contactType": "Customer Service",
        "areaServed": "Worldwide"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 21-B, 5th Cross St, South Phase, Thiru Vi Ka Industrial Estate, Indira Nagar, Guindy",
        "addressLocality": "Chennai",
        "addressRegion": "TN",
        "postalCode": "600032",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "GeoShape",
        "name": "Global",
        "box": "-90,-180 90,180",
        "additionalProperty": [
          { "@type": "GeoCoordinates", "name": "Chennai", "latitude": "13.0827", "longitude": "80.2707" },
          { "@type": "GeoCoordinates", "name": "Tirunelveli", "latitude": "8.7139", "longitude": "77.7567" },
          { "@type": "GeoCoordinates", "name": "Bangalore", "latitude": "12.9716", "longitude": "77.5946" },
          { "@type": "GeoCoordinates", "name": "Mumbai", "latitude": "19.0760", "longitude": "72.8777" },
          { "@type": "GeoCoordinates", "name": "Delhi", "latitude": "28.6139", "longitude": "77.2090" },
          { "@type": "GeoCoordinates", "name": "Dubai", "latitude": "25.276987", "longitude": "55.296249" },
          { "@type": "GeoCoordinates", "name": "Melbourne", "latitude": "-37.8136", "longitude": "144.9631" },
          { "@type": "GeoCoordinates", "name": "Sydney", "latitude": "-33.8688", "longitude": "151.2093" },
          { "@type": "GeoCoordinates", "name": "Brisbane", "latitude": "-27.4698", "longitude": "153.0251" },
          { "@type": "GeoCoordinates", "name": "New York", "latitude": "40.7128", "longitude": "-74.0060" },
          { "@type": "GeoCoordinates", "name": "San Francisco", "latitude": "37.7749", "longitude": "-122.4194" },
          { "@type": "GeoCoordinates", "name": "Los Angeles", "latitude": "34.0522", "longitude": "-118.2437" },
          { "@type": "GeoCoordinates", "name": "Chicago", "latitude": "41.8781", "longitude": "-87.6298" },
          { "@type": "GeoCoordinates", "name": "Toronto", "latitude": "43.651070", "longitude": "-79.347015" },
          { "@type": "GeoCoordinates", "name": "Vancouver", "latitude": "49.2827", "longitude": "-123.1207" },
          { "@type": "GeoCoordinates", "name": "London", "latitude": "51.5074", "longitude": "-0.1278" },
          { "@type": "GeoCoordinates", "name": "Manchester", "latitude": "53.4808", "longitude": "-2.2426" },
          { "@type": "GeoCoordinates", "name": "Berlin", "latitude": "52.5200", "longitude": "13.4050" },
          { "@type": "GeoCoordinates", "name": "Paris", "latitude": "48.8566", "longitude": "2.3522" },
          { "@type": "GeoCoordinates", "name": "Amsterdam", "latitude": "52.3676", "longitude": "4.9041" },
          { "@type": "GeoCoordinates", "name": "Singapore", "latitude": "1.3521", "longitude": "103.8198" },
          { "@type": "GeoCoordinates", "name": "Kuala Lumpur", "latitude": "3.1390", "longitude": "101.6869" },
          { "@type": "GeoCoordinates", "name": "Nairobi", "latitude": "-1.2921", "longitude": "36.8219" },
          { "@type": "GeoCoordinates", "name": "Johannesburg", "latitude": "-26.2041", "longitude": "28.0473" },
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
        ]
      },
      "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development Company in Chennai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development Company in Chennai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design Company in Chennai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ecommerce Website Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ReactJS & NodeJS Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WordPress & CMS Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Static Website Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Hosting & Maintenance" } }
      ]
    },
      "sameAs": [
        "https://www.linkedin.com/company/trimsel",
        "https://www.instagram.com/trimsel_softwares/",
        "https://www.google.com/maps/place/Trimsel/@13.0125615,80.1988776,904m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a52679044415e91:0xf6d63600f08408c6!8m2!3d13.0125615!4d80.2014525!16s%2Fg%2F11wm_p7v38?entry=ttu"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Why should I choose Trimsel as my web development company in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trimsel is a leading web development company in Chennai offering customized websites, web apps, CMS platforms, and ecommerce solutions. With deep technical expertise in ReactJS, NodeJS, and WordPress, we deliver scalable and secure solutions that meet your business goals."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to build a website or web application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website development costs depend on features, design complexity, tech stack, and platform. A basic website may start at ₹25,000, while advanced ecommerce or web apps can range upwards of ₹1,00,000. We offer affordable pricing for startups and enterprises alike."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timelines depend on project complexity. A static website may take 2-3 weeks, while dynamic or ecommerce platforms take 4-10 weeks. Our agile process ensures timely delivery with milestone-based tracking."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide SEO-optimized websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we build SEO-friendly websites following Google’s latest guidelines, including optimized URLs, meta tags, mobile responsiveness, and performance improvements. We also offer digital marketing services for long-term growth."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve for web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve a wide range of industries including ecommerce, education, healthcare, logistics, real estate, SaaS, travel, and finance. Our web development services are tailored to the specific needs of each domain."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with modern frameworks and languages like ReactJS, Angular, VueJS, NodeJS, .NET, PHP, WordPress, MongoDB, and MySQL. We choose the stack based on performance, scalability, and your business goals."
        }
      },
      {
        "@type": "Question",
        "name": "Can you redesign or revamp my existing website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Whether your website is outdated, slow, or not mobile-responsive, we can revamp it with a modern design, better performance, and improved user experience to reflect your brand and attract more visitors."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ecommerce website development in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build secure and scalable ecommerce websites using WooCommerce, Shopify, Magento, and custom solutions. Our ecommerce development includes product management, payment gateway integration, and responsive design."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer CMS-based website development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our CMS development services cover WordPress, Drupal, Joomla, and custom CMS platforms. We ensure your content management system is intuitive, secure, and easy to manage without technical knowledge."
        }
      },
      {
        "@type": "Question",
        "name": "Will you maintain and update my website after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Trimsel offers post-launch website support including bug fixes, security patches, feature updates, and performance optimization. Our maintenance plans ensure your website remains up-to-date and competitive."
        }
      }]
    }
  ]}
/>
<main>
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
                          {/* <Link href="#">Services</Link> <span> &#x2027; </span>{" "} */}
                          Web Development Services
                        </p>
                      </div>
                    </div>
                    <div className="cafe">
                      <div className="cafe-inner news-title">
                      Top Web Development Company in Chennai – Fast, Scalable & Custom Websites
                      </div>
                    </div>
                    <div className="mozart">
                      <div className="mozart-inner">
                        <p>
                        Trimsel is a leading web development company in Chennai delivering responsive, SEO-friendly websites and web applications. Our developers specialize in ReactJS, NodeJS, WordPress, and CMS platforms to build fast, scalable, and conversion-driven websites for businesses of all sizes.
                        </p>
                      </div>
                    </div>
                    <div className="mozarts">
                      <div className="mozarts-inner">
                      <Link href="/contact-us" passHref>
                        <button className="btn btn-primary dev-btn">
                        Get a Free Web Development Consultation{" "}
                          <img
                            src="/images/material-symbols_arrow-right-alt.png"
                            alt="arrow-icon"
                          />
                        </button>
                        </Link>
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
                    alt="Custom Website and Web Application Development Company in Chennai"
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
                Web Development Services in Chennai – Tailored for Growth
              </h2>
              {/* <Button className="web-btn mb-3" href="#">
                <img
                  src="/images/Group309.png"
                  width={40}
                  alt="icon-fire-clock"
                />{" "}
                Quick Delivery at{" "}
                <span style={{ color: "#01aaec" }}> Half the Cost </span>{" "}
              </Button> */}
              <p className="web-abt-para pb-3">
  In today’s fast-paced digital world, your website is more than just a digital address — it's your brand’s first impression, credibility marker, and sales engine. At Trimsel, a top web development company in Chennai, we don’t just build websites — we craft digital experiences that connect, convert, and scale. From <Link href="/digital-marketing">SEO-ready architecture</Link> to responsive design, every site we build is primed for visibility and performance. Whether you're launching a new brand, expanding your ecommerce presence, or modernizing an outdated site, our goal is to turn your vision into a high-performance web solution.
</p>

              <p className="web-abt-para pb-3">
          At Trimsel, we empower businesses with high-quality web development services in Chennai. As a trusted website development company, we build fast, secure, and scalable websites, web applications, and CMS platforms that align with your goals.
        </p>

        <p className="web-abt-para pb-3">
          From startups to enterprises, our custom web solutions include:
        </p>

        <ul className="web-features-list pb-3">
          <li>✅ <strong>Custom Website Development</strong> – Fully tailored to your brand & business</li>
          <li>✅ <strong>Web App Development</strong> – Scalable, secure, and performance-driven apps</li>
          <li>✅ <strong>Ecommerce Website Solutions</strong> – Designed for sales, speed & UX</li>
          <li>✅ <strong>SEO-Optimized & Mobile-Friendly</strong> – Improve your online visibility</li>
          <li>✅ <strong>CMS Development</strong> – WordPress & custom CMS built for manageability</li>
        </ul>

        <p className="web-abt-para pb-3">
          Looking for a top-rated web app development company in Chennai? Let’s build a website that drives results and fits your budget.
        </p>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className=" card card-web">
                <div className="card-web-details">
                  <h5 className="pb-3">START YOUR PROJECT</h5>
                  <h2>
                  Ready to Launch Your New Website?
                  </h2>
                  <p>
                  Book a free consultation with our experts to get started today.
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
        <img src="/images/web-rect.png" className="me-2" alt="design-dot" />
        <p> WHAT WE DO </p>
      </div>
    </Stack>
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <h2 className="do-heading">
          Full-Stack Web Development Services in Chennai – Tailored for Growth
        </h2>
      </div>
      <div className="col-lg-6 col-md-6">
        <p className="dos-para">
          At Trimsel, we deliver comprehensive web development services in Chennai. From custom websites and CMS platforms to API integration and DevOps for deployment, we build scalable, SEO-friendly digital experiences for startups and enterprises alike.
        </p>
      </div>
    </div>

    <div className="row do-card-row">
      {[
        {
          icon: "/images/doedit1.png",
          title: "User-Centric UI/UX Design",
          desc: "We design intuitive, responsive, and engaging interfaces that boost user experience and increase conversion rates.",
        },
        {
          icon: "/images/do-front-end.png",
          title: "Front-End Development",
          desc: "Our front-end developers in Chennai specialize in ReactJS and Angular to build interactive, fast, SEO-optimized websites.",
        },
        {
          icon: "/images/do-backend.png",
          title: "Back-End Development",
          desc: "From Node.js to PHP and Python, we build secure, scalable backend architectures for modern web platforms.",
        },
        {
          icon: "/images/do-api.png",
          title: "API Development & Integration",
          desc: "We create and integrate robust APIs that connect your web platform to third-party services for seamless operations.",
        },
        {
          icon: "/images/do-cms.png",
          title: "CMS Web Development",
          desc: "Leverage CMS platforms like Drupal and Joomla to build flexible websites that are easy to manage and scale.",
        },
        {
          icon: "/images/do-wordpress.png",
          title: "WordPress Development",
          desc: "We build custom, secure, and fast WordPress websites—from business sites to blogs and landing pages—with SEO in mind.",
        },
        {
          icon: "/images/do-ecom.png",
          title: "Ecommerce Web Development",
          desc: "From Shopify to WooCommerce, we develop feature-rich ecommerce websites that offer smooth, secure shopping experiences.",
        },
        {
          icon: "/images/do-devops.png",
          title: "DevOps for Web Projects",
          desc: (
            <>
              Streamline deployment and scaling with our{" "}
              <Link href="/devops-consulting-service">DevOps services</Link> –
              CI/CD pipelines, automated testing, and cloud infrastructure.
            </>
          ),
        },
        {
          icon: "/images/do-testing.png",
          title: "Quality Assurance & Testing",
          desc: "We run functional, performance, and security tests to ensure your website is launch-ready, bug-free, and reliable.",
        },
        {
          icon: "/images/do-24-hours.png",
          title: "24/7 Maintenance & Support",
          desc: "We provide continuous website monitoring, updates, backups, and optimizations to keep your site performing round the clock.",
        },
      ].map((card, idx) => (
        <div key={idx} className="col-lg-4 col-md-6 pt-3">
          <Card className="do-card">
            <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
              <Image
                src={card.icon}
                width={76}
                height={76}
                className="do-icon pb-3"
                alt={card.title + " Icon"}
              />
              <h3 className="do-card-heading">{card.title}</h3>
              <p className="do-para">{card.desc}</p>
              <Link href="/contact-us" passHref>
                <Image
                  src="/images/do-card-button.png"
                  width={56}
                  height={56}
                  className="do-btn-icon"
                  alt="Contact Button Icon"
                />
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  </div>
</section>


<section id="web-source">
  <div className="container source-container">
    <div className="row">
      <div className="col-lg-8 col-md-6">
        <h2 className="websor-title pt-3">
          Outsource Web Development to Chennai’s Top Experts
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
              <p className="smile-para">Request Your Free Consultation</p>
              <img src="/images/gifbtniconarrow.png" alt="arrow-icon" />
            </h6>
          </Button>
        </Link>
      </div>
    </div>

    <div className="row source-card-row">
      {[
        {
          icon: "/images/pedestal.png",
          title: "Access Global Talent Pool",
          desc: "Hire top web developers in Chennai with international expertise. We deliver modern, custom-built websites using the latest frameworks and CMS platforms.",
        },
        {
          icon: "/images/wait-time.png",
          title: "Faster Turnaround & Delivery",
          desc: "Accelerate your website launch by outsourcing to our experienced web development agency in India. Enjoy shorter timelines and agile delivery without quality compromise.",
        },
        {
          icon: "/images/businessman.png",
          title: "Skilled Web Development Team",
          desc: "Collaborate with certified developers who follow proven methodologies and quality standards to build scalable, high-performance websites and web apps.",
        },
        {
          icon: "/images/money.png",
          title: "Save Up to 50% on Costs",
          desc: "Avoid high overheads and reduce costs by outsourcing your website needs to our Chennai-based web development company — without sacrificing quality.",
        },
      ].map((item, idx) => (
        <div key={idx} className="col-lg-3 col-md-6">
          <Card className="source-card mt-3">
            <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
              <Image
                src={item.icon}
                width={60}
                height={60}
                className="do-icon pb-3"
                alt={item.title + " icon"}
              />
              <h3 className="source-card-heading">{item.title}</h3>
              <p className="source-para">{item.desc}</p>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="web-app">
  <div className="container app-container">
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <h2 className="websor-title pt-3">
          Why Every Modern Business Needs a Website and Web App
        </h2>
        <p className="webapp-para pt-3">
          Your website is the first touchpoint for your brand. At Trimsel, we help startups and enterprises across India and globally transform their business with high-performance websites and scalable web applications. Our expert developers in Chennai deliver SEO-friendly, secure, and lightning-fast solutions designed for business growth.
        </p>
        <Link href="/contact-us" passHref>
        <button className="btn btn-primary dev-btn mb-4">
          Let's Build Your Web App{" "}
          <img
            src="/images/material-symbols_arrow-right-alt.png"
            alt="arrow-icon"
          />
        </button>
        </Link>
      </div>

      <div className="col-lg-6 col-md-6">
        <div className="row">
          {[
  {
    icon: "/images/maintenance.png",
    title: "Always Accessible to Your Customers",
    desc: "A website means your business is open 24/7 — even while you sleep. Let customers browse, connect, and convert anytime they want.",
  },
  {
    icon: "/images/higher-performance.png",
    title: "Faster Website, More Conversions",
    desc: "Speed matters. A fast, responsive website improves user experience, reduces bounce rates, and leads to more sales and inquiries.",
  },
  {
    icon: "/images/security-icon.png",
    title: "Protect Customer Data & Build Trust",
    desc: "Security builds credibility. Our secure websites protect sensitive customer data and ensure your business stays compliant and trusted.",
  },
  {
    icon: "/images/customisable-icon.png",
    title: "Grow Your Business Without Limits",
    desc: "A scalable website evolves with your business. Add features, expand globally, and integrate tools as your needs grow.",
  }
]
.map((item, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <Card className={`webapp-card ipad-card${index + 1} mb-3`}>
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src={item.icon}
                    width={66}
                    height={66}
                    alt={item.title + " icon"}
                  />
                  <h4 className="webapp-card-heading pt-2">{item.title}</h4>
                  <p className="webapp-card-para pt-2">{item.desc}</p>
                </Card.Body>
              </Card>
            </div>
          ))}
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
          Drive Business Growth with Scalable Web Development Services
        </h2>
      </div>
      <div className="col-md-5 col-lg-5">
        <p className="webgrowth-para pt-3">
          At Trimsel, we build powerful web development solutions that reduce time-to-market, lower costs, and help businesses scale effectively.
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
      {/* Slide 1 */}
      <Carousel.Item>
        <div className="row">
          <div className="col-lg-3 col-md-3 mt-3">
            <Card className="carel-card">
              <h4 className="carel-heading">Cut Development Costs by Up to 50%</h4>
              <p className="carel-para">
                Reduce expenses without compromising quality by outsourcing to a top-rated web development company in Chennai.
              </p>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 mt-3">
            <Card className="carel-card">
              <h4 className="carel-heading">Work with Top Web Development Talent</h4>
              <p className="carel-para">
                Our ReactJS, NodeJS, and CMS experts deliver scalable, future-proof digital solutions tailored to your business.
              </p>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 mt-3">
            <Card className="carel-card">
              <h4 className="carel-heading">Expand Your Team Without Hiring</h4>
              <p className="carel-para">
                Get dedicated web developers without the overhead of managing full-time employees.
              </p>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 mt-3">
            <Card className="carel-card">
              <h4 className="carel-heading">Boost Productivity by 30%</h4>
              <p className="carel-para">
                Achieve faster go-to-market with agile workflows, SEO-friendly coding, and enhanced performance.
              </p>
            </Card>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div className="row">
          <div className="col-lg-3 col-md-3 mt-3">
            <Card className="carel-card">
              <h4 className="carel-heading">Launch Faster with Agile Web Development</h4>
              <p className="carel-para">
                Speed up development with agile practices, rapid prototyping, and continuous deployment pipelines.
              </p>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 mt-3">
            <Card className="carel-card">
              <h4 className="carel-heading">SEO-Optimized Web Design That Ranks</h4>
              <p className="carel-para">
                Implement <a href="/digital-marketing">technical SEO</a> and content-first strategies to drive higher organic traffic and conversions.
              </p>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 mt-3">
            <Card className="carel-card">
              <h4 className="carel-heading">Custom & Scalable Web Applications</h4>
              <p className="carel-para">
                Whether it’s an enterprise app or a startup website, we craft scalable platforms designed for long-term success.
              </p>
            </Card>
          </div>
          <div className="col-lg-3 col-md-3 mt-3">
            <Card className="carel-card">
              <h4 className="carel-heading">Full-Cycle Web Development Support</h4>
              <p className="carel-para">
                From strategy and UI/UX to deployment and support, Trimsel handles it all — under one roof.
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
        <div className="badge-kariot-btn">
          <img
            src="/images/Rectangle-kariot.png"
            className="me-2"
            alt="design-dot"
          />
          <p> WHY TRIMSEL?</p>
        </div>
      </Stack>

      <h2 className="new-lnr pt-4 pb-3">
        {"<"} WEB{" "}
        <span className="slash">
          <img
            src="/images/new-linear.png"
            className="slasher"
            alt="Slash-Image"
          />
        </span>{" "}
        DEVELOPMENT {">"}
      </h2>

      <p className="lnr-para">
        As a leading web development company in Chennai, India, Trimsel is the go-to destination for businesses seeking high-performance, custom-built websites. We blend innovative design, scalable code, and unmatched customer support to create powerful digital experiences.
      </p>
    </div>

    <div className="row source-card-row">
      <div className="col-lg-3 col-md-6">
        <Card className="dest-card mt-3">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <h3 className="dest-card-heading">
              24/7 Web Support & Maintenance
            </h3>
            <p className="dest-para">
              Enjoy round-the-clock technical support, proactive monitoring, and continuous performance optimization from our dedicated web development team.
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-3 col-md-6">
        <Card className="dest-card mt-3">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <h3 className="dest-card-heading">
              Certified Web Development Experts
            </h3>
            <p className="dest-para">
              Our certified professionals in ReactJS, NodeJS, CMS, and WordPress deliver scalable, secure, and SEO-friendly web solutions tailored for business growth.
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-3 col-md-6">
        <Card className="dest-card mt-3">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <h3 className="dest-card-heading">
              Transparent Communication & Workflow
            </h3>
            <p className="dest-para">
              We follow agile methodologies with weekly updates, milestone tracking, and a dedicated project manager to ensure complete visibility and collaboration.
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-3 col-md-6">
        <Card className="dest-card mt-3">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <h3 className="dest-card-heading">
              Affordable, Scalable Web Solutions
            </h3>
            <p className="dest-para">
              We combine cost-effectiveness with enterprise-grade technology to empower startups, SMEs, and enterprises with scalable web development solutions.
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
          Our Strategic Web Development Process – From Idea to Launch
        </h3>
      </div>
      <div className="col-lg-6 col-md-6">
        <p className="approach-para">
          At Trimsel, we follow a result-driven and agile approach to web application development. From discovery and UI/UX design to deployment and post-launch support, our process ensures faster delivery, scalability, and business alignment at every stage.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
        <Accordion defaultActiveKey="0" flush className="app-accordion pt-2">
          {/* Phase 1 */}
          <Accordion.Item eventKey="0" className="dev-acc-item pb-3">
            <Accordion.Header className="dev-acc-header">
              <img src="/images/bino-icon.png" width={40} height={40} alt="Discovery Icon" />
              <h3 className="dev-app-header ms-2">Pre-Discovery & Requirement Gathering</h3>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="accordion-para">
                <li>Understanding core business goals and user expectations</li>
                <li>Identifying pain points, technical limitations, and compliance needs</li>
                <li>Creating measurable KPIs to track success</li>
                <li>Aligning with stakeholders for clear communication and scope clarity</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Phase 2 */}
          <Accordion.Item eventKey="1" className="pb-3">
            <Accordion.Header>
              <img src="/images/discoveryicon.png" width={40} height={40} alt="Discovery Icon" />
              <h3 className="dev-app-header ms-2">Discovery & Planning</h3>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="accordion-para">
                <li>Competitor benchmarking and market research</li>
                <li>UX wireframes, information architecture, and technology stack finalization</li>
                <li>Setting up a project roadmap with agile sprint milestones</li>
                <li>Planning integrations, CMS, hosting, and scalability requirements</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Phase 3 */}
          <Accordion.Item eventKey="2" className="pb-3">
            <Accordion.Header>
              <img src="/images/designicon.png" width={40} height={40} alt="Design Icon" />
              <h3 className="dev-app-header ms-2">UI/UX Design & Prototyping</h3>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="accordion-para">
                <li>Creating mobile-first responsive designs with intuitive navigation</li>
                <li>Brand-aligned interface development with accessibility compliance</li>
                <li>Interactive prototypes for feedback and refinement</li>
                <li>User testing to validate UI elements and flows</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Phase 4 */}
          <Accordion.Item eventKey="3" className="pb-3">
            <Accordion.Header>
              <img src="/images/gearicon.png" width={40} height={40} alt="Gear Icon" />
              <h3 className="dev-app-header ms-2">Web Development & Testing</h3>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="accordion-para">
                <li>Frontend (ReactJS, Vue) and backend (NodeJS, PHP, etc.) development</li>
                <li>API integrations and database configurations</li>
                <li>Testing across devices, browsers, and load scenarios</li>
                <li>Security, performance, and SEO technical audits</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Phase 5 */}
          <Accordion.Item eventKey="4" className="pb-3">
            <Accordion.Header>
              <img src="/images/launchicon.png" width={40} height={40} alt="Launch Icon" />
              <h3 className="dev-app-header ms-2">Deployment & Continuous Improvement</h3>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="accordion-para">
                <li>Launch on cloud platforms or on-premise servers</li>
                <li>Setup of CI/CD pipelines, backup systems, and maintenance plans</li>
                <li>Post-launch updates, analytics tracking, and feature rollouts</li>
                <li>Ongoing support to align with evolving business goals</li>
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
      <div className="badge-abot-btn">
        <img src="/images/Rectangle-kariot.png" className="me-2" alt="design-dot" />
        <p> TECHNOLOGIES WE USE </p>
      </div>
    </Stack>
    <Row>
      <Col lg={7} md={7}>
        <h3 className="tools-heading">
          Web Development Technologies We Specialize In
        </h3>
      </Col>
      <Col lg={5} md={5}>
        <p className="tools-para">
          We use a full spectrum of modern frontend, backend, and database technologies to build high-performance, secure, and scalable websites. From custom CMS solutions to enterprise-grade web apps, our expertise in frameworks like ReactJS, Node.js, WordPress, and PHP helps businesses innovate and grow faster.
        </p>
      </Col>
    </Row>

    <Row className="tool-img-row">
      {/* Frontend Tools */}
      {[
        { src: "/images/tools-image/React_logo.png", alt: "ReactJS" },
        { src: "/images/tools-image/angularjs.png", alt: "AngularJS" },
        { src: "/images/tools-image/vuejs-wide.png", alt: "VueJS" },
        { src: "/images/tools-image/nextjs.png", alt: "NextJS" },
      ].map((tool, idx) => (
        <Col key={idx} lg={2} md={2} xs={6} className="pt-4 client-col">
          <Image src={tool.src} width={138} height={39} alt={`${tool.alt} Web Development`} className="web-tools-img" />
          <hr />
        </Col>
      ))}

      {/* Backend Technologies */}
      {[
        { src: "/images/tools-image/nodejs-logo-vector.png", alt: "NodeJS" },
        { src: "/images/tools-image/php-logo.png", alt: "PHP" },
        { src: "/images/tools-image/NET-Framework-Logo.png", alt: ".NET" },
      ].map((tool, idx) => (
        <Col key={`b-${idx}`} lg={2} md={2} xs={6} className="pt-2 client-col">
          <Image src={tool.src} width={138} height={50} alt={`${tool.alt} Backend Development`} className="web-backend-img" />
          <hr />
        </Col>
      ))}

      {/* CMS / Platforms */}
      <Col lg={2} md={2} xs={6} className="pt-2 client-col">
        <Image src="/images/tools-image/WordPress-Logo.png" width={152} height={85} alt="WordPress Development" className="web-net-img" />
        <hr />
      </Col>

      {/* Databases */}
      {[
        { src: "/images/tools-image/mongodb.png", alt: "MongoDB" },
        { src: "/images/tools-image/postgresql.png", alt: "PostgreSQL" },
        { src: "/images/tools-image/Mysql_logo.png", alt: "MySQL" },
      ].map((tool, idx) => (
        <Col key={`db-${idx}`} lg={2} md={2} xs={6} className="pt-2 client-col">
          <Image src={tool.src} width={130} height={45} alt={`${tool.alt} Database`} className="web-db-img" />
          <hr />
        </Col>
      ))}

      {/* Advanced Tools */}
      {[
        { src: "/images/tools-image/RabbitMQ_logo.png", alt: "RabbitMQ" },
        { src: "/images/tools-image/Redis-Logo.png", alt: "Redis" },
        { src: "/images/tools-image/socketio.png", alt: "Socket.IO" },
      ].map((tool, idx) => (
        <Col key={`adv-${idx}`} lg={2} md={2} xs={6} className="pt-2 client-col">
          <Image src={tool.src} width={138} height={45} alt={`${tool.alt} Integration`} className="web-adv-img" />
          <hr />
        </Col>
      ))}
    </Row>
  </div>
</section>


<section id="web-sec-cta">
  <div className="container">
    <Card className="website-dev-cta my-5">
      <Card.Body>
        <div className="row">
          {/* Left Column – Text */}
          <div className="col-lg-6 col-md-6 col-12">
            <Stack direction="horizontal">
              <div className="badge-abot-btn">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="Blue dot badge design"
                />
                <p> GET IN TOUCH </p>
              </div>
            </Stack>

            <h2 className="webkcta-heading pt-2">
              Let's Build a Website That Works for Your Business
            </h2>

            <p className="webkcta-para">
              Whether you're starting fresh or revamping your current site, Trimsel – a trusted web development company in Chennai – delivers SEO-friendly, mobile-responsive websites that boost engagement, leads, and revenue. Book your free consultation today!
            </p>

            <Link href="/contact-us" passHref>
              <button className="portcta-btn mt-3">
                <FaRegEnvelope className="me-2" /> Get a Free Consultation
              </button>
            </Link>
          </div>

          {/* Right Column – Image */}
          <div className="col-lg-5 col-md-5">
            <Image
              src="/images/web-cta-secondary.webp"
              width={521}
              height={557}
              alt="Expert web development consultant offering free website consultation"
              className="webcta-image"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
</section>


      {/* <section id="recent-dev-work">
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
      </section> */}

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
                At Trimsel, there is continuous learning that happens as we
                work on various projects. We also love to update and upgrade
                with the latest innovations in the field of technology and apps.
              </p>
            </div>
          </div>
          <ClientLogo />
        </div>
      </section>

      <ContactForm page="web"/>

      <section id="faq">
  <div className="container faq-container">
    <h2 className="faq-heading">Frequently Asked Questions About Web Development</h2>
    <Accordion defaultActiveKey="0" flush className="py-5">

      <Accordion.Item eventKey="0" className="pb-3">
        <Accordion.Header>
          Why should I choose Trimsel as my web development company in Chennai?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Trimsel is a leading web development company in Chennai offering customized websites, web apps, CMS platforms, and ecommerce solutions. With deep technical expertise in ReactJS, NodeJS, and WordPress, we deliver scalable and secure solutions that meet your business goals.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="pb-3">
        <Accordion.Header>
          How much does it cost to build a website or web application?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Website development costs depend on features, design complexity, tech stack, and platform. A basic website may start at ₹25,000, while advanced ecommerce or web apps can range upwards of ₹1,00,000. We offer affordable pricing for startups and enterprises alike.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="pb-3">
        <Accordion.Header>
          How long does it take to develop a website?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Timelines depend on project complexity. A static website may take 2-3 weeks, while dynamic or ecommerce platforms take 4-10 weeks. Our agile process ensures timely delivery with milestone-based tracking.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className="pb-3">
        <Accordion.Header>
          Do you provide SEO-optimized websites?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes, we build SEO-friendly websites following Google’s latest guidelines, including optimized URLs, meta tags, mobile responsiveness, and performance improvements. We also offer <a href="/digital-marketing">digital marketing services</a> for long-term growth.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className="pb-3">
        <Accordion.Header>
          What industries do you serve for web development?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            We serve a wide range of industries including ecommerce, education, healthcare, logistics, real estate, SaaS, travel, and finance. Our web development services are tailored to the specific needs of each domain.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className="pb-3">
        <Accordion.Header>
          What technologies do you use for web development?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            We work with modern frameworks and languages like ReactJS, Angular, VueJS, NodeJS, .NET, PHP, WordPress, MongoDB, and MySQL. We choose the stack based on performance, scalability, and your business goals.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6" className="pb-3">
        <Accordion.Header>
          Can you redesign or revamp my existing website?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Absolutely! Whether your website is outdated, slow, or not mobile-responsive, we can revamp it with a modern design, better performance, and improved user experience to reflect your brand and attract more visitors.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7" className="pb-3">
        <Accordion.Header>
          Do you offer ecommerce website development in Chennai?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes. We build secure and scalable ecommerce websites using WooCommerce, Shopify, Magento, and custom solutions. Our ecommerce development includes product management, payment gateway integration, and responsive design.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8" className="pb-3">
        <Accordion.Header>
          Do you offer CMS-based website development?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes, our CMS development services cover WordPress, Drupal, Joomla, and custom CMS platforms. We ensure your content management system is intuitive, secure, and easy to manage without technical knowledge.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9" className="pb-3">
        <Accordion.Header>
          Will you maintain and update my website after launch?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes. Trimsel offers post-launch website support including bug fixes, security patches, feature updates, and performance optimization. Our maintenance plans ensure your website remains up-to-date and competitive.
          </p>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  </div>
</section>

      <ContactModal title="Need A Website To Digitialize Your Business?" />
      <Footer />
      </main>
    </>
  );
}
