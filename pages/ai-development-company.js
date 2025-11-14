import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Footer from "../components/footer";
import { buildServiceJsonLd } from "../lib/serviceSchema";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import CheckIcon from "../components/icons/CheckIcon";

const ClientLogo = dynamic(() => import("../components/clientLogo"), { ssr: false });

const faqItems = [
  {
    question: "Why choose Trimsel as your AI development company in Chennai?",
    answer:
      "Trimsel has an expert AI development team in Chennai who specialize in building production-ready AI solutions — from predictive analytics and NLP models to generative AI agents — tailored for real business outcomes.",
  },
  {
    question: "What AI development services do you offer?",
    answer:
      "We offer custom AI agent development, machine learning models, predictive analytics, NLP, computer vision, generative AI solutions, and MLOps deployment.",
  },
  {
    question: "How much does AI development cost?",
    answer:
      "AI solution cost depends on scope, complexity, dataset availability, and deployment needs. We provide scalable packages based on prototype, MVP, and enterprise requirements.",
  },
  {
    question: "Do you offer MLOps and post-launch support?",
    answer:
      "Yes. We help deploy, monitor, and maintain AI models in production with CI/CD, retraining pipelines, and infrastructure automation.",
  },
  {
    question: "How long does it take to build an AI solution?",
    answer:
      "Initial prototypes or POCs can take 4–6 weeks. Full-scale enterprise AI rollouts generally span 3–6 months depending on integrations, data availability, and compliance requirements.",
  },
];

const aboutHighlights = [
  { title: "Identify High-Impact Use Cases", icon: "/images/list1.png" },
  { title: "Build Custom AI Models", icon: "/images/automation.png" },
  { title: "Integrate Seamlessly with Your Systems", icon: "/images/launch.png" },
  { title: "Ensure Ethical & Reliable AI", icon: "/images/target.png" },
];

const whyTrimsel = [
  {
    title: "Tailored AI Solutions, Not Templates",
    body:
      "We build bespoke models and workflows that align with your data landscape, compliance needs, and product roadmap—no off-the-shelf shortcuts.",
  },
  {
    title: "Strong Technical Expertise",
    body:
      "Data scientists, ML engineers, and cloud architects partner to deliver NLP, computer vision, predictive analytics, and generative AI programs.",
  },
  {
    title: "Seamless Integration",
    body:
      "Your AI solution should fit into existing CRMs, ERPs, and apps. We focus on APIs, SDKs, and automation pipelines that minimize disruption.",
  },
  {
    title: "Rapid Prototyping to Scale",
    body:
      "Validate ideas quickly with iterative prototypes, then scale confidently using IaC, MLOps, and continuous feedback loops.",
  },
  {
    title: "Data Privacy & Compliance",
    body:
      "We adopt responsible AI principles and adhere to GDPR, HIPAA, SOC 2, and ISO mandates with encryption-first architectures.",
  },
  {
    title: "End-to-End Partnership",
    body:
      "From discovery to ongoing optimization, we stay engaged so your AI products evolve with new data, regulations, and business goals.",
  },
];

const aiServices = [
  {
    title: "Custom AI Development",
    body:
      "Build AI-powered applications tailored to your use case—from fraud detection to intelligent copilots—engineered to your goals.",
    icon: "/images/ab-testing.png",
  },
  {
    title: "AI Consulting & Strategy",
    body:
      "We assess readiness, identify high-impact opportunities, and blueprint the infrastructure required for long-term success.",
    icon: "/images/ab-mobile.png",
  },
  {
    title: "Machine Learning Solutions",
    body:
      "Predictive analytics, classification, and clustering models that uncover patterns, forecast demand, and personalize experiences.",
    icon: "/images/performance-load.png",
  },
  {
    title: "Natural Language Processing",
    body:
      "Chatbots, summarizers, sentiment analyzers, and text classifiers that understand human language and automate conversations.",
    icon: "/images/cyber-security.png",
  },
  {
    title: "Computer Vision",
    body:
      "Object detection, quality inspection, facial recognition, and intelligent tagging that turn images into actionable data.",
    icon: "/images/automation-test.png",
  },
  {
    title: "Robotic Process Automation",
    body:
      "Automate repetitive workflows across finance, operations, and support so teams focus on higher-value work.",
    icon: "/images/robotpa.png",
  },
];

const processPrinciples = [
  {
    title: "Use-Case Clarity",
    body: "We define the business objective and target ROI before touching data or code.",
    icon: "/images/simplicity-image.webp",
  },
  {
    title: "Data Reliability",
    body: "We ensure datasets are clean, unbiased, and production-ready for consistent performance.",
    icon: "/images/thumb-up.webp",
  },
  {
    title: "Explainability",
    body: "Stakeholders get transparent insights into model decisions so adoption and governance stay simple.",
    icon: "/images/transparencyicon.webp",
  },
];

