import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion"
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import("../components/header"), { ssr: true });
const Footer = dynamic(() => import("../components/footer"), { ssr: false });
const ClientLogo = dynamic(() => import("../components/clientLogo"), { ssr: false });
const ContactForm = dynamic(() => import("../components/ContactForm"), { ssr: false });

export default function Digital() {
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
  return (
    <>
    <NextSeo
  title="Top Digital Marketing Company in Chennai | SEO, PPC, SMM Experts"
  description="Trimsel is a digital marketing company in Chennai offering SEO, PPC, social media marketing & content strategies to boost visibility and drive results."
  canonical="https://www.trimsel.com/digital-marketing-company-chennai"
  openGraph={{
    type: "website",
    url: "https://www.trimsel.com/digital-marketing-company-chennai",
    title: "Top Digital Marketing Company in Chennai | SEO, PPC, SMM Experts",
    description: "Trimsel is a trusted digital marketing agency in Chennai specializing in SEO services, PPC advertising, and social media campaigns for high-growth brands.",
    images: [
      {
        url: "https://www.trimsel.com/images/digital-marketing-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Top Digital Marketing Company in Chennai",
      },
    ],
    site_name: "Trimsel",
  }}
  additionalMetaTags={[
    {
      name: "robots",
      content: "index, follow"
    }
  ]}
  additionalJsonLd={[
    {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.trimsel.com/digital-marketing-company-chennai",
    "name": "Trimsel - Digital Marketing Company",
    "telephone": "+91 72008 41581",
    "description": "Trimsel is a top digital marketing company in Chennai offering SEO, PPC, SMM, LinkedIn & Instagram marketing services to boost brand visibility and lead generation.",
    "url": "https://www.trimsel.com/digital-marketing-company-chennai",
    "logo": "https://www.trimsel.com/logo.png",
    "image": "https://www.trimsel.com/images/digital-marketing-hero.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 72008 41581",
      "contactType": "Customer Service",
      "areaServed": "Worldwideß"
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
      "name": "Digital Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Chennai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPC (Pay-Per-Click) Campaigns" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn & Instagram Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content & Email Marketing" } }
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
      "name": "What is digital marketing and how can it help my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital marketing is the use of online channels like search engines, social media, and websites to promote your business. It helps build brand awareness, increase website traffic, generate qualified leads, and ultimately drive revenue."
      }
    },
    {
      "@type": "Question",
      "name": "How does SEO work, and why is it important for Chennai-based businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO (Search Engine Optimization) improves your website's visibility on Google for relevant searches. If you're a business in Chennai, SEO ensures local customers find your services when they search online — which boosts credibility and sales."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer Local SEO services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in Local SEO to help your business appear in local searches and Google Maps results. Whether you're a store, clinic, or service provider in Chennai, our Local SEO strategy can significantly increase your foot traffic and leads."
      }
    },
    {
      "@type": "Question",
      "name": "What platforms do you cover under social media marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We manage and optimize campaigns across Instagram, Facebook, LinkedIn, and other platforms. Our strategies include Instagram Ads, Facebook retargeting, LinkedIn lead generation, and more to increase your brand’s online engagement."
      }
    },
    {
      "@type": "Question",
      "name": "How are your SEO consultants in Chennai different from others?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our SEO consultants go beyond just keywords. We dive into technical SEO, content strategy, link-building, and analytics to deliver real, measurable growth — not just rankings. We also tailor our approach for local and niche industries."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with lead generation through Google Ads or PPC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. As a PPC and pay-per-click advertising company, we create highly targeted ad campaigns on Google and other platforms to bring in high-quality leads within your budget. Our goal is to maximize your ROI."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know which digital marketing service I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you're not sure where to begin, our experts will assess your current digital presence and recommend a strategy that fits your business goals — whether it’s SEO, social media management, or paid advertising."
      }
    },
    {
      "@type": "Question",
      "name": "Is social media marketing effective for B2B businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. While B2C often uses Instagram and Facebook, B2B businesses benefit from LinkedIn marketing and targeted content strategies. We’ve helped B2B clients generate leads through educational content and professional networking ads."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer content marketing as part of your services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we do. Our content marketing strategy includes blog posts, landing pages, email campaigns, and social media content — all designed to boost SEO performance and engage your target audience."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Trimsel considered one of the top digital marketing agencies in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At Trimsel, we blend creativity with data-backed strategies. Our experience across SEO, PPC, and social media combined with local market insights makes us one of the most trusted digital marketing partners for Chennai-based businesses."
      }
    }]
  }
]}
/>
      <section className="dig-hero">
  <Header />
  <section className="hero-dig">
    <div className="container pt-3">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="title">
            <div className="title-inner">
              <div className="cafe">
                <div className="whiteLink">
                  <p className="breadcrumbs-kar">
                    <Link href="/">Home</Link>
                    <span> &#x2027; </span> Digital Marketing
                  </p>
                </div>
              </div>
              <div className="cafe">
                <div className="cafe-inner news-title">
                  <h1>Top Digital Marketing Company in Chennai, India</h1>
                </div>
              </div>
              <div className="mozart">
                <div className="mozart-inner">
                  <p className="dev-para">
                  Looking to boost your online visibility and drive targeted traffic? Trimsel is a top-rated digital marketing agency in Chennai offering result-driven services including SEO, PPC, social media marketing, Instagram ads, LinkedIn marketing, and content marketing. Our SEO experts help you rank higher on Google, grow your audience, and generate more qualified leads.
                  </p>
                </div>
              </div>
              <div className="mozarts">
                <div className="mozarts-inner">
                  <Link href="/contact-us" passHref>
                    <button className="btn btn-primary dev-btn">
                      Get a Digital Strategy Session{" "}
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
              src="/images/digitall-hero.png"
              className="Digital-hero-img"
              alt="Top Digital Marketing Company in Chennai – SEO, PPC, SMM"
              width={934}
              height={793}
              priority
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4"></div>
        <div className="col-lg-8 col-md-8">
          <div className="imgrs">
            {/* <Image
              src="/images/partnering.png"
              className="partnering-hero-img"
              alt="Trusted Digital Marketing Partner in Chennai"
              width={934}
              height={150}
            /> */}
          </div>
        </div>
      </div>
    </div>
  </section>
