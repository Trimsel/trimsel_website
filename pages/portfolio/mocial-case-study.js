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
        title="Mocial DevOps Case Study – From EC2 Monolith to EKS Microservices | Trimsel"
        description="How Trimsel replatformed Mocial from a single EC2 monolith to a scalable microservices architecture on Amazon EKS with Codefresh CI/CD and SRE practices."
        canonical="https://www.trimsel.com/portfolio/mocial-case-study"
        openGraph={{
          type: "article",
          url: "https://www.trimsel.com/portfolio/mocial-case-study",
          title:
            "Mocial DevOps Case Study – From EC2 Monolith to EKS Microservices | Trimsel",
          description:
            "Trimsel migrated Mocial from a single EC2 monolith to microservices on Amazon EKS with Codefresh CI/CD, observability, and SRE best practices.",
          locale: "en_IN",
          images: [
            {
              url: "https://www.trimsel.com/images/portfolio/mocial-og.jpg",
              width: 1200,
              height: 630,
              alt: "Trimsel Mocial DevOps case study – EC2 to EKS microservices",
            },
          ],
          site_name: "Trimsel",
          article: {
            section: "Case Study",
            tags: [
              "Case Study",
              "DevOps",
              "EKS",
              "Microservices",
              "CI/CD",
              "Trimsel",
            ],
          },
        }}
        twitter={{
          handle: "@TrimselSoftwares",
          site: "@TrimselSoftwares",
          cardType: "summary_large_image",
          title:
            "DevOps Case Study: Mocial – From EC2 Monolith to EKS Microservices",
          description:
            "Discover how Trimsel replatformed Mocial from a single EC2 monolith to a production-grade microservices platform on Amazon EKS.",
        }}
        additionalMetaTags={[
          { name: "robots", content: "index, follow" },
          {
            name: "twitter:title",
            content:
              "DevOps Case Study: Mocial – From EC2 Monolith to EKS Microservices",
          },
          {
            name: "twitter:description",
            content:
              "Discover how Trimsel replatformed Mocial from a single EC2 monolith to a production-grade microservices platform on Amazon EKS.",
          },
          {
            name: "twitter:image:alt",
            content: "Trimsel Mocial DevOps case study – EC2 to EKS",
          },
        ]}
      />
      <Head>
        {[
          // CaseStudy entity
          {
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            "@id": "https://www.trimsel.com/portfolio/mocial-case-study#case",
            name: "Mocial DevOps Case Study – From EC2 Monolith to EKS Microservices",
            headline:
              "Mocial DevOps Case Study – From EC2 Monolith to EKS Microservices",
            description:
              "Trimsel replatformed Mocial from a single EC2 monolith to a microservices architecture on Amazon EKS with Codefresh CI/CD, observability, and SRE practices.",
            inLanguage: "en",
            url: "https://www.trimsel.com/portfolio/mocial-case-study",
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
              url: "https://www.trimsel.com/images/portfolio/mocial-og.jpg",
              width: 1200,
              height: 630,
            },
            image: {
              "@type": "ImageObject",
              url: "https://www.trimsel.com/images/portfolio/mocial-og.jpg",
              width: 1200,
              height: 630,
            },
          },
          // Breadcrumbs
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id":
              "https://www.trimsel.com/portfolio/mocial-case-study#breadcrumbs",
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
                name: "Mocial DevOps Case Study",
                item: "https://www.trimsel.com/portfolio/mocial-case-study",
              },
            ],
          },
        ].map((schema, index) => (
          <script
            key={`mocial-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <main>
        {/* HERO */}
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
                            <h4 className="badge-txt mb-0">
                              DevOps Case Study
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="cafe">
                        <div className="cafe-inner moc-title">
                          From EC2 Monolith to a Production-grade EKS Platform
                        </div>
                      </div>
                      <div className="mozart">
                        <div className="mozart-inner">
                          <p className="moc-para">
                            Mocial set out to become a single super-app that
                            combines the best of Facebook, Instagram, Netflix,
                            LinkedIn and X. The first version launched as a
                            single EC2 monolith where frontend, backend and
                            database all lived together – creating bottlenecks
                            in scalability, deployments and reliability. Trimsel
                            helped Mocial replatform to a microservices
                            architecture on Amazon EKS with modern DevOps and
                            SRE practices.
                          </p>
                        </div>
                      </div>
                      <div className="mozart">
                        <div className="mozart-inner">
                          <p className="moc-para">
                            In this case study, see how we moved from one
                            fragile EC2 box to a production-grade platform with
                            Codefresh CI/CD, autoscaling, observability and
                            safer releases.
                          </p>
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
                      alt="Mocial DevOps architecture illustration"
                      className="moc-app-image"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* OVERVIEW */}
        <section id="moc-about">
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
                <Image
                  src="/images/mocile-logo.png"
                  width={98}
                  height={98}
                  alt="Mocial App Logo"
                  className="moc-logo"
                />
                <h2 className="kariot-title pt-1">
                  Turning a Single EC2 Monolith into a Scalable Super-app
                </h2>
                <p className="kariot-abt-para pb-3">
                  Mocial’s vision was ambitious: offer a single platform where
                  users can browse feeds, share media, network professionally,
                  discover jobs and watch live content. The first implementation
                  shipped quickly but ran everything – frontend, backend and
                  database – inside one EC2 instance. Deployments were risky,
                  scaling was vertical-only, and a spike in one area could
                  impact the entire app.
                  <br />
                  <br />
                  Trimsel partnered with Mocial to design and implement a
                  modern DevOps foundation. We introduced a microservices
                  architecture on Amazon EKS, Codefresh-based CI/CD and SRE
                  practices so that the platform could scale workloads like
                  feeds, media, chat and notifications independently.
                  <br />
                  <br />
                  Looking for similar DevOps uplift? Explore our{" "}
                  <Link href="/devops-consulting-services">
                    DevOps consulting services
                  </Link>{" "}
                  and{" "}
                  <Link href="/cloud-consulting-services">
                    cloud consulting offerings
                  </Link>
                  .
                </p>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="card card-subs">
                  <div className="card-moc-details">
                    <h5 className="pb-3">START YOUR PROJECT</h5>
                    <h2>Need to stabilise and scale your platform?</h2>
                    <p>
                      Request a one-to-one consultation with our DevOps team to
                      assess your current stack and define a migration path.
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

            {/* KEY NUMBERS */}
            <div className="row xaber-details-row">
              <div className="col-lg-3 col-md-3 col-6">
                <div className="lines-section">
                  <h3>Client :</h3>
                  <p>Mocial (Stealth Super-app)</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="lines-section">
                  <h3>Industry :</h3>
                  <p>Social, Media & Community</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="lines-section">
                  <h3>Engagement :</h3>
                  <p>DevOps & Cloud Re-platforming</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="lines-section">
                  <h3>Cloud :</h3>
                  <p>AWS (EKS, S3, CloudFront)</p>
                </div>
              </div>
            </div>

            <div className="xaber-counter">
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
                          <h4 className="static-text">
                            Estimated Monthly Users*
                          </h4>
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
                          <h4 className="static-text">
                            Daily Active Sessions*
                          </h4>
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
                          <h4 className="static-text">
                            CI/CD Pipeline Runs / Year*
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section id="moc-challenge">
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
                  Monolith Bottlenecks: Slow Deployments and Fragile Scale
                </h2>

                <Image
                  src="/images/mocial-work-bg.png"
                  width={790}
                  height={393}
                  alt="Mocial monolith to microservices transformation"
                  className="moc-work pt-3"
                  quality={100}
                />
              </div>
              <div className="col-lg-5 col-md-5">
                <p className="mocial-chl-para">
                  The first version of Mocial shipped as a single EC2 instance
                  hosting frontend, backend and database together. That helped
                  the team move fast initially, but quickly created operational
                  problems:
                </p>
                <p className="mocial-chl-para">
                  <strong>• Risky, manual deployments.</strong> Every deploy
                  required coordinated manual steps, with no easy rollback and a
                  real risk of downtime.
                  <br />
                  <strong>• Limited scalability.</strong> Traffic spikes from
                  feeds, media uploads and live usage had to be absorbed by the
                  same instance, with only vertical scaling as an option.
                  <br />
                  <strong>• Minimal observability.</strong> There were no clear
                  SLOs/SLIs, little tracing and only basic logs, making it hard
                  to diagnose incidents.
                  <br />
                  <strong>• Coupled teams.</strong> Because all features lived
                  inside one codebase and deployment unit, feature teams were
                  blocked by a shared release train.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM FACED */}
        <section id="moc-problem">
          <div className="container prob-container">
            <Stack direction="horizontal">
              <div className="badge-kariot-btn mb-3">
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
                A Super-app Vision Held Back by Infrastructure Limits
              </h2>
              <p className="mocial-chl-para">
                Mocial’s product vision was clear: one super-app that could
                blend social feeds, media sharing, networking, jobs and live
                content. But the underlying infrastructure made it difficult to
                sustain this vision in production.
              </p>
              <p className="mocial-chl-para">
                Any spike in one feature – a trending post, a burst of live
                viewers, or a marketing campaign driving new sign-ups – could
                push CPU, memory and database connections to their limit. The
                team had no consistent way to measure p95 latency, error rates
                or saturation, and no formal SLOs or error budgets to guide
                rollouts and risk.
                <br />
                <br />
                Mocial needed a modern DevOps and SRE foundation: one that could
                decouple services, safely increase release frequency, and give
                operators the visibility they needed to keep the experience
                stable while the product evolved.
              </p>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section id="moc-solution">
          <div className="container mocsol-container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <Image
                  src="/images/mocial-screens.png"
                  width={658}
                  height={860}
                  alt="Mocial microservices and DevOps dashboards"
                  className="moc-screen"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <Stack direction="horizontal">
                  <div className="badge-kariot-btn mb-3">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> THE SOLUTION </p>
                  </div>
                </Stack>
                <h2 className="moprob-heading">
                  Microservices on EKS with Codefresh CI/CD and SRE Practices
                </h2>
                <ol className="moc-list">
                  <li>
                    <p className="mocial-chl-para">
                      <strong>Strangler-fig migration.</strong> We incrementally
                      decomposed the monolith into focused services – auth,
                      users, feed, media, notifications, chat and admin –
                      without a big-bang rewrite.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      <strong>Amazon EKS for core workloads.</strong> Each
                      service runs as one or more deployments on EKS with
                      horizontal pod autoscaling, pod disruption budgets and
                      resource limits/requests tuned per workload.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      <strong>Dedicated environments.</strong> Dev, QA and
                      Production are isolated using separate namespaces and
                      environment configs, with promotions flowing through a
                      Git-driven pipeline.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      <strong>Codefresh CI/CD pipelines.</strong> Each service
                      has a pipeline that builds, tests, scans and deploys
                      containers via Helm. Progressive delivery strategies
                      (canary and blue/green) allow safe rollouts and fast
                      rollbacks.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      <strong>Observability by default.</strong> OpenTelemetry
                      tracing, Prometheus/Grafana metrics and structured logs
                      provide end-to-end visibility. We defined SLIs/SLOs for
                      availability, p95 latency and error rate per service.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      <strong>Runbooks & SRE workflows.</strong> Common
                      incident scenarios are documented with playbooks and
                      automated checks. Where possible, Codefresh can
                      automatically roll back on SLO breach to reduce MTTR.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      <strong>Cost optimisation and resilience.</strong> Node
                      groups are right-sized; autoscaling and spot instances are
                      used where suitable. Media is offloaded to S3 with
                      CloudFront, and storage lifecycle policies reduce long-term
                      cost.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      <strong>Security and compliance.</strong> Secrets are
                      managed via AWS Secrets Manager; IAM roles follow the
                      principle of least privilege; network policies and WAF
                      rules protect ingress.
                    </p>
                  </li>
                  <li>
                    <p className="mocial-chl-para">
                      <strong>Ongoing DevOps coaching.</strong> We worked with
                      the Mocial engineering team to embed good Git practices,
                      trunk-based development and a “you build it, you run it”
                      mindset.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section id="xaber-tech">
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
            <h3 className="tech-kariot-heading pt-5">
              Platform & DevOps Stack
            </h3>
            <div className="row pt-4">
              <div className="col-lg-7 col-md-8">
                <h5 className="tech-kariot-sub py-3">Cloud & Services</h5>
                <div className="tech-img-container">
                  {/* Replace these logos with AWS/EKS/Codefresh/etc. when ready */}
                  <Image
                    src="/images/js.png"
                    alt="Node.js / JavaScript microservices"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/react-native.png"
                    alt="React Native / frontend stack"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/flutter.png"
                    alt="Mobile app layer"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/native.png"
                    alt="Native integrations where required"
                    width={185}
                    height={84}
                    className="me-2 mb-2 native-img mbl-design"
                  />
                  <Image
                    src="/images/c++.png"
                    alt="Performance-critical components"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-4">
                <h5 className="tech-kariot-sub py-3">Design & Collaboration</h5>
                <div className="tech-img-container">
                  <Image
                    src="/images/photoshop.png"
                    alt="UI assets and marketing creatives"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                  <Image
                    src="/images/figma.png"
                    alt="Component-driven product design"
                    width={216}
                    height={84}
                    className="me-2 mb-2 mbl-design"
                  />
                </div>
              </div>
            </div>
            <p className="mocial-chl-para pt-3">
              Under the hood, the platform also makes use of AWS EKS, S3,
              CloudFront, managed databases, Redis caching, observability tools
              and Codefresh pipelines for CI/CD – forming a cohesive DevOps
              foundation for Mocial’s super-app roadmap.
            </p>
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
                      Need to replatform your product or fix deployment pain?
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
              Read About More Digital Success Stories
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
                          Mobile and web platform for booking verified home
                          service professionals with scalable backend and
                          real-time tracking.
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
                        <img src="/images/Group3002.png" />
                      </Card.Header>
                      <Card.Body className="case-carousel-body">
                        <h3 className="case-carousel-heading">Xaber</h3>
                        <p className="case-carousel-para justify-content-center">
                          Ride-hailing platform inspired by Uber, engineered for
                          high availability and efficient operations.
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
              {/* Keep extra slides or remove if not needed */}
              <ol className="carousel-indicators">
                {slides.map((slide, i) => (
                  <li
                    className={`carousel-indicator ${i === index ? "active" : ""
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
