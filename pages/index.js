import { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { NextSeo, FAQPageJsonLd } from "next-seo";
import HomeSlider from "../components/homeSlider";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";
import { postJson } from "../lib/api";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import Faq from "../components/Faq";
import { faqData } from "../components/FaqData";

// Lazy Load Components for Performance Optimization

const ContactForm = dynamic(() => import("../components/ContactForm"), {
  ssr: false,
});
const ClientLogo = dynamic(() => import("../components/clientLogo"), {
  ssr: false,
  loading: () => (
    <div
      className="flex w-full flex-col items-center justify-center gap-3 py-10 text-sm text-slate-500"
      role="status"
      aria-live="polite"
    >
      <span
        className="inline-block h-8 w-8 animate-spin rounded-full border-2 border-brand border-t-transparent"
        aria-hidden="true"
      />
      <span>Loading client logos…</span>
    </div>
  ),
});

const ScrollSection = dynamic(() => import("../components/ScrollSection"), {
  ssr: false,
  loading: () => (
    <div className="py-10 text-center text-sm text-slate-500" role="status">
      Loading highlights…
    </div>
  ),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const [selectedOption, setSelectedOption] = useState(0);
  const [openFaqId, setOpenFaqId] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setValue("selectOption", event.target.value);
  };

  const toggleFaq = (id) => {
    // If clicking the same FAQ that's already open, close it
    // Otherwise, open the clicked FAQ (this automatically closes the previously open one)
    setOpenFaqId((prev) => (prev === id ? null : id));
  };
  const insights = [
    {
      title: "5 Easy Ways a Mobile App Can Grow Your Business",
      excerpt:
        "Turn downloads into loyal customers with practical tactics for SMBs and funded startups.",
      href: "/blog/how-mobile-apps-grow-business",
      tag: "Mobile Growth",
    },
    {
      title: "See More Trimsel Insights",
      excerpt:
        "Browse no-code friendly playbooks on AI, cloud cost control, DevOps, and demand generation.",
      href: "/blog",
      tag: "Thought Leadership",
    },
  ];
  async function onSubmitForm(values) {
    try {
      await postJson("/api/contact", values);
      console.log("Contact request sent");
    } catch (error) {
      console.error("Failed to submit contact form", error);
    }
  }
  return (
    <>
      {/* ✅ Next-SEO for SEO Optimization */}
      <NextSeo
        title="AI-Powered Software Development Company in Chennai"
        description="We build intelligent mobile apps, scalable web apps, AI and ML apps, cloud consulting, DevOps, and ROI-focused digital marketing for global brands"
        canonical="https://www.trimsel.com/"
        openGraph={{
          type: "website",
          url: "https://www.trimsel.com/",
          title: "AI-Powered Software Development Company in Chennai",
          description:
            "We build intelligent mobile apps, scalable web apps, AI and ML apps, cloud consulting, DevOps, and ROI-focused digital marketing for global brands",
          images: [
            {
              url: "https://www.trimsel.com/images/myherocloud.png",
              width: 1200,
              height: 630,
              alt: "Trimsel",
            },
          ],
          site_name: "Trimsel",
        }}
        twitter={{ cardType: "summary_large_image" }}
        additionalMetaTags={[
          { name: "application-name", content: "Trimsel" },
          { name: "site_name", content: "Trimsel" },
        ]}
      />

      {/* ✅ Keep only necessary elements in <Head> */}
      <main>
        <HomeSlider />
        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[2fr,1fr] lg:px-8">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Chennai’s AI-first product team
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[42px]">
                Chennai’s AI-first software team for apps, cloud, and growth
                marketing
              </h1>
              <p className="text-lg text-slate-600">
                Trimsel blends product strategy, full-stack engineering, and
                DevSecOps so you can launch reliable experiences faster. Whether
                you are validating an MVP or modernizing enterprise platforms,
                our architects cover the entire journey—from discovery workshops
                to post-launch success metrics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                >
                  Book a strategy call
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-800 transition hover:border-brand hover:text-brand"
                >
                  See our work
                </Link>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-inner">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                What we build
              </p>
              <ul className="space-y-3 text-sm font-semibold text-slate-700">
                <li>
                  <Link
                    href="/mobile-app-development-chennai"
                    className="flex items-center justify-between gap-3 hover:text-brand"
                  >
                    <span>Mobile app development</span>
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cloud-consulting-services"
                    className="flex items-center justify-between gap-3 hover:text-brand"
                  >
                    <span>Cloud &amp; DevOps consulting</span>
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-development-company"
                    className="flex items-center justify-between gap-3 hover:text-brand"
                  >
                    <span>AI copilots &amp; automation</span>
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Client Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center justify-center">
                <h2
                  className="font-urbanist text-[40px] font-semibold leading-[1.2]"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(28, 125, 189, 1) 0%, rgba(5, 168, 152, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0px 2px 3px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  OUR CLIENTS
                </h2>
              </div>
              <p className="max-w-[542px] font-manrope text-[28px] font-normal leading-[1.5] text-[#5C5A5A]">
                Trusted Digital Transformation Partner for Global Brands
              </p>
            </div>

            <div className="mt-10">
              <ClientLogo />
            </div>
          </div>
        </section>

        {/* <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image
                src="/images/Rectangle-kariot.png"
                width={15}
                height={15}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              Our Clients
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">
                  Trusted Digital Transformation Partner for Global Brands
                </h2>
              </div>
              <div className="text-lg text-slate-600">
                From fast-growing startups to industry leaders, Trimsel has
                partnered with businesses worldwide to bring bold ideas to life.
                Whether it’s <strong>AI-driven innovation</strong>,{" "}
                <strong>custom software</strong>,{" "}
                <strong>cloud adoption</strong>, or
                <strong> mobile app development</strong>, we build solutions
                that don’t just work—they scale. Our team keeps its finger on
                the pulse of emerging technologies, ensuring the products we
                deliver are future-ready, high-performing, and built for real
                business impact.
              </div>
            </div>
            <div className="mt-8 rounded-3xl border border-white/40 bg-white p-6 shadow-lg shadow-slate-900/5">
              <ClientLogo />
            </div>
          </div>
        </section> */}

        {/* About Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image
                src="/images/Rectangle-kariot.png"
                width={15}
                height={15}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              Who we are
            </div>
            <div className="mt-8 grid gap-10 lg:grid-cols-[2fr,1fr]">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-slate-900">
                  Powering Business Growth through Custom Software & Digital
                  Innovation
                </h3>
                <p className="text-lg text-slate-600">
                  Digital transformation shouldn’t feel like an uphill battle—it
                  should feel like progress. Since 2020, we’ve helped businesses
                  modernize their systems, streamline operations, and create
                  digital experiences that customers love. From intuitive mobile
                  apps to cloud-native platforms and custom-built software,
                  everything we create is designed with one goal: to solve your
                  toughest challenges and spark long-term growth.
                </p>
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/mission-new.png"
                      width={70}
                      height={75}
                      alt="Mission icon"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Mission
                      </p>
                      <p className="text-base font-semibold text-slate-900">
                        Driving digital transformation with cutting-edge
                        software solutions
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/aboutus"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-800 transition hover:border-brand hover:text-brand"
                  aria-label="Learn more about Trimsel"
                >
                  Explore More
                  <ArrowRightIcon />
                </Link>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                <p className="text-sm leading-relaxed text-slate-600">
                  Our developers, cloud architects, and DevOps experts bring
                  deep expertise and a passion for delivering results—whether
                  for a local startup or a Fortune 500 enterprise.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-slate-950">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                <Image
                  src="/images/Rectangle-kariot.png"
                  width={15}
                  height={15}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
                Get in touch
              </div>
              <h2 className="text-3xl font-semibold text-white">
                Transform Your Vision into a Scalable Digital Product
              </h2>
              <p className="text-slate-300">
                Partner with Trimsel — your trusted{" "}
                <Link
                  href="/mobile-app-development-chennai"
                  className="font-semibold text-white underline underline-offset-4"
                >
                  mobile app development company in Chennai
                </Link>{" "}
                — for end-to-end digital transformation, AI application
                development, and cloud-first strategies.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
                aria-label="Plan your AI and cloud roadmap with Trimsel"
              >
                Plan Your AI &amp; Cloud Roadmap
                <ArrowRightIcon />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/homecta.webp"
                width={480}
                height={500}
                alt="Connect with Trimsel’s Digital Experts"
                className="rounded-3xl shadow-xl shadow-black/30"
                loading="lazy"
                quality={70}
                sizes="(max-width: 768px) 80vw, 380px"
              />
            </div>
          </div>
        </section>

        {/* Service Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image
                src="/images/Rectangle-kariot.png"
                width={15}
                height={15}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              What We Do
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <h2 className="text-3xl font-semibold text-slate-900">
                Comprehensive Digital Solutions for Your Business Growth
              </h2>
              <p className="text-lg text-slate-600">
                From cutting-edge mobile apps and lightning-fast websites to
                seamless cloud migrations and DevOps automation, we deliver
                technology that moves your business forward. Every project is
                custom-built, every solution future-ready—because your growth
                deserves more than a one-size-fits-all approach.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Mobile App Development",
                  copy: (
                    <>
                      As a{" "}
                      <Link
                        href="/mobile-app-development-chennai"
                        className="underline decoration-brand/40 underline-offset-4"
                      >
                        top mobile app development company in Chennai
                      </Link>
                      , we deliver custom Android, iOS & cross-platform
                      solutions with exceptional UX, performance, and
                      scalability.
                    </>
                  ),
                  icon: "/images/app-development.png",
                },
                {
                  title: "Website Development",
                  copy: (
                    <>
                      We’re a{" "}
                      <Link
                        href="/web-development-company-chennai"
                        className="underline decoration-brand/40 underline-offset-4"
                      >
                        leading website development company in Chennai
                      </Link>{" "}
                      building fast, SEO-friendly websites and enterprise-grade
                      web applications that scale with your business.
                    </>
                  ),
                  icon: "/images/backend.png",
                },
                {
                  title: "Cloud Consulting Services",
                  copy: (
                    <>
                      Our{" "}
                      <Link
                        href="/cloud-consulting-services"
                        className="underline decoration-brand/40 underline-offset-4"
                      >
                        cloud consulting experts
                      </Link>{" "}
                      help you migrate, modernize, and optimize with AWS, Azure,
                      and GCP for scalable and cost-effective cloud
                      infrastructure.
                    </>
                  ),
                  icon: "/images/cloud-computing.png",
                },
                {
                  title: "DevOps Consulting",
                  copy: (
                    <>
                      Our{" "}
                      <Link
                        href="/devops-consulting-services"
                        className="underline decoration-brand/40 underline-offset-4"
                      >
                        DevOps services in India
                      </Link>{" "}
                      bring automation, CI/CD, and container orchestration to
                      boost development speed and infrastructure reliability.
                    </>
                  ),
                  icon: "/images/devops.png",
                },
                {
                  title: "Digital Marketing",
                  copy: (
                    <>
                      As a performance-driven{" "}
                      <Link
                        href="/digital-marketing-company-chennai"
                        className="underline decoration-brand/40 underline-offset-4"
                      >
                        digital marketing agency in Chennai
                      </Link>
                      , we offer SEO, PPC, social ads & content strategies to
                      help you grow visibility and leads.
                    </>
                  ),
                  icon: "/images/digital-marketing.png",
                },
                {
                  title: "AI Development",
                  copy: (
                    <>
                      Bring AI to the heart of your business with copilots,
                      intelligent search, and workflow automation. Our{" "}
                      <Link
                        href="/ai-development-company"
                        className="underline decoration-brand/40 underline-offset-4"
                      >
                        AI development team in Chennai
                      </Link>{" "}
                      uses LLMs, RAG, and fine-tuning to take your idea from
                      prototype to production.
                    </>
                  ),
                  icon: "/images/cloud-computing.png",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5"
                >
                  <Image
                    src={service.icon}
                    width={72}
                    height={72}
                    alt={`${service.title} icon`}
                    className="mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image
                src={"/images/Rectangle-kariot.png"}
                width={15}
                height={15}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              Case Studies
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr,2fr,1fr]">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">
                  Our Recent Works
                </h2>
              </div>
              <div className="text-lg text-slate-600">
                Explore how Trimsel has delivered{" "}
                <Link
                  href="/web-development-company-chennai"
                  className="underline decoration-brand/40 underline-offset-4"
                >
                  custom application development
                </Link>
                , <strong>software solutions</strong>, and{" "}
                <Link
                  href="/mobile-app-development-chennai"
                  className="underline decoration-brand/40 underline-offset-4"
                >
                  mobile app projects
                </Link>{" "}
                that drive real results. Over the past 6 years, we’ve completed
                more than 200 digital transformation projects across industries
                worldwide.
              </div>
              <div className="flex items-start justify-end">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-800 transition hover:border-brand hover:text-brand"
                  aria-label="View all Trimsel case studies"
                >
                  View All Cases
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
            <div className="mt-10 rounded-3xl border border-white/40 bg-white p-6 shadow-lg shadow-slate-900/5">
              <ScrollSection />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image
                src="/images/Rectangle-kariot.png"
                width={15}
                height={15}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              Why Trimsel
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <h2 className="text-3xl font-semibold text-slate-900">
                Empowering Businesses with 360° Digital Transformation
              </h2>
              <p className="text-lg text-slate-600">
                At Trimsel, we don’t just build software—we build long-term
                partnerships. Our client-first approach means we start with your
                goals, not our tech stack, and deliver solutions that make a
                measurable difference.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "/images/group-icon.png",
                  title: "Diverse Global Clientele",
                  body: (
                    <>
                      From startups to Fortune 500s, Trimsel delivers{" "}
                      <strong>custom software solutions</strong> tailored to
                      unique business models and challenges across industries.
                    </>
                  ),
                },
                {
                  icon: "/images/expert-icon.png",
                  title: "Domain & Tech Expertise",
                  body: (
                    <>
                      Certified engineers with deep expertise in{" "}
                      <strong>cloud computing, full stack development</strong>,
                      and emerging tech like AI and automation.
                    </>
                  ),
                },
                {
                  icon: "/images/solution.png",
                  title: "Flexible Engagement Models",
                  body: (
                    <>
                      Whether you need end-to-end delivery, team augmentation,
                      or <strong>application development outsourcing</strong>,
                      we adapt to your preferred engagement style.
                    </>
                  ),
                },
                {
                  icon: "/images/selection.png",
                  title: "All-in-One IT Partner",
                  body: (
                    <>
                      We manage your entire digital journey—design, development,
                      DevOps, QA, and support—ensuring seamless collaboration
                      and better cost control.
                    </>
                  ),
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5"
                >
                  <Image
                    src={card.icon}
                    width={50}
                    height={50}
                    alt=""
                    loading="lazy"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Industries We Serve – from Figma Desktop - 2 */}
        <section className="bg-[#F5F6FF]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2
                className="font-urbanist text-[40px] font-semibold leading-[1.2]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(28, 125, 189, 1) 0%, rgba(5, 168, 152, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0px 2px 3px rgba(0, 0, 0, 0.25)",
                }}
              >
                INDUSTRIES WE SERVE
              </h2>
              <p className="max-w-3xl font-manrope text-[18px] leading-[1.6] text-[#000000] sm:text-[20px]">
                Android App Solutions for Various Industries help businesses
                streamline operations, enhance customer engagement, and boost
                efficiency. From healthcare and education to retail and
                logistics, our tailored Android apps meet specific industry
                needs.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-6 gap-4 justify-items-center">
              {[
                { name: "Healthcare", bg: "#CBE6FC", icon: "/healthcare.svg" },
                { name: "On-Demand", bg: "#ACFFCE", icon: "/on-demand.svg" },
                {
                  name: "Entertainment",
                  bg: "#EDAFF7",
                  icon: "/entertainment.svg",
                },
                { name: "Logistics", bg: "#FAD4B6", icon: "/logistics.svg" },
                { name: "E-Commerce", bg: "#FDA8A6", icon: "/ecommerce.svg" },
                {
                  name: "Real Estate",
                  bg: "#F9DF89",
                  icon: "/real-estate.svg",
                },
                {
                  name: "Food Delivery",
                  bg: "#FFCACE",
                  icon: "/food-delivery.svg",
                },
                { name: "Grocery", bg: "#DCCFCB", icon: "/grocery.svg" },
                { name: "Travel", bg: "#A3D5FD", icon: "/travel.svg" },
                { name: "Restaurant", bg: "#D4F7AA", icon: "/restaurant.svg" },
                { name: "Media", bg: "#E080F9", icon: "/media.svg" },
                { name: "EduTech", bg: "#7AEE7F", icon: "/edutech.svg" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex h-[110px] w-[130px] flex-col items-center justify-center gap-2 rounded-[12px] border border-white/60 shadow-sm backdrop-blur-sm transition-transform duration-200 hover:scale-105"
                  style={{ backgroundColor: item.bg }}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <span className="text-center text-[13px] font-semibold text-black">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="bg-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              <Image
                src="/images/Rectangle-kariot.png"
                width={15}
                height={15}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              Latest Insights
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {insights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                    {item.tag}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    <Link
                      href={item.href}
                      className="hover:text-brand transition"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-slate-200">{item.excerpt}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:text-brand"
                    aria-label={`Read ${item.title}`}
                  >
                    Read More
                    <ArrowRightIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section> */}
        <ContactForm eventLabel="home_page" />

        {/* Hero, navbar, whatever your page has... */}

        {/* --- FAQ SECTION --- */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-[28px] font-semibold text-[#0b7ea8] drop-shadow-sm sm:text-3xl md:text-[34px]">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {faqData.slice(0, 5).map((item) => (
                    <Faq
                      key={item.id}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openFaqId === item.id}
                      onToggle={() => toggleFaq(item.id)}
                    />
                  ))}
                </div>
                <div className="space-y-4">
                  {faqData.slice(5, 10).map((item) => (
                    <Faq
                      key={item.id}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openFaqId === item.id}
                      onToggle={() => toggleFaq(item.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer etc... */}
        {/* <section className="bg-white">
          <div
            className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
            id="faq"
          >
            <h2 className="text-3xl font-semibold text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  question: "What services does Trimsel provide?",
                  answer: (
                    <>
                      Trimsel offers{" "}
                      <Link
                        href="/web-development-company-chennai"
                        className="underline decoration-brand/40 underline-offset-4"
                      >
                        custom software development
                      </Link>
                      ,{" "}
                      <Link
                        href="/mobile-app-development-chennai"
                        className="underline decoration-brand/40 underline-offset-4"
                      >
                        mobile app development
                      </Link>
                      , web design,{" "}
                      <Link
                        href="/cloud-consulting-services"
                        className="underline decoration-brand/40 underline-offset-4"
                      >
                        cloud consulting
                      </Link>
                      , DevOps automation, digital marketing, and quality
                      engineering services.
                    </>
                  ),
                },
                {
                  question: "What industries does Trimsel serve?",
                  answer: (
                    <>
                      We partner with Fintech, Healthcare, E-commerce, SaaS,
                      Logistics, and Startups. Our{" "}
                      <Link
                        href="/mobile-app-development-chennai"
                        className="underline decoration-brand/40 underline-offset-4"
                      >
                        digital transformation solutions
                      </Link>{" "}
                      adapt to industry-specific needs like compliance,
                      scalability, and automation.
                    </>
                  ),
                },
                {
                  question:
                    "How much does custom application development cost?",
                  answer: (
                    <>
                      The cost of{" "}
                      <Link
                        href="/mobile-app-development-chennai"
                        className="underline decoration-brand/40 underline-offset-4"
                      >
                        custom application development
                      </Link>{" "}
                      varies based on complexity, tech stack, and timeline. We
                      offer flexible engagement models and tailored quotes after
                      consultation.
                    </>
                  ),
                },
                {
                  question: "Do you offer DevOps and CI/CD automation?",
                  answer: (
                    <>
                      Yes. Our{" "}
                      <Link
                        href="/devops-consulting-services"
                        className="underline decoration-brand/40 underline-offset-4"
                      >
                        DevOps consulting services
                      </Link>{" "}
                      include CI/CD pipeline setup, Kubernetes deployment,
                      infrastructure automation, and cloud-native implementation
                      across AWS, Azure, and GCP.
                    </>
                  ),
                },
                {
                  question:
                    "Can I hire a dedicated development team from Trimsel?",
                  answer: (
                    <>
                      Yes! You can hire developers, UI/UX designers, cloud
                      engineers, or DevOps specialists full-time or
                      project-based, giving you a skilled extension of your own
                      team without overhead.
                    </>
                  ),
                },
                {
                  question:
                    "What makes Trimsel different from other IT service providers?",
                  answer: (
                    <>
                      Our client-first approach, commitment to innovation, and
                      cross-functional expertise make us a reliable{" "}
                      <strong>digital transformation partner</strong>. We
                      deliver secure, scalable, and future-ready tech
                      solutions—not just code.
                    </>
                  ),
                },
              ].map((item, index) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-900/5"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900">
                    {item.question}
                  </summary>
                  <div className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <FAQPageJsonLd
          mainEntity={[
            {
              questionName: "What services does Trimsel provide?",
              acceptedAnswerText:
                "Trimsel offers custom software development, mobile app development in Chennai, web design, cloud consulting, DevOps automation, digital marketing, and quality engineering services tailored to support efficient digital transformation.",
            },
            {
              questionName: "What industries does Trimsel serve?",
              acceptedAnswerText:
                "We collaborate with Fintech, Healthcare, E-commerce, SaaS, Logistics, and Startup businesses, adapting our digital transformation services to industry-specific needs such as compliance, scalability, and automation.",
            },
            {
              questionName:
                "How much does custom application development cost?",
              acceptedAnswerText:
                "Project cost depends on scope, tech stack, timeline, and required features. Trimsel provides flexible engagement models for startups, SMEs, and enterprises along with tailored consultations.",
            },
            {
              questionName: "Do you offer DevOps and CI/CD automation?",
              acceptedAnswerText:
                "Yes. Trimsel’s DevOps consulting covers CI/CD pipeline setup, Kubernetes deployments, infrastructure automation with Terraform, and cloud-native implementations across AWS, Azure, and Google Cloud.",
            },
            {
              questionName:
                "Can I hire a dedicated development team from Trimsel?",
              acceptedAnswerText:
                "You can hire dedicated developers, UI/UX designers, cloud engineers, or DevOps specialists on full-time or project-based engagements to extend your in-house capabilities without overhead.",
            },
            {
              questionName:
                "What makes Trimsel different from other IT service providers?",
              acceptedAnswerText:
                "Trimsel combines a client-first mindset with cross-functional expertise, delivering secure, scalable, and innovation-driven digital solutions that generate measurable business impact.",
            },
          ]}
        /> */}

        <Footer />
      </main>
    </>
  );
}
