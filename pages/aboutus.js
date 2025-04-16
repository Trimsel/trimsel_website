import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Stack from "react-bootstrap/Stack";
import ContactForm from "../components/ContactForm";
import ContactModal from "../components/ContactModal";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import CountUp from "react-countup";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import dynamic from "next/dynamic";
// import CarouselComponent from "../components/carouselComponent";
import Button from "react-bootstrap/Button";
// import ClientLogo from "../components/clientLogo";
import { useForm } from "react-hook-form";
import axios from "axios";

const CarouselComponent = dynamic(() => import("../components/carouselComponent"), { ssr: false });
const ClientLogo = dynamic(() => import("../components/clientLogo"), { ssr: false });


export default function About() {
  const [counterOn, setCounterOn] = useState(false);

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
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, values);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
{/* ✅ Next-SEO for Optimized Metadata */}
<NextSeo
  title="About Trimsel | Digital Transformation & IT Services Company in India"
  description="Trimsel delivers digital transformation, software development, cloud, DevOps & AI solutions to help businesses scale with cutting-edge IT services."
  canonical="https://www.trimsel.com/about-us"
  openGraph={{
    type: "website",
    url: "https://www.trimsel.com/about-us",
    title: "About Trimsel | Digital Transformation Experts",
    description: "Trimsel is a digital transformation company in Chennai offering software development, cloud solutions, DevOps & product engineering to scale your business.",
    images: [
      {
        url: "https://www.trimsel.com/images/about-page-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Trimsel Digital Transformation Team",
      },
    ],
    site_name: "Trimsel",
  }}
  additionalJsonLd={[
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.trimsel.com/about-us",
      "name": "About Trimsel",
      "url": "https://www.trimsel.com/about-us",
      "telephone": "+91 72008 41581",
      "description": "Trimsel is a global leader in digital transformation, software development, cloud computing, and DevOps solutions.",
      "image": "https://www.trimsel.com/images/about-page-banner.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Trimsel Softwares",
        "url": "https://www.trimsel.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.trimsel.com/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 72008 41581",
          "contactType": "customer support",
          "areaServed": "Worldwide"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "21B, 5th Cross St, South Phase, Thiru Vi Ka Industrial Estate",
          "addressLocality": "Guindy",
          "addressRegion": "Chennai, Tamil Nadu",
          "postalCode": "600032",
          "addressCountry": "IN"
        }
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
      "sameAs": [
        "https://www.linkedin.com/company/trimsel",
        "https://www.instagram.com/trimsel_softwares/",
        "https://www.google.com/maps/place/Trimsel/@13.0125615,80.1988776,904m"
      ]
    }
  ]}  
  additionalMetaTags={[
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ]}
/>
      <main>
        <section id="abot-section">
          <Header />
          <section id="abot-hero">
  <div className="container abot-container">
    <div className="row">
      <div className="whiteLink">
        <p className="breadcrumbs-kar">
          <Link href="/">Home</Link> <span> &#x2027; </span> About Us
        </p>
      </div>
      <div className="col-lg-6 col-md-6">
        <h2 className="abot-heading py-3">
          Who are <span className="badge abot-badge">We</span>?
        </h2>
        <h4 className="abot-abt">
          <span className="badge about-badge">Mission</span> – Critical Digital Solutions for Complete Business Transformation
        </h4>
      </div>
      <div className="col-lg-6 col-md-6">
        <p className="abot-hero-para">
          <strong>Empower your business transformation</strong> by replacing outdated legacy systems with 
          <strong> modern digital solutions</strong> that ensure <strong>growth, operational optimization</strong>, and 
          measurable <strong>ROI</strong>. At Trimsel, we architect mission-driven technology that accelerates innovation.
        </p>
        <Link href="/contact-us" passHref>
          <Image
            src="/images/talkimg.png"
            width={150}
            height={150}
            alt="Let's Talk Image"
            className="lts-tlk"
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  </div>
</section>
        </section>
        <section>
          <Image
            src="/images/office-people.webp"
            width={1349}
            height={617}
            alt="People in Office Image"
            className="off-ppl"
          />
        </section>
        <section id="abot-abt">
  <div className="container abot-container">
    <Stack direction="horizontal">
      <div className=" badge-abot-btn">
        <Image
          src="/images/Rectangle-kariot.png"
          className="me-2"
          height={15}
          width={15}
          alt="design-dot"
          loading="lazy"
        />
        <p> WHO WE ARE </p>
      </div>
    </Stack>
    <div className="row">
      <div className="col-lg-7 col-md-7 py-4">
        <h1 className="abot-title">
          Empowering Businesses with Digital Transformation & Innovation
        </h1>

        <p className="abot-abt-para">
          In today’s rapidly evolving digital era, businesses that once relied on traditional brick-and-mortar operations are now embracing technology to stay competitive and future-ready. As customer expectations shift, organizations must adopt scalable, agile, and user-focused digital solutions.
        </p>

        <p className="abot-abt-para">
          At Trimsel, we enable enterprises to drive complete digital transformation through cutting-edge mobile & web development, cloud consulting, and DevOps automation. Whether it's automating internal workflows, improving customer engagement, or scaling your business model, we deliver tailored digital solutions that unlock long-term value and innovation.
        </p>

        <p className="abot-abt-para">
          Since our inception in 2020, our passionate team of developers, cloud architects, DevOps engineers, and UI/UX designers have successfully delivered high-impact software solutions to startups, SMEs, and Fortune 500 clients across the globe.
          <br /><br />
          We don’t just build apps — we engineer digital ecosystems that deliver:
          <br />
          ✔ Business Process Optimization – Automated workflows that boost operational efficiency<br />
          ✔ Scalability & Performance – High-traffic-ready applications with seamless operations<br />
          ✔ AI & Cloud Integration – Smart analytics and scalable cloud infrastructure<br />
          ✔ Enhanced User Experience – Intuitive, human-centric UI/UX design that delights users
        </p>

        <p className="abot-abt-para">
          At Trimsel, we believe in future-focused innovation — building technology that adapts to business needs today and tomorrow.
        </p>
      </div>

      <div className="col-lg-5 col-md-5 tbd-dsgn">
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <div className="card smp-card">
            <div className="row">
              <div className="col-3 text-center">
                <Image src="/images/about-laun.webp" width={86} height={87} alt="Rocket Launch Icon" />
              </div>
              <div className="col-9">
                <h2 className="abot-car-heading">
                  {counterOn && <CountUp start={0} end={150} duration={2} delay={0} />}
                  <span>+</span>
                </h2>
                <h3 className="abot-car-para">Projects Launched</h3>
              </div>
            </div>
          </div>

          <div className="card smp-card mt-3">
            <div className="row">
              <div className="col-3 text-center">
                <Image src="/images/analysis.webp" width={86} height={87} alt="Analysis Icon" />
              </div>
              <div className="col-9">
                <h2 className="abot-car-heading">
                  <span>$</span>{counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}<span>M</span>
                </h2>
                <h3 className="abot-car-para">Raised by Our Clients</h3>
              </div>
            </div>
          </div>

          <div className="card smp-card mt-3">
            <div className="row">
              <div className="col-3 text-center">
                <Image src="/images/business-suitcase.webp" width={86} height={87} alt="Tech Team Icon" />
              </div>
              <div className="col-9">
                <h2 className="abot-car-heading">
                  {counterOn && <CountUp start={0} end={1000} duration={2} delay={0} />}
                  <span>+</span>
                </h2>
                <h3 className="abot-car-para">Tech Experts Onboard</h3>
              </div>
            </div>
          </div>

          <div className="card smp-card mt-3">
            <div className="row">
              <div className="col-3 text-center">
                <Image src="/images/coin-stack.webp" width={86} height={87} alt="Bootstrap Icon" />
              </div>
              <div className="col-9">
                <h2 className="abot-car-heading">
                  {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}<span>%</span>
                </h2>
                <h3 className="abot-car-para">Bootstrapped Growth</h3>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  </div>
