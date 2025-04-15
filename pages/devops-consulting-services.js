import Head from "next/head";
import Headers from "../components/headers";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import CarouselComponent from "../components/carouselComponent";
import ClientLogo from "../components/clientLogo";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import ContactModal from "../components/ContactModal";
import ContactForm from "../components/ContactForm";
import { NextSeo } from "next-seo";

export default function DevOps() {
  const images = [
    require("../public/images/tools-image/jenkins.png"),
    require("../public/images/tools-image/github.png"),
    require("../public/images/tools-image/bamboo.png"),
    require("../public/images/tools-image/kubernetes.png"),
    require("../public/images/tools-image/docker.png"),
    require("../public/images/tools-image/terraform.png"),
    require("../public/images/tools-image/teamcity.png"),
    require("../public/images/tools-image/bash.png"),
    require("../public/images/tools-image/linux_containers.png"),
    require("../public/images/tools-image/amazon_EKS.png"),
    require("../public/images/tools-image/Amazon_ECS.png"),
    require("../public/images/tools-image/azure_dev_ops.png"),
    require("../public/images/tools-image/elasticsearch.png"),
    require("../public/images/tools-image/logstash.png"),
    require("../public/images/tools-image/kibana.png"),
    require("../public/images/tools-image/beats.png"),
    require("../public/images/tools-image/amazon_web_services.png"),
    require("../public/images/tools-image/azure.png"),
    require("../public/images/tools-image/cloud_development_kit.png"),
    require("../public/images/tools-image/datadog.png"),
    require("../public/images/tools-image/gitlab.png"),
  ];
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
  return (
    <>
<NextSeo
  title="Best DevOps Consulting Services | DevOps Automation & Cloud Solutions"
  description="Trimsel offers DevOps consulting, CI/CD pipelines, Kubernetes consulting, and infrastructure automation to optimize your cloud and deployment workflows."
  canonical="https://trimsel.com/devops-consulting-services"
  openGraph={{
    type: "website",
    url: "https://trimsel.com/devops-consulting-services",
    title: "Best DevOps Consulting Services | DevOps Automation & Cloud Solutions",
    description: "Looking for a trusted DevOps consulting company? Trimsel specializes in DevOps implementation, release management, and Kubernetes solutions.",
    images: [
      {
        url: "https://trimsel.com/images/devops-banner.webp",
        width: 1200,
        height: 630,
        alt: "DevOps Automation & Consulting Services",
      },
    ],
    site_name: "Trimsel",
  }}
  additionalMetaTags={[
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ]}
  additionalJsonLd={[
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://trimsel.com/devops-consulting-services",
      "name": "Trimsel - DevOps Consulting Services",
      "telephone": "+91 72008 41581",
      "description": "Trimsel provides expert DevOps solutions, including CI/CD pipelines, cloud automation, Kubernetes consulting, and infrastructure as code.",
      "url": "https://trimsel.com/devops-consulting-services",
      "logo": "https://trimsel.com/logo.png",
      "image": "https://trimsel.com/images/devops-banner.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 72008 41581",
        "contactType": "Customer Service",
        "areaServed": "Worldwide"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 21-B, 5th Cross St, South Phase, Thiru Vi Ka Industrial Estate, Guindy",
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
        "name": "DevOps Consulting Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps Consulting Company in Chennai, India" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps Services & Solutions" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud DevOps Implementation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CI/CD Pipeline Automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kubernetes Consulting Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Infrastructure Automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps Migration Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps Release Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed DevOps Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire DevOps Engineer" } }
        ]
      },
      "sameAs": [
      "https://www.linkedin.com/company/trimsel",
      "https://www.instagram.com/trimsel_softwares/",
      "https://www.google.com/maps/place/Trimsel/@13.0125615,80.1988776,904m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a52679044415e91:0xf6d63600f08408c6!8m2!3d13.0125615!4d80.2014525!16s%2Fg%2F11wm_p7v38?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
    ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are DevOps consulting services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DevOps consulting services help businesses automate their development and operations processes using CI/CD pipelines, cloud platforms, and infrastructure as code to accelerate software delivery.",
          }
        },
        {
          "@type": "Question",
          "name": "Why should I choose Trimsel for DevOps services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trimsel is a trusted DevOps consulting firm offering end-to-end services including cloud DevOps, Kubernetes implementation, and infrastructure automation tailored to your business goals.",
          }
        },
        {
          "@type": "Question",
          "name": "What industries benefit from DevOps solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Industries like finance, healthcare, e-commerce, and SaaS benefit from DevOps by improving agility, enhancing release cycles, and reducing operational costs.",
          }
        },
        {
          "@type": "Question",
          "name": "Can I hire a dedicated DevOps engineer from Trimsel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer flexible engagement models to hire DevOps engineers for short-term or long-term projects, depending on your infrastructure needs.",
          }
        },
        {
          "@type": "Question",
          "name": "What DevOps tools do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We leverage tools like Jenkins, GitLab CI/CD, Docker, Kubernetes, Terraform, Ansible, Prometheus, and ELK Stack to automate and monitor the DevOps workflow.",
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide managed DevOps services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our managed DevOps services include infrastructure monitoring, CI/CD pipeline management, security automation, and 24/7 DevOps support.",
          }
        },
        {
          "@type": "Question",
          "name": "What is your approach to cloud and DevOps integration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We integrate DevOps practices with cloud platforms like AWS, Azure, and GCP for scalable deployments using containerization, serverless, and automation frameworks.",
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer Kubernetes consulting services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We provide Kubernetes deployment, management, and security consulting to optimize microservices and containerized applications.",
          }
        },
        {
          "@type": "Question",
          "name": "How does infrastructure automation benefit my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Infrastructure automation reduces manual errors, increases speed of deployment, and ensures consistency across environments using tools like Terraform and Ansible.",
          }
        },
        {
          "@type": "Question",
          "name": "What is included in your DevOps implementation services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our DevOps implementation services include strategic planning, CI/CD setup, security automation, continuous monitoring, and cloud infrastructure management.",
          }
        }]
    }
  ]}
