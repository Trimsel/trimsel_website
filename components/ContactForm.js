
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export function ContactForm() {
  const testimonials = [
    {
      text: "It's been an absolute pleasure to work with TechAhead team through this project. They went above and beyond to deliver quality work.",
      name: "Andy Hobbs",
      company: "ICC",
    },
    {
      text: "Trimsel delivered exceptional results on our mobile app. Their expertise helped us scale efficiently.",
      name: "Jane Doe",
      company: "TechCorp",
    },
    {
      text: "The team understood our vision and delivered beyond expectations.",
      name: "John Smith",
      company: "InnovateLabs",
    },
  ];
  const totalSlides = testimonials.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prev = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const goToSlide = (index) => {
    setCurrentSlide((index + totalSlides) % totalSlides);
  };

  // Auto-advance slider every 4 seconds
  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [totalSlides]);

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

  // Country picker state
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+91",
    name: "India",
    flag: "/indiaflag.png",
  });
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef(null);

  const countries = [
    { code: "+91", name: "India", flag: "/indiaflag.png" },
    { code: "+1", name: "United States", flag: "/indiaflag.png" },
    { code: "+44", name: "United Kingdom", flag: "/indiaflag.png" },
    { code: "+61", name: "Australia", flag: "/indiaflag.png" },
    { code: "+971", name: "UAE", flag: "/indiaflag.png" },
    { code: "+65", name: "Singapore", flag: "/indiaflag.png" },
    { code: "+49", name: "Germany", flag: "/indiaflag.png" },
    { code: "+33", name: "France", flag: "/indiaflag.png" },
    { code: "+81", name: "Japan", flag: "/indiaflag.png" },
    { code: "+86", name: "China", flag: "/indiaflag.png" },
  ];

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.code.includes(countrySearch)
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target)
      ) {
        setShowCountryDropdown(false);
        setCountrySearch("");
      }
    };
    if (showCountryDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCountryDropdown]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
    setCountrySearch("");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-8 ml-8">
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="font-urbanist font-semibold text-3xl leading-[1.2em] text-black text-left">
          Let&apos;s Build Your Dream App — Get a Free Consultation!
        </h1>
        <p className="font-manrope font-normal text-2xl leading-[1.6em] text-black text-left">
          Have an idea or need expert help with your digital project?
          At Trimsel, we help businesses of all sizes with
          end-to-end development services from websites and mobile apps
          to cloud, DevOps, and digital marketing.
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

            {/* Testimonial Slider */}
            <div className="flex flex-col items-center gap-6 w-full relative">
              <div className="relative min-h-[1080px] w-full max-w-[520px] overflow-hidden flex flex-col">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((item, index) => (
                    <div key={index} className="relative w-full flex-shrink-0 px-4 h-full">
                      {/* Main card */}
                      <div className="relative rounded-2xl bg-[#F5FAFF] py-8 px-8 z-0 h-full flex flex-col justify-between">
                        <p className="font-manrope text-[15px] font-semibold leading-relaxed text-slate-800 mb-28">
                          {item.text}
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                          <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                            <div className="h-full w-full bg-slate-300"></div>
                          </div>
                          <div>
                            <p className="font-manrope text-base font-bold leading-tight text-slate-900">
                              {item.name}
                            </p>
                            <p className="font-manrope text-sm font-medium leading-tight text-slate-500 mt-1">
                              {item.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 bg-white rounded-[4px] border border-gradient-to-r from-[#29B375] to-[#2E70C3] py-[50px] px-5 flex flex-col items-center mb-12 mr-5">
          {/* Form Header */}
          <div className="px-4 py-3">
            <h3 className="font-manrope text-2xl font-semibold text-black flex-items-center">
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
                <div
                  ref={countryDropdownRef}
                  className="relative flex items-center gap-[5px] px-[6px] py-[6px] pr-[10px] border-b border-black bg-white w-[270px] h-[39px]"
                >
                  <div
                    className="flex items-center gap-[5px] cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={selectedCountry.flag}
                        alt={`${selectedCountry.name} flag`}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-manrope font-normal text-xs leading-[0.583em] text-black">
                      {selectedCountry.code}
                    </span>
                    <div className="flex items-center justify-center w-6 h-6 transition-all duration-200">
                      <span
                        className={`font-manrope font-normal text-xl leading-[0.35em] text-black transition-transform duration-200 ${showCountryDropdown ? "rotate-270" : "rotate-90"
                          }`}
                      >
                        ‣
                      </span>
                    </div>
                  </div>

                  {/* Country Dropdown */}
                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-2xl z-[100] max-h-[300px] overflow-y-auto w-[280px]">
                      {/* Search Input */}
                      <div className="sticky top-0 bg-white border-b border-gray-200 p-2">
                        <input
                          type="text"
                          placeholder="Search country..."
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded outline-none focus:border-blue-500"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>

                      {/* Country List */}
                      <div className="max-h-[250px] overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country) => (
                            <button
                              key={country.code + country.name}
                              type="button"
                              onClick={() => handleCountrySelect(country)}
                              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 transition-colors ${selectedCountry.code === country.code
                                ? "bg-blue-50"
                                : ""
                                }`}
                            >
                              <Image
                                src={country.flag}
                                alt={`${country.name} Flag`}
                                width={20}
                                height={20}
                                className="flex-shrink-0 object-contain"
                              />
                              <span className="font-manrope font-normal text-sm text-black">
                                {country.code}
                              </span>
                              <span className="font-manrope font-normal text-sm text-gray-600 ml-auto">
                                {country.name}
                              </span>
                            </button>
                          ))
                        ) : (
                          <div className="px-3 py-2 text-sm text-gray-500 text-center">
                            No countries found
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <span className="font-manrope font-light text-xl leading-[1.366em] text-black ml-1">
                    |
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="font-manrope font-normal text-sm leading-[1.366em] text-[#52525A] bg-transparent border-none outline-none flex-1 placeholder:text-[#52525A] ml-2"
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
                <div className="relative flex items-center px-[10px] py-[10px] border-b border-black bg-white w-[270px]">
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className={`w-full font-manrope font-normal text-sm bg-transparent border-none outline-none appearance-none cursor-pointer z-10 ${formData.source ? "text-black" : "text-[#52525A]"
                      }`}
                  >
                    <option value="" disabled hidden>
                      Where did you find us?
                    </option>
                    <option value="Career Page">Career Page</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Others">Others</option>
                  </select>
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
                <div className="w-5 h-5 flex-shrink-0 mb-2">
                  <Image src="/Tick.svg" width={18} height={18} alt="Security" />
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
                className="bg-[#1C75BC] rounded-[4px] px-20 py-3 flex items-center gap-[10px] transition-opacity"
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