</section>

<section id="abot-reinventing">
  <div className="container reinvent-container">
    <div className="row">
      {/* Left Section - Narrative */}
      <div className="col-lg-6 col-md-6">
        <h2 className="abot-title">
          Reinventing Business Environments with the Power of Technology
        </h2>

        <p className="abot-abt-para">
          In today’s hyper-competitive digital world, staying ahead requires more than just adapting — it requires transformation. At Trimsel, we empower businesses through innovation, cloud-first strategies, and user-centric design, ensuring long-term growth and operational agility.
        </p>

        <p className="abot-abt-para">
          🔹 <strong>Tailored Digital Transformation:</strong> We deliver customized technology strategies aligned with your business vision and industry requirements.<br />
          🔹 <strong>Scalable & Future-Ready Solutions:</strong> Our cloud and DevOps experts build high-performing, secure, and flexible applications that evolve with your business.<br />
          🔹 <strong>Next-Gen Technology Integration:</strong> From AI automation to cloud migration, our services are designed to give you a strategic edge in the global market.
        </p>

        <p className="abot-abt-para">
          💡 <strong>At Trimsel</strong>, we don’t just build technology—we create impact-driven experiences that transform the way you operate and grow.
        </p>
      </div>

      {/* Right Section - Values */}
      <div className="col-lg-6 col-md-6">
        <Card className="abot-customize-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image
              src="/images/3triangle.webp"
              width={80}
              height={80}
              className="do-icon pb-3"
              alt="Trimsel Company Values - Triangle Icon"
            />
            <h3 className="qs-card-heading">Our Core Values: Innovation & Excellence</h3>
            <p className="qsd-para">
              Innovation is at the heart of everything we do at Trimsel. Our team embraces emerging technologies to design intelligent solutions that improve performance, scalability, and user experience across platforms.
              <br /><br />
              🔹 AI-powered automation to streamline operations<br />
              🔹 Scalable cloud-native solutions across AWS, Azure, and GCP<br />
              🔹 Optimized digital interfaces designed for conversion and speed
            </p>
          </Card.Body>
        </Card>

        <Card className="abot-customize-card mt-3">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image
              src="/images/approachicon.webp"
              width={80}
              height={80}
              className="do-icon pb-3"
              alt="Client Success Icon"
            />
            <h3 className="qs-card-heading">Our Commitment to Clients</h3>
            <p className="qsd-para">
              Your success is our mission. Whether you're a startup or a global enterprise, our commitment is to deliver scalable, secure, and mission-critical digital solutions that accelerate your path to market and maximize ROI.
              <br /><br />
              ✅ User-focused design and engineering<br />
              ✅ End-to-end cloud and DevOps transformation<br />
              ✅ Reliable, future-proof applications that drive business outcomes
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
</section>


