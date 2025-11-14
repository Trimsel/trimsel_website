import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { NextSeo } from "next-seo";
import { postJson } from "../../lib/api";
import ArrowRightIcon from "../../components/icons/ArrowRightIcon";

const heroStats = [
  "100+ sites deployed across cities, industrial parks, and resorts",
  "5Cr+ litres monitored with automated, forecast-aware controls",
  "IoT + AI platform that integrates with SCADA, BMS, and LoRaWAN/NB-IoT sensors",
];

const overviewStats = [
  { label: "Client", value: "Karikala (KarIOT)" },
  { label: "Industry", value: "Smart Water, IoT, AI/ML" },
  { label: "Duration", value: "6 months" },
  { label: "Platforms", value: "IoT, iOS, Android, Web" },
];

const counters = [
  { label: "Sites Deployed", end: 100, suffix: "+" },
  { label: "Litres Managed", end: 5, suffix: "Cr+" },
  { label: "Clients Impacted", end: 200, suffix: "+" },
];

const outcomes = [
  { label: "NRW ↓", value: "12–18%", detail: "Non-revenue water reduction (pilot DMAs)" },
  { label: "Energy ↓", value: "8–15%", detail: "Forecast-aware pump scheduling" },
  { label: "MAPE", value: "8–12%", detail: "Demand forecast accuracy" },
  { label: "Tickets ↓", value: "20–30%", detail: "Low-pressure / no-water complaints" },
  { label: "Payback", value: "6–12 mo", detail: "Hardware + software ROI" },
];

const techLogos = {
  development: [
    { src: "/images/iot-logo.png", alt: "IoT sensors" },
    { src: "/images/aws-logo.png", alt: "AWS cloud hosting" },
    { src: "/images/nodejs-logo.png", alt: "Node.js backend" },
    { src: "/images/react-native.png", alt: "React Native dashboard" },
    { src: "/images/postgresql-logo.png", alt: "PostgreSQL database" },
    { src: "/images/devops-logo.png", alt: "DevOps automation" },
  ],
  design: [
    { src: "/images/figma.png", alt: "Figma design" },
    { src: "/images/photoshop.png", alt: "Photoshop design" },
  ],
};

const screenShots = [
  "/images/kariot-dashboard1.png",
  "/images/kariot-dashboard2.png",
  "/images/kariot-dashboard3.png",
];

const relatedStudies = [
  {
    logo: "/images/Group3001.png",
    title: "Ezyhelpers",
    description: "Mobile/web platform for verified home service professionals.",
    href: "/portfolio/ezyhelpers-case-study",
  },
  {
    logo: "/images/Group3002.png",
    title: "Xaber",
    description: "Ride-hailing platform inspired by Uber for scalable taxi operations.",
    href: "/portfolio/xaber-case-study",
  },
];

const faqItems = [
  {
    question: "Can you detect leaks without acoustic sensors?",
    answer:
      "Yes. We baseline night flow and pressure per DMA and raise anomalies when residuals spike for sustained windows. Acoustic data improves localization but isn’t required.",
  },
  {
    question: "Do operators lose control?",
    answer: "No. The optimizer proposes schedules and your operator approves or overrides. Every change is logged for audit.",
  },
  {
    question: "What’s needed for a 4-week pilot?",
    answer:
      "2–4 DMAs with flow/pressure/level, pump run-time signals, and gateway access. We handle ingestion and dashboards; you provide field access.",
  },
  {
    question: "How often do models retrain?",
    answer: "Weekly by default with drift checks. Urgent retrains can be triggered after topology changes or major events.",
  },
];

const ctaHighlights = [
  "AI, IoT, and cloud engineers aligned to your KPIs",
  "Optional NDA before we review telemetry or topology",
  "Roadmap, pilot, and scale playbooks proven with utilities",
];

