import { useState } from "react";
import { useForm } from "react-hook-form";
import Card from "react-bootstrap/Card";
import dynamic from 'next/dynamic';
import { NextSeo, FAQPageJsonLd } from 'next-seo';
import HomeSlider from "../components/homeSlider";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import { postJson } from "../lib/api";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";

// Lazy Load Components for Performance Optimization

const ContactForm = dynamic(() => import("../components/ContactForm"), { ssr: false });
const ClientLogo = dynamic(() => import("../components/clientLogo"), {
  ssr: false,
  loading: () => (
    <div className="text-center w-100 py-5" role="status" aria-live="polite">
      <span className="spinner-border text-primary" aria-hidden="true"></span>
      <span className="ms-2">Loading client logos…</span>
    </div>
  ),
});

const ScrollSection = dynamic(() => import("../components/ScrollSection"), {
  ssr: false,
  loading: () => <div className="section text-center text-muted">Loading highlights…</div>,
});

export default function Home() {
 

  const {register, handleSubmit,formState: { errors }, reset, setValue,} = useForm();
  const [selectedOption, setSelectedOption] = useState(0);
  const handleOptionChange = (event) => {setSelectedOption(event.target.value); setValue("selectOption", event.target.value);};
  async function onSubmitForm(values) {
    try {
      await postJson("/api/contact", values);
      console.log("Contact request sent");
    } catch (error) {
      console.error("Failed to submit contact form", error);
    }
  }
  return (
    <>
       {/* ✅ Next-SEO for SEO Optimization */}
       <NextSeo
  title="AI-Powered Software Development Company in Chennai"
  description="We build intelligent mobile apps, scalable web apps, AI and ML apps, cloud consulting, DevOps, and ROI-focused digital marketing for global brands"
  canonical="https://www.trimsel.com/"
  openGraph={{
    type: "website",
    url: "https://www.trimsel.com/",
    title: "AI-Powered Software Development Company in Chennai",
    description: "We build intelligent mobile apps, scalable web apps, AI abd ML apps, cloud consulting, DevOps, and ROI-focused digital marketing for global brands",
    images: [{ url: "https://www.trimsel.com/images/home-hero-banner.webp", width: 1200, height: 630, alt: "Trimsel" }],
    site_name: "Trimsel",
  }}
  twitter={{ cardType: "summary_large_image" }}
  additionalMetaTags={[{ name: "robots", content: "index, follow" },
    { name: "application-name", content: "Trimsel" },
    { name: "site_name", content: "Trimsel" },
  ]}
/>

      {/* ✅ Keep only necessary elements in <Head> */}
      <main>
        <HomeSlider />
        {/* ✅ Client Section */}
<section id="client" className="client-section">
  <div className="container mt-5 clt-container">
  <div className="d-flex align-items-center">
      <div className="badge-abot-btn">
        <Image
          src="/images/Rectangle-kariot.png"
          className="me-2"
          width={15}
          height={15}
          alt=""
          aria-hidden="true"
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

        {/* About Section */}
        <section id="new-about">
          <div className="container nw-abt-container">
          <div className="d-flex align-items-center">
              <div className=" badge-abot-btn">
                <Image src={"/images/Rectangle-kariot.png"} className="me-2" width={15} height={15} alt="" aria-hidden="true" loading="lazy"/>
                <p> WHO WE ARE </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <h3 className="client-abt-title pt-3">
                Powering Business Growth through Custom Software & Digital Innovation
                </h3>
                <div className="card ab-card">
                  <h4 className="sim-heading">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-3">
                        <span>
                          <Image
                            src="/images/mission-new.png"
                            width={70}
                            height={75}
                            alt="Check Icon"
                            className="check-image"
                            loading="lazy"
                          />
                        </span>
                      </div>
                      <div className="col-lg-9 col-md-12 col-9">
                        <h4 className="nwabt-heading">
                          Mission -{" "}
                          <span style={{ color: "#6b738a" }}>
                            {" "}
                            Driving Digital Transformation with Cutting-Edge Software Solutions{" "}
                          </span>
                        </h4>
                      </div>
                    </div>
                  </h4>
                </div>
                <Link href="/aboutus" className="abt-btn" aria-label="Learn more about Trimsel">
                  Explore More
                  <ArrowRightIcon />
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 mbvl">
              <p className="abt-hero-para">
              Digital transformation shouldn’t feel like an uphill battle—it should feel like progress. Since 2020, we’ve helped businesses modernize their systems, streamline operations, and create digital experiences that customers love. From intuitive mobile apps to cloud-native platforms and custom-built software, everything we create is designed with one goal: to solve your toughest challenges and spark long-term growth. Our developers, cloud architects, and DevOps experts bring deep expertise and a passion for delivering results—whether for a local startup or a Fortune 500 enterprise.
        </p>
              </div>
            </div>
          </div>
        </section>
        {/*CTA Section */}
        <section className="hm-sec-cta">
  <div className="container">
    <Card className="home-cta my-5">
      <Card.Body>
        <div className="row">
          {/* CTA Content Left */}
          <div className="col-lg-7 col-md-7 col-12">
          <div className="d-flex align-items-center">
              <div className="badge-abot-btn">
                <Image
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  width={15}
                  height={15}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
                <p> GET IN TOUCH </p>
              </div>
            </div>

            <h2 className="homcta-heading pt-2">
              Transform Your Vision into a Scalable Digital Product
            </h2>

            <p className="hmcta-para">
            Partner with Trimsel — your trusted{" "}
            <Link href="/mobile-app-development-chennai">mobile app development company in Chennai</Link> — 
            for end-to-end digital transformation, AI application development, and cloud-first strategies.
            </p>
            <Link href="/contact-us" className="about-btn mt-3" aria-label="Book a strategy call with Trimsel">
              Book a Strategy Call
              <ArrowRightIcon />
            </Link>
          </div>

          {/* CTA Image Right */}
          <div className="col-lg-5 col-md-5">
            <Image
              src="/images/homecta.webp"
              width={480}
              height={500}
              alt="Connect with Trimsel's Digital Experts"
              className="hmcta-image"
              loading="lazy"
              quality={70}
              sizes="(max-width: 768px) 80vw, 380px"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
</section>


        {/*Service Section */}

        <section id="services">
  <div className="container service-container">
  <div className="d-flex align-items-center">
      <div className="badge-abot-btn">
        <Image src="/images/Rectangle-kariot.png" className="me-2" width={15} height={15} alt="" aria-hidden="true" loading="lazy" />
        <p> WHAT WE DO </p>
      </div>
    </div>

    <div className="row pt-4">
      <div className="col-lg-6 col-md-6">
        <h2 className="service-heading pb-1">
          Comprehensive Digital Solutions for Your Business Growth
        </h2>
      </div>
      <div className="col-lg-6 col-md-6">
        <p className="service-para pb-3">
        From cutting-edge mobile apps and lightning-fast websites to seamless cloud migrations and DevOps automation, we deliver technology that moves your business forward. Every project is custom-built, every solution future-ready—because your growth deserves more than a one-size-fits-all approach.
        </p>
      </div>
    </div>

    <div className="row">
      {/* Mobile App */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card">
          <Card.Body>
            <Image src="/images/app-development.png" width={80} height={80} className="do-icon pb-3" alt="App Development icon" loading="lazy" />
            <h3 className="qs-card-heading">Mobile App Development</h3>
            <p className="qsd-para">
              As a <a href="/mobile-app-development-chennai">top mobile app development company in Chennai</a>, we deliver custom Android, iOS & cross-platform solutions with exceptional UX, performance, and scalability.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Web Development */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card">
          <Card.Body>
            <Image src="/images/backend.png" width={80} height={80} className="do-icon pb-3" alt="Web Development icon" loading="lazy" />
            <h3 className="qs-card-heading">Website Development</h3>
            <p className="qsd-para">
              We’re a <a href="/web-development-company-chennai">leading website development company in Chennai</a> building fast, SEO-friendly websites and enterprise-grade web applications that scale with your business.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Cloud Services */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card">
          <Card.Body>
            <Image src="/images/cloud-computing.png" width={80} height={80} className="do-icon pb-3" alt="Cloud Computing icon" loading="lazy" />
            <h3 className="qs-card-heading">Cloud Consulting Services</h3>
            <p className="qsd-para">
              Our <a href="/cloud-consulting-services">cloud consulting experts</a> help you migrate, modernize, and optimize with AWS, Azure, and GCP for scalable and cost-effective cloud infrastructure.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* DevOps */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card">
          <Card.Body>
            <Image src="/images/devops.png" width={80} height={80} className="do-icon pb-3" alt="DevOps icon" loading="lazy" />
            <h3 className="qs-card-heading">DevOps Consulting</h3>
            <p className="qsd-para">
              Our <a href="/devops-consulting-services">DevOps services in India</a> bring automation, CI/CD, and container orchestration (Kubernetes, Docker) to boost development speed and infrastructure reliability.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Digital Marketing */}
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card">
          <Card.Body>
            <Image src="/images/digital-marketing.png" width={80} height={80} className="do-icon pb-3" alt="Digital Marketing icon" loading="lazy" />
            <h3 className="qs-card-heading">Digital Marketing</h3>
            <p className="qsd-para">
              As a performance-driven <a href="/digital-marketing-company-chennai">digital marketing agency in Chennai</a>, we offer SEO, PPC, social ads & content strategies to help you grow visibility and leads.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* AI Development services  */}
      <div className="col-lg-4 col-md-6 pt-3">
  <Card className="hm-customize-card">
    <Card.Body>
      {/* use .webp if you have it; keep alt short + specific */}
      <Image
        src="/images/cloud-computing.png"   // or /images/ai-development.webp
        width={80}
        height={80}
        className="do-icon pb-3"
        alt="AI Development icon"
        loading="lazy"
      />

      <h3 className="qs-card-heading">AI Development</h3>

      <p className="qsd-para">
      Bring AI to the heart of your business with solutions like chatbots, copilots, intelligent search, computer vision, and workflow automation. We use the latest in LLMs, retrieval-augmented generation, and fine-tuning to take your idea from prototype to production—securely, quickly, and at scale.
      </p>
    </Card.Body>
  </Card>
</div>

    </div>
  </div>
</section>

<section id="recent-works">
          <div className="container new-ds">
          <div className="d-flex align-items-center">
              <div className=" badge-abot-btn">
                <Image src={"/images/Rectangle-kariot.png"} className="me-2" width={15} height={15} alt="" aria-hidden="true" loading="lazy"/>
                <p> CASE STUDIES </p>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-lg-3 col-md-3">
                <h2 className="case-heading">Our Recent Works</h2>
              </div>
              <div className="col-lg-6 col-md-6">
              <p className="case-para">
          Explore how Trimsel has delivered <strong>custom application development</strong>, 
          <strong> software solutions</strong>, and <strong>mobile app projects</strong> that drive real results. 
          Over the past 6 years, we’ve completed more than 200 digital transformation projects across industries worldwide.
        </p>
              </div>
              <div className="col-lg-3 col-md-3">
                <Link href="/portfolio" className="about-btn" aria-label="View all Trimsel case studies">
                  View All Cases
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
          <ScrollSection />
        </section>

<section id="why-mnt">
  <div className="container mnt-container">
  <div className="d-flex align-items-center">
      <div className="badge-abot-btn">
        <Image src="/images/Rectangle-kariot.png" className="me-2" width={15} height={15} alt="" aria-hidden="true" loading="lazy" />
        <p> WHY TRIMSEL </p>
      </div>
    </div>

    <div className="row pt-4">
      <div className="col-lg-6 col-md-6">
        <h2 className="service-heading pb-1">
          Empowering Businesses with 360° Digital Transformation
        </h2>
      </div>
      <div className="col-lg-6 col-md-6">
        <p className="abot-hero-para">
        At Trimsel, we don’t just build software—we build long-term partnerships. As a full-cycle software development company in Chennai, we deliver everything from mobile apps and cloud services to DevOps automation and AI-powered solutions. Our client-first approach means we start with your goals, not our tech stack, and deliver solutions that make a measurable difference.
        </p>
      </div>
    </div>

    <div className="row pt-4">
      <div className="col-lg-3 col-md-6 my-3">
        <Card className="hm-card tbt">
          <Image src="/images/group-icon.png" width={50} height={50} alt="Client Portfolio Icon" className="grp" />
          <h4 className="hmcard-heading pt-3">Diverse Global Clientele</h4>
          <p className="carels-para">
            From startups and SMBs to Fortune 500 enterprises, Trimsel has delivered <strong>custom software solutions</strong> tailored to unique business models and challenges across industries.
          </p>
        </Card>
      </div>

      <div className="col-lg-3 col-md-6 my-3">
        <Card className="hm-card">
          <Image src="/images/expert-icon.png" width={50} height={50} alt="Expert Icon" className="grp" loading="lazy" />
          <h4 className="hmcard-heading pt-3">Domain & Tech Expertise</h4>
          <p className="carels-para">
            Our certified developers, DevOps engineers, and UI/UX designers have deep expertise in <strong>cloud computing, full stack development,</strong> and emerging tech like AI & automation.
          </p>
        </Card>
      </div>

      <div className="col-lg-3 col-md-6 my-3">
        <Card className="hm-card tbt">
          <Image src="/images/solution.png" width={50} height={50} alt="Solution Icon" className="grp" loading="lazy" />
          <h4 className="hmcard-heading pt-3">Flexible Engagement Models</h4>
          <p className="carels-para">
            Whether you need end-to-end product delivery, team augmentation, or <strong>application development outsourcing</strong>, we adapt our approach to your preferred engagement style.
          </p>
        </Card>
      </div>

      <div className="col-lg-3 col-md-6 my-3">
        <Card className="hm-card">
          <Image src="/images/selection.png" width={50} height={50} alt="Selection Icon" className="grp" loading="lazy" />
          <h4 className="hmcard-heading pt-3">All-in-One IT Partner</h4>
          <p className="carels-para">
            We manage your entire digital journey in-house — design, development, DevOps, QA, and support — ensuring seamless collaboration and better cost control.
          </p>
        </Card>
      </div>
    </div>
  </div>
</section>
        <ContactForm />
        <section id="faq">
  <div className="container faq-container">
    <h2 className="faq-heading">Frequently Asked Questions</h2>
    <Accordion defaultActiveKey="0" flush className="py-5">
      <Accordion.Item eventKey="0" className="pb-3">
        <Accordion.Header>
          What services does Trimsel provide?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Trimsel offers <a href="/web-development-company-chennai">custom software development</a>, <a href="/mobile-app-development-chennai">mobile app development in Chennai</a>, web design, <a href="/cloud-consulting-services">cloud consulting</a>, DevOps automation, digital marketing, and quality engineering services. Our solutions are tailored to help businesses digitally transform and scale efficiently.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="pb-3">
        <Accordion.Header>
          What industries does Trimsel serve?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            We work across multiple industries including Fintech, Healthcare, E-commerce, SaaS, Logistics, and Startups. Our <a href="/mobile-app-development-chennai">digital transformation solutions</a> are customized to suit industry-specific needs such as scalability, compliance, and automation.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="pb-3">
        <Accordion.Header>
          How much does custom application development cost?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            The cost of <a href="/mobile-app-development-chennai">custom application development</a> varies based on project complexity, tech stack, timeline, and features. We offer flexible engagement models for startups, SMEs, and enterprises. Get a consultation to receive a tailored quote.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className="pb-3">
        <Accordion.Header>
          Do you offer DevOps and CI/CD automation?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes. Our <a href="/devops-consulting-services">DevOps consulting services</a> include CI/CD pipeline setup, Kubernetes deployment, infrastructure automation using Terraform, and cloud-native implementation across AWS, GCP, and Azure.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className="pb-3">
        <Accordion.Header>
          Can I hire a dedicated development team from Trimsel?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
          Yes! Whether you need a dedicated developer, a UI/UX designer, a cloud engineer, or a DevOps specialist, we’ve got you covered. Hire full-time or on a project basis, and get a skilled extension of your own team—without the overhead.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className="pb-3">
        <Accordion.Header>
          What makes Trimsel different from other IT service providers?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Our client-first approach, commitment to innovation, and cross-functional expertise make us a reliable <strong>digital transformation partner</strong>. We deliver scalable, secure, and future-ready tech solutions, not just code.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</section>

        <FAQPageJsonLd
          mainEntity={[
            {
              questionName: "What services does Trimsel provide?",
              acceptedAnswerText:
                "Trimsel offers custom software development, mobile app development in Chennai, web design, cloud consulting, DevOps automation, digital marketing, and quality engineering services tailored to support efficient digital transformation.",
            },
            {
              questionName: "What industries does Trimsel serve?",
              acceptedAnswerText:
                "We collaborate with Fintech, Healthcare, E-commerce, SaaS, Logistics, and Startup businesses, adapting our digital transformation services to industry-specific needs such as compliance, scalability, and automation.",
            },
            {
              questionName: "How much does custom application development cost?",
              acceptedAnswerText:
                "Project cost depends on scope, tech stack, timeline, and required features. Trimsel provides flexible engagement models for startups, SMEs, and enterprises along with tailored consultations.",
            },
            {
              questionName: "Do you offer DevOps and CI/CD automation?",
              acceptedAnswerText:
                "Yes. Trimsel’s DevOps consulting covers CI/CD pipeline setup, Kubernetes deployments, infrastructure automation with Terraform, and cloud-native implementations across AWS, Azure, and Google Cloud.",
            },
            {
              questionName: "Can I hire a dedicated development team from Trimsel?",
              acceptedAnswerText:
                "You can hire dedicated developers, UI/UX designers, cloud engineers, or DevOps specialists on full-time or project-based engagements to extend your in-house capabilities without overhead.",
            },
            {
              questionName: "What makes Trimsel different from other IT service providers?",
              acceptedAnswerText:
                "Trimsel combines a client-first mindset with cross-functional expertise, delivering secure, scalable, and innovation-driven digital solutions that generate measurable business impact.",
            },
          ]}
        />

        <Footer />
      </main>
    </>
  );
}
