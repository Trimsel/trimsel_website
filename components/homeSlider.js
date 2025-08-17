import Link from "next/link";
import Image from "next/image";
import Header from "./header";

export default function HomeSlider() {
  return (
    <section id="new-hm" aria-label="Trimsel hero">
      <Header />
      <section id="hm-hero">
        <div className="container hm-sl-container">
          <div className="row align-items-center">
            {/* Left: Copy + CTAs */}
            <div className="col-lg-6 col-md-6">
              <div className="titles">
                <div className="titles-inner">
                  {/* Decorative tag – hidden from SR */}
                  <Image
                    src="/images/digital.png"
                    width={298}
                    height={38}
                    alt=""
                    className="one"
                    priority
                    aria-hidden="true"
                  />

                  <h1 className="headings-title">
                    Vision to Reality<br />
                    Engineering the Future with AI-Driven Innovation
                  </h1>

                  <p className="abt-hero-para">
                    We blend <strong>AI</strong> with <strong>mobile</strong>, <strong>web</strong>, <strong>cloud</strong>, and <strong>DevOps</strong> to help businesses launch faster, smarter, and stronger.
                  </p>

                  <div className="d-flex gap-3">
                    <Link href="/contact-us" className="btn btn-primary get-btn" aria-label="Book a free strategy call">
                      Book a free strategy call{" "}
                      <Image src="/images/material-symbols_arrow-right-alt.png" width={24} height={24} alt="" />
                    </Link>
                    <Link href="/portfolio" className="btn btn-outline-secondary get-btn" aria-label="See case studies">
                      See case studies{" "}
                      <Image src="/images/material-symbols_arrow-right-alt.png" width={24} height={24} alt="" />
                    </Link>
                  </div>

                  {/* Optional mini social proof */}
                  <ul className="list-inline mt-3 mb-0">
                    <li className="list-inline-item me-3">AI + Product Engineering</li>
                    <li className="list-inline-item me-3">Cloud: AWS · Azure · GCP</li>
                    <li className="list-inline-item">From MVP to Enterprise</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Hero visual */}
            <div className="col-lg-6 col-md-6 text-center">
              <Image
                src="/images/digital-homepageone.png"
                className="home--frst"
                alt="Teams using AI to build and launch modern digital products"
                width={600}
                height={626}
                priority
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}