<section id="abot-drives">
  <div className="container drives-container">
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <h2 className="do-heading">
          What Drives Trimsel Toward Digital Excellence
        </h2>
      </div>
      <div className="col-lg-6 col-md-6">
        <p className="dos-para">
          At Trimsel, we’re driven by a relentless pursuit of innovation. From cloud-native solutions to agile delivery, everything we do is geared toward crafting scalable, secure, and engaging digital experiences.
        </p>
      </div>
    </div>

    <div className="row">
      {/* Card 1 */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="abot-drives-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image src="/images/light-bulb.png" width={142} height={142} className="dr-icon" alt="Scalable Solutions icon" />
            <h3 className="do-card-heading">Scalable Cloud-Native Architecture</h3>
            <p className="do-para">
            At Trimsel, we architect highly scalable and resilient cloud-native infrastructures tailored to your growth. Whether on AWS, Azure, or GCP, our cloud consultants ensure your applications are built with microservices, containers, and serverless capabilities that scale effortlessly and deliver enterprise-grade performance.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Card 2 */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="abot-drives1-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image src="/images/ui-icon.png" width={142} height={142} className="dr-icon" alt="UI/UX icon" />
            <h3 className="do-card-heading">Customer-First UI/UX Excellence</h3>
            <p className="do-para">
            We design with purpose—keeping your users at the heart of every interaction. Our design team creates intuitive, accessible, and high-converting user experiences across mobile and web platforms, ensuring your product isn’t just functional but also memorable and user-loved.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Card 3 */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="abot-drives2-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image src="/images/agile-operation.png" width={142} height={142} className="dr-icon" alt="Agile Operations Icon" />
            <h3 className="do-card-heading">Agile Delivery & DevOps Engineering</h3>
            <p className="do-para">
            Speed, reliability, and quality define our delivery model. We combine Agile best practices with robust DevOps automation to deliver faster releases, CI/CD pipelines, and infrastructure as code (IaC)—all designed for continuous improvement and scalability.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Card 4 */}
      <div className="col-lg-4 col-md-6 pt-4">
        <Card className="abot-drives-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image src="/images/versatile.png" width={142} height={142} className="dr-icon" alt="Tech Stack Icon" />
            <h3 className="do-card-heading">Cross-Platform & Emerging Tech Expertise</h3>
            <p className="do-para">
            From Flutter and React Native to AI/ML, IoT, and Blockchain, our development team works across the full spectrum of modern technologies. We help businesses embrace innovation, reduce time-to-market, and build products that stand out in today's competitive tech ecosystem.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Card 5 */}
      <div className="col-lg-4 col-md-6 pt-4">
        <Card className="abot-drives1-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image src="/images/res.png" width={142} height={142} className="dr-icon" alt="Responsive Design icon" />
            <h3 className="do-card-heading">Data-Driven & Secure Digital Development</h3>
            <p className="do-para">
            Security and data integrity are built into every phase of our development process. We implement secure coding practices, automated testing, and compliance measures like GDPR, HIPAA, and ISO standards to ensure every solution is both reliable and future-proof.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Card 6 */}
      <div className="col-lg-4 col-md-6 pt-4">
        <Card className="abot-drives2-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image src="/images/clients.png" width={142} height={142} className="dr-icon" alt="Client Focused Icon" />
            <h3 className="do-card-heading">Client-Centric Digital Strategy Execution</h3>
            <p className="do-para">
            Your business vision drives our strategy. Our team works as an extended partner—analyzing business goals, understanding market positioning, and crafting custom digital strategies that accelerate ROI, reduce risk, and future-proof your digital investments.
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
</section>


