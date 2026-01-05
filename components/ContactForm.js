"use client";

import { useState } from "react";
import Image from "next/image";

export function ContactForm() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      text: "It's been an absolute pleasure to work with TechAhead team through this project.I know you have all gone way over and above to deliver the app to the right quality, and the team has collectivety added value at each stage.",
      name: "Andy Hobbs",
      company: "ICC",
    },
  ];
  const totalSlides = testimonials.length || 1;
  const arrowLeftSrc =
    "data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 19L8 12L15 5' stroke='%230F172A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
  const arrowRightSrc =
    "data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 5L16 12L9 19' stroke='%230F172A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

  const goToSlide = (index) => {
    if (index < 0) {
      setCurrentSlide(totalSlides - 1);
    } else if (index >= totalSlides) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    source: "",
    project: "",
    captcha: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-8 ml-8">
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="font-urbanist font-semibold text-[30px] leading-[1.2em] text-black text-left">
          Let&apos;s Build Your Dream App — Get a Free Consultation!
        </h1>
        <p className="font-manrope font-normal text-[20px] leading-[1.6em] text-black max-w-[868px]">
          Have an idea or need expert help with your digital project? At
          Trimsel, we help businesses of all sizes with end-to-end development
          services — from websites and mobile apps to cloud, DevOps, and digital
          marketing.
        </p>
      </div>

      <div className="flex flex-col gap-2 lg:flex-row lg:items-start">
        {/* Testimonials / Social proof */}
        <div className="flex-1 flex flex-col items-center gap-2">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center">
                <h2
                  className="font-urbanist font-semibold text-[26px] leading-[1.2em] bg-gradient-to-r from-[#1C7DBD] to-[#05A898] bg-clip-text text-transparent"
                  style={{ textShadow: "0px 2px 3px rgba(0, 0, 0, 0.25)" }}
                >
                  WHAT OUR CLIENT SAYS
                </h2>
              </div>
              <div className="flex flex-col gap-[4px] w-full">
                <h3 className="font-manrope font-semibold text-[23px] leading-[1.366em] text-black">
                  Build AI-Powered, Secure, and Scalable Apps
                </h3>
                <p className="font-manrope font-medium text-base leading-[1.366em] text-black">
                  Find out why 500+ business reply on TechAhead to power their
                  success.
                </p>
              </div>
            </div>

            {/* Testimonial Cards Carousel */}
            <div className="flex flex-col items-center gap-8 w-full relative h-[265px] overflow-hidden">
              <div className="relative w-full h-full">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 527}px)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <div key={index} className="min-w-[527px] flex-shrink-0">
                      <div className="relative w-[501px] mx-auto">
                        <div className="relative">
                          <div
                            className="bg-[#F5FAFF] rounded-[4px] p-[30px_20px] shadow-[0px_0px_17px_0px_rgba(0,0,0,0.14)] flex flex-col gap-5 relative z-10"
                            style={{ marginTop: "15px" }}
                          >
                            <p className="font-manrope font-semibold text-sm leading-[1.714em] text-black w-[431px]">
                              {testimonials[0].text}
                            </p>
                            <div className="flex items-center gap-[10px]">
                              <div
                                className="w-14 h-14 rounded-full bg-gray-200 flex-shrink-0"
                                style={{ borderRadius: "156px" }}
                              />
                              <div className="flex flex-col gap-[2px] w-[116px]">
                                <p className="font-manrope font-bold text-lg leading-[1.366em] text-black text-center">
                                  {testimonials[0].name}
                                </p>
                                <p className="font-manrope font-medium text-lg leading-[1.366em] text-[#52525A] text-center">
                                  {testimonials[0].company}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Quote icons */}
                          {/* <div className="absolute top-[11px] left-[11px] w-[30px] h-[30px] z-20">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 3.75H30V26.25H0V3.75Z" fill="white" />
                              <path d="M0 0H30V22.5H0V0Z" fill="white" />
                              <path
                                d="M18.75 0H30V22.5H18.75V0Z"
                                fill="#030104"
                              />
                              <path d="M0 0H11.25V22.5H0V0Z" fill="#030104" />
                            </svg>
                          </div> */}
                          {/* <div className="absolute bottom-[11px] right-[11px] w-[30px] h-[30px] z-20">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 3.75H30V26.25H0V3.75Z" fill="white" />
                              <path d="M0 0H30V22.5H0V0Z" fill="white" />
                              <path
                                d="M18.75 0H30V22.5H18.75V0Z"
                                fill="#030104"
                              />
                              <path d="M0 0H11.25V22.5H0V0Z" fill="#030104" />
                            </svg>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Navigation arrows */}
                {/* <button
                  type="button"
                  onClick={() => goToSlide(currentSlide - 1)}
                  className="absolute left-[-12px] top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md border border-slate-200 w-9 h-9 flex items-center justify-center hover:bg-slate-50 transition"
                  aria-label="Previous testimonial"
                >
                  <Image
                    src={arrowLeftSrc}
                    alt="Previous"
                    width={14}
                    height={14}
                  />
                </button> */}
                {/* <button
                  type="button"
                  onClick={() => goToSlide(currentSlide + 1)}
                  className="absolute right-[-12px] top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md border border-slate-200 w-9 h-9 flex items-center justify-center hover:bg-slate-50 transition"
                  aria-label="Next testimonial"
                >
                  <Image
                    src={arrowRightSrc}
                    alt="Next"
                    width={14}
                    height={14}
                  />
                </button> */}
              </div>

              {/* Navigation dots */}
              {/* <div className="flex items-center gap-4 w-[82px] h-[10px] mt-5">
                <button
                  onClick={() => setCurrentSlide(0)}
                  className={`h-[10px] rounded-full transition-all ${
                    currentSlide === 0
                      ? "bg-[#06A799] w-[18px]"
                      : "bg-[#D9D9D9] w-[10px]"
                  }`}
                />
                {Array.from({ length: totalSlides - 1 }).map((_, i) => {
                  const index = i + 1;
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-[10px] h-[10px] rounded-full transition-all ${
                        currentSlide === index ? "bg-[#06A799]" : "bg-[#D9D9D9]"
                      }`}
                    />
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 bg-white rounded-[4px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.19)] py-[50px] px-5 flex flex-col items-center mb-12 mr-5">
          {/* Form Header */}
          <div className="px-4 py-3">
            <h3 className="font-manrope text-xl font-semibold text-black flex-items-center">
              Start Your project Discussion
            </h3>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-[8px] w-full">
            <div className="flex flex-col gap-[18px]">
              {/* First Row: First Name & Last Name */}
              <div className="flex items-center gap-[33px] w-full">
                <div className="flex items-left gap-[5px] px-[10px] py-[10px] pr-[191px] border-b border-black bg-white w-[270px]">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="font-manrope font-normal text-sm leading-[1.366em] text-[#52525A] bg-transparent border-none outline-none placeholder:text-[#52525A]"
                  />
                </div>
                <div className="flex items-left gap-[10px] px-[10px] py-[10px] pr-[191px] border-b border-black bg-white w-[270px]">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="font-manrope font-normal text-sm leading-[1.366em] text-[#52525A] bg-transparent border-none outline-none placeholder:text-[#52525A]"
                  />
                </div>
              </div>

              {/* Second Row: Email & Phone */}
              <div className="flex items-center gap-[33px] w-full">
                <div className="flex items-left gap-[5px] px-[5px] py-[3px] pr-[225px] border-b border-black bg-white w-[270px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="font-manrope font-normal text-sm leading-[1.366em] text-[#52525A] bg-transparent border-none outline-none placeholder:text-[#52525A]"
                  />
                </div>
                <div className="flex items-center gap-[5px] px-[6px] py-[6px] pr-[217px] border-b border-black bg-white w-[270px] h-[39px]">
                  <div className="flex items-center gap-[5px]">
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      />
                      {/* <rect
                          y="15.33"
                          width="24"
                          height="5.33"
                          fill="#138808"
                        />
                        <rect
                          y="8.67"
                          width="24"
                          height="6.67"
                          fill="#EEEEEE"
                        />
                        {/* <rect
                          y="3.33"
                          width="24"
                          height="5.33"
                          fill="#FF9933"
                        /> */}
                      {/* <circle cx="9.34" cy="9.33" r="2.67" fill="#000080" />
                        <circle cx="10" cy="10" r="2" fill="#6666B3" />
                        <circle cx="11.34" cy="11.33" r="0.67" fill="#6666B3" /> */}
                    </div>
                    <span className="font-manrope font-normal text-xs leading-[0.583em] text-black">
                      +91
                    </span>
                  </div>
                  <div className="flex items-center justify-center w-4 h-4">
                    <span className="font-manrope font-normal text-xl leading-[0.35em] text-black rotate-90">
                      ‣
                    </span>
                  </div>
                  <span className="font-manrope font-light text-xl leading-[1.366em] text-black">
                    |
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder=""
                    value={formData.phone}
                    onChange={handleChange}
                    className="font-manrope font-normal text-sm leading-[1.366em] text-[#52525A] bg-transparent border-none outline-none flex-1 placeholder:text-[#52525A]"
                  />
                </div>
              </div>

              {/* Third Row: Company & Source */}
              <div className="flex items-center gap-[33px] w-full">
                <div className="flex items-left gap-[5px] px-[3px] py-[10px] pr-[198px] border-b border-black bg-white w-[270px]">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="font-manrope font-normal text-sm leading-[1.366em] text-[#52525A] bg-transparent border-none outline-none placeholder:text-[#52525A]"
                  />
                </div>
                <div className="flex items-center gap-[5px] px-[10px] py-[10px] pr-[106px] border-b border-black bg-white">
                  <span className="font-manrope font-normal text-sm leading-[1.366em] text-black">
                    Where did you find us?
                  </span>
                  <div className="flex items-center justify-center w-4 h-4">
                    <span className="font-manrope font-normal text-xl leading-[0.35em] text-black">
                      ‣
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Fourth Row: Project Description */}
            <div className="border-b border-black bg-white w-full">
              <textarea
                name="project"
                placeholder="Tell about your project"
                value={formData.project}
                onChange={handleChange}
                className="font-manrope font-normal text-sm text-[#52525A] bg-transparent border-none outline-none placeholder:text-[#52525A] resize-none"
              />
            </div>

            {/* Privacy Notice */}
            <div className="flex flex-col gap-[2px] w-[431px]">
              <div className="flex items-center gap-1 w-full">
                <div className="w-5 h-5 flex-shrink-0">
                  {/* <svg
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
                      fill="white"
                    />
                  </svg> */}
                </div>
                <p className="font-manrope font-normal text-sm leading-[1.366em] text-black">
                  Your idea is 100% protected by our Non-Disclosure Agreement.
                </p>
              </div>
              <p className="font-manrope font-normal text-base leading-[1.366em] text-[#52525A]">
                Response guaranteed with 24 hours
              </p>
            </div>

            {/* Captcha and Submit */}
            <div className="flex items-center gap-[49px] w-full">
              <div className="flex items-center gap-2 w-[178px] h-[38px]">
                <span className="font-manrope font-normal text-[28px] leading-[1.366em] text-black whitespace-pre">
                  5 + 4 =
                </span>
                <div
                  className="w-[45px] h-0 border border-black"
                  style={{ marginTop: "28px" }}
                />
                <input
                  type="text"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  className="w-6 font-manrope font-normal text-[28px] leading-[1.366em] text-black bg-transparent border-none outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#1C75BC] rounded-[4px] px-20 py-3 flex items-center gap-[10px] hover:opacity-90 transition-opacity"
              >
                <span className="font-manrope font-bold text-base leading-[1.366em] text-white whitespace-pre">
                  Get a Free Consultation
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
