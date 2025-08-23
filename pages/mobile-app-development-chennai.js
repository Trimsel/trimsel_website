import Link from "next/link";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import Table from "react-bootstrap/Table";
import { NextSeo } from "next-seo";
import dynamic from 'next/dynamic';

const Header = dynamic(() => import("../components/header"), { ssr: true });
const Footer = dynamic(() => import("../components/footer"), { ssr: false });
const ClientLogo = dynamic(() => import("../components/clientLogo"), { ssr: false });
const ContactForm = dynamic(() => import("../components/ContactForm"), { ssr: false });

export default function mobileApp() {
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

  const slides = [1, 2, 3];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
<NextSeo
  title="Top Mobile App Development Company in Chennai, India | Trimsel"
  description="Trimsel is a top mobile app development company in Chennai, India. We build secure, scalable iOS, Android, Flutter & hybrid apps tailored to your business."
  canonical="https://www.trimsel.com/mobile-app-development-chennai"
  openGraph={{
    type: "website",
    url: "https://www.trimsel.com/mobile-app-development-chennai",
    title: "Best Mobile App Development Company in Chennai, India | Trimsel",
    description:
      "Trimsel is a leading mobile app development company in Chennai, India. Expert Android, iOS, Flutter & Hybrid app developers delivering scalable, secure solutions.",
    images: [
      {
        url: "https://www.trimsel.com/images/mobilehero.webp",
        width: 1200,
        height: 630,
        alt: "Leading Mobile App Development Company in Chennai"
      }
    ],
    site_name: "Trimsel"
  }}
  additionalMetaTags={[
    { name: "robots", content: "index, follow" }
  ]}
  additionalJsonLd={[
    // Primary service entity (clean & focused)
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.trimsel.com/mobile-app-development-chennai#service",
      "name": "Mobile App Development (Chennai)",
      "serviceType": "Mobile Application Development",
      "description": "iOS, Android, and cross-platform (Flutter/React Native) app development with secure, scalable architectures.",
      "provider": { "@id": "https://www.trimsel.com/#org" },
      "areaServed": [
        { "@type": "Place", "name": "Chennai" },
        { "@type": "Country", "name": "India" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile App Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flutter / Cross-platform Apps" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Testing & Security" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX & App Design" } }
        ]
      }
    },
    // Breadcrumbs (nice signal)
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.trimsel.com/mobile-app-development-chennai#breadcrumbs",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trimsel.com/" },
        { "@type": "ListItem", "position": 2, "name": "Mobile App Development (Chennai)", "item": "https://www.trimsel.com/mobile-app-development-chennai" }
      ]
    },
    // Keep this ONLY if questions/answers are visible on the page
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.trimsel.com/mobile-app-development-chennai#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why Choose Trimsel as Your Mobile App Development Company in Chennai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trimsel is a top-rated mobile app development company in Chennai, India, trusted by startups and enterprises. We specialize in iOS, Android, and cross-platform apps using cutting-edge technologies like Flutter and React Native."
          }
        },
        {
          "@type": "Question",
          "name": "How Much Does It Cost to Develop a Mobile App?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of mobile app development varies based on features, complexity, platform, and development approach. At Trimsel, we offer scalable solutions tailored to your unique business needs and budget."
          }
        },
        {
          "@type": "Question",
          "name": "Which Is Better: Native or Cross-Platform App Development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Native apps (iOS or Android) offer high performance, while cross-platform apps built using Flutter or React Native are faster to develop and more cost-effective. We help you choose the right approach based on your project scope."
          }
        },
        {
          "@type": "Question",
          "name": "Do You Offer Flutter App Development Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We’re a Flutter app development company in Chennai offering fast, cost-efficient cross-platform mobile applications with native-like performance."
          }
        },
        {
          "@type": "Question",
          "name": "How Long Does It Take to Develop a Mobile App?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A basic app can take 6–8 weeks, while feature-rich enterprise mobile apps may take 4–6 months. We follow agile development for faster time-to-market without compromising quality."
          }
        },
        {
          "@type": "Question",
          "name": "Can I Hire Mobile App Developers from Trimsel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We provide dedicated mobile app developers in Chennai to work on your project full-time or part-time, ensuring transparency, speed, and technical excellence."
          }
        },
        {
          "@type": "Question",
          "name": "What Is Hybrid Mobile App Development and Is It Right for My Business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hybrid mobile apps are built using web technologies like HTML, CSS, and JavaScript with frameworks like Ionic. They are ideal for MVPs or businesses looking for quick deployment across platforms."
          }
        },
        {
          "@type": "Question",
          "name": "Is My App Secure and Compliant with Data Protection Laws?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We implement best practices for mobile app security and ensure compliance with GDPR, HIPAA, and PCI-DSS based on your industry and location."
          }
        },
        {
          "@type": "Question",
          "name": "Do You Provide Post-Launch Support and Maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer ongoing maintenance, feature enhancements, performance monitoring, and support services to keep your app secure and up to date."
          }
        },
        {
          "@type": "Question",
          "name": "How Can I Get Started with My Mobile App Project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a consultation with our team to discuss your app idea, goals, and expectations. We’ll help you plan and validate your mobile app development journey from start to finish."
          }
        }
      ]
    }
  ]}
