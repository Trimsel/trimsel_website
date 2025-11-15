import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { postJson } from "../../lib/api";
import ArrowRightIcon from "../../components/icons/ArrowRightIcon";
import SlideComponent from "../../components/slideComponent";

const heroStats = [
  "30K+ downloads across iOS, Android, and desktop",
  "10K+ monthly active riders & drivers",
  "590+ daily ride requests processed securely",
];

const overviewStats = [
  { label: "Client", value: "Xaber – Uber Clone" },
  { label: "Industry", value: "Ride-Hailing, Local Business" },
  { label: "Duration", value: "3 months" },
  { label: "Platforms", value: "iOS, Android, Web, Desktop" },
];

const chips = ["iOS & Android", "Web", "Desktop"];

const counters = [
  { label: "Downloads", end: 30, suffix: "K+" },
  { label: "Active Users", end: 10, suffix: "K+" },
  { label: "Request A Ride", end: 590, suffix: "+" },
];

const techLogos = [
  "/images/flutter.png",
  "/images/react-native.png",
  "/images/nodejs-logo.png",
  "/images/aws-logo.png",
  "/images/postgresql-logo.png",
  "/images/devops-logo.png",
];

const relatedStudies = [
  {
    logo: "/images/Group3001.png",
    title: "Ezyhelpers",
    description: "Mobile/web platform for verified home service professionals.",
    href: "/portfolio/ezyhelpers-case-study",
  },
  {
    logo: "/images/kariot-case.png",
    title: "KarIOT",
    description: "AI-enabled smart water management for utilities and campuses.",
    href: "/portfolio/kariot-case-study",
  },
];

