import Headers from "../components/headers";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import ClientLogo from "../components/clientLogo";
import ContactForm from "../components/ContactForm";
import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { buildServiceJsonLd } from "../lib/serviceSchema";
import CheckIcon from "../components/icons/CheckIcon";

const faqItems = [{"question": "What does a DevOps consulting company do?", "answer": "A DevOps consulting company like Trimsel helps businesses implement automation, continuous integration, CI/CD pipelines, and cloud-native infrastructure. We bridge the gap between development and operations to ensure faster, more reliable software delivery."}, {"question": "Why choose Trimsel for DevOps consulting services in India?", "answer": "Trimsel is a trusted DevOps consulting firm in India with global delivery capabilities. Our certified engineers specialize in infrastructure automation, Kubernetes consulting, and cloud DevOps solutions tailored to your business needs."}, {"question": "How much do DevOps services cost?", "answer": "The cost of DevOps services depends on the project scope, infrastructure complexity, and automation level required. Trimsel offers scalable DevOps service packages designed for startups, SMEs, and enterprise businesses."}, {"question": "What are the benefits of hiring a DevOps service provider?", "answer": "DevOps providers streamline SDLC, reduce deployment errors, improve security, and foster collaboration through automation and continuous delivery practices."}, {"question": "What DevOps automation tools do you work with?", "answer": "We work with Jenkins, GitLab CI/CD, GitHub Actions, Terraform, Docker, Kubernetes, Ansible, and cloud-native services from AWS, Azure, and GCP."}, {"question": "Can Trimsel help with Kubernetes consulting services?", "answer": "Yes. We implement and manage Kubernetes clusters on EKS, AKS, and GKE, handle Helm-based deployments, and optimize container workloads for scale."}, {"question": "Do you provide managed DevOps services?", "answer": "Absolutely. We offer 24/7 monitoring, incident response, CI/CD management, and infrastructure maintenance so your teams can focus on product delivery."}, {"question": "How long does DevOps implementation take?", "answer": "Engagement timelines vary, but most organizations start seeing measurable improvements in 4–8 weeks with Trimsel’s structured DevOps roadmap."}, {"question": "Can I hire a dedicated DevOps engineer from Trimsel?", "answer": "Yes, you can hire full-time or part-time DevOps engineers experienced in cloud automation, CI/CD pipelines, observability, and DevSecOps practices."}, {"question": "Do you support cloud and DevOps integration?", "answer": "We modernize infrastructure on AWS, Azure, and GCP, implement automation, and optimize cloud operations using proven DevOps best practices."}];

const toolLogos = [
  { src: "/images/tools-image/jenkins.png", alt: "Jenkins" },
  { src: "/images/tools-image/github.png", alt: "GitHub" },
  { src: "/images/tools-image/bamboo.png", alt: "Atlassian Bamboo" },
  { src: "/images/tools-image/kubernetes.png", alt: "Kubernetes" },
  { src: "/images/tools-image/docker.png", alt: "Docker" },
  { src: "/images/tools-image/terraform.png", alt: "HashiCorp Terraform" },
  { src: "/images/tools-image/teamcity.png", alt: "JetBrains TeamCity" },
  { src: "/images/tools-image/bash.png", alt: "GNU Bash" },
  { src: "/images/tools-image/linux_containers.png", alt: "Linux Containers" },
  { src: "/images/tools-image/amazon_EKS.png", alt: "Amazon EKS" },
  { src: "/images/tools-image/Amazon_ECS.png", alt: "Amazon ECS" },
  { src: "/images/tools-image/azure_dev_ops.png", alt: "Azure DevOps" },
  { src: "/images/tools-image/elasticsearch.png", alt: "Elasticsearch" },
  { src: "/images/tools-image/logstash.png", alt: "Logstash" },
  { src: "/images/tools-image/kibana.png", alt: "Kibana" },
  { src: "/images/tools-image/beats.png", alt: "Elastic Beats" },
  { src: "/images/tools-image/amazon_web_services.png", alt: "Amazon Web Services" },
  { src: "/images/tools-image/azure.png", alt: "Microsoft Azure" },
  { src: "/images/tools-image/cloud_development_kit.png", alt: "AWS Cloud Development Kit" },
  { src: "/images/tools-image/datadog.png", alt: "Datadog" },
  { src: "/images/tools-image/gitlab.png", alt: "GitLab" },
];

