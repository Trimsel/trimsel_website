import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import ClientLogo from "../components/clientLogo";
import ContactForm from "../components/ContactForm";
import { buildServiceJsonLd } from "../lib/serviceSchema";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import CheckIcon from "../components/icons/CheckIcon";

const faqItems = [
  {
    question: "What is digital marketing and how can it help my business?",
    answer:
      "Digital marketing uses online channels like search, social, and content to promote your business. It improves visibility, drives website traffic, builds brand awareness, and generates qualified leads that convert into revenue.",
  },
  {
    question: "How does SEO work, and why is it important for Chennai-based businesses?",
    answer:
      "SEO optimizes your website’s content, structure, and authority so it ranks higher on Google for relevant searches. For Chennai brands, it ensures local customers find you first, increasing credibility, store visits, and sales.",
  },
  {
    question: "Do you offer Local SEO services?",
    answer:
      "Yes. We specialize in Local SEO to improve Google Maps visibility, manage citations, and optimize multilingual landing pages so clinics, stores, and service providers across Chennai attract more nearby customers.",
  },
  {
    question: "What platforms do you cover under social media marketing?",
    answer:
      "We plan and run campaigns across Instagram, Facebook, LinkedIn, and YouTube. Expect Meta retargeting, LinkedIn lead generation, and creative calendars that keep your brand top-of-mind.",
  },
  {
    question: "How are your SEO consultants in Chennai different from others?",
    answer:
      "Trimsel consultants blend technical SEO, entity-driven content, link building, and analytics with local insights. We report on revenue impact, not just rankings, so every optimization ties back to ROI.",
  },
  {
    question: "Can you help with lead generation through Google Ads or PPC?",
    answer:
      "Absolutely. Our PPC team builds high-intent campaigns on Google, Bing, and YouTube with SKAG, Performance Max, and remarketing structures designed to maximize ROAS and pipeline velocity.",
  },
  {
    question: "How do I know which digital marketing service I need?",
    answer:
      "We start with a quick audit of your website, analytics, and campaigns to recommend the best mix of SEO, PPC, social, and content for your growth goals.",
  },
  {
    question: "Is social media marketing effective for B2B businesses?",
    answer:
      "Yes. LinkedIn thought-leadership, webinar funnels, and retargeting ads consistently drive B2B demand. We pair creative storytelling with gated assets and SDR-ready follow-ups.",
  },
  {
    question: "Do you offer content marketing as part of your services?",
    answer:
      "Yes. Our content pods deliver SEO-rich blogs, landing pages, drip campaigns, and social assets that nurture prospects through every stage of the funnel.",
  },
  {
    question: "Why is Trimsel considered one of the top digital marketing agencies in Chennai?",
    answer:
      "We combine Chennai-specific insights, AI-backed analytics, and full-stack delivery across SEO, PPC, social, and automation. Every sprint is measured against revenue, not vanity metrics.",
  },
];

const heroStats = [
  "150+ multi-channel campaigns shipped for SaaS, retail, and BFSI brands",
  "4.5x average ROAS across paid search and paid social programs",
  "Dedicated Chennai squad covering SEO, PPC, SMM, and content automation",
];

