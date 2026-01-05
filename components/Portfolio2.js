import React from "react";
import { manropeFont } from "../lib/fonts";

export default function Portfolio() {
  return (
    <div className="relative w-full h-[720px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/portfolio2.svg"
        alt="portfolio2"
        className="absolute inset-0 w-full h-full object-cover-full"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 px-8 pt-6">
      <h1
          className={`text-2xl lg:text-4xl font-bold text-black mt-4 ${manropeFont.className}`}
        >
          ON-DEMAND
        </h1>

        <p
          className={`text-lg sm:text-xl font-bold text-[#0D55A1] mb-3 ${manropeFont.className}`}
        >
          XABER TAXI BOOKING APP
        </p>

        <p
          className={`text-sm sm:text-base text-black leading-relaxed max-w-lg mb-2 ${manropeFont.className}`}
        >
          The taxi dispatch service is the fast growing business in the transportation industry and only the best service provider can withstand the market demand.
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            ["Full Stack", "#0D60B2"],
            ["Flutter", "#D41BFE"],
            ["Dart", "#FE1B1B"],
            ["JavaScript", "#007A36"],
            ["HTML", "#CE0A79"],
          ].map(([label, color]) => (
            <span
              key={label}
              className={`px-4 py-2 text-white text-sm font-semibold rounded-sm ${manropeFont.className}`}
              style={{ backgroundColor: color }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-3 max-w-xl mb-8">
          {[
            ["3X", "Faster Decision Making"],
            ["1", "Minute Report Generation"],
            ["2", "Years of Audit-ready data"],
          ].map(([value, label]) => (
            <div key={label} className="bg-white rounded-sm px-3 py-6 text-center">
              <div className={`text-3xl font-bold text-black mb-2 ${manropeFont.className}`}>
                {value}
              </div>
              <div className={`text-xs font-semibold text-black ${manropeFont.className}`}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-4 gap-3 max-w-3xl mb-8">
          {[
            "Water Level Monitoring System",
            "Smart Overflow & Leakage Monitor",
            "Automated Motor & Pump Operations",
            "Automated Water Flow Control",
          ].map((text) => (
            <div key={text} className="bg-white rounded-sm px-3 py-6 text-center">
              <div className="flex justify-center mb-3">
                <img src="./solid-edit.svg" alt="icon" className="h-10 w-10" />
              </div>
              <div className={`text-xs font-semibold text-black ${manropeFont.className}`}>
                {text}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className={`inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition ${manropeFont.className}`}
        >
          View Case Study
          <span className="bg-white rounded-full p-1">
            <img src="/PortfolioArrow.svg" alt="Arrow" width={18} height={18} />
          </span>
        </button>
      </div>
    </div>
  );
}
