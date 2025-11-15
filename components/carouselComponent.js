import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";

const caseStudies = [
  {
    title: "Ezyhelpers",
    description: "Home service marketplace that automates bookings, payouts, and service-provider onboarding across web and mobile.",
    image: { src: "/images/Group3001.png", width: 500, height: 300, alt: "Ezyhelpers mobile app preview" },
    href: "/portfolio/ezyhelpers-case-study",
  },
  {
    title: "Xaber",
    description: "Taxi and delivery platform with web, iOS, Android, and desktop experiences built on a DevOps-first backbone.",
    image: { src: "/images/Group3002.png", width: 500, height: 300, alt: "Xaber mobility platform screens" },
    href: "/portfolio/xaber-case-study",
  },
  {
    title: "KarIOT",
    description: "AI-enabled smart water management solution that gives campuses and utilities real-time anomaly detection.",
    image: { src: "/images/kariotscreen.webp", width: 500, height: 300, alt: "KarIOT IoT dashboard preview" },
    href: "/portfolio/kariot-case-study",
  },
  {
    title: "Xaber Dispatch",
    description: "White-labeled dispatch and rider apps that keep fleet ops, billing, and CX synchronized in one system.",
    image: { src: "/images/Group3002.png", width: 500, height: 300, alt: "Xaber dispatch screens" },
    href: "/portfolio/xaber-case-study",
  },
];

const chunkStudies = (items, chunkSize = 2) => {
  const chunks = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }
  return chunks;
};

export default function CarouselComponent() {
  const slides = useMemo(() => chunkStudies(caseStudies), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length;

  const goToSlide = (direction) => {
    setActiveIndex((prev) => {
      if (direction === "next") {
        return prev === totalSlides - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? totalSlides - 1 : prev - 1;
    });
  };

  return (
    <div className="relative" aria-label="Portfolio case study carousel">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={`slide-${slideIndex}`} className="w-full flex-shrink-0 px-1">
              <div className="grid gap-6 lg:grid-cols-2">
                {slide.map((item) => (
                  <article
                    key={item.title}
                    className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5"
                  >
                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src={item.image.src}
                        width={item.image.width}
                        height={item.image.height}
                        alt={item.image.alt}
                        className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-6 flex-1 space-y-3">
                      <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                    </div>
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-brand"
                      aria-label={`Read the ${item.title} case study`}
                    >
                      Read Case Study <FaLongArrowAltRight />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <>
          <div className="pointer-events-none absolute inset-y-0 flex items-center justify-between px-2">
            <button
              type="button"
              onClick={() => goToSlide("prev")}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-lg transition hover:-translate-x-0.5 hover:text-brand"
              aria-label="Show previous case studies"
            >
              <Image src="/images/circle-arrow-left.png" width={32} height={32} alt="" />
            </button>
            <button
              type="button"
              onClick={() => goToSlide("next")}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-lg transition hover:translate-x-0.5 hover:text-brand"
              aria-label="Show next case studies"
            >
              <Image src="/images/circle-arrow-right.png" width={32} height={32} alt="" />
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {slides.map((_, indicatorIndex) => (
              <button
                key={`indicator-${indicatorIndex}`}
                type="button"
                onClick={() => setActiveIndex(indicatorIndex)}
                className={`h-2.5 rounded-full transition ${
                  indicatorIndex === activeIndex ? "w-8 bg-brand" : "w-3 bg-slate-300"
                }`}
                aria-label={`Go to slide ${indicatorIndex + 1}`}
                aria-pressed={indicatorIndex === activeIndex}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
