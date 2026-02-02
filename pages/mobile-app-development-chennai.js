import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NextSeo } from "next-seo";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm";
import CarouselComponent from "../components/carouselComponent";
import { postJson } from "../lib/api";
import { buildServiceJsonLd } from "../lib/serviceSchema";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import MailIcon from "../components/icons/MailIcon";
import CheckIcon from "../components/icons/CheckIcon";

const ClientLogo = dynamic(() => import("../components/clientLogo"), {
  ssr: false,
  loading: () => <div className="text-center text-muted py-5">Loading client logos…</div>,
});

export default function MobileApp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setValue("selectOption", event.target.value);
  };

  const featuredArticles = [
    {
      title: "5 Easy Ways a Mobile App Can Grow Your Business",
      excerpt:
        "Discover practical tactics to boost retention, repeat sales, and loyalty with a branded mobile experience.",
      href: "/blog/how-mobile-apps-grow-business",
      tag: "Mobile Strategy",
    },
    {
      title: "Explore All Trimsel Insights",
      excerpt:
        "Browse more articles on AI copilots, DevOps automation, and cloud-native delivery to plan your roadmap.",
      href: "/blog",
      tag: "Digital Transformation",
    },
  ];
  const trustHighlights = [
    {
      icon: { src: "/images/like1.png", alt: "Enterprise-grade mobile application icon" },
      title: "Enterprise-Grade Mobile Applications",
      body: (
        <>
          We deliver enterprise solutions that meet strict reliability standards. Apps undergo rigorous testing for security,
          scalability, and performance—powered by our{" "}
          <Link href="/cloud-consulting-services" className="underline decoration-brand/40 underline-offset-4">
            cloud consulting experts
          </Link>
          .
        </>
      ),
    },
    {
      icon: { src: "/images/profits.png", alt: "Cost efficiency icon" },
      title: "Cost-Effective & Scalable App Solutions",
      body:
        "From startups to enterprises, we build scalable apps that balance cost-effectiveness with enterprise-grade quality so you can grow without limits.",
    },
    {
      icon: { src: "/images/guru1.png", alt: "Expert developers icon" },
      title: "Expert Mobile App Developers",
      body:
        "Hire dedicated specialists in native iOS, Android, Flutter, and React Native to deliver feature-rich, intuitive experiences.",
    },
    {
      icon: { src: "/images/ethics1.png", alt: "Agile delivery icon" },
      title: "Agile & Transparent Process",
      body: (
        <>
          Our agile workflow keeps you informed with real-time updates and collaborative reviews, accelerated by our{" "}
          <Link href="/devops-consulting-services" className="underline decoration-brand/40 underline-offset-4">
            DevOps consulting team
          </Link>
          .
        </>
      ),
    },
    {
      icon: { src: "/images/customer1.png", alt: "User-centric design icon" },
      title: "User-Centric Mobile App Design",
      body:
        "UI/UX specialists craft intuitive journeys that boost engagement, retention, and customer satisfaction across every device.",
    },
    {
      icon: { src: "/images/time1.png", alt: "Faster delivery icon" },
      title: "Faster Delivery & Deployment",
      body:
        "Low-code accelerators and automated testing shorten time-to-market while preserving the build quality enterprises require.",
    },
    {
      icon: { src: "/images/customer1.png", alt: "Cross-platform icon" },
      title: "Cross-Platform App Development",
      body: (
        <>
          Flutter and React Native experts ship high-performance apps for iOS and Android while layering in AI-powered personalization
          via our{" "}
          <Link href="/ai-development-company" className="underline decoration-brand/40 underline-offset-4">
            AI development practice
          </Link>
          .
        </>
      ),
    },
    {
      icon: { src: "/images/customer1.png", alt: "Security shield icon" },
      title: "Security & Compliance",
      body:
        "We enforce GDPR, HIPAA, and PCI-DSS controls from design through launch, using encryption and governance to protect every interaction.",
    },
    {
      icon: { src: "/images/customer1.png", alt: "Support services icon" },
      title: "Post-Launch Support & Maintenance",
      body:
        "Our team provides 24/7 monitoring, proactive updates, and feature enhancements so your app stays fast, secure, and relevant.",
    },
  ];
  const processSteps = [
    {
      icon: { src: "/images/Group2539.png", alt: "Strategic roadmap icon" },
      title: "Strategic Roadmap & Consultation",
      body:
        "We start with a deep-dive into your idea, aligning goals, KPIs, and scope so every sprint ladders up to measurable outcomes.",
    },
    {
      icon: { src: "/images/Group2538.png", alt: "UI and UX design icon" },
      title: "Customized UI/UX Design",
      body:
        "Designers craft intuitive journeys for iOS, Android, Flutter, and React Native apps, boosting engagement from the first tap.",
    },
    {
      icon: { src: "/images/Group2540.png", alt: "Agile development icon" },
      title: "Agile Development Methodology",
      body:
        "Iterative sprints, continuous testing, and rapid feedback loops shorten time-to-market without sacrificing quality.",
    },
    {
      icon: { src: "/images/Group2541.png", alt: "Advanced technology integration icon" },
      title: "Advanced Technology Integration",
      body:
        "We integrate AI, ML, IoT, and blockchain capabilities to build future-ready apps that scale with demand.",
    },
    {
      icon: { src: "/images/Group2542.png", alt: "Quality assurance shield icon" },
      title: "Rigorous Testing & QA",
      body:
        "Functional, performance, security, and UAT cycles ensure every release is stable, compliant, and lightning fast.",
    },
    {
      icon: { src: "/images/Group2543.png", alt: "App launch rocket icon" },
      title: "Seamless Launch & Deployment",
      body:
        "Our team navigates App Store and Google Play reviews, optimizing listings for discoverability and smooth rollouts.",
    },
    {
      icon: { src: "/images/Group2543.png", alt: "Ongoing support icon" },
      title: "Continuous Support & Maintenance",
      body:
        "Post-launch, we monitor, patch, and enhance your app with proactive updates so it stays secure and high-performing.",
    },
  ];

  async function onSubmitForm(values) {
    try {
      await postJson("/api/contact", values);
      console.log("Contact request sent");
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  }

  const faqItems = [
    {
      question: "Why Choose Trimsel as Your Mobile App Development Company in Chennai?",
      answer:
        "Trimsel is a top-rated mobile app development company in Chennai, India, trusted by startups and enterprises. We specialize in iOS, Android, and cross-platform apps using cutting-edge technologies like Flutter and React Native.",
    },
    {
      question: "How Much Does It Cost to Develop a Mobile App?",
      answer:
        "The cost of mobile app development varies based on features, complexity, platform, and development approach. At Trimsel, we offer scalable solutions tailored to your unique business needs and budget.",
    },
    {
      question: "Which Is Better: Native or Cross-Platform App Development?",
      answer:
        "Native apps (iOS or Android) offer high performance, while cross-platform apps built using Flutter or React Native are faster to develop and more cost-effective. We help you choose the right approach based on your project scope.",
    },
    {
      question: "Do You Offer Flutter App Development Services?",
      answer:
        "Yes! We’re a Flutter app development company in Chennai offering fast, cost-efficient cross-platform mobile applications with native-like performance.",
    },
    {
      question: "How Long Does It Take to Develop a Mobile App?",
      answer:
        "A basic app can take 6–8 weeks, while feature-rich enterprise mobile apps may take 4–6 months. We follow agile development for faster time-to-market without compromising quality.",
    },
    {
      question: "Can I Hire Mobile App Developers from Trimsel?",
      answer:
        "Absolutely. We provide dedicated mobile app developers in Chennai to work on your project full-time or part-time, ensuring transparency, speed, and technical excellence.",
    },
    {
      question: "What Is Hybrid Mobile App Development and Is It Right for My Business?",
      answer:
        "Hybrid mobile apps are built using web technologies like HTML, CSS, and JavaScript with frameworks like Ionic. They are ideal for MVPs or businesses looking for quick deployment across platforms.",
    },
    {
      question: "Is My App Secure and Compliant with Data Protection Laws?",
      answer:
        "Yes. We implement best practices for mobile app security and ensure compliance with GDPR, HIPAA, and PCI-DSS based on your industry and location.",
    },
    {
      question: "Do You Provide Post-Launch Support and Maintenance?",
      answer:
        "Yes, we offer ongoing maintenance, feature enhancements, performance monitoring, and support services to keep your app secure and up to date.",
    },
    {
      question: "How Can I Get Started with My Mobile App Project?",
      answer:
        "You can book a consultation with our team to discuss your app idea, goals, and expectations. We’ll help you plan and validate your mobile app development journey from start to finish.",
    },
  ];

  const serviceJsonLd = buildServiceJsonLd({
    slug: "mobile-app-development-chennai",
    serviceName: "Mobile App Development (Chennai)",
    serviceType: "Mobile Application Development",
    description:
      "iOS, Android, and cross-platform (Flutter/React Native) app development with secure, scalable architectures.",
    offers: [
      "iOS App Development",
      "Android App Development",
      "Flutter / Cross-platform Apps",
      "App Testing & Security",
      "UI/UX & App Design",
    ],
    faq: faqItems,
    breadcrumbs: [
      { name: "Home", item: "https://www.trimsel.com/" },
      {
        name: "Mobile App Development (Chennai)",
        item: "https://www.trimsel.com/mobile-app-development-chennai",
      },
    ],
  });

  return (
    <>
      <NextSeo
        title="Mobile App Development Company in Chennai, India"
        description="Trimsel is a top mobile app development company in Chennai, India. We build secure, scalable iOS, Android, Flutter & hybrid apps tailored to your business."
        canonical="https://www.trimsel.com/mobile-app-development-chennai"
        openGraph={{
          type: "website",
          url: "https://www.trimsel.com/mobile-app-development-chennai",
          title: "Mobile App Development Company in Chennai, India",
          description:
            "Trimsel is a top mobile app development company in Chennai, India. We build secure, scalable iOS, Android, Flutter & hybrid apps tailored to your business.",
          locale: "en_IN",
          site_name: "Trimsel",
          images: [
            {
              url: "https://www.trimsel.com/images/mobilehero.webp",
              width: 1200,
              height: 630,
              alt: "Trimsel team delivering mobile app solutions in Chennai",
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
            key={`mobile-app-service-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <main>
        <section className="bg-gradient-to-b from-white via-slate-50 to-white">
          <Header />
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-28 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-6">
              <h1 className="mt-4 text-4xl font-semibold text-slate-900">
                Mobile App Development <br />
                Company in Chennai
              </h1>
              <p className="mt-8 text-base leading-relaxed text-black">
                An AI-driven logistics optimization platform that revolutionizes how <br />
                businesses plan, execute, and manage transportation. Real-time <br />
                insights enable smarter decisions, while end-to-end visibility ensures <br />
                greater transparency across every stage of the supply chain.
              </p>
              <div>
                <Link
                  href="/contact-us"
                  className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xs bg-gradient-to-r from-[#29B375] to-[#2E70C3] text-white font-medium hover:scale-105 transition-all shadow-lg"
                >
                  Get a Mobile App Consultation <Image src="/images/material-symbols_arrow-right-alt.png" width={20} height={20} alt="" />
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center mt-8">
              <div className="absolute inset-0 rounded-full bg-blue-100 blur-3xl opacity-60" />

              <div className="relative">
                <Image
                  src="/mobile2.png"
                  alt="Home"
                  width={340}
                  height={360}
                  className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 scale-[1.3] zoom-animation ml-6"
                  priority
                />
                <Image
                  src="/mobile1.png"
                  alt="Home"
                  width={520}
                  height={640}
                  className="relative z-10"
                  priority
                />
                <Image
                  src="/mobile3.png"
                  alt="AI Robot"
                  width={100}
                  height={100}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[320px] max-w-none h-auto ml-2 mt-3"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="client" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
              Our Clients
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <h2 className="text-3xl font-semibold text-slate-900">Trusted by Leading Brands</h2>
              <p className="text-lg text-slate-600">
                We collaborate with startups and enterprises to ship secure, scalable mobile apps that improve user
                experience and unlock growth.
              </p>
            </div>
            <div className="mt-10 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
              <ClientLogo />
            </div>
          </div>
        </section>

        <section id="about-mbl" className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
              Who we are
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900">
              About Trimsel – Leading Mobile App Development Company in Chennai, India
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              In today’s digital-first world, mobile apps do more than support your business. At Trimsel, we believe a
              successful app should solve real-world challenges, create user delight, and deliver long-term value. It’s
              not just about building software—it’s about building the future.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Our team blends technical expertise with creativity to build future-ready digital solutions that drive business
              growth. As a top mobile app development company in Chennai, we specialize in developing custom Android, iOS,
              and cross-platform applications that are scalable, secure, and high-performing. We also handle backend, CI/CD,
              and releases via our{" "}
              <Link href="/devops-consulting-services" className="underline decoration-brand/40 underline-offset-4">
                DevOps services
              </Link>{" "}
              and{" "}
              <Link href="/cloud-consulting-services" className="underline decoration-brand/40 underline-offset-4">
                Cloud consulting
              </Link>
              .
            </p>
            <div className="mt-10 rounded-3xl border border-white/60 bg-white p-6 shadow-lg shadow-slate-900/5">
              <h3 className="text-xl font-semibold text-slate-900">
                Why Do Businesses Choose Trimsel for Mobile App Development?
              </h3>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
                {[
                  {
                    title: "Customized Mobile Solutions",
                    body: "Tailored iOS, Android, and hybrid apps built for startups and enterprises.",
                  },
                  {
                    title: "Comprehensive App Development",
                    body: "End-to-end app strategy, UI/UX design, development, deployment, and growth support.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    body: "AI, machine learning, IoT, and blockchain expertise for next-gen experiences.",
                  },
                  {
                    title: "Seamless Performance",
                    body: "Optimized for scalability, security, and superior user experience.",
                  },
                ].map((item) => (
                  <li key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <strong className="text-slate-900">{item.title}</strong>
                    <span className="mt-2 block text-slate-600">{item.body}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We closely monitor industry trends, user preferences, and niche market insights to deliver apps that resonate
              deeply with your audience, driving higher engagement and tangible business results. Our expertise in leveraging
              cutting-edge technologies ensures every application we develop not only meets current market demands but also
              positions your business for long-term success.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Our commitment to high-quality app development services in Chennai has earned us recognition as a trusted mobile
              app development brand in India.
            </p>
          </div>
        </section>

        {/*Why choose Trimsel Section*/}
        {/* <section id="about-mbl">
          <div className="container mbl-about">
            <div className="row mbl-abt">
              <div className="col-lg-9 col-md-9">
                <Stack direction="horizontal" className="pb-4">
                  <div className=" badge-abot-btn">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> Why Trimsel? Your Trusted Mobile App Development Partner </p>
                  </div>
                </Stack>
                <h2 className="about-head">
                  About Trimsel – Expert Mobile App Developers in Chennai,India
                </h2>
              </div>
              <div className="col-lg-3 col-md-3">
                <Image
                  src="/images/Group306.png"
                  className="mdl-btn"
                  alt="Expert app Developers in Chennai - Trimsel"
                  width={160}
                  height={160}
                />
              </div>
            </div>
            <p className="cliented-text">
            What Makes Trimsel the Preferred Mobile App Development Company?<br></br>

          Proven Experience & Industry Expertise<br></br>
          6+ Years in Mobile App Development – Delivering innovative & high-performance apps.<br></br>
          200+ Mobile Applications Successfully Delivered – Across diverse industries like FinTech, Healthcare, E-commerce & more.<br></br>
          Cutting-Edge Technology & Custom Solutions<br></br>
          Expertise in AI, ML, Blockchain, & IoT – Powering next-gen applications.<br></br>
          Cross-Platform & Hybrid Development – Flutter, React Native, & more.<br></br>
          Scalable & Future-Proof Solutions – Apps built for performance, security & long-term success.<br></br>
          Trusted by Global Brands & Startups<br></br>
          A track record of working with leading enterprises & startups, ensuring seamless mobile app solutions.<br></br>
          Dedicated Support & Agile Development Approach – From idea to launch, we guide you through every step.<br></br>
            </p>
          </div>
        </section> */}

        <section id="digital-mbl" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <h3 className="text-3xl font-semibold text-slate-900">
                Why Businesses Trust Trimsel for Mobile Application Development
              </h3>
              <p className="text-lg leading-relaxed text-slate-600">
                Trimsel empowers teams with innovative, high-performance mobile solutions. Our iOS, Android, and cross-platform
                apps are tailored to your business objectives, ensuring enhanced performance, robust security, and exceptional UX.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Looking for inspiration? Read{" "}
                <Link href="/blog/how-mobile-apps-grow-business" className="underline decoration-brand/40 underline-offset-4">
                  “5 Easy Ways a Mobile App Can Grow Your Business.”
                </Link>{" "}
                It covers the exact tactics we use to transform MVPs into revenue-driving products.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trustHighlights.map(({ icon, title, body }) => (
                <div key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5">
                  <div className="flex items-center gap-3">
                    <Image
                      src={icon.src}
                      width={48}
                      height={48}
                      alt={icon.alt}
                      className="h-12 w-12 rounded-2xl bg-slate-100 p-2"
                      loading="lazy"
                    />
                    <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="help-mbl" className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
                  Process
                </div>
                <h3 className="mt-6 text-3xl font-semibold text-white">
                  Our Proven Mobile App Development Process for Business Growth
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-200">
                  We streamline each stage—from ideation through launch—using agile methods and advanced tooling. The result: rapid
                  delivery, uncompromising quality, and seamless experiences across iOS, Android, and cross-platform stacks.
                </p>
                <Image
                  src="/images/beatsnoop4.png"
                  width={600}
                  height={400}
                  alt="Mobile app development workflow"
                  className="mt-8 rounded-[32px] border border-white/10 object-cover shadow-2xl shadow-black/40"
                  loading="lazy"
                  sizes="(max-width: 768px) 90vw, 600px"
                />
              </div>
              <div className="space-y-4">
                {processSteps.map((step) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                      <Image src={step.icon.src} width={40} height={40} alt={step.icon.alt} className="h-10 w-10 object-contain" loading="lazy" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-200">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        <section className="bg-slate-900">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 px-6 py-12 shadow-2xl shadow-black/30 sm:px-10">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
              🚀 Get in touch
            </div>
            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold text-white">Let’s Build Your Mobile App – Talk to Our Experts</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Trusted by brands across India and globally, Trimsel specializes in iOS, Android, and cross-platform development.
                  From design to deployment, we bring your app idea to life with precision and performance.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {[
                    "Free consultation with senior app strategists",
                    "End-to-end product design, engineering, and DevOps",
                    "Solutions that stay scalable, secure, and high-performing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon width={18} height={18} className="mt-1 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                  aria-label="Contact Trimsel’s mobile app experts"
                >
                  <MailIcon className="h-4 w-4" />
                  Get in Touch
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/ctambbg.webp"
                  width={550}
                  height={550}
                  alt="Chat with our expert"
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


        <section id="recent-mbl-work" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[2fr,3fr,auto] lg:items-center">
              <h2 className="text-3xl font-semibold text-slate-900">
                Success Stories – How Our Mobile Apps Drive Business Growth
              </h2>
              <p className="text-lg text-slate-600">
                With six+ years of experience we’ve launched 200+ iOS, Android, and cross-platform apps for fintech, healthcare,
                retail, and SaaS brands—each focused on measurable results like faster onboarding, higher retention, or new revenue.
              </p>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-slate-900/5 transition hover:border-brand hover:text-brand"
                href="/portfolio"
                aria-label="See Trimsel mobile app case studies"
              >
                View All Cases
                <Image src="/images/material-symbols_arrow-right-alt.png" width={24} height={24} alt="Arrow right" loading="lazy" />
              </Link>
            </div>
            <div className="mt-10 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
              <CarouselComponent />
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
                FAQ
              </div>
              <h2 className="mt-6 text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-slate-600">
                Answers to the most common questions founders and IT teams ask when planning iOS, Android, or cross-platform app development in Chennai.
              </p>
            </div>
            <div className="mt-8 space-y-4">
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

        {/* <TestimonialClient /> */}

        <section id="mobile-insights" className="bg-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
              Insights
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold text-white">Latest Mobile App Growth Playbooks</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Stay ahead with Trimsel’s how-to guides on monetization, retention, DevOps automation, and AI-driven product growth.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Featured reads</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {featuredArticles.map((article) => (
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
          heading="Ready To Build Your Mobile App?"
          subText="Speak with our iOS & Android experts to turn your idea into a secure, high-performance mobile product."
          eventLabel="mobile_service_page"
        />
        <Footer />
      </main>
    </>
  );
}
