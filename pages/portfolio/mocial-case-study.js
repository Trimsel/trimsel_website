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

const heroStats = [
  "30K+ downloads across iOS & Android",
  "10K+ monthly active users",
  "590+ daily ride requests handled securely",
];

const overviewStats = [
  { label: "Client", value: "Mocial" },
  { label: "Industry", value: "Social Media, Communities" },
  { label: "Duration", value: "3 months" },
  { label: "Service", value: "DevOps Enablement" },
];

const counters = [
  { label: "Downloads", end: 30, suffix: "K+" },
  { label: "Active Users", end: 10, suffix: "K+" },
  { label: "Request A Ride", end: 590, suffix: "+" },
];

const storeBadges = [
  { src: "/images/google-play.png", alt: "Google Play badge" },
  { src: "/images/app-store.png", alt: "App Store badge" },
];

const problemParagraphs = [
  "Upload photos, post updates, and share someone else's posts to spread what's happening around you. Create group chats and calls with your loved ones for effective communication.",
  "Be notified when someone rates, comments, or shares your posts. Organize the photos you uploaded, broadcast live, watch streams, and other videos anywhere, anytime.",
  "Follow popular artists, influencers, and organisations to stay connected. Search favourite jobs and apply using your profile as a resume.",
];

const solutionHighlights = [
  "Traffic-ready architecture capable of serving millions",
  "Real-time chat, video rooms, and push notifications",
  "Live streaming & short-video support",
  "Brand partnership dashboards and moderation tooling",
  "Job marketplace and commerce extensions",
];

const productHighlights = [
  {
    title: "Social Feed & Engagement",
    bullets: ["Create, like, and share posts", "Rich media cards with preview", "Inline reactions and quick replies"],
  },
  {
    title: "Messaging & Rooms",
    bullets: ["Direct messages and community rooms", "Voice + video calling", "Notifications for mentions and invites"],
  },
  {
    title: "Live & Media Experiences",
    bullets: ["Broadcast live with followers", "Watch streams and playlists", "Discover trending content via curation"],
  },
  {
    title: "Commerce & Brand Tools",
    bullets: ["Jobs marketplace", "Brand collaboration dashboard", "Creator analytics and insights"],
  },
];

