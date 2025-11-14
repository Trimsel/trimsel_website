import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm";
import dynamic from "next/dynamic";
import CheckIcon from "../components/icons/CheckIcon";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";

const ClientLogo = dynamic(() => import("../components/clientLogo"), { ssr: false });

const heroStats = [
  "200+ digital programs launched with 92% client retention",
  "AI, cloud, mobile, and DevOps teams aligned to one roadmap",
  "Discovery replies in under 24 hours with optional NDA",
];

const whoHighlights = [
  "Business process optimisation through automated workflows",
  "Scalable, high-performance applications ready for growth",
  "AI and cloud integration for smarter insights",
  "Human-centred UI/UX that earns loyalty",
];

const valueCards = [
  {
    icon: "/images/3triangle.webp",
    title: "Our Core Values: Innovation & Excellence",
    body:
      "Innovation anchors every engagement. We blend AI automation, multi-cloud architecture, and product craftsmanship to deliver measurable performance gains across platforms.",
    bullets: [
      "AI-powered automation for smarter operations",
      "Cloud-native solutions across AWS, Azure, and GCP",
      "Optimised digital interfaces designed for conversion",
    ],
  },
  {
    icon: "/images/approachicon.webp",
    title: "Our Commitment to Clients",
    body:
      "From startups to global enterprises, we build mission-critical products that are secure, scalable, and aligned with your roadmap and KPIs.",
    bullets: [
      "User-focused design and engineering",
      "End-to-end cloud + DevOps transformation",
      "Future-proof applications that accelerate ROI",
    ],
  },
];

const driveCards = [
  {
    icon: "/images/light-bulb.png",
    title: "Scalable Cloud-Native Architecture",
    body:
      "Architecting resilient infrastructures on AWS, Azure, and GCP using microservices, containers, and serverless patterns so you can scale on demand.",
  },
  {
    icon: "/images/ui-icon.png",
    title: "Customer-First UI/UX Excellence",
    body:
      "Design systems that prioritise accessibility, conversion, and delight—across mobile and web touchpoints.",
  },
  {
    icon: "/images/agile-operation.png",
    title: "Agile Delivery & DevOps Engineering",
    body:
      "CI/CD pipelines, IaC, and observability baked into every release so teams ship faster with confidence.",
  },
  {
    icon: "/images/versatile.png",
    title: "Cross-Platform & Emerging Tech",
    body:
      "Flutter, React Native, AI/ML, IoT, and blockchain expertise that keeps your roadmap future-ready.",
  },
  {
    icon: "/images/res.png",
    title: "Data-Driven & Secure Development",
    body:
      "Secure SDLC, automated testing, and compliance (GDPR, HIPAA, ISO) to protect every interaction.",
  },
  {
    icon: "/images/clients.png",
    title: "Client-Centric Strategy",
    body:
      "We operate as an embedded partner—aligning market insight, KPIs, and execution to maximise ROI.",
  },
];

const serviceCards = [
  {
    icon: "/images/app-development.png",
    title: "Mobile App Development",
    body:
      "Scalable Android & iOS apps with intuitive UX, native performance, and deep cloud integration.",
    href: "/mobile-app-development-chennai",
    linkLabel: "Explore Mobile App Development",
  },
  {
    icon: "/images/backend.png",
    title: "Website Development",
    body:
      "Responsive, SEO-friendly, and CMS-ready web experiences built for conversion and growth.",
    href: "/web-development-company-chennai",
    linkLabel: "Explore Web Development",
  },
  {
    icon: "/images/cloud-computing.png",
    title: "Cloud Consulting & Implementation",
    body:
      "Migrate, modernise, and optimise AWS, Azure, and GCP estates with FinOps guardrails.",
    href: "/cloud-consulting-services",
    linkLabel: "Explore Cloud Services",
  },
  {
    icon: "/images/devops.png",
    title: "DevOps Consulting & Automation",
    body:
      "CI/CD, IaC, and Kubernetes automation that keeps releases predictable and secure.",
    href: "/devops-consulting-services",
    linkLabel: "Explore DevOps Consulting",
  },
  {
    icon: "/images/digital-marketing.png",
    title: "Digital Marketing & Growth",
    body:
      "SEO, paid media, and lifecycle automation to amplify acquisition and retention.",
    href: "/digital-marketing-company-chennai",
    linkLabel: "Explore Digital Marketing",
  },
  {
    icon: "/images/software-testing.png",
    title: "Quality Engineering & Support",
    body:
      "Manual + automated QA, performance testing, and 24/7 support for mission-critical products.",
    href: "/contact-us",
    linkLabel: "Talk to Support Leads",
  },
];

