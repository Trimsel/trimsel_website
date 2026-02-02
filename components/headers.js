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
              <Image
                src="/trimsel-logo.svg"
                className="mbl-logo"
                alt="Trimsel logo"
                width={150}
                height={40}
                priority
              />
              <Image
                src={
                  scrollPosition > 50
                    ? "/trimsel-logo.svg"
                    : "/trimsel-logo-white.svg"
                }
                className="dsktp-logo"
                alt="Trimsel logo"
                width={150}
                height={40}
                priority
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
                <Image
                  src="/trimsel-logo.svg"
                  alt="Trimsel logo"
                  width={170}
                  height={48}
                  priority
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
                      } nav-link font-manrope`}
                    >
                      COMPANY
                    </Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link
                      href="/aboutus"
                      className={`${
                        scrollPosition > 50 ? "blackLink" : "whiteLink"
                      } nav-link font-manrope`}
                    >
                      SERVICE
                    </Link>
                  </li>
                  
                  <li className="nav-item ps-3">
                    <Link
                      href="/portfolio"
                      className={`${
                        scrollPosition > 50 ? "blackLink" : "whiteLink"
                      } nav-link font-manrope font-bold`}
                    >
                      PORTFOLIO
                    </Link>
                  </li>
                  <li className="nav-item ps-3">
                    <Link
                      href="/blog"
                      className={`${
                        scrollPosition > 50 ? "blackLink" : "whiteLink"
                      } nav-link font-manrope`}
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