/>
      <section className="dev-hero">
  <Headers />
  <section className="hero-dev">
    <div className="container pt-3">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="title">
            <div className="title-inner">
              <div className="cafe">
                <div className="whiteLink">
                  <p className="breadcrumbs-dev">
                    <Link href="/">Home</Link>
                    <span> &#x2027; </span>
                    DevOps Consulting Services
                  </p>
                </div>
              </div>
              <div className="cafe">
                <div className="cafe-inner devo-title">
                  Leading DevOps Consulting Services
                </div>
              </div>
              <div className="mozart">
                <div className="mozart-inner">
                  <p>
                    Trimsel is a top-rated <strong>DevOps company in India</strong> offering expert <strong>DevOps consulting services</strong> to businesses worldwide. We help teams build scalable CI/CD pipelines, leverage Kubernetes, and automate infrastructure for high-speed, secure, and reliable deployments.
                  </p>
                </div>
              </div>
              <div className="mozarts">
              <Link href="/contact-us" passHref>
                <div className="mozarts-inner">
                  <button className="btn btn-primary dev-btn">
                    Get a Free DevOps Consultation <img src="/images/material-symbols_arrow-right-alt.png" alt="Free DevOps Consultation" />
                  </button>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="imgrs">
            <Image
              src="/images/devops-banner.webp"
              className="dev-hero-img"
              alt="DevOps Automation & Consulting Services"
              width={594}
              height={480}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</section>


      <section id="about-dev">
        <div className="container dev-about">
          <Stack direction="horizontal">
            <div className=" badge-abot-btn">
              <img
                src="/images/Rectangle-kariot.png"
                className="me-2"
                alt="design-dot"
              />
              <p>
                {" "}
                <strong> WHAT WE DO </strong>{" "}
              </p>
            </div>
          </Stack>
          <Row>
            <Col lg={4} md={4}>
              <h2 className="devop-head pt-3">End-to-End DevOps Services & Solutions to Accelerate Cloud Transformation</h2>
            </Col>
            <Col lg={5} md={5}>
              <p className="dev-para pt-3">
              As a trusted DevOps consulting company, we help businesses streamline their software delivery with DevOps automation tools, cloud-native practices, CI/CD pipelines, infrastructure automation, and Kubernetes deployments. Our DevOps solutions are designed to scale with your growth.
              </p>
            </Col>
            <Col lg={3} md={3}>
            <Link href="/contact-us" passHref>
              <button className="dev-abt-btn btn mt-3">
              Get a Free Consultation
                <img
                  src="/images/material-symbols_arrow-right-alt.png"
                  alt="Right arrow icon"
                />
              </button>
              </Link>
            </Col>
          </Row>
          <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Row className="left-tabs">
              <Col lg={4} md={5} className="tbd-class">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item className="tab-title pb-3">
                    <Nav.Link eventKey="first">
                    01. Continuous Integration (CI)
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="tab-title pb-3">
                    <Nav.Link eventKey="second">
                    02. Continuous Delivery
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="tab-title pb-3">
                    <Nav.Link eventKey="third">
                    03. Infrastructure as Code (IaC)
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="tab-title pb-3">
                    <Nav.Link eventKey="fourth">
                    04. Configuration Management
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="tab-title pb-3">
                    <Nav.Link eventKey="fifth">05. DevSecOps & Security Automation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="tab-title pb-3">
                    <Nav.Link eventKey="sixth">
                    06. Continuous Monitoring & Logging
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="tab-title pb-3">
                    <Nav.Link eventKey="seven">07. Kubernetes & Cloud DevOps</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={8} md={7}>
                <Tab.Content className="left-content">
                  <Tab.Pane eventKey="first">
                    <div className=" card dev-card">
                      <div className="dev-card-item">
                        <Image
                          src="/images/continn.png"
                          width={86}
                          height={86}
                          className="dev-icon"
                          alt="continuous-integration-icon"
                        />
                        <span style={{ float: "right" }}>
                          <Image
                            src="/images/01.white.png"
                            width={76}
                            height={47}
                            alt="Number 1 Image Icon"
                          />
                        </span>
                        <h2 className="dev-tab-title pt-3">
                        Continuous Integration (CI)
                        </h2>
                        <p className="devtab-para">
                        Continuous Integration is a pivotal DevOps practice that involves the frequent merging of code changes into a shared repository, followed by automated builds and tests. This approach enables early detection of issues, streamlines development processes, and enhances collaboration among teams. Our CI services utilize leading tools like Jenkins, GitLab CI, and CircleCI to automate workflows, ensuring rapid and reliable software delivery.
                        </p>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                            <li>Automated Builds & Testing – Catch errors early with automated unit and integration testing.</li>
                    <li>Version Control & Branching – Enable seamless GitOps workflows using GitHub Actions, GitLab CI, Jenkins, or CircleCI</li>
                    <li>Parallel Testing & Code Quality Checks – Speed up pipelines with parallel execution and static code analysis.</li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                              <li className="pb-2">Artifact Management & Caching – Efficient storage and retrieval with JFrog Artifactory, Nexus, and AWS CodeArtifact.</li>
                              <li className="pb-2">
                              Zero Downtime Deployments – Use Blue-Green & Canary Releases for risk-free updates
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="devtab-para">With Trimsel's Continuous Integration services, you get faster feedback loops, improved collaboration, and accelerated time to market.</p>
                        <p className="devtab-para">
  Looking to <strong>hire DevOps engineers</strong> to build custom CI workflows? Trimsel is a <strong>DevOps service company</strong> helping businesses implement scalable pipelines.
