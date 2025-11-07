import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Stack from "react-bootstrap/Stack";
import ContactForm from "../components/ContactForm";
import Card from "react-bootstrap/Card";
import dynamic from "next/dynamic";


const ClientLogo = dynamic(() => import("../components/clientLogo"), { ssr: false });


export default function About() {
  const aboutJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://www.trimsel.com/aboutus#aboutpage",
      url: "https://www.trimsel.com/aboutus",
      name: "About Trimsel",
      description:
        "Trimsel is a global leader in digital transformation, software development, cloud computing, and DevOps solutions.",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.trimsel.com/images/about-bg.png",
      },
      publisher: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      mainEntity: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.trimsel.com/aboutus#breadcrumbs",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.trimsel.com/" },
        { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.trimsel.com/aboutus" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.trimsel.com/aboutus#faq",
      mainEntity: [
        {
          "@type": "Question",
          "name": "What industries does Trimsel support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We partner with SaaS scale-ups, BFSI leaders, healthcare providers, and consumer brands to modernize products with AI, cloud, and secure engineering practices."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can Trimsel start a new engagement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Discovery begins within 5 business days once scope is aligned. We can deploy a blended pod of product strategist, solution architect, and engineers in under 3 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Does Trimsel work with in-house teams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our squads plug into your product or platform teams, sharing documentation, DevSecOps guardrails, and regular business reviews to keep stakeholders aligned."
          }
        }
      ],
    },
  ];

  return (
    <>
{/* ✅ Next-SEO for Optimized Metadata */}
<NextSeo
  title="About Trimsel | Digital Transformation & IT Services Company in India"
  description="Trimsel delivers digital transformation, software development, cloud, DevOps & AI solutions to help businesses scale with cutting-edge IT services."
  canonical="https://www.trimsel.com/aboutus"
  openGraph={{
    type: "website",
    url: "https://www.trimsel.com/aboutus",
    title: "About Trimsel | Digital Transformation Experts",
    description:
      "Trimsel is a digital transformation company in Chennai offering software development, cloud solutions, DevOps & product engineering to scale your business.",
    locale: "en_IN",
    images: [
      {
        url: "https://www.trimsel.com/images/about-bg.png",
        width: 1200,
        height: 630,
        alt: "Trimsel digital transformation team collaborating in Chennai",
      },
    ],
    site_name: "Trimsel",
  }}
  additionalMetaTags={[{ name: "robots", content: "index, follow" }]}
/>
      <Head>
        {aboutJsonLd.map((schema, index) => (
          <script
            key={`aboutus-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
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
        <h1 className="abot-heading py-3">
          About Trimsel — <span className="badge abot-badge">AI-First</span> Digital Transformation Partner
        </h1>
        <h2 className="abot-abt">
          <span className="badge about-badge">Mission</span> – Critical Digital Solutions for Complete Business Transformation
        </h2>
      </div>
      <div className="col-lg-6 col-md-6">
        <p className="abot-hero-para">
          <strong>Empower your business transformation</strong> by replacing outdated legacy systems with 
          <strong> modern digital solutions</strong> that ensure <strong>growth, operational optimization</strong>, and 
          measurable <strong>ROI</strong>. At Trimsel, We architect mission-driven technology that accelerates innovation.
        </p>
        <Link href="/contact-us" passHref className="lts-talk-link" aria-label="Talk with Trimsel's digital transformation consultants">
          <span className="visually-hidden">Book a strategy call with Trimsel</span>
          <Image
            src="/images/talkimg.png"
            width={150}
            height={150}
            alt="Let's Talk with Trimsel"
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
        <h2 className="abot-title">
          Empowering Businesses with Digital Transformation & Innovation
        </h2>

        <p className="abot-abt-para">
          In today’s rapidly evolving digital era, businesses that once relied on traditional brick-and-mortar operations are now embracing technology to stay competitive and future-ready. As customer expectations shift, organizations must adopt scalable, agile, and user-focused digital solutions.
        </p>

        <p className="abot-abt-para">
        Through our expertise, we enable enterprises to drive complete digital transformation through cutting-edge mobile & web development, cloud consulting, and DevOps automation. Whether it's automating internal workflows, improving customer engagement, or scaling your business model, we deliver tailored digital solutions that unlock long-term value and innovation.
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
          We believe in future-focused innovation — building technology that adapts to business needs today and tomorrow.
        </p>
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
          <strong>Tailored Digital Transformation:</strong> We deliver customized technology strategies aligned with your business vision and industry requirements.<br />
          <strong>Scalable & Future-Ready Solutions:</strong> Our cloud and DevOps experts build high-performing, secure, and flexible applications that evolve with your business.<br />
          <strong>Next-Gen Technology Integration:</strong> From AI automation to cloud migration, our services are designed to give you a strategic edge in the global market.
        </p>

        <p className="abot-abt-para">
          <strong>At Trimsel</strong>, we don’t just build technology—we create impact-driven experiences that transform the way you operate and grow.
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
              AI-powered automation to streamline operations<br />
              Scalable cloud-native solutions across AWS, Azure, and GCP<br />
              Optimized digital interfaces designed for conversion and speed
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
              User-focused design and engineering<br />
              End-to-end cloud and DevOps transformation<br />
              Reliable, future-proof applications that drive business outcomes
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
        we’re driven by a relentless pursuit of innovation. From cloud-native solutions to agile delivery, everything we do is geared toward crafting scalable, secure, and engaging digital experiences.
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
              We bring proven cloud capability to architect highly scalable and resilient cloud-native infrastructures tailored to your growth. Whether on AWS, Azure, or GCP, our cloud consultants ensure your applications are built with microservices, containers, and serverless capabilities that scale effortlessly and deliver enterprise-grade performance.

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
            We design with purpose, keeping your users at the heart of every interaction. Our design team creates intuitive, accessible, and high-converting user experiences across mobile and web platforms, ensuring your product isn’t just functional but also memorable and user-loved.
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
            Your business vision drives our strategy. Our team works as an extended partner by analyzing business goals, understanding market positioning, and crafting custom digital strategies that accelerate ROI, reduce risk, and future-proof your digital investments.
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
        We specialize in end-to-end digital transformation by offering cutting-edge technology solutions that empower businesses to thrive in the modern digital landscape.
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
            <Link href="/mobile-app-development-chennai" className="explore-link" aria-label="Explore Trimsel mobile app development services">
              <span>🔗 <strong>Explore Mobile App Development</strong></span>
              <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="Arrow icon" />
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
            <Link href="/web-development-company-chennai" className="explore-link" aria-label="Explore Trimsel web development services">
              <span>🔗 <strong>Explore Web Development</strong></span>
              <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="Arrow icon" />
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
            <Link href="/cloud-consulting-services" className="explore-link" aria-label="Explore Trimsel cloud consulting services">
              <span>🔗 <strong>Explore Cloud Services</strong></span>
              <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="Arrow icon" />
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
            <Link href="/devops-consulting-services" className="explore-link" aria-label="Explore Trimsel DevOps consulting services">
              <span>🔗 <strong>Explore DevOps Consulting</strong></span>
              <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="Arrow icon" />
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
            <Link href="/digital-marketing-company-chennai" className="explore-link" aria-label="Explore Trimsel digital marketing services">
              <span>🔗 <strong>Explore Digital Marketing</strong></span>
              <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="Arrow icon" />
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* AI/ML Development */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="qs-customize-card">
          <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Image
              src="/images/testing.png"
              width={80}
              height={80}
              className="do-icon pb-3"
              alt="Software Testing icon"
            />
            <h3 className="qs-card-heading">AI/ML Development services</h3>
            <p className="qsd-para">
            Build intelligent, future-ready solutions with our end-to-end AI development services — from use-case discovery and model development to multi-agent orchestration and production deployment. We help you leverage generative AI, machine learning, and AI agents to automate processes, enhance customer experiences, and drive business growth.
            </p>
            <Link href="/ai-development-company" className="explore-link" aria-label="Explore Trimsel AI development services">
              <span>🔗 <strong>Explore AI Development</strong></span>
              <Image src="/images/Group2495.png" width={56} height={56} className="do-btn-icon" alt="Arrow icon" />
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
</section>
        

<section className="about-trust py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-4">
        <h3>Industries We Support</h3>
        <p>
          SaaS scale-ups, BFSI innovators, healthcare leaders, and consumer brands trust Trimsel to modernize their products with AI, secure engineering, and compliant cloud foundations.
        </p>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <h3>How Fast We Engage</h3>
        <p>
          Discovery workshops kick off within 5 business days once scope is aligned. We assemble a pod of product strategist, solution architect, and engineers inside three weeks to keep momentum high.
        </p>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <h3>Partnering With Your Team</h3>
        <p>
          Our squads plug into your in-house team with shared documentation, DevSecOps guardrails, and executive business reviews so stakeholders stay aligned throughout the transformation journey.
        </p>
      </div>
    </div>
    <div className="row pt-4">
      <div className="col-lg-3 col-md-6">
        <p className="stat-label">Projects Delivered</p>
        <p className="stat-value">200+</p>
      </div>
      <div className="col-lg-3 col-md-6">
        <p className="stat-label">Client Retention</p>
        <p className="stat-value">92%</p>
      </div>
      <div className="col-lg-3 col-md-6">
        <p className="stat-label">Avg. Time to Launch</p>
        <p className="stat-value">&lt; 12 weeks</p>
      </div>
      <div className="col-lg-3 col-md-6">
        <p className="stat-label">Global Delivery Hubs</p>
        <p className="stat-value">3</p>
      </div>
    </div>
  </div>
</section>

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
              Whether it's <strong>mobile app development</strong>, <strong>cloud consulting</strong>, <strong>DevOps automation</strong>, or <strong>digital marketing</strong>, our experts will guide your digital journey. Book a <strong>consultation</strong> today and discover how we can elevate your business.
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