const techLogos = [
  { src: "/images/flutter.png", alt: "Flutter" },
  { src: "/images/react-native.png", alt: "React Native" },
  { src: "/images/nodejs-logo.png", alt: "Node.js" },
  { src: "/images/aws-logo.png", alt: "AWS" },
  { src: "/images/postgresql-logo.png", alt: "PostgreSQL" },
  { src: "/images/devops-logo.png", alt: "DevOps" },
  { src: "/images/figma.png", alt: "Figma" },
  { src: "/images/photoshop.png", alt: "Photoshop" },
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

export default function Mocial() {
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
        title="Mocial Case Study – Social Network Platform | Trimsel"
        description="How Trimsel engineered Mocial, a scalable social network with live streaming, real-time chat, and admin playbooks built for growth."
        canonical="https://www.trimsel.com/portfolio/mocial-case-study"
      />
      <Head>
        {[
          {
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            "@id": "https://www.trimsel.com/portfolio/mocial-case-study#case",
            name: "Mocial Case Study – Social Network Platform",
            headline: "Mocial Case Study – Social Network Platform",
            description:
              "Trimsel engineered Mocial, a robust social platform supporting rich media, community features, live streaming, notifications, and growth-ready admin controls.",
            inLanguage: "en",
            url: "https://www.trimsel.com/portfolio/mocial-case-study",
            isPartOf: { "@type": "WebSite", "@id": "https://www.trimsel.com/#website" },
            about: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
            author: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
            publisher: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://www.trimsel.com/images/portfolio/mocial-og.jpg",
              width: 1200,
              height: 630,
            },
            image: {
              "@type": "ImageObject",
              url: "https://www.trimsel.com/images/portfolio/mocial-og.jpg",
              width: 1200,
              height: 630,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.trimsel.com/portfolio/mocial-case-study#breadcrumbs",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.trimsel.com/" },
              { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.trimsel.com/portfolio" },
              { "@type": "ListItem", position: 3, name: "Mocial Case Study", item: "https://www.trimsel.com/portfolio/mocial-case-study" },
            ],
          },
        ].map((schema, index) => (
          <script key={`mocial-schema-${index}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
              Mocial
            </p>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  DevOps Service
                </div>
                <h1 className="text-4xl font-semibold leading-tight">
                  An all-in-one platform that is going to be the right choice for your brand
                </h1>
                <p className="text-lg leading-relaxed text-white/80">
                  Search your family, colleagues, new friends, and people as well as stay connected with them. Upload photos, post updates, share stories, and go live—Mocial centralizes every social interaction for consumers and brands.
                </p>
                <div className="flex flex-wrap gap-3">
                  {storeBadges.map((badge) => (
                    <Image key={badge.alt} src={badge.src} width={180} height={60} alt={badge.alt} className="h-12 w-auto" />
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner">
                <Image src="/images/mocial-img.png" width={500} height={589} alt="Mocial mockup" className="w-full" priority />
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
                  <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
                  Overview
                </div>
                <Image src="/images/mocile-logo.png" width={98} height={98} alt="Mocial logo" />
                <h2 className="text-3xl font-semibold text-slate-900">Building an extensive social network of the future</h2>
                <p>
                  We built a robust social media app for Mocial that can handle traffic from millions of users, ensuring they can scale with ease. We also built an admin backend for brand partnerships, campaign management, and growth operations.
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
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
              The Challenge
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Building an extensive social network of the future</h2>
            <p className="mt-4 text-lg text-slate-600">
              Mocial is a social mobility platform operating through web and mobile applications. It fulfils the 360-degree requirement of an internet channel for community and financial sectors.
            </p>
            <Image src="/images/mocial-work-bg.png" width={900} height={420} alt="Mocial infographic" className="mt-6 w-full rounded-2xl" />
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              {problemParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr,1fr]">
              <Image src="/images/mocial-screens.png" width={658} height={860} alt="Mocial screens" className="w-full rounded-2xl" />
              <div className="space-y-4 text-lg text-slate-600">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
                  The Solution
                </div>
                <h2 className="text-3xl font-semibold text-slate-900">An all-in-one platform that scales with your brand</h2>
                <p>
                  Upload photos, post updates, share posts, and create group chats. Receive notifications for every engagement, organise media, broadcast live, and run brand campaigns—all supported by a scalable DevOps backbone.
                </p>
                <ul className="space-y-3 text-sm text-slate-600">
                  {solutionHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRightIcon width={18} height={18} className="mt-1 text-brand" />
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
            <h2 className="text-3xl font-semibold text-slate-900">Platform Highlights</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {productHighlights.map((section) => (
                <div key={section.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                  <h3 className="text-xl font-semibold text-slate-900">{section.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-slate-900">Tools & Technology</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {techLogos.map((logo) => (
                <div key={logo.alt} className="rounded-3xl border border-slate-100 bg-white p-4 shadow-inner">
                  <Image src={logo.src} width={140} height={60} alt={logo.alt} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-slate-900">Snapshots of the experience</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "/images/mocial-img.png",
                "/images/mocial-screens.png",
                "/images/mocial-work-bg.png",
              ].map((shot) => (
                <div key={shot} className="rounded-3xl border border-slate-100 bg-slate-50 p-4 shadow-inner">
                  <Image src={shot} width={360} height={640} alt="Mocial UI" className="w-full rounded-2xl" />
                </div>
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
                  <p className="mt-4 text-lg text-slate-200">Partner with Trimsel to launch social media and community-first products that scale.</p>
                  <Link
                    href="/contact-us"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                  >
                    Get in touch
                    <ArrowRightIcon width={18} height={18} />
                  </Link>
                </div>
                <Image src="/images/ezycta.png" width={520} height={360} alt="CTA graphic" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
              Related Case Studies
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
