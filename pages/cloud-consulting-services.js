import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm";
import { buildServiceJsonLd } from "../lib/serviceSchema";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import CheckIcon from "../components/icons/CheckIcon";
import { motion } from "framer-motion";
import { manropeFont } from "../lib/fonts";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CarouselComponent = dynamic(() => import("../components/carouselComponent"), {
  ssr: false,
  loading: () => <div className="text-center text-muted py-5">Loading success stories…</div>,
});
const ClientLogo = dynamic(() => import("../components/clientLogo"), {
  ssr: false,
  loading: () => <div className="text-center text-muted py-5">Loading client logos…</div>,
});

const faqItems = [
  { question: "What does a cloud consulting company do?", answer: "A cloud consulting company like Trimsel helps businesses plan, migrate, and optimize their cloud infrastructure. Our certified AWS, Azure, and GCP experts deliver cloud strategy, architecture, security, and performance solutions for seamless cloud adoption." },
  { question: "Why choose Trimsel for cloud consulting services in India?", answer: "Trimsel is one of the top cloud consulting companies in India with proven experience in multi-cloud deployments, cloud migration services, and cloud engineering. We provide scalable and secure cloud solutions across AWS, Azure, and GCP tailored to your business needs." },
  { question: "What cloud platforms do you support?", answer: "We support all major public cloud platforms, including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Our cloud consultants design, deploy, and optimize workloads across these platforms using best practices in security, automation, and cost management." },
  { question: "What are the benefits of cloud migration consulting?", answer: "Cloud migration consulting ensures a smooth transition from on-premise or legacy systems to the cloud. Our cloud migration experts assess your existing infrastructure, design a custom migration plan, and ensure high availability, data security, and business continuity." },
  { question: "Do you provide cloud cost optimization services?", answer: "Yes. Trimsel’s cloud cost optimization services identify and eliminate unnecessary cloud spend, optimize resource usage, and implement budgeting strategies. We help businesses improve ROI while maintaining performance across AWS, Azure, and GCP." },
  { question: "What is cloud-native application development?", answer: "Cloud-native development involves building and running scalable applications using modern technologies like containers, microservices, and serverless architecture. We help you build cloud-native apps on AWS Lambda, Azure Functions, Kubernetes, and more." },
  { question: "How do you ensure cloud security and compliance?", answer: "Our cloud security consulting services include IAM implementation, data encryption, security automation, and compliance with standards like HIPAA, GDPR, and ISO 27001. We integrate security into every layer of your cloud architecture." },
  { question: "Can you support hybrid or multi-cloud strategies?", answer: "Absolutely. Trimsel specializes in hybrid and multi-cloud strategies. We help businesses distribute workloads across AWS, Azure, and GCP, implement failover solutions, and avoid vendor lock-in while maintaining centralized monitoring and governance." },
  { question: "What industries do you serve with cloud consulting?", answer: "We provide cloud consulting services for a wide range of industries including fintech, healthcare, e-commerce, SaaS, and logistics. Our solutions are tailored to meet industry-specific needs such as regulatory compliance, high availability, and scalability." },
  { question: "How do I get started with your cloud services?", answer: "Simply reach out to our cloud consulting team for an assessment. We’ll evaluate your current environment, understand your goals, and propose a personalized roadmap covering cloud strategy, migration, optimization, and ongoing support." },
];

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
    faq: faqItems,
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
  const cloudToolCategories = [
    {
      title: "Cloud Platforms",
      logos: [
        { src: "/images/coud-tools/aws.png", alt: "AWS cloud platform logo" },
        { src: "/images/coud-tools/googlecloud.png", alt: "Google Cloud Platform logo" },
        { src: "/images/coud-tools/azure.png", alt: "Microsoft Azure cloud logo" },
      ],
    },
    {
      title: "Configuration Management",
      logos: [
        { src: "/images/coud-tools/puppet.png", alt: "Puppet configuration logo" },
        { src: "/images/coud-tools/terraform.png", alt: "Terraform automation logo" },
        { src: "/images/coud-tools/ansible.png", alt: "Ansible automation logo" },
        { src: "/images/coud-tools/cfengine.png", alt: "CFEngine configuration logo" },
        { src: "/images/coud-tools/chef.png", alt: "Chef configuration logo" },
      ],
    },
    {
      title: "Performance & Security",
      logos: [
        { src: "/images/coud-tools/owasp.png", alt: "OWASP tooling logo" },
        { src: "/images/coud-tools/locust.png", alt: "Locust load testing logo" },
        { src: "/images/coud-tools/jmeter.png", alt: "JMeter testing logo" },
        { src: "/images/coud-tools/sonar.png", alt: "SonarQube scanning logo" },
        { src: "/images/coud-tools/blaze.png", alt: "BlazeMeter testing logo" },
      ],
    },
    {
      title: "Microservices & Architecture",
      logos: [
        { src: "/images/coud-tools/aws.png", alt: "AWS architecture logo" },
        { src: "/images/coud-tools/googlecloud.png", alt: "Google Cloud architecture logo" },
        { src: "/images/coud-tools/azure.png", alt: "Azure architecture logo" },
      ],
    },
    {
      title: "Build Automation",
      logos: [
        { src: "/images/coud-tools/puppet.png", alt: "Puppet tool logo" },
        { src: "/images/coud-tools/terraform.png", alt: "Terraform tool logo" },
        { src: "/images/coud-tools/ansible.png", alt: "Ansible tool logo" },
        { src: "/images/coud-tools/cfengine.png", alt: "CFEngine tool logo" },
        { src: "/images/coud-tools/chef.png", alt: "Chef tool logo" },
      ],
    },
    {
      title: "Alerting & Monitoring",
      logos: [
        { src: "/images/coud-tools/owasp.png", alt: "OWASP monitoring logo" },
        { src: "/images/coud-tools/locust.png", alt: "Locust monitoring logo" },
        { src: "/images/coud-tools/jmeter.png", alt: "JMeter monitoring logo" },
        { src: "/images/coud-tools/sonar.png", alt: "SonarQube monitoring logo" },
        { src: "/images/coud-tools/blaze.png", alt: "BlazeMeter monitoring logo" },
      ],
    },
  ];
  const cloudModels = [
    {
      title: "Public Cloud Consulting",
      bestFor: "Businesses seeking flexible and scalable infrastructure.",
      offers: [
        "Migration to AWS, Azure, or GCP with minimal disruption.",
        "Pay-as-you-go architecture and cost optimization.",
        "High availability and automated scaling capabilities.",
        "Cloud-native development and deployment support.",
      ],
    },
    {
      title: "Multi-Cloud Consulting",
      bestFor: "Enterprises aiming for flexibility and vendor independence.",
      offers: [
        "Seamless integration across AWS, Azure, and GCP.",
        "Centralized governance and security posture.",
        "Cross-cloud workload optimization.",
        "Unified monitoring and cloud operations.",
      ],
    },
    {
      title: "Hybrid Cloud Consulting",
      bestFor: "Businesses balancing private and public cloud usage.",
      offers: [
        "Hybrid strategy consulting and workload orchestration.",
        "Seamless data flow between environments.",
        "Strong security and compliance frameworks.",
        "Custom integration aligned with industry regulations.",
      ],
    },
    {
      title: "Distributed Cloud Consulting",
      bestFor: "Businesses requiring edge computing and real-time processing.",
      offers: [
        "Low-latency architecture with global reach.",
        "Cloud-native deployment across edge locations.",
        "Resilient design for uptime and fault tolerance.",
        "Optimized resource utilization and performance tuning.",
      ],
    },
  ];
  const adoptionPhases = [
    {
      title: "IT Infrastructure Assessment",
      body: "We evaluate your existing IT environment, application dependencies, and performance baselines to identify gaps and build a secure, scalable cloud migration roadmap with cost-saving opportunities.",
    },
    {
      title: "Cloud Strategy & Planning",
      body: "Our multi-cloud consultants architect reliable, compliant, and future-ready solutions tailored to your objectives and growth roadmap.",
    },
    {
      title: "Development & Cloud Deployment",
      body: "We enable cloud-native development using serverless infrastructure, containers, and DevOps automation to streamline CI/CD deployments and accelerate time-to-market.",
    },
    {
      title: "Cloud Optimization & Cost Efficiency",
      body: "Our engineers optimize spending by eliminating underused resources, implementing auto-scaling, and enforcing governance policies for maximum ROI.",
    },
    {
      title: "Ongoing Cloud Support & Security",
      body: "With managed support we deliver 24/7 monitoring, patching, backup management, and compliance enforcement across AWS, Azure, or GCP environments.",
    },
  ];
  const valueProps = [
    {
      title: "Scalable Cloud Architecture",
      body: "Future-ready systems that scale with your business. We design resilient infrastructures with load balancing, auto-scaling, and failover to ensure fast, reliable experiences worldwide.",
    },
    {
      title: "Secure & Compliant Infrastructure",
      body: "Security-first mindset aligned with GDPR, HIPAA, and ISO 27001. IAM, encryption, threat detection, and continuous compliance monitoring are built into every layer.",
    },
    {
      title: "Cloud Expertise Across AWS, Azure & GCP",
      body: "Certified consultants with deep platform knowledge deliver multi-cloud strategies, migrations, and optimizations tailored to your objectives and industry demands.",
    },
    {
      title: "Cloud-Powered Innovation",
      body: "Leverage serverless, containers, AI/ML, and automation to launch intelligent experiences faster. We enable rapid prototyping, continuous improvement, and faster time-to-market.",
    },
  ];
  const cloudServiceCards = [
    {
      icon: "/images/cloud-mig.png",
      title: "Cloud Migration Services & Adoption Consulting",
      body: (
        <>
          Transition seamlessly to the cloud with our cloud migration services. Our AWS cloud experts, Azure consultants, and GCP specialists design the best-fit cloud adoption strategy, ensuring minimal disruption, optimized performance, and cost efficiency.
        </>
      ),
    },
    {
      icon: "/images/cloud-optim.png",
      title: "Cloud Cost Optimization & Performance Tuning",
      body: (
        <>
          Cloud cost optimization services help you get the most out of your investments. We analyse usage, eliminate waste, and enable auto-scaling so AWS, Azure, and GCP workloads stay efficient and performant.
        </>
      ),
    },
    {
      icon: "/images/cloud-infra.png",
      title: "Cloud Engineering & Infrastructure Management",
      body: (
        <>
          Ensure a resilient, high-performing cloud infrastructure with our engineering services—from serverless and Kubernetes to automation. If you’re building SaaS or large-scale web solutions, our <Link href="/web-development-company-chennai" className="underline decoration-brand/40 underline-offset-4">web development expertise</Link> keeps it seamless.
        </>
      ),
    },
    {
      icon: "/images/cloud-app.png",
      title: "Cloud-Native App Development & Modernization",
      body: (
        <>
          Modernize applications with serverless computing, microservices, and containerization. Our services ensure apps are scalable, secure, and future-proof across AWS, Azure, or Google Cloud while optimizing <Link href="/devops-consulting-services" className="underline decoration-brand/40 underline-offset-4">DevOps workflows</Link>.
        </>
      ),
    },
    {
      icon: "/images/cloud-arch.png",
      title: "Cloud Architecture Design & Automation",
      body: (
        <>
          Our certified architects craft scalable, highly available, and cost-effective cloud solutions. We implement automation to streamline deployments, improve fault tolerance, and enhance security posture.
        </>
      ),
    },
  ];
  return (
    <>
      <NextSeo
        title="Cloud Consulting in Chennai, India | AWS, Azure & GCP Experts"
        description="Trimsel offers expert cloud consulting in Chennai, India, including AWS, Azure & GCP consulting, migration, and cost optimization. Get started today!"
        canonical="https://www.trimsel.com/cloud-consulting-services"
        openGraph={{
          type: 'website',
          url: 'https://www.trimsel.com/cloud-consulting-services',
          title: 'Cloud Consulting Services in Chennai, India | AWS, Azure & GCP Experts',
          description: 'Expert Cloud Consulting Services in Chennai, India. We offer cloud migration, cloud cost optimization, AWS, Azure & GCP consulting. Get in touch today!',
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
      <section className="relative overflow-hidden">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0 h-[120vh]">
          <Image
            src="/CloudConsultingservice.webp"
            alt="Cloud background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Subtle overlay for better text readability */}
        </div>

        <div className="relative z-10">
          <Header page="cloud" />
          <section
            className="relative min-h-[120vh] w-full flex items-center justify-center px-8 py-12 text-center"
          >
            {/* Content Container */}
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 text-center">
              <div className="flex flex-col items-center text-center text-white px-4">
                <h1
                  className={`max-w-5xl text-6xl lg:text-7xl font-bold leading-tight ${manropeFont.className}`}>
                  Cloud Consulting & Implementation
                  <span className={`block max-w-5xl text-6xl lg:text-7xl font-bold text-white mt-3 ${manropeFont.className}`}>
                    Services in Chennai, India
                  </span>
                </h1>
                <p className="mt-8 text-gray-200 text-xl md:text-2xl max-w-4xl leading-relaxed">
                  An AI-driven logistics optimization platform that revolutionizes how <br />
                  businesses plan, execute, and manage transportation.Real-time insights <br />
                  enable smarter decisions, while end-to-end visibility ensures greater <br />
                  transparency across every stage of the supply chain.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button className="rounded-xs px-10 py-3 text-xl text-white hover:scale-105 transition-all duration-300 shadow-xl"
                    style={{
                      background: "linear-gradient(90deg, rgba(28, 125, 189, 1) 0%, rgba(5, 168, 152, 1) 100%)",
                    }}>
                    Schedule Consultation
                  </button>

                  <button className="rounded-xs bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 text-white font-semibold hover:bg-white/20 transition-all duration-300">
                    View Services
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="bg-white" id="cloud-about">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <Image src="/images/Rectangle-kariot.png" width={20} height={20} alt="" aria-hidden="true" loading="lazy" />
            What we do
          </div>
          <div className="mt-6 space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">Expert Cloud Consulting Services for Businesses of All Sizes</h2>
            <p className="text-lg text-slate-600">
              As one of the top cloud computing companies in India, we provide comprehensive consulting—strategy, migration, automation, and cost optimization. Our certified AWS, Azure, and GCP experts keep your environment secure, scalable, and cost-efficient while working seamlessly with <Link href="/devops-consulting-services" className="underline decoration-brand/40 underline-offset-4">DevOps pipelines</Link> and <Link href="/web-development-company-chennai" className="underline decoration-brand/40 underline-offset-4">web application teams</Link>.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cloudServiceCards.map((service) => (
              <div key={service.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5">
                <Image src={service.icon} width={80} height={80} alt="" className="mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {cloudModels.map((model) => (
              <div key={model.title} className="rounded-3xl border border-white/40 bg-white/90 p-6 shadow-lg shadow-slate-900/5">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                  <CheckIcon width={18} height={18} className="text-brand" />
                  {model.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  <strong>Best for:</strong> {model.bestFor}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  What we offer
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                  {model.offers.map((offer) => (
                    <li key={offer} className="flex gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-brand"></span>
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" id="cloud-aspect">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
            <h2 className="text-3xl font-semibold text-slate-900">
              Complete Cloud Adoption Solutions: Secure, Scalable, and Cost-Effective
            </h2>
            <div className="flex items-start lg:justify-end">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-slate-900/5 transition hover:border-brand hover:text-brand"
              >
                <Image src="/images/slightly-smiling-face.gif" alt="Smiling face icon" width={40} height={40} loading="lazy" />
                Talk to a Cloud Expert
              </Link>
            </div>
          </div>
          <p className="mt-6 text-lg text-slate-600">
            Navigating the cloud journey requires a strategic approach. We assist in every phase—from infrastructure assessment and architecture planning to deployment, automation, and cloud cost optimization—delivering seamless transformation across AWS, Azure, and GCP environments.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {adoptionPhases.map((phase) => (
              <div key={phase.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                <h3 className="text-lg font-semibold text-slate-900">{phase.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-white" id="cloud-value">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <Image
              src="/images/Rectangle-kariot.png"
              width={18}
              height={18}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            Our Value Proposition
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900">Why Choose Trimsel for Cloud Consulting?</h2>
          <p className="mt-4 text-lg text-slate-600">
            We deliver seamless transformation with minimal risk and maximum efficiency—optimizing cost, enhancing security, and driving measurable business value across AWS, Azure, and GCP.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
            aria-label="Speak with Trimsel cloud experts"
          >
            Talk to Our Cloud Experts Today <ArrowRightIcon width={18} height={18} />
          </Link>
        </div>
      </section>

      <section id="support" className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                <Image
                  src="/images/Rectangle-kariot.png"
                  width={18}
                  height={18}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
                Platform coverage
              </div>
              <h3 className="text-3xl font-semibold text-white">Leading Cloud Platforms We Support</h3>
              <p className="text-lg text-slate-300">
                As certified cloud experts, Trimsel provides consulting and support across all major cloud platforms—Amazon Web Services (AWS),
                Microsoft Azure, and Google Cloud Platform (GCP). Whether you&rsquo;re planning a new deployment or managing a multi-cloud environment,
                our specialists ensure secure, scalable, and high-performing infrastructure tailored to your business goals.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand"></span>
                  <span>Architect, migrate, and optimize workloads with best practices for resilience and cost efficiency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand"></span>
                  <span>Automation-first delivery using IaC, GitOps, and security guardrails.</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30">
              {[
                { src: "/images/awscloud-min.png", alt: "AWS Cloud Consulting Partner" },
                { src: "/images/googlecloud-min.png", alt: "GCP Cloud Consulting Partner" },
                { src: "/images/azurecloud-min.png", alt: "Azure Cloud Consulting Partner" },
              ].map((logo) => (
                <div key={logo.src} className="flex h-20 w-32 items-center justify-center rounded-2xl bg-white/80 p-3 shadow-lg shadow-black/10">
                  <Image
                    src={logo.src}
                    width={120}
                    height={80}
                    alt={logo.alt}
                    className="h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold text-slate-900">Your Trusted Cloud Consulting Partner in Chennai, India</h3>
          <p className="mt-4 text-lg text-slate-600">
            We help businesses improve agility, reduce costs, and accelerate digital transformation. Our cloud consulting services are trusted by startups and enterprises alike for reliability, flexibility, and measurable outcomes.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Vendor Agnostic",
                body: (
                  <>
                    We deliver <strong>multi-cloud solutions</strong> across AWS, Azure, and GCP—free from vendor lock-in.
                    Our cloud-agnostic approach ensures <strong>flexibility, scalability, and cost efficiency</strong> tailored to your business goals.
                  </>
                ),
              },
              {
                title: "Skilled & Certified Engineers",
                body: (
                  <>
                    Certified experts in <strong>AWS, Azure, GCP, Kubernetes, Terraform, and serverless</strong> architectures.
                    Specialized teams in strategy, infrastructure automation, and DevOps ensure <strong>secure, future-ready deployments</strong>.
                  </>
                ),
              },
              {
                title: "Diverse Industry Expertise",
                body: (
                  <>
                    Delivered cloud consulting across <strong>Fintech, Healthcare, Retail, SaaS, and AI/ML</strong>.
                    Experts in <strong>hybrid</strong> and <strong>multi-cloud</strong> deployments with governance and compliance baked in.
                  </>
                ),
              },
              {
                title: "Proven Track Record",
                body: (
                  <>
                    100+ successful migration projects with zero-downtime strategies.
                    Recognized partner for cloud cost optimization—clients have reduced spend by <strong>up to 40%</strong>.
                  </>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                <h4 className="text-xl font-semibold text-slate-900">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 px-6 py-12 shadow-2xl shadow-black/30 sm:px-10">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            <Image
              src="/images/Rectangle-kariot.png"
              width={18}
              height={18}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            Let’s talk cloud
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                Accelerate your business with expert cloud consulting services
              </h2>
              <p className="mt-4 text-slate-300">
                Whether you’re planning a migration, cost optimization, or full modernization—our certified AWS, Azure, and GCP consultants are here to help. Let’s turn your cloud vision into scalable results.
              </p>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                aria-label="Contact Trimsel for cloud consulting"
              >
                Contact Us <ArrowRightIcon width={18} height={18} />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clouded-hero.webp"
                width={420}
                height={300}
                alt="Cloud consulting experts"
                className="rounded-3xl shadow-xl shadow-black/20"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white" id="cloud-tools">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
              Cloud Tools
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900">Cloud Tools & Platforms We Use</h2>
            <p className="mt-4 text-lg text-slate-600">
              The right toolkit makes cloud adoption faster, safer, and more predictable. We pair the best platforms,
              configuration management, and observability suites so every engagement is production-ready from day one.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {cloudToolCategories.map((category) => (
              <div key={category.title} className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg shadow-slate-900/5">
                <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {category.logos.map((logo) => (
                    <div
                      key={`${category.title}-${logo.src}`}
                      className="flex h-14 w-20 items-center justify-center rounded-2xl bg-slate-50 p-2 shadow-inner"
                    >
                      <Image
                        src={logo.src}
                        width={80}
                        height={40}
                        alt={logo.alt}
                        className="h-10 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" id="client">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <Image
              src="/images/Rectangle-kariot.png"
              width={18}
              height={18}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            Our Clients
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <h2 className="text-3xl font-semibold text-slate-900">We’re a trusted growth partner</h2>
            <p className="text-lg text-slate-600">
              There’s continuous learning as we deliver cloud programs across industries. We constantly update our playbooks with the latest innovations so every engagement benefits from fresh ideas.
            </p>
          </div>
          <div className="mt-10 rounded-3xl border border-white/60 bg-white p-6 shadow-lg shadow-slate-900/5">
            <ClientLogo />
          </div>
        </div>
      </section>

      <section className="bg-slate-900" id="cloud-insights">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" aria-hidden="true" loading="lazy" />
            Latest Cloud Insights
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {cloudInsights.map((article) => (
              <article key={article.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  {article.tag}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  <Link href={article.href} className="transition hover:text-brand">
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-slate-200">{article.excerpt}</p>
                <Link
                  href={article.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:text-brand"
                  aria-label={`Read ${article.title}`}
                >
                  Read More
                  <ArrowRightIcon width={18} height={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm
        heading="Transform Your Business With The Cloud"
        subText="Leverage AWS, Azure, or GCP with expert guidance on migration, architecture, and cost-efficient cloud strategy."
        eventLabel="cloud_service_page"
      />

      <section className="bg-white" id="faq">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map(({ question, answer }) => (
              <details key={question} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-inner">
                <summary className="cursor-pointer text-lg font-semibold text-slate-900">
                  {question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>


      {/* <ContactModal title="Need A Dedicated Cloud Partner? Contact Us"/> */}
      <Footer />
    </>
  );
}