const heroHighlights = [
  "60+ CI/CD pipelines automated with 99.95% uptime targets",
  "Certified DevOps engineers across AWS, Azure, and GCP",
  "Secure-by-design workflows with DevSecOps guardrails",
];

const differentiators = [
  {
    icon: "/images/devch-icon.png",
    title: "Complex Delivery Expertise",
    body:
      "Navigate monolith-to-microservices migrations, hybrid cloud, and compliance-heavy environments with confidence.",
  },
  {
    icon: "/images/devch-icon1.png",
    title: "Certified DevOps Engineers",
    body: "AWS, Azure, Kubernetes, GitOps, and Terraform specialists who combine strategy with hands-on build support.",
  },
  {
    icon: "/images/devch-icon2.png",
    title: "Security-Driven Automation",
    body:
      "DevSecOps baked into every pipeline with policy-as-code, secrets management, and container/runtime protection.",
  },
  {
    icon: "/images/devch-icon3.png",
    title: "Managed DevOps Support",
    body: "24/7 releases, monitoring, and incident response so your teams focus on features instead of infrastructure firefighting.",
  },
];

export default function DevOps() {
  const devopsArticles = [
    {
      title: "DevOps Automation Roadmap",
      excerpt: "See how we structure discovery, CI/CD, security, and observability to ship faster without breaking releases.",
      href: "/blog",
      tag: "DevOps Playbook",
    },
    {
      title: "Kubernetes & Cloud Runbooks",
      excerpt: "Explore Trimsel’s guides on operating EKS/AKS/GKE, optimizing FinOps, and keeping pipelines compliant.",
      href: "/blog",
      tag: "Engineering Insights",
  },
  ];
  const [activePillar, setActivePillar] = useState(0);

const devopsPillars = [
  {
    title: "Continuous Integration (CI)",
    description:
      "Automate builds and tests so every code commit is validated within minutes. We use Jenkins, GitHub Actions, and GitLab CI to keep repos stable.",
    bulletsLeft: [
      "Automated builds & unit/integration testing",
      "GitOps workflows across GitHub, GitLab, CircleCI",
      "Parallel testing + static analysis to catch regressions",
    ],
    bulletsRight: [
      "Artifact management and promotion flows",
      "Quality gates with coverage, lint, and policy checks",
      "ChatOps notifications for faster feedback loops",
    ],
  },
  {
    title: "Continuous Delivery",
    description:
      "Ship features safely with automated deployments, blue/green rollouts, and environment parity so releases stay predictable.",
    bulletsLeft: [
      "Automated staging/prod deployments",
      "Blue/green & canary strategies baked into pipelines",
      "Feature flag integrations for progressive delivery",
    ],
    bulletsRight: [
      "Rollback & disaster recovery automation",
      "Release orchestration across microservices",
      "Compliance approvals and audit trails",
    ],
  },
  {
    title: "Infrastructure as Code (IaC)",
    description:
      "Codify infrastructure with Terraform, CloudFormation, and Pulumi so every environment is versioned, repeatable, and reviewable.",
    bulletsLeft: [
      "Modular Terraform/Crossplane stacks",
      "Git-based change control with policy guardrails",
      "Automated drift detection and remediation",
    ],
    bulletsRight: [
      "Multi-cloud landing zones for AWS, Azure, GCP",
      "Secrets + state management via Vault and SSM",
      "Cost optimization baked into IaC pipelines",
    ],
  },
  {
    title: "Configuration Management",
    description:
      "Keep fleets consistent with Ansible, Puppet, and Chef. Immutable patterns ensure repeatable deploys across VMs, containers, and edge.",
    bulletsLeft: [
      "Configuration as Code playbooks (Ansible, Puppet, Chef)",
      "Immutable infrastructure with Docker/Kubernetes",
      "Secrets & parameter management via Vault/Key Vault",
    ],
    bulletsRight: [
      "Dynamic config updates & feature toggles",
      "Policy automation using OPA/CIS benchmarks",
      "Golden AMI/container pipelines for compliance",
    ],
  },
  {
    title: "DevSecOps & Security Automation",
    description:
      "Bake security into every stage with shift-left testing, automated compliance, and continuous threat scanning across the SDLC.",
    bulletsLeft: [
      "Security-as-Code policies enforced in pipelines",
      "Shift-left scanning (SAST/DAST/IAST)",
      "Automated compliance for ISO, SOC 2, GDPR, HIPAA",
    ],
    bulletsRight: [
      "Cloud & container hardening (Falco, Aqua, Prisma)",
      "CI/CD credential & secret governance",
      "Runtime protection with WAF, IDS, and SIEM hooks",
    ],
  },
  {
    title: "Continuous Monitoring & Logging",
    description:
      "End-to-end observability using Prometheus, Datadog, ELK, and OpenTelemetry so teams detect issues before customers do.",
    bulletsLeft: [
      "Centralized logging (ELK, Loki, Splunk)",
      "APM + distributed tracing (Datadog, New Relic, Jaeger)",
      "SLO/SLA dashboards with automated alerts",
    ],
    bulletsRight: [
      "KPI reporting for engineering + product teams",
      "Synthetic testing and canary health checks",
      "Incident response runbooks + ChatOps automation",
    ],
  },
  {
    title: "Kubernetes & Cloud DevOps",
    description:
      "Design, run, and optimize EKS/AKS/GKE clusters with GitOps, autoscaling, and multi-cloud governance.",
    bulletsLeft: [
      "GitOps deployments with Argo CD & Flux",
      "Autoscaling, HPA/VPA, and cost-aware scheduling",
      "Service mesh + ingress security (Istio, Linkerd)",
    ],
    bulletsRight: [
      "Hybrid/multi-cloud workload orchestration",
      "Serverless + edge compute patterns",
      "RBAC, policy enforcement, and supply-chain security",
    ],
  },
];

  const serviceJsonLd = buildServiceJsonLd({
    slug: "devops-consulting-services",
    serviceName: "DevOps Consulting & Automation Services",
    serviceType: "DevOps Consulting",
    description:
      "CI/CD pipelines, Kubernetes consulting, infrastructure as code, release management, and managed DevOps solutions.",
    offers: [
      "DevOps Services & Solutions",
      "CI/CD Pipeline Automation",
      "Kubernetes Consulting Services",
      "Infrastructure Automation",
      "DevOps Migration & Release Management",
      "Managed DevOps Services",
      "Hire DevOps Engineer",
    ],
    faq: [
      {
        question: "What does a DevOps consulting company do?",
        answer:
          "A DevOps consulting company like Trimsel helps businesses implement automation, continuous integration, CI/CD pipelines, and cloud-native infrastructure for faster, more reliable software delivery.",
      },
      {
        question: "Why choose Trimsel for DevOps consulting services in India?",
        answer:
          "Trimsel is a trusted DevOps consulting firm with certified engineers who specialize in infrastructure automation, Kubernetes consulting, and cloud DevOps solutions tailored to your goals.",
      },
      {
        question: "How much do DevOps services cost?",
        answer:
          "Pricing depends on scope, infrastructure complexity, and the level of automation you require. Trimsel provides scalable packages that fit startups, SMEs, and enterprise teams.",
      },
      {
        question: "What are the benefits of hiring a DevOps service provider?",
        answer:
          "Partnering with a DevOps provider streamlines the SDLC, reduces deployment errors, improves security, and fosters collaboration through automation and continuous delivery practices.",
      },
      {
        question: "What DevOps automation tools do you work with?",
        answer:
          "We work with Jenkins, GitLab CI/CD, GitHub Actions, Terraform, Docker, Kubernetes, Ansible, and cloud-native services from AWS, Azure, and GCP.",
      },
      {
        question: "Can Trimsel help with Kubernetes consulting services?",
        answer:
          "Yes. We implement and manage Kubernetes clusters on EKS, AKS, and GKE, handle Helm-based deployments, and optimize container workloads for scale.",
      },
      {
        question: "Do you provide managed DevOps services?",
        answer:
          "Absolutely. We offer 24/7 monitoring, incident response, CI/CD management, and infrastructure maintenance so your teams can focus on product delivery.",
      },
      {
        question: "How long does DevOps implementation take?",
        answer:
          "Engagement timelines vary, but most organizations start seeing measurable improvements in 4–8 weeks with Trimsel’s structured DevOps roadmap.",
      },
      {
        question: "Can I hire a dedicated DevOps engineer from Trimsel?",
        answer:
          "Yes, you can hire full-time or part-time DevOps engineers experienced in cloud automation, CI/CD pipelines, observability, and DevSecOps practices.",
      },
      {
        question: "Do you support cloud and DevOps integration?",
        answer:
          "We modernize infrastructure on AWS, Azure, and GCP, implement automation, and optimize cloud operations using proven DevOps best practices.",
      },
    ],
    breadcrumbs: [
      { name: "Home", item: "https://www.trimsel.com/" },
      {
        name: "DevOps Consulting Services",
        item: "https://www.trimsel.com/devops-consulting-services",
      },
    ],
  });
  return (
    <>
<NextSeo
  title="Best DevOps Consulting Services | DevOps Automation & Cloud Solutions"
  description="Trimsel offers DevOps consulting, CI/CD pipelines, Kubernetes consulting, and infrastructure automation to optimize your cloud and deployment workflows."
  canonical="https://www.trimsel.com/devops-consulting-services"
  openGraph={{
    type: "website",
    url: "https://www.trimsel.com/devops-consulting-services",
    title: "Best DevOps Consulting Services | DevOps Automation & Cloud Solutions",
    description:
      "Trimsel offers DevOps consulting, CI/CD pipelines, Kubernetes consulting, and infrastructure automation to optimize your cloud and deployment workflows.",
    locale: "en_IN",
    site_name: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/devops-banner.webp",
        width: 1200,
        height: 630,
        alt: "Trimsel DevOps engineers implementing CI/CD automation",
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
            key={`devops-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <Headers />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
              <span className="mx-2 text-slate-600">·</span>
              DevOps Consulting Services
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              Leading DevOps Consulting & Automation Services
            </h1>
            <p className="text-lg leading-relaxed text-slate-300">
              Trimsel is a top-rated DevOps company in India helping teams build scalable CI/CD pipelines, leverage Kubernetes, and automate
              infrastructure for high-speed, secure, and reliable deployments.
            </p>
            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                aria-label="Book a DevOps consultation with Trimsel"
              >
                Get a DevOps Consultation <Image src="/images/material-symbols_arrow-right-alt.png" width={20} height={20} alt="" />
              </Link>
              <p className="mt-4 text-sm text-slate-400">
                60+ pipelines automated with 99.95% uptime targets for SaaS, BFSI, and ecommerce teams.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/devops-banner.webp"
              width={594}
              height={480}
              alt="DevOps automation and consulting services"
              className="w-full max-w-[520px]"
              priority
              quality={75}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 520px"
            />
          </div>
        </div>
      </section>


      <section id="about-dev" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
            What we do
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[2fr,3fr,auto] lg:items-start">
            <h2 className="text-3xl font-semibold text-slate-900">
              End-to-End DevOps Services & Solutions to Accelerate Cloud Transformation
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              We streamline software delivery with automation tooling, cloud-native practices, CI/CD pipelines, infrastructure as code, and
              Kubernetes deployments. Every engagement is designed to scale with your roadmap.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-slate-900/5 transition hover:border-brand hover:text-brand"
              aria-label="Talk to Trimsel’s DevOps consultants"
            >
              Get a Consultation
              <Image src="/images/material-symbols_arrow-right-alt.png" width={20} height={20} alt="" />
            </Link>
          </div>
                    <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr,2fr]">
            <div className="space-y-3">
              {devopsPillars.map((pillar, idx) => (
                <button
                  key={pillar.title}
                  type="button"
                  onClick={() => setActivePillar(idx)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.3em] transition ${
                    activePillar === idx
                      ? "border-brand bg-brand/10 text-brand"
                      : "border-slate-200 bg-white text-slate-600 hover:border-brand/40"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}. {pillar.title}
                </button>
              ))}
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                <Image src="/images/continn.png" width={48} height={48} alt="" aria-hidden="true" loading="lazy" />
                {devopsPillars[activePillar].title}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{devopsPillars[activePillar].description}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <ul className="space-y-2 text-sm text-slate-600">
                  {devopsPillars[activePillar].bulletsLeft.map((bullet) => (
                    <li key={`left-${bullet}`} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm text-slate-600">
                  {devopsPillars[activePillar].bulletsRight.map((bullet) => (
                    <li key={`right-${bullet}`} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="dev-implementation">
  <div className="container">
    <Stack direction="horizontal">
      <div className="badge-abot-btn">
        <img src="/images/Rectangle-kariot.png" className="me-2" alt="" aria-hidden="true" />
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

        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 px-6 py-12 shadow-2xl shadow-black/30 sm:px-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
                  Get in touch
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-white">
                  Scale smarter with Trimsel’s DevOps consulting services
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Partner with engineers who understand your infrastructure inside out. We align strategy and execution to optimize CI/CD
                  pipelines, automate cloud workflows, and accelerate deployment cycles with confidence.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                  aria-label="Contact Trimsel for DevOps consulting"
                >
                  Get Started <Image src="/images/material-symbols_arrow-right-alt.png" width={18} height={18} alt="" />
                </Link>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner">
                <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-200">How we help</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {[
                    "Roadmaps that connect product goals to DevOps automation",
                    "SRE support for uptime, observability, and FinOps",
                    "Managed DevOps services so your teams focus on features",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon width={18} height={18} className="mt-1 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>



        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
              Why Trimsel
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-[2fr,3fr]">
              <h3 className="text-3xl font-semibold text-slate-900">Why choose Trimsel for DevOps consulting?</h3>
              <p className="text-lg text-slate-600">
                We help enterprises scale faster with automation, cloud-native architectures, and measurable DevOps programs—from discovery to managed operations.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                  <Image src={item.icon} width={60} height={60} alt={item.title} loading="lazy" />
                  <h4 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
              Tools we use
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-[2fr,3fr]">
              <h3 className="text-3xl font-semibold text-slate-900">
                DevOps automation platforms we trust for seamless CI/CD
              </h3>
              <p className="text-lg text-slate-600">
                From source control to observability, we pair the right tooling for each engagement—Jenkins, GitHub Actions, Terraform,
                Kubernetes, Docker, Prometheus, plus AWS, Azure, and GCP cloud services.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {toolLogos.map(({ src, alt }) => (
                <div
                  key={src}
                  className="flex h-24 items-center justify-center rounded-3xl border border-slate-100 bg-slate-50 p-4 shadow-inner"
                >
                  <Image
                    src={src}
                    width={150}
                    height={75}
                    alt={`${alt} logo`}
                    className="h-10 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
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

        <section id="client" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
              Our clients
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-[2fr,3fr]">
              <h2 className="text-3xl font-semibold text-slate-900">We’re a trusted growth partner</h2>
              <p className="text-lg text-slate-600">
                Continuous learning and experimentation power every Trimsel engagement, so your DevOps programs benefit from fresh playbooks
                and proven frameworks.
              </p>
            </div>
            <div className="mt-10 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
              <ClientLogo />
            </div>
          </div>
        </section>
      <section id="devops-insights" className="home-insights bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="badge-abot-btn flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" aria-hidden="true" loading="lazy" />
              <p> LATEST DEVOPS INSIGHTS </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {devopsArticles.map((article) => (
              <article
                key={article.title}
                className="insight-card flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-inner"
              >
                <p className="insight-tag text-xs font-semibold uppercase tracking-[0.2em] text-brand">{article.tag}</p>
                <h3 className="insight-title mt-3 text-2xl font-semibold text-slate-900">
                  <Link href={article.href}>{article.title}</Link>
                </h3>
                <p className="insight-excerpt mt-3 flex-1 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
                <Link href={article.href} className="about-btn mt-6 inline-flex items-center gap-2" aria-label={`Read ${article.title}`}>
                  Read More
                  <Image src="/images/material-symbols_arrow-right-alt.png" width={18} height={18} alt="" loading="lazy" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map(({ question, answer }) => (
              <details key={question} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-inner">
                <summary className="cursor-pointer text-lg font-semibold text-slate-900">{question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactForm
        heading="Need A High-Performance DevOps Partner?"
        subText="Automate releases, improve CI/CD, and scale securely with proven DevOps and infrastructure engineering support."
        eventLabel="devops_service_page"
      />

      {/* <ContactModal title="Need A DevOps Service? Contact Us" /> */}
      <Footer />
    </>
  );
}
  
