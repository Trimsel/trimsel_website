import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

const caseSlides = [
  {
    id: "ezyhelpers",
    heading: "Our Recent Works",
    headingClass: "bg-gradient-to-br from-sky-500 to-blue-600 text-white",
    image: { src: "/images/12346.webp", alt: "Ezyhelpers app preview" },
    icon: "/images/01.webp",
    tags: ["iOS & Android", "Web"],
    subtitle: "Home Services & House Cleaning",
    description:
      "On-demand marketplace connecting users with vetted professionals. Built with a scalable backend and seamless booking flows.",
    cta: { label: "View Case Study", href: "/portfolio/ezyhelpers-case-study" },
    panelClass: "bg-gradient-to-br from-slate-950 to-slate-900 text-white",
    tagClass: "bg-white/20 text-white",
  },
  {
    id: "xaber",
    heading: "Our Recent Works",
    headingClass: "bg-gradient-to-br from-amber-400 to-orange-500 text-white",
    image: { src: "/images/top-mobile-a.webp", alt: "Xaber app preview" },
    icon: "/images/02..png",
    tags: ["iOS & Android", "Web"],
    subtitle: "Taxi business powered by our Uber-style platform",
    description:
      "Multi-tenant ride platform with real-time tracking, in-app payments, and operational analytics for dispatch, riders, and drivers.",
    cta: { label: "View Case Study", href: "/portfolio/xaber-case-study" },
    panelClass: "bg-gradient-to-br from-orange-500 to-rose-500 text-white",
    tagClass: "bg-white/15 text-white",
  },
  {
    id: "kariot",
    heading: "Our Recent Works",
    headingClass: "bg-gradient-to-br from-emerald-500 to-teal-500 text-white",
    image: { src: "/images/kariotlap.webp", alt: "KarIOT dashboard preview" },
    icon: "/images/03..png",
    tags: ["iOS & Android", "Web"],
    subtitle: "IoT-powered smart water management",
    description:
      "Real-time monitoring of water quality and quantity for residential, commercial, and industrial use cases across campuses.",
    cta: { label: "View Case Study", href: "/portfolio/kariot-case-study" },
    panelClass: "bg-gradient-to-br from-slate-900 to-slate-800 text-white",
    tagClass: "bg-white/15 text-white",
  },
  {
    id: "mocial",
    heading: "Our Recent Works",
    headingClass: "bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white",
    image: { src: "/images/mocial-phone.webp", alt: "Mocial social platform preview" },
    icon: "/images/04..png",
    tags: ["iOS & Android", "Web"],
    subtitle: "All-in-one social platform",
    description:
      "A community platform to grow brand reach, increase engagement, and maintain a healthier work-life balance for creators.",
    cta: { label: "View Case Study", href: "/portfolio/mocial-case-study" },
    panelClass: "bg-gradient-to-br from-slate-950 to-slate-900 text-white",
    tagClass: "bg-white/15 text-white",
  },
];

