import Link from "next/link";
import Image from "next/image";


function Footer() {
  const contactEmail = "contact@trimsel.com";
  const contactPhone = "+91-720-084-1581";
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="new-footer">
        <section className="container pt-5">
          <div className="row newd-row py-3">
            <div className="col-lg-6 col-md-6 pb-3">
              <h5 className="newd-title text-white">CONTACT US</h5>
              <span className="mail-link">
                <Link href={`mailto:${contactEmail}`} className="mail-link">{contactEmail}</Link>
              </span>{" "}
              |{" "}
              <span className="mail-link">
              <Link href={`tel:${contactPhone}`} className="mail-link">{contactPhone}</Link>
              </span>
            </div>
            <div className="col-lg-6 col-md-6 pb-0">
              <h5 className="contact-addrs text-white">Visit Us:</h5>
                <address className="contact-para text-white">
                  <span style={{ color: "white"}}>21B 5th Cross St, South Phase</span><br />
                  <span style={{ color: "white"}}>Thiru VI KA Industrial Estate, Guindy</span><br />
                  <span style={{ color: "white"}}>Chennai, Tamil Nadu 600032, India</span>
                </address>
              {/* <p className="contact-para">
                21B 5th Cross St, South Phase Thiru VI KA Industrial Estate,
                Guindy, Chennai, Tamilnadu 600032, India
              </p> */}
            </div>
          </div>
          <div className="row pt-5 no-gutters new-row">
            <div className="col-lg-3 col-md-5 pb-3">
              <Image
                src="/trimsel-logo-white.svg"
                className="white-logo"
                width={253}
                height={88}
                alt="Trimsel Softwares Logo"
                priority
              />
              <p className="footer-para py-3">
                At Trimsel, we focus on providing digital solutions built with
                cutting-edge technology, so our clients are always ahead of the
                curve.
              </p>
              <h4 className="contact-addrs">Follow Us:</h4>
              <Link href="https://www.facebook.com/trimsel.softwares" passHref target="_blank" rel="noopener noreferrer nofollow">
                <Image className="social-icon" src="/facebook.png" width={50} height={40} alt="Follow Trimsel on Facebook" loading="lazy"/>
              </Link>{" "}
              <Link href="https://www.instagram.com/trimsel/" passHref target="_blank" rel="noopener noreferrer nofollow">
                <Image className="social-icon" src="/insta.png" width={50} height={40} alt="Follow Trimsel on Instagram" loading="lazy"/>
              </Link>{" "}
              <Link href="https://www.linkedin.com/company/trimsel/" passHref target="_blank" rel="noopener noreferrer nofollow">
                <Image className="social-icon" src="/linkedin.png" width={50} height={40} alt="Follow Trimsel on LinkdIn" loading="lazy"/>
              </Link>{" "}
              <Link href="https://in.pinterest.com/trimsel/" passHref target="_blank" rel="noopener noreferrer nofollow">
                <Image className="social-icon" src="/pinterest.png" width={50} height={40} alt="Follow Trimsel on Pinterest" loading="lazy"/>
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 footer-sides  mb-2">
              <h5 className="footer-heading">SERVICES</h5>
              <div className="footer-menu">
                <p className="pt-3 footer-p-link">
                  <a href="/mobile-app-development-chennai" className="footer-link">
                    Mobile App Development
                  </a>
                </p>
                <p className="footer-p-link">
                  <Link href="/web-development-company-chennai" className="footer-link">
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
                    href="/devops-consulting-services"
                    className="footer-link"
                  >
                    DevOps Consulting
                  </Link>
                </p>
                <p className="footer-p-link">
                  <Link href="/digital-marketing-company-chennai" className="footer-link">
                    Digital Marketing
                  </Link>
                </p>
                {/* <p className="footer-p-link">
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
                </p> */}
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
                {/* <p className="footer-p-link">
                  <Link href="#" className="footer-link">
                    Technologies
                  </Link>
                </p> */}
                {/* <p className="footer-p-link">
                  <Link href="#" className="footer-link">
                    Blogs
                  </Link>
                </p> */}
                {/* <p className="footer-p-link">
                  <Link href="/portfolio" className="footer-link">
                    Portfolio
                  </Link>
                </p> */}
                <p className="footer-p-link">
                  <Link href="/contact-us" className="footer-link">
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
            <div id="pin" className="box">
              <div className="pin-text">
              <Image src="/mahabalipuram.jpeg" width={250} height={166} alt="Scenic view of Mahabalipuram" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
        <section id="footercpyright">
          <div className="footer-copyright container  mt-0 py-2">
            <div className="row ">
              <div className="col-lg-6 col-md-6">
                <small className="mt-2 pb-2" style={{fontFamily:"Gilroy-Semibold"}} >
                  Trimsel Softwares {currentYear}. All Rights Reserved.
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
