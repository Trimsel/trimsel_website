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
import { postJson } from "../lib/api";
import { buildServiceJsonLd } from "../lib/serviceSchema";
import ClientLogo from "../components/clientLogo";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import ContactForm from "../components/ContactForm";
import { NextSeo } from 'next-seo';
import Head from "next/head";

export default function WebDevelopment() {
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
  const serviceJsonLd = buildServiceJsonLd({
    slug: "web-development-company-chennai",
    serviceName: "Web Development Services (Chennai)",
    serviceType: "Web Development",
    description:
      "Website design, ecommerce, CMS, and custom web apps using ReactJS & NodeJS.",
    offers: [
      "Custom Web Development",
      "Website Design (UI/UX)",
      "Ecommerce Development",
      "ReactJS & NodeJS Development",
      "WordPress & CMS Development",
      "Web Hosting & Maintenance",
    ],
    faq: [
      {
        question: "Why should I choose Trimsel as my web development company in Chennai?",
        answer:
          "Trimsel is a leading web development company in Chennai offering customized websites, web apps, CMS platforms, and ecommerce solutions. With deep technical expertise in ReactJS, NodeJS, and WordPress, we deliver scalable and secure solutions that meet your business goals.",
      },
      {
        question: "How much does it cost to build a website or web application?",
        answer:
          "Website development costs depend on features, design complexity, tech stack, and platform. A basic website may start at ₹25,000, while advanced ecommerce or web apps can range upwards of ₹1,00,000. We offer affordable pricing for startups and enterprises alike.",
      },
      {
        question: "How long does it take to develop a website?",
        answer:
          "Timelines depend on project complexity. A static website may take 2-3 weeks, while dynamic or ecommerce platforms take 4-10 weeks. Our agile process ensures timely delivery with milestone-based tracking.",
      },
      {
        question: "Do you provide SEO-optimized websites?",
        answer:
          "Yes, we build SEO-friendly websites following Google’s latest guidelines, including optimized URLs, meta tags, mobile responsiveness, and performance improvements. We also offer digital marketing services for long-term growth.",
      },
      {
        question: "What industries do you serve for web development?",
        answer:
          "We serve a wide range of industries including ecommerce, education, healthcare, logistics, real estate, SaaS, travel, and finance. Our web development services are tailored to the specific needs of each domain.",
      },
      {
        question: "Do you offer website maintenance and support?",
        answer:
          "Absolutely. We provide ongoing maintenance, security updates, feature enhancements, and hosting support to keep your website running smoothly and securely.",
      },
    ],
    breadcrumbs: [
      { name: "Home", item: "https://www.trimsel.com/" },
      {
        name: "Web Development Company Chennai",
        item: "https://www.trimsel.com/web-development-company-chennai",
      },
    ],
  });
  const webInsights = [
    {
      title: "5 Easy Ways a Mobile App Can Grow Your Business",
      excerpt:
        "Discover UI/UX and performance tactics we also apply to high-converting websites for Chennai brands.",
      href: "/blog/how-mobile-apps-grow-business",
      tag: "Growth Playbook",
    },
    {
      title: "Explore Trimsel’s Web & Digital Insights",
      excerpt:
        "Browse engineering, DevOps, and digital marketing articles to plan your next release with confidence.",
      href: "/blog",
      tag: "Web Strategy",
    },
  ];
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
  canonical="https://www.trimsel.com/web-development-company-chennai"
  openGraph={{
    type: "website",
    url: "https://www.trimsel.com/web-development-company-chennai",
    title: "Top Web Development Company in Chennai | Website Design & Development",
    description:
      "Trimsel is a trusted web development company in Chennai, offering high-performance web development services, including ReactJS, NodeJS, CMS, and ecommerce.",
    locale: "en_IN",
    site_name: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/web-dev-hero.png",
        width: 1200,
        height: 630,
        alt: "Trimsel web development team building responsive interfaces in Chennai",
      },
    ],
    article: {
      section: "Web Development",
      tags: [
        "Web Development",
        "ReactJS",
        "NodeJS",
        "Ecommerce Development",
        "Chennai",
      ],
    },
  }}
  twitter={{
    cardType: "summary_large_image",
    handle: "@TrimselSoftwares",
    site: "@TrimselSoftwares",
  }}
  additionalMetaTags={[
    {
      name: "twitter:title",
      content: "Web Development Company in Chennai – Trimsel",
    },
    {
      name: "twitter:description",
      content:
        "Custom websites, ecommerce platforms, and CMS solutions crafted by Trimsel’s Chennai-based web developers.",
    },
    {
      name: "twitter:image:alt",
      content: "Trimsel web development team designing responsive interfaces",
    },
  ]}