</section>
<section id="dig-about">
  <div className="container web-container">
    <div className="row">
      <div className="col-lg-7 col-md-6">
        <h2 className="webdev-title pt-3">
          Leading Digital Marketing Company in Chennai – SEO, PPC & SMM Experts
        </h2>
        <p className="dig-para">
        In today’s fast-paced online world, having a great product or service isn't enough. You need visibility. That’s where digital marketing comes in. Whether you want to increase website traffic, generate quality leads, or build a loyal customer base, digital marketing plays a vital role. From SEO and social media to paid advertising and content marketing, digital strategies help businesses grow, compete, and stay relevant in a crowded digital landscape.
</p>
        <p className="dig-para">
        At Trimsel, we empower brands to grow online with powerful digital marketing strategies. As a top digital marketing company in Chennai, we specialize in Search Engine Optimization (SEO), Pay-Per-Click (PPC), Content Marketing and Social Media Marketing (SMM) to drive measurable traffic, quality leads, and higher ROI.
        </p>
        <p className="dig-para">
        The digital landscape changes rapidly with new Google algorithms, evolving user behavior, and dynamic platforms reshaping how businesses grow online. Our SEO experts in Chennai stay ahead of these trends to keep your brand visible, competitive, and conversion-focused. Whether you're a startup or an enterprise, we help you stay on top

        </p>
      </div>
      <div className="col-lg-5 col-md-6">
        <div className="card card-dig">
          <Image
            src="/images/graph.png"
            width={110}
            height={110}
            alt="SEO performance improvement graph"
          />
          <div className="card-dig-details">
            <h2>Struggling to Generate Leads via Google? Get a Free SEO Audit!</h2>

            <form id="home-form" onSubmit={handleSubmit(onSubmitForm)}>
              <div className="md-form mb-3">
                <input
                  {...register("website", {
                    required: {
                      value: true,
                      message: "Website URL is required",
                    },
                  })}
                  type="text"
                  name="website"
                  id="website"
                  className="form-control dig-form"
                  placeholder="Website URL*"
                />
              </div>
              <div className="md-form">
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone number is required",
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
                  className="form-control dig-form mb-3"
                  placeholder="Phone Number*"
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
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  type="email"
                  name="email"
                  id="email"
                  className="form-control dig-form"
                  placeholder="Email Address*"
                />
                <span className="error-design pt-3">
                  {errors?.email?.message}
                  {errors?.email?.pattern?.message}
                </span>
              </div>
              <input
                type="submit"
                className="subs-btn my-3"
                value="Submit Now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        <section id="dig-about">
          <div className="container dig-container">
            <Stack direction="horizontal">
              <div className=" badge-kariot-btn">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p> WHAT WE DO </p>
              </div>
            </Stack>
            <div className="row">
              <div className="col-lg-4 col-md-6 pt-3">
                <h3 className="dig-abt-heading">Result-Driven Digital Marketing Services in Chennai</h3>
              </div>
              <div className="col-lg-4 col-md-6 pt-3">
                <p className="digi-para">
                We are a leading digital marketing agency in Chennai, offering a wide range of services to help businesses expand their online presence, drive engagement, and generate high-quality leads. Our SEO consultants in Chennai and social media marketing experts use data-driven strategies to maximize brand visibility.
                </p>
              </div>
              <div className="col-lg-4 col-md-7">
                <Button href="/contact-us" className="gif-button mt-3">
                  <img
                    src="/images/slightly-smiling-face.gif"
                    alt="Smiling Face GIF Image"
                    className="new-smile"
                  />
                  <h6 className="smile-heading">
                    <p className=" smile-para">
                      {" "}
                      Talk to a{" "}
                      <span
                        style={{
                          color: "#01aaec",
                          fontSize: "20px",
                          fontFamily: "Gilroy-Semibold",
                        }}
                      >
                        {" "}
                        Digital{" "}
                      </span>{" "}
                    </p>
                    Marketing. Expert{" "}
                    <img src="/images/gifbtniconarrow.png" alt="arrow-icon" />
                  </h6>
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/seo-icon.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="SEO Optimization icon"
                    />
                    <h3 className="qs-card-heading">SEO Optimization</h3>
                    <p className="qsd-para">
                    Improve your website’s Google rankings with our expert SEO services in Chennai. From on-page optimization and backlink building to technical SEO audits, we drive sustainable organic growth.
                    </p>
                    <Link href="/contact-us" passHref>
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/sem-icon.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="SEM Optimization icon"
                    />
                    <h3 className="qs-card-heading">Search Engine Marketing</h3>
                    <p className="qsd-para">
                    Generate instant leads with performance-driven PPC campaigns. Our SEM team manages Google Ads, display ads, and YouTube promotions to ensure high ROI and maximum reach.
                    </p>
                    <Link href="/contact-us" passHref>
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/scl-mda.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="Social Media Development icon"
                    />
                    <h3 className="qs-card-heading">Social Media Marketing </h3>
                    <p className="qsd-para">
                    Elevate your brand’s social presence with targeted Facebook, Instagram, and LinkedIn marketing strategies. Our social media team creates compelling content and ad creatives that engage and convert.
                    </p>
                    <Link href="/contact-us" passHref>
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/content-marketing.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="Content Marketing icon"
                    />
                    <h3 className="qs-card-heading">Content Marketing </h3>
                    <p className="qsd-para">
                    Deliver meaningful engagement through our content marketing agency in Chennai. From SEO-rich blogs to compelling landing pages and videos, we help you connect with your audience at every stage of the funnel.
                    </p>
                    <Link href="/contact-us" passHref>
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/b2b.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="B2B icon"
                    />
                    <h3 className="qs-card-heading"> B2B & B2C Marketing </h3>
                    <p className="qsd-para">
                    Whether you're targeting other businesses or consumers, we craft tailored digital marketing strategies for both B2B and B2C audiences using LinkedIn, email marketing, and platform-specific campaigns.
                    </p>
                    <Link href="/contact-us" passHref>
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/b2c.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="B2C icon"
                    />
                    <h3 className="qs-card-heading"> LinkedIn Marketing </h3>
                    <p className="qsd-para">
                    Build brand authority and connect with decision-makers through LinkedIn marketing. We run sponsored campaigns, content outreach, and lead generation strategies tailored for B2B growth.
                    </p>
                    <Link href="/contact-us" passHref>
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/pay-per-click.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="Pay Per Click Icon"
                    />
                    <h3 className="qs-card-heading">Pay Per Click </h3>
                    <p className="qsd-para">
                    As a pay-per-click advertising company, we create targeted campaigns on Google Ads, Facebook Ads, and Instagram Ads to drive conversions and increase brand exposure.
                    </p>
                    <Link href="/contact-us" passHref>
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/processatm.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="B2B icon"
                    />
                    <h3 className="qs-card-heading"> Local SEO </h3>
                    <p className="qsd-para">
                    Improve your local search visibility and rank in the Google Map Pack. We optimize Google Business Profile (GMB), local citations, and geo-targeted keywords to attract nearby customers.
                    </p>
                    <Link href="/contact-us" passHref>
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/ico.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="B2C icon"
                    />
                    <h3 className="qs-card-heading">Instagram & Facebook Ads</h3>
                    <p className="qsd-para">
                    As a top social media marketing company in Chennai, we help you grow brand visibility and generate qualified leads with powerful Instagram Ads and Facebook marketing. Our experts craft tailored campaigns for maximum ROI on both platforms.
                    </p>
                    <Link href="/contact-us" passHref>
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="digi-agency">
          <div className="container digag-container">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <h3 className="dig-agy-heading">
                  {" "}
                  Why Trimsel is the Best Digital Marketing Agency in Chennai for Growth-Driven Brands
                </h3>
                <p className="digi-para">
                We don't just "do digital marketing" — we build digital journeys that drive real business growth. We understand that behind every brand is a story, a goal, and a team striving to make an impact. That’s why our approach goes beyond campaigns and clicks.
                </p>
                <p className="digi-para">
                Our expert digital marketing team helps businesses establish a strong online presence by combining <Link href="/web-development-company-chennai" className="text-link">
  website development