/>


      <main>
        <section className="hero-mbl">
          <Header />
    {/*Hero Section*/}
          <section className="hero">
            <div className="container pt-3 pb-5">
              <div id="app" className="new-mbls">
                <div className="title">
                  <div className="title-inner">
                    <div className="cafe">
                      <p className="breadcrumbs">
                        <Link href="/" aria-label="Go to Trimsel Homepage">Home</Link> <span> &#x2027; </span>{" "}
                        {/* <Link href="/services" aria-label="View Services">Services</Link> <span> &#x2027; </span>{" "} */}
                        Mobile App Development
                      </p>

                      <div className="cafe-inner new-title">
                        <h1>
                          {" "}
                            Mobile App Development Company in Chennai
                        </h1>
                      </div>
                    </div>
                    <div className="mozart">
                      <div className="mozart-inner">
                        <p>
                        We craft custom-built mobile apps for businesses that demand speed, security, and growth-focused outcomes. From MVPs to enterprise-grade apps, we bring your ideas to life.
                        </p>
                      </div>
                    </div>
                    <div className="mozart">
                      <div className="mozart-inner">
                        <Link href="/contact-us" passHref>
                          <button className="btn btn-primary get-btn">
                          Get a Consultation{" "}
                            <img src="/images/material-symbols_arrow-right-alt.png" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imgr">
                  <Image
                    src="/images/mobilehero.webp"
                    className="hero-imgs"
                    width={637}
                    height={666}
                    alt="Leading mobile app development company in Chennai – Build high-performance Android & iOS apps today!"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

{/*Our Trusted Clients Section*/}
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
                <h2 className="client-title">Trusted by Leading Brands</h2>
              </div>
              <div className="col-lg-6 col-md-6">
                <p>We collaborate with startups and enterprises to ship secure, scalable mobile apps that improve user experience and unlock growth.</p>
              </div>
            </div>
            <ClientLogo />
          </div>
        </section>

{/*About Trimsel Section*/}
        <section id="about-mbl">
          <div className="container mbl-about">
            <div className="row mbl-abt">
              <div className="col-lg-9 col-md-9">
                <Stack direction="horizontal" className="pb-4">
                  <div className=" badge-abot-btn">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> WHO WE ARE </p>
                  </div>
                </Stack>
                <h2 className="about-head">
                  About Trimsel – Leading Mobile App Development Company in Chennai, India
                </h2>
              </div>
              <div className="col-lg-3 col-md-3">
                <Image
                  src="/images/Group306.png"
                  className="mdl-btn"
                  alt="Lets talk image"
                  width={160}
                  height={160}
                />
              </div>
            </div>
            <p>
            In today’s digital-first world, mobile apps do more than support your business. At Trimsel, we believe a successful app should solve real-world challenges, create user delight, and deliver long-term value. It’s not just about building software, it's about building the future.
            </p>
            <p>
              <br></br>
              Our team blends technical expertise with creativity to build future-ready digital solutions that drive business growth. As a top mobile app development company in Chennai, we specialize in developing custom Android, iOS, and cross-platform applications that are scalable, secure, and high-performing.<br></br><br></br>

            Why Do Businesses Choose Trimsel for Mobile App Development?<br></br>
              <b>Customized Mobile Solutions</b> – Tailored iOS, Android, and Hybrid apps designed for startups & enterprises.<br></br>
              <b>Comprehensive App Development</b> – End-to-end app strategy, UI/UX design, development, and deployment.<br></br>
              <b>Cutting-Edge Technologies</b> – Harnessing AI, Machine Learning, IoT, and Blockchain to build next-generation mobile experiences.<br></br>
              <b>Seamless Performance</b> – Optimized for scalability, security, and superior user experience.<br></br>
            </p>
            <p>
            We closely monitor industry trends, user preferences, and niche market insights to deliver apps that resonate deeply with your audience, driving higher engagement and tangible business results. Our expertise in leveraging cutting-edge technologies ensures every application we develop not only meets current market demands but also positions your business for long-term success.
            </p>
            <p>
            Our commitment to high-quality app development services in Chennai has earned us recognition as a trusted mobile app development brand in India.
            </p>
          </div>
        </section>

