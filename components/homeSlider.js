import Head from "next/head";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Header from "./header";
import { useEffect, useState } from "react";

export default function HomeSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="new-hm">
        <Header />
        <Carousel
          className="home-slider"
          activeIndex={index}
          onSelect={setIndex}
          indicators={false}
          controls={false}
          aria-label="Home Slider Carousel"
        >
          {/* ✅ First Slide - Digital Transformation */}
          <Carousel.Item>
            <section id="hm-pgone">
              <div className="container hm-sl-container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="titles">
                      <div className="titles-inner">
                        <Image
                          src="/images/digital.png"
                          width={298}
                          height={38}
                          alt="Digital Transformation Solutions Chennai - Trimsel"
                          className="one"
                          priority
                        />
                        <h1 className="headings-title">
                          Transform Your Business with <br /> <span style={{ color: "#01aaec" }}>End-to-End Digital Solutions</span>
                        </h1>
                        <h2 style={{ display: "none" }}>
                          Digital transformation company in Chennai, custom application development, custom software development services, cloud consulting services
                        </h2>
                        <p className="abt-hero-para">
                          Trimsel is a <strong>leading digital transformation company</strong> specializing in <strong>custom software development</strong>, <strong>mobile app solutions</strong>, and <strong>cloud computing</strong> to drive business success.
                        </p>
                        <Link href="/contact-us" passHref>
                          <button className="btn btn-primary get-btn">
                            Get Your Free Consultation <img src="/images/material-symbols_arrow-right-alt.png" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Image
                      src="/images/digital-homepageone.png"
                      className="home--frst"
                      alt="Custom Software and Digital Transformation - Trimsel"
                      width={600}
                      height={626}
                      priority
                    />
                  </div>
                </div>
              </div>
            </section>
          </Carousel.Item>

          {/* ✅ Second Slide - Mobile App Development */}
          <Carousel.Item>
            <section id="hm-pgtwo">
              <div className="container hm-sl-container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="titles">
                      <Image
                        src="/images/digital.png"
                        width={298}
                        height={38}
                        alt="Mobile App Development Experts in Chennai"
                        className="one"
                        loading="lazy"
                      />
                      <h1 className="headings-title">
                        Build Scalable <span style={{ color: "#01aaec" }}>Mobile Apps</span> <br /> for Your Business
                      </h1>
                      <h2 style={{ display: "none" }}>
                        Mobile app development company in Chennai, custom mobile applications, iOS development, Android app experts
                      </h2>
                      <p className="abt-hero-para">
                        Get <strong>custom iOS, Android, and cross-platform apps</strong> built by top <strong>mobile app developers in Chennai</strong>. Leverage the latest technologies for a seamless user experience.
                      </p>
                      <Link href="/mobile-app-development-chennai" passHref>
                        <button className="btn btn-primary get-btn">
                          Start Your App Project <img src="/images/material-symbols_arrow-right-alt.png" />
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Image
                      src="/images/cloudhm.png"
                      className="home--scnd"
                      alt="Mobile App Development Company in Chennai - Trimsel"
                      width={793}
                      height={681}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </section>
          </Carousel.Item>

          {/* ✅ Third Slide - Cloud Consulting Services */}
          <Carousel.Item>
            <section id="hm-pgthree">
              <div className="container hm-sl-container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="titles">
                      <Image
                        src="/images/digital.png"
                        width={298}
                        height={38}
                        alt="Digital Marketing Company in Chennai"
                        className="one"
                        loading="lazy"
                      />
                      <h1 className="headings-title">
              Drive Leads with Expert <br />
              <span style={{ color: "#01aaec" }}>Digital Marketing Services</span>
            </h1>
            <h2 style={{ display: "none" }}>
              Digital Marketing Company in Chennai, SEO Services, Google Ads, Social Media Marketing, Instagram & Facebook Ads
            </h2>
            <p className="abt-hero-para">
              Boost your online presence with expert <strong>SEO services</strong>, high-converting <strong>Google Ads</strong>, and result-driven <strong>Instagram & Facebook Marketing</strong>. Partner with the top <strong>digital marketing company in Chennai</strong> to scale your business.
            </p>
                      <Link href="//digital-marketing-company-chennai" passHref>
                        <button className="btn btn-primary get-btn">
                        Explore Marketing Solutions <img src="/images/material-symbols_arrow-right-alt.png" />
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Image
                      src="/images/home-slider-two.png"
                      className="home--third"
                      alt="SEO Company in Chennai - Trimsel"
                      width={666}
                      height={681}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </section>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}