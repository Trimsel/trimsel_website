import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Stack from "react-bootstrap/Stack";
import Link from "next/link";

export default function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "power2.in",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.5,
          pin: true,
          
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  const sectionRefs = useRef([]);

  // Function to scroll to a particular section
  const scrollToSection = (index) => {
    sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    console.log(sectionRefs.current[index]);
  };

  return (
    <>
      <section className="scroll-section-outer">
      {/*<div className="nav-dots">
              <div
                className="nav-dot"
                onClick={() => scrollToSection(0)}
                data-slide="1"
              ></div>
              <div
                className="nav-dot"
                onClick={() => scrollToSection(1)}
                data-slide="2"
              ></div>
              <div
                className="nav-dot"
                onClick={() => scrollToSection(2)}
                data-slide="3"
              ></div>
              <div
                className="nav-dot"
                onClick={() => scrollToSection(3)}
                data-slide="4"
              ></div>
  </div>*/}
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            
            <div
              className="scroll-section"
              data-slide="1"
              ref={(el) => (sectionRefs.current[0] = el)}
            >
              <div className="recent-section">
                <div className="row rcnt-row">
                  <div className="col-lg-1 col-md-2 heading-content py-3">
                    <h5>OUR RECENT WORKS</h5>
                  </div>
                  <div className="col-lg-6 col-md-5 image-content">
                    <img src="/images/12346.png" className="overlap-image" />
                  </div>
                  <div className="col-lg-5 col-md-5 contents py-3">
                    <div className="container">
                      <span className="case-image">
                        <img src="/images/01.png" />
                      </span>
                      <h2 className="case-title mb-3">Ezyhelpers</h2>
                      <Stack direction="horizontal" gap={3}>
                        <div className="badges">IOS & ANDROID</div>
                        <div className="badges">WEB</div>
                      </Stack>
                      <h4 className="title-texts py-3">
                        Home Service & House Cleaning Work App
                      </h4>
                      <p className="texts-para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris non augue dui. Donec venenatis eu lorem mollis
                        convallis. Aliquam a accumsan justo, vel mattis augue.
                      </p>
                      <Link href="/portfolio/ezyhelpers-case-study" passHref>
                      <button className="btn case-btn mb-3">
                        View Case Study{" "}
                        <img src="/images/material-symbols_arrow-right-alt.png" />
                      </button>
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="scroll-section"
              data-slide="2"
              ref={(el) => (sectionRefs.current[1] = el)}
            >
              <div className="recent-section">
                <div className="row rcnt-row">
                  <div className="col-lg-1 col-md-2 heading-content-1 py-3">
                    <h5>OUR RECENT WORKS</h5>
                  </div>
                  <div className="col-lg-6 col-md-5 images-content">
                    <img
                      src="/images/top-mobile-a.png"
                      className="overlaps-image"
                    />
                  </div>
                  <div className="col-lg-5 col-md-5 contents1 py-3">
                    <div className="container pt-4">
                      <span className="cases-image">
                        <img src="/images/02..png" />
                      </span>
                      <h2 className="case-title mb-3">Xaber</h2>
                      <Stack direction="horizontal" gap={3}>
                        <div className="badges1">IOS & ANDROID</div>
                        <div className="badges1">WEB</div>
                      </Stack>
                      <h4 className="title-texts py-2">
                        Taxi Business With Our Uber Clone Software
                      </h4>
                      <p className="texts-para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris non augue dui. Donec venenatis eu lorem mollis
                        convallis. Aliquam a accumsan justo, vel mattis augue.
                      </p>
                      <Link href="/portfolio/xaber-case-study" passHref>
                      <button className="btn cases-btn mb-3 mt-3">
                        View Case Study{" "}
                        <img src="/images/material-symbols_arrow-right-alt.png" />
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="scroll-section"
              data-slide="3"
              ref={(el) => (sectionRefs.current[2] = el)}
            >
              <div className="recent-section">
                <div className="row rcnt-row">
                  <div className="col-lg-1 col-md-2 heading-content-3 py-3">
                    <h5>OUR RECENT WORKS</h5>
                  </div>
                  <div className="col-lg-6 col-md-5 images-kariot-content">
                    <img
                      src="/images/kariotlap.png"
                      className="overlaps-kariot-image"
                    />
                  </div>
                  <div className="col-lg-5 col-md-5 contents3 py-3">
                    <span className="cases-image">
                      <img src="/images/03..png" />
                    </span>
                    <h2 className="case-title mb-3">KarIOT</h2>
                    <Stack direction="horizontal" gap={3}>
                      <div className="badges1">IOS & ANDROID</div>
                      <div className="badges1">WEB</div>
                    </Stack>
                    <h4 className="title-texts py-2">
                      We aim to build a better world where clean water
                    </h4>
                    <p className="texts-para">
                      KarIoT is a IoT enabled Smart Water Management System
                      which monitors the quality and quantity of water in real
                      time for Residential, Commercial, Industrial Sectors
                    </p>
                    <Link href="/portfolio/kariot-case-study" passHref>
                    <button className="btn case-btn mb-3">
                      View Case Study{" "}
                      <img src="/images/material-symbols_arrow-right-alt.png" />
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="scroll-section"
              data-slide="4"
              ref={(el) => (sectionRefs.current[3] = el)}
            >
              <div className="recent-section">
                <div className="row rcnt-row">
                  <div className="col-lg-1 col-md-2 heading-content-4 py-3">
                    <h5>OUR RECENT WORKS</h5>
                  </div>
                  <div className="col-lg-6 col-md-5 images-mocial-content">
                    <img
                      src="/images/mocial-phone.png"
                      className="overlaps-mocial-image"
                    />
                  </div>
                  <div className="col-lg-5 col-md-5 contents4 py-3">
                    <span className="cases-image">
                      <img src="/images/04..png" />
                    </span>
                    <h2 className="case-title mb-3">Mocial</h2>
                    <Stack direction="horizontal" gap={3}>
                      <div className="badges1">IOS & ANDROID</div>
                      <div className="badges1">WEB</div>
                    </Stack>
                    <h4 className="title-texts py-2">
                      An all-in-one platform for social media.
                    </h4>
                    <p className="texts-para">
                      Mocial serves as a social networking tool with
                      unprecedented opportunities such as helping you maintain a
                      perfect work-life balance, maximizing your brand reach,
                      increasing engagement.
                    </p>
                    <Link href="/portfolio/mocial-case-study" passHref>
                    <button className="btn case-btn mb-3">
                      View Case Study{" "}
                      <img src="/images/material-symbols_arrow-right-alt.png" />
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