{/*Why choose Trimsel Section*/}
        {/* <section id="about-mbl">
          <div className="container mbl-about">
            <div className="row mbl-abt">
              <div className="col-lg-9 col-md-9">
                <Stack direction="horizontal" className="pb-4">
                  <div className=" badge-abot-btn">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> Why Trimsel? Your Trusted Mobile App Development Partner </p>
                  </div>
                </Stack>
                <h2 className="about-head">
                  About Trimsel – Expert Mobile App Developers in Chennai,India
                </h2>
              </div>
              <div className="col-lg-3 col-md-3">
                <Image
                  src="/images/Group306.png"
                  className="mdl-btn"
                  alt="Expert app Developers in Chennai - Trimsel"
                  width={160}
                  height={160}
                />
              </div>
            </div>
            <p className="cliented-text">
            What Makes Trimsel the Preferred Mobile App Development Company?<br></br>

          Proven Experience & Industry Expertise<br></br>
          6+ Years in Mobile App Development – Delivering innovative & high-performance apps.<br></br>
          200+ Mobile Applications Successfully Delivered – Across diverse industries like FinTech, Healthcare, E-commerce & more.<br></br>
          Cutting-Edge Technology & Custom Solutions<br></br>
          Expertise in AI, ML, Blockchain, & IoT – Powering next-gen applications.<br></br>
          Cross-Platform & Hybrid Development – Flutter, React Native, & more.<br></br>
          Scalable & Future-Proof Solutions – Apps built for performance, security & long-term success.<br></br>
          Trusted by Global Brands & Startups<br></br>
          A track record of working with leading enterprises & startups, ensuring seamless mobile app solutions.<br></br>
          Dedicated Support & Agile Development Approach – From idea to launch, we guide you through every step.<br></br>
            </p>
          </div>
        </section> */}

        <section id="digital-mbl">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-6">
                <h3 className="dgt-heading">Why Businesses Trust Trimsel for Mobile Application Development</h3>
                <p>
                Trimsel, a leading mobile app development company in Chennai, India, empowers businesses to achieve scalable growth and digital success with innovative mobile solutions. Our expert mobile app developers build tailored iOS, Android, and cross-platform applications designed specifically to meet your business objectives, ensuring enhanced performance, robust security, and exceptional user experience.
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                {/* <Button className="dgt-btn" href="#">
                  <img src="/images/Group309.png" width={40} /> Your deadlines
                  are our goals
                </Button> */}
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-4 col-md-4">
                <Card className="mbl-card">
                  <Card.Title className="title-dsgn">
                    <img src="/images/like1.png" /> Enterprise-Grade Mobile Applications
                  </Card.Title>
                  <Card.Body>
                    <p className="card-para">
                    We deliver enterprise mobile application development solutions with industry-leading standards. Our mobile apps undergo rigorous testing, ensuring robust security, seamless scalability, and high-performance experiences across devices.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-4">
                <Card className="mbl-card">
                  <Card.Title className="title-dsgn">
                    <Image
                      src="/images/profits.png"
                      width={40}
                      height={40}
                      alt="Profit Icon"
                    />{" "}
                    Cost-Effective & Scalable App Solutions
                  </Card.Title>
                  <Card.Body>
                    <p className="card-para">
                      Through our mobile app development services, we deliver scalable solutions that balance cost-effectiveness with enterprise-level quality, helping your business grow without limits. From startups to expanding enterprises, our apps ensure robust performance, reliability, and a user experience that drives long-term success.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-4">
                <Card className="mbl-card">
                  <Card.Title className="title-dsgn">
                    <img src="/images/guru1.png" /> Expert Mobile App Developers
                  </Card.Title>
                  <Card.Body>
                    <p className="card-para">
                    Hire our dedicated mobile app experts in Chennai proficient in native iOS and Android apps as well as cross-platform app development (Flutter, React Native). Our developers ensure feature-rich, intuitive, and high-performance applications.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-4">
                <Card className="mbl-card">
                  <Card.Title className="title-dsgn">
                    <img src="/images/ethics1.png" /> Agile & Transparent Development Process
                  </Card.Title>
                  <Card.Body>
                    <p className="card-para">
                    Our agile development approach provides transparent, real-time updates and collaborative workflows, ensuring clients stay informed and involved throughout the development lifecycle for seamless execution and faster market launch.
                    </p>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-lg-4 col-md-4">
                <Card className="mbl-card">
                  <Card.Title className="title-dsgn">
                    <img src="/images/customer1.png" /> User-Centric Mobile App Design
                  </Card.Title>
                  <Card.Body>
                    <p className="card-para">
                    We offer comprehensive mobile app design services with a strong focus on UI/UX, ensuring intuitive navigation, exceptional user engagement, and superior customer satisfaction.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-4">
                <Card className="mbl-card">
                  <Card.Title className="title-dsgn">
                    <img src="/images/time1.png" /> Faster Mobile App Development & Deployment
                  </Card.Title>
                  <Card.Body>
                    <p className="card-para">
                    Leveraging cutting-edge technologies, including low-code development platforms and automated testing tools, we accelerate your app's time-to-market, delivering robust mobile solutions rapidly without compromising quality.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-4">
                <Card className="mbl-card">
                  <Card.Title className="title-dsgn">
                    <img src="/images/customer1.png" /> Cross-Platform App Development
                  </Card.Title>
                  <Card.Body>
                    <p className="card-para">
                    As a premier cross-platform app development company, our expertise in Flutter and React Native enables us to develop highly effective apps that run flawlessly on both iOS and Android, significantly reducing development time and cost.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-4">
                <Card className="mbl-card">
                  <Card.Title className="title-dsgn">
                    <img src="/images/customer1.png" /> Security & Compliance
                  </Card.Title>
                  <Card.Body>
                    <p className="card-para">
                    Our mobile applications strictly adhere to global security standards, including GDPR, HIPAA, and PCI-DSS compliance. We prioritize data security, encryption, and privacy to protect user information comprehensively.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-4">
                <Card className="mbl-card">
                  <Card.Title className="title-dsgn">
                    <img src="/images/customer1.png" /> Post-Launch Support & Maintenance
                  </Card.Title>
                  <Card.Body>
                    <p className="card-para">
                    Our commitment extends beyond app development, providing ongoing 24/7 support, regular updates, and proactive maintenance to ensure your app remains optimized, secure, and successful in the long term
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="help-mbl">
          <div className="container hlp-container">
            <div className="row helper-row">
              <div className="col-lg-6 col-md-6">
                <h3 className="helper-title">Our Proven Mobile App Development Process for Business Growth</h3>
                <p className="helper-para">
                At Trimsel, our structured mobile app development process ensures the successful delivery of custom-built iOS, Android, and cross-platform mobile applications. As a leading mobile app development company in Chennai, India, we streamline every stage from ideation to deployment, leveraging agile methodologies and advanced technologies for rapid development, robust performance, and seamless user experiences.
                </p>
                <img src="/images/beatsnoop4.png" className="helper-image" />
              </div>
              <div className="col-lg-6 col-md-6">
                <ListGroup className="helper-list-group">
                  <ListGroup.Item className="helper-list-item mt-3">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-2">
                        <span className="list-icon">
                          <img src="/images/Group2539.png" />
                        </span>
                      </div>
                      <div className="col-lg-10 col-md-10 col-10 helper-list-column">
                        <h4>Strategic Roadmap & Consultation</h4>
                          <p>We begin with a comprehensive analysis of your app idea, clearly defining your goals and developing a detailed roadmap to ensure alignment with your business objectives.</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="helper-list-item mt-3">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-2">
                        <span className="list-icon">
                          <img src="/images/Group2538.png" />
                        </span>
                      </div>
                      <div className="col-lg-10 col-md-10 col-10 helper-list-column">
                        <h4>Customized UI/UX Design</h4>
                          <p>Our expert designers create intuitive and visually appealing user interfaces, optimizing user engagement and satisfaction across all platforms, including iOS, Android, Flutter, and React Native.</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="helper-list-item mt-3">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-2">
                        <span className="list-icon">
                          <img src="/images/Group2540.png" />
                        </span>
                      </div>
                      <div className="col-lg-10 col-md-10 col-10 helper-list-column">
                        <h4>Agile Development Methodology</h4>
                          <p>Leveraging an agile approach, we accelerate development cycles with continuous testing, real-time feedback, and iterative improvements, significantly reducing time-to-market.</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="helper-list-item mt-3">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-2">
                        <span className="list-icon">
                          <img src="/images/Group2541.png" />
                        </span>
                      </div>
                      <div className="col-lg-10 col-md-10 col-10 helper-list-columns">
                        <h4>Advanced Technology Integration</h4>
                          <p>We incorporate cutting-edge technologies such as AI, Machine Learning, IoT, and Blockchain to build innovative and future-ready mobile applications, ensuring scalability and competitive advantage.</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="helper-list-item mt-3">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-2">
                        <span className="list-icon">
                          <img src="/images/Group2542.png" />
                        </span>
                      </div>
                      <div className="col-lg-10 col-md-10 col-10 helper-list-column">
                        <h4>Rigorous Testing & Quality Assurance</h4>
                          <p>Our thorough testing protocols include functional, security, performance, and user acceptance testing, ensuring your app is robust, secure, and reliable across devices and operating systems.</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="helper-list-item mt-3">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-2 ">
                        <span className="list-icon">
                          <img src="/images/Group2543.png" />
                        </span>
                      </div>
                      <div className="col-lg-10 col-md-10 col-10 helper-list-column">
                        <h4>Seamless App Launch & Deployment</h4>
                          <p>Trimsel’s deployment specialists ensure your mobile application is smoothly launched and compliant with App Store and Google Play guidelines, maximizing visibility and user reach.</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="helper-list-item mt-3">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-2 ">
                        <span className="list-icon">
                          <img src="/images/Group2543.png" />
                        </span>
                      </div>
                      <div className="col-lg-10 col-md-10 col-10 helper-list-column">
                        <h4>Continuous Support & Maintenance</h4>
                          <p>Our dedicated support doesn't stop at launch; we offer proactive monitoring, regular updates, security patches, and ongoing feature enhancements, keeping your app competitive and user-friendly long-term.</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
        </section>

        {/*Mobile App Service Section*/}
        <section id="mobile-services">
          <div className="container service-container">
            <div className="row">
              <Stack direction="horizontal" className="pb-4">
                <div className=" badge-abot-btn">
                  <img
                    src="/images/Rectangle-kariot.png"
                    className="me-2"
                    alt="design-dot"
                  />
                  <p> WHAT WE DO </p>
                </div>
              </Stack>
              <div className="col-lg-5">
                <h2 className="service-heading">
                Our Mobile App Development Services
                </h2>
              </div>
              <div className="col-lg-7">
                <p className="service-mobile-para pb-3">
                With a user-first approach, we execute end-to-end mobile app development services, ensuring your app is visually stunning, scalable, and highly functional. In today’s fast-evolving digital world, a high-performance mobile application can give your business a competitive edge.
                </p>
              </div>
            </div>
          </div>

          <section id="services-list">
            <div className="container servicelist-container">
              <div className="row">
                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="card service-mobile-card">
                    <div className="card-body">
                      <div className="card-images">
                        <img src="/images/Group322.png" />
                      </div>
                      <div className="service-card-title pt-4 pb-2">
                        <h3>Mobile App Design Services</h3>
                      </div>
                      <div className="card-text service-card-text pb-3">
                        <p>
                        Creating intuitive, user-centric mobile UI designs that enhance user engagement and retention, making your app stand out in the market.
                        </p>
                      </div>
                      <div className="card-link">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="card service-mobile-card">
                    <div className="card-body">
                      <div className="card-images">
                        <img src="/images/Group323.png" />
                      </div>
                      <div className="service-card-title pt-4 pb-2">
                        <h3>iOS App Development</h3>
                      </div>
                      <div className="card-text service-card-text pb-3">
                        <p>
                        Specializing in custom iOS applications, our expert iOS app developers ensure seamless app performance, robust security, and excellent user experience tailored to business needs.
                        </p>
                      </div>
                      <div className="card-link">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="card service-mobile-card">
                    <div className="card-body">
                      <div className="card-images">
                        <img src="/images/Group324.png" />
                      </div>
                      <div className="service-mobile-card-title pt-4 pb-2">
                        <h3>Android App Development</h3>
                      </div>
                      <div className="card-text service-card-text pb-3">
                        <p>
                        Developing secure, scalable, and feature-rich Android apps. As a leading Android application development company in Chennai, we offer tailored solutions optimized for performance and user engagement.
                        </p>
                      </div>
                      <div className="card-link">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="card service-mobile-card">
                    <div className="card-body">
                      <div className="card-images">
                        <img src="/images/Group325.png" />
                      </div>
                      <div className="service-card-title pt-4 pb-2">
                        <h3>Hybrid App Development</h3>
                      </div>
                      <div className="card-text service-card-text pb-1">
                        <p>
                        Hybrid & Cross-Platform Mobile App Development<br></br>