const scopeChecklist = [
  "What business problem are we solving with AI?",
  "Do you have enough data—or do we need to generate or collect it?",
  "What metrics (accuracy, latency, ROI) define success?",
  "Where will the model run—cloud, on-device, or edge?",
];

const engagementStages = [
  {
    title: "Prototype & Experimentation",
    body:
      "Validate feasibility fast. We prepare datasets, stand up early NLP/CV/predictive models, and benchmark value before large investments.",
  },
  {
    title: "Production Deployment & MLOps",
    body:
      "Move proven models into secure CI/CD pipelines with monitoring, retraining, and governance so AI stays accurate in the real world.",
  },
];

const ctaBenefits = [
  "Free consultation with senior AI strategists",
  "End-to-end design, engineering, and DevOps support",
  "Solutions that stay scalable, compliant, and explainable",
];

const aiArticles = [
  {
    title: "How To Scope An AI MVP",
    excerpt: "Use our discovery checklist to validate data readiness, model choice, and expected ROI before writing code.",
    href: "/blog",
    tag: "AI Strategy",
  },
  {
    title: "Building Safe Generative AI Products",
    excerpt: "See Trimsel’s guardrails for LLM security, prompt testing, and continuous monitoring in production.",
    href: "/blog",
    tag: "Generative AI",
  },
];