</Link>, SEO optimization, and targeted marketing strategies to maximize visibility and conversions.
                </p>
                <p className="digi-para">
                Our team of <strong>SEO consultants, social media strategists, and PPC experts in Chennai</strong> work like an extension of your business — learning what sets you apart, understanding your audience, and tailoring a strategy that fits like a glove. No copy-paste tactics. No jargon. Just transparent, ROI-focused work that gets noticed.
                </p>
                <p className="digi-para">
                What makes us different? We’re a performance-obsessed team that treats your success as our own. Whether you're a startup seeking visibility or an enterprise aiming to scale, we deliver measurable results through powerful <strong>SEO, Instagram & Facebook ads, LinkedIn marketing</strong>, and conversion-optimized campaigns.
                </p>
                <p className="digi-para">
  While most digital agencies stick to conventional methods, we embrace the future. At Trimsel, we integrate the power of <strong>AI-driven analytics, machine learning algorithms, and real-time marketing automation</strong> to gain deeper insights into user behavior and optimize campaigns for precision. This means your marketing spend goes further — reaching the right people, at the right time, with the right message.
</p>
<p className="digi-para">
  Our tech-savvy approach allows us to predict search trends, analyze social sentiment, and dynamically adjust campaigns for maximum performance. Whether it's an <strong>AI-powered SEO strategy</strong>, chatbot-led lead generation, or smart A/B testing for paid ads, we bring Silicon Valley-level innovation right here to your business in Chennai.
