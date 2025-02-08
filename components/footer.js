import Link from "next/link";

function Footer() {
  return (
    <>
      <footer id="new-footer">
        <section className="container pt-5">
          <div className="row newd-row py-3">
            <div className="col-lg-6 col-md-6 pb-3">
              <h5 className="newd-title text-white">CONTACT US</h5>
              <span className="mail-link">
                <a href="mailto:contact@trimsel.com">contact@trimsel.com</a>
              </span>{" "}
              |{" "}
              <span className="mail-link">
                <a href="tel: +917200841581">(+91)-720-084-1581</a>
              </span>
            </div>
            <div className="col-lg-6 col-md-6 pb-0">
              <h5 className="contact-addrs text-white">Visit Us:</h5>
              <p className="contact-para">
                21B 5th Cross St, South Phase Thiru VI KA Industrial Estate,
                Guindy, Chennai, Tamilnadu 600032, India
              </p>
            </div>
          </div>
          <div className="row pt-5 no-gutters new-row">
            <div className="col-lg-3 col-md-5 pb-3">
              <img
                src="/minitzon-logo-white.png"
                className="white-logo"
                width="253px"
                height="88px"
              />
              <p className="footer-para py-3">
                At Minitzon, we focus on providing digital solutions built with
                cutting-edge technology, so our clients are always ahead of the
                curve.
              </p>
              <h4 className="contact-addrs">Follow Us:</h4>
              <Link href="https://www.facebook.com/minitzon.technologies" target="_blank">
                <img className="social-icon" src="/facebook.png" width="50" />
              </Link>{" "}
              <Link href="https://www.instagram.com/minitzon/" target="_blank">
                <img className="social-icon" src="/insta.png" width="50" />
              </Link>{" "}
              <Link href="#" target="_blank">
                <img className="social-icon" src="/linkedin.png" width="50" />
              </Link>{" "}
              <Link href="https://in.pinterest.com/minitzon/" target="_blank">
                <img className="social-icon" src="/pinterest.png" width="50" />
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 footer-sides  mb-2">
              <h5 className="footer-heading">SERVICES</h5>
              <div className="footer-menu">
                <p className="pt-3 footer-p-link">
                  <a href="/mobile-app" className="footer-link">
                    Mobile App Development
                  </a>
                </p>
                <p className="footer-p-link">
                  <Link href="/web-development" className="footer-link">
                    Web Development
                  </Link>
                </p>
                <p className="footer-p-link">
                  <Link
                    href="/cloud-consulting-services"
                    className="footer-link"
                  >
                    Cloud Consulting
                  </Link>
                </p>
                <p className="footer-p-link">
                  <Link
                    href="/devops-consulting-service"
                    className="footer-link"
                  >
                    DevOps Consulting
                  </Link>
                </p>
                <p className="footer-p-link">
                  <Link href="/digital-marketing" className="footer-link">
                    Digital Marketing
                  </Link>
                </p>
                <p className="footer-p-link">
                  <Link
                    href="/quality-engineering-testing"
                    className="footer-link"
                  >
                    Qualtiy Engineering & Testing
                  </Link>
                </p>
                <p className="footer-p-link">
                  <Link href="#" className="footer-link">
                    Cyber Security
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 footer-side  mb-2">
              <h5 className="footer-heading">COMPANY</h5>
              <div className="footer-menu">
                <p className="pt-3 footer-p-link">
                  <Link href="/aboutus" className="footer-link">
                    About Us
                  </Link>
                </p>
                <p className="footer-p-link">
                  <Link href="#" className="footer-link">
                    Technologies
                  </Link>
                </p>
                <p className="footer-p-link">
                  <Link href="#" className="footer-link">
                    Blogs
                  </Link>
                </p>
                <p className="footer-p-link">
                  <Link href="/portfolio" className="footer-link">
                    Portfolio
                  </Link>
                </p>
                <p className="footer-p-link">
                  <Link href="/contact-us" className="footer-link">
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
            <div id="pin" className="box">
              <div className="pin-text">
                <img src="/mahabalipuram.jpeg" width="250px" height="166px" />
              </div>
            </div>
          </div>
        </section>
        <section id="footercpyright">
          <div className="footer-copyright container  mt-0 py-2">
            <div className="row ">
              <div className="col-lg-6 col-md-6">
                <small className="mt-2 pb-2" style={{fontFamily:"Gilroy-Semibold"}} >
                  Trimsel Softwares 2021. All Rights Reserved.
                </small>
              </div>
              <div className="col-lg-6 col-md-6">
                <small className="mt-2 footer-small" style={{fontFamily:"Gilroy-Semibold"}}>
                  <Link href="#">Privacy Policy</Link>
                </small>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