</p>

                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className=" card dev-card">
                      <div className="dev-card-item">
                        <Image
                          src="/images/continn.png"
                          width={86}
                          height={86}
                          className="dev-icon"
                          alt="continuous-integration-icon"
                        />
                        <span style={{ float: "right" }}>
                          <Image
                            src="/images/01.white.png"
                            width={76}
                            height={47}
                            alt="Number 1 Image Icon"
                          />
                        </span>
                        <h2 className="dev-tab-title pt-3">
                        Continuous Delivery (CD)
                        </h2>
                        <p className="devtab-para">
                        Continuous Delivery extends Continuous Integration by automating the release of code to production environments. It ensures that code changes are deployable at any time, reducing risks associated with manual deployments. Our CD solutions focus on creating robust pipelines that automate testing and deployment, facilitating faster time-to-market and improved product quality.
                        </p>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                              <li className="pb-2">Automated Deployment Pipelines – Full automation from commit to production with GitHub Actions, GitLab CI/CD, and AWS CodePipeline.</li>
                              <li className="pb-2">Blue-Green & Canary Deployments – Minimize risks and enable progressive rollouts.</li>
                              <li className="pb-2">Rollback & Failure Recovery – Ensure reliable release rollback mechanisms.</li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                              <li className="pb-2">Containerized Deployments – Deploy using Docker, Kubernetes, and Helm charts.</li>
                              <li className="pb-2">
                              Multi-Cloud Deployments – CI/CD workflows optimized for AWS, GCP, and Azure.
                              </li>
                              <li className="pb-2">
                              Infrastructure as Code (IaC) – Provision environments using Terraform, CloudFormation, or Pulumi.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="devtab-para">With our Continuous Delivery approach, businesses achieve rapid, secure, and error-free deployments while reducing operational bottlenecks.</p>
                        <p className="devtab-para">
                        Accelerate your software releases with Trimsel’s DevOps consulting services in India, combining automated delivery pipelines with robust deployment strategies.
