import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { postJson } from "../lib/api";
import { trackEvent } from "../lib/analytics";

const testimonials = [
  {
    id: 1,
    quote:
      "It's been an absolute pleasure to work with TechAhead team through this project. I know you have all gone way over and above to deliver the app to the right quality, and the team has collectively added value at each stage.",
    name: "Andy Hobbs",
    company: "ICC",
    avatar: "/images/testimonial-avatar.png",
  },
  {
    id: 2,
    quote:
      "It's been an absolute pleasure to work with TechAhead team through this project. I know you have all gone way over and above to deliver the app to the right quality, and the team has collectively added value at each stage.",
    name: "Andy Hobbs",
    company: "ICC",
    avatar: "/images/testimonial-avatar.png",
  },
  {
    id: 3,
    quote:
      "It's been an absolute pleasure to work with TechAhead team through this project. I know you have all gone way over and above to deliver the app to the right quality, and the team has collectively added value at each stage.",
    name: "Andy Hobbs",
    company: "ICC",
    avatar: "/images/testimonial-avatar.png",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="relative min-w-[471px] flex-shrink-0">
      {/* Decorative quote icons */}
      <svg
        className="absolute left-[11px] top-0 h-[30px] w-[30px]"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 7.5H5C3.625 7.5 2.5 8.625 2.5 10V17.5C2.5 18.875 3.625 20 5 20H10V22.5C10 23.875 8.875 25 7.5 25H6.25C5.5625 25 5 25.5625 5 26.25C5 26.9375 5.5625 27.5 6.25 27.5H7.5C10.2625 27.5 12.5 25.2625 12.5 22.5V10C12.5 8.625 11.375 7.5 10 7.5H12.5Z"
          fill="#FFFFFF"
        />
        <path
          d="M27.5 7.5H20C18.625 7.5 17.5 8.625 17.5 10V17.5C17.5 18.875 18.625 20 20 20H25V22.5C25 23.875 23.875 25 22.5 25H21.25C20.5625 25 20 25.5625 20 26.25C20 26.9375 20.5625 27.5 21.25 27.5H22.5C25.2625 27.5 27.5 25.2625 27.5 22.5V10C27.5 8.625 26.375 7.5 25 7.5H27.5Z"
          fill="#FFFFFF"
        />
      </svg>

      {/* Main card */}
      <div className="ml-[17px] mt-[15px] rounded-[4px] bg-[#F5FAFF] p-[30px_20px] shadow-[0px_0px_17px_0px_rgba(0,0,0,0.14)]">
        <p className="font-manrope text-sm font-semibold leading-[1.714] text-black">
          {testimonial.quote}
        </p>
        <div className="mt-5 flex items-center gap-[10px]">
          <div className="h-14 w-14 overflow-hidden rounded-full bg-gray-200">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[116px]">
            <p className="font-manrope text-lg font-bold leading-[1.366] text-black">
              {testimonial.name}
            </p>
            <p className="font-manrope text-lg font-medium leading-[1.366] text-[#52525A]">
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom quote */}
      <svg
        className="absolute bottom-[30px] right-[13px] h-[30px] w-[30px]"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 22.5H25C26.375 22.5 27.5 21.375 27.5 20V12.5C27.5 11.125 26.375 10 25 10H20V7.5C20 6.125 21.125 5 22.5 5H23.75C24.4375 5 25 4.4375 25 3.75C25 3.0625 24.4375 2.5 23.75 2.5H22.5C19.7375 2.5 17.5 4.7375 17.5 7.5V20C17.5 21.375 18.625 22.5 20 22.5H17.5Z"
          fill="#FFFFFF"
        />
        <path
          d="M2.5 22.5H10C11.375 22.5 12.5 21.375 12.5 20V12.5C12.5 11.125 11.375 10 10 10H5V7.5C5 6.125 6.125 5 7.5 5H8.75C9.4375 5 10 4.4375 10 3.75C10 3.0625 9.4375 2.5 8.75 2.5H7.5C4.7375 2.5 2.5 4.7375 2.5 7.5V20C2.5 21.375 3.625 22.5 5 22.5H2.5Z"
          fill="#FFFFFF"
        />
      </svg>

      {/* Navigation arrows */}
      <div className="absolute left-0 top-[116px]">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          className="rounded-full shadow-[0px_0px_6px_0px_rgba(0,0,0,0.1)]"
        >
          <circle cx="15" cy="15" r="15" fill="white" />
          <path
            d="M18 9L12 15L18 21"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute right-0 top-[116px]">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          className="rounded-full shadow-[0px_0px_6px_0px_rgba(0,0,0,0.1)]"
        >
          <circle cx="15" cy="15" r="15" fill="white" />
          <path
            d="M12 9L18 15L12 21"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function ContactSection({
  heading = "Let's Build Your Dream App — Get a Free Consultation!",
  subText = "Have an idea or need expert help with your digital project? At Trimsel, we help businesses of all sizes with end-to-end development services — from websites and mobile apps to cloud, DevOps, and digital marketing.",
  eventLabel = "contact_form",
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
  const [activeSlide, setActiveSlide] = useState(0);

  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const captchaNum1 = useRef(Math.floor(Math.random() * 10) + 1);
  const captchaNum2 = useRef(Math.floor(Math.random() * 10) + 1);

  useEffect(() => {
    captchaNum1.current = Math.floor(Math.random() * 10) + 1;
    captchaNum2.current = Math.floor(Math.random() * 10) + 1;
    setCaptchaAnswer(String(captchaNum1.current + captchaNum2.current));
  }, []);

  const handleThankYouClose = () => {
    setShowThankYou(false);
    setIsSubmitted(false);
  };

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  async function onSubmitForm(values) {
    if (isSubmitting) return;
    if (!phone) {
      setMessage("Please enter your mobile number (include country code).");
      return;
    }
    if (captchaInput !== captchaAnswer) {
      setMessage("Please solve the captcha correctly.");
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
        setMessage("We couldn't verify you as human. Please try again.");
        return;
      }

      const { firstName, lastName, ...restValues } = values;
      const payload = {
        ...restValues,
        name: `${firstName || ""} ${lastName || ""}`.trim(),
        phone,
        recaptchaToken,
      };

      setMessage("");
      await postJson("/api/contact", payload);
      trackEvent("contact_form_submit", {
        event_category: "lead",
        event_label: eventLabel,
      });
      setMessage(
        "Thank you! We have received your message. Our team will get back to you soon."
      );
      setIsSubmitted(true);
      setShowThankYou(true);
      reset();
      setPhone("");
      setCaptchaInput("");
      captchaNum1.current = Math.floor(Math.random() * 10) + 1;
      captchaNum2.current = Math.floor(Math.random() * 10) + 1;
      setCaptchaAnswer(String(captchaNum1.current + captchaNum2.current));
    } catch (error) {
      setMessage("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative min-h-[1024px] overflow-hidden bg-white">
        {/* Background decorative ellipses */}
        <div
          className="pointer-events-none absolute right-[190px] top-[324px] h-[225px] w-[225px] rounded-full opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(95, 200, 151, 0.18) 0%, rgba(39, 169, 224, 0.18) 100%)",
            filter: "blur(157px)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-[108px] left-[557px] h-[196px] w-[196px] rounded-full opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(95, 200, 151, 0.22) 0%, rgba(39, 169, 224, 0.25) 100%)",
            filter: "blur(157px)",
          }}
        />
        <div
          className="pointer-events-none absolute left-[-85px] top-[165px] h-[323px] w-[323px] rounded-full opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(95, 200, 151, 0.18) 0%, rgba(39, 169, 224, 0.18) 100%)",
            filter: "blur(157px)",
          }}
        />

        <div className="relative mx-auto max-w-[1240px] px-[100px] pt-[121px]">
          {/* Header Section */}
          <div className="mb-[50px] flex flex-col gap-5">
            <h2 className="font-urbanist text-[30px] font-semibold leading-[1.2] text-black">
              {heading}
            </h2>
            <p className="max-w-[868px] font-manrope text-xl font-normal leading-[1.6] text-black">
              {subText}
            </p>
          </div>

          {/* Main Content */}
          <div className="flex items-center gap-[7px]">
            {/* Left Side - Testimonials */}
            <div className="flex w-[619px] flex-col items-center gap-[62px]">
              {/* Testimonials Header */}
              <div className="flex w-full flex-col gap-5">
                <div className="flex items-center">
                  <h3
                    className="font-urbanist text-[26px] font-semibold leading-[1.2]"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(28, 125, 189, 1) 0%, rgba(5, 168, 152, 1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0px 2px 3px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    WHAT OUR CLIENT SAYS
                  </h3>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h4 className="font-manrope text-[23px] font-semibold leading-[1.366] text-black">
                    Build AI-Powered, Secure, and Scalable Apps
                  </h4>
                  <p className="font-manrope text-base font-medium leading-[1.366] text-black">
                    Find out why 500+ business reply on TechAhead to power their
                    success.
                  </p>
                </div>
              </div>

              {/* Testimonials Carousel */}
              <div className="flex w-[527px] flex-col items-center gap-5">
                <div className="relative h-[265px] w-full overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${activeSlide * 520}px)`,
                    }}
                  >
                    {testimonials.map((testimonial) => (
                      <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                      />
                    ))}
                  </div>
                </div>

                {/* Carousel Dots */}
                <div className="flex items-center gap-4">
                  <div className="flex h-[10px] w-[18px] items-center justify-center rounded-full bg-[#06A799]" />
                  {[1, 2, 3, 4].map((dot) => (
                    <div
                      key={dot}
                      className={`h-[10px] w-[10px] rounded-full ${
                        activeSlide === dot - 1
                          ? "bg-[#06A799]"
                          : "bg-[#D9D9D9]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="rounded-[4px] bg-[#F5FAFF] p-[50px_20px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.19)]">
              <div className="mb-5 rounded-[15px] bg-[rgba(217,217,231,0.25)] px-4 py-3">
                <h3 className="font-manrope text-xl font-bold leading-[1.366] text-black">
                  Start Your project Discussion
                </h3>
              </div>

              {message && (
                <p
                  className={`mb-4 rounded-2xl px-4 py-3 text-sm ${
                    isSubmitted
                      ? "bg-green-50 text-green-700"
                      : "bg-rose-50 text-rose-700"
                  }`}
                >
                  {message}
                </p>
              )}

              <form
                className="space-y-[18px]"
                onSubmit={handleSubmit(onSubmitForm)}
                noValidate
              >
                {/* First Name / Last Name */}
                <div className="flex items-center gap-[33px]">
                  <div className="w-[270px]">
                    <input
                      {...register("firstName", {
                        required: {
                          value: true,
                          message: "First name is required",
                        },
                      })}
                      type="text"
                      placeholder="First Name"
                      className="w-full border-0 border-b border-black bg-white px-[10px] py-[10px] font-manrope text-sm font-normal leading-[1.366] text-[#52525A] placeholder:text-[#52525A] focus:border-[#1C75BC] focus:outline-none"
                    />
                    {errors?.firstName && (
                      <p className="mt-1 text-xs text-rose-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="w-[270px]">
                    <input
                      {...register("lastName", {
                        required: {
                          value: true,
                          message: "Last name is required",
                        },
                      })}
                      type="text"
                      placeholder="Last Name"
                      className="w-full border-0 border-b border-black bg-white px-[10px] py-[10px] font-manrope text-sm font-normal leading-[1.366] text-[#52525A] placeholder:text-[#52525A] focus:border-[#1C75BC] focus:outline-none"
                    />
                    {errors?.lastName && (
                      <p className="mt-1 text-xs text-rose-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email / Phone */}
                <div className="flex items-center gap-[33px]">
                  <div className="w-[270px]">
                    <input
                      {...register("email", {
                        required: { value: true, message: "Email is required" },
                        pattern: {
                          value:
                            /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      type="email"
                      placeholder="Email"
                      className="w-full border-0 border-b border-black bg-white px-[10px] py-[10px] font-manrope text-sm font-normal leading-[1.366] text-[#52525A] placeholder:text-[#52525A] focus:border-[#1C75BC] focus:outline-none"
                    />
                    {errors?.email && (
                      <p className="mt-1 text-xs text-rose-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="w-[270px]">
                    <div className="flex items-center gap-[5px] border-b border-black bg-white px-[10px] py-[6px]">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {/* India Flag SVG */}
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              y="3.33"
                              width="24"
                              height="5.33"
                              fill="#FF9933"
                            />
                            <rect
                              y="8.67"
                              width="24"
                              height="6.67"
                              fill="#EEEEEE"
                            />
                            <rect
                              y="15.33"
                              width="24"
                              height="5.33"
                              fill="#138808"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="2.67"
                              fill="#000080"
                            />
                            <circle cx="12" cy="12" r="2" fill="#6666B3" />
                            <circle
                              cx="12"
                              cy="12"
                              r="0.67"
                              fill="#000080"
                            />
                          </svg>
                          <span className="ml-1 font-manrope text-xs font-normal leading-[0.583] text-black">
                            +91
                          </span>
                        </div>
                        <span className="ml-1 font-manrope text-xl font-normal leading-[0.35] text-black">
                          ‣
                        </span>
                      </div>
                      <span className="font-manrope text-xl font-light leading-[1.366] text-black">
                        |
                      </span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder=""
                        className="flex-1 bg-transparent font-manrope text-sm font-normal text-black focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Company / Where did you find us */}
                <div className="flex items-center gap-[33px]">
                  <div className="w-[270px]">
                    <input
                      {...register("company")}
                      type="text"
                      placeholder="Company"
                      className="w-full border-0 border-b border-black bg-white px-[10px] py-[10px] font-manrope text-sm font-normal leading-[1.366] text-[#52525A] placeholder:text-[#52525A] focus:border-[#1C75BC] focus:outline-none"
                    />
                  </div>
                  <div className="w-[270px]">
                    <div className="flex items-center gap-[5px] border-b border-black bg-white px-[10px] py-[10px]">
                      <div className="flex flex-1 items-center">
                        <span className="font-manrope text-sm font-normal leading-[1.366] text-black">
                          Where did you find us?
                        </span>
                        <span className="ml-auto font-manrope text-xl font-normal leading-[0.35] text-black">
                          ‣
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <textarea
                    {...register("message", {
                      required: {
                        value: true,
                        message: "Please describe your project",
                      },
                    })}
                    placeholder="Tell about your project"
                    rows={3}
                    className="w-full border-0 border-b border-black bg-white px-[10px] py-[10px] pb-[40px] font-manrope text-sm font-normal leading-[1.366] text-[#52525A] placeholder:text-[#52525A] focus:border-[#1C75BC] focus:outline-none"
                  />
                  {errors?.message && (
                    <p className="mt-1 text-xs text-rose-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* NDA & Response Section */}
                <div className="rounded-[15px] bg-[rgba(217,217,231,0.25)] px-4 py-3">
                  <div className="flex flex-col gap-[2px]">
                    <div className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2.5"
                          y="2.5"
                          width="15"
                          height="15"
                          rx="2"
                          stroke="#0851F6"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M6 10L9 13L14 7"
                          stroke="#0851F6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="font-manrope text-sm font-normal leading-[1.366] text-black">
                        Your idea is 100% protected by our Non-Disclosure
                        Agreement.
                      </p>
                    </div>
                    <p className="font-manrope text-base font-normal leading-[1.366] text-[#52525A]">
                      Response guaranteed with 24 hours
                    </p>
                  </div>

                  {/* Captcha & Submit */}
                  <div className="mt-4 flex items-center gap-[49px]">
                    <div className="flex items-center">
                      <span className="font-manrope text-[28px] font-normal leading-[1.366] text-black">
                        {captchaNum1.current} &nbsp;+&nbsp; {captchaNum2.current}{" "}
                        &nbsp;=
                      </span>
                      <div className="ml-3 w-[45px] border-b border-black">
                        <input
                          type="text"
                          value={captchaInput}
                          onChange={(e) => setCaptchaInput(e.target.value)}
                          className="w-full bg-transparent font-manrope text-[28px] font-normal leading-[1.366] text-black focus:outline-none"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-[4px] bg-[#1C75BC] px-20 py-3 font-manrope text-base font-bold leading-[1.366] text-white transition hover:bg-[#155a9a] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending…" : "Get a Free Consultation"}
                    </button>
                  </div>
                </div>

                {siteKey && (
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={siteKey}
                    size="invisible"
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
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
              <Image
                src="/images/astronaut-thanking.gif"
                width={200}
                height={200}
                alt="Thank you"
                className="mx-auto"
                loading="lazy"
              />
              <h2 className="text-2xl font-semibold text-slate-900">
                Thank you for contacting us!
              </h2>
              <p className="text-sm text-slate-600">
                We have received your message. We&apos;ll reach out shortly.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