Looking for an app that works on both iOS & Android with a single codebase? Our Flutter, React Native & Ionic app development ensures faster delivery and cost-effective app solutions.<br></br>
Code once, deploy across multiple platforms<br></br>
Faster app development with reduced costs<br></br>
Native-like performance & UI consistency<br></br>
                        </p>
                      </div>
                      <div className="card-link">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="card service-mobile-card">
                    <div className="card-body">
                      <div className="card-images">
                        <img src="/images/Group326.png" />
                      </div>
                      <div className="service-card-title pt-4 pb-2">
                        <h3 className="dff">Enterprise Mobile Solutions</h3>
                      </div>
                      <div className="card-text service-card-text pb-3">
                        <p>
                        We deliver enterprise-grade mobile application development tailored for large-scale operations, ensuring security, scalability, and seamless integration.
                        </p>
                      </div>
                      <div className="card-link">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="card service-mobile-card">
                    <div className="card-body">
                      <div className="card-images">
                        <img src="/images/Group327.png" />
                      </div>
                      <div className="service-card-title pt-4 pb-2">
                        <h3>Flutter app development services</h3>
                      </div>
                      <div className="card-text service-card-text pb-3">
                        <p>
Our Flutter experts deliver high-performance, cost-effective mobile apps with stunning UI & seamless cross-platform functionality for businesses of all sizes.<br></br>
High-speed development with Flutter framework<br></br>
Smooth animations & native-like performance<br></br>
Cost-effective, scalable solutions<br></br>
                        </p>
                      </div>
                      <div className="card-link">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <section id="recent-mbl-work">
  <div className="container new-ds">
    <div className="row align-items-center">
      <div className="col-lg-3 col-md-3">
        <h2 className="case-heading">Transforming Businesses with Our Custom Mobile App development solutions</h2>
      </div>
      <div className="col-lg-6 col-md-6">
        <p className="casecarousel-para">
          With <strong>6+ years of expertise</strong>, Trimsel has delivered <strong>200+ high-performance mobile apps</strong> for startups and enterprises worldwide. Our expert mobile app developers ensure **industry-leading** standards in performance, security, and scalability.
        </p>
      </div>
      <div className="col-lg-3 col-md-3 text-end">
        <button className="case-btn">
          View All Cases
          <img src="/images/material-symbols_arrow-right-alt.png" />
        </button>
      </div>
    </div>
    <CarouselComponent />
  </div>
