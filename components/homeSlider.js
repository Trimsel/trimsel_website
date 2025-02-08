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
    }, 5000);
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
        >
          <Carousel.Item>
          <section id="hm-pgone">
              <div className="container hm-sl-container">
                <div id="app">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="titles">
                        <div className="titles-inner">
                          <div className="cafes">
                            <div className="cafes-inner">
                              <Image
                                src="/images/digital.png"
                                width={298}
                                height={38}
                                alt="About Minitzon Company"
                                className="one"
                                priority
                              />
                            </div>
                          </div>
                          <div className="cafes">
                            <div className="cafes-inner">
                              <h1 className="headings-title">
                                Grow Your Business With Minitzon - Your No.1
                                Expert Digital Partner{" "}
                              </h1>
                            </div>
                          </div>
                          <div className="mozarts">
                            <div className="mozarts-inner">
                              <p className="abt-hero-para">
                                Minitzon Is A{" "}
                                <strong>Digital Product Development</strong>{" "}
                                Company Based In India. We Use The{" "}
                                <strong>
                                  {" "}
                                  Power Of Digital Engineering And Empower
                                  Businesses{" "}
                                </strong>
                                To Execute Their{" "}
                                <strong> Ideas With Innovation.</strong>
                              </p>
                            </div>
                          </div>
                          <div className="mozarts">
                            <div className="mozarts-inner">
                              <Link href="/contact-us" passHref>
                                <button className="btn btn-primary get-btn">
                                  Get Started Today{" "}
                                  <img src="/images/material-symbols_arrow-right-alt.png" />
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="imgrs">
                        <Image
                          src="/images/digital-homepageone.png"
                          className="home--frst"
                          alt="Homepage-First-Slider-Banner-Image"
                          width={600}
                          height={626}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section id="hm-pgtwo">
              <div className="container hm-sl-container">
                <div id="app">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="titles">
                        <div className="titles-inner">
                          <div className="cafes">
                            <div className="cafes-inner">
                              <Image
                                src="/images/digital.png"
                                width={298}
                                height={38}
                                alt="About Minitzon Company"
                                className="one"
                              />
                            </div>
                          </div>
                          <div className="cafes">
                            <div className="cafes-inner">
                              <h1 className="headings-title">
                                Grow Your Business With Minitzon - Your No.1
                                Expert Digital Partner{" "}
                              </h1>
                            </div>
                          </div>
                          <div className="mozarts">
                            <div className="mozarts-inner">
                              <p className="abt-hero-para">
                                Minitzon Is A{" "}
                                <strong>Digital Product Development</strong>{" "}
                                Company Based In India. We Use The{" "}
                                <strong>
                                  {" "}
                                  Power Of Digital Engineering And Empower
                                  Businesses{" "}
                                </strong>
                                To Execute Their{" "}
                                <strong> Ideas With Innovation.</strong>
                              </p>
                            </div>
                          </div>
                          <div className="mozarts">
                            <div className="mozarts-inner">
                              <Link href="/contact-us" passHref>
                                <button className="btn btn-primary get-btn">
                                  Get Started Today{" "}
                                  <img src="/images/material-symbols_arrow-right-alt.png" />
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="imgrs">
                        <Image
                          src="/images/home-slider-two.png"
                          className="home--scnd"
                          alt="Homepage-Second-Slider-Banner-Image"
                          width={793}
                          height={681}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section id="hm-pgthree">
              <div className="container hm-sl-container">
                <div id="app">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="titles">
                        <div className="titles-inner">
                          <div className="cafes">
                            <div className="cafes-inner">
                              <Image
                                src="/images/digital.png"
                                width={298}
                                height={38}
                                alt="About Minitzon Company"
                                className="one"
                              />
                            </div>
                          </div>
                          <div className="cafes">
                            <div className="cafes-inner">
                              <h1 className="headings-title">
                                Grow Your Business With Minitzon - Your No.1
                                Expert Digital Partner{" "}
                              </h1>
                            </div>
                          </div>
                          <div className="mozarts">
                            <div className="mozarts-inner">
                              <p className="abt-hero-para">
                                Minitzon Is A{" "}
                                <strong>Digital Product Development</strong>{" "}
                                Company Based In India. We Use The{" "}
                                <strong>
                                  {" "}
                                  Power Of Digital Engineering And Empower
                                  Businesses{" "}
                                </strong>
                                To Execute Their{" "}
                                <strong> Ideas With Innovation.</strong>
                              </p>
                            </div>
                          </div>
                          <div className="mozarts">
                            <div className="mozarts-inner">
                              <Link href="/contact-us" passHref>
                                <button className="btn btn-primary get-btn">
                                  Get Started Today{" "}
                                  <img src="/images/material-symbols_arrow-right-alt.png" />
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="imgrs">
                        <Image
                          src="/images/cloudhm.png"
                          className="home--third"
                          alt="Homepage-Third-Slider-Banner-Image"
                          width={666}
                          height={681}
                        />
                      </div>
                    </div>
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
