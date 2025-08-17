import Link from "next/link";
import Image from "next/image";

function Footer() {
  const contactEmail = "contact@trimsel.com";
  const contactPhoneRaw = "+917200841581"; // correct tel format for dialers
  const contactPhoneDisplay = "+91 72008 41581";
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="new-footer">
  <section className="container pt-5">
    <div className="row pt-4 no-gutters new-row">
      {/* Brand + About + Contact + Address */}
      <div className="col-lg-4 col-md-6 pb-4">
        <Image
          src="/trimsel-logo-white.svg"
          className="white-logo"
          width={253}
          height={88}
          alt="Trimsel Softwares logo"
          loading="lazy"
        />
        {/* Contact */}
        <h5 className="footer-heading mt-3">Contact</h5>
        <ul className="list-unstyled footer-contact">
          <li>
            <a href="mailto:contact@trimsel.com" className="mail-link" aria-label="Email Trimsel">contact@trimsel.com</a>
          </li>
          <li>
            <a href="tel:+917200841581" className="mail-link" aria-label="Call Trimsel">+91 72008 41581</a>
          </li>
        </ul>

        {/* Address */}
        <h5 className="footer-heading mt-3">Visit Us</h5>
        <address className="contact-para text-white mb-2">
          21B 5th Cross St, South Phase<br/>
          Thiru VI KA Industrial Estate, Guindy<br/>
          Chennai, Tamil Nadu 600032, India
        </address>
        <a
          href="https://maps.google.com/?q=Trimsel+Softwares,+Guindy,+Chennai+600032"
          target="_blank" rel="noopener noreferrer nofollow"
          className="footer-link"
          aria-label="Open Trimsel location on Google Maps"
        >
          View on Google Maps →
        </a>

        {/* Social */}
        <h5 className="footer-heading mt-4">Follow Us</h5>
        <nav aria-label="Social media">
          <ul className="list-inline m-0">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/trimsel.softwares" target="_blank" rel="noopener noreferrer nofollow" aria-label="Trimsel on Facebook">
                <Image className="social-icon" src="/facebook.png" width={40} height={40} alt="" loading="lazy" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/trimsel/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Trimsel on Instagram">
                <Image className="social-icon" src="/insta.png" width={40} height={40} alt="" loading="lazy" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/company/trimsel/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Trimsel on LinkedIn">
                <Image className="social-icon" src="/linkedin.png" width={40} height={40} alt="" loading="lazy" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://in.pinterest.com/trimsel/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Trimsel on Pinterest">
                <Image className="social-icon" src="/pinterest.png" width={40} height={40} alt="" loading="lazy" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Services */}
      <div className="col-lg-3 col-md-6 footer-sides mb-4">
        <h5 className="footer-heading">Services</h5>
        <nav aria-label="Services">
          <ul className="footer-menu list-unstyled mb-0">
            <li className="pt-3 footer-p-link"><Link href="/mobile-app-development-chennai" className="footer-link">Mobile App Development</Link></li>
            <li className="footer-p-link"><Link href="/web-development-company-chennai" className="footer-link">Web Development</Link></li>
            <li className="footer-p-link"><Link href="/cloud-consulting-services" className="footer-link">Cloud Consulting</Link></li>
            <li className="footer-p-link"><Link href="/devops-consulting-services" className="footer-link">DevOps Consulting</Link></li>
            <li className="footer-p-link"><Link href="/digital-marketing-company-chennai" className="footer-link">Digital Marketing</Link></li>
          </ul>
        </nav>
      </div>

      {/* Company */}
      <div className="col-lg-3 col-md-6 footer-side mb-4">
        <h5 className="footer-heading">Company</h5>
        <nav aria-label="Company">
          <ul className="footer-menu list-unstyled mb-0">
            <li className="pt-3 footer-p-link"><Link href="/aboutus" className="footer-link">About Us</Link></li>
            <li className="footer-p-link"><Link href="/contact-us" className="footer-link">Contact Us</Link></li>
            {/* Re-enable when ready */}
            {/* <li className="footer-p-link"><Link href="/portfolio" className="footer-link">Portfolio</Link></li> */}
            {/* <li className="footer-p-link"><Link href="/blog" className="footer-link">Blog</Link></li> */}
          </ul>
        </nav>
      </div>

      {/* Visual pin/map */}
      <div className="col-lg-2 col-md-6 mb-4">
        <div className="pin-text">
          <Image
            src="/mahabalipuram.webp"
            width={250}
            height={166}
            alt="Mahabalipuram, Chennai"
            loading="lazy"
            sizes="(max-width: 768px) 60vw, 250px"
          />
        </div>
      </div>
    </div>
  </section>

  <section id="footercpyright">
    <div className="footer-copyright container mt-0 py-2">
      <div className="row align-items-center">
        <div className="col-md-6">
          <small className="mt-2 pb-2" style={{ fontFamily: "Gilroy-Semibold" }}>
            © {new Date().getFullYear()} Trimsel Softwares. All rights reserved.
          </small>
        </div>
        <div className="col-md-6 text-md-end">
          <small className="mt-2 footer-small" style={{ fontFamily: "Gilroy-Semibold" }}>
            <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
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