</section> */}

<section className="pm-sec-cta">
  <div className="container">
    <Card className="port-cta my-5">
      <Card.Body>
        <div className="row">
          {/* Left Side - Text Content */}
          <div className="col-lg-7 col-md-7 col-12">
            <Stack direction="horizontal">
              <div className="badge-abot-btn">
                <img src="/images/Rectangle-kariot.png" className="me-2" alt="design-dot" />
                <p className="cta-badge-text">🚀 GET IN TOUCH</p> {/* Improved contrast & readability */}
              </div>
            </Stack>
            <h2 className="homcta-heading pt-2">
              Let's Build Your Mobile App – Contact Our Experts Today!
            </h2>
            <p className="hmcta-para">
              Trusted by brands across India and globally, <strong>Trimsel</strong> specializes in <strong>iOS, Android, and cross-platform mobile application development</strong> tailored to your business needs. From design to deployment, we bring your app idea to life with precision and performance.
            </p>
            <ul className="cta-benefits ps-3">
              <li>✅ <strong>Free Consultation</strong> with our App Experts</li>
              <li>✅ <strong>End-to-End App Development Services</strong></li>
              <li>✅ <strong>100% Scalable, Secure & Optimized for Performance</strong></li>
            </ul>
            {/* Call-To-Action Button */}
            <Link href="/contact-us" passHref>
              <button className="portcta-btn mt-3">
                <FaRegEnvelope className="me-2" /> Get In Touch
              </button>
            </Link>
          </div>
          {/* Right Side - Image */}
          <div className="col-lg-5 col-md-5">
            <Image
              src="/images/ctambbg.webp"
              width={550} // Adjusted width for better balance
              height={550}
              alt="Chat with our expert"
              className="hmcta-image"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