const aiToolCategories = [
  {
    title: "Languages & Frameworks",
    description: "Backend foundations for AI products, APIs, and orchestration layers.",
    tools: ["Python", "TypeScript", "Go", "FastAPI", "Node.js"],
  },
  {
    title: "ML & Generative AI Platforms",
    description: "Model training, fine-tuning, and LLM orchestration stacks we rely on.",
    tools: ["PyTorch", "TensorFlow", "LangChain", "OpenAI", "Vertex AI", "Anthropic"],
  },
  {
    title: "Data & Pipelines",
    description: "Pipelines that keep datasets fresh, reliable, and analysis-ready.",
    tools: ["Airflow", "dbt", "Snowflake", "BigQuery", "Kafka", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure that helps us deploy and monitor AI safely at scale.",
    tools: ["AWS SageMaker", "Azure ML", "GCP Vertex AI", "Kubernetes", "Docker", "Argo CD"],
  },
];

export default function Quality() {
  const serviceJsonLd = buildServiceJsonLd({
    slug: "ai-development-company",
    serviceName: "AI Development Services (Chennai)",
    serviceType: "Artificial Intelligence Development",
    description: "Custom AI agents, ML models, NLP, computer vision, generative AI, and MLOps.",
    offers: [
      "Custom AI Agent Development",
      "Machine Learning Model Development",
      "Natural Language Processing (NLP)",
      "Computer Vision & Predictive Analytics",
      "Generative AI Solutions",
      "MLOps & AI Consulting",
    ],
    faq: faqItems,
    breadcrumbs: [
      { name: "Home", item: "https://www.trimsel.com/" },
      { name: "AI Development Company", item: "https://www.trimsel.com/ai-development-company" },
    ],
  });

  return (
    <>
      <NextSeo
        title="AI Development Company in Chennai, India | Trimsel"
        description="Trimsel is a leading AI development company in Chennai, India specializing in custom AI agents, machine learning models, NLP, and generative AI solutions."
        canonical="https://www.trimsel.com/ai-development-company"
        openGraph={{
          type: "website",
          url: "https://www.trimsel.com/ai-development-company",
          title: "Best AI Development Company in Chennai, India | Trimsel",
          description:
            "Trimsel is a top AI development company in Chennai, India helping enterprises build scalable AI agents, predictive models, NLP, and generative AI products.",
          locale: "en_IN",
          site_name: "Trimsel",
          images: [
            {
              url: "https://www.trimsel.com/images/qa-hero-img.webp",
              width: 1200,
              height: 630,
              alt: "Trimsel AI engineers building machine learning solutions in Chennai",
            },
          ],
          article: {
            section: "AI Development",
            tags: ["AI Development", "Machine Learning", "Generative AI", "NLP", "Chennai"],
          },
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@TrimselSoftwares",
          site: "@TrimselSoftwares",
        }}
        additionalMetaTags={[
          { name: "twitter:title", content: "AI Development Experts in Chennai – Trimsel" },
          {
            name: "twitter:description",
            content: "Build production-ready AI agents, ML models, and generative AI products with Trimsel’s Chennai team.",
          },
          { name: "twitter:image:alt", content: "Trimsel AI engineers collaborating on machine learning models" },
        ]}
      />

      <Head>
        {serviceJsonLd.map((schema, index) => (
          <script key={`ai-dev-schema-${index}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>

      <main>
        <section className="bg-gradient-to-b from-white via-slate-50 to-white">
          <Header />
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                <Link href="/" className="hover:text-brand">
                  Home
                </Link>
                <span className="mx-2 text-slate-300">·</span> AI Development Services
              </p>
              <h1 className="text-4xl font-semibold text-slate-900">AI Development Company in Chennai</h1>
              <p className="text-lg leading-relaxed text-slate-600">
                Unlock innovation with Trimsel’s end-to-end AI development services. We design intelligent solutions tailored to your business
                goals—from custom models to seamless integration. Whether you’re a startup scaling fast or an enterprise modernizing workflows,
                we build AI that solves real problems, not just proofs of concept.
              </p>
              <div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                  aria-label="Talk to an AI Expert"
                >
                  Talk to an AI Expert <ArrowRightIcon width={20} height={20} />
                </Link>
                <p className="mt-4 text-sm text-slate-500">
                  40+ AI products shipped across BFSI, healthcare, logistics, and SaaS with audited MLOps pipelines.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/qa-hero-img.webp"
                width={650}
                height={423}
                alt="Trimsel AI engineers collaborating in Chennai"
                className="w-full max-w-[520px]"
                priority
                quality={70}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
              />
            </div>
          </div>
        </section>

        <section id="client" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" aria-hidden="true" loading="lazy" />
              Our Clients
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <h2 className="text-3xl font-semibold text-slate-900">Trusted Digital Transformation Partner</h2>
              <p className="text-lg text-slate-600">
                From fast-growing startups to industry leaders, Trimsel brings bold ideas to life. Whether it’s
                <Link href="/web-development-company-chennai" className="underline decoration-brand/40 underline-offset-4">
                  {" "}
                  custom software
                </Link>
                ,
                <Link href="/cloud-consulting-services" className="underline decoration-brand/40 underline-offset-4">
                  {" "}
                  cloud adoption
                </Link>
                ,
                <Link href="/mobile-app-development-chennai" className="underline decoration-brand/40 underline-offset-4">
                  {" "}
                  mobile experiences
                </Link>
                , or AI-driven products, we build solutions that scale, perform, and future-proof your business.
              </p>
            </div>
            <div className="mt-10 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
              <ClientLogo />
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
              Build your AI product
            </div>
            <div className="mt-6 grid gap-10 lg:grid-cols-2">
              <div className="space-y-5">
                <h2 className="text-3xl font-semibold text-slate-900">Transform Your Business with AI Development</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  AI has moved from concept to competitive advantage. Our Chennai-based team partners with you to design practical, real-world
                  AI solutions—multilingual copilots for BFSI brands, predictive maintenance for logistics fleets, lead-qualifying chatbots for
                  SaaS teams, and more.
                </p>
                <p className="text-lg leading-relaxed text-slate-600">
                  Whether you’re leveraging data for smarter decisions, automating workflows via
                  <Link href="/devops-consulting-services" className="underline decoration-brand/40 underline-offset-4">
                    {" "}
                    DevOps automation
                  </Link>
                  , or building intelligent products, we focus on measurable outcomes with
                  <Link href="/cloud-consulting-services" className="underline decoration-brand/40 underline-offset-4">
                    {" "}
                    cloud-native architecture guidance
                  </Link>
                  .
                </p>
              </div>
              <div className="rounded-3xl border border-white/60 bg-white p-6 shadow-lg shadow-slate-900/5">
                <h3 className="text-xl font-semibold text-slate-900">Why Trimsel for AI Development?</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {aboutHighlights.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <Image src={item.icon} width={40} height={40} alt={`${item.title} icon`} loading="lazy" />
                      <p className="mt-3 text-sm font-semibold text-slate-900">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-value" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[2fr,3fr]">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">Why Trimsel for AI Development?</h2>
                <p className="mt-4 text-lg text-slate-600">
                  Choosing the right partner determines how quickly AI delivers value. We treat AI as a business accelerator—not a buzzword—so
                  every engagement focuses on measurable outcomes, governance, and long-term scale.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {whyTrimsel.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-inner">
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="ai-services" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[2fr,3fr]">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
                  What we do
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">AI Development Services We Offer</h2>
              </div>
              <p className="text-lg leading-relaxed text-slate-600">
                Expect faster decisions, streamlined operations, better customer experiences, and tangible ROI from your AI initiatives. We
                focus on outcomes—not just code.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aiServices.map((service) => (
                <div key={service.title} className="rounded-3xl border border-white/60 bg-white p-6 shadow-lg shadow-slate-900/5">
                  <Image src={service.icon} width={60} height={60} alt={`${service.title} icon`} loading="lazy" />
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 px-6 py-12 shadow-2xl shadow-black/30 sm:px-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
                  Get in touch
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-white">Experience enterprise-grade AI with Trimsel</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  From ideation to MLOps, we help teams design, deploy, and govern AI responsibly.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {ctaBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckIcon width={18} height={18} className="mt-1 text-brand" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                  aria-label="Contact Trimsel’s AI team"
                >
                  <ArrowRightIcon width={18} height={18} />
                  Contact Us
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/ctambbg.webp"
                  width={520}
                  height={520}
                  alt="Discuss AI projects with Trimsel"
                  className="w-full max-w-sm rounded-[32px] shadow-2xl shadow-black/40"
                  quality={70}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IDAAAADQAgCdASoIAAgAAkA4JQBOgCH/89JAAA=="
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="ai-engagement" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-5">
                <h2 className="text-3xl font-semibold text-slate-900">Build and scale AI with a proven two-stage model</h2>
                {engagementStages.map((stage) => (
                  <div key={stage.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-inner">
                    <h3 className="text-xl font-semibold text-slate-900">{stage.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{stage.body}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/ensure-side.webp"
                  width={520}
                  height={460}
                  alt="AI engineering workflow"
                  className="w-full max-w-md rounded-[32px] shadow-2xl shadow-slate-900/20"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr]">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">Our AI Development Process</h2>
                <p className="mt-4 text-lg text-slate-600">
                  We follow a transparent, agile approach to launch production-ready AI with predictable outcomes.
                </p>
                <div className="mt-8 grid gap-4">
                  {processPrinciples.map((principle) => (
                    <div key={principle.title} className="flex gap-4 rounded-3xl border border-white/60 bg-white p-4 shadow-lg shadow-slate-900/5">
                      <Image src={principle.icon} width={48} height={48} alt={`${principle.title} icon`} loading="lazy" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{principle.title}</h3>
                        <p className="text-sm text-slate-600">{principle.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="mt-10 text-xl font-semibold text-slate-900">Based on these parameters, we scope out:</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {scopeChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/60 bg-slate-900 p-6 text-white shadow-xl shadow-slate-900/30">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">What we deliver</p>
                <h3 className="mt-4 text-2xl font-semibold">End-to-End AI Engineering & Deployment</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-200">
                  From feasibility and prototyping to scalable MLOps, we build custom NLP, CV, predictive, and generative models—then integrate
                  them securely into your products and workflows. Continuous monitoring and retraining pipelines keep them accurate and
                  business-relevant.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-tools" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[2fr,3fr]">
              <h2 className="text-3xl font-semibold text-slate-900">Technology Stack We Use</h2>
              <p className="text-lg text-slate-600">
                Our engineers blend reliable programming languages, modern ML platforms, and production-ready MLOps tooling to keep models
                accurate and secure across mobile, web, and cloud surfaces.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {aiToolCategories.map((category) => (
                <div key={category.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{category.title}</p>
                  <p className="mt-3 text-sm text-slate-600">{category.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <li
                        key={`${category.title}-${tool}`}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-insights" className="bg-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" aria-hidden="true" loading="lazy" />
              Latest AI insights
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold text-white">Keep up with Trimsel’s AI playbooks</h2>
                <p className="mt-4 text-lg text-slate-300">
                  How-to guides on monetization, retention, DevOps automation, and AI-driven product growth—straight from our delivery teams.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Featured reads</p>
                <ul className="mt-4 space-y-4 text-sm text-slate-200">
                  {aiArticles.map((article) => (
                    <li key={article.title}>
                      <p className="text-xs uppercase tracking-[0.3em] text-brand">{article.tag}</p>
                      <Link href={article.href} className="text-lg font-semibold text-white transition hover:text-brand">
                        {article.title}
                      </Link>
                      <p className="text-sm text-slate-200">{article.excerpt}</p>
                      <Link
                        href={article.href}
                        className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand transition hover:text-white"
                        aria-label={`Read ${article.title}`}
                      >
                        Read More
                        <ArrowRightIcon width={16} height={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ContactForm
          heading="Ready to Build an AI App?"
          subText="Speak with our data scientists & engineers to scope your AI use-case."
          eventLabel="ai_service_page"
        />

        <section id="faq" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-slate-600">Answers to the most common questions teams ask before starting AI initiatives.</p>
            <div className="mt-8 space-y-4">
              {faqItems.map(({ question, answer }) => (
                <details key={question} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-inner">
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900">{question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