const ctaHighlights = [
  "AI, cloud, and DevOps pods aligned to your KPIs",
  "Optional NDA before diving into sensitive details",
  "Discovery, architecture, and rollout guided by proven playbooks",
];

const insights = [
  {
    title: "5 Easy Ways a Mobile App Can Grow Your Business",
    excerpt: "See how we combine strategy, engineering, and DevOps to turn ideas into revenue.",
    href: "/blog/how-mobile-apps-grow-business",
    tag: "Growth Playbook",
  },
  {
    title: "Explore Trimsel's Digital Transformation Library",
    excerpt: "Browse cloud, AI, and product engineering articles that guide our client engagements.",
    href: "/blog",
    tag: "Thought Leadership",
  },
];

export default function About() {
  const aboutJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://www.trimsel.com/aboutus#aboutpage",
      url: "https://www.trimsel.com/aboutus",
      name: "About Trimsel",
      description:
        "Trimsel is a global leader in digital transformation, software development, cloud computing, and DevOps solutions.",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.trimsel.com/images/about-bg.png",
      },
      publisher: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
      mainEntity: { "@type": "Organization", "@id": "https://www.trimsel.com/#org" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.trimsel.com/aboutus#breadcrumbs",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.trimsel.com/" },
        { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.trimsel.com/aboutus" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.trimsel.com/aboutus#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What industries does Trimsel support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We partner with SaaS scale-ups, BFSI leaders, healthcare providers, and consumer brands to modernize products with AI, cloud, and secure engineering practices.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can Trimsel start a new engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Discovery begins within 5 business days once scope is aligned. We can deploy a blended pod of product strategist, solution architect, and engineers in under 3 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Does Trimsel work with in-house teams?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our squads plug into your product or platform teams, sharing documentation, DevSecOps guardrails, and regular business reviews to keep stakeholders aligned.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <NextSeo
        title="About Trimsel | Digital Transformation & IT Services Company in India"
        description="Trimsel delivers digital transformation, software development, cloud, DevOps & AI solutions to help businesses scale with cutting-edge IT services."
        canonical="https://www.trimsel.com/aboutus"
        openGraph={{
          type: "website",
          url: "https://www.trimsel.com/aboutus",
          title: "About Trimsel | Digital Transformation Experts",
          description:
            "Trimsel is a digital transformation company in Chennai offering software development, cloud solutions, DevOps & product engineering to scale your business.",
          locale: "en_IN",
          images: [
            {
              url: "https://www.trimsel.com/images/about-bg.png",
              width: 1200,
              height: 630,
              alt: "Trimsel digital transformation team collaborating in Chennai",
            },
          ],
          site_name: "Trimsel",
        }}
        additionalMetaTags={[{ name: "robots", content: "index, follow" }]}
      />
      <Head>
        {aboutJsonLd.map((schema, index) => (
          <script key={`aboutus-schema-${index}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>

      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <Header />
          <div className="relative isolate pt-24">
            <Image
              src="/images/about-bg.png"
              alt="Trimsel team collaborating"
              fill
              priority
              className="pointer-events-none object-cover opacity-60"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-950/70" />
            <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                <Link href="/" className="hover:text-brand">
                  Home
                </Link>
                <span className="mx-2 text-slate-500">&middot;</span>
                About Us
              </p>
              <div className="mt-6 grid gap-10 lg:grid-cols-2">
                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold leading-tight">
                    About Trimsel — <span className="rounded-full border border-white/40 px-3 py-1 text-sm uppercase tracking-[0.3em]">AI-first</span> Digital Transformation Partner
                  </h1>
                  <h2 className="text-lg font-semibold text-orange-300">
                    <span className="mr-2 rounded-full border border-orange-300 px-3 py-1 text-xs uppercase tracking-[0.3em]">Mission</span>
                    Critical Digital Solutions for Complete Business Transformation
                  </h2>
                </div>
                <div className="space-y-4 text-lg text-white/90">
                  <p>
                    <strong>Empower your business transformation</strong> by replacing legacy systems with modern digital solutions that deliver
                    <strong> growth, operational optimisation</strong>, and measurable <strong>ROI</strong>. We architect technology that accelerates innovation across {" "}
                    <Link href="/cloud-consulting-services" className="text-orange-300 underline-offset-4 hover:underline">
                      cloud
                    </Link>
                    , {" "}
                    <Link href="/mobile-app-development-chennai" className="text-orange-300 underline-offset-4 hover:underline">
                      mobile
                    </Link>
                    , and {" "}
                    <Link href="/devops-consulting-services" className="text-orange-300 underline-offset-4 hover:underline">
                      DevOps
                    </Link>
                    .
                  </p>
                  <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-black/30 transition hover:bg-white" aria-label="Talk with Trimsel consultants">
                    Book a strategy call
                    <ArrowRightIcon width={20} height={20} />
                  </Link>
                  <p className="text-sm text-slate-200">200+ digital programs shipped with 92% client retention and replies within 24 hours.</p>
                </div>
              </div>
              <ul className="mt-8 space-y-2 text-sm text-white/80">
                {heroStats.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <Image src="/images/office-people.webp" width={1349} height={617} alt="People working in Trimsel office" className="h-auto w-full object-cover" priority={false} />
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
              Who we are
            </div>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <h2 className="text-3xl font-semibold text-slate-900">Empowering Businesses with Digital Transformation & Innovation</h2>
                <p>
                  In today&apos;s rapidly evolving digital era, businesses that once relied on traditional operations now embrace technology to stay competitive. As customer expectations shift, organisations must adopt scalable, agile, and user-focused digital solutions.
                </p>
                <p>
                  Through our expertise, we enable enterprises to drive transformation via cutting-edge mobile & web development, cloud consulting, and DevOps automation. From automated workflows to scalable business models, we deliver solutions that unlock long-term value.
                </p>
                <p>
                  Since 2020 our team of developers, cloud architects, DevOps engineers, and designers has shipped high-impact software to startups, SMEs, and Fortune 500 clients worldwide.
                </p>
                <p className="font-semibold text-slate-900">We don&apos;t just build apps — we engineer ecosystems that deliver:</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {whoHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckIcon width={18} height={18} className="mt-1 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>We believe in future-focused innovation — technology that adapts to today&apos;s needs and tomorrow&apos;s ambitions.</p>
              </div>
              <div className="space-y-4 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                <h3 className="text-lg font-semibold text-slate-900">Our promise</h3>
                <p className="text-sm text-slate-600">
                  We deliver measurable outcomes through cross-functional pods that stay embedded with your stakeholders. Strategy, design, engineering, and growth stay aligned from discovery to adoption.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-900">Reinventing business environments with the power of technology</h2>
                <p className="text-lg text-slate-600">
                  In today&apos;s hyper-competitive world, staying ahead requires transformation. We empower businesses through innovation, cloud-first strategies, and user-centric design.
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Tailored Digital Transformation:</strong> strategies aligned with your industry and roadmap.<br />
                  <strong>Scalable & Future-Ready:</strong> high-performing, secure architectures that evolve with you.<br />
                  <strong>Next-Gen Integration:</strong> AI automation, cloud migration, and analytics for a strategic edge.
                </p>
                <p className="text-lg text-slate-600">At Trimsel we don&apos;t just build technology—we create impact-driven experiences.</p>
              </div>
              <div className="grid gap-6">
                {valueCards.map((card) => (
                  <div key={card.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5">
                    <Image src={card.icon} width={80} height={80} alt={card.title} loading="lazy" />
                    <h3 className="mt-4 text-xl font-semibold text-slate-900">{card.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{card.body}</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {card.bullets.map((bullet) => (
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
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[2fr,3fr]">
              <h2 className="text-3xl font-semibold text-slate-900">What drives Trimsel toward digital excellence</h2>
              <p className="text-lg text-slate-600">
                We&apos;re driven by relentless innovation. From {" "}
                <Link href="/cloud-consulting-services" className="text-brand underline-offset-4 hover:underline">
                  cloud-native architecture
                </Link>{" "}
                to {" "}
                <Link href="/devops-consulting-services" className="text-brand underline-offset-4 hover:underline">
                  agile DevOps automation
                </Link>
                , every engagement focuses on scalable, secure, and engaging digital experiences.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {driveCards.map((card) => (
                <article key={card.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                  <Image src={card.icon} width={120} height={120} alt={card.title} className="mb-4" loading="lazy" />
                  <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
              What we do
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-[2fr,3fr]">
              <h3 className="text-3xl font-semibold text-slate-900">Comprehensive digital solutions for modern businesses</h3>
              <p className="text-lg text-slate-600">
                We specialise in end-to-end transformation with cutting-edge technology solutions that help you thrive in today&apos;s landscape.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((card) => (
                <article key={card.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1">
                  <Image src={card.icon} width={80} height={80} alt={card.title} loading="lazy" />
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{card.body}</p>
                  <Link href={card.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    🔗 {card.linkLabel}
                    <Image src="/images/Group2495.png" width={40} height={40} alt="Arrow icon" loading="lazy" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-[32px] border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg shadow-slate-900/5">
              <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
                    Ready to collaborate
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold text-slate-900">Let&apos;s build your next growth story</h3>
                  <p className="mt-4 text-lg text-slate-600">
                    Whether you need support across product engineering, cloud, DevOps, or digital marketing, our experts guide your journey. Book a consultation and expect a response within 24 hours—NDA optional.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {ctaHighlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon width={18} height={18} className="mt-1 text-brand" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark">
                      Get your free consultation
                      <Image src="/images/material-symbols_arrow-right-alt.png" width={24} height={24} alt="" loading="lazy" />
                    </Link>
                    <Link href="/contact-us#contact-insights" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-brand hover:text-brand">
                      Preview our insights
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image src="/images/abt-cta.webp" width={520} height={520} alt="Trimsel contact illustration" className="w-full max-w-sm" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-semibold text-slate-900">Trusted by customers, partners, and the industry</h2>
            <p className="mt-4 text-center text-lg text-slate-600">
              Continuous learning fuels every Trimsel engagement. We constantly upgrade our playbooks with the latest innovations.
            </p>
            <div className="mt-10 rounded-3xl border border-white/60 bg-white p-6 shadow-lg shadow-slate-900/5">
              <ClientLogo />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
              Latest insights
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {insights.map((article) => (
                <article key={article.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">{article.tag}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                    <Link href={article.href}>{article.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{article.excerpt}</p>
                  <Link href={article.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                    Read More
                    <Image src="/images/material-symbols_arrow-right-alt.png" width={18} height={18} alt="" loading="lazy" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactForm eventLabel="about_page" />
        <Footer />
      </main>
    </>
  );
}