</p>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className=" card dev-card">
                      <div className="dev-card-item">
                        <Image
                          src="/images/continn.png"
                          width={86}
                          height={86}
                          className="dev-icon"
                          alt="continuous-integration-icon"
                        />
                        <span style={{ float: "right" }}>
                          <Image
                            src="/images/01.white.png"
                            width={76}
                            height={47}
                            alt="Number 1 Image Icon"
                          />
                        </span>
                        <h2 className="dev-tab-title pt-3">
                        Infrastructure as Code & Automation
                        </h2>
                        <p className="devtab-para">
                        Effective Infrastructure Management is crucial for scalable and resilient IT environments. We employ Infrastructure as Code (IaC) practices using tools like Terraform and AWS CloudFormation to provision and manage infrastructure programmatically. Our services encompass cloud infrastructure setup, on-premises solutions, and hybrid models, ensuring optimal performance and cost-efficiency.
                        </p>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                              <li className="pb-2">Infrastructure as Code (IaC) – Automate provisioning with Terraform, CloudFormation, and Ansible.</li>
                              <li className="pb-2">Cloud Infrastructure Automation – Optimize AWS, Azure, and GCP workloads.</li>
                              <li className="pb-2">Scalability & Performance Tuning – Dynamic scaling with Kubernetes, Load Balancers, and Auto-scaling Groups.</li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                              <li className="pb-2">Hybrid & Multi-Cloud Strategy – Seamlessly manage workloads across multiple cloud providers.</li>
                              <li className="pb-2">Serverless & Edge Computing – Leverage AWS Lambda, Azure Functions, and Cloud Run for cost-efficient execution.</li>
                              <li className="pb-2">Security & Compliance – Implement role-based access control (RBAC), policy enforcement, and cloud security best practices.</li>
                            </ul>
                          </div>
                        </div>
                        <p className="devtab-para">With Trimsel’s Infrastructure Management services, businesses achieve cost-efficient, scalable, and high-performing IT ecosystems.</p>
                        <p className="devtab-para">
  As a leading <strong>DevOps consulting firm</strong>, we help organizations adopt <strong>infrastructure automation</strong> and <strong>multi-cloud DevOps strategies</strong> for long-term success.
</p>

                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <div className=" card dev-card">
                      <div className="dev-card-item">
                        <Image
                          src="/images/continn.png"
                          width={86}
                          height={86}
                          className="dev-icon"
                          alt="continuous-integration-icon"
                        />
                        <span style={{ float: "right" }}>
                          <Image
                            src="/images/01.white.png"
                            width={76}
                            height={47}
                            alt="Number 1 Image Icon"
                          />
                        </span>
                        <h2 className="dev-tab-title pt-3">
                        Configuration Management
                        </h2>
                        <p className="devtab-para">
                        Configuration Management involves maintaining consistency of systems and software across the infrastructure. By utilizing tools such as Ansible, Puppet, and Chef, we automate the configuration of servers and environments, reducing manual errors and ensuring compliance with desired states. This automation enhances system reliability and accelerates deployment processes.
                        </p>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                              <li className="pb-2">Configuration as Code (CaC) – Automate configurations using Ansible, Puppet, Chef, or SaltStack.</li>
                              <li className="pb-2">Immutable Infrastructure – Use Docker & Kubernetes to enforce repeatable deployments.</li>
                              <li className="pb-2">State & Secrets Management – Manage configurations securely with HashiCorp Vault, AWS Secrets Manager, and Azure Key Vault.</li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                              <li className="pb-2">Dynamic Configuration Updates – Implement feature flags and runtime parameter changes.</li>
                              <li className="pb-2">
                              Compliance & Policy Automation – Enforce best practices with OPA (Open Policy Agent) and CIS Benchmarks.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="devtab-para">With Trimsel’s Configuration Management services, businesses achieve consistent, secure, and scalable infrastructure configurations.</p>
                        <p className="devtab-para">
                        Trimsel offers reliable DevOps solutions tailored to businesses seeking automated, consistent, and secure configuration management across environments.
