import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { postJson } from "../lib/api";

export default function ContactModal({ title = "Need a dedicated product team? Let’s talk." }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const recaptchaRef = useRef(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

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
      setIsSubmitted(true);
      reset();
      setPhone("");
    } catch (error) {
      setMessage("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
      <div className="relative w-full max-w-5xl rounded-[32px] bg-white shadow-2xl">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-400 hover:text-slate-800"
          aria-label="Close contact modal"
        >
          ×
        </button>
        <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
          <aside className="rounded-[32px] bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Let’s collaborate</p>
            <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm text-white/80">
              Email or call us anytime. We reply within one business day to kick off workshops, prototypes, or migrations.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="text-white/60">Email</p>
                <Link href="mailto:contact@trimsel.com" className="text-base font-semibold text-white">
                  contact@trimsel.com
                </Link>
              </div>
              <div>
                <p className="text-white/60">Phone</p>
                <Link href="tel:72000841581" className="text-base font-semibold text-white">
                  +91-72000841581
                </Link>
              </div>
              <div className="rounded-2xl border border-white/20 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Visit us</p>
                <p className="mt-2 flex items-start gap-2 text-sm text-white/90">
                  <FaMapMarkerAlt className="mt-1" />
                  21B 5th Cross St, South Phase Thiru VI KA Industrial Estate, Guindy, Chennai, Tamilnadu 600032, India
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/20 p-4 text-center">
              <p className="text-sm font-semibold text-white/80">Scan to chat</p>
              <div className="mt-3 flex flex-col items-center gap-3">
                <Image src="/images/whatsapp-icon.png" width={28} height={28} alt="WhatsApp" />
                <Image src="/images/trimselqr.png" width={110} height={110} alt="Trimsel WhatsApp QR code" className="rounded-lg bg-white p-1" />
              </div>
            </div>
          </aside>

          <div className="p-6">
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                <Image src="/images/astronaut-thanking.gif" width={180} height={120} alt="Thank you" />
                <h3 className="text-2xl font-semibold text-slate-900">Thank you for contacting us!</h3>
                <p className="text-sm text-slate-600">We have received your message. Our team will get back to you shortly.</p>
                <div className="flex gap-3">
                  <Link
                    href="/"
                    className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:border-brand hover:text-brand"
                  >
                    Back to home
                  </Link>
                  <Link
                    href="/portfolio"
                    className="rounded-full bg-brand px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                  >
                    View work
                  </Link>
                </div>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Follow us</p>
                  <div className="mt-3 flex items-center justify-center gap-3">
                    {[
                      { href: "https://www.facebook.com/trimsel.softwares", icon: "/images/fb-icon.png", alt: "Facebook" },
                      { href: "https://www.instagram.com/trimsel/", icon: "/images/insta-icon.png", alt: "Instagram" },
                      { href: "https://www.linkedin.com/company/trimsel", icon: "/images/linkedin-icon.png", alt: "LinkedIn" },
                      { href: "https://in.pinterest.com/trimsel/", icon: "/images/pinterest-icon.png", alt: "Pinterest" },
                    ].map((social) => (
                      <Link key={social.alt} href={social.href} target="_blank" rel="noopener noreferrer">
                        <Image src={social.icon} width={28} height={28} alt={social.alt} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Tell us about your project</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">Book a digital transformation call</h3>
                </div>
                {message && <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">{message}</p>}
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2 text-sm font-semibold text-slate-700">
                    Full name *
                    <input
                      type="text"
                      {...register("name", {
                        required: { value: true, message: "Your name is required" },
                      })}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-brand focus:outline-none"
                      placeholder="Enter your full name"
                    />
                    {errors?.name && <span className="text-xs text-rose-500">{errors.name.message}</span>}
                  </label>
                  <label className="space-y-2 text-sm font-semibold text-slate-700">
                    Mobile number *
                    <PhoneInput
                      country="in"
                      enableSearch
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      inputProps={{ name: "mobile", required: true }}
                      containerClass="phone-input w-full"
                      inputClass="!w-full !rounded-2xl !border !border-slate-200 !bg-white !py-3 !pl-12 !pr-4 !text-base !text-slate-900 focus:!border-brand"
                      buttonClass="!rounded-l-2xl !border-slate-200"
                    />
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2 text-sm font-semibold text-slate-700">
                    Email *
                    <input
                      type="email"
                      {...register("email", {
                        required: { value: true, message: "Email id is required" },
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-brand focus:outline-none"
                      placeholder="jackdempsey@gmail.com"
                    />
                    {(errors?.email?.message || errors?.email?.pattern?.message) && (
                      <span className="text-xs text-rose-500">
                        {errors?.email?.message || errors?.email?.pattern?.message}
                      </span>
                    )}
                  </label>
                  <label className="space-y-2 text-sm font-semibold text-slate-700">
                    Company
                    <input
                      type="text"
                      {...register("company")}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-brand focus:outline-none"
                      placeholder="Tech, Marketing, Agency"
                    />
                  </label>
                </div>
                <label className="space-y-2 text-sm font-semibold text-slate-700">
                  I’m interested in
                  <select
                    {...register("service")}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-brand focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Cloud and DevOps">Cloud and DevOps</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <label className="space-y-2 text-sm font-semibold text-slate-700">
                  Your message *
                  <textarea
                    {...register("message", {
                      required: { value: true, message: "Please describe your project" },
                    })}
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-brand focus:outline-none"
                    placeholder="Describe your project"
                  />
                  {errors?.message && <span className="text-xs text-rose-500">{errors.message.message}</span>}
                </label>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-brand/60"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Book a Digital Transformation Call"}
                  </button>
                </div>
                {siteKey && (
                  <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} size="invisible" />
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
