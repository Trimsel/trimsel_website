 
 import React from "react";
 import { manropeFont } from "../lib/fonts";


 const features = [
  {
    text: "Water Level Monitoring System",
    icon: "💧",
  },
  {
    text: "Smart Overflow & Leakage Monitor",
    icon: "🚰",
  },
  {
    text: "Automated Motor & Pump Operations",
    icon: "⚙️",
  },
  {
    text: "Automated Water Flow Control",
    icon: "🔄",
  },
];


export default function Portfolio() {
  return (
    /* WaterManagementSection */
    <div className="relative w-full h-[720px] overflow-hidden">
      <img
        src="/portfolio1.svg"
        alt="Portfolio1"
        className="absolute inset-0 w-full h-full object-cover-full"
      />
      <div className="absolute inset-0 px-8 pt-6">
        <h1
          className={`text-2xl sm:text-2xl lg:text-4xl font-bold text-white mt-8 
              ${manropeFont.className}`}
        >
          WATER MANAGEMENT
        </h1>
        <p
          className={`text-lg sm:text-xl font-bold text-yellow-400 mb-3 
              ${manropeFont.className}`}
        >
          KARIOT - IOT BASED WATER SOLUTION MANAGEMENT APP
        </p>
        <p
          className={`text-sm sm:text-base text-gray-100 leading-relaxed max-w-lg
              ${manropeFont.className}`}
        >
          Get detailed information about the challenges we faced, innovation &
          solutions provided by our IoT team. We possess relevant experience in
          diverse fields and have completed multiple industrial, residential &
          commercial projects successfully.
        </p>
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            ["Full Stack", "#FEAA1B"],
            ["Flutter", "#D41BFE"],
            ["Dart", "#FE1B1B"],
            ["JavaScript", "#007A36"],
            ["HTML", "#CE0A79"],
          ].map(([label, color]) => (
            <span
              key={label}
              className={`px-4 py-2 text-white text-sm font-semibold rounded-sm shadow-sm ${manropeFont.className}`}
              style={{ backgroundColor: color }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mb-8">
          <div className="bg-white rounded-sm px-2 py-4 text-center">
            <div
              className={`text-3xl sm:text-4xl font-bold text-black mb-2
                ${manropeFont.className}`}
            >
              3X
            </div>
            <div
              className={`text-xs sm:text-sm font-semibold text-black
                ${manropeFont.className}`}
            >
              Faster Decision Making
            </div>
          </div>
          <div className="bg-white rounded-sm px-2 py-4 text-center">
            <div
              className={`text-3xl sm:text-4xl font-bold text-black mb-2
                ${manropeFont.className}`}
            >
              1
            </div>
            <div
              className={`text-xs sm:text-sm font-semibold text-black
                ${manropeFont.className}`}
            >
              Minute Report Generation
            </div>
          </div>
          <div className="bg-white rounded-sm px-2 py-4 text-center">
            <div
              className={`text-3xl sm:text-4xl font-bold text-black mb-2
                ${manropeFont.className}`}
            >
              2
            </div>
            <div
              className={`text-xs sm:text-sm font-semibold text-gray-700
                ${manropeFont.className}`}
            >
              Years of Audit-ready data
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-start gap-2">
          {/* Features Grid */}
          <div className="inline-grid grid-cols-1 sm:grid-cols-[auto_auto] gap-x-5 gap-y-2">
            {features.map((item) => (
              <div
                key={item.text}
                className="
              h-[36px]
              w-[360px]
              flex items-center gap-3
              justify-self-start
              border border-white/70
              rounded-sm
              px-5
             text-white text-sm font-semibold
              shadow-[0_0_12px_rgba(255,255,255,0.45)]
              bg-white/15
            "
              >
                <span className="text-lg">{item.icon}</span>
                <span className={`text-white ${manropeFont.className}`}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className={`
          mt-6
          inline-flex items-center gap-2
          bg-[#FACC15]
          text-black
          font-semibold
          px-6 py-3
          rounded-full
          shadow-md
          hover:scale-105 transition
          ${manropeFont.className}
        `}
          >
            View Case Study
            <span className="bg-white rounded-full p-1">
              <img
              src="/PortfolioArrow.svg"
              alt="Arrow"
              width={18}
              height={18}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