<section id="abot-needs">
  <div className="container needs-container">
    <Stack direction="horizontal">
      <div className="badge-abot-btn">
        <Image
          src="/images/Rectangle-kariot.png"
          className="me-2"
          height={15}
          width={15}
          alt="design-dot"
          loading="lazy"
        />
        <p> WHAT WE DO </p>
      </div>
    </Stack>

    <div className="row">
      <div className="col-lg-6 col-md-6 col-12">
        <h3 className="drive-heading pt-4">Comprehensive Digital Solutions for Businesses</h3>
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        <p className="abds-para pt-4">
          We specialize in end-to-end digital transformation by offering cutting-edge technology solutions
          that empower businesses to thrive in the modern digital landscape.
        </p>
      </div>
    </div>

    <div className="row">
      {/* Mobile App Development */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="qs-customize-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image
              src="/images/app-development.png"
              width={80}
              height={80}
              className="do-icon pb-3"
              alt="Mobile App Development icon"
            />
            <h3 className="qs-card-heading">Mobile App Development</h3>
            <p className="qsd-para">
              We develop scalable and secure Android & iOS apps with intuitive UI/UX, native performance, and cloud integration to accelerate your digital growth.
            </p>
            <Link href="/mobile-app-development-chennai" passHref>
              <div className="explore-link">
                🔗 <strong>Explore Mobile App Development</strong>
                <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="button icon" />
              </div>
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* Website Development */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="qs-customize-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image
              src="/images/backend.png"
              width={80}
              height={80}
              className="do-icon pb-3"
              alt="Website Development icon"
            />
            <h3 className="qs-card-heading">Website Development</h3>
            <p className="qsd-para">
              From business websites to enterprise-grade platforms, we build responsive and SEO-friendly websites that engage users and boost conversions.
            </p>
            <Link href="/web-development" passHref>
              <div className="explore-link">
                🔗 <strong>Explore Web Development</strong>
                <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="button icon" />
              </div>
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* Cloud Services */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="qs-customize-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image
              src="/images/cloud-computing.png"
              width={80}
              height={80}
              className="do-icon pb-3"
              alt="Cloud Services icon"
            />
            <h3 className="qs-card-heading">Cloud Consulting & Implementation</h3>
            <p className="qsd-para">
              Migrate, modernize, and manage infrastructure across AWS, Azure, and GCP with our expert cloud consulting services.
            </p>
            <Link href="/cloud-consulting-services" passHref>
              <div className="explore-link">
                🔗 <strong>Explore Cloud Services</strong>
                <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="button icon" />
              </div>
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* DevOps Services */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="qs-customize-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image
              src="/images/devops.png"
              width={80}
              height={80}
              className="do-icon pb-3"
              alt="DevOps icon"
            />
            <h3 className="qs-card-heading">DevOps Consulting & Automation</h3>
            <p className="qsd-para">
              Accelerate delivery pipelines with CI/CD, Infrastructure as Code (IaC), and Kubernetes automation powered by expert DevOps consulting.
            </p>
            <Link href="/devops-consulting-services" passHref>
              <div className="explore-link">
                🔗 <strong>Explore DevOps Consulting</strong>
                <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="button icon" />
              </div>
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* Digital Marketing */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="qs-customize-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image
              src="/images/digital-marketing.png"
              width={80}
              height={80}
              className="do-icon pb-3"
              alt="Digital Marketing icon"
            />
            <h3 className="qs-card-heading">Digital Marketing & SEO</h3>
            <p className="qsd-para">
              We help brands grow online through strategic SEO, paid ads, social media, and content marketing that drive targeted traffic and conversions.
            </p>
            <Link href="/digital-marketing-company-chennai" passHref>
              <div className="explore-link">
                🔗 <strong>Explore Digital Marketing</strong>
                <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="button icon" />
              </div>
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* Software Testing */}
      {/* <div className="col-lg-4 col-md-6 pt-3">
        <Card className="qs-customize-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image
              src="/images/testing.png"
              width={80}
              height={80}
              className="do-icon pb-3"
              alt="Software Testing icon"
            />
            <h3 className="qs-card-heading">Quality Engineering & Testing</h3>
            <p className="qsd-para">
              Ensure reliability and performance with our manual and automated testing services including functional, load, and security testing.
            </p>
            <Link href="/quality-engineering-testing" passHref>
              <div className="explore-link">
                🔗 <strong>Explore Software Testing</strong>
                <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="button icon" />
              </div>
            </Link>
          </Card.Body>
        </Card>
      </div> */}
    </div>
  </div>
