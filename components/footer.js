import Link from "next/link";
import Image from "next/image";
import { manropeFont } from "../lib/fonts";

function Footer() {
  const contactEmail = "contact@trimsel.com";
  const contactPhoneRaw = "+917200841581";
  const contactPhoneDisplay = "+91 72008 41581";
  const currentYear = new Date().getFullYear();

  const officeLocations = [
    {
      name: "Chennai",
      mapUrl: "https://maps.google.com/?q=Trimsel+Softwares,+Guindy,+Chennai+600032",
      ariaLabel: "Open Trimsel Chennai location on Google Maps",
      address: [
        "21B 5th Cross Street, South Phase Thiru VI",
        "KA Industrial Estate, Guindy Chennai,",
        "Tamil Nadu - 600032.",
      ],
    },
    {
      name: "Tirunelveli",
      mapUrl:
        "https://www.google.com/maps/place/Trimsel/@8.6940918,77.7282619,17z/data=!4m6!3m5!1s0x3b0413002d92ee2f:0x925853e0a9d6e7b8!8m2!3d8.6940918!4d77.7308368!16s%2Fg%2F11wc8bkkb1",
      ariaLabel: "Open Trimsel Tirunelveli location on Google Maps",
      address: [
        "1st Floor, Crystal Plaza State Bank, 138/2,",
        "NGO B Colony, New Colony, Tirunelveli,",
        "Tamil Nadu - 627007.",
      ],
    },
  ];

  const contactItems = [
    {
      id: "email",
      icon: "/message.svg",
      alt: "Mail icon",
      href: `mailto:${contactEmail}`,
      label: contactEmail,
      ariaLabel: "Email Trimsel",
    },
    {
      id: "phone",
      icon: "/call.svg",
      alt: "Phone icon",
      href: `tel:${contactPhoneRaw}`,
      label: contactPhoneDisplay,
      ariaLabel: "Call Trimsel",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61577125138702",
      label: "Trimsel on Facebook",
      icon: "/facebook-2.svg",
    },
    {
      href: "https://www.instagram.com/trimsel/",
      label: "Trimsel on Instagram",
      icon: "/instagram-2.svg",
    },
    {
      href: "https://www.linkedin.com/company/trimsel/",
      label: "Trimsel on LinkedIn",
      icon: "/linkedin-2.svg",
    },
    {
      href: "https://in.pinterest.com/trimsel/",
      label: "Trimsel on Pinterest",
      icon: "/pinterest 1.svg",
    },
  ];

  return (
    <>
      <section className="container pt-5 footer-hero">
        <div className="row align-items-start g-4">
          <div className="col-lg-8">
            <div className="d-flex align-items-center gap-3 mb-4 footer-hero-heading">
              <Image src="/india.svg" width={120} height={40} alt="India Flag" className="footer-flag" />
              <h3 className={`${manropeFont.className} mb-0 text-uppercase text-black`}>India</h3>
            </div>

            <div className="row gy-4">
              {officeLocations.map((office) => (
                <div key={office.name} className="col-md-6">
                  <h5
                    className={`${manropeFont.className} footer-heading text-black d-flex align-items-center mb-3`}
                  >
                    <Image src="/locate.svg" alt="Location icon" width={20} height={20} className="me-3" />
                    {office.name}
                  </h5>
                  <address className="contact-para footer-address text-black mb-0">
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={`${manropeFont.className} footer-address-link text-black text-decoration-none`}
                      aria-label={office.ariaLabel}
                    >
                      {office.address.map((line, index) => (
                        <span key={`${office.name}-${index}`}>
                          {line}
                          {index !== office.address.length - 1 && <br />}
                        </span>
                      ))}
                    </a>
                  </address>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h5 className={`${manropeFont.className} footer-heading text-black`}>Contact</h5>
              <ul className="list-unstyled footer-contact mb-0">
                {contactItems.map((item) => (
                  <li key={item.id} className="d-flex align-items-center mb-2">
                    <Image src={item.icon} alt={item.alt} width={20} height={20} className="me-2" />
                    <a
                      href={item.href}
                      className={`${manropeFont.className} text-black text-decoration-none`}
                      aria-label={item.ariaLabel}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
 
      <footer id="new-footer">
        <section className="container pt-5">
          <div className="row pt-4 no-gutters new-row">
            <div className="col-lg-4 col-md-6 pb-4">
              <Image
                src="/trimsel-logo-white.svg"
                className="white-logo"
                width={253}
                height={88}
                alt="Trimsel Softwares logo"
                loading="lazy"
              />
              <nav aria-label="Social media">
                <ul className="list-inline mt-2">
                  {socialLinks.map((link) => (
                    <li key={link.label} className="list-inline-item">
                      <a href={link.href} target="_blank" rel="noopener noreferrer nofollow" aria-label={link.label}>
                        <Image
                          className="social-icon"
                          src={link.icon}
                          width={40}
                          height={40}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className={`${manropeFont.className} col-lg-3 col-md-6 footer-sides mb-4`}>
              <h5 className="text-xl font-bold text-uppercase text-white">Services</h5>
              <nav aria-label="Services">
                <ul className="footer-menu list-unstyled mb-0">
                  <li className="pt-3 footer-p-link">
                    <Link href="/mobile-app-development-chennai" className="footer-link">
                      Mobile App Development
                    </Link>
                  </li>
                  <li className="pt-2 footer-p-link">
                    <Link href="/web-development-company-chennai" className="footer-link">
                      Web Development
                    </Link>
                  </li>
                  <li className="pt-2 footer-p-link">
                    <Link href="/cloud-consulting-services" className="footer-link">
                      Cloud Consulting
                    </Link>
                  </li>
                  <li className="pt-2 footer-p-link">
                    <Link href="/devops-consulting-services" className="footer-link">
                      DevOps Consulting
                    </Link>
                  </li>
                  <li className="pt-2 footer-p-link">
                    <Link href="/digital-marketing-company-chennai" className="footer-link">
                      Digital Marketing
                    </Link>
                  </li>
                  <li className="pt-2 footer-p-link">
                    <Link href="/ai-development-company" className="footer-link">
                      AI/ML development
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={`${manropeFont.className} col-lg-3 col-md-6 footer-side mb-4`}>
              <h5 className="text-xl font-semibold text-uppercase text-white">Company</h5>
              <nav aria-label="About Trimsel">
                <ul className="footer-menu list-unstyled mb-0">
                  <li className="pt-3 footer-p-link">
                    <Link href="/aboutus" className="footer-link">
                      About Us
                    </Link>
                  </li>
                  <li className="pt-2 footer-p-link">
                    <Link href="/contact-us" className="footer-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-12">
              <div className="footer-divider border-bottom border-opacity-25 border-light my-3" />
            </div>
          </div>
        </section>

        <section id="footercpyright">
          <div className="footer-copyright container mt-0 py-2">
            <div className="row align-items-center">
              <div className="text-center">
                <small>© {currentYear} Trimsel Softwares. All rights reserved.</small>
              </div>
            </div>
          </div>
        </section>
      </footer>

    </>
  );
}

export default Footer;
