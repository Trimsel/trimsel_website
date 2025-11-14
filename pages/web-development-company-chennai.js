import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import dynamic from "next/dynamic";
import { buildServiceJsonLd } from "../lib/serviceSchema";
import ContactForm from "../components/ContactForm";
import { NextSeo } from "next-seo";
import Head from "next/head";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import CheckIcon from "../components/icons/CheckIcon";
import ClientLogo from "../components/clientLogo";

const heroHighlights = [
  "Custom websites & web apps built with React, Next.js, and Node.js",
  "SEO-ready, mobile-first experiences tested for speed and accessibility",
  "Integrated DevOps and cloud pipelines for smooth releases",
];

const aboutList = [
  "Custom Website Development – Designed from scratch to fit your brand.",
  "Web App Development – Engineered to be fast, reliable, and ready for growth.",
  "Ecommerce Solutions – Secure stores with frictionless checkout experiences.",
  "Mobile-Responsive, SEO-Ready Sites – Launch with performance baked in.",
  "CMS Development – WordPress, Drupal, Joomla, or fully custom builds.",
];

const webServices = [
  {
    icon: "/images/doedit1.png",
    title: "User-Centric UI/UX Design",
    body: "Responsive, conversion-focused design systems that delight users on every device.",
  },
  {
    icon: "/images/do-front-end.png",
    title: "Front-End Development",
    body: "React, Next.js, and Astro experiences optimized for speed, SEO, and accessibility.",
  },
  {
    icon: "/images/do-backend.png",
    title: "Back-End Engineering",
    body: "Secure Node.js, PHP, and Python APIs that scale with your product roadmap.",
  },
  {
    icon: "/images/do-api.png",
    title: "API Integration",
    body: "REST/GraphQL services that connect CRMs, ERPs, payments, and analytics tools seamlessly.",
  },
  {
    icon: "/images/do-cms.png",
    title: "CMS Development",
    body: "Flexible WordPress, Drupal, and headless CMS builds that put marketers in control.",
  },
  {
    icon: "/images/do-wordpress.png",
    title: "WordPress Engineering",
    body: "Custom themes, plugins, and optimizations for fast, secure WordPress sites.",
  },
  {
    icon: "/images/do-ecom.png",
    title: "Ecommerce Platforms",
    body: (
      <>
        Shopify, WooCommerce, and custom carts with{" "}
        <Link href="/digital-marketing-company-chennai" className="underline decoration-brand/40 underline-offset-4">
          funnel-ready automation
        </Link>
        .
      </>
    ),
  },
  {
    icon: "/images/do-devops.png",
    title: "DevOps for Web Projects",
    body: (
      <>
        CI/CD pipelines, automated testing, and cloud releases delivered by our{" "}
        <Link href="/devops-consulting-services" className="underline decoration-brand/40 underline-offset-4">
          DevOps team
        </Link>
        .
      </>
    ),
  },
  {
    icon: "/images/do-testing.png",
    title: "Quality Assurance",
    body: "Functional, performance, and security testing so launches stay bug-free.",
  },
  {
    icon: "/images/do-24-hours.png",
    title: "24/7 Maintenance",
    body: "Monitoring, updates, and optimizations that keep your site fast and secure.",
  },
];

const outsourceHighlights = [
  {
    icon: "/images/pedestal.png",
    title: "Access Global Talent Pool",
    body: "Hire top web developers in Chennai with international expertise. We deliver modern websites using the latest frameworks and CMS platforms.",
  },
  {
    icon: "/images/wait-time.png",
    title: "Faster Turnaround & Delivery",
    body: "Accelerate your launch with experienced teams and agile delivery—no compromise on quality.",
  },
  {
    icon: "/images/businessman.png",
    title: "Skilled Web Development Team",
    body: "Collaborate with certified developers who follow proven methodologies to build scalable, high-performance sites and apps.",
  },
  {
    icon: "/images/money.png",
    title: "Save Up to 50% on Costs",
    body: "Avoid high overheads by outsourcing to our Chennai team—enterprise quality without enterprise pricing.",
  },
];