const serviceCards = [
  {
    icon: "/images/seo-icon.png",
    title: "SEO Optimization",
    body:
      "Technical clean-ups, on-page polish, and authority building that keep you visible for every Chennai and global search.",
    href: "#seo-services",
  },
  {
    icon: "/images/sem-icon.png",
    title: "Search Engine Marketing",
    body:
      "Performance-driven Google Ads and YouTube campaigns with SKAG, PMax, and real-time dashboards tuned for ROAS.",
    href: "#sem-services",
  },
  {
    icon: "/images/scl-mda.png",
    title: "Social Media Marketing",
    body:
      "Instagram reels, Facebook retargeting, and LinkedIn storytelling that keep your community engaged and converting.",
    href: "#smm-services",
  },
  {
    icon: "/images/content-marketing.png",
    title: "Content Marketing",
    body:
      "SEO-rich blogs, landing pages, and lifecycle emails that turn research intent into marketing-qualified leads.",
    href: "#content-marketing",
  },
  {
    icon: "/images/b2b.png",
    title: "B2B & B2C Campaigns",
    body:
      "Channel mixes tailored for enterprise ABM or high-volume D2C funnels, backed by localized messaging.",
    href: "#b2b-marketing",
  },
  {
    icon: "/images/b2c.png",
    title: "LinkedIn Marketing",
    body:
      "Sponsored content, document ads, and conversation flows that put your founders in front of decision makers.",
    href: "#linkedin-marketing",
  },
  {
    icon: "/images/ico.png",
    title: "Instagram & Facebook Ads",
    body:
      "Meta Advantage+ structures, first-party audience syncs, and creator collaborations for thumb-stopping reach.",
    href: "#paid-social",
  },
  {
    icon: "/images/pay-per-click.png",
    title: "Performance Creative & CRO",
    body:
      "Creative lab support plus landing page experiments that lift conversion rates across every touchpoint.",
    href: "#ppc-services",
  },
  {
    icon: "/images/seo-icon.png",
    title: "Local SEO & Map Pack",
    body:
      "Google Business Profile management, multilingual reviews, and call tracking to dominate neighborhood searches.",
    href: "#local-seo",
  },
];

const serviceDeepDive = [
  {
    id: "seo-services",
    title: "Enterprise & Local SEO",
    body:
      "Technical fixes, Core Web Vitals tuning, and entity-based content keep T. Nagar, Velachery, and OMR searches flowing into your pipeline.",
    cta: "Book a technical SEO audit →",
  },
  {
    id: "sem-services",
    title: "Search Engine Marketing / PPC",
    body:
      "SKAG + Performance Max structures protect ROAS while Chennai + GCC launches run in parallel with full-funnel reporting.",
    cta: "Plan a PPC sprint →",
  },
  {
    id: "smm-services",
    title: "Social Media & Community",
    body:
      "From Instagram reels for D2C brands to LinkedIn thought-leadership for SaaS founders, creative, paid, and community loops stay on-message.",
    cta: "See our social content calendar →",
  },
  {
    id: "content-marketing",
    title: "Content & Email Engines",
    body:
      "Topic clusters plus lifecycle nurture flows ensure every blog, case study, and newsletter ladders up to SQLs.",
    cta: "Request a content roadmap →",
  },
  {
    id: "b2b-marketing",
    title: "B2B + ABM Pods",
    body:
      "Multi-touch campaigns target IT corridors in Thoraipakkam, Bangalore, and Dubai with custom landing pages and SDR-ready data.",
    cta: "Unlock an ABM pilot →",
  },
  {
    id: "linkedin-marketing",
    title: "LinkedIn Demand Gen",
    body:
      "Carousel ads, document drops, and conversation ads synced to your CRM so sales reacts the moment intent spikes.",
    cta: "Review our LinkedIn templates →",
  },
  {
    id: "ppc-services",
    title: "Performance Creative & CRO",
    body:
      "Creative pods design thumb-stopping assets while CRO specialists test hero sections, chatbots, and checkout flows for incremental wins.",
    cta: "Optimize my funnels →",
  },
  {
    id: "local-seo",
    title: "Local SEO & Map Pack Wins",
    body:
      "We manage Google Business Profiles, call tracking, and reputation programs so Nungambakkam and Anna Nagar prospects find you first.",
    cta: "Request a location expansion plan →",
  },
  {
    id: "paid-social",
    title: "Paid Social & Creator Collabs",
    body:
      "Partner with Chennai creators, deploy Advantage+ Shopping campaigns, and retarget using first-party data for more revenue from Meta.",
    cta: "Discuss paid social ideas →",
  },
];

const resultHighlights = [
  {
    value: "180%",
    description: "organic traffic lift for an OMR SaaS brand in five months.",
  },
  {
    value: "55%",
    description: "drop in CPL for a Chennai fintech after restructuring Google Ads.",
  },
  { value: "4.2x", description: "ROAS on Meta for a D2C label using AI-generated creatives." },
];