</section>
        {/* <section className="pm-sec-cta">
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
                      Let's Build Your Mobile App – Contact Our Experts Today!
                    </h2>
                    <p className="hmcta-para">
                    Looking for a trusted mobile app development company to bring your app idea to life? Whether you need a custom iOS, Android, or cross-platform app, our expert developers at Trimsel are here to help!
                    </p>
                    <Link href="/contact-us" passHref>
                      <button className="portcta-btn mt-3">
                        <FaRegEnvelope className="me-2" /> Get In Touch{" "}
                      </button>
                    </Link>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <Image
                      src="/images/ctambbg.webp"
                      width={600}
                      height={598}
                      alt="Chat with our expert "
                      className="hmcta-image"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </section> */}


            {/* <div className="container process-container">
              <div className="row py-5">
                <Stack direction="horizontal" className="pb-4">
                  <div className=" badge-abot-btn">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> DEVELOPMENT PROCESS </p>
                  </div>
                </Stack>
                <div className="col-lg-4 col-md-4">
                  <h3 className="process-heading">
                    Mobile App Development Process – From Idea to Launch & Beyond
                  </h3>
                </div>
                <div className="col-lg-5 col-md-5">
                  <p className="process-para">
                  At Trimsel, we follow a streamlined and transparent mobile app development process that ensures your app is built with precision, security, and scalability.
                  </p>
                </div>
                <div className="col-lg-3 col-md-3">
                  <Link href="/portfolio" passHref>
                    <Button className="process-btn">
                      <p>look at our</p> <h6>Case Studies</h6>{" "}
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/images/processimg.webp"
                width={1116}
                height={725}
                alt="Process Image"
                className="prcimg"
              />
            </div> */}

