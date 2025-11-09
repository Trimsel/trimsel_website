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
import Table from "react-bootstrap/Table";
import { NextSeo } from "next-seo";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm";
import CarouselComponent from "../components/carouselComponent";
import { postJson } from "../lib/api";
import { buildServiceJsonLd } from "../lib/serviceSchema";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import MailIcon from "../components/icons/MailIcon";

const ClientLogo = dynamic(() => import("../components/clientLogo"), {
  ssr: false,
  loading: () => <div className="text-center text-muted py-5">Loading client logos…</div>,
});

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

  const featuredArticles = [
    {
      title: "5 Easy Ways a Mobile App Can Grow Your Business",
      excerpt:
        "Discover practical tactics to boost retention, repeat sales, and loyalty with a branded mobile experience.",
      href: "/blog/how-mobile-apps-grow-business",
      tag: "Mobile Strategy",
    },
    {
      title: "Explore All Trimsel Insights",
      excerpt:
        "Browse more articles on AI copilots, DevOps automation, and cloud-native delivery to plan your roadmap.",
      href: "/blog",
      tag: "Digital Transformation",
    },
  ];

  async function onSubmitForm(values) {
    try {
      await postJson("/api/contact", values);
      console.log("Contact request sent");
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  }

  const faqItems = [
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
        "Yes! We’re a Flutter app development company in Chennai offering fast, cost-efficient cross-platform mobile applications with native-like performance.",
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
        "Yes, we offer ongoing maintenance, feature enhancements, performance monitoring, and support services to keep your app secure and up to date.",
    },
    {
      question: "How Can I Get Started with My Mobile App Project?",
      answer:
        "You can book a consultation with our team to discuss your app idea, goals, and expectations. We’ll help you plan and validate your mobile app development journey from start to finish.",
    },
  ];

  const serviceJsonLd = buildServiceJsonLd({
    slug: "mobile-app-development-chennai",
    serviceName: "Mobile App Development (Chennai)",
    serviceType: "Mobile Application Development",
    description:
      "iOS, Android, and cross-platform (Flutter/React Native) app development with secure, scalable architectures.",
    offers: [
      "iOS App Development",
      "Android App Development",
      "Flutter / Cross-platform Apps",
      "App Testing & Security",
      "UI/UX & App Design",
    ],
    faq: faqItems,
    breadcrumbs: [
      { name: "Home", item: "https://www.trimsel.com/" },
      {
        name: "Mobile App Development (Chennai)",
        item: "https://www.trimsel.com/mobile-app-development-chennai",
      },
    ],
  });

  return (
    <>
<NextSeo
  title="Mobile App Development Company in Chennai, India"
  description="Trimsel is a top mobile app development company in Chennai, India. We build secure, scalable iOS, Android, Flutter & hybrid apps tailored to your business."
  canonical="https://www.trimsel.com/mobile-app-development-chennai"
  openGraph={{
    type: "website",
    url: "https://www.trimsel.com/mobile-app-development-chennai",
    title: "Mobile App Development Company in Chennai, India",
    description:
      "Trimsel is a top mobile app development company in Chennai, India. We build secure, scalable iOS, Android, Flutter & hybrid apps tailored to your business.",
    locale: "en_IN",
    site_name: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/mobilehero.webp",
        width: 1200,
        height: 630,
        alt: "Trimsel team delivering mobile app solutions in Chennai",
      },
    ],
  }}
  twitter={{
    cardType: "summary_large_image",
    handle: "@TrimselSoftwares",
    site: "@TrimselSoftwares",
  }}