const webAppBenefits = [
  {
    icon: "/images/maintenance.png",
    title: "Always Accessible",
    body: "Your business stays open 24/7, letting customers browse, connect, and convert anytime.",
  },
  {
    icon: "/images/higher-performance.png",
    title: "Faster Website, More Conversions",
    body: "Speed matters—responsive sites improve UX, reduce bounce rates, and increase sales.",
  },
  {
    icon: "/images/security-icon.png",
    title: "Security Builds Trust",
    body: "We bake in security best practices so customer data stays safe and compliant.",
  },
  {
    icon: "/images/customisable-icon.png",
    title: "Built to Scale",
    body: "Add features, expand globally, and integrate new tools as your business grows.",
  },
];

const growthHighlights = [
  {
    title: "Cut Development Costs",
    body: "Partner with our Chennai studio to reduce spend by up to 50% without sacrificing quality.",
  },
  {
    title: "Work with Top Talent",
    body: "React, Next.js, and WordPress engineers who ship production-ready code with clean architecture.",
  },
  {
    title: "Scale Without Hiring",
    body: "Extend your team’s capacity with dedicated squads—no HR overhead required.",
  },
  {
    title: "Boost Productivity",
    body: "Agile workflows, SEO-friendly code, and performance audits keep releases fast and stable.",
  },
  {
    title: "Launch Faster",
    body: "Rapid prototyping plus CI/CD pipelines accelerate time-to-market.",
  },
  {
    title: "SEO-Optimized Design",
    body: (
      <>
        Technical SEO and content-first strategies that amplify{" "}
        <Link href="/digital-marketing-company-chennai" className="underline decoration-brand/40 underline-offset-4">
          digital campaigns
        </Link>
        .
      </>
    ),
  },
  {
    title: "Custom & Scalable Apps",
    body: "Enterprise-ready platforms for startups and global teams alike.",
  },
  {
    title: "Full-Cycle Delivery",
    body: "From strategy and UI/UX to deployment and support, Trimsel handles everything under one roof.",
  },
];

const destinationHighlights = [
  {
    title: "24/7 Web Support & Maintenance",
    body: "Round-the-clock technical support, proactive monitoring, and continuous optimizations from our dedicated team.",
  },
  {
    title: "Certified Web Development Experts",
    body: "React, Next.js, Node.js, and WordPress specialists who deliver secure, scalable, SEO-friendly solutions.",
  },
  {
    title: "Transparent Collaboration",
    body: "Agile sprints, weekly updates, and milestone tracking so you always know what’s shipping next.",
  },
  {
    title: "Affordable, Scalable Solutions",
    body: "Enterprise-grade technology with flexible pricing to empower startups, SMEs, and global brands.",
  },
];

const approachPhases = [
  {
    title: "Discovery & Requirements",
    icon: "/images/bino-icon.png",
    bullets: [
      "Understand business goals, user journeys, and integrations",
      "Identify constraints, compliance needs, and KPIs",
      "Align stakeholders so scope, budget, and timelines stay clear",
    ],
  },
  {
    title: "UX Design & Architecture",
    icon: "/images/design-icon.png",
    bullets: [
      "Wireframes, component libraries, and responsive design systems",
      "SEO-first information architecture and content planning",
      "Performance budgets to keep experiences fast",
    ],
  },
  {
    title: "Development & QA",
    icon: "/images/dev-icon.png",
    bullets: [
      "Front-end + back-end engineering with CI/CD pipelines",
      "API integrations, CMS setups, and automation",
      "Functional, performance, and security testing before launch",
    ],
  },
  {
    title: "Launch & Optimization",
    icon: "/images/launch.png",
    bullets: [
      "Cloud + DevOps rollout with monitoring and logging",
      "Post-launch enhancements, CRO, and SEO support",
      "Maintenance plans so sites stay fast, secure, and updated",
    ],
  },
];