export default function ScrollSection() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const sectionRefs = useRef([]);
  const [active, setActive] = useState(0);

  // register once on client
  useEffect(() => {
    if (!trackRef.current || !wrapperRef.current || typeof window === "undefined") return;
  
    gsap.registerPlugin(ScrollTrigger);
  
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;
  
    const mm = ScrollTrigger.matchMedia;
    let ctx = gsap.context(() => {
      mm({
        // Desktop & large screens only
        "(min-width: 992px)": () => {
          // Ensure horizontal layout
          gsap.set(trackRef.current, { clearProps: "all" });
  
          // total content width minus viewport width = distance we need to slide
          const getDistance = () => {
            const total = trackRef.current.scrollWidth;
            const view = wrapperRef.current.offsetWidth;
            return Math.max(0, total - view);
          };
  
          const distance = getDistance();
  
          gsap.to(trackRef.current, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top top",
              end: () => "+=" + getDistance(), // pin exactly as long as needed
              scrub: 0.6,
              pin: true,
              // If you prefer zero gap and are OK with the next section overlapping, uncomment:
              // pinSpacing: false,
              onUpdate: (self) => {
                const totalSlides = sectionRefs.current.length || 1;
                const idx = Math.round(self.progress * (totalSlides - 1));
                setActive(idx);
              },
              // Recompute on resize so the gap never comes back
              invalidateOnRefresh: true,
            },
          });
        },
  
        // Mobile/tablet: no pinning, let slides stack
        "(max-width: 991px)": () => {
          gsap.set(trackRef.current, { clearProps: "transform" });
          ScrollTrigger.getAll().forEach((t) => t.kill());
        },
      });
    }, wrapperRef);
  
    return () => {
      ctx.revert();
      ScrollTrigger.clearMatchMedia && ScrollTrigger.clearMatchMedia();
    };
  }, []);
  

  // Scroll to a particular slide (works with keyboard + click)
  const scrollToSection = useCallback((index) => {
    const el = sectionRefs.current[index];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActive(index);
  }, []);

  // Keyboard support for nav dots
  const onDotKeyDown = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToSection(idx);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToSection(Math.min(sectionRefs.current.length - 1, idx + 1));
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToSection(Math.max(0, idx - 1));
    }
  };

  return (
    <section className="scroll-section-outer" ref={wrapperRef} aria-label="Recent work case studies">
      {/* Dot navigation */}
      {/* <div className="nav-dots" role="tablist" aria-label="Case study slides">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            className={`nav-dot${active === i ? " is-active" : ""}`}
            onClick={() => scrollToSection(i)}
            onKeyDown={(e) => onDotKeyDown(e, i)}
            role="tab"
            aria-selected={active === i}
            aria-controls={`case-slide-${i + 1}`}
            tabIndex={0}
          />
        ))}
      </div> */}

      <div className="scroll-track-viewport">
        <div ref={trackRef} className="scroll-section-inner">
          {caseSlides.map((slide, index) => (
            <section
              key={slide.id}
              className="scroll-section"
              id={`case-slide-${index + 1}`}
              data-slide={index + 1}
              ref={(el) => (sectionRefs.current[index] = el)}
              aria-roledescription="slide"
              aria-label={`${slide.subtitle} case study, slide ${index + 1} of ${caseSlides.length}`}
            >
              <div className="recent-section flex h-full items-center px-4 py-10 sm:px-6 lg:px-12">
                <div className="grid h-full w-full gap-6 lg:grid-cols-[0.35fr,1.2fr,1fr] lg:items-center">
                  <div className={`rounded-3xl px-4 py-6 text-xs font-semibold uppercase tracking-[0.4em] ${slide.headingClass}`}>
                    {slide.heading}
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      width={820}
                      height={520}
                      className="w-full max-w-3xl rounded-[32px] border border-white/10 object-cover shadow-2xl"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 52vw"
                    />
                  </div>
                  <div className={`flex flex-col gap-4 rounded-[32px] border border-white/20 p-6 shadow-2xl ${slide.panelClass}`}>
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                      <Image src={slide.icon} alt={slide.label} width={48} height={48} loading="lazy" />
                    </span>
                    <h2 className="text-3xl font-semibold">{slide.label}</h2>
                    <div className="flex flex-wrap gap-3">
                      {slide.tags.map((tag) => (
                        <span key={`${slide.id}-${tag}`} className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${slide.tagClass}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-xl font-semibold">{slide.subtitle}</h4>
                    <p className="text-sm leading-relaxed opacity-90">{slide.description}</p>
                    <Link
                      href={slide.cta.href}
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white hover:bg-white/10"
                    >
                      {slide.cta.label}
                      <Image src="/images/material-symbols_arrow-right-alt.png" alt="" width={20} height={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Visually hidden live region to announce slide changes for screen readers */}
      <span className="visually-hidden" role="status" aria-live="polite">
        Slide {active + 1} of {caseSlides.length}
      </span>
    </section>
  );
}
