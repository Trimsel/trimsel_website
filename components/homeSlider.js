"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./header";
import { manropeFont } from "../lib/fonts";

export default function HomeSlider() {
  const words = [
    "AI",
    "Intelligent Automation",
    "Cognitive Computing",
    "Smart Technology",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="new-hm" aria-label="Trimsel hero">
      <Header />

      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

          {/* LEFT CONTENT */}
          <div>
            <h1
              className={`mt-5 text-4xl lg:text-5xl lg:ml-20 font-semibold leading-tight text-black ${manropeFont.className}`}
            >
              Smarter Logistics,
              <br />
              Powered by{" "}
              <span className="relative inline-block min-w-[220px] align-baseline mb-8">
                <span
                  key={`${index}-${words[index]}`} // 🔥 forces animation restart
                  className={`absolute inset-0 text-[#1FA6A0] animate-rotate-word whitespace-nowrap text-semibold text-3xl lg:text-4xl ${manropeFont.className}`}
                >
                  {words[index]}
                </span>
              </span>
            </h1>

            <p
              className={`max-w-xl lg:ml-20 text-[#5C5A5A] text-lg leading-relaxed mt-4 ${manropeFont.className}`}
            >
              An AI-driven logistics optimization platform that revolutionizes how
              businesses plan, execute, and manage transportation. Real-time
              insights enable smarter decisions, while end-to-end visibility
              ensures greater transparency across every stage of the supply chain.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4 lg:ml-20">
              <button className={`px-6 py-3 rounded-xs bg-[#1F6AE1] text-white font-medium hover:bg-[#1958B8] transition ${manropeFont.className}`}>
                Get Started
              </button>

              <button className={`px-6 py-3 rounded-xs border border-[#1C75BC] text-black font-medium hover:bg-gray-50 transition ${manropeFont.className}`}>
                Book a demo
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center mt-8">
            <div className="absolute inset-0 rounded-full bg-blue-100 blur-3xl opacity-60" />

            <div className="relative">
              <Image
                src="/homeimage.svg"
                alt="Home"
                width={400}
                height={380}
                className="relative z-10 animate-shake ml-16"
                priority
              />

              <Image
                src="/robot.svg"
                alt="AI Robot"
                width={600}
                height={600}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[600px] max-w-none h-auto ml-4"
                priority
              />
            </div>
          </div>

        </div>
      </section>
    </section>
  );
}