</p>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <div className=" card dev-card">
                      <div className="dev-card-item">
                        <Image
                          src="/images/continn.png"
                          width={86}
                          height={86}
                          className="dev-icon"
                          alt="continuous-integration-icon"
                        />
                        <span style={{ float: "right" }}>
                          <Image
                            src="/images/01.white.png"
                            width={76}
                            height={47}
                            alt="Number 1 Image Icon"
                          />
                        </span>
                        <h2 className="dev-tab-title pt-3">
                        DevSecOps & Security Automation
                        </h2>
                        <p className="devtab-para">
                        Security should never be an afterthought in software development. Our DevSecOps & Security Automation services integrate security seamlessly into the DevOps lifecycle, ensuring vulnerabilities are detected and mitigated early.
                        We implement automated security testing, vulnerability scanning, and compliance enforcement across cloud and on-premises environments. Our expertise includes:
                        </p>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                            <li>Security as Code (SaC): Automating security policies and controls.</li>
                    <li>Shift-Left Security: Identifying vulnerabilities in the early development stages.
                    </li>
                    <li>Automated Compliance: Ensuring industry-standard security (ISO 27001, SOC 2, GDPR, HIPAA).
                    </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                              <li className="pb-2">Infrastructure & Cloud Security: Hardening cloud environments using AWS Security Hub, Azure Security Center, Google Chronicle.</li>
                              <li className="pb-2">
                              CI/CD Pipeline Security: Secure coding practices, automated static and dynamic analysis (SAST, DAST, IAST).
                              </li>
                              <li className="pb-2">
                              Container & Kubernetes Security: Implementing runtime security with Kubernetes-native tools like Falco, Aqua, and Prisma Cloud.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="devtab-para">With DevSecOps & Security Automation, we ensure your applications are secure, compliant, and resilient against emerging cyber threats.</p>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <div className=" card dev-card">
                      <div className="dev-card-item">
                        <Image
                          src="/images/continn.png"
                          width={86}
                          height={86}
                          className="dev-icon"
                          alt="continuous-integration-icon"
                        />
                        <span style={{ float: "right" }}>
                          <Image
                            src="/images/01.white.png"
                            width={76}
                            height={47}
                            alt="Number 1 Image Icon"
                          />
                        </span>
                        <h2 className="dev-tab-title pt-3">
                          Continuous Monitoring
                        </h2>
                        <p className="devtab-para">
                        Continuous Monitoring & Logging is vital for real-time performance visibility, security detection, and system reliability. Our solutions offer end-to-end observability across cloud and on-prem infrastructure.
                        </p>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                              <li className="pb-2">Log Aggregation & Analysis – Centralized logging using ELK (Elasticsearch, Logstash, Kibana), Splunk, and Graylog.</li>
                              <li className="pb-2">Application Performance Monitoring (APM) – Detect performance bottlenecks with Datadog, New Relic, and Prometheus.</li>
                              <li className="pb-2">Distributed Tracing – Gain full insight into request flows with Jaeger and OpenTelemetry.</li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                              <li className="pb-2">Automated Incident Management – Integrated with PagerDuty, Opsgenie, and VictorOps.</li>
                              <li className="pb-2">
                              Security & Compliance Monitoring – Ensure SOC 2, GDPR, and HIPAA compliance through real-time audits.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="devtab-para">With Continuous Monitoring, we help businesses maintain high availability, performance, and security of their applications.</p>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seven">
                    <div className=" card dev-card">
                      <div className="dev-card-item">
                        <Image
                          src="/images/continn.png"
                          width={86}
                          height={86}
                          className="dev-icon"
                          alt="continuous-integration-icon"
                        />
                        <span style={{ float: "right" }}>
                          <Image
                            src="/images/01.white.png"
                            width={76}
                            height={47}
                            alt="Number 1 Image Icon"
                          />
                        </span>
                        <h2 className="dev-tab-title pt-3">Kubernetes & Cloud DevOps</h2>
                        <p className="devtab-para">
  Kubernetes & Cloud DevOps power modern, scalable, and cloud-native applications. Trimsel helps businesses deploy, manage, and optimize containerized workloads with best-in-class Kubernetes automation. Also explore our <Link href="/cloud-consulting-services">Cloud Consulting Services</Link> for integrated multi-cloud solutions.
