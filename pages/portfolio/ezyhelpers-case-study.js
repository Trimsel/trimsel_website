import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NextSeo } from "next-seo";
import { postJson } from "../../lib/api";
import ArrowRightIcon from "../../components/icons/ArrowRightIcon";

const metrics = [
  { label: "Downloads", end: 30, suffix: "K+" },
  { label: "Active Users", end: 10, suffix: "K+" },
  { label: "Bookings Completed", end: 590, suffix: "+" },
  { label: "Trained Professionals", end: 300, suffix: "+" },
];

const overviewStats = [
  { label: "Client", value: "Ezyhelpers" },
  { label: "Industry", value: "Home Services, Local Business" },
  { label: "Duration", value: "3 months" },
  { label: "Platforms", value: "iOS, Android, Web" },
];

const techLogos = {
  development: [
    { src: "/images/flutter.png", alt: "Flutter" },
    { src: "/images/react-native.png", alt: "React Native" },
    { src: "/images/nodejs-logo.png", alt: "Node.js" },
    { src: "/images/postgresql-logo.png", alt: "PostgreSQL" },
    { src: "/images/aws-logo.png", alt: "AWS" },
  ],
  design: [
    { src: "/images/photoshop-logo.png", alt: "Photoshop" },
    { src: "/images/figma-logo.png", alt: "Figma" },
    { src: "/images/devops-logo.png", alt: "DevOps" },
  ],
};

const screenShots = [
  "/images/ezyapp-preview1.png",
  "/images/ezyapp-preview2.png",
  "/images/ezyapp-preview3.png",
  "/images/ezyapp-preview4.png",
];

const relatedStudies = [
  {
    logo: "/images/Group3001.png",
    title: "KarIOT",
    description: "IoT-based smart water management platform for high-rise buildings and hotels.",
    href: "/portfolio/kariot-case-study",
  },
  {
    logo: "/images/Group3002.png",
    title: "Xaber",
    description: "Ride-hailing platform inspired by Uber for scalable taxi business operations.",
    href: "/portfolio/xaber-case-study",
  },
];