export default function Xaber() {
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

  return (
    <>
      <NextSeo
        title="Xaber Case Study – Ride-hailing App (Uber-like) | Trimsel"
        description="How Trimsel built Xaber, a multi-platform ride-hailing solution with booking flows, growth automation, and a scale-ready architecture."
        canonical="https://www.trimsel.com/portfolio/xaber-case-study"
      />
      <Head>
        {[
          {
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            "@id": "https://www.trimsel.com/portfolio/xaber-case-study#case",
            name: "Xaber Case Study – Ride-hailing App",
            headline: "Xaber Case Study – Ride-hailing App",
            description:
              "How Trimsel built Xaber, a multi-platform Uber-like taxi booking solution with web, iOS, Android and desktop apps.",
            inLanguage: "en",
            url: "https://www.trimsel.com/portfolio/xaber-case-study",
            isPartOf: { "@type": "WebSite", "@id": "https://www.trimsel.com/#website" },
            about: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
            author: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
            publisher: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://www.trimsel.com/images/portfolio/xaber-og.jpg",
              width: 1200,
              height: 630,
            },
            image: {
              "@type": "ImageObject",
              url: "https://www.trimsel.com/images/portfolio/xaber-og.jpg",
              width: 1200,
              height: 630,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.trimsel.com/portfolio/xaber-case-study#breadcrumbs",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.trimsel.com/" },
              { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.trimsel.com/portfolio" },
              { "@type": "ListItem", position: 3, name: "Xaber Case Study", item: "https://www.trimsel.com/portfolio/xaber-case-study" },
            ],
          },
        ].map((schema, index) => (
          <script key={`xaber-schema-${index}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
              Xaber
            </p>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
              <div className="space-y-4">
                <Image src="/trimsel-clients/xaber-logo.png" width={211} height={58} alt="Xaber logo" />
                <div className="flex flex-wrap gap-3">
                  {chips.map((chip) => (
                    <span key={chip} className="rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                      {chip}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl font-semibold leading-tight">Uber Clone: Online taxi-booking for your business success</h1>
                <p className="text-lg leading-relaxed text-white/80">
                  If you want to take your taxi business digital, partner with Trimsel for Uber-like app development. We blended best-in-class UX patterns with a DevOps-first foundation so your riders, drivers, and dispatch teams stay in sync.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                >
                  Get started today
                  <Image src="/images/material-symbols_arrow-right-alt.png" width={20} height={20} alt="" />
                </Link>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner">
                <Image src="/images/Group25321.png" width={600} height={400} alt="Xaber hero mockup" className="w-full object-cover" priority />
              </div>
            </div>
            <ul className="mt-10 space-y-2 text-sm text-white/80">
              {heroStats.map((stat) => (
                <li key={stat} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
              <div className="space-y-4 text-lg text-slate-600">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle550.png" width={15} height={15} alt="" loading="lazy" />
                  Overview
                </div>
                <h2 className="text-3xl font-semibold text-slate-900">Xaber – Uber clone app that automates and drives growth</h2>
                <p>
                  The Xaber platform helps taxi businesses deliver on-demand services anywhere, anytime. From instant bookings and ride sharing to rentals and corporate fleets, everything is handled inside one scalable solution.
                </p>
                <p>
                  Entrepreneurs can launch, customise, and expand with Trimsel’s white-label Uber clone that keeps operations simple for riders, drivers, and administrators.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-slate-900 text-white shadow-2xl">
                <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-white/80">Start your project</h3>
                  <p className="mt-2 text-2xl font-semibold">Interested in building something similar?</p>
                  <p className="mt-3 text-sm text-white/90">Request a one-to-one consultation for your next big idea.</p>
                  <form className="mt-5 space-y-3" onSubmit={handleSubmit(onSubmitForm)}>
                    <div>
                      <input
                        {...register("email", {
                          required: { value: true, message: "Email id is required" },
                          pattern: { value: /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/, message: "Enter a valid email address" },
                        })}
                        type="email"
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
          <SlideComponent />
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle550.png" width={15} height={15} alt="" loading="lazy" />
              The challenge
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Xaber – Uber clone app that automates and drives growth for businesses
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              If you want to take your taxi business digital, go for Uber-like app development by partnering with Trimsel. We integrated the
              top features and user experiences from every successful taxi booking app in the market. Our developers customise the flow so
              it stays easy for riders yet unique to your brand.
            </p>
            <div className="mt-8 flex justify-center">
              <Image src="/images/Group25321.png" width={900} height={474} alt="Xaber admin dashboard" className="w-full rounded-3xl" />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-6 text-lg text-slate-600">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle550.png" width={15} height={15} alt="" loading="lazy" />
              The challenge
            </div>
            <h2 className="text-3xl font-semibold text-slate-900">Uber clone for your ride-hailing business success</h2>
            <p>
              We built a white-label Uber clone that supports instant ride booking, rentals, ride sharing, and more. The platform keeps the
              flow effortless for riders while ensuring your dispatchers and drivers handle requests without friction.
            </p>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr,1fr]">
              <div className="space-y-4 text-lg text-slate-600">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle550.png" width={15} height={15} alt="" loading="lazy" />
                  The solution
                </div>
                <h3 className="text-3xl font-semibold text-slate-900">An Uber-like experience tailored to your operations</h3>
                <p>
                  Trimsel delivered a full-stack solution spanning rider apps, driver apps, dispatch consoles, and analytics. Stripe-powered
                  payments, rating systems, and referral programs keep usage growing, while our DevOps pipelines ensure releases stay fast and reliable.
                </p>
              </div>
              <Image src="/images/Group25331.png" width={662} height={603} alt="Xaber solution flow" className="w-full rounded-3xl" />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle550.png" width={15} height={15} alt="" loading="lazy" />
              Tools & Technology
            </div>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900">Tools and technology</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {techLogos.map((logo) => (
                <div key={logo} className="rounded-3xl border border-slate-100 bg-slate-50 p-4 shadow-inner">
                  <Image src={logo} width={140} height={60} alt="Tech logo" className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-slate-900">Experience highlights</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["/images/Frame2.png", "/images/Frame2.png", "/images/Frame2.png"].map((shot, idx) => (
                <div key={`${shot}-${idx}`} className="rounded-3xl border border-slate-100 bg-white p-4 shadow-inner">
                  <Image src={shot} width={360} height={640} alt="Xaber UI preview" className="w-full rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-[32px] border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg shadow-slate-900/5">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    <Image src="/images/Rectangle550.png" width={15} height={15} alt="" loading="lazy" />
                    Get in touch
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold text-slate-900">Ready to launch your ride-hailing platform?</h2>
                  <p className="mt-4 text-lg text-slate-600">
                    Trimsel’s engineers design, build, and operate Uber-like experiences for fleets, taxi operators, and logistics brands worldwide.
                  </p>
                  <Link
                    href="/contact-us"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                  >
                    Get in touch
                    <ArrowRightIcon width={18} height={18} />
                  </Link>
                </div>
                <Image src="/images/Group25331.png" width={520} height={360} alt="CTA graphic" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle550.png" width={15} height={15} alt="" loading="lazy" />
              Related Case Studies
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Read how we help ambitious teams ship faster.</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedStudies.map((study) => (
                <article key={study.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-inner">
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