</p>

                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                            <li>Kubernetes Deployment & Management – Setup & optimize AWS EKS, Azure AKS, Google GKE.</li>
                    <li>Cloud-Native CI/CD Pipelines – Enable GitOps workflows with ArgoCD & Flux.</li>
                    <li>Service Mesh & Networking – Implement Istio, Linkerd, and Consul for microservices security.</li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <ul className="devtab-list">
                              <li className="pb-2">Container Security & Compliance – Protect workloads with Aqua Security, Prisma Cloud, and KubeArmor.</li>
                              <li className="pb-2">
                              Cost Optimization & Auto-Scaling – Right-size cloud resources with KEDA, Cluster Autoscaler, and Spot Instances.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="devtab-para">With Trimsel’s Kubernetes & Cloud DevOps expertise, businesses build resilient, scalable, and cost-efficient cloud applications.</p>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>

      {/* <section id="dev-implementation">
  <div className="container">
    <Stack direction="horizontal">
      <div className="badge-abot-btn">
        <img src="/images/Rectangle-kariot.png" className="me-2" alt="design-dot" />
        <p><strong> IMPLEMENTATION PROCESS </strong></p>
      </div>
    </Stack>

    <Row className="pt-4">
      <Col lg={6} md={6}>
        <h2 className="impl-heading">Step-by-Step DevOps Implementation Services</h2>
      </Col>
      <Col lg={6} md={6}>
        <p className="impl-para">
          As a leading DevOps consulting firm, we follow a structured DevOps implementation process tailored to enterprise goals. From infrastructure automation to security compliance, Trimsel ensures cloud and DevOps adoption is seamless, scalable, and secure.
        </p>
      </Col>
    </Row>

    <Image
      src="/images/infograp1.webp"
      width={1116}
      height={899}
      alt="DevOps Implementation Process Image"
      className="infogrph"
      priority
    />

    <div className="mobile-dsgn">
      
      <div className="card card-mobile">
        <div className="row">
          <div className="col-7" style={{ marginTop: "18px" }}>
            <Image src="/images/01.dev.png" width={77} height={55} alt="Step 1" />
            <h2 className="strg-heading">Strategic Planning</h2>
          </div>
          <div className="col-5">
            <Image src="/images/strategic-icon.png" width={100} height={100} alt="Strategic Icon" className="strg-vion" />
          </div>
          <p className="mbl-card-para">
            Our DevOps experts assess your IT environment, development workflows, and tooling. We identify challenges, define KPIs, and craft a strategic roadmap aligned with your DevOps transformation goals.
          </p>
        </div>
      </div>

      
      <div className="card card-mobile">
        <div className="row">
          <div className="col-7" style={{ marginTop: "18px" }}>
            <Image src="/images/02.dev.png" width={77} height={55} alt="Step 2" />
            <h2 className="strg-heading">DevOps Implementation</h2>
          </div>
          <div className="col-5">
            <Image src="/images/implementation-icon.png" width={100} height={100} alt="Implementation Icon" className="strg-vion" />
          </div>
          <p className="mbl-card-para">
            We automate infrastructure with IaC using Terraform and CloudFormation, configure CI/CD pipelines, and deploy container orchestration with Kubernetes. Our DevOps migration services accelerate deployment and minimize downtime.
          </p>
        </div>
      </div>

      
      <div className="card card-mobile">
        <div className="row">
          <div className="col-7" style={{ marginTop: "18px" }}>
            <Image src="/images/03.dev.png" width={77} height={55} alt="Step 3" />
            <h2 className="strg-heading">Monitoring & Observability</h2>
          </div>
          <div className="col-5">
            <Image src="/images/planning-icon.png" width={100} height={100} alt="Monitoring Icon" className="strg-vion" />
          </div>
          <p className="mbl-card-para">
            We implement real-time performance tracking, log aggregation, and alerts using Prometheus, Grafana, and ELK Stack. Our managed DevOps services ensure continuous insights across your entire infrastructure.
          </p>
        </div>
      </div>

      
      <div className="card card-mobile">
        <div className="row">
          <div className="col-7" style={{ marginTop: "18px" }}>
            <Image src="/images/04.dev.png" width={77} height={55} alt="Step 4" />
            <h2 className="strg-heading">Security & Compliance</h2>
          </div>
          <div className="col-5">
            <Image src="/images/2ndplanning-icon.png" width={100} height={100} alt="Security Icon" className="strg-vion" />
          </div>
          <p className="mbl-card-para">
            Security is embedded into every phase through DevSecOps. We integrate automated vulnerability scans, secrets management, and compliance checks (SOC 2, GDPR, ISO 27001) into your CI/CD pipelines.
          </p>
        </div>
      </div>
    </div>
  </div>
</section> */}

<section id="dev-cta">
  <div className="container cta-container">
    <Card className="cta-dev my-5">
      <Card.Body className="dev-card-body">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12">
            <Stack direction="horizontal">
              <div className="badge-abot-btn">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p><strong> GET IN TOUCH </strong></p>
              </div>
            </Stack>
            <h2 className="devcta-heading pt-2">
              Scale Smarter with Our DevOps Consulting Services – Book a Free Consultation!
            </h2>
            <p className="cta-para text-white">
              Whether you're a startup or enterprise, Trimsel’s <strong>DevOps consulting firm</strong> can help streamline your software delivery, implement CI/CD, and automate cloud operations. Let’s work together to improve efficiency and time-to-market.
            </p>
            <Link href="/contact-us" passHref>
            <button className="devcta-button btn-lg btn-info mt-3">
              Get Started{" "}
              <span className="icon">
                <img
                  src="/images/material-symbols_arrow-right-alt.png"
                  alt="right arrow icon"
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


