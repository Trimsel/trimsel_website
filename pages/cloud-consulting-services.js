import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Stack from "react-bootstrap/Stack";
import Accordion from "react-bootstrap/Accordion";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm";
import { buildServiceJsonLd } from "../lib/serviceSchema";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import CheckIcon from "../components/icons/CheckIcon";

const CarouselComponent = dynamic(() => import("../components/carouselComponent"), {
  ssr: false,
  loading: () => <div className="text-center text-muted py-5">Loading success stories…</div>,
});
const ClientLogo = dynamic(() => import("../components/clientLogo"), {
  ssr: false,
  loading: () => <div className="text-center text-muted py-5">Loading client logos…</div>,
});

export default function CloudConsulting() {
  const serviceJsonLd = buildServiceJsonLd({
    slug: "cloud-consulting-services",
    serviceName: "Cloud Consulting & Modernization (Chennai)",
    serviceType: "Cloud Consulting",
    description:
      "AWS, Azure & GCP strategy, migration, modernization, automation, governance, and cost optimization.",
    offers: [
      "Cloud Strategy & Architecture",
      "Cloud Migration (AWS/Azure/GCP)",
      "Cloud Cost Optimization (FinOps)",
      "Automation & IaC (Terraform/CDK/Bicep)",
      "Cloud Security & Compliance",
      "Observability & SRE",
    ],
    faq: [
      {
        question: "What does a cloud consulting company do?",
        answer:
          "A cloud consulting company like Trimsel helps businesses plan, migrate, and optimize their cloud infrastructure. Our certified AWS, Azure, and GCP experts deliver cloud strategy, architecture, security, and performance solutions for seamless cloud adoption.",
      },
      {
        question: "Why choose Trimsel for cloud consulting services in India?",
        answer:
          "Trimsel is one of the top cloud consulting companies in India with proven experience in multi-cloud deployments, cloud migration services, and cloud engineering. We provide scalable and secure cloud solutions across AWS, Azure, and GCP tailored to your business needs.",
      },
      {
        question: "What cloud platforms do you support?",
        answer:
          "We support all major public cloud platforms, including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Our cloud consultants design, deploy, and optimize workloads across these platforms using best practices in security, automation, and cost management.",
      },
      {
        question: "What are the benefits of cloud migration consulting?",
        answer:
          "Cloud migration consulting ensures a smooth transition from on-premise or legacy systems to the cloud. Our cloud migration experts assess your existing infrastructure, design a custom migration plan, and ensure high availability, data security, and business continuity.",
      },
      {
        question: "Do you provide cloud cost optimization services?",
        answer:
          "Yes. Trimsel's cloud cost optimization services identify and eliminate unnecessary cloud spend, optimize resource usage, and implement budgeting strategies. We help businesses improve ROI while maintaining performance across AWS, Azure, and GCP.",
      },
      {
        question: "What is cloud-native application development?",
        answer:
          "Cloud-native development involves building and running scalable applications using modern technologies like containers, microservices, and serverless architecture. We help you build cloud-native apps on AWS Lambda, Azure Functions, Kubernetes, and more.",
      },
      {
        question: "How do you ensure cloud security and compliance?",
        answer:
          "Our cloud security consulting services include IAM implementation, data encryption, security automation, and compliance with standards like HIPAA, GDPR, and ISO 27001. We integrate security into every layer of your cloud architecture.",
      },
      {
        question: "Can you support hybrid or multi-cloud strategies?",
        answer:
          "Absolutely. Trimsel specializes in hybrid and multi-cloud strategies. We help businesses distribute workloads across AWS, Azure, and GCP, implement failover solutions, and avoid vendor lock-in while maintaining centralized monitoring and governance.",
      },
      {
        question: "What industries do you serve with cloud consulting?",
        answer:
          "We provide cloud consulting services for a wide range of industries including fintech, healthcare, e-commerce, SaaS, and logistics. Our solutions are tailored to meet industry-specific needs such as regulatory compliance, high availability, and scalability.",
      },
      {
        question: "How do I get started with your cloud services?",
        answer:
          "Simply reach out to our cloud consulting team for an assessment. We'll evaluate your current environment, understand your goals, and propose a personalized roadmap covering cloud strategy, migration, optimization, and ongoing support.",
      },
    ],
    breadcrumbs: [
      { name: "Home", item: "https://www.trimsel.com/" },
      {
        name: "Cloud Consulting Services",
        item: "https://www.trimsel.com/cloud-consulting-services",
      },
    ],
  });
  const cloudInsights = [
    {
      title: "Cloud Migration Checklist",
      excerpt: "Review the assessment, landing zone, and cutover steps we follow for AWS, Azure, and GCP projects.",
      href: "/blog",
      tag: "Cloud Migration",
    },
    {
      title: "Explore Trimsel Cloud & DevOps Insights",
      excerpt: "Browse tutorials on FinOps, hybrid strategies, and automation blueprints to plan your next migration.",
      href: "/blog",
      tag: "Cloud Strategy",
    },
  ];
  return (
    <>
  <NextSeo
  title="Cloud Consulting services Chennai, India | AWS, Azure & GCP Experts"
  description="Trimsel offers expert cloud consulting services in Chennai, India, including AWS, Azure & GCP migration, modernization, FinOps, Security & cost optimization. Get started today!"
  canonical="https://www.trimsel.com/cloud-consulting-services"
  openGraph={{
    type: 'website',
    url: 'https://www.trimsel.com/cloud-consulting-services',
    title: 'Cloud Consulting Services Chennai, India | AWS, Azure & GCP Experts',
    description: 'Trimsel offers expert cloud consulting services in Chennai, India, including AWS, Azure & GCP migration, modernization, FinOps, Security & cost optimization. Get started today!',
    locale: 'en_IN',
    site_name: 'Trimsel',
    images: [
      { url: 'https://www.trimsel.com/images/clouded-hero.png', width: 1200, height: 630, alt: 'Trimsel cloud consultants collaborating in Chennai' }
    ],
    article: {
      section: 'Cloud Consulting',
      tags: [
        'Cloud Consulting',
        'AWS',
        'Azure',
        'GCP',
        'Cloud Migration',
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
      content: "Cloud Consulting Experts in Chennai – Trimsel",
    },
    {
      name: "twitter:description",
      content:
        "Certified AWS, Azure, and GCP engineers delivering migration, modernization, and FinOps services from Chennai.",
    },
    {
      name: "twitter:image:alt",
      content: "Trimsel cloud consultants planning AWS, Azure, and GCP strategy",
    },
  ]}
/>
      <Head>
        {serviceJsonLd.map((schema, index) => (
          <script
            key={`cloud-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <section className="cloud-hero">
        <Header />
        <section className="hero-dev">
  <div className="container pt-3">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-6">
        <div className="title">
          <div className="title-inner">
            <div className="cafe">
              <div className="whiteLink">
                <p className="breadcrumbs-kar">
                  <Link href="/">Home</Link> <span> &#x2027; </span> Cloud Consulting Services
                </p>
              </div>
            </div>
            <div className="cafe">
              <div className="cafe-inner news-title">
                <h1>
                  {" "}
                Cloud Consulting & Implementation Services in Chennai, India
                </h1>
              </div>
            </div>
            <div className="mozart">
              <div className="mozart-inner">
                <p className="cloud-para">
                Accelerate your digital transformation with our expert cloud consulting services in Chennai, India. Our certified AWS, Azure, and GCP cloud experts provide end-to-end support for cloud migration consulting, cloud engineering services, and cost optimization. From modernization to automation, we ensure secure, scalable, and high-performance cloud computing solutions tailored to your business needs.
                </p>
              </div>
            </div>
            <div className="mozarts">
              <div className="mozarts-inner">
                <Link
                  href="/contact-us"
                  className="btn btn-primary dev-btn"
                  aria-label="Contact Trimsel's cloud consultants"
                >
                  Contact Our Cloud Experts <ArrowRightIcon width={18} height={18} />
                </Link>
                <p className="hero-proof">
                  120+ cloud projects across BFSI, healthcare, and SaaS with 40% average cost savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 text-center">
        <Image
          src="/images/clouded-hero.webp"
          width={620}
          height={480}
          alt="Trimsel cloud consultants creating architecture diagrams"
          className="cloud-hero-art"
          priority
          quality={70}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACw="
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px"
        />
      </div>
    </div>
  </div>
</section>
</section>
<section id="cloud-about">
  <div className="container cloud-abt-container">
    <Stack direction="horizontal" className="pb-4">
              <div className="badge-abot-btn">
                <Image src="/images/Rectangle-kariot.png" className="me-2" alt="" aria-hidden="true" width={20} height={20} loading="lazy" />
        <p> WHAT WE DO </p>
      </div>
    </Stack>
    <h2 className="abt-title">
      Expert Cloud Consulting Services for Businesses of All Sizes
    </h2>
    <p className="cld-abt-para">
    As one of the top cloud computing companies in India, we provide comprehensive cloud consulting services, ranging from strategic planning, cloud migration consulting, and cloud automation to cloud cost optimization. Our certified AWS, Azure, and GCP experts ensure your cloud environment is secure, scalable, and cost-efficient while pairing seamlessly with <Link href="/devops-consulting-services">DevOps pipelines</Link> and <Link href="/web-development-company-chennai">web application teams</Link>.
    </p>
    
    <div className="row">
      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card h-100">
          <Card.Body>
            <Image src="/images/cloud-mig.png" width={80} height={80} className="do-icon pb-3" alt="Cloud Migration icon" quality={70} loading="lazy" />
            <h3 className="qs-card-heading">Cloud Migration Services & Adoption Consulting</h3>
            <p className="qsd-para">
            Transition seamlessly to the cloud with our cloud migration services. Our AWS cloud experts, Azure consultants, and GCP specialists design the best-fit cloud adoption strategy, ensuring minimal disruption, optimized performance, and cost efficiency. Whether you're migrating from on-premise to the cloud or between cloud providers, we provide a secure, scalable, and cost-effective migration plan.
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card h-100">
          <Card.Body>
            <Image src="/images/cloud-optim.png" width={80} height={80} className="do-icon pb-3" alt="Cloud Optimization icon" quality={70} loading="lazy" />
            <h3 className="qs-card-heading">Cloud Cost Optimization & Performance Tuning</h3>
            <p className="qsd-para">
            Cloud cost optimization services can help you get the most out of your cloud investments. We analyse your cloud usage, eliminate excessive expenditure, and adopt best practices to save cloud expenses while improving performance. Whether you use AWS, Azure, or GCP, our cloud specialists guarantee that resources are allocated efficiently, auto-scaling is enabled, and budgets are controlled.
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card h-100">
          <Card.Body>
            <Image src="/images/cloud-infra.png" width={80} height={80} className="do-icon pb-3" alt="Cloud Infrastructure icon" quality={70} loading="lazy" />
            <h3 className="qs-card-heading">Cloud Engineering & Infrastructure Management Services</h3>
            <p className="qsd-para">
              Ensure a resilient, high-performing cloud infrastructure with our cloud engineering services. Our multi-cloud experts handle everything from serverless architecture to Kubernetes deployments and cloud automation. If you're building a SaaS or large-scale web solution, our <Link href="/web-development-company-chennai">web development expertise</Link> ensures seamless performance and cloud integration.
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card h-100">
          <Card.Body>
            <Image src="/images/cloud-app.png" width={80} height={80} className="do-icon pb-3" alt="Cloud Application Development Icon" quality={70} loading="lazy" />
            <h3 className="qs-card-heading">
              Cloud-Native <Link href="/mobile-app-development-chennai">App Development</Link> & Modernization
            </h3>
            <p className="qsd-para">
              Leverage cloud-native technologies to build and modernize applications with serverless computing, microservices, and containerization. Our cloud modernization services ensure that your apps are scalable, secure, and future-proof on AWS, Azure, or Google Cloud. We enable businesses to migrate legacy applications, optimize <Link href="/devops-consulting-services">DevOps workflows</Link>, and achieve faster go-to-market.
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card h-100">
          <Card.Body>
            <Image src="/images/cloud-arch.png" width={80} height={80} className="do-icon pb-3" alt="Cloud Architecture icon" quality={70} loading="lazy" />
            <h3 className="qs-card-heading">
              Cloud Architecture Design & Automation
            </h3>
            <p className="qsd-para">
            Our cloud architecture recommendations can help you create a cloud infrastructure that is future-ready. Our certified Azure, AWS, and GCP architects create scalable, highly available, and cost-effective cloud solutions. We implement cloud automation services to streamline deployments, improve fault tolerance, and enhance security posture.
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-4 col-md-6 pt-3">
        <Card className="hm-customize-card h-100">
          <Card.Body>
            <Image src="/images/cloud-roi.png" width={74} height={72} className="do-icon pb-3" alt="Cloud Security icon" quality={70} loading="lazy" />
            <h3 className="asd-card-heading"> Cloud Security & Compliance Consulting </h3>
            <p className="qsd-para">
            Safeguard your cloud infrastructure with enterprise-grade cloud security solutions. Our AWS security experts, Azure consultants, and GCP specialists  help businesses implement zero-trust security models, IAM, encryption strategies, and compliance frameworks like ISO 27001, HIPAA, and GDPR. We ensure continuous monitoring, threat detection, and vulnerability management to secure cloud environments from cyber threats.
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
</section>
<section id="cloud-native">
  <div className="container native-container">
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <h2 className="native-heading">
          Cloud-Native & Cloud-Agnostic Consulting Services
        </h2>
        <p className="native-para">
        Choosing the right cloud deployment model is crucial for business agility, cost efficiency, and security. Our cloud experts provide cloud consulting services to help businesses adopt scalable, secure, and high-performing cloud environments tailored to their unique needs.
        </p>
      </div>
      <div className="col-lg-6 col-md-6">
        <Image
          src="/images/cloudnewgroup.png"
          width={600}
          height={400}
          className="cloud-gtoup"
          alt="Cloud strategy options visual"
          loading="lazy"
        />
      </div>
    </div>

    <div className="new-cloud-row">
      <h3 className="new-cloud-text">
        <CheckIcon className="check-svg" width={18} height={18} /> Private Cloud Consulting
      </h3>
      <ul className="new-cloud-para list-unstyled">
        <li>
          <strong>Best for:</strong> Enterprises requiring high security, governance, and compliance.
        </li>
        <li>
          <strong>What We Offer:</strong>
          <ul className="list-unstyled ps-3">
            <li>Customized private cloud solutions using AWS, Azure, or GCP.</li>
            <li>Data governance and regulatory compliance.</li>
            <li>Secure deployment with automation and monitoring.</li>
            <li>Optimized workload performance and cost efficiency.</li>
          </ul>
        </li>
      </ul>

      <div className="row">
        <div className="col-lg-6 col-md-6 pb-4">
          <h3 className="new-cloud-text">
            <CheckIcon className="check-svg" width={18} height={18} /> Public Cloud Consulting
          </h3>
          <ul className="new-clouds-para list-unstyled">
            <li>
              <strong>Best for:</strong> Businesses seeking flexible and scalable cloud infrastructure.
            </li>
            <li>
              <strong>What We Offer:</strong>
              <ul className="list-unstyled ps-3">
                <li>Migration to AWS, Azure, or GCP with minimal disruption.</li>
                <li>Pay-as-you-go architecture and cost optimization.</li>
                <li>High availability and automated scaling capabilities.</li>
                <li>Cloud-native development and deployment support.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="col-lg-6 col-md-6 pb-4">
          <h3 className="new-cloud-text">
            <CheckIcon className="check-svg" width={18} height={18} /> Multi-Cloud Consulting
          </h3>
          <ul className="new-clouds-para list-unstyled">
            <li>
              <strong>Best for:</strong> Enterprises aiming for flexibility and vendor independence.
            </li>
            <li>
              <strong>What We Offer:</strong>
              <ul className="list-unstyled ps-3">
                <li>Seamless integration across AWS, Azure, and GCP.</li>
                <li>Centralized governance and security posture.</li>
                <li>Cross-cloud workload optimization.</li>
                <li>Unified monitoring and cloud operations.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="col-lg-6 col-md-6 pb-4">
          <h3 className="new-cloud-text">
            <CheckIcon className="check-svg" width={18} height={18} /> Hybrid Cloud Consulting
          </h3>
          <ul className="new-clouds-para list-unstyled">
            <li>
              <strong>Best for:</strong> Businesses balancing private and public cloud usage.
            </li>
            <li>
              <strong>What We Offer:</strong>
              <ul className="list-unstyled ps-3">
                <li>Hybrid strategy consulting and workload orchestration.</li>
                <li>Seamless data flow between environments.</li>
                <li>Strong security and compliance frameworks.</li>
                <li>Custom integration aligned with industry regulations.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="col-lg-6 col-md-6 pb-4">
          <h3 className="new-cloud-text">
            <CheckIcon className="check-svg" width={18} height={18} /> Distributed Cloud Consulting
          </h3>
          <ul className="new-clouds-para list-unstyled">
            <li>
              <strong>Best for:</strong> Businesses requiring edge computing and real-time processing.
            </li>
            <li>
              <strong>What We Offer:</strong>
              <ul className="list-unstyled ps-3">
                <li>Low-latency architecture with global reach.</li>
                <li>Cloud-native deployment across edge locations.</li>
                <li>Resilient design for uptime and fault tolerance.</li>
                <li>Optimized resource utilization and performance tuning.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="cloud-aspect">
  <div className="container aspect-container">
    <div className="row">
      <div className="col-lg-7 col-md-6">
        <h2 className="aspect-heading">
          Complete Cloud Adoption Solutions: Secure, Scalable, and Cost-Effective
        </h2>
      </div>
      <div className="col-lg-4 col-md-6">
        <Button href="/contact-us" className="gif-button mt-3">
          <Image
            src="/images/slightly-smiling-face.gif"
            alt="Smiling face icon"
            className="new-smile"
            width={48}
            height={48}
            loading="lazy"
          />
          <h6 className="smile-heading">
            <p className="smile-para"> Talk to a </p>
            Cloud Expert{" "}
            <Image
              src="/images/gifbtniconarrow.png"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              loading="lazy"
            />
          </h6>
        </Button>
      </div>
    </div>

    <p className="aspect-para pt-3">
      Navigating the cloud journey requires a strategic approach. At Trimsel, our cloud consulting experts assist businesses in every phase of cloud adoption—from infrastructure assessment and architecture planning to deployment, automation, and cloud cost optimization. We deliver seamless transformation across AWS, Azure, and GCP environments.
    </p>

    <div className="row" style={{ marginTop: "25px" }}>
      <div className="col-lg-4 col-md-6">
        <Card className="aspects-card mb-3">
          <h3 className="aspect-card-heading">IT Infrastructure Assessment</h3>
          <p className="aspect-card-para">
            We evaluate your existing IT environment, application dependencies, and performance baselines to identify gaps and build a secure, scalable cloud migration roadmap with cost-saving opportunities.
          </p>
        </Card>
      </div>

      <div className="col-lg-4 col-md-6">
        <Card className="aspect-card mb-3">
          <h3 className="aspect-card-heading">Cloud Strategy & Planning</h3>
          <p className="aspect-card-para">
            Our multi-cloud consultants (AWS, Azure, GCP) architect reliable, compliant, and future-ready cloud computing solutions tailored to your business objectives and growth roadmap.
          </p>
        </Card>
      </div>

      <div className="col-lg-4 col-md-6">
        <Card className="aspect-card mb-3">
          <h3 className="aspect-card-heading">Development & Cloud Deployment</h3>
          <p className="aspect-card-para">
            We enable cloud-native development using serverless infrastructure, containers, and DevOps automation to streamline CI/CD deployment cycles and accelerate time-to-market.
          </p>
        </Card>
      </div>

      <div className="col-lg-4 col-md-6">
        <Card className="aspect-card mb-3">
          <h3 className="aspect-card-heading">Cloud Optimization & Cost Efficiency</h3>
          <p className="aspect-card-para">
            Our engineers optimize cloud spending by eliminating underused resources, implementing auto-scaling, and enforcing governance policies to deliver maximum return on your cloud investment.
          </p>
        </Card>
      </div>

      <div className="col-lg-4 col-md-6">
        <Card className="aspect-card mb-3">
          <h3 className="aspect-card-heading">Ongoing Cloud Support & Security</h3>
          <p className="aspect-card-para">
            With managed cloud support, we deliver 24/7 monitoring, security patching, backup management, and compliance enforcement across your AWS, Azure, or GCP environment—keeping you secure and always available.
          </p>
        </Card>
      </div>
    </div>
  </div>
</section>


      <section id="cloud-value">
        <div className="container value-container">
          <Stack direction="horizontal" className="pb-4">
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
              <p> OUR VALUE PROPOSITION </p>
            </div>
          </Stack>
          <h2 className="value-heading pt-3">
          Why Choose Trimsel for Cloud Consulting?
          </h2>
          <p className="value-para">
          At Trimsel, we ensure seamless cloud transformation with minimal risk and maximum efficiency. Our cloud consulting services are designed to optimize costs, enhance security, and drive tangible business value—helping you scale effortlessly across AWS, Azure, and GCP."
          </p>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <Card className="value-card">
                <h3 className="val-card-heading">Scalable Cloud Architecture</h3>
                <p className="val-card-para">
                We architect future-ready cloud systems that scale effortlessly with your business needs. Whether you're a startup preparing for rapid growth or an enterprise seeking performance optimization, our experts design resilient, high-availability infrastructures tailored for AWS, Azure, and GCP. We incorporate load balancing, auto-scaling groups, and failover mechanisms to ensure your applications remain fast, reliable, and responsive under any traffic condition. With our scalable cloud architecture services, you gain the flexibility to expand without disruption, reduce downtime, and deliver consistent user experiences across regions.
                </p>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6">
              <Card className="value-card">
                <h3 className="val-card-heading1">Secure & Compliant Cloud Infrastructure</h3>
                <p className="val-card-para">
                We integrate best-in-class security practices with industry-specific compliance frameworks to safeguard your cloud ecosystem. From implementing Identity & Access Management (IAM) and end-to-end encryption to meeting standards like GDPR, HIPAA, and ISO 27001, we ensure your cloud infrastructure is secure and audit-ready. With proactive threat detection, vulnerability scanning, and continuous compliance monitoring, Trimsel helps you stay resilient and regulation-ready.
                </p>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6">
              <Card className="value-card">
                <h3 className="val-card-heading2">
                Cloud Expertise Across AWS, Azure & GCP
                </h3>
                <p className="val-card-para">
                Our certified cloud consultants bring hands-on expertise across all major platforms — AWS, Microsoft Azure, and Google Cloud Platform (GCP). Whether you're planning a multi-cloud strategy, migrating workloads, or optimizing your infrastructure, our engineers ensure seamless integration, cost efficiency, and scalability. With deep platform knowledge, we tailor cloud architectures that align perfectly with your business objectives and industry-specific demands.
                </p>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6">
              <Card className="value-card">
                <h3 className="val-card-heading3">Cloud-Powered Innovation</h3>
                <p className="val-card-para">
                Embrace the full potential of digital transformation with Trimsel’s cloud innovation capabilities. We help businesses harness cutting-edge cloud-native technologies like serverless computing, container orchestration, artificial intelligence, and machine learning. Whether you're building intelligent apps, deploying real-time analytics, or automating workflows, our cloud experts empower your team to innovate faster and smarter. With deep platform expertise and DevOps integration, we enable rapid prototyping, continuous improvement, and faster time-to-market—driving real competitive advantage in today’s digital economy.
                </p>
              </Card>
            </div>
          </div>
      <Link
        href="/contact-us"
        className="btn btn-primary dev-btn"
        aria-label="Speak with Trimsel cloud experts"
      >
        Talk to Our Cloud Experts Today <ArrowRightIcon width={18} height={18} />
      </Link>
        </div>
      </section>

      <section id="support">
  <div className="container support-container">
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <h3 className="support-heading">
          Leading Cloud Platforms We Support
        </h3>
        <p className="support-para">
          As certified cloud experts, Trimsel provides consulting and support across all major cloud platforms—Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Whether you're planning a new deployment or managing a multi-cloud environment, our AWS Cloud experts, Azure consultants, and GCP specialists ensure secure, scalable, and high-performing cloud infrastructure tailored to your business goals.
        </p>
      </div>
      <div className="col-lg-6 col-md-6 support-col">
        <div className="image-container">
          <Image
            src="/images/awscloud-min.png"
            width={100}
            height={139}
            alt="AWS Cloud Consulting Partner"
            className="support-aws"
          />
          <Image
            src="/images/googlecloud-min.png"
            width={100}
            height={139}
            alt="GCP Cloud Consulting Partner"
            className="support-aws"
          />
          <Image
            src="/images/azurecloud-min.png"
            width={100}
            height={139}
            alt="Azure Cloud Consulting Partner"
            className="support-aws"
          />
        </div>
      </div>
    </div>
  </div>
</section>


<section className="cloud-choose">
  <div className="container dev-ser-container">
    <h3 className="dev-ser-header">Your Trusted Cloud Consulting Partner in Chennai, India</h3>
    <p className="dev-ser-para">
      At Trimsel, we help businesses improve agility, reduce costs, and accelerate digital transformation. Our cloud consulting services are trusted by startups and enterprises alike for their reliability, flexibility, and measurable outcomes.
    </p>

    <Tab.Container id="new-tabs" defaultActiveKey="complex">
      <Card className="cloud-card mt-5">
        <Nav variant="pills" className="new-nav">
          <Nav.Item className="ser-nav-item">
            <Nav.Link eventKey="complex">Vendor Agnostic</Nav.Link>
          </Nav.Item>
          <Nav.Item className="ser-nav-item">
            <Nav.Link eventKey="skilled">Skilled & Certified Engineers</Nav.Link>
          </Nav.Item>
          <Nav.Item className="ser-nav-item">
            <Nav.Link eventKey="diverse">Diverse Industry Expertise</Nav.Link>
          </Nav.Item>
          <Nav.Item className="ser-nav-item">
            <Nav.Link eventKey="track">Proven Track Record</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card>

      <Tab.Content className="py-5">
        <Tab.Pane eventKey="complex">
          <Row>
            <Col lg={8} md={8}>
              <p className="dev-ser-para">
                We deliver <strong>multi-cloud solutions</strong> across AWS, Azure, and GCP—free from vendor lock-in.<br />
                Our cloud-agnostic approach ensures <strong>flexibility, scalability, and cost efficiency</strong> based on your specific business goals.<br />
                Get strategic cloud adoption guidance customized for performance and resilience.
              </p>
            </Col>
            <Col lg={4} md={4}>
              <Image
                src="/images/prjdel.png"
                className="service-img-detail"
                alt="Vendor Agnostic Cloud Consulting"
                width={200}
                height={200}
                loading="lazy"
              />
            </Col>
          </Row>
        </Tab.Pane>

        <Tab.Pane eventKey="skilled">
          <Row>
            <Col lg={8} md={8}>
              <p className="dev-ser-para">
                Our certified engineers bring deep expertise in <strong>AWS, Azure, GCP, Kubernetes, Terraform, and Serverless</strong> architectures.<br />
                Specialized teams in <strong>cloud strategy, infrastructure automation, and DevOps consulting</strong>.<br />
                We ensure <strong>secure, scalable, and future-ready deployments</strong> for every cloud initiative.
              </p>
            </Col>
            <Col lg={4} md={4}>
              <Image
                src="/images/prjdel.png"
                className="service-img-detail"
                alt="Certified Cloud Engineers"
                width={200}
                height={200}
                loading="lazy"
              />
            </Col>
          </Row>
        </Tab.Pane>

        <Tab.Pane eventKey="diverse">
          <Row>
            <Col lg={8} md={8}>
              <p className="dev-ser-para">
                Successfully delivered cloud consulting across <strong>Fintech, Healthcare, Retail, SaaS, and AI/ML</strong> verticals.<br />
                Experts in <strong>hybrid and multi-cloud deployments</strong> with governance and security compliance.<br />
                We enable digital transformation for businesses of all sizes—from startups to global enterprises.
              </p>
            </Col>
            <Col lg={4} md={4}>
              <Image
                src="/images/prjdel.png"
                className="service-img-detail"
                alt="Industry-Specific Cloud Expertise"
                width={200}
                height={200}
                loading="lazy"
              />
            </Col>
          </Row>
        </Tab.Pane>

        <Tab.Pane eventKey="track">
          <Row>
            <Col lg={8} md={8}>
              <p className="dev-ser-para">
                Over <strong>100+ successful cloud migration projects</strong> with zero-downtime strategies.<br />
                Recognized as a trusted partner for <strong>cloud cost optimization</strong> and secure deployments across India, UAE, and the USA.<br />
                Helped clients <strong>reduce cloud expenses by up to 40%</strong> using automation and performance monitoring.
              </p>
            </Col>
            <Col lg={4} md={4}>
              <Image
                src="/images/prjdel.png"
                className="service-img-detail"
                alt="Proven DevOps & Cloud Results"
                width={200}
                height={200}
                loading="lazy"
              />
            </Col>
          </Row>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  </div>
</section>

<section className="cloud-sec-cta">
  <div className="container">
    <Card className="cloud-cta my-5">
      <Card.Body>
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12">
            <Stack direction="horizontal" className="pb-4">
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
                <p> LET'S TALK CLOUD </p>
              </div>
            </Stack>
            <h2 className="cldcta-heading pt-2">
              Accelerate Your Business with Expert Cloud Consulting Services
            </h2>
            <p className="cloud-cta-para mt-2 text-white">
              Whether you're planning a cloud migration, cost optimization, or full-scale modernization—our certified AWS, Azure, and GCP consultants are here to help. Let’s turn your cloud vision into scalable results.
            </p>
            <Link
              href="/contact-us"
              className="btn btn-primary dev-btn mt-3"
              aria-label="Contact Trimsel for cloud consulting"
            >
              Contact Us <ArrowRightIcon width={18} height={18} />
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
</section>


      {/* <section className="devops-tools">
        <div className="container devtool-container">
          <Row>
            <Col lg={6} md={6}>
              <h3 className="tools-heading">
                Cloud Tools <br /> And Platforms We Use
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <p className="tools-para">
                The key to success for a successful DevOps transformation is
                scaling your systems and digital business vulnerability. We are
                DevOps tools and platforms Use for successful DevOps
                implementation:
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col lg={6} md={6} className="pt-5">
              <h5 className="tool-cat-heading pb-2">Cloud Platforms</h5>
              <div className="tools-img-container pb-5">
                <img
                  src="/images/coud-tools/aws.png"
                  className=" mbl-tools pb-3"
                  alt="aws-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/googlecloud.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="google-cloud-tools-image"
                />
                <img
                  src="/images/coud-tools/azure.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="azure-cloud-tools-image"
                />
              </div>

              <h5 className="tool-cat-heading pb-2">
                Configuration Management
              </h5>
              <div className="tools-img-container pb-5">
                <img
                  src="/images/coud-tools/puppet.png"
                  className=" mbl-tools pb-3"
                  alt="puppet-cloud-tools-images"
                />
                <img
                  src="/images/coud-tools/terraform.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="terraform-cloud-tools-image"
                />
                <img
                  src="/images/coud-tools/ansible.png"
                  className=" mbl-tools pd-right pb-3 ps-1"
                  alt="ansible-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/cfengine.png"
                  className=" mbl-tools pb-3"
                  alt="cfengine-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/chef.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="chef-cloud-tool-image"
                />
              </div>

              <h5 className="tool-cat-heading pb-2">Performance & Security</h5>
              <div className="tools-img-container">
                <img
                  src="/images/coud-tools/owasp.png"
                  className=" mbl-tools pb-3"
                  alt="owasp-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/locust.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="locust-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/jmeter.png"
                  className=" mbl-tools pd-right pb-3 ps-1"
                  alt="jmeter-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/sonar.png"
                  className=" mbl-tools pb-3"
                  alt="sonarcube-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/blaze.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="blaze-cloud-tool-image"
                />
              </div>
            </Col>
            <Col lg={6} md={6} className="pt-5">
              <h5 className="tool-cat-heading pb-2">
                Microservices & Architecture Management
              </h5>
              <div className="tools-img-container pb-5">
                <img
                  src="/images/coud-tools/aws.png"
                  className=" mbl-tools pb-3"
                  alt="aws-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/googlecloud.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="googlecloud-tool-image"
                />
                <img
                  src="/images/coud-tools/azure.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="azure-cloud-tool"
                />
              </div>

              <h5 className="tool-cat-heading pb-2">Build Automation</h5>
              <div className="tools-img-container pb-5">
                <img
                  src="/images/coud-tools/puppet.png"
                  className=" mbl-tools pb-3"
                  alt="puppet-cloud-tool"
                />
                <img
                  src="/images/coud-tools/terraform.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="terraform-cloud-tool"
                />
                <img
                  src="/images/coud-tools/ansible.png"
                  className=" mbl-tools pd-right pb-3 ps-1"
                  alt="ansible-cloud-tool"
                />
                <img
                  src="/images/coud-tools/cfengine.png"
                  className=" mbl-tools pb-3"
                  alt="cfengine-cloud-tool"
                />
                <img
                  src="/images/coud-tools/chef.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="chef-cloud-tool-image"
                />
              </div>

              <h5 className="tool-cat-heading pb-2">Alerting & Monitoring</h5>
              <div className="tools-img-container">
                <img
                  src="/images/coud-tools/owasp.png"
                  className=" mbl-tools pb-3"
                  alt="owasp-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/locust.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="locust-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/jmeter.png"
                  className=" mbl-tools pd-right pb-3 ps-1"
                  alt="jmeter-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/sonar.png"
                  className=" mbl-tools pb-3"
                  alt="sonarcube-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/blaze.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="blaze-cloud-tool-image"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section> */}

      {/* <section id="recent-cld-work">
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
              <Link
                href="/portfolio"
                className="about-btn"
                aria-label="View Trimsel cloud case studies"
              >
                View All Cases{" "}
                <Image
                  src="/images/material-symbols_arrow-right-alt.png"
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          <CarouselComponent />
        </div>
      </section> */}

      <section id="client" className="client-section">
        <div className="container mt-5">
          <Stack direction="horizontal">
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
          <div className="row pt-3">
            <div className="col-lg-6 col-md-6">
              <h2 className="client-title">We're A Trusted Growth Partner</h2>
            </div>
            <div className="col-lg-6 col-md-6">
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

      {/* <section id="blog" className="py-5">
        <div className="container blog-container">
          <div className="row py-3">
            <Stack direction="horizontal">
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
                At Trimsel, there is continuous learning that happens as we
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
                    <Button className="card-badge mb-2"><strong>Development</strong></Button>
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
                    <Button className="card-badge mb-2"> <strong> Development </strong></Button>
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
                  <Button className="card-badge my-2"> <strong> Development </strong> </Button>
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
      </section>  */}
      <section id="cloud-insights" className="home-insights py-5">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="badge-abot-btn">
              <Image src="/images/Rectangle-kariot.png" className="me-2" width={15} height={15} alt="" aria-hidden="true" loading="lazy" />
              <p> LATEST CLOUD INSIGHTS </p>
            </div>
          </div>
          <div className="row pt-4 g-4">
            {cloudInsights.map((article) => (
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

      <ContactForm
        heading="Transform Your Business With The Cloud"
        subText="Leverage AWS, Azure, or GCP with expert guidance on migration, architecture, and cost-efficient cloud strategy."
        eventLabel="cloud_service_page"
      />

      <section id="faq">
  <div className="container faq-container">
    <h2 className="faq-heading">Frequently Asked Questions</h2>
    <Accordion defaultActiveKey="0" flush className="py-5">
      <Accordion.Item eventKey="0" className="pb-3">
        <Accordion.Header>
          What does a cloud consulting company do?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            A cloud consulting company like Trimsel helps businesses plan, migrate, and optimize their cloud infrastructure. Our certified AWS, Azure, and GCP experts deliver cloud strategy, architecture, security, and performance solutions for seamless cloud adoption.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="pb-3">
        <Accordion.Header>
          Why choose Trimsel for cloud consulting services in India?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Trimsel is one of the top cloud consulting companies in India with proven experience in multi-cloud deployments, cloud migration services, and cloud engineering. We provide scalable and secure cloud solutions across AWS, Azure, and GCP tailored to your business needs.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="pb-3">
        <Accordion.Header>
          What cloud platforms do you support?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            We support all major public cloud platforms, including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Our cloud consultants design, deploy, and optimize workloads across these platforms using best practices in security, automation, and cost management.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className="pb-3">
        <Accordion.Header>
          What are the benefits of cloud migration consulting?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Cloud migration consulting ensures a smooth transition from on-premise or legacy systems to the cloud. Our cloud migration experts assess your existing infrastructure, design a custom migration plan, and ensure high availability, data security, and business continuity.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className="pb-3">
        <Accordion.Header>
          Do you provide cloud cost optimization services?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes. Trimsel's cloud cost optimization services identify and eliminate unnecessary cloud spend, optimize resource usage, and implement budgeting strategies. We help businesses improve ROI while maintaining performance across AWS, Azure, and GCP.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className="pb-3">
        <Accordion.Header>
          What is cloud-native application development?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Cloud-native development involves building and running scalable applications using modern technologies like containers, microservices, and serverless architecture. We help you build cloud-native apps on AWS Lambda, Azure Functions, Kubernetes, and more.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6" className="pb-3">
        <Accordion.Header>
          How do you ensure cloud security and compliance?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Our cloud security consulting services include IAM implementation, data encryption, security automation, and compliance with standards like HIPAA, GDPR, and ISO 27001. We integrate security into every layer of your cloud architecture.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7" className="pb-3">
        <Accordion.Header>
          Can you support hybrid or multi-cloud strategies?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Absolutely. Trimsel specializes in hybrid and multi-cloud strategies. We help businesses distribute workloads across AWS, Azure, and GCP, implement failover solutions, and avoid vendor lock-in while maintaining centralized monitoring and governance.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8" className="pb-3">
        <Accordion.Header>
          What industries do you serve with cloud consulting?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            We provide cloud consulting services for a wide range of industries including fintech, healthcare, e-commerce, SaaS, and logistics. Our solutions are tailored to meet industry-specific needs such as regulatory compliance, high availability, and scalability.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9" className="pb-3">
        <Accordion.Header>
          How do I get started with your cloud services?
        </Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Simply reach out to our cloud consulting team for an assessment. We'll evaluate your current environment, understand your goals, and propose a personalized roadmap covering cloud strategy, migration, optimization, and ongoing support.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</section>


      {/* <ContactModal title="Need A Dedicated Cloud Partner? Contact Us"/> */}
      <Footer />
    </>
  );
}
