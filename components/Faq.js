// components/Faq.jsx
"use client";

import Image from "next/image";
import { manropeFont } from "../lib/fonts";

export default function Faq({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-gray-300 rounded-xl w-full max-w-xl mx-auto bg-white">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="
          relative w-full flex items-center justify-between
          p-3 
          hover:bg-[#dcecff] transition-colors duration-300
          focus:outline-none
        "
      >
        <div
          className={`
            flex-1 text-left overflow-hidden transition-all duration-300
            ${isOpen ? "max-h-20" : "max-h-6"}
          `}
        >
          {/* QUESTION */}
          <p
            className={`
              text-sm text-black text-left ${manropeFont.className}
              transition-all duration-300
              ${isOpen ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"}
            `}
          >
            {question}
          </p>

          {/* ANSWER */}
          <p
            className={`
              -mt-5 font-light text-sm text-gray-600 text-left ${manropeFont.className}
              transition-all duration-300
              ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
            `}
          >
            {answer}
          </p>
        </div>

        <Image
          src={isOpen ? "/chevron-up.png" : "/chevron-down.png"}
          alt="toggle"
          width={24}
          height={24}
          className="ml-3 transition-transform duration-300"
        />
      </button>

      {isOpen && <div className="h-[2px] bg-blue-500 w-full rounded-b-xl mx-auto"></div>}
    </div>
  );
}