</section>


        {/* <section id="abot-efficient">
          <div className="container efficient-container">
            <Stack direction="horizontal">
              <div className=" badge-abot-btn">
                <Image src={"/images/Rectangle-kariot.png"} className="me-2" height={15} width={15} alt="design-dot" loading="lazy"/>
                <p>
                  {" "}
                  <strong>OUR DELIVERY MODELS</strong>{" "}
                </p>
              </div>
            </Stack>
            <div className="row pt-4">
              <div className="col-lg-6 col-md-6">
                <h2 className="abot-new-title">
                  You get more than just a testing service provider you get a
                  true partner and an extension of your team.
                </h2>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="abot-hero-para">
                  When you work with Testing Mavens, you get more than a{" "}
                  <strong> testing services provider </strong> -you get a{" "}
                  <strong> true partner </strong> and an extension of your team.
                  Our delivery models are designed to be{" "}
                  <strong> flexible, efficient </strong>, and{" "}
                  <strong>
                    {" "}
                    easily scalable to meet your changing needs.{" "}
                  </strong>
                </p>
              </div>
            </div>
            <div className="image-abot-container pt-5">
              <Image
                src="/images/delivery-card.png"
                width={1116}
                height={556}
                alt="Delivery Process Card"
                className="del-image"
              />
            </div>
          </div>
        </section> */}

        {/* <section id="abot-payment">
          <div className="container payment-container">
            <Stack direction="horizontal">
              <div className=" badge-abot-btn">
                <Image src={"/images/Rectangle-kariot.png"} className="me-2" height={15} width={15} alt="design-dot" loading="lazy"/>
                <p>
                  {" "}
                  <strong>PAYMENT MILESTONES</strong>{" "}
                </p>
              </div>
            </Stack>
            <div className="row pay-row">
              <div className="col-lg-7 col-md-6">
                <h3 className="pay-heading">
                  What are the payment milestones in the plan?
                </h3>
              </div>
              <div className="col-lg-5 col-md-6">
                <Button className="dgt-btn" href="#">
                  <Image src="/images/Group309.png" height={40} width={40} alt="Fire image" loading="lazy" /> Your deadlines
                  are our goals
                </Button>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-7 col-md-7">
                <p className="pay-para">
                  We have designed the most{" "}
                  <strong> flexible payment methods </strong> so that you
                  <strong> feel safe </strong> and <strong> secure </strong>{" "}
                  while we ensure the value we provide during each release meets{" "}
                  <strong> your expectation. </strong> The payment is equally
                  divided into five milestones where you are requested to{" "}
                  <strong> pay 20% during each milestone. </strong> This ensures
                  that you <strong> feel confident </strong> and{" "}
                  <strong> pay as you go. </strong> Currently, we don't{" "}
                  <strong> accept revenue </strong> <strong>sharing </strong> or{" "}
                  <strong> equity-based payment </strong> since we might not
                  understand the industry insights. We ensure you get{" "}
                  <strong> great value </strong> and a{" "}
                  <strong>
                    {" "}
                    world-class product worth the amount you pay.
                  </strong>
                </p>
              </div>
              <div className="col-lg-5 col-md-5">
                <Image
                  src="/images/payment-mile.webp"
                  width={451}
                  height={246}
                  alt="Payment Milestone Video Image"
                  className="pay-image"
                />

                <Image
                  src="/images/watch-video.webp"
                  width={149}
                  height={150}
                  alt="Watch Video Icon Image"
                  className="wtch-vd"
                  onClick={handleShow}
                />
              </div>
            </div>
            <div className="payment-info-container">
              <Image
                src="/images/payment-mile.png"
                width={1116}
                height={179}
                alt="Payment Plan Infographics"
                className="pay-info"
                quality={100}
              />
            </div>
          </div>
        </section> */}
        {/* <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Payment Milestones In A Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>Add Video To Play</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal> */}