export default function Ezyhelpers() {
  const [counterOn, setCounterOn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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
        title="Ezyhelpers Case Study - Home Services App | Trimsel"
        description="See how Trimsel built Ezyhelpers, an AWS-hosted mobile and web platform for booking trusted home service professionals, using ReactJS, Flutter, NodeJS, and DevOps automation."
        canonical="https://www.trimsel.com/portfolio/ezyhelpers-case-study"
        openGraph={{
          type: "article",
          url: "https://www.trimsel.com/portfolio/ezyhelpers-case-study",
          title: "Ezyhelpers Case Study - Home Services App | Trimsel",
          description:
            "See how Trimsel built Ezyhelpers, an AWS-hosted mobile and web platform for booking trusted home service professionals, using ReactJS, Flutter, NodeJS, and DevOps automation.",
          locale: "en_IN",
          images: [
            {
              url: "https://www.trimsel.com/images/portfolio/ezyhelpers-og.jpg",
              width: 1200,
              height: 630,
              alt: "Trimsel Ezyhelpers mobile and web platform case study",
            },
          ],
          site_name: "Trimsel",
          article: {
            section: "Case Study",
            tags: ["Case Study", "Home Services", "Mobile App", "AWS", "Trimsel"],
          },
        }}
        twitter={{
          handle: "@TrimselSoftwares",
          site: "@TrimselSoftwares",
          cardType: "summary_large_image",
          title: "Case Study: Ezyhelpers Home Services Platform",
          description: "Learn how Trimsel delivered the Ezyhelpers mobile and web platform with AWS, Flutter, and NodeJS.",
        }}
        additionalMetaTags={[
          { name: "robots", content: "index, follow" },
          { name: "twitter:title", content: "Case Study: Ezyhelpers Home Services Platform" },
          {
            name: "twitter:description",
            content: "How Trimsel delivered the Ezyhelpers on-demand home services platform across mobile and web.",
          },
          { name: "twitter:image:alt", content: "Trimsel Ezyhelpers home services case study" },
        ]}
      />
      <Head>
        {[
          {
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            "@id": "https://www.trimsel.com/portfolio/ezyhelpers-case-study#case",
            name: "Ezyhelpers Case Study - Home Services App",
            headline: "Ezyhelpers Case Study - Home Services App",
            description:
              "Trimsel developed Ezyhelpers, a cloud-hosted mobile and web platform for booking trusted home service professionals, using ReactJS, Flutter, NodeJS, and DevOps automation.",
            inLanguage: "en",
            url: "https://www.trimsel.com/portfolio/ezyhelpers-case-study",
            isPartOf: { "@type": "WebSite", "@id": "https://www.trimsel.com/#website" },
            about: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
            author: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
            publisher: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://www.trimsel.com/images/portfolio/ezyhelpers-og.jpg",
              width: 1200,
              height: 630,
            },
            image: {
              "@type": "ImageObject",
              url: "https://www.trimsel.com/images/portfolio/ezyhelpers-og.jpg",
              width: 1200,
              height: 630,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.trimsel.com/portfolio/ezyhelpers-case-study#breadcrumbs",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.trimsel.com/" },
              { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.trimsel.com/portfolio" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Ezyhelpers Case Study",
                item: "https://www.trimsel.com/portfolio/ezyhelpers-case-study",
              },
            ],
          },
        ].map((schema, index) => (
          <script key={`ezyhelpers-schema-${index}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>

      <main>
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <Header />
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
              <span className="mx-2 text-slate-500">&middot;</span>
              <Link href="/portfolio" className="hover:text-brand">
                Portfolio
              </Link>
              <span className="mx-2 text-slate-500">&middot;</span>
              Ezyhelpers
            </p>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-4">
                <Image src="/trimsel-clients/ezyhelpers-logo.png" width={224} height={64} alt="Ezyhelpers logo" priority />
                <h1 className="text-4xl font-semibold leading-tight">Home Service and House Work Application</h1>
                <p className="text-lg leading-relaxed text-white/80">
                  Ezyhelpers is a digital marketplace connecting users with trusted, verified home service professionals for elder care, cleaning, cooking, and more-right from their phone or desktop.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner">
                <h3 className="text-lg font-semibold text-white">Project snapshot</h3>
                <p className="mt-3 text-sm text-white/80">
                  Unified mobile + web experience, automated onboarding for service pros, and transparent pricing for every booking.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                >
                  Plan something similar
                  <ArrowRightIcon width={18} height={18} />
                </Link>
              </div>
            </div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-inner">
                    <p className="text-3xl font-semibold text-white">
                      {counterOn && <CountUp start={0} end={metric.end} duration={2} delay={0} />}
                      <span className="ml-1 text-2xl">{metric.suffix}</span>
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-300">{metric.label}</p>
                  </div>
                ))}
              </div>
            </ScrollTrigger>
          </div>
        </section>

        <section>
          <Image src="/images/ezy-med.png" width={1349} height={617} alt="Ezyhelpers mobile app previews" className="h-auto w-full object-cover" />
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
                  Overview
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">One platform for every home service need</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Ezyhelpers is India&apos;s all-in-one platform for home services-offering cleaning, elder care, cooking, sanitization, and more, with background-checked professionals and transparent pricing. Users discover, book, and manage services quickly through intuitive mobile and web apps, while service pros gain new opportunities.
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Interested in a similar project? Explore our{" "}
                  <Link href="/mobile-app-development-chennai" className="text-brand underline-offset-4 hover:underline">
                    Mobile App Development
                  </Link>
                  ,{" "}
                  <Link href="/web-development-company-chennai" className="text-brand underline-offset-4 hover:underline">
                    Web Development
                  </Link>
                  , and{" "}
                  <Link href="/devops-consulting-services" className="text-brand underline-offset-4 hover:underline">
                    DevOps Consulting
                  </Link>{" "}
                  services.
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
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
                  The challenge
                </div>
                <h3 className="mt-4 text-3xl font-semibold text-slate-900">Building trust, efficiency, and scalability</h3>
                <p className="mt-4 text-lg text-slate-600">
                  Ezyhelpers had to aggregate multiple service categories, onboard and train hundreds of professionals, and guarantee consistent quality to users. The platform needed easy discovery, transparent pricing, and secure payments while handling rapid growth.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6">
                <Image src="/images/ezy-col-image.png" width={667} height={605} alt="Ezyhelpers challenge preview" className="w-full rounded-2xl" />
              </div>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <Image src="/images/ezy-app-pre.png" width={667} height={605} alt="Ezyhelpers screens" className="w-full rounded-2xl" />
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
                  Our approach
                </div>
                <h3 className="mt-4 text-3xl font-semibold text-slate-900">Robust tech, user-first design, automated DevOps</h3>
                <p className="mt-4 text-lg text-slate-600">
                  Trimsel used Flutter for cross-platform mobile, React for web, Node.js for backend APIs, and PostgreSQL for data. Hosting on AWS with automated CI/CD ensures rapid, reliable updates. The result: a secure, fast, intuitive platform that delights users and professionals alike.
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Interested in seamless automation? Explore our{" "}
                  <Link href="/devops-consulting-services" className="text-brand underline-offset-4 hover:underline">
                    DevOps consulting
                  </Link>{" "}
                  and{" "}
                  <Link href="/cloud-consulting-services" className="text-brand underline-offset-4 hover:underline">
                    Cloud services
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
              Results
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-3xl font-semibold text-slate-900">Tangible results and business impact</h3>
                <p className="mt-4 text-lg text-slate-600">
                  Ezyhelpers scaled to tens of thousands of downloads and thousands of active users, providing a smooth booking experience and dependable marketplace for professionals. A robust backend with automated DevOps keeps operations lean and future-ready.
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Need a similar solution? <Link href="/contact-us" className="text-brand underline-offset-4 hover:underline">Get in touch with our experts.</Link>
                </p>
              </div>
              <Image src="/images/ezy-app-results.png" width={667} height={605} alt="Ezyhelpers results" className="w-full rounded-2xl" />
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
              Technology
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-slate-900">Tools and technology</h3>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Development</h4>
                <div className="mt-4 flex flex-wrap gap-4">
                  {techLogos.development.map((logo) => (
                    <div key={logo.alt} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-inner">
                      <Image src={logo.src} width={180} height={60} alt={logo.alt} className="h-10 w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Design & DevOps</h4>
                <div className="mt-4 flex flex-wrap gap-4">
                  {techLogos.design.map((logo) => (
                    <div key={logo.alt} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-inner">
                      <Image src={logo.src} width={140} height={50} alt={logo.alt} className="h-10 w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-semibold text-slate-900">Product experience</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {screenShots.map((shot) => (
                <div key={shot} className="rounded-3xl border border-slate-100 bg-slate-50 p-4 shadow-inner">
                  <Image src={shot} width={300} height={600} alt="Ezyhelpers screenshot" className="w-full rounded-2xl" />
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
                  <p className="mt-4 text-lg text-slate-200">Partner with Trimsel to ship secure, scalable platforms across mobile, web, and cloud.</p>
                  <Link
                    href="/contact-us"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                  >
                    Get in touch
                    <ArrowRightIcon width={18} height={18} />
                  </Link>
                </div>
                <Image src="/images/ezycta.png" width={520} height={360} alt="Call to action illustration" className="w-full" />
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
