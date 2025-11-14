import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { useForm, Controller } from "react-hook-form";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import ReCAPTCHA from "react-google-recaptcha";
import { postJson } from "../lib/api";
import { trackEvent } from "../lib/analytics";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import CheckIcon from "../components/icons/CheckIcon";
import "react-phone-input-2/lib/bootstrap.css";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

const CONTACT_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.trimsel.com/#local",
    name: "Trimsel - AI Digital Transformation Experts",
    url: "https://www.trimsel.com/",
    logo: "https://www.trimsel.com/logo.png",
    image: "https://www.trimsel.com/images/contact-hero.jpg",
    email: "contact@trimsel.com",
    telephone: "+91 72008 41581",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 21-B, 5th Cross St, South Phase, Thiru Vi Ka Industrial Estate, Guindy",
      addressLocality: "Chennai",
      addressRegion: "TN",
      postalCode: "600032",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0827,
      longitude: 80.2707,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasMap: "https://www.google.com/maps/place/Trimsel/",
    sameAs: [
      "https://www.linkedin.com/company/trimsel",
      "https://www.instagram.com/trimsel_softwares/",
      "https://in.pinterest.com/trimsel/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 72008 41581",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91 72008 41581",
        contactType: "AI consulting",
        contactOption: ["HearingImpairedSupported"],
        areaServed: ["IN", "AE", "SG", "US"],
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91 72008 41581",
        contactType: "sales",
        contactOption: ["TollFree", "WhatsApp"],
        areaServed: ["IN", "AE", "US"],
        availableLanguage: ["English"],
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.trimsel.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://www.trimsel.com/contact-us",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How soon will Trimsel respond to a contact request?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI delivery team responds to every enquiry within one business day and usually schedules discovery calls within 48 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Which digital transformation services do you provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We design and build AI copilots, mobile apps, cloud-native platforms, and automation workflows tailored to modernize your business processes.",
        },
      },
      {
        "@type": "Question",
        name: "Do you sign NDAs before sharing project details?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We are happy to sign a mutual NDA before discussing sensitive information and we can use Trimsel's template or yours.",
        },
      },
    ],
  },
];

const heroStats = [
  "Response guaranteed within one business day",
  "AI, mobile, cloud, and DevOps experts on every call",
  "200+ launches guided from Chennai to the world",
];

const formBenefits = [
  "Optional NDA before project details",
  "Tailored roadmap covering AI, cloud, or DevOps",
  "Access to recent case studies and KPIs",
];

const marketingInsights = [
  {
    title: "5 Easy Ways a Mobile App Can Grow Your Business",
    excerpt: "Understand the product and GTM frameworks we bring to strategy calls.",
    href: "/blog/how-mobile-apps-grow-business",
    tag: "Growth Playbook",
  },
  {
    title: "Explore Trimsel's Cloud & AI Guides",
    excerpt: "Browse articles on DevOps, automation, and digital transformation to prep for our chat.",
    href: "/blog",
    tag: "Digital Insights",
  },
];

const quickAnswers = [
  {
    title: "How fast will you reply?",
    body: "We confirm receipt instantly and a strategist follows up within one business day to schedule your discovery call.",
  },
  {
    title: "What services can we discuss?",
    body: "Bring AI copilots, SaaS builds, migrations, or DevOps questions—we scope strategy and delivery in the same sprint.",
  },
  {
    title: "Is my data protected?",
    body: "Yes. We work under NDA, follow secure SDLC, and deploy to the environments that meet your compliance rules.",
  },
];

const faqItems = [
  {
    question: "How soon will Trimsel respond to a contact request?",
    answer:
      "We confirm receipt instantly and follow up within one business day to schedule your discovery call and share the right playbooks.",
  },
  {
    question: "Which services can we discuss on the call?",
    answer:
      "Bring us your AI copilots, mobile apps, cloud modernization, DevOps, or growth marketing goals—we scope strategy and delivery in the same sprint.",
  },
  {
    question: "Do you work under NDA and support compliance-heavy industries?",
    answer:
      "Yes. We execute NDAs before sharing details and operate with secure SDLC, SOC 2-aligned practices, and deployment models that fit regulated environments.",
  },
  {
    question: "Can you collaborate with our in-house engineers?",
    answer:
      "Absolutely. We plug into existing product, IT, or innovation teams, sharing architecture docs, async updates, and success metrics every week.",
  },
  {
    question: "Do you work with global teams outside India?",
    answer:
      "Trimsel supports clients across the US, Middle East, and APAC with overlapping hours, multi-cloud expertise, and multilingual documentation.",
  },
];