const toolkitLogos = [
  { src: "/images/tools-image/reactjs-logo.png", alt: "React" },
  { src: "/images/tools-image/nextjs-logo.webp", alt: "Next.js" },
  { src: "/images/tools-image/angular-logo.png", alt: "Angular" },
  { src: "/images/tools-image/nodejs-logo-vector.png", alt: "Node.js" },
  { src: "/images/tools-image/php-logo.png", alt: "PHP" },
  { src: "/images/tools-image/NET-Framework-Logo.png", alt: ".NET" },
  { src: "/images/tools-image/WordPress-Logo.png", alt: "WordPress" },
  { src: "/images/tools-image/mongodb.png", alt: "MongoDB" },
  { src: "/images/tools-image/postgresql.png", alt: "PostgreSQL" },
  { src: "/images/tools-image/Mysql_logo.png", alt: "MySQL" },
  { src: "/images/tools-image/RabbitMQ_logo.png", alt: "RabbitMQ" },
  { src: "/images/tools-image/Redis-Logo.png", alt: "Redis" },
];

const webFaqItems = [
  {
    question: "Why should I choose Trimsel as my web development company in Chennai?",
    answer:
      "Trimsel builds custom websites, web apps, CMS platforms, and ecommerce solutions with deep expertise in React, Node, and WordPress.",
  },
  {
    question: "How much does it cost to build a website or web application?",
    answer:
      "Costs depend on features, design complexity, and tech stack. Basic sites start around ₹25,000 while advanced apps can exceed ₹1,00,000.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "Simple websites can launch in 2–3 weeks; dynamic or ecommerce builds typically require 4–10 weeks using our agile process.",
  },
  {
    question: "Do you provide SEO-optimized websites?",
    answer:
      "Yes. Every build follows Google’s guidelines and ships mobile-first, fast, and SEO-ready. We also offer digital marketing retainers.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Ecommerce, education, healthcare, logistics, real estate, SaaS, travel, finance, and more—each with tailored solutions.",
  },
  {
    question: "Do you offer website maintenance and support?",
    answer:
      "Absolutely. We provide ongoing maintenance, security updates, feature enhancements, and hosting support post-launch.",
  },
];

