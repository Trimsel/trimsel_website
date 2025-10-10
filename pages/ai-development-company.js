import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import dynamic from 'next/dynamic';
import { NextSeo } from "next-seo";

const ClientLogo = dynamic(() => import("../components/clientLogo"), { ssr: false });
const ContactForm = dynamic(() => import("../components/ContactForm"), { ssr: false });
const Footer = dynamic(() => import("../components/footer"), { ssr: false });

export default function Quality() {
  return (
    <>
      <NextSeo
  title="AI Development Company in Chennai, India | Trimsel"
  description="Trimsel is a leading AI development company in Chennai, India specializing in custom AI agents, machine learning models, NLP, and generative AI solutions."
  canonical="https://www.trimsel.com/ai-development-company"
  openGraph={{
    type: "website",
    url: "https://www.trimsel.com/ai-development-company",
    title: "Best AI Development Company in Chennai, India | Trimsel",
    description:
      "Trimsel is a top AI development company in Chennai, India helping enterprises build scalable AI agents, predictive models, NLP, and generative AI products.",
    images: [
      {
        url: "https://www.trimsel.com/images/ai-hero.webp",
        width: 1200,
        height: 630,
        alt: "AI development services company in Chennai",
      },
    ],
    site_name: "Trimsel",
  }}
  additionalMetaTags={[{ name: "robots", content: "index, follow" }]}
  additionalJsonLd={[
    // Primary entity for this page
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.trimsel.com/ai-development-company#service",
      "name": "AI Development Services (Chennai)",
      "serviceType": "Artificial Intelligence Development",
      "description": "Custom AI agents, ML models, NLP, computer vision, generative AI, and MLOps.",
      "provider": { "@id": "https://www.trimsel.com/#org" },
      "areaServed": [
        { "@type": "Place", "name": "Chennai" },
        { "@type": "Country", "name": "India" }
        // add more countries later as you expand
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom AI Agent Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Machine Learning Model Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Natural Language Processing (NLP)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computer Vision & Predictive Analytics" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generative AI Solutions" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MLOps & AI Consulting" } }
        ]
      }
    },
    // Breadcrumbs (nice signal; show them in UI if possible)
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.trimsel.com/ai-development-company#breadcrumbs",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trimsel.com/" },
        { "@type": "ListItem", "position": 2, "name": "AI Development Company", "item": "https://www.trimsel.com/ai-development-company" }
      ]
    },
    // Keep this ONLY if the same Q&A appears on the page
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.trimsel.com/ai-development-company#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why choose Trimsel as your AI development company in Chennai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trimsel has an expert AI development team in Chennai who specialize in building production-ready AI solutions — from predictive analytics and NLP models to generative AI agents — tailored for real business outcomes."
          }
        },
        {
          "@type": "Question",
          "name": "What AI development services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer custom AI agent development, machine learning models, predictive analytics, NLP, computer vision, generative AI solutions, and MLOps deployment."
          }
        },
        {
          "@type": "Question",
          "name": "How much does AI development cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI solution cost depends on scope, complexity, dataset availability, and deployment needs. We provide scalable packages based on prototype, MVP, and enterprise requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer MLOps and post-launch support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We help deploy, monitor, and maintain AI models in production with CI/CD, retraining pipelines, and infrastructure automation."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build an AI solution?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Initial prototype/POC can take 4–6 weeks. Full-scale enterprise AI system rollout generally takes 3–6 months depending on integrations, data availability, and compliance requirements."
          }
        }
      ]
    }
  ]}
