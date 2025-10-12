import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Stack from "react-bootstrap/Stack";
import Link from "next/link";
import Image from "next/image";

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

      <div className="scroll-track-viewport" /* isolates overflow for mobile */>
        <div ref={trackRef} className="scroll-section-inner">
          {/* Slide 1 */}
          <section
            className="scroll-section"
            id="case-slide-1"
            data-slide="1"
            ref={(el) => (sectionRefs.current[0] = el)}
            aria-roledescription="slide"
            aria-label="Ezyhelpers case study, slide 1 of 4"
          >
            <div className="recent-section">
              <div className="row rcnt-row">
                <div className="col-lg-1 col-md-2 heading-content py-3">
                  <h3 className="h6 m-0">OUR RECENT WORKS</h3>
                </div>
                <div className="col-lg-6 col-md-5 image-content">
                  <Image
                    src="/images/12346.webp"
                    alt="Ezyhelpers app preview"
                    className="overlap-image"
                    width={820}
                    height={520}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 52vw"
                  />
                </div>
                <div className="col-lg-5 col-md-5 contents py-3">
                  <div className="container">
                    <span className="case-image">
                      <Image src="/images/01.webp" alt="Ezyhelpers" width={64} height={64} loading="lazy" />
                    </span>
                    <h2 className="case-title mb-3">Ezyhelpers</h2>
                    <Stack direction="horizontal" gap={3}>
                      <div className="badges">iOS & Android</div>
                      <div className="badges">Web</div>
                    </Stack>
                    <h4 className="title-texts py-3">Home Services & House Cleaning</h4>
                    <p className="texts-para">
                      On-demand marketplace connecting users with vetted professionals. Built with a scalable backend and seamless booking flows.
                    </p>
                    <Link href="/portfolio/ezyhelpers-case-study" passHref>
                      <button className="btn case-btn mb-3" aria-label="View Ezyhelpers Case Study">
                        View Case Study <Image src="/images/material-symbols_arrow-right-alt.png" alt="" width={24} height={24} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 2 */}
          <section
            className="scroll-section"
            id="case-slide-2"
            data-slide="2"
            ref={(el) => (sectionRefs.current[1] = el)}
            aria-roledescription="slide"
            aria-label="Xaber case study, slide 2 of 4"
          >
            <div className="recent-section">
              <div className="row rcnt-row">
                <div className="col-lg-1 col-md-2 heading-content-1 py-3">
                  <h3 className="h6 m-0">OUR RECENT WORKS</h3>
                </div>
                <div className="col-lg-6 col-md-5 images-content">
                  <Image
                    src="/images/top-mobile-a.webp"
                    className="overlaps-image"
                    alt="Xaber app preview"
                    width={820}
                    height={520}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 52vw"
                  />
                </div>
                <div className="col-lg-5 col-md-5 contents1 py-3">
                  <div className="container pt-4">
                    <span className="cases-image">
                      <Image src="/images/02..png" alt="Xaber" width={64} height={64} loading="lazy" />
                    </span>
                    <h2 className="case-title mb-3">Xaber</h2>
                    <Stack direction="horizontal" gap={3}>
                      <div className="badges1">iOS & Android</div>
                      <div className="badges1">Web</div>
                    </Stack>
                    <h4 className="title-texts py-2">Taxi business powered by our Uber-style platform</h4>
                    <p className="texts-para">
                      Multi-tenant ride platform with real-time tracking, in-app payments, and operational analytics.
                    </p>
                    <Link href="/portfolio/xaber-case-study" passHref>
                      <button className="btn cases-btn mb-3 mt-3">
                        View Case Study <Image src="/images/material-symbols_arrow-right-alt.png" alt="" width={24} height={24} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 3 */}
          <section
            className="scroll-section"
            id="case-slide-3"
            data-slide="3"
            ref={(el) => (sectionRefs.current[2] = el)}
            aria-roledescription="slide"
            aria-label="KarIOT case study, slide 3 of 4"
          >
            <div className="recent-section">
              <div className="row rcnt-row">
                <div className="col-lg-1 col-md-2 heading-content-3 py-3">
                  <h3 className="h6 m-0">OUR RECENT WORKS</h3>
                </div>
                <div className="col-lg-6 col-md-5 images-kariot-content">
                  <Image
                    src="/images/kariotlap.webp"
                    className="overlaps-kariot-image"
                    alt="KarIOT dashboard preview"
                    width={820}
                    height={520}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 52vw"
                  />
                </div>
                <div className="col-lg-5 col-md-5 contents3 py-3">
                  <span className="cases-image">
                    <Image src="/images/03..png" alt="KarIOT" width={64} height={64} loading="lazy" />
                  </span>
                  <h2 className="case-title mb-3">KarIOT</h2>
                  <Stack direction="horizontal" gap={3}>
                    <div className="badges1">iOS & Android</div>
                    <div className="badges1">Web</div>
                  </Stack>
                  <h4 className="title-texts py-2">IoT-powered smart water management</h4>
                  <p className="texts-para">
                    Real-time monitoring of water quality and quantity for residential, commercial, and industrial use cases.
                  </p>
                  <Link href="/portfolio/kariot-case-study" passHref>
                    <button className="btn case-btn mb-3">
                      View Case Study <Image src="/images/material-symbols_arrow-right-alt.png" alt="" width={24} height={24} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 4 */}
          <section
            className="scroll-section"
            id="case-slide-4"
            data-slide="4"
            ref={(el) => (sectionRefs.current[3] = el)}
            aria-roledescription="slide"
            aria-label="Mocial case study, slide 4 of 4"
          >
            <div className="recent-section">
              <div className="row rcnt-row">
                <div className="col-lg-1 col-md-2 heading-content-4 py-3">
                  <h3 className="h6 m-0">OUR RECENT WORKS</h3>
                </div>
                <div className="col-lg-6 col-md-5 images-mocial-content">
                  <Image
                    src="/images/mocial-phone.webp"
                    className="overlaps-mocial-image"
                    alt="Mocial social platform preview"
                    width={820}
                    height={520}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 52vw"
                  />
                </div>
                <div className="col-lg-5 col-md-5 contents4 py-3">
                  <span className="cases-image">
                    <Image src="/images/04..png" alt="Mocial" width={64} height={64} loading="lazy" />
                  </span>
                  <h2 className="case-title mb-3">Mocial</h2>
                  <Stack direction="horizontal" gap={3}>
                    <div className="badges1">iOS & Android</div>
                    <div className="badges1">Web</div>
                  </Stack>
                  <h4 className="title-texts py-2">All-in-one social platform</h4>
                  <p className="texts-para">
                    A community platform to grow brand reach, increase engagement, and maintain a healthier work-life balance.
                  </p>
                  <Link href="/portfolio/mocial-case-study" passHref>
                    <button className="btn case-btn mb-3">
                      View Case Study <Image src="/images/material-symbols_arrow-right-alt.png" alt="" width={24} height={24} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Visually hidden live region to announce slide changes for screen readers */}
      <span className="visually-hidden" role="status" aria-live="polite">
        Slide {active + 1} of 4
      </span>
    </section>
  );
}