export default function Kariot() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [counterOn, setCounterOn] = useState(false);

  async function onSubmitForm(values) {
    try {
      await postJson("/api/newcontact", values);
      reset();
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  }

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CaseStudy",
      "@id": "https://www.trimsel.com/portfolio/kariot-case-study#case",
      name: "KarIOT Case Study – AI-Enabled Smart Water Management",
      headline: "KarIOT Case Study – AI-Enabled Smart Water Management",
      description:
        "Trimsel engineered KarIOT, an IoT and AI/ML platform for smart water management with real-time monitoring, demand forecasting, leak detection, and cloud scalability.",
      inLanguage: "en",
      url: "https://www.trimsel.com/portfolio/kariot-case-study",
      isPartOf: { "@type": "WebSite", "@id": "https://www.trimsel.com/#website" },
      about: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      author: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      publisher: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.trimsel.com/images/portfolio/kariot-og.jpg",
        width: 1200,
        height: 630,
      },
      image: {
        "@type": "ImageObject",
        url: "https://www.trimsel.com/images/portfolio/kariot-og.jpg",
        width: 1200,
        height: 630,
      },
      about: [
        { "@type": "Thing", name: "Non-revenue water reduction" },
        { "@type": "Thing", name: "Demand forecasting" },
        { "@type": "Thing", name: "Leak detection" },
        { "@type": "Thing", name: "Pump scheduling optimization" },
      ],
      audience: [{ "@type": "Audience", name: "Utilities" }],
      measurableOutcome: ["NRW down 12–18%", "Energy cost −8–15%", "Forecast MAPE 8–12%", "Tickets −20–30%"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.trimsel.com/portfolio/kariot-case-study#breadcrumbs",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.trimsel.com/" },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.trimsel.com/portfolio" },
        {
          "@type": "ListItem",
          position: 3,
          name: "KarIOT Case Study",
          item: "https://www.trimsel.com/portfolio/kariot-case-study",
        },
      ],
    },
  ];

  return (
    <>
      <NextSeo
        title="KarIOT Case Study – Smart IoT + AI Water Management | Trimsel"
        description="See how Trimsel enabled KarIOT to deliver real-time water management with AI demand forecasting, leak detection, and cloud automation for cities and industry."
        canonical="https://www.trimsel.com/portfolio/kariot-case-study"
        openGraph={{
          type: "article",
          url: "https://www.trimsel.com/portfolio/kariot-case-study",
          title: "KarIOT Case Study – Smart IoT + AI Water Management | Trimsel",
          description:
            "Real-time water management with AI demand forecasting, leak detection, and forecast-aware pump scheduling.",
          locale: "en_IN",
          images: [
            {
              url: "https://www.trimsel.com/images/portfolio/kariot-og.jpg",
              width: 1200,
              height: 630,
              alt: "Trimsel KarIOT smart water management case study",
            },
          ],
          site_name: "Trimsel",
          article: {
            section: "Case Study",
            tags: ["Case Study", "IoT", "AI/ML", "Water Management", "Smart City", "Trimsel"],
          },
        }}
        twitter={{
          handle: "@TrimselSoftwares",
          site: "@TrimselSoftwares",
          cardType: "summary_large_image",
          title: "Case Study: KarIOT Smart Water Management",
          description:
            "How Trimsel engineered the KarIOT platform with IoT + AI: demand forecasting, leak detection, and automation.",
        }}
        additionalMetaTags={[
          { name: "robots", content: "index, follow" },
          { name: "twitter:title", content: "Case Study: KarIOT Smart Water Management" },
          {
            name: "twitter:description",
            content: "How Trimsel engineered the KarIOT platform with IoT + AI: demand forecasting, leak detection, and automation.",
          },
          { name: "twitter:image:alt", content: "Trimsel KarIOT smart water management case study" },
        ]}
      />

      <Head>
        {jsonLd.map((schema, i) => (
          <script key={`kariot-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>

      <main>
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <Header />
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
              <span className="mx-2 text-slate-500">&middot;</span>
              <Link href="/portfolio" className="hover:text-brand">
                Portfolio
              </Link>
              <span className="mx-2 text-slate-500">&middot;</span>
              KarIOT
            </p>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-4">
                <Image src="/images/kariot-logo.png" width={160} height={75} alt="KarIOT logo" />
                <h1 className="text-4xl font-semibold leading-tight">KarIOT: IoT + AI-Enabled Smart Water Management</h1>
                <p className="text-lg leading-relaxed text-white/80">
                  DMA-level monitoring, LoRaWAN/NB-IoT connectivity, human-in-the-loop automation, canary deployments, and SCADA/BMS integrations.
                  KarIOT delivers a single pane of glass for utilities, campuses, and resorts to track, forecast, and optimize every litre.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner">
                <h3 className="text-lg font-semibold text-white">Project snapshot</h3>
                <p className="mt-3 text-sm text-white/80">
                  Unified IoT + AI platform with real-time telemetry, forecast-aware scheduling, and automated regulatory reports.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                >
                  Plan something similar
                  <ArrowRightIcon width={18} height={18} />
                </Link>
              </div>
            </div>
            <ul className="mt-10 space-y-2 text-sm text-white/80">
              {heroStats.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
                  Overview
                </div>
                <h2 className="text-3xl font-semibold text-slate-900">
                  Enabling data-driven, sustainable water management with IoT + AI
                </h2>
                <p>
                  KarIOT empowers government agencies, commercial complexes, and communities to track supply, detect anomalies, and automate pump/valve controls remotely. Actionable dashboards help reduce water loss, improve reporting, and meet sustainability targets.
                </p>
                <p>
                  Interested in similar transformation? Explore{" "}
                  <Link href="/ai-development-company" className="text-brand underline-offset-4 hover:underline">
                    AI & ML development
                  </Link>
                  ,{" "}
                  <Link href="/devops-consulting-services" className="text-brand underline-offset-4 hover:underline">
                    DevOps (MLOps/AIOps)
                  </Link>
                  ,{" "}
                  <Link href="/cloud-consulting-services" className="text-brand underline-offset-4 hover:underline">
                    Cloud consulting
                  </Link>
                  , or{" "}
                  <Link href="/contact-us" className="text-brand underline-offset-4 hover:underline">
                    contact us
                  </Link>{" "}
                  for a strategy session.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-slate-900 text-white shadow-2xl">
                <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-white/80">Start your project</h3>
                  <p className="mt-2 text-2xl font-semibold">Interested in building something similar?</p>
                  <p className="mt-3 text-sm text-white/90">Request a one-to-one consultation for your next big idea.</p>
                  <form className="mt-5 space-y-3" onSubmit={handleSubmit(onSubmitForm)}>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        {...register("email", {
                          required: { value: true, message: "Email id is required" },
                          pattern: {
                            value: /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/,
                            message: "Enter a valid email address",
                          },
                        })}
                        type="email"
                        id="email"
                        placeholder="Enter Email Address"
                        className="w-full rounded-2xl border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none transition focus:border-white focus:bg-white/20"
                      />
                      {(errors?.email?.message || errors?.email?.pattern?.message) && (
                        <p className="mt-2 text-xs text-red-200">{errors?.email?.message || errors?.email?.pattern?.message}</p>
                      )}
                    </div>
                    <button type="submit" className="w-full rounded-2xl bg-white/90 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-white">
                      Book a consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {overviewStats.map(({ label, value }) => (
                <div key={label} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {counters.map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-white/60 bg-white p-6 text-center shadow-lg shadow-slate-900/5">
                    <p className="text-3xl font-semibold text-slate-900">
                      {counterOn && <CountUp start={0} end={metric.end} duration={2} delay={0} />}
                      <span className="ml-1 text-2xl">{metric.suffix}</span>
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-500">{metric.label}</p>
                  </div>
                ))}
              </div>
            </ScrollTrigger>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
                  The challenge
                </div>
                <h3 className="text-3xl font-semibold text-slate-900">Manual systems and water waste</h3>
                <p className="text-lg text-slate-600">
                  Before KarIOT, water supply management relied on manual readings, reactive maintenance, and limited transparency—leading to leaks, wastage, and high costs. The team needed a scalable, real-time solution for monitoring, analytics, and automated control.
                </p>
              </div>
              <Image src="/images/kariot-challenge.png" width={550} height={448} alt="Kariot challenges" className="w-full rounded-2xl" />
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
                  The solution
                </div>
                <h3 className="text-3xl font-semibold text-slate-900">IoT + AI with cloud automation</h3>
                <p className="text-lg text-slate-600">
                  Trimsel architected a cloud-native platform that ingests live sensor data, applies short-term demand forecasting and leak/anomaly detection, and recommends forecast-aware pump/valve schedules. Our{" "}
                  <Link href="/devops-consulting-services" className="text-brand underline-offset-4 hover:underline">
                    DevOps
                  </Link>{" "}
                  and{" "}
                  <Link href="/cloud-consulting-services" className="text-brand underline-offset-4 hover:underline">
                    cloud teams
                  </Link>{" "}
                  ensure high uptime, secure operations, and rapid iterative releases.
                </p>
              </div>
              <Image src="/images/kar-solution.png" width={480} height={470} alt="Kariot solution" className="w-full rounded-2xl" />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
                  Results
                </div>
                <h3 className="text-3xl font-semibold text-slate-900">Measurable savings and impact</h3>
                <p className="text-lg text-slate-600">
                  Customers now enjoy real-time visibility, proactive alerts for leaks or supply issues, and automated regulatory reports. The platform reduces water waste, energy use, and service complaints—supporting sustainability targets across public and private utilities.
                </p>
                <p className="text-sm text-slate-600">
                  Want to discuss your IoT or AI roadmap?{" "}
                  <Link href="/ai-development-company#contact" className="text-brand underline-offset-4 hover:underline">
                    Talk to our AI team
                  </Link>
                  .
                </p>
              </div>
              <Image src="/images/kariot-hero.png" width={550} height={448} alt="Kariot results" className="w-full rounded-2xl" />
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
              Outcomes
            </div>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900">AI outcomes: forecast, prevent, save</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {outcomes.map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-inner">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-600">
              We combine demand forecasting, leak/anomaly detection, and forecast-aware scheduling to cut water loss and energy costs while improving reliability.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5">
            <h3 className="text-2xl font-semibold text-slate-900">Run a 4-week AI pilot</h3>
            <p className="mt-3 text-sm text-slate-600">
              Data audit → model fit → live alerts & forecast-aware schedules. Typical pilots surface hidden leaks within the first month.
            </p>
            <Link
              href="/ai-development-company#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-brand hover:text-brand"
            >
              Talk to an AI expert
              <ArrowRightIcon width={18} height={18} />
            </Link>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
              Technology
            </div>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900">Tools and technology</h3>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Development</h4>
                <div className="mt-4 flex flex-wrap gap-4">
                  {techLogos.development.map((logo) => (
                    <div key={logo.alt} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-inner">
                      <Image src={logo.src} width={160} height={60} alt={logo.alt} className="h-10 w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Design & Cloud</h4>
                <div className="mt-4 flex flex-wrap gap-4">
                  {techLogos.design.map((logo) => (
                    <div key={logo.alt} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-inner">
                      <Image src={logo.src} width={140} height={50} alt={logo.alt} className="h-10 w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
              Product experience
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {screenShots.map((shot) => (
                <div key={shot} className="rounded-3xl border border-slate-100 bg-white p-4 shadow-inner">
                  <Image src={shot} width={360} height={640} alt="KarIOT screenshot" className="w-full rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
                  Ready to collaborate
                </div>
                <h3 className="mt-6 text-3xl font-semibold text-slate-900">Ready to start your IoT or cloud transformation?</h3>
                <p className="mt-4 text-lg text-slate-600">
                  Whether you’re modernizing water infrastructure or shipping AI-powered hardware, we design, build, and scale the digital backbone—IoT, cloud, DevOps, and analytics.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {ctaHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRightIcon width={18} height={18} className="mt-1 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                  >
                    Get in touch
                    <Image src="/images/material-symbols_arrow-right-alt.png" width={20} height={20} alt="" />
                  </Link>
                  <Link
                    href="/contact-us#contact-insights"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-brand hover:text-brand"
                  >
                    Preview our insights
                  </Link>
                </div>
              </div>
              <Image src="/images/abt-cta.webp" width={520} height={520} alt="Call to action illustration" className="w-full max-w-md justify-self-center" />
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
              FAQ
            </div>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900">Frequently Asked Questions</h3>
            <div className="mt-8 space-y-4">
              {faqItems.map(({ question, answer }) => (
                <details key={question} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-inner">
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900">{question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Ready to build your next digital solution?</h3>
                  <p className="mt-4 text-lg text-slate-200">Partner with Trimsel to ship secure, scalable platforms across IoT, mobile, web, and cloud.</p>
                  <Link
                    href="/contact-us"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                  >
                    Get in touch
                    <ArrowRightIcon width={18} height={18} />
                  </Link>
                </div>
                <Image src="/images/ezycta.png" width={520} height={360} alt="Call to action" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
              Related case studies
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Read how we help ambitious teams ship faster.</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedStudies.map((study) => (
                <article key={study.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                  <div className="flex items-center justify-between">
                    <Image src={study.logo} width={120} height={60} alt={`${study.title} logo`} />
                    <ArrowRightIcon width={20} height={20} className="text-slate-400" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{study.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{study.description}</p>
                  <Link href={study.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                    Read Case Study
                    <ArrowRightIcon width={18} height={18} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