/>
      <Head>
        {serviceJsonLd.map((schema, index) => (
          <script
            key={`mobile-app-service-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
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
  We craft custom-built mobile apps for businesses that demand speed, security, and growth-focused outcomes.
  From MVPs to enterprise-grade apps, we bring your ideas to life — explore our
  {" "}<Link href="#digital-mbl">mobile app services</Link>{" "}
  or <Link href="/portfolio">see our portfolio</Link>.
</p>
                      </div>
                    </div>
                    <div className="mozart">
                      <div className="mozart-inner">
                        <Link
                          href="/contact-us"
                          className="btn btn-primary get-btn"
                          aria-label="Book a mobile app consultation with Trimsel"
                        >
                          Get a Consultation <ArrowRightIcon width={24} height={24} />
                        </Link>
                        <p className="hero-proof">
                          200+ apps launched across FinTech, healthcare, and SaaS with 4.8★ store ratings on average.
                        </p>
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
                    quality={70}
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IDAAAADQAgCdASoIAAgAAkA4JQBOgCH/89JAAA=="
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 480px"
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
                <Image
  src="/images/Rectangle-kariot.png"
  width={18}
  height={18}
  alt=""
  loading="lazy"
  aria-hidden="true"
  className="me-2"
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
                    <Image
  src="/images/Rectangle-kariot.png"
  width={18}
  height={18}
  alt=""
  loading="lazy"
  aria-hidden="true"
  className="me-2"
/>

                    <p> WHO WE ARE </p>
                  </div>
                </Stack>
                <h2 className="about-head">
                  About Trimsel – Leading Mobile App Development Company in Chennai, India
                </h2>
              </div>
            </div>
            <p>
              In today’s digital-first world, mobile apps do more than support your business.
              At Trimsel, we believe a successful app should solve real-world challenges, create
              user delight, and deliver long-term value. It’s not just about building software—it’s
              about building the future.
            </p>
            <p>
              Our team blends technical expertise with creativity to build future-ready digital
              solutions that drive business growth. As a top mobile app development company in
              Chennai, we specialize in developing custom Android, iOS, and cross-platform
              applications that are scalable, secure, and high-performing. We also handle backend,
              CI/CD, and releases via our{" "}
              <Link href="/devops-consulting-services">DevOps services</Link> and{" "}
              <Link href="/cloud-consulting-services">Cloud consulting</Link>.
            </p>
            <div className="mt-4">
              <h3 className="about-subhead">
                Why Do Businesses Choose Trimsel for Mobile App Development?
              </h3>
              <ul className="list-unstyled about-benefits">
                <li>
                  <strong>Customized Mobile Solutions</strong> – Tailored iOS, Android, and hybrid
                  apps built for startups and enterprises.
                </li>
                <li>
                  <strong>Comprehensive App Development</strong> – End-to-end app strategy, UI/UX
                  design, development, and deployment.
                </li>
                <li>
                  <strong>Cutting-Edge Technologies</strong> – Harnessing AI, machine learning, IoT,
                  and blockchain to build next-generation mobile experiences.
                </li>
                <li>
                  <strong>Seamless Performance</strong> – Optimized for scalability, security, and
                  superior user experience.
                </li>
              </ul>
            </div>
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
              <div className="col-12 col-lg-8">
                <h3 className="dgt-heading">Why Businesses Trust Trimsel for Mobile Application Development</h3>
                <p>
                Trimsel, a leading mobile app development company in Chennai, India, empowers businesses to achieve scalable growth and digital success with innovative mobile solutions. Our expert mobile app developers build tailored iOS, Android, and cross-platform applications designed specifically to meet your business objectives, ensuring enhanced performance, robust security, and exceptional user experience.
                </p>
                <p>
                  Looking for inspiration? Read our latest insight <Link href="/blog/how-mobile-apps-grow-business">“5 Easy Ways a Mobile App Can Grow Your Business.”</Link> It covers the exact tactics we use to turn an MVP into a revenue-driving product.
                </p>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-4 col-md-4">
                <Card className="mbl-card">
                  <Card.Title className="title-dsgn">
                    <Image src="/images/like1.png" width={40} height={40} alt="Enterprise mobile apps" loading="lazy" />
 Enterprise-Grade Mobile Applications
                  </Card.Title>
                  <Card.Body>
                    <p className="card-para">
                    We deliver enterprise mobile application development solutions with industry-leading standards. Our mobile apps undergo rigorous testing, ensuring robust security, seamless scalability, and high-performance experiences across devices, all backed by our <Link href="/cloud-consulting-services">cloud consulting experts</Link>.
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
                    <Image src="/images/guru1.png" width={40} height={40} alt="Expert mobile app developers" loading="lazy" />
 Expert Mobile App Developers
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
                    <Image src="/images/ethics1.png" width={40} height={40} alt="Agile & transparent process" loading="lazy" />
 Agile & Transparent Development Process
                  </Card.Title>
                  <Card.Body>
                    <p className="card-para">
                    Our agile development approach provides transparent, real-time updates and collaborative workflows, ensuring clients stay informed and involved throughout the development lifecycle for seamless execution and faster market launch with support from our <Link href="/devops-consulting-services">DevOps consulting team</Link>.
                    </p>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-lg-4 col-md-4">
                <Card className="mbl-card">
                  <Card.Title className="title-dsgn">
                    <Image src="/images/customer1.png" width={40} height={40} alt="User-centric app design" loading="lazy" />
 User-Centric Mobile App Design
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
                    <Image src="/images/time1.png" width={40} height={40} alt="Faster app development" loading="lazy" />
 Faster Mobile App Development & Deployment
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
                    <Image src="/images/customer1.png" width={40} height={40} alt="User-centric app design" loading="lazy" />
 Cross-Platform App Development
                  </Card.Title>
                  <Card.Body>
                    <p className="card-para">
                    As a premier cross-platform app development company, our expertise in Flutter and React Native enables us to develop highly effective apps that run flawlessly on both iOS and Android, significantly reducing development time and cost while integrating AI-driven personalization via our <Link href="/ai-development-company">AI development practice</Link>.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-4">
                <Card className="mbl-card">
                  <Card.Title className="title-dsgn">
                    <Image src="/images/customer1.png" width={40} height={40} alt="User-centric app design" loading="lazy" />
 Security & Compliance
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
                    <Image src="/images/customer1.png" width={40} height={40} alt="User-centric app design" loading="lazy" />
 Post-Launch Support & Maintenance
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
                <Image
  src="/images/beatsnoop4.png"
  width={600}
  height={400}
  alt="Mobile app development workflow"
  className="helper-image"
  loading="lazy"
  sizes="(max-width: 768px) 90vw, 600px"
/>

              </div>
              <div className="col-lg-6 col-md-6">
                <ListGroup className="helper-list-group">
                  <ListGroup.Item className="helper-list-item mt-3">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-2">
                        <span className="list-icon">
                          <Image src="/images/Group2539.png" width={40} height={40} alt="Strategic roadmap icon" loading="lazy" />
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
                          <Image src="/images/Group2538.png" width={40} height={40} alt="UI and UX design icon" loading="lazy" />
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
                          <Image src="/images/Group2540.png" width={40} height={40} alt="Agile development icon" loading="lazy" />
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
                          <Image src="/images/Group2541.png" width={40} height={40} alt="Advanced technology integration icon" loading="lazy" />
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
                          <Image src="/images/Group2542.png" width={40} height={40} alt="Quality assurance shield icon" loading="lazy" />
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
                          <Image src="/images/Group2543.png" width={40} height={40} alt="App launch rocket icon" loading="lazy" />
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
                          <Image src="/images/Group2543.png" width={40} height={40} alt="Ongoing support icon" loading="lazy" />
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



<section className="pm-sec-cta">
  <div className="container">
    <Card className="port-cta my-5">
      <Card.Body>
        <div className="row">
          {/* Left Side - Text Content */}
          <div className="col-lg-7 col-md-7 col-12">
            <Stack direction="horizontal">
              <div className="badge-abot-btn">
                <Image
  src="/images/Rectangle-kariot.png"
  width={18}
  height={18}
  alt=""
  loading="lazy"
  aria-hidden="true"
  className="me-2"
/>

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
            <Link
              href="/contact-us"
              className="portcta-btn mt-3"
              aria-label="Contact Trimsel's mobile app experts"
            >
              <MailIcon className="me-2" /> Get In Touch
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
              quality={70}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IDAAAADQAgCdASoIAAgAAkA4JQBOgCH/89JAAA=="
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
</section>


        <section id="recent-mbl-work">
          <div className="container new-ds">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <h2 className="case-heading">Success Stories – How Our Mobile Apps Drive Business Growth</h2>
              </div>
              <div className="col-lg-6 col-md-5">
                <p className="casecarousel-para">
                  With over six years of experience, we have launched 200+ custom iOS, Android, and cross-platform apps for fintech, healthcare, retail, and SaaS brands. Each engagement focuses on measurable outcomes like faster onboarding, higher retention, or new revenue streams.
                </p>
              </div>
              <div className="col-lg-3 col-md-3 d-flex align-items-center justify-content-md-end">
                <Link className="about-btn" href="/portfolio" aria-label="See Trimsel mobile app case studies">
                  View All Cases
                  <Image src="/images/material-symbols_arrow-right-alt.png" width={32} height={32} alt="Arrow right" className="ms-2" />
                </Link>
              </div>
            </div>
            <CarouselComponent />
          </div>
        </section>

        <section id="faq">
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-8 col-md-10">
                <div className="badge-abot-btn">
                  <Image
                    src="/images/Rectangle-kariot.png"
                    width={18}
                    height={18}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                    className="me-2"
                  />
                  <p>FAQ</p>
                </div>
                <h2 className="about-head mt-3">Frequently Asked Questions</h2>
                <p className="accordion-para">
                  Answers to the most common questions founders and IT teams ask when planning iOS,
                  Android, or cross-platform app development in Chennai.
                </p>
              </div>
            </div>
            <Accordion defaultActiveKey="0" alwaysOpen>
              {faqItems.map((faq, index) => (
                <Accordion.Item eventKey={String(index)} key={faq.question}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>
                    <p className="accordion-para mb-0">{faq.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </section>

        {/* <TestimonialClient /> */}

        <section id="mobile-insights" className="py-5">
          <div className="container blog-container">
            <div className="row py-3 align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="badge-abot-btn">
                  <Image src="/images/Rectangle-kariot.png" className="me-2" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
                  <p> INSIGHTS </p>
                </div>
                <h2 className="contacts-heading pt-3">Latest Mobile App Growth Playbooks</h2>
              </div>
              <div className="col-lg-7 col-md-6">
                <p className="blog-para">
                  Stay ahead with Trimsel’s how-to guides on app monetization, retention, DevOps automation, and AI-driven product growth.
                </p>
              </div>
            </div>
            <div className="row g-4">
              {featuredArticles.map((article) => (
                <div className="col-lg-6" key={article.title}>
                  <Card className="blog-card h-100">
                    <Card.Body>
                      <p className="insight-tag">{article.tag}</p>
                      <h3 className="blogs-card-title">
                        <Link href={article.href}>{article.title}</Link>
                      </h3>
                      <p className="blog-card-para">{article.excerpt}</p>
                      <Link href={article.href} className="about-btn" aria-label={`Read ${article.title}`}>
                        Read More
                        <ArrowRightIcon />
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

  <ContactForm
    heading="Ready To Build Your Mobile App?"
    subText="Speak with our iOS & Android experts to turn your idea into a secure, high-performance mobile product."
    eventLabel="mobile_service_page"
  />
  <Footer />
      </main>
    </>
  );
}