</p>
<p className="digi-para">
          If you're looking for a digital partner — not just another agency — you've just found one.
        </p>
              </div>
              <div
                className="col-lg-4 col-md-4"
                style={{ textAlign: "center" }}
              >
                <Button className="digi-btn" variant="dark">
                See Our Proven Digital Marketing Strategy
                </Button>
                <Image
                  src="/images/mrk-strategy.png"
                  width={422}
                  height={501}
                  alt="Trimsel Digital Marketing Strategy in Chennai"
                  className="mrk-str"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="dig-leverage">
          <div className="container lev-container">
            <div className="row">
              <div className="col-lg-5 col-md-5">
                <h3 className="lev-heading">
                Struggling to Grow Online? Leverage Chennai’s Trusted Digital Marketing Experts
                </h3>
                <Link href="/contact-us" passHref>
                  <button className="btn btn-primary lev-btn">
                  Get a Digital Marketing Strategy Consultation{" "}
                    <img src="/images/material-symbols_arrow-right-alt.png" />
                  </button>
                </Link>
              </div>
              <div className="col-lg-7 col-md-7">
                <p className="lev-para">
                Whether you're a startup founder, small business owner, or established enterprise—
          digital marketing is the lifeline of your online growth. But if you're not seeing the 
          leads, engagement, or conversions you expect... something needs to change.
                </p>
                <ul style={{ paddingLeft: "0px" }}>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <img
                          src="/images/check-circle.png"
                          alt="check-icon"
                          width={18}
                        />
                      </span>
                      Is your website getting traffic but not converting into leads or sales?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <img
                          src="/images/check-circle.png"
                          alt="check-icon"
                          width={18}
                        />
                      </span>
                      Have your Google rankings plateaued despite investing in SEO?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <img
                          src="/images/check-circle.png"
                          alt="check-icon"
                          width={18}
                        />
                      </span>
                      Are your Facebook and Instagram ads burning budget without delivering ROI?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <img
                          src="/images/check-circle.png"
                          alt="check-icon"
                          width={18}
                        />
                      </span>
                      Does your brand lack visibility across search engines and social platforms?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <img
                          src="/images/check-circle.png"
                          alt="check-icon"
                          width={18}
                        />
                      </span>
                      Do you feel overwhelmed trying to manage SEO, social media, content, and ads?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <img
                          src="/images/check-circle.png"
                          alt="check-icon"
                          width={18}
                        />
                      </span>
                      Are your competitors outranking you and dominating your niche online?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <img
                          src="/images/check-circle.png"
                          alt="check-icon"
                          width={18}
                        />
                      </span>
                      Is your sales pipeline running dry because of inconsistent digital outreach?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <img
                          src="/images/check-circle.png"
                          alt="check-icon"
                          width={18}
                        />
                      </span>
                      Do you want to improve your lead generation but don’t know where to start?
                    </p>
                  </li>
                </ul>
                <p className="lev-para">
                If you said YES to any of these, it’s time to take action. At Trimsel, we offer 
          data-driven digital marketing services in Chennai—including SEO, Social Media 
          Marketing, PPC Advertising, and Content Marketing—to help you overcome these 
          challenges and achieve real, measurable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="qs-sec-cta">
  <div className="container">
    <Card className="dig-cta my-5">
      <Card.Body>
        <div className="row">
          <div className="col-lg-7 col-md-8 col-12">
            <img src="/images/line.png" alt="Decorative Line" />
            <h2 className="cldcta-heading pt-2">
              Not Sure How to Start with Digital Marketing? Let’s Build a Strategy That Works for You.
            </h2>
            <p className="cta-description">
              Whether you're a startup or scaling business, Trimsel's digital marketing experts in Chennai are ready to help. From SEO to social media and PPC, we’ll craft a custom strategy to grow your brand online.
            </p>
            <Link href="/contact-us" passHref>
              <button className="digcta-button btn-lg btn-info mt-3">
                Let's Boost Your Business!
                <span className="icon">
                  <img
                    src="/images/arow-white.png"
                    alt="Arrow White Icon"
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
        <section id="client" className="client-section">
        <div className="container mt-5">
          <h2 className="client-title">
            Trusted By Customers, Partners and The Industry
          </h2>
          <p className="clients-text">
            At Trimsel, there is continuous learning that happens as we work on
            various projects. We also love to update and upgrade with the latest
            innovations in the field of technology and apps.
          </p>
          <ClientLogo />
        </div>
      </section>
      <ContactForm heading="Want More Traffic & Leads?" subText="Talk to our growth strategists about SEO, PPC and content plans that actually drive results."/>
      <section id="faq">
  <div className="container faq-container">
    <h2 className="faq-heading">Frequently Asked Questions</h2>
    <Accordion defaultActiveKey="0" flush className="py-5">

      <Accordion.Item eventKey="0" className="pb-3">
        <Accordion.Header>What is digital marketing and how can it help my business?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
          Using websites, social media, and search engines to advertise your business is known as digital marketing. It increases website traffic, creates quality leads, raises brand exposure, and eventually boosts income.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="pb-3">
        <Accordion.Header>How does SEO work, and why is it important for Chennai-based businesses?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
          SEO works by optimizing your website’s content, structure, and authority so that it ranks higher in search engine results. This makes it easier for potential customers to find you online. It's essential because it drives organic traffic, builds credibility, and helps your business grow sustainably without relying solely on paid advertising.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="pb-3">
        <Accordion.Header>Do you offer Local SEO services?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes, we specialize in Local SEO to help your business appear in local searches and Google Maps results. Whether you're a store, clinic, or service provider in Chennai, our Local SEO strategy can significantly increase your foot traffic and leads.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className="pb-3">
        <Accordion.Header>What platforms do you cover under social media marketing?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            We manage and optimize campaigns across Instagram, Facebook, LinkedIn, and other platforms. Our strategies include Instagram Ads, Facebook retargeting, LinkedIn lead generation, and more to increase your brand’s online engagement.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className="pb-3">
        <Accordion.Header>How are your SEO consultants in Chennai different from others?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Our SEO consultants go beyond just keywords. We dive into technical SEO, content strategy, link-building, and analytics to deliver real, measurable growth — not just rankings. We also tailor our approach for local and niche industries.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className="pb-3">
        <Accordion.Header>Can you help with lead generation through Google Ads or PPC?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Absolutely. As a PPC and pay-per-click advertising company, we create highly targeted ad campaigns on Google and other platforms to bring in high-quality leads within your budget. Our goal is to maximize your ROI.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6" className="pb-3">
        <Accordion.Header>How do I know which digital marketing service I need?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            If you're not sure where to begin, our experts will assess your current digital presence and recommend a strategy that fits your business goals — whether it’s SEO, social media management, or paid advertising.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7" className="pb-3">
        <Accordion.Header>Is social media marketing effective for B2B businesses?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes. While B2C often uses Instagram and Facebook, B2B businesses benefit from LinkedIn marketing and targeted content strategies. We’ve helped B2B clients generate leads through educational content and professional networking ads.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8" className="pb-3">
        <Accordion.Header>Do you offer content marketing as part of your services?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes, we do. Our content marketing strategy includes blog posts, landing pages, email campaigns, and social media content — all designed to boost SEO performance and engage your target audience.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9" className="pb-3">
        <Accordion.Header>Why is Trimsel considered one of the top digital marketing agencies in Chennai?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            At Trimsel, we blend creativity with data-backed strategies. Our experience across SEO, PPC, and social media combined with local market insights makes us one of the most trusted digital marketing partners for Chennai-based businesses.
          </p>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  </div>
</section>

      {/* <ContactModal title="Need A Website To Digitialize Your Business?" /> */}
      <Footer />
    </>
  );
}