<section id="app-process">
  <div className="container process-container py-5">
    <div className="row mb-4">
      <div className="col-12">
        <Stack direction="horizontal" className="pb-3">
          <div className="badge-abot-btn">
            <img src="/images/Rectangle-kariot.png" className="me-2" alt="design-dot" />
            <p> DEVELOPMENT PROCESS </p>
          </div>
        </Stack>
        <h3 className="process-heading">Mobile App Development Process – From Idea to Launch & Beyond</h3>
        <p className="process-para">
        Our expert team follows a streamlined and transparent mobile app development process to bring your vision to life, on time and within budget.

        </p>
      </div>
    </div>

    <div className="row gy-4">
      {[
        {
          icon: "/images/processicon.png",
          step: "01",
          title: "Requirements Analysis",
          desc: "We collaborate closely with you to understand your business needs, target audience, and goals to define the project roadmap.",
        },
        {
          icon: "/images/processicon1.png",
          step: "02",
          title: "Design",
          desc: "Our UI/UX designers create wireframes and prototypes that are intuitive, visually appealing, and conversion-optimized.",
        },
        {
          icon: "/images/processicon2.png",
          step: "03",
          title: "Architecture",
          desc: "We define the technical architecture, database schema, and technology stack for optimal scalability and security.",
        },
        {
          icon: "/images/processicon3.png",
          step: "04",
          title: "Development",
          desc: "Using agile methods, we build your app feature by feature while maintaining code quality and flexibility.",
        },
        {
          icon: "/images/processicon4.png",
          step: "05",
          title: "Build & Release",
          desc: "We integrate features, APIs, and back-end services and prepare your app for beta or internal testing builds.",
        },
        {
          icon: "/images/processicon5.png",
          step: "06",
          title: "Quality Assurance",
          desc: "Rigorous manual and automated testing ensures bug-free performance across different devices and platforms.",
        },
        {
          icon: "/images/processicon6.png",
          step: "07",
          title: "Submission to App Stores",
          desc: "We handle app store compliance, metadata, and deployment for both Google Play and Apple App Store.",
        },
        {
          icon: "/images/processicon7.png",
          step: "08",
          title: "Go Live",
          desc: "Your app is launched to the world. We ensure it’s functioning perfectly and visible to your audience.",
        },
        {
          icon: "/images/processicon8.png",
          step: "09",
          title: "Support & Maintenance",
          desc: "Post-launch, we offer ongoing updates, performance monitoring, and support to ensure continued success.",
        },
      ].map((step, idx) => (
        <div className="col-lg-4 col-md-6" key={idx}>
          <div className="process-card text-center">
            <img src={step.icon} alt={step.title} className="mb-3" width={60} />
            <h5 className="mb-1"><strong>{step.step}. {step.title}</strong></h5>
            <p>{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

          </section>
        </section>

        <section className="mbl-tools">
  <div className="container mbltool-container">
    <Row>
      <Col lg={6} md={6}>
        <h3 className="tools-heading">
          Cutting-Edge Technologies for High-Performance Mobile Apps
        </h3>
      </Col>
      <Col lg={6} md={6}>
        <p className="tools-para">
        Utilizing the latest innovations, we use the most powerful tools to build high-performance, secure, and scalable mobile applications.Whether you're looking for native, hybrid, or cross-platform app development, our technology stack ensures seamless user experience and efficiency.
        </p>
      </Col>
    </Row>

    {/* Technology Stack Table */}
    <Row className="mt-4">
      {/* iOS Technologies */}
      <Col lg={3} md={6} xs={6} className="mb-3">
        <h4 className="tools-title"> iOS </h4>
        <Table className="tech-table">
          <tbody>
            <tr>
              <td className="tech-box">
                <Image src="/images/Swift_logo.png" width={110} height={34} 
                  alt="Swift iOS Application Development Logo" className="tech-icon" />
              </td>
              <td className="tech-box">
                <Image src="/images/obj-c.png" width={120} height={41} 
                  alt="Objective-C iOS Development Logo" className="tech-icon" />
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>

      {/* Cross-Platform Technologies */}
      <Col lg={3} md={6} xs={6} className="mb-3">
        <h4 className="tools-title"> Cross-Platform </h4>
        <Table className="tech-table">
          <tbody>
            <tr>
              <td className="tech-box">
                <Image src="/images/react-native-mbl.png" width={100} height={34} 
                  alt="React Native Development Logo" className="tech-icon" />
              </td>
              <td className="tech-box">
                <Image src="/images/mbl-flutter.png" width={110} height={32} 
                  alt="Flutter Development Logo" className="tech-icon" />
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>

      {/* Android Technologies */}
      <Col lg={3} md={6} xs={6} className="mb-3">
        <h4 className="tools-title"> Android </h4>
        <Table className="tech-table">
          <tbody>
            <tr>
              <td className="tech-box">
                <Image src="/images/Kotlin_logo.png" width={110} height={24} 
                  alt="Kotlin Android Development Logo" className="tech-icon" />
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>

      {/* Hybrid Technologies */}
      <Col lg={3} md={6} xs={6} className="mb-3">
        <h4 className="tools-title"> Hybrid </h4>
        <Table className="tech-table">
          <tbody>
            <tr>
              <td className="tech-box">
                <Image src="/images/ionic.png" width={110} height={37} 
                  alt="Ionic Hybrid App Development Logo" className="tech-icon" />
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </div>
</section>


        {/* <section id="recent-mbl-work">
          <div className="container new-ds">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <h2 className="case-heading">Success Stories – How Our Mobile Apps Drive Business Growth</h2>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="casecarousel-para">
                With over six years of experience, we have successfully developed and launched 200+ custom mobile apps for startups and enterprises worldwide. Our expert mobile app development team ensures every app meets industry standards for performance, security, and scalability.
                </p>
              </div>
              <div className="col-lg-3 col-md-3">
                <button className="about-btn">
                  View All Cases{" "}
                  <img src="/images/material-symbols_arrow-right-alt.png" />
                </button>
              </div>
            </div>
            <CarouselComponent />
          </div>
        </section> */}

        {/* <TestimonialClient /> */}

        {/* <section id="blog" className="py-4">
          <div className="container blog-container">
            <div className="row py-3">
              <Stack direction="horizontal">
                <div className=" badge-abot-btn">
                  <img
                    src="/images/Rectangle-kariot.png"
                    className="me-2"
                    alt="design-dot"
                  />
                  <p>
                    {" "}
                    <b> OUR BLOGS </b>{" "}
                  </p>
                </div>
              </Stack>
              <div className="col-lg-5 col-md-5 py-4">
                <h2 className="contacts-heading">
                  Latest Trends & Insights in Mobile App Development
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
<section id="faq">
  <div className="container faq-container">
    <h2 className="faq-heading">
      Frequently Asked Questions About Mobile App Development
    </h2>

    <Accordion defaultActiveKey="0" flush className="py-5">
      {[
        {
          question: "Why Choose Trimsel as Your Mobile App Development Company in Chennai?",
          answer:
            "Trimsel is a top-rated mobile app development company in Chennai, India, trusted by startups and enterprises. We specialize in iOS, Android, and cross-platform apps using cutting-edge technologies like Flutter and React Native.",
        },
        {
          question: "How Much Does It Cost to Develop a Mobile App?",
          answer:
            "The cost of mobile app development varies based on features, complexity, platform, and development approach. At Trimsel, we offer scalable solutions tailored to your unique business needs and budget.",
        },
        {
          question: "Which Is Better: Native or Cross-Platform App Development?",
          answer:
            "Native apps (iOS or Android) offer high performance, while cross-platform apps built using Flutter or React Native are faster to develop and more cost-effective. We help you choose the right approach based on your project scope.",
        },
        {
          question: "Do You Offer Flutter App Development Services?",
          answer:
            "Yes! As a Flutter app development company in Chennai, we build fast, cost-effective cross-platform mobile applications that deliver native-like performance and seamless user experiences.",
        },
        {
          question: "How Long Does It Take to Develop a Mobile App?",
          answer:
            "A basic app can take 6–8 weeks, while feature-rich enterprise mobile apps may take 4–6 months. We follow agile development for faster time-to-market without compromising quality.",
        },
        {
          question: "Can I Hire Mobile App Developers from Trimsel?",
          answer:
            "Absolutely. We provide dedicated mobile app developers in Chennai to work on your project full-time or part-time, ensuring transparency, speed, and technical excellence.",
        },
        {
          question: "What Is Hybrid Mobile App Development and Is It Right for My Business?",
          answer:
            "Hybrid mobile apps are built using web technologies like HTML, CSS, and JavaScript with frameworks like Ionic. They are ideal for MVPs or businesses looking for quick deployment across platforms.",
        },
        {
          question: "Is My App Secure and Compliant with Data Protection Laws?",
          answer:
            "Yes. We implement best practices for mobile app security and ensure compliance with GDPR, HIPAA, and PCI-DSS based on your industry and location.",
        },
        {
          question: "Do You Provide Post-Launch Support and Maintenance?",
          answer:
            "Yes, In order to keep your app safe and up to date, we do offer ongoing maintenance, feature enhancements, performance tracking, and support services.",
        },
        {
          question: "How Can I Get Started with My Mobile App Project?",
          answer:
            "You can book a consultation with our team to discuss your app idea, goals, and expectations. We’ll help you plan and validate your mobile app development journey from start to finish.",
        },
      ].map((faq, index) => (
        <Accordion.Item eventKey={index.toString()} key={index} className="pb-3">
          <Accordion.Header>{faq.question}</Accordion.Header>
          <Accordion.Body>
            <p className="accordion-para">{faq.answer}</p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  </div>
</section>
        <ContactForm heading="Ready To Build Your Mobile App?" subText="Speak with our iOS & Android experts to turn your idea into a secure, high-performance mobile product."/>
        {/* <ContactModal title="Wanna Develop A Mobile Application? Contact Us" /> */}
        <Footer />
      </main>
    </>
  );
}