/>
<Head>
  {serviceJsonLd.map((schema, index) => (
    <script
      key={`web-dev-schema-${index}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ))}
</Head>

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
                          Web Development Services
                        </p>
                      </div>
                    </div>
                    <div className="cafe">
                      <div className="cafe-inner news-title">
                        <h1>
                        Top Web Development Company in Chennai  Fast, Flexible & Built for Results
                      </h1>
                      </div>
                    </div>
                    <div className="mozart">
                      <div className="mozart-inner">
                        <p>
                        Trimsel is a leading web development company in Chennai, creating responsive websites and powerful web applications tailored to your business needs. From sleek business sites to feature-rich platforms, we use cutting-edge tools like ReactJS, NodeJS, and WordPress to deliver seamless, high-performance digital experiences.
                        </p>
                      </div>
                    </div>
                    <div className="mozarts">
                      <div className="mozarts-inner">
                      <Link
                        href="/contact-us"
                        className="btn btn-primary dev-btn"
                        aria-label="Book a web development consultation with Trimsel"
                      >
                        Get a Web Development Consultation{" "}
                        <Image
                          src="/images/material-symbols_arrow-right-alt.png"
                          alt=""
                          aria-hidden="true"
                          width={18}
                          height={18}
                          loading="lazy"
                        />
                      </Link>
                      <p className="hero-proof">
                        180+ websites shipped for SaaS, ecommerce, and BFSI brands with 95% on-time delivery.
                      </p>
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
                Custom Web Development Services That Work for You
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
              Your website is often the first impression people have of your brand. It should not only look good but function effortlessly. At Trimsel, each website is built with clean code, a mobile-first design, and performance in mind. Whether launching a new brand, upgrading an outdated site, or expanding an online store, our team ensures the outcome drives results. Every project is responsive, optimized for speed, and scalable to match future business growth—paired with <Link href="/cloud-consulting-services">cloud consulting</Link> and <Link href="/devops-consulting-services">DevOps automation</Link> to keep releases smooth.</p>
        <p className="web-abt-para pb-3">
        Our Core Services
        </p>

        <ul className="web-features-list pb-3">
          <li><strong>Custom Website Development</strong> – Designed from scratch to fit your business and your brand.</li>
          <li><strong>Web App Development</strong> – Built to be fast, reliable, and ready to handle growth.</li>
          <li><strong>Ecommerce Website Solutions</strong> – Online stores that make buying simple and secure.</li>
          <li><strong>Mobile-Responsive, SEO-Ready Sites</strong> – Improve your online visibility</li>
          <li><strong>CMS Development</strong> – WordPress, Joomla, Drupal, and custom CMS setups.</li>
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
                  Book a consultation with our experts to get started today.
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
                      value="Book A Consultation"
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
        <Image src="/images/web-rect.png" className="me-2" alt="" aria-hidden="true" width={18} height={18} loading="lazy" />
        <p> WHAT WE DO </p>
      </div>
    </Stack>
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <h2 className="do-heading">
          Full-Stack Web Development Services in Chennai
        </h2>
      </div>
      <div className="col-lg-6 col-md-6">
        <p className="dos-para">
          We deliver comprehensive web development services in Chennai. From custom websites and CMS platforms to API integration and DevOps for deployment, we build scalable, SEO-friendly digital experiences for startups and enterprises alike.
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
          desc: (
            <>
              From Shopify to WooCommerce, we develop feature-rich ecommerce websites that offer smooth, secure shopping experiences and plug seamlessly into{" "}
              <Link href="/digital-marketing-company-chennai">digital marketing funnels</Link>.
            </>
          ),
        },
        {
          icon: "/images/do-devops.png",
          title: "DevOps for Web Projects",
          desc: (
            <>
              Streamline deployment and scaling with our{" "}
              <Link href="/devops-consulting-services">DevOps services</Link> –
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
          Why Outsource Web Development to Trimsel?
        </h2>
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
        Why a Great Website Matters for Your Business?
        </h2>
        <p className="webapp-para pt-3">
        Your website is where potential customers first interact with your brand. We help businesses from startups to enterprises create fast, secure, and reliable web platforms that drive growth.
        </p>
        <Link
          href="/contact-us"
          className="btn btn-primary dev-btn mb-4"
          aria-label="Start a web app project with Trimsel"
        >
          Let's Build Your Web App{" "}
          <Image
            src="/images/material-symbols_arrow-right-alt.png"
            alt=""
            aria-hidden="true"
            width={18}
            height={18}
            loading="lazy"
          />
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
          At Trimsel, we build powerful web development solutions that reduce time-to-market, lower costs, and help businesses scale effectively. Read how these choices relate to our <Link href="/blog/how-mobile-apps-grow-business">latest growth playbook</Link>.
        </p>
      </div>
    </div>

    <Carousel
      className="web-car"
      animation="fade"
      prevIcon={
        <Image
          src="/images/chevron-right-icon.png"
          className="previous-icon"
          alt="Previous"
          width={32}
          height={32}
          loading="lazy"
        />
      }
      nextIcon={
        <Image
          src="/images/chevron-left.png"
          className="next-icon"
          alt="Next"
          width={32}
          height={32}
          loading="lazy"
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
                Implement <a href="/digital-marketing-company-chennai">technical SEO</a> and content-first strategies to drive higher organic traffic and conversions.
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
          <Image
            src="/images/Rectangle-kariot.png"
            className="me-2"
            alt=""
            aria-hidden="true"
            width={18}
            height={18}
            loading="lazy"
          />
          <p> WHY TRIMSEL?</p>
        </div>
      </Stack>

  <h2 className="new-lnr pt-4 pb-3">
        {"<"} WEB{" "}
        <span className="slash">
          <Image
            src="/images/new-linear.png"
            className="slasher"
            alt="Slash-Image"
            width={40}
            height={12}
            loading="lazy"
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
              <Image src="/images/bino-icon.png" width={40} height={40} alt="Discovery Icon" loading="lazy" />
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
              <Image src="/images/discoveryicon.png" width={40} height={40} alt="Discovery Icon" loading="lazy" />
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
              <Image src="/images/designicon.png" width={40} height={40} alt="Design Icon" loading="lazy" />
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
              <Image src="/images/gearicon.png" width={40} height={40} alt="Gear Icon" loading="lazy" />
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
              <Image src="/images/launchicon.png" width={40} height={40} alt="Launch Icon" loading="lazy" />
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
        <Image
          src="/images/Rectangle-kariot.png"
          className="me-2"
          alt=""
          aria-hidden="true"
          width={18}
          height={18}
          loading="lazy"
        />
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
                <Image
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                <p> GET IN TOUCH </p>
              </div>
            </Stack>

            <h2 className="webkcta-heading pt-2">
            Let’s Build a Website That Delivers Real Value
            </h2>

            <p className="webkcta-para">
            Whether you're starting from scratch or reworking an old site, we’re ready to help. We’ll work closely with you to build something that reflects your brand and actually supports your goals.
            </p>

            <Link
              href="/contact-us"
              className="portcta-btn mt-3"
              aria-label="Book a Trimsel web consultation"
            >
              <FaRegEnvelope className="me-2" /> Get a Consultation
            </Link>
          </div>

          {/* Right Column – Image */}
          <div className="col-lg-5 col-md-5">
            <Image
              src="/images/web-cta-secondary.webp"
              width={521}
              height={557}
              alt="Expert web development consultant offering website consultation"
              className="webcta-image"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
</section>
      <section id="client" className="client-section">
        <div className="container mt-5">
          <Stack direction="horizontal" className="mb-5">
            <div className=" badge-abot-btn">
              <Image
                src="/images/Rectangle-kariot.png"
                className="me-2"
                alt=""
                aria-hidden="true"
                width={18}
                height={18}
                loading="lazy"
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
            Yes, we build SEO-friendly websites following Google’s latest guidelines, including optimized URLs, meta tags, mobile responsiveness, and performance improvements. We also offer <a href="/digital-marketing-company-chennai">digital marketing services</a> for long-term growth.
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
      <section id="web-insights" className="home-insights py-5">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="badge-abot-btn">
              <Image src="/images/Rectangle-kariot.png" className="me-2" width={15} height={15} alt="" aria-hidden="true" loading="lazy" />
              <p> LATEST WEB INSIGHTS </p>
            </div>
          </div>
          <div className="row pt-4 g-4">
            {webInsights.map((article) => (
              <div className="col-lg-6" key={article.title}>
                <Card className="insight-card h-100">
                  <Card.Body>
                    <p className="insight-tag">{article.tag}</p>
                    <h3 className="insight-title">
                      <Link href={article.href}>{article.title}</Link>
                    </h3>
                    <p className="insight-excerpt">{article.excerpt}</p>
                    <Link href={article.href} className="about-btn" aria-label={`Read ${article.title}`}>
                      Read More
                      <Image src="/images/material-symbols_arrow-right-alt.png" width={18} height={18} alt="" loading="lazy" />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm heading="Launch A High-Performance Web App" subText="Let’s architect a scalable, SEO-ready web application tailored to your business goals."/>
      <Footer />
      </main>
    </>
  );
}
