import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { postJson } from "../lib/api";
import { trackEvent } from "../lib/analytics";

const contactHighlights = [
  {
    icon: "/images/contact-us-mail.png",
    title: "Let’s talk",
    body: "Prefer a direct chat? Call our co-founders:",
    href: "/contact-us",
  },
  {
    icon: "/images/mailer-icon.png",
    title: "Send us an email",
    body: "contact@trimsel.com",
    href: "mailto:contact@trimsel.com",
  },
];

export default function ContactForm({
  heading = "Let’s Build Your Dream App — Get a Free Consultation!",
  subText = "Have an idea or need expert help with your digital project? At Trimsel, we help businesses of all sizes with end-to-end development services — from websites and mobile apps to cloud, DevOps, and digital marketing.",
  eventLabel = "contact_form",
  submitLabel = "Book a Digital Transformation Call",
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const recaptchaRef = useRef(null);

  const handleThankYouClose = () => {
    setShowThankYou(false);
    setIsSubmitted(false);
  };

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey && process.env.NODE_ENV === "development") {
    console.warn("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is missing. reCAPTCHA will not render.");
  }

  async function onSubmitForm(values) {
    if (isSubmitting) return;
    if (!phone) {
      setMessage("Please enter your mobile number (include country code).");
      return;
    }
    setIsSubmitting(true);

    try {
      let recaptchaToken = "";
      if (recaptchaRef.current) {
        recaptchaToken = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();
      }
      if (!recaptchaToken) {
        setMessage("We couldn’t verify you as human. Please try again.");
        return;
      }

      const payload = {
        ...values,
        phone,
        recaptchaToken,
      };

      setMessage("");
      await postJson("/api/contact", payload);
      trackEvent("contact_form_submit", {
        event_category: "lead",
        event_label: eventLabel,
      });
      setMessage("Thank you! We have received your message. Our team will get back to you soon.");
      setIsSubmitted(true);
      setShowThankYou(true);
      reset();
      setPhone("");
    } catch (error) {
      setMessage("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section id="contact" className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <Image src="/images/Rectangle-kariot.png" width={15} height={15} alt="" aria-hidden="true" loading="lazy" />
            Get in touch
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr,1fr]">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">{heading}</h2>
                <p className="mt-3 text-lg text-slate-600">{subText}</p>
              </div>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-800 transition hover:border-brand hover:text-brand"
              >
                Look at our case studies
              </Link>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900">Hey! Got a startup idea?</h3>
                <p className="text-slate-600">
                  Let us give you our honest opinion. Book your{" "}
                  <strong className="text-slate-900">30-Minute Free Consultation</strong> to discuss your app idea.
                </p>

                {contactHighlights.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/80 p-4 shadow-sm">
                    <Image src={item.icon} width={48} height={48} alt="" loading="lazy" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <Link href={item.href} className="text-sm text-brand underline underline-offset-4">
                        {item.body}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-900/5">
              <h3 className="text-2xl font-semibold text-slate-900">Have an idea?</h3>
              <p className="mt-2 text-sm text-slate-600">Fill out the form below & let’s start building your success story!</p>

              {message && (
                <p className={`mt-4 rounded-2xl px-4 py-3 text-sm ${isSubmitted ? "bg-green-50 text-green-700" : "bg-rose-50 text-rose-700"}`}>
                  {message}
                </p>
              )}

              <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmitForm)} noValidate>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <input
                      {...register("name", {
                        required: { value: true, message: "Your name is required" },
                      })}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name*"
                      aria-invalid={!!errors?.name}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                    {!errors?.name && <p className="text-xs text-slate-400">Enter your full name so we can address you properly.</p>}
                    <p className="text-xs text-rose-500">{errors?.name?.message}</p>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Mobile Number *
                    </label>
                    <PhoneInput
                      country="in"
                      enableSearch
                      value={phone}
                      onChange={(p) => setPhone(p)}
                      inputProps={{
                        name: "mobile",
                        required: true,
                        id: "phone",
                        "aria-invalid": !phone ? "true" : "false",
                      }}
                      inputStyle={{
                        width: "100%",
                        height: "52px",
                        borderRadius: "16px",
                        border: "1px solid rgb(226 232 240)",
                        fontSize: "0.95rem",
                      }}
                      buttonStyle={{
                        border: "none",
                        borderRadius: "16px 0 0 16px",
                      }}
                      containerStyle={{ width: "100%" }}
                    />
                    {!phone && <p className="text-xs text-slate-400">Include your country code for faster connection.</p>}
                  </div>

                  <div className="space-y-2">
                    <input
                      {...register("email", {
                        required: { value: true, message: "Email is required" },
                        pattern: {
                          value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Work Email*"
                      aria-invalid={!!errors?.email}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                    {!errors?.email && <p className="text-xs text-slate-400">We’ll use this only to respond to your inquiry.</p>}
                    <p className="text-xs text-rose-500">{errors?.email?.message}</p>
                  </div>

                  <div className="space-y-2">
                    <input
                      {...register("company")}
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company (optional)"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <input
                      {...register("projectType")}
                      type="text"
                      name="projectType"
                      id="projectType"
                      placeholder="Project / Service type"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      {...register("budget")}
                      type="text"
                      name="budget"
                      id="budget"
                      placeholder="Approx budget"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <textarea
                    {...register("message", {
                      required: { value: true, message: "Please describe your project" },
                    })}
                    id="message"
                    name="message"
                    placeholder="Describe your project*"
                    aria-invalid={!!errors?.message}
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                  <p className="text-xs text-rose-500">{errors?.message?.message}</p>
                </div>

                {siteKey && (
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={siteKey}
                    size="invisible"
                  />
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-brand px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-brand/60"
                >
                  {isSubmitting ? "Sending…" : submitLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-2xl">
            <button
              type="button"
              onClick={handleThankYouClose}
              className="ml-auto flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-500"
              aria-label="Close thank you dialog"
            >
              ×
            </button>
            <div className="mt-4 space-y-4">
              <Image src="/images/astronaut-thanking.gif" width={200} height={200} alt="Thank you" className="mx-auto" loading="lazy" />
              <h2 className="text-2xl font-semibold text-slate-900">Thank you for contacting us!</h2>
              <p className="text-sm text-slate-600">
                We have received your message. We’ll reach out shortly.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="text-sm font-semibold text-slate-900">Follow Us</p>
                  <div className="mt-3 flex items-center justify-center gap-3">
                    {["facebook", "insta", "linkedin", "pinterest"].map((name) => (
                      <Image key={name} src={`/${name}.png`} width={28} height={28} alt="" loading="lazy" />
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="text-sm font-semibold text-slate-900">WhatsApp</p>
                  <Image src="/images/trimselqr.png" width={90} height={90} alt="Trimsel Whatsapp QR Code" className="mx-auto" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
