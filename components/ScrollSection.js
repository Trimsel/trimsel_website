"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

import Portfolio1 from "./Portfolio1";
import Portfolio2 from "./Portfolio2";
import Portfolio3 from "./Portfolio3";
import Portfolio4 from "./Portfolio4";

const portfolios = [
  Portfolio1,
  Portfolio2,
  Portfolio3,
  Portfolio4,
];

function AnimatedItem({ Component, index }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`
        mb-12
        transform
        transition-all
        duration-700
        ease-out
        ${
          inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-12"
        }
      `}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <Component />
    </div>
  );
}

export default function ScrollSection() {
  return (
    <div className="w-full">
      {portfolios.map((Component, index) => (
        <AnimatedItem
          key={index}
          Component={Component}
          index={index}
        />
      ))}
    </div>
  );
}