<section id="dev-choose">
  <div className="container devch-container">
    <Stack direction="horizontal">
      <div className="badge-abot-btn">
        <img
          src="/images/Rectangle-kariot.png"
          className="me-2"
          alt="design-dot"
        />
        <p><strong> WHY CHOOSE TRIMSEL </strong></p>
      </div>
    </Stack>

    <Row className="pt-3">
      <Col lg={6} md={6}>
        <h3 className="devch-heading">
          Why Choose Our DevOps Consulting Services for Seamless Cloud & Automation?
        </h3>
      </Col>
      <Col lg={6} md={6}>
        <p className="devch-para">
          As a trusted DevOps consulting company in India, we help enterprises scale faster with robust cloud-native solutions, CI/CD automation, and infrastructure modernization. From planning to deployment, our expert DevOps engineers deliver measurable results through end-to-end DevOps implementation services.
        </p>
      </Col>
    </Row>

    <Row className="pt-4">
      <Col lg={3} md={6}>
        <div className="card devch-card mb-2">
          <Image
            src="/images/devch-icon.png"
            width={60}
            height={60}
            alt="Complex Delivery Icon"
            className="cmplx-del"
          />
          <h3 className="chcard-heading">Complex Delivery Expertise</h3>
          <p className="chcard-para">
            Our DevOps migration services are designed to handle complex enterprise environments. We ensure seamless transition from monolithic to microservices architectures with zero downtime, using advanced CI/CD pipelines and release automation tools.
          </p>
        </div>
      </Col>

      <Col lg={3} md={6}>
        <div className="card devch-card1 mb-2">
          <Image
            src="/images/devch-icon1.png"
            width={60}
            height={60}
            alt="Skilled Talented Icon"
            className="cmplx-del"
          />
          <h3 className="chcard-heading">Certified DevOps Engineers</h3>
          <p className="chcard-para">
            Hire DevOps engineers skilled in Kubernetes, Docker, GitOps, and Terraform. Our team enables scalable DevOps implementation across cloud platforms like AWS, Azure, and GCP with automation-first strategies.
          </p>
        </div>
      </Col>

      <Col lg={3} md={6}>
        <div className="card devch-card2 mb-2">
          <Image
            src="/images/devch-icon2.png"
            width={60}
            height={60}
            alt="Security Icon"
            className="cmplx-del"
          />
          <h3 className="chcard-heading">Security-Driven Automation</h3>
          <p className="chcard-para">
            Security is embedded across every stage of our DevOps pipeline. We apply DevSecOps best practices including policy enforcement, SAST/DAST scans, secrets management, and container runtime protection.
          </p>
        </div>
      </Col>

      <Col lg={3} md={6}>
        <div className="card devch-card3 mb-2">
          <Image
            src="/images/devch-icon3.png"
            width={60}
            height={60}
            alt="Dedicated Team Icon"
            className="cmplx-del"
          />
          <h3 className="chcard-heading">Managed DevOps Support</h3>
          <p className="chcard-para">
            Get 24/7 support from a dedicated DevOps team. From release management to cloud monitoring, our managed DevOps services help reduce downtime, cut costs, and ensure faster deployments.
          </p>
        </div>
      </Col>
    </Row>
  </div>
</section>

<section className="devops-dev-tools">
  <div className="container devtool-container">
    <Stack direction="horizontal">
      <div className=" badge-abot-btn">
        <img
          src="/images/Rectangle-kariot.png"
          className="me-2"
          alt="design-dot"
        />
        <p><strong>TOOLS WE USE</strong></p>
      </div>
    </Stack>

    <Row className="pt-3">
      <Col lg={5} md={5}>
        <h3 className="tools-heading">
          DevOps Automation Tools & Cloud Platforms We Leverage for Seamless CI/CD
        </h3>
      </Col>
      <Col lg={7} md={7}>
        <p className="tools-para">
          At Trimsel, we work with the most powerful DevOps tools and cloud platforms to streamline development, accelerate delivery, and ensure infrastructure scalability. From source code management to CI/CD and monitoring, our DevOps service company integrates tools like <strong>Jenkins, GitHub Actions, Terraform, Kubernetes, Docker,</strong> and <strong>Prometheus</strong>. We also support leading cloud providers like <strong>AWS, Azure,</strong> and <strong>Google Cloud Platform (GCP)</strong>.
        </p>
      </Col>
    </Row>

    <Row className="tool-img-row">
      {images.map((image, index) => (
        <Col lg={2} md={2} xs={4} className="pt-4 client-col" key={index}>
          <Image
            src={image}
            width={150}
            height={74.87}
            alt={`DevOps Tool ${index + 1}`}
            style={{ width: "-webkit-fill-available", height: "auto" }}
          />
          <hr />
        </Col>
      ))}
    </Row>
  </div>