const painPoints = [
  "Website traffic isn’t converting into leads or revenue.",
  "Google rankings plateaued even after investing in SEO.",
  "Meta/Instagram ads burn budget without predictable ROI.",
  "Brand visibility across search and social is inconsistent.",
  "Juggling SEO, content, and paid media feels overwhelming.",
  "Competitors outrank you for your most profitable keywords.",
  "Sales pipeline slows down because digital demand is sporadic.",
];

const marketingInsights = [
  {
    title: "Full-Funnel SEO Playbooks",
    excerpt: "See how we combine technical SEO, landing pages, and CRO to double organic revenue for Chennai brands.",
    href: "/blog",
    tag: "SEO Strategy",
  },
  {
    title: "Explore Trimsel’s Digital Growth Library",
    excerpt: "Dive into SEO, PPC, and automation articles to plan your next demand-generation sprint.",
    href: "/blog",
    tag: "Digital Insights",
  },
];

export default function Digital() {
  const serviceJsonLd = buildServiceJsonLd({
    slug: "digital-marketing-company-chennai",
    serviceName: "Digital Marketing Services (Chennai)",
    serviceType: "Digital Marketing",
    description: "SEO, PPC, social media marketing, content marketing, and analytics for growth-focused brands.",
    offers: [
      "SEO Services in Chennai",
      "PPC (Pay-Per-Click) Campaigns",
      "Social Media Marketing",
      "LinkedIn & Instagram Marketing",
      "Content & Email Marketing",
    ],
    faq: faqItems,
    breadcrumbs: [
      { name: "Home", item: "https://www.trimsel.com/" },
      { name: "Digital Marketing Company Chennai", item: "https://www.trimsel.com/digital-marketing-company-chennai" },
    ],
  });

  return (
    <>
      <NextSeo
        title="Top Digital Marketing Company in Chennai | SEO, PPC, SMM Experts"
        description="Trimsel is a digital marketing company in Chennai offering SEO, PPC, social media marketing & content strategies to boost visibility and drive results."
        canonical="https://www.trimsel.com/digital-marketing-company-chennai"
        openGraph={{
          type: "article",
          url: "https://www.trimsel.com/digital-marketing-company-chennai",
          title: "Top Digital Marketing Company in Chennai | SEO, PPC, SMM Experts",
          description:
            "Trimsel is a trusted digital marketing agency in Chennai specializing in SEO services, PPC advertising, and social media campaigns for high-growth brands.",
          locale: "en_IN",
          site_name: "Trimsel",
          images: [
            {
              url: "https://www.trimsel.com/images/digital-homepage.webp",
              width: 1200,
              height: 630,
              alt: "Trimsel digital marketing experts collaborating in Chennai",
            },
          ],
          article: {
            section: "Digital Marketing",
            tags: ["Digital Marketing", "SEO Services", "PPC Campaigns", "Social Media Marketing", "Chennai"],
          },
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@TrimselSoftwares",
          site: "@TrimselSoftwares",
        }}
        additionalMetaTags={[
          { name: "robots", content: "index, follow" },
          {
            name: "twitter:title",
            content: "Digital Marketing Agency in Chennai – Trimsel",
          },
          {
            name: "twitter:description",
            content: "Boost visibility and qualified leads with Trimsel’s SEO, PPC, and social media experts based in Chennai.",
          },
          {
            name: "twitter:image:alt",
            content: "Trimsel digital marketing specialists planning campaigns in Chennai",
          },
        ]}
      />
      <Head>
        {serviceJsonLd.map((schema, index) => (
          <script
            key={`digital-marketing-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <Header />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
              <span className="mx-2 text-slate-600">·</span>
              Digital Marketing Services
            </p>
            <h1 className="text-4xl font-semibold leading-tight">Top Digital Marketing Company in Chennai</h1>
            <p className="text-lg leading-relaxed text-slate-300">
              Boost visibility, traffic, and revenue with Trimsel’s Chennai-based SEO, PPC, social media, and content experts.
              We pair hyperlocal playbooks with AI-driven analytics so every impression accelerates your pipeline.
            </p>
            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                aria-label="Book a digital marketing strategy session with Trimsel"
              >
                Get a Digital Strategy Session
                <ArrowRightIcon width={20} height={20} />
              </Link>
              <p className="mt-4 text-sm text-slate-400">
                150+ campaigns delivered for SaaS, retail, and BFSI brands with 4.5x average ROAS.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              {heroStats.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/digitall-hero.webp"
              width={620}
              height={520}
              alt="Trimsel digital marketing strategists collaborating"
              className="w-full max-w-[520px]"
              priority
              quality={80}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 520px"
            />
          </div>
        </div>
      </section>

      <section id="dig-overview" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[2fr,1fr] lg:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
              What we do
            </div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Leading Digital Marketing Partner for Chennai’s High-Growth Brands
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Visibility matters more than ever. Our digital marketers pair{" "}
              <Link href="/web-development-company-chennai" className="underline decoration-brand/40 underline-offset-4">
                SEO-ready web experiences
              </Link>{" "}
              with paid media, content, and social strategies that align to your KPIs.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              From T. Nagar retailers to OMR SaaS teams, we build channel mixes tailored to Chennai’s bilingual buyers—supported
              by{" "}
              <Link href="/cloud-consulting-services" className="underline decoration-brand/40 underline-offset-4">
                cloud consultants
              </Link>
              ,{" "}
              <Link href="/devops-consulting-services" className="underline decoration-brand/40 underline-offset-4">
                DevOps architects
              </Link>
              , and{" "}
              <Link href="/ai-development-company" className="underline decoration-brand/40 underline-offset-4">
                AI engineers
              </Link>{" "}
              who keep your martech stack scalable.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Expect hyperlocal landing pages, Tamil-English ad sets, and attribution dashboards that prove every rupee’s impact—
              the same playbooks we share in our{" "}
              <Link href="/blog/how-mobile-apps-grow-business" className="underline decoration-brand/40 underline-offset-4">
                latest growth breakdowns
              </Link>
              .
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Google algorithms evolve daily. Our Chennai SEO team ships entity-based content, schema, and authority programs that
              keep you resilient, competitive, and conversion-focused.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
            <Image src="/images/graph.png" width={110} height={110} alt="" loading="lazy" />
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Need more qualified leads from Google?</h3>
            <p className="mt-3 text-sm text-slate-600">
              Share your goals and we’ll audit your site, ad accounts, and analytics stack in one collaborative call.
            </p>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
              aria-label="Request an SEO audit"
            >
              Request an Audit
            </Link>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">
              Our team replies within one business day.
            </p>
          </div>
        </div>
      </section>

      <section id="digital-services" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
            Core services
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[2fr,3fr]">
            <h2 className="text-3xl font-semibold text-slate-900">Full-funnel digital marketing capabilities</h2>
            <p className="text-lg text-slate-600">
              Each service pod works as an extension of your team, blending strategy, execution, and experimentation to keep paid
              and organic growth compounding.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map(({ icon, title, body, href }) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1"
              >
                <Image src={icon} width={70} height={70} alt={title} loading="lazy" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{body}</p>
                <Link href={href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Explore {title}
                  <ArrowRightIcon width={16} height={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="digital-service-details" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Chennai-first playbooks for every growth lever</h2>
              <p className="mt-4 text-lg text-slate-600">
                Every Trimsel engagement starts with measurement and a channel blueprint. Use the quick links below to see how we
                tackle each initiative before hopping on a call.
              </p>
            </div>
            <div className="flex items-end justify-start lg:justify-end">
              <Link href="#digital-faq" className="text-sm font-semibold text-brand">
                Read our most asked FAQs →
              </Link>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceDeepDive.map(({ id, title, body, cta }) => (
              <article key={id} id={id} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{body}</p>
                <Link href="/contact-us" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  {cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="digital-results" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl grid gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
              Results
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white">Proof our playbooks convert</h2>
            <ul className="mt-6 space-y-3 text-lg text-slate-300">
              {resultHighlights.map(({ value, description }) => (
                <li key={description} className="flex items-start gap-3">
                  <span className="text-2xl font-semibold text-brand">{value}</span>
                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner">
            <p className="text-lg leading-relaxed text-white">
              “Trimsel didn’t just run campaigns—they tied every initiative to pipeline. We now have visibility into each
              touchpoint from ad click to CRM opportunity.”
            </p>
            <div className="mt-6">
              <p className="text-xl font-semibold text-white">Shruti Natarajan</p>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">CMO, Chennai-based HealthTech scale-up</p>
            </div>
          </div>
        </div>
      </section>

      <section id="digi-agency" className="bg-white">
        <div className="mx-auto max-w-6xl grid gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[2fr,1fr] lg:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
              Why Trimsel
            </div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Chennai’s trusted digital marketing team for performance, not vanity metrics
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Our SEO consultants, social strategists, and PPC experts work like an embedded squad—learning what sets you apart,
              understanding your audience, and tailoring a strategy that fits like a glove.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              We combine AI-driven analytics, machine learning, and automation to predict search trends, analyze social sentiment,
              and optimize spend in real time. Every rupee goes further because it’s aimed at the right person with the right
              message.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              From AI-powered SEO strategies to chatbot-led lead gen and dynamic A/B testing, we bring Silicon Valley-grade rigor to
              Chennai’s growth stories.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 text-center shadow-inner">
            <h3 className="text-lg font-semibold text-slate-900">See Our Proven Digital Marketing Strategy</h3>
            <Image
              src="/images/mrk-strategy.png"
              width={360}
              height={400}
              alt="Trimsel digital marketing strategy illustration"
              className="mx-auto mt-6 w-full max-w-xs"
              loading="lazy"
            />
            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-brand hover:text-brand"
            >
              View the blueprint
            </Link>
          </div>
        </div>
      </section>

      <section id="dig-leverage" className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[2fr,3fr] lg:px-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-slate-900">Struggling to grow online?</h3>
            <p className="text-lg leading-relaxed text-slate-600">
              Whether you’re a startup founder, SMB owner, or enterprise leader, if any of these challenges feel familiar, it’s
              time to evolve your digital playbook.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
              aria-label="Book a digital marketing consultation"
            >
              Get a strategy consultation
              <ArrowRightIcon width={18} height={18} />
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-inner">
            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckIcon width={18} height={18} className="mt-1 text-brand" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              Trimsel pairs SEO, social, paid media, and content marketing with data-backed experimentation to turn these hurdles
              into predictable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
            Ready to launch?
          </div>
          <div className="mt-6 rounded-[32px] border border-slate-200 bg-gradient-to-r from-brand/10 via-white to-white px-8 py-10 shadow-lg shadow-slate-900/5">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-3xl font-semibold text-slate-900">
                  Not sure how to start with digital marketing? Let’s build a plan that works.
                </h3>
                <p className="mt-4 text-lg text-slate-600">
                  Whether you’re validating a new market or scaling demand, Trimsel’s Chennai team is ready with SEO, PPC, and SMM
                  specialists who own outcomes end-to-end.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                >
                  Let’s boost your business
                  <ArrowRightIcon width={18} height={18} />
                </Link>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">What we cover</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {[
                    "SEO + paid media performance snapshot",
                    "Lead quality, ROAS, and analytics review",
                    "Channel roadmap with quick-win experiments",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="client" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
            Our clients
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <h2 className="text-3xl font-semibold text-slate-900">We’re a trusted growth partner</h2>
            <p className="text-lg text-slate-600">
              Continuous learning powers every Trimsel engagement. Your campaigns benefit from fresh ideas, automation playbooks,
              and proven frameworks across industries.
            </p>
          </div>
          <div className="mt-10 rounded-3xl border border-white/60 bg-white p-6 shadow-lg shadow-slate-900/5">
            <ClientLogo />
          </div>
        </div>
      </section>

      <section id="digital-insights" className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
            Latest insights
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {marketingInsights.map((article) => (
              <article
                key={article.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur"
              >
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

      <section id="digital-faq" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
              FAQ
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-slate-600">
              Answers to the most common questions founders and marketers ask when planning demand-generation programs in Chennai.
            </p>
          </div>
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

      <ContactForm
        heading="Ready to Accelerate Digital Growth?"
        subText="Speak with our SEO, PPC, and social media experts to build a predictable, multi-channel pipeline."
        eventLabel="digital_marketing_service_page"
      />

      <Footer />
    </>
  );
}