export default function WebDevelopment() {
  const serviceJsonLd = buildServiceJsonLd({
    slug: "web-development-company-chennai",
    serviceName: "Web Development Services (Chennai)",
    serviceType: "Web Development",
    description:
      "Website design, ecommerce, CMS, and custom web apps using ReactJS & NodeJS.",
    offers: [
      "Custom Web Development",
      "Website Design (UI/UX)",
      "Ecommerce Development",
      "ReactJS & NodeJS Development",
      "WordPress & CMS Development",
      "Web Hosting & Maintenance",
    ],
    faq: webFaqItems,
    breadcrumbs: [
      { name: "Home", item: "https://www.trimsel.com/" },
      {
        name: "Web Development Company Chennai",
        item: "https://www.trimsel.com/web-development-company-chennai",
      },
    ],
  });
  const webInsights = [
    {
      title: "How We Build Lightning-Fast Websites",
      excerpt:
        "Learn the performance, accessibility, and SEO guardrails we bake into every Trimsel web project.",
      href: "/blog",
      tag: "Web Performance",
    },
    {
      title: "Web & Digital Experience Guides",
      excerpt:
        "Explore our latest breakdowns on UX audits, CMS migrations, and conversion-focused redesigns.",
      href: "/blog",
      tag: "Web Strategy",
    },
  ];
  return (
    <>
<NextSeo
  title="Top Web Development Company in Chennai | Website Design Experts"
  description="Trimsel is a top web development company in Chennai offering website design, CMS, ecommerce, and custom solutions in ReactJS & NodeJS."
  canonical="https://www.trimsel.com/web-development-company-chennai"
  openGraph={{
    type: "website",
    url: "https://www.trimsel.com/web-development-company-chennai",
    title: "Top Web Development Company in Chennai | Website Design & Development",
    description:
      "Trimsel is a trusted web development company in Chennai, offering high-performance web development services, including ReactJS, NodeJS, CMS, and ecommerce.",
    locale: "en_IN",
    site_name: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/web-dev-hero.png",
        width: 1200,
        height: 630,
        alt: "Trimsel web development team building responsive interfaces in Chennai",
      },
    ],
    article: {
      section: "Web Development",
      tags: [
        "Web Development",
        "ReactJS",
        "NodeJS",
        "Ecommerce Development",
        "Chennai",
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
      content: "Web Development Company in Chennai – Trimsel",
    },
    {
      name: "twitter:description",
      content:
        "Custom websites, ecommerce platforms, and CMS solutions crafted by Trimsel’s Chennai-based web developers.",
    },
    {
      name: "twitter:image:alt",
      content: "Trimsel web development team designing responsive interfaces",
    },
  ]}
/>
<Head>
  {serviceJsonLd.map((schema, index) => (
    <script
      key={`web-dev-schema-${index}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
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
              <span className="mx-2 text-slate-300">·</span> Web Development Services
            </p>
            <h1 className="text-4xl font-semibold text-slate-900">
              Top Web Development Company in Chennai — Fast, Flexible, Built for Results
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Trimsel creates responsive websites and powerful web applications tailored to your business. From sleek marketing sites to
              feature-rich SaaS platforms, we use React, Next.js, Node.js, and WordPress to deliver high-performance digital experiences.
            </p>
            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                aria-label="Book a web development consultation with Trimsel"
              >
                Get a Web Development Consultation <ArrowRightIcon width={20} height={20} />
              </Link>
              <p className="mt-4 text-sm text-slate-500">180+ websites shipped with 95% on-time delivery across SaaS, ecommerce, and BFSI.</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              {heroHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand"></span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/web-dev-hero.webp"
              width={646}
              height={651}
              alt="Custom website and web application development team"
              className="w-full max-w-[520px]"
              priority
              quality={75}
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 55vw, 520px"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Custom Web Development Services That Work for You</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Your website needs to look great and perform flawlessly. Every Trimsel build is responsive, performant, and ready to scale—with
                clean code, mobile-first design, and releases powered by{" "}
                <Link href="/cloud-consulting-services" className="underline decoration-brand/40 underline-offset-4">
                  cloud
                </Link>{" "}
                and{" "}
                <Link href="/devops-consulting-services" className="underline decoration-brand/40 underline-offset-4">
                  DevOps automation
                </Link>
                .
              </p>
              <p className="mt-4 text-lg font-semibold text-slate-900">Our core services</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {aboutList.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-lg text-slate-600">
                Looking for a top-rated web app development company in Chennai? Let’s build a site that drives results and fits your budget.
              </p>
            </div>
            <div className="rounded-3xl border border-white/60 bg-slate-900 p-6 text-white shadow-2xl shadow-slate-900/30">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">Start your project</p>
              <h3 className="mt-4 text-2xl font-semibold">Ready to Launch Your New Website?</h3>
              <p className="mt-3 text-sm text-slate-200">Tap the button below and our web engineers will reach out within one business day.</p>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                aria-label="Book a web development consultation"
              >
                Book a Consultation <ArrowRightIcon width={18} height={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="web-do" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <Image src="/images/web-rect.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
            What we do
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[2fr,3fr]">
            <h2 className="text-3xl font-semibold text-slate-900">Full-Stack Web Development Services in Chennai</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              From CMS sites and custom apps to API integration and DevOps, we build scalable, SEO-friendly experiences for startups and
              enterprises alike.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {webServices.map((service) => (
              <div key={service.title} className="rounded-3xl border border-white/60 bg-white p-6 shadow-lg shadow-slate-900/5">
                <Image src={service.icon} width={70} height={70} alt={`${service.title} icon`} loading="lazy" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{service.body}</p>
                <Link href="/contact-us" aria-label={`Discuss ${service.title}`} className="mt-4 inline-flex items-center gap-2 text-brand">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em]">Let’s chat</span>
                  <ArrowRightIcon width={16} height={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


        <section id="web-source" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-slate-900">Why Outsource Web Development to Trimsel?</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {outsourceHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                  <Image src={item.icon} width={60} height={60} alt={item.title} loading="lazy" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="web-app" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">Why a Great Website Matters</h2>
                <p className="mt-4 text-lg text-slate-600">
                  Your website is where prospects first meet your brand. We help startups and enterprises create fast, secure, reliable platforms
                  that convert visitors into customers.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                  aria-label="Start a web app project with Trimsel"
                >
                  Let’s Build Your Web App <ArrowRightIcon width={18} height={18} />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {webAppBenefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-3xl border border-white/60 bg-white p-5 shadow-lg shadow-slate-900/5">
                    <Image src={benefit.icon} width={56} height={56} alt={benefit.title} loading="lazy" />
                    <h4 className="mt-3 text-lg font-semibold text-slate-900">{benefit.title}</h4>
                    <p className="mt-2 text-sm text-slate-600">{benefit.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="web-growth" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[2fr,3fr]">
              <h2 className="text-3xl font-semibold text-slate-900">
                Drive Business Growth with Scalable Web Development Services
              </h2>
              <p className="text-lg text-slate-600">
                We build web platforms that reduce time-to-market, lower costs, and scale with your roadmap. Explore more in our{" "}
                <Link href="/blog" className="underline decoration-brand/40 underline-offset-4">
                  web growth playbooks
                </Link>
                .
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {growthHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-inner">
                  <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        <section id="web-destination" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
              Why Trimsel?
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900">Web development built for impact</h2>
            <p className="mt-4 text-lg text-slate-600">
              As a leading web development company in Chennai, Trimsel blends innovative design, scalable code, and unmatched support to
              create powerful digital experiences.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {destinationHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="web-approach" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[2fr,3fr]">
              <h2 className="text-3xl font-semibold text-slate-900">Our strategic web development process</h2>
              <p className="text-lg text-slate-600">
                From discovery and UI/UX design to deployment and support, every phase is built to deliver faster timelines, governance, and
                measurable business value.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {approachPhases.map((phase) => (
                <div key={phase.title} className="rounded-3xl border border-white/60 bg-white p-6 shadow-lg shadow-slate-900/5">
                  <div className="flex items-center gap-3">
                    <Image src={phase.icon} width={48} height={48} alt={`${phase.title} icon`} loading="lazy" />
                    <h3 className="text-lg font-semibold text-slate-900">{phase.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="web-tools" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[2fr,3fr]">
              <h2 className="text-3xl font-semibold text-slate-900">Technology stack we rely on</h2>
              <p className="text-lg text-slate-600">
                Modern front-end frameworks, secure back-end stacks, and proven DevOps tooling keep every launch fast, compliant, and scalable.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {toolkitLogos.map((tool) => (
                <div key={tool.alt} className="flex flex-col items-center rounded-3xl border border-slate-100 bg-slate-50 p-4 shadow-inner">
                  <Image src={tool.src} width={120} height={48} alt={tool.alt} className="h-12 w-auto object-contain" loading="lazy" />
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
                <h2 className="mt-6 text-3xl font-semibold text-white">Let’s build a website that delivers real value</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Whether you’re launching something new or reworking an old site, we’ll partner closely to craft a web experience that
                  reflects your brand and supports your goals.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {heroHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <CheckIcon width={18} height={18} className="mt-1 text-brand" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                  aria-label="Book a Trimsel web consultation"
                >
                  Get a Consultation <ArrowRightIcon width={18} height={18} />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/web-cta-secondary.webp"
                  width={521}
                  height={557}
                  alt="Expert web development consultant"
                  className="w-full max-w-sm rounded-[32px] shadow-2xl shadow-black/40"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="web-clients" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
                  Our clients
                </div>
                <h3 className="mt-4 text-3xl font-semibold text-slate-900">We’re a trusted growth partner</h3>
              </div>
              <p className="text-lg text-slate-600">
                Trimsel teams run on continuous learning and experimentation. Every engagement gets the latest playbooks so your web platforms
                stay modern, secure, and conversion-ready.
              </p>
            </div>
            <div className="mt-10 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
              <ClientLogo />
            </div>
          </div>
        </section>

        <section id="faq" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions About Web Development</h2>
            <div className="mt-6 space-y-4">
              {webFaqItems.map(({ question, answer }) => (
                <details key={question} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-inner">
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900">{question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="web-insights" className="bg-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
              Latest web insights
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {webInsights.map((article) => (
                <article key={article.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">{article.tag}</p>
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
        heading="Launch A High-Performance Web App"
        subText="Let’s architect a scalable, SEO-ready web application tailored to your business goals."
        eventLabel="web_service_page"
      />
      <Footer />
      </main>
    </>
  );
}