</section>


      {/* <section id="recent-dev-work">
        <div className="container new-ds">
          <div className="row">
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
                <img src="/images/material-symbols_arrow-right-alt.png" />
              </button>
            </div>
          </div>
          <CarouselComponent />
        </div>
      </section> */}

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
            <div className="col-lg-5 col-md-5">
              <h2 className="client-title">We're A Trusted Growth Partner</h2>
            </div>
            <div className="col-lg-7 col-md-7">
              <p className="cliented-text">
                At Trimsel, there is continuous learning that happens as we
                work on various projects. We also love to update and upgrade
                with the latest innovations in the field of technology and apps.
              </p>
            </div>
          </div>
          <ClientLogo />
        </div>
      </section>
      <ContactForm />

      <section id="blog" className="py-4">
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
                Read Our Latest Blogs and News
              </h2>
            </div>
            <div className="col-lg-7 col-md-7 py-4">
              <p className="blog-para">
                At Minitzon, there is continuous learning that happens as we
                work on various projects. We also love to update and upgrade
                with the latest innovations in the field of technology and apps.
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
      </section>

      <section id="faq">
  <div className="container faq-container">
    <h2 className="faq-heading">Frequently Asked Questions</h2>
    <Accordion defaultActiveKey="0" flush className="py-5">
      <Accordion.Item eventKey="0" className="pb-3">
        <Accordion.Header>
          What does a DevOps consulting company do?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            A DevOps consulting company like Trimsel helps businesses implement automation, continuous integration, CI/CD pipelines, and cloud-native infrastructure. We bridge the gap between development and operations to ensure faster, more reliable software delivery.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="pb-3">
        <Accordion.Header>
          Why choose Trimsel for DevOps consulting services in India?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Trimsel is a trusted DevOps consulting firm in India with global delivery capabilities. Our certified engineers specialize in infrastructure automation, Kubernetes consulting, and cloud DevOps solutions tailored to your business needs.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="pb-3">
        <Accordion.Header>
          How much do DevOps services cost?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            The cost of DevOps services depends on the project scope, infrastructure complexity, and automation level required. Trimsel offers scalable DevOps service packages designed for startups, SMEs, and enterprise businesses.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className="pb-3">
        <Accordion.Header>
          What are the benefits of hiring a DevOps service provider?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Hiring a DevOps service provider streamlines your software development lifecycle, reduces deployment errors, improves security, and enhances collaboration between teams. Trimsel’s DevOps engineers focus on automation and continuous delivery for business agility.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className="pb-3">
        <Accordion.Header>
          What DevOps automation tools do you work with?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            We work with top DevOps automation tools like Jenkins, GitLab CI/CD, Terraform, Docker, Ansible, Kubernetes, and cloud-native platforms like AWS, GCP, and Azure. These tools help us deliver faster, secure, and scalable DevOps solutions.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className="pb-3">
        <Accordion.Header>
          Can Trimsel help with Kubernetes consulting services?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes, we offer Kubernetes consulting services for container orchestration, workload scaling, and microservices management. From setting up EKS, AKS, or GKE to Helm-based deployments, we ensure enterprise-grade Kubernetes implementation.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6" className="pb-3">
        <Accordion.Header>
          Do you provide managed DevOps services?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Absolutely. We offer fully managed DevOps services including 24/7 monitoring, incident response, CI/CD management, and infrastructure maintenance. This allows you to focus on product development while we handle operations.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7" className="pb-3">
        <Accordion.Header>
          How long does DevOps implementation take?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            DevOps implementation timelines vary by project size and existing infrastructure. On average, small to mid-sized businesses can start seeing results within 4–8 weeks. We provide a step-by-step roadmap for smooth DevOps transformation.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8" className="pb-3">
        <Accordion.Header>
          Can I hire a dedicated DevOps engineer from Trimsel?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes, you can hire experienced DevOps engineers from Trimsel on a full-time or part-time basis. Our experts specialize in cloud DevOps, CI/CD pipelines, infrastructure automation, and DevSecOps practices.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9" className="pb-3">
        <Accordion.Header>
          Do you support cloud and DevOps integration?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Definitely. Trimsel offers cloud and DevOps integration services for AWS, Azure, and GCP. We help you modernize infrastructure, automate deployments, and optimize your cloud environments using DevOps best practices.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</section>

      <ContactModal title="Need A DevOps Service? Contact Us" />
      <Footer />
    </>
  );
}
