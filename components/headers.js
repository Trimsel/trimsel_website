import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import Image from "next/image";
import { HiArrowNarrowRight } from "@react-icons/all-files/hi/HiArrowNarrowRight";

const Headers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56) {
        navRef.current.classList.add("navbar-scrolled");
      } else {
        navRef.current.classList.remove("navbar-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="menu_wrapper">
        <nav className="navbar navbar-expand-lg fixed-top" ref={navRef}>
          <div className="container">
            <Link className="navbar-brand" href="/">
              <img src="/trimsel-logo-svg" className="mbl-logo" />
              <img
                src={
                  scrollPosition > 50
                    ? "/trimsel-logo.svg"
                    : "/trimsel-logo-white.svg"
                }
                className="dsktp-logo"
                alt="Logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              data-bs-toggle="offcanvas"
              data-bs-target="#menu"
              aria-controls="menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FaBars />
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="menu"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <img
                  src="/trimsel-logo.svg"
                  alt="Trimsel Logo"
                  style={{ width: "170px", height: "auto" }}
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item px-3">
                    <Link
                      href="/"
                      className={`${
                        scrollPosition > 50 ? "blackLink" : "whiteLink"
                      } nav-link`}
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link
                      href="/aboutus"
                      className={`${
                        scrollPosition > 50 ? "blackLink" : "whiteLink"
                      } nav-link`}
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown-mega position-static px-3">
                    <a
                      href="#"
                      className={`${
                        scrollPosition > 50 ? "blackLink" : "whiteLink"
                      } nav-link dropdown-toggle`}
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                      data-hover="dropdown"
                    >
                      SERVICES
                    </a>
                    <div
                      className="dropdown-menu shadow-md"
                      data-hover="dropdown"
                    >
                      <div className="mega-content">
                        <div className="container-fluid inner-container">
                          <div className="row  rounded-lg pt-2 mega-row">
                            <div className="col-lg-6 col-md-6 mt-2 first-column">
                              <Link
                                href="/mobile-app-development-chennai"
                                passHref
                                className="dropdown-links"
                              >
                                <div className="card menu-card h-100">
                                  <div className="row">
                                    <div className="col-lg-1 col-md-1">
                                      <Image
                                        src="/images/menu-mobile-icon.png"
                                        width={40}
                                        height={40}
                                        alt="Mobile App Icon"
                                      />
                                    </div>
                                    <div className="col-lg-11 col-md-11 card-ned-col">
                                      <h2 className="menu-dropdown">
                                        Mobile App Development{" "}
                                        <HiArrowNarrowRight className="svg-menu-icon" />
                                      </h2>

                                      <p className="dropdown-para">
                                      Develop high-performance iOS & Android apps with a seamless user experience and scalable architecture.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-2">
                              <Link
                                href="/devops-consulting-services"
                                passHref
                                className="dropdown-links"
                              >
                                <div className="card menu-second-card h-100">
                                  <div className="row">
                                    <div className="col-lg-1 col-md-1">
                                      <Image
                                        src="/images/menu-devops-icon.png"
                                        width={40}
                                        height={40}
                                        alt="Mobile App Icon"
                                      />
                                    </div>
                                    <div className="col-lg-11 col-md-11 card-ned-col">
                                      <h2 className="menu-dropdown">
                                        DevOps Consulting{" "}
                                        <HiArrowNarrowRight className="svg-second" />
                                      </h2>

                                      <p className="dropdown-para">
                                      Automate deployments, enhance security, and streamline development with expert DevOps solutions.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-2">
                              <Link
                                href="/web-development-company-chennai"
                                passHref
                                className="dropdown-links"
                              >
                                <div className="card menu-third-card h-100">
                                  <div className="row">
                                    <div className="col-lg-1 col-md-1">
                                      <Image
                                        src="/images/menu-web-icon.png"
                                        width={40}
                                        height={40}
                                        alt="Web Development Icon"
                                      />
                                    </div>
                                    <div className="col-lg-11 col-md-11 card-ned-col">
                                      <h2 className="menu-dropdown">
                                        Web Development{" "}
                                        <HiArrowNarrowRight className="svg-third" />
                                      </h2>

                                      <p className="dropdown-para">
                                      Create responsive, SEO-optimized, and scalable web applications tailored to your business needs.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-2">
                              <Link
                                href="/ai-development-company"
                                passHref
                                className="dropdown-links"
                              >
                                <div className="card menu-fourth-card h-100">
                                  <div className="row">
                                    <div className="col-lg-1 col-md-1">
                                      <Image
                                        src="/images/menu-qa-icon.png"
                                        width={40}
                                        height={40}
                                        alt="AI Develoment company Icon"
                                      />
                                    </div>
                                    <div className="col-lg-11 col-md-11 card-ned-col">
                                      <h2 className="menu-dropdown">
                                        AI & ML Development{" "}
                                        <HiArrowNarrowRight className="svg-four" />
                                      </h2>

                                      <p className="dropdown-para">
                                      Build custom AI agents & machine-learning models to automate tasks, predict outcomes, and deliver smarter experiences.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-2">
                              <Link
                                href="/digital-marketing-company-chennai"
                                passHref
                                className="dropdown-links"
                              >
                                <div className="card menu-fifth-card h-100">
                                  <div className="row">
                                    <div className="col-lg-1 col-md-1">
                                      <Image
                                        src="/images/menu-dig-icon.png"
                                        width={40}
                                        height={40}
                                        alt="Digital Marketing Icon"
                                      />
                                    </div>
                                    <div className="col-lg-11 col-md-11 card-ned-col">
                                      <h2 className="menu-dropdown">
                                        Digital Marketing{" "}
                                        <HiArrowNarrowRight className="svg-five" />
                                      </h2>

                                      <p className="dropdown-para">
                                      Boost online visibility, drive traffic, and generate leads with strategic SEO, PPC, and content marketing.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            {/* <div className="col-lg-6 col-md-6 mt-2">
                              <Link
                                href="/blockchain-development"
                                passHref
                                className="dropdown-links"
                              >
                                <div className="card menu-sixth-card h-100">
                                  <div className="row">
                                    <div className="col-lg-1 col-md-1">
                                      <Image
                                        src="/images/menu-blockchain-icon.png"
                                        width={40}
                                        height={40}
                                        alt="Blockchain Development Icon"
                                      />
                                    </div>
                                    <div className="col-lg-11 col-md-11 card-ned-col">
                                      <h2 className="menu-dropdown">
                                        Blockchain Development{" "}
                                        <HiArrowNarrowRight className="svg-six" />
                                      </h2>

                                      <p className="dropdown-para">
                                        Build cross-platform apps for both IOS
                                        and Android
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div> */}
                            <div className="col-lg-6 col-md-6 mt-2">
                              <Link
                                href="/cloud-consulting-services" passHref
                                className="dropdown-links"
                              >
                                <div className="card menu-seventh-card h-100">
                                  <div className="row">
                                    <div className="col-lg-1 col-md-1">
                                      <Image
                                        src="/images/menu-cloud-icon.png"
                                        width={40}
                                        height={40}
                                        alt="Cloud Consulting Icon"
                                      />
                                    </div>
                                    <div className="col-lg-11 col-md-11 card-ned-col">
                                      <h2 className="menu-dropdown">
                                        Cloud Consulting{" "}
                                        <HiArrowNarrowRight className="svg-seven" />
                                      </h2>

                                      <p className="dropdown-para">
                                      Leverage cloud technologies with expert AWS, GCP, and Azure consulting for cost-efficient and scalable cloud solutions.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item ps-3">
                    <Link
                      href="/portfolio"
                      className={`${
                        scrollPosition > 50 ? "blackLink" : "whiteLink"
                      } nav-link`}
                    >
                      OUR WORK
                    </Link>
                  </li>
                  <li className="nav-item ps-3">
                    <Link
                      href="/blog"
                      className={`${
                        scrollPosition > 50 ? "blackLink" : "whiteLink"
                      } nav-link`}
                    >
                      BLOG
                    </Link>
                  </li>
                  <li className="nav-item ps-3">
                    <Link href="/contact-us" passHref>
                      <button
                        className="btn btn-md btn-primary"
                        href="/contact-us"
                      >
                        CONTACT US{" "}
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Headers;