const thankYouLinks = [
  { href: "/cloud-consulting-services", label: "Explore Cloud Services" },
  { href: "/blog/how-mobile-apps-grow-business", label: "Read Our Latest Insight" },
];

const socialLinks = [
  { href: "https://www.facebook.com/trimsel.softwares", icon: "/images/fb-icon.png", label: "Facebook" },
  { href: "https://www.instagram.com/trimsel/", icon: "/images/insta-icon.png", label: "Instagram" },
  { href: "https://www.linkedin.com/company/trimsel", icon: "/images/linkedin-icon.png", label: "LinkedIn" },
  { href: "https://in.pinterest.com/trimsel/", icon: "/images/pinterest-icon.png", label: "Pinterest" },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({ defaultValues: { mobile: "" } });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const recaptchaRef = useRef(null);

  const handleThankYouClose = () => {
    setShowThankYou(false);
    setIsSubmitted(false);
  };
  const handleThankYouShow = () => setShowThankYou(true);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey && process.env.NODE_ENV === "development") {
    console.warn("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is missing. reCAPTCHA will not render.");
  }

  async function onSubmitForm(values) {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      let recaptchaToken = "";
      if (recaptchaRef.current) {
        try {
          recaptchaToken = await recaptchaRef.current.executeAsync();
          recaptchaRef.current.reset();
        } catch (error) {
          console.error("Failed to execute reCAPTCHA", error);
        }
      }

      if (!recaptchaToken) {
        setMessage("We couldn't verify you as human. Please try again.");
        return;
      }

      const { mobile, ...restValues } = values;
      const payload = {
        ...restValues,
        phone: mobile,
        mobile,
        recaptchaToken,
      };

      setMessage("");
      await postJson("/api/contact", payload);
      trackEvent("contact_form_submit", {
        event_category: "lead",
        event_label: "contact_us_page",
      });
      setIsSubmitted(true);
      handleThankYouShow();
      reset();
    } catch (error) {
      setMessage("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <NextSeo
        title="Contact Trimsel | AI-Powered Digital Transformation & App Development"
        description="Talk to Trimsel's Chennai team about AI-driven digital transformation, mobile apps, and cloud products. Book a strategy call to modernize your business."
        canonical="https://www.trimsel.com/contact-us"
        openGraph={{
          type: "website",
          url: "https://www.trimsel.com/contact-us",
          title: "Contact Trimsel | AI-Powered Digital Transformation & App Development",
          description: "Connect with Trimsel to plan AI-fuelled digital transformation, Android/iOS builds, or cloud-native programs.",
          locale: "en_IN",
          site_name: "Trimsel",
          images: [
            {
              url: "https://www.trimsel.com/images/contact-hero.jpg",
              width: 1200,
              height: 630,
              alt: "Trimsel Chennai office contact hero image",
            },
          ],
        }}
        twitter={{ cardType: "summary_large_image", handle: "@TrimselSoftwares", site: "@TrimselSoftwares" }}
        additionalMetaTags={[
          { name: "twitter:title", content: "Contact Trimsel's Digital Transformation Specialists" },
          {
            name: "twitter:description",
            content: "Book a consultation with Trimsel's Chennai software team for AI, digital transformation, mobile, web, cloud, or automation projects.",
          },
          { name: "twitter:image:alt", content: "Trimsel Chennai office contact hero image" },
        ]}
      />
      <Head>
        {CONTACT_JSON_LD.map((schema, index) => (
          <script key={`contact-schema-${index}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>

      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <Header />
          <div className="relative isolate pt-24">
            <Image
              src="/images/contact-hero.jpg"
              alt="Trimsel team planning digital initiatives"
              fill
              priority
              className="pointer-events-none object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-slate-950/70" />
            <div className="relative mx-auto max-w-5xl px-4 py-20 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                <Link href="/" className="hover:text-brand">
                  Home
                </Link>
                <span className="mx-2 text-slate-500">&middot;</span>
                Contact Us
              </p>
              <h1 className="text-4xl font-semibold leading-snug">Contact Trimsel&apos;s AI Digital Transformation Team</h1>
              <p className="text-lg leading-relaxed text-slate-200">
                Looking for {" "}
                <Link href="/mobile-app-development-chennai" className="text-orange-400 underline-offset-4 hover:underline">
                  AI-driven mobile app development
                </Link>{" "}
                or {" "}
                <Link href="/cloud-consulting-services" className="text-orange-400 underline-offset-4 hover:underline">
                  cloud modernization
                </Link>
                ? Talk to our architects about automation, copilots, or a modernization sprint, or email {" "}
                <Link href="mailto:contact@trimsel.com" className="text-orange-400 underline-offset-4 hover:underline">
                  contact@trimsel.com
                </Link>
                .
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
                We blend strategy, design, engineering, and responsible AI so enterprises in Chennai and worldwide can accelerate digital
                transformation safely. Expect a response in under one business day and see how our {" "}
                <Link href="/devops-consulting-services" className="text-orange-400 underline-offset-4 hover:underline">
                  DevOps
                </Link>{" "}
                and {" "}
                <Link href="/digital-marketing-company-chennai" className="text-orange-400 underline-offset-4 hover:underline">
                  growth
                </Link>{" "}
                teams stay aligned with every engagement.
              </p>
              <div className="rounded-3xl border border-white/20 bg-white/5 p-5 shadow-inner">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Talk to us about</p>
                <p className="mt-3 text-lg text-white">
                  Automation copilots &middot; AI copilots &middot; Mobile and web builds &middot; Cloud & DevOps &middot; Demand generation
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/90">
                  <Link href="mailto:contact@trimsel.com" className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" /> contact@trimsel.com
                  </Link>
                  <Link href="tel:+917200841581" className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" /> +91 72008 41581
                  </Link>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                {heroStats.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-3xl font-semibold text-slate-900">Why brands contact Trimsel</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Whether you need to launch a new SaaS product, migrate legacy workloads to the cloud, or infuse AI copilots into your
                workflows, our consultants craft roadmaps that balance velocity with governance. Every engagement starts with a discovery
                call where we align on outcomes, data readiness, and success metrics so your investment compounds over time.
              </p>
              <p>
                Share a brief below and we will assemble the right specialists—solution architects, UX strategists, AI engineers, and
                DevSecOps—to guide you from proof of concept to scalable adoption.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-[32px] border border-white bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-10">
              <h3 className="text-2xl font-semibold text-slate-900">Let&apos;s level up your brand, together</h3>
              <p className="mt-2 text-sm text-slate-500">We confirm receipt instantly and schedule discovery calls within 24 hours.</p>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {formBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600">
                    <CheckIcon width={18} height={18} className="mt-1 text-brand" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              {message && <p className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{message}</p>}
              <div className="mt-8 grid gap-10 lg:grid-cols-[3fr,2fr]">
                <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-semibold text-slate-600">
                        Full Name *
                      </label>
                      <input
                        {...register("name", { required: { value: true, message: "Your name is required" } })}
                        id="name"
                        type="text"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        placeholder="Enter your full name"
                      />
                      {errors?.name?.message && <p className="mt-2 text-xs text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-600">
                        Mobile Number *
                      </label>
                      <div className="mt-2">
                        <Controller
                          name="mobile"
                          control={control}
                          rules={{ required: "Mobile number is required" }}
                          render={({ field }) => (
                            <PhoneInput
                              country="in"
                              enableSearch
                              value={field.value}
                              onChange={(phone) => field.onChange(phone)}
                              inputProps={{ name: "mobile", required: true, id: "phone", "aria-label": "Mobile number" }}
                              inputStyle={{
                                width: "100%",
                                height: "54px",
                                borderRadius: "1rem",
                                border: "1px solid rgb(226, 232, 240)",
                                fontSize: "14px",
                              }}
                              containerStyle={{ width: "100%" }}
                              buttonStyle={{ borderRadius: "1rem 0 0 1rem" }}
                            />
                          )}
                        />
                      </div>
                      {errors?.mobile?.message && <p className="mt-2 text-xs text-red-500">{errors.mobile.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-semibold text-slate-600">
                        Email *
                      </label>
                      <input
                        {...register("email", {
                          required: { value: true, message: "Email is required" },
                          pattern: { value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, message: "Enter a valid email address" },
                        })}
                        id="email"
                        type="email"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        placeholder="example@company.com"
                      />
                      {(errors?.email?.message || errors?.email?.pattern?.message) && (
                        <p className="mt-2 text-xs text-red-500">{errors?.email?.message || errors?.email?.pattern?.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className="text-sm font-semibold text-slate-600">
                        Company
                      </label>
                      <input
                        {...register("company")}
                        id="company"
                        type="text"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        placeholder="Tech, Marketing, Agency"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="referralSource" className="text-sm font-semibold text-slate-600">
                      Where did you find us? *
                    </label>
                    <select
                      {...register("referralSource", {
                        required: { value: true, message: "Please let us know how you heard about Trimsel" },
                      })}
                      id="referralSource"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="Google">Google Search</option>
                      <option value="Social">Social Media</option>
                      <option value="Referral">Referral</option>
                      <option value="Event">Event / Webinar</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors?.referralSource?.message && <p className="mt-2 text-xs text-red-500">{errors.referralSource.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-semibold text-slate-600">
                      Your Message *
                    </label>
                    <textarea
                      {...register("message", { required: { value: true, message: "Please describe your project" } })}
                      id="message"
                      rows={5}
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                      placeholder="Describe your project"
                    />
                    {errors?.message?.message && <p className="mt-2 text-xs text-red-500">{errors.message.message}</p>}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">By submitting, you agree to our privacy policy and terms.</p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Book a Digital Transformation Call"}
                      <ArrowRightIcon width={18} height={18} />
                    </button>
                  </div>
                  {siteKey && <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} size="invisible" />}
                </form>
                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-inner">
                  <Image src="/images/Letstalk.png" width={420} height={360} alt="Let's Talk" className="w-full" priority={false} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {showThankYou && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="w-full max-w-2xl rounded-3xl bg-white p-6 text-center shadow-2xl">
              <button
                type="button"
                onClick={handleThankYouClose}
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:text-slate-900"
                aria-label="Close thank you dialog"
              >
                &times;
              </button>
              {isSubmitted && (
                <div className="space-y-4">
                  <Image src="/images/astronaut-thanking.gif" width={260} height={260} alt="Animated thank you" className="mx-auto" />
                  <h2 className="text-2xl font-semibold text-slate-900">Thank you for contacting us!</h2>
                  <p className="text-sm text-slate-600">We have received your message. A strategist will reach out shortly.</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {thankYouLinks.map((cta) => (
                      <Link
                        key={cta.href}
                        href={cta.href}
                        className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-brand hover:text-brand"
                      >
                        {cta.label}
                      </Link>
                    ))}
                  </div>
                  <div className="grid gap-6 pt-4 sm:grid-cols-2">
                    <div className="text-left">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Follow us</h4>
                      <div className="mt-3 flex flex-wrap gap-3">
                        {socialLinks.map((link) => (
                          <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                            <Image src={link.icon} width={32} height={32} alt={`${link.label} icon`} />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <Image src="/images/scan.png" width={120} height={40} alt="WhatsApp" className="mx-auto" />
                      <Image src="/images/trimselqr.png" width={90} height={90} alt="Trimsel WhatsApp QR" className="mx-auto" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
              Our global office
            </div>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr,1.5fr]">
              <div className="space-y-4 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">India</p>
                <h3 className="text-2xl font-semibold text-slate-900">Trimsel Softwares</h3>
                <p className="text-sm text-slate-600">
                  <Link href="https://maps.google.com/?q=Trimsel+Softwares,+Guindy,+Chennai+600032" target="_blank" rel="noopener noreferrer" className="text-brand">
                    21B 5th Cross St, South Phase, Thiru VI KA Industrial Estate, Guindy, Chennai, Tamil Nadu 600032
                  </Link>
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>
                    <p className="font-semibold text-slate-900">Call us</p>
                    <Link href="tel:+917200841581" className="text-brand">
                      (+91) 720-084-1581
                    </Link>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <Link href="mailto:contact@trimsel.com" className="text-brand">
                      contact@trimsel.com
                    </Link>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Hours</p>
                    <p>Mon-Sat &middot; 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.335511318364!2d80.20822167602537!3d13.007958213127026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52673c1c44b25b%3A0xc9a77bdb8ad623f1!2sTrimsel%20Softwares!5e0!3m2!1sen!2sin!4v1699363200000!5m2!1sen!2sin"
                  title="Trimsel Softwares map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[360px] w-full border-0"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" loading="lazy" />
              Latest insights
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {marketingInsights.map((article) => (
                <article key={article.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5">
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

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {quickAnswers.map(({ title, body }) => (
                <div key={title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact-faq" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" loading="lazy" />
                Contact & Digital Transformation FAQs
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">Questions founders ask before we hop on a call</h2>
            </div>
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

        <Footer />
      </main>
    </>
  );
}