<section className="abot-sec-cta">
  <div className="container">
    <Card className="abot-cta my-5">
      <Card.Body>
        <div className="row">
          {/* Left Side: Content */}
          <div className="col-lg-7 col-md-7 col-12">
            <Stack direction="horizontal">
              <div className="badge-abot-btn">
                <Image
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  height={15}
                  width={15}
                  alt="design-dot"
                  loading="lazy"
                />
                <p> LET'S CONNECT </p>
              </div>
            </Stack>

            <h2 className="abtcta-heading py-3">
              Let’s Transform Your Business with Digital Innovation!
            </h2>
            <p className="abtcta-para">
              Whether it's <strong>mobile app development</strong>, <strong>cloud consulting</strong>, <strong>DevOps automation</strong>, or <strong>digital marketing</strong>, our experts will guide your digital journey. Book a <strong>free consultation</strong> today and discover how we can elevate your business.
            </p>

            <Link href="/contact-us" passHref>
              <button className="btn btn-primary get-btn">
                Get Your Free Consultation Today{" "}
                <Image
                  src="/images/material-symbols_arrow-right-alt.png"
                  height={30}
                  width={30}
                  alt="Arrow Icon"
                  loading="lazy"
                />
              </button>
            </Link>
          </div>

          {/* Right Side: Image */}
          <div className="col-lg-5 col-md-5">
            <Image
              src="/images/abt-cta.webp"
              width={600}
              height={598}
              alt="Trimsel Contact CTA Illustration"
              className="abotcta-image"
              loading="lazy"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
</section>


        {/* <section id="recent-web-work">
          <div className="container new-ds">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <h2 className="case-heading">CASE STUDIES</h2>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="casecarousel-para">
                  In 6 years we have completed more than 200 individual projects
                  to develop modern websites, web and mobile applications for
                  clients from all over the world.
                </p>
              </div>
              <div className="col-lg-3 col-md-3">
                <button className="about-btn">
                  View All Cases{" "}
                  <Image src={"/images/material-symbols_arrow-right-alt.png"} height={30} width={30} alt="Arrow Icon" loading="lazy"/>
                </button>
              </div>
            </div>
            <CarouselComponent />
          </div>
        </section> */}

        <section id="client" className="client-section">
          <div className="container mt-5">
            <h2 className="client-title">
              Trusted By Customers, Partners and The Industry
            </h2>
            <p className="clients-text">
              At Trimsel, there is continuous learning that happens as we work
              on various projects. We also love to update and upgrade with the
              latest innovations in the field of technology and apps.
            </p>
            <ClientLogo />
          </div>
        </section>
        <ContactForm />
        {/* <ContactModal title="Wanna Develop A Mobile Application? Contact Us" /> */}
        <Footer />
      </main>
    </>
  );
}