/>
      <section className="quality-hero">
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
                          AI Development services
                        </p>
                      </div>
                    </div>
                    <div className="cafe">
                      <div className="cafe-inner qs-title">
                        Build Smarter, Faster, and More Efficient with AI
                      </div>
                    </div>
                    <div className="mozart">
                      <div className="mozart-inner">
                        <p className="qs-para">
                          Unlock innovation with Trimsel's end-to-end AI development services. We design intelligent solutions tailored to your business goals, from custom models to seamless integration into your workflows. Whether you are a startup looking to scale or an enterprise modernizing its processes, we provide AI that solves real problems, not just proofs of concept.
                        </p>
                      </div>
                    </div>
                    <div className="mozarts">
                      <div className="mozarts-inner">
                      <Link href="/contact-us" className="btn btn-primary get-btn" aria-label="Talk to an AI Expert">
                      Talk to an AI Expert{" "}
                      <Image src="/images/material-symbols_arrow-right-alt.png" width={24} height={24} alt="AI Expert" />
                    </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="imgrs">
                  <Image
                    src="/images/qa-hero-img.webp"
                    className="quality-hero-img"
                    alt="Quality-Engineering-Hero-Image"
                    width={650}
                    height={423}
                    priority
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="client" className="client-section">
        <div className="container mt-5 clt-container">
        <div className="d-flex align-items-center">
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
          </div>
      
          <div className="row pt-3">
            <div className="col-lg-6 col-md-6">
              <h2 className="client-title">
                Trusted Digital Transformation Partner for Global Brands
              </h2>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="cliented-text">
              From fast-growing startups to industry leaders, Trimsel has partnered with businesses worldwide to bring bold ideas to life. Whether it’s <strong>AI-driven innovation</strong>, <strong>custom software</strong>, <strong>cloud adoption</strong>, or <strong>mobile app development</strong>, we build solutions that don’t just work—they scale. Our team keeps its finger on the pulse of emerging technologies, ensuring the products we deliver are future-ready, high-performing, and built for real business impact.
              </p>
            </div>
          </div>
                  <div className="row client-row pt-3 text-center">
                    <ClientLogo />
                  </div>
                </div>
              </section>

      <section className="quality-abt">
        <div className="container quality-abt-container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <Stack direction="horizontal">
                <div className=" badge-kariot-btn">
                  <img
                    src="/images/Rectangle-kariot.png"
                    className="me-2"
                    alt="design-dot"
                  />
                  <p> Build your AI Product </p>
                </div>
              </Stack>
              <h2 className="webdev-title pt-4">
              Transform Your Business with AI Development
              </h2>
              <p className="qs-abt-para">
              Over the past few years, Artificial Intelligence has moved from being a futuristic concept to a practical, business-transforming reality. At Trimsel, we’ve seen first-hand how AI can unlock efficiency, accuracy, and innovation across industries. From enhancing customer experiences to automating complex processes, AI is no longer optional — it’s a competitive advantage.
              </p>
              <p className="qs-abt-para">
              We work closely with businesses in Chennai and beyond to develop AI solutions that are not only cutting-edge but also practical for real-world challenges. Whether it’s leveraging data for smarter decisions, automating repetitive workflows, or creating intelligent products, our goal is simple: to help you achieve measurable outcomes through AI.
              </p>
              <p className="qs-abt-para">
              By combining our technical expertise with a deep understanding of business needs, we create AI-driven systems that are robust, scalable, and future-ready.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <Card className="qs-abt-card">
                <h3 className="qs-card-heading pb-3">
                Why Trimsel for AI Development?
                </h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-2">
                    <div className="card icon-box">
                      <Image
                        src="/images/list1.png"
                        width={40}
                        height={40}
                        alt="List of tasks icon"
                      />
                      <h5 className="qs-icon-heading pt-2">
                        Identify High-Impact Use Cases
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-2">
                    <div className="card icon-box">
                      <Image
                        src="/images/automation.png"
                        width={40}
                        height={40}
                        alt="Automation icon"
                      />
                      <h5 className="qs-icon-heading pt-2">
                      Build Custom AI Models
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="card icon-box mb-2">
                      <Image
                        src="/images/launch.png"
                        width={40}
                        height={40}
                        alt="Launch Rocket icon"
                      />
                      <h5 className="qs-icon-heading pt-2">
                      Integrate Seamlessly with Your Systems
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="card icon-box mb-2">
                      <Image
                        src="/images/target.png"
                        width={40}
                        height={40}
                        alt="bug-target-icon"
                      />
                      <h5 className="qs-icon-heading pt-2">
                      Ensure Ethical & Reliable AI
                      </h5>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="qs-test">
        <div className="container test-container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <h3 className="test-heading">
                Why Trimsel for an AI Development Company?
              </h3>
            </div>
            <div className="col-lg-4 col-md-5">
              <p className="qs-para">
              Choosing the right AI development company can significantly influence the success of your digital transformation journey. At Trimsel, we approach AI not as a trend but as a tool to unlock measurable value. Our approach is holistic, strategic, and built to scale.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card service-qs-card">
                <div className="card-image">
                  <Image
                    src="/images/diamond-icon.png"
                    width={73}
                    height={73}
                    alt="Diamond Icon"
                  />
                </div>
                <div className="service-card-title pt-4 pb-2">
                  <h3>Tailored AI Solutions, Not Templates</h3>
                </div>
                <div className="card-text service-card-text pb-3">
                  <p>
                  We build bespoke AI models and workflows that align with your business objectives, data landscape, and operational constraints. No generic tools—only solutions that are engineered to work for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card service-qs-card">
                <div className="card-image">
                  <Image
                    src="/images/saving-icon.png"
                    width={73}
                    height={73}
                    alt="Cost Saving Icon"
                  />
                </div>
                <div className="service-card-title pt-4 pb-2">
                  <h3>Strong Technical Expertise</h3>
                </div>
                <div className="card-text service-card-text pb-3">
                  <p>
                  Our team combines deep expertise in data science, machine learning, cloud computing, and software development. We specialize in building and deploying complex AI solutions across a wide range of domains including natural language processing, computer vision, generative AI, and predictive analytics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card service-qs-card">
                <div className="card-image">
                  <Image
                    src="/images/timespeed.png"
                    width={73}
                    height={73}
                    alt="Fast Delivery Icon"
                  />
                </div>
                <div className="service-card-title pt-4 pb-2">
                  <h3>Seamless Integration with Your Existing Tech Stack</h3>
                </div>
                <div className="card-text service-card-text pb-3">
                  <p>
                  Your AI solution should fit into your current systems, not disrupt them. We build AI software solutions that integrate effortlessly with your CRM, mobile app, ERP, or cloud backend—ensuring minimal disruption and maximum productivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card service-qs-card">
                <div className="card-image">
                  <Image
                    src="/images/agileicon.png"
                    width={73}
                    height={73}
                    alt="Agile Icon"
                  />
                </div>
                <div className="service-card-title pt-4 pb-2">
                  <h3>Rapid Prototyping to Scalable Delivery</h3>
                </div>
                <div className="card-text service-card-text pb-3">
                  <p>
                  We follow an agile development process focused on speed and iteration. With Trimsel, you can validate your ideas quickly through prototypes and then scale confidently based on real data and user feedback.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card service-qs-card">
                <div className="card-image">
                  <Image
                    src="/images/approach-icon.png"
                    width={73}
                    height={73}
                    alt="Approach Icon"
                  />
                </div>
                <div className="service-card-title pt-4 pb-2">
                  <h3>Data Privacy and Compliance First</h3>
                </div>
                <div className="card-text service-card-text pb-3">
                  <p>
                  We adopt responsible AI principles and strictly adhere to data protection standards, including GDPR, HIPAA, and SOC 2. Your sensitive data remains safe, encrypted, and governed by ethical frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card service-qs-card">
                <div className="card-image">
                  <Image
                    src="/images/transparency.png"
                    width={73}
                    height={73}
                    alt="Transparency Icon"
                  />
                </div>
                <div className="service-card-title pt-4 pb-2">
                  <h3>End-to-End Partnership</h3>
                </div>
                <div className="card-text service-card-text pb-3">
                  <p>
                  From initial AI consulting and strategy to ongoing optimization and support, we act as your technology partner every step of the way. Our commitment goes beyond deployment; we ensure your AI evolves as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="qs-customize">
        <div className="container test-container">
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
            <div className="col-lg-7 col-md-7 col-12">
              <h3 className="test-heading pt-4">
                  AI Development Services We Offer
              </h3>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <p className="qsds-para pt-4">
              We focus on business outcomes, not just code. Expect faster decisions, streamlined operations, better customer experiences, and tangible ROI from your AI initiatives.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="qs-customize-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/ab-testing.png"
                    width={70}
                    height={70}
                    className="do-icon pb-3"
                    alt="AB Testing icon"
                  />
                  <h3 className="qs-card-heading">Custom AI Development</h3>
                  <p className="qsd-para">
                        Build AI-powered applications tailored to your specific use case. Whether it's a fraud detection system or an intelligent chatbot, we develop solutions that align with your unique goals and data.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="qs-customize-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/ab-mobile.png"
                    width={70}
                    height={70}
                    className="do-icon pb-3"
                    alt="AB Mobile Testing icon"
                  />
                  <h3 className="qs-card-heading">AI Consulting & Strategy</h3>
                  <p className="qsd-para">
                  Our experts work with your stakeholders to define a strategic roadmap. We assess your readiness, identify high-impact AI opportunities, and help you prepare the right infrastructure for success.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="qs-customize-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/performance-load.png"
                    width={70}
                    height={70}
                    className="do-icon pb-3"
                    alt="Load & Performance icon"
                  />
                  <h3 className="qs-card-heading">
                  Machine Learning Solutions{" "}
                  </h3>
                  <p className="qsd-para">
                  Predictive analytics, classification, and clustering models for data-driven decision-making. Our ML models help you detect patterns, forecast trends, and personalize user experiences.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="qs-customize-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/cyber-security.png"
                    width={70}
                    height={70}
                    className="do-icon pb-3"
                    alt="Security Testing icon"
                  />
                  <h3 className="qs-card-heading">Natural Language Processing (NLP) </h3>
                  <p className="qsd-para">
                  Empower your systems to understand human language. We build chatbots, sentiment analyzers, summarization tools, and text classifiers to enhance engagement and insights.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="qs-customize-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/automation-test.png"
                    width={70}
                    height={70}
                    className="do-icon pb-3"
                    alt="Automation Testing icon"
                  />
                  <h3 className="qs-card-heading"> Computer Vision Solutions </h3>
                  <p className="qsd-para">
                  Enable machines to see and understand the visual world. From object detection and quality inspection to facial recognition and image tagging, we help you turn images into actionable insights.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="qs-customize-card">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/robotpa.png"
                    width={70}
                    height={70}
                    className="do-icon pb-3"
                    alt="Robotic Process Automation icon"
                  />
                  <h3 className="qs-card-heading">
                    {" "}
                    Robotic Process Automation{" "}
                  </h3>
                  <p className="qsd-para">
                    It is highly essential for a company’s website to be up and
                    running at all times. It cannot afford to have bugs or
                    errors. Trimsel AI development company in Chennai ensures
                    that all aspects of your website are functioning and are
                    devoid of broken pages.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="qs-sec-cta">
        <div className="container">
          <Card className="qs-cta my-5">
            <Card.Body>
              <div className="row">
                <div className="col-lg-7 col-md-12 col-12">
                  <Stack direction="horizontal">
                    <div className=" badge-kariot-btn">
                      <img
                        src="/images/Rectangle-kariot.png"
                        className="me-2"
                        alt="design-dot"
                      />
                      <p> GET IN TOUCH </p>
                    </div>
                  </Stack>
                  <h2 className="cldcta-heading pt-2">
                    Experience Technology to the Fullest with Trimsel AI Development Company
                  </h2>
                  <button className="btn btn-primary dev-btn mt-3">
                    Contact Us{" "}
                    <img
                      src="/images/material-symbols_arrow-right-alt.png"
                      alt="arrow-icon"
                    />
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section id="ensure-section">
        <div className="container ensure-container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h2 className="ensure-heading whiteLink">
              Build and Scale AI Solutions with a Proven Two-Stage Engagement Model
              </h2>
              <h3 className="ens-title whiteLink pt-4">Prototype & Experimentation</h3>
              <p className="ens-para whiteLink">
              Turn complex ideas into rapid AI prototypes. We explore feasibility, collect & prepare datasets, and develop early-stage models (NLP, CV, predictive). This phase provides clarity on expected business value and lays the groundwork before full-scale investments.
              </p>
              <h3 className="ens-title whiteLink pt-4">
              Production Deployment & MLOps
              </h3>
              <p className="ens-para whiteLink">
              Move from successful prototype to secure, scalable production. We containerize your models, deploy them to cloud/on-prem environments, and establish CI/CD pipelines and monitoring to ensure models remain accurate, explainable, and business-relevant.
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <Image
                src="/images/ensure-side.webp"
                width={845}
                height={745}
                alt="Man Experiencing Fast and Performance Image"
                className="ens-sd"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="kariot-about">
        <div className="container xaber-about-container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <h2 className="kariot-title pt-3">Our AI Development Process</h2>
              <p className="qs-abt-para pb-3">
              We follow a transparent, agile AI development approach to build production-ready models with predictable business outcomes.</p>
              <div className="simp-card">
                <div className="card smp-card">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-2 col-size">
                      <Image
                        src="/images/simplicity-image.webp"
                        width={40}
                        height={40}
                        alt="Simple Icon"
                        className="me-2"
                      />
                    </div>
                    <div className="col-lg-10 col-md-10 col-10 cols-size">
                      <h4 className="simp-heading">
                      Use-Case Clarity  -{" "}
                        <span className="simp-para">
                          {" "}
                          We carefully define the business objective and AI use-case to align with the ROI you expect.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="card smp-card my-3">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-2 col-size">
                      <Image
                        src="/images/thumb-up.webp"
                        width={40}
                        height={40}
                        alt="Thump Up Icon"
                        className="me-2"
                      />
                    </div>
                    <div className="col-lg-10 col-md-10 col-10 cols-size">
                      <h4 className="simp-heading">
                      Data Reliability -{" "}
                        <span className="simp-para">
                          {" "}
                          We make sure your data is clean, unbiased and production-ready for consistent model performance.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="card smp-card my-4">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-2 col-size">
                      <Image
                        src="/images/transparencyicon.webp"
                        width={40}
                        height={40}
                        alt="Transparency Icon"
                        className="me-2"
                      />
                    </div>
                    <div className="col-lg-10 col-md-10 col-10 cols-size">
                      <h4 className="simp-heading">
                      Explainability -{" "}
                        <span className="simp-para">
                          {" "}
                          Clear insight into model decisions so stakeholders can trust and adopt AI outcomes.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="sor-heading pt-3">
                Based on these parameters, we scope out
              </h3>
              <div className="row pt-3">
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="card sor-card">
                    <h4 className="sim-heading">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-3 rw-size">
                          <span>
                            <Image
                              src="/images/check-circle.png"
                              width={30}
                              height={30}
                              alt="Check Icon"
                              className="check-image"
                            />
                          </span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-9 rws-size">
                        What business problem are we solving with AI?
                        </div>
                      </div>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="card sor-card">
                    <h4 className="sim-heading">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-3 rw-size">
                          <span>
                            <Image
                              src="/images/check-circle.png"
                              width={30}
                              height={30}
                              alt="Check Icon"
                              className="check-image"
                            />
                          </span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-9 rws-size">
                        Do you have enough data – or do we need to generate/collect it?
                        </div>
                      </div>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="card sor-card">
                    <h4 className="sim-heading">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-3 rw-size">
                          <span>
                            <Image
                              src="/images/check-circle.png"
                              width={30}
                              height={30}
                              alt="Check Icon"
                              className="check-image"
                            />
                          </span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-9 rws-size">
                        What key metrics (accuracy, latency, ROI) define success?
                        </div>
                      </div>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                  <div className="card sor-card">
                    <h4 className="sim-heading">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-3 rw-size">
                          <span>
                            <Image
                              src="/images/check-circle.png"
                              width={30}
                              height={30}
                              alt="Check Icon"
                              className="check-image"
                            />
                          </span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-9 rws-size">
                        Where will the model run – cloud, on-device, or edge?
                        </div>
                      </div>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className=" card card-subs">
                <div className="card-sor-details">
                  <Stack direction="horizontal">
                    <div className=" badge-kariot-btn mb-3">
                      <img
                        src="/images/Rectangle-kariot.png"
                        className="me-2"
                        alt="design-dot"
                      />
                      <p> WHAT WE DELIVER </p>
                    </div>
                  </Stack>
                  <h2>
                  End-to-End AI Engineering & Deployment
                  </h2>
                  <p>
                  As your AI development partner, we support the entire lifecycle — from feasibility and prototyping through to scalable MLOps deployment. We build custom models (NLP, computer vision, predictive analytics, generative AI) and integrate them securely into your systems and workflows. With continuous monitoring and retraining pipelines, we ensure your models stay accurate and business-relevant in real-world conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qsa-tools">
        <div className="container devtool-container">
          <Row>
            <Col lg={6} md={6}>
              <h3 className="tools-heading">
              Technology Stack We Use
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <p className="qsa-para">
                Our solutions are built using trusted tools and platforms to ensure performance, scalability, and security.
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col lg={6} md={6} className="pt-2">
              <h5 className="tool-cat-heading pb-2">Languages & Frameworks</h5>
              <Table className="mb-5">
                <tbody>
                  <tr>
                    <td className="new-bdr">
                      <img
                        src="/images/tools-image/selenium_logo.png"
                        className="mbl-tools pb-3"
                        alt="Selenium Automation Tool Logo"
                      />
                    </td>
                    <td className="new-bdr">
                      <Image
                        src="/images/tools-image/webdriver.png"
                        className="qsa-tool pb-3 ps-1"
                        width={112}
                        height={60}
                        alt="Webdriver Automation Tool Logo"
                      />
                    </td>
                    <td className="d-none d-lg-table-cell new-bdr">
                      <Image
                        src="/images/tools-image/cucumber.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="Cucumber Automation Tool Logo"
                        width={184}
                        height={60}
                      />
                    </td>
                  </tr>
                  <tr className="table-extra-border-bottom">
                    <td className="d-lg-none new-bdr">
                      <Image
                        src="/images/tools-image/cucumber.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="Cucumber Automation Tool Logo"
                        width={184}
                        height={60}
                      />
                    </td>
                    <td className="new-bdr">
                      <Image
                        src="/images/tools-image/Protractor.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="Protactor Automation Tool Logo"
                        width={145}
                        height={66}
                      />
                    </td>
                    <td className="d-none d-lg-table-cell new-bdr">
                      <Image
                        src="/images/tools-image/cypress.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="Cypress Automation Tool Logo"
                        width={141}
                        height={73}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="d-lg-none new-bdr">
                      <Image
                        src="/images/tools-image/cypress.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="Cypress Automation Tool Logo"
                        width={141}
                        height={73}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>

              <h5 className="tool-cat-heading pb-2">Generative AI Platforms</h5>
              <Table className="mb-5">
                <tbody>
                  <tr>
                    <td className="new-bdr">
                      <Image
                        src="/images/tools-image/postman.png"
                        className="qsa-tool pb-3"
                        alt="Postman API Testing Tool Logo"
                        width={162}
                        height={57}
                      />
                    </td>
                    <td className="new-bdr">
                      <Image
                        src="/images/tools-image/rest-assured.png"
                        className="qsa-tool pb-3 ps-1"
                        width={177}
                        height={54}
                        alt="Rest-Assured API Testing Tool Logo"
                      />
                    </td>
                    <td className="d-none d-lg-table-cell new-bdr">
                      <Image
                        src="/images/tools-image/soapui.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="SoapUI API Testing Tool Logo"
                        width={154}
                        height={44}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="d-lg-none new-bdr">
                      <Image
                        src="/images/tools-image/soapui.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="SoapUI API Testing Tool Logo"
                        width={154}
                        height={44}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>

              <h5 className="tool-cat-heading pb-2">
              Cloud and DevOps
              </h5>
              <Table  className="mb-5">
                <tbody>
                  <tr>
                    <td className="new-bdr">
                      <Image
                        src="/images/tools-image/zap-logo.png"
                        className="qsa-tool pb-3"
                        alt="ZAP Non-Functional Testing Tool Logo"
                        width={131}
                        height={51}
                      />
                    </td>
                    <td className="new-bdr">
                      <Image
                        src="/images/tools-image/owasp.png"
                        className="qsa-tool pb-3 ps-1"
                        width={152}
                        height={53}
                        alt="Owasp Non-Functional Testing Tool Logo"
                      />
                    </td>
                    <td className="d-none d-lg-table-cell new-bdr">
                      <Image
                        src="/images/tools-image/Apache_JMeter.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="Apache JMeter Non-Functional Testing Tool Logo"
                        width={141}
                        height={48}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="d-lg-none new-bdr">
                      <Image
                        src="/images/tools-image/Apache_JMeter.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="Apache JMeter Non-Functional Testing Tool Logo"
                        width={141}
                        height={48}
                      />
                    </td>
                    <td className="d-none d-lg-table-cell new-bdr">
                      <Image
                        src="/images/tools-image/blazemeter.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="Blazemeter Non-Functional Testing Tool Logo"
                        width={148}
                        height={17}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col lg={6} md={6} className="pt-2">
              <h5 className="tool-cat-heading pb-2">Data Tools</h5>
              <Table  className="mb-5">
                <tbody>
                  <tr>
                    <td className="new-bdr">
                      <Image
                        src="/images/tools-image/Atlassian-Logo.png"
                        className="qsa-tool pb-3"
                        alt="Atlassian Test Management Tool Logo"
                        width={132}
                        height={60}
                      />
                    </td>
                    <td className="new-bdr">
                      <Image
                        src="/images/tools-image/Zephyr.png"
                        className="qsa-tool pb-3 ps-1"
                        width={138}
                        height={37}
                        alt="Zephyr Test Management Tool Logo"
                      />
                    </td>
                    <td className="d-none d-lg-table-cell new-bdr">
                      <Image
                        src="/images/tools-image/testrail.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="TestRail Test Management Tool Logo"
                        width={142}
                        height={26}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="d-lg-none new-bdr">
                      <Image
                        src="/images/tools-image/testrail.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="TestRail Test Management Tool Logo"
                        width={142}
                        height={26}
                      />
                    </td>
                    <td className="d-none d-lg-table-cell new-bdr">
                      <Image
                        src="/images/tools-image/jenkins.png"
                        className="qsa-tool pb-3 ps-1"
                        alt="Jenkins Test Management Tool Logo"
                        width={146}
                        height={47}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </section>
      <ContactForm heading="Ready to Build an AI App?" subText="Speak with our data scientists & engineers to scope your AI use-case."/>
      <section id="faq">
        <div className="container faq-container">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0" flush className="py-5">
            <Accordion.Item eventKey="0" className="pb-3">
              <Accordion.Header>
                Why choose Trimsel as your AI development company in Chennai?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                Trimsel has an expert AI development team in Chennai who specialize in building production-ready AI solutions — from predictive analytics and NLP models to generative AI agents — tailored for real business outcomes.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="pb-3">
              <Accordion.Header>
                What AI development services do you offer?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                We offer custom AI agent development, machine learning models, predictive analytics, NLP, computer vision, generative AI solutions, and MLOps deployment.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="pb-3">
              <Accordion.Header>
                How much does AI development cost?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                AI solution cost depends on scope, complexity, dataset availability, and deployment needs. We provide scalable packages based on prototype, MVP, and enterprise requirements.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="pb-3">
              <Accordion.Header>
              Do you offer MLOps and post-launch support?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                Yes. We help deploy, monitor, and maintain AI models in production with CI/CD, retraining pipelines, and infrastructure automation.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="pb-3">
              <Accordion.Header>
              How long does it take to build an AI solution?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                Initial prototype/POC can take 4–6 weeks. Full-scale enterprise AI system rollout generally takes 3–6 months depending on integrations, data availability, and compliance requirements.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      <Footer />
    </>
  );
}