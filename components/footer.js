import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/mobile-app-development-chennai", label: "Mobile App Development" },
  { href: "/web-development-company-chennai", label: "Web Development" },
  { href: "/cloud-consulting-services", label: "Cloud Consulting" },
  { href: "/devops-consulting-services", label: "DevOps Consulting" },
  { href: "/digital-marketing-company-chennai", label: "Digital Marketing" },
  { href: "/ai-development-company", label: "AI/ML Development" },
];

const companyLinks = [
  { href: "/aboutus", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-white text-black">
      <div className="relative overflow-hidden bg-white text-white px-6 py-10 sm:px-8 lg:px-12">
        {/* INDIA badge with small image */}
        <div className="mb-10 flex items-center gap-3">
          <Image
            src="/indiaflag.svg"
            width={77}
            height={40}
            alt="India flag illustration"
            className="h-10 w-auto"
          />
        </div>
        {/* Locations + hero image (right side of Figma page) */}
        <div className="col-12">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h1 className="inline-flex items-center text-xl font-semibold text-black">
                <Image
                  src="/locate.svg"
                  alt="Location icon"
                  width={15}
                  height={15}
                  className="mr-1 mt-1"
                />
                Chennai
              </h1>
              <p className="text-black-200">
                21B 5th Cross Street, South Phase Thiru VI
                <br />
                KA Industrial Estate, Guindy, Chennai,
                <br />
                Tamil Nadu - 600032.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h1 className="inline-flex items-center text-xl font-semibold text-black -ml-12">
                <Image
                  src="/locate.svg"
                  alt="Location icon"
                  width={15}
                  height={15}
                  className="mr-1 mt-1"
                />
                Tirunelveli
              </h1>
              <p className="text-black-200 -ml-12">
                1st Floor, Crystal Plaza State Bank, 138/2,
                <br />
                NGO B Colony, New Colony, Tirunelveli,
                <br />
                Tamil Nadu - 627007.
              </p>
              <div className="space-y-1">
                <p className="text-base font-semibold text-black"></p>
              </div>
            </div>
          </div>
        </div>
        {/* Right-Aligned Image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
          <Image
            src="/temple.png"
            alt="Temple Illustration"
            width={600}
            height={600}
          />
        </div>
        <div className="space-y-4">
          <p className="text-lg font-semibold tracking-[0.15em] text-black mt-5">
            CONTACT
          </p>
          <div className="space-y-3 text-sm text-slate-200">
            <div className="flex items-center gap-3">
              <Image
                src="/message.svg"
                alt="Mail Icon"
                width={20}
                height={20}
                className="me-2"
              />
              <a href="mailto:contact@trimsel.com" className="text-black">
                contact@trimsel.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/call.svg"
                alt="Phone Icon"
                width={20}
                height={20}
                className="me-2"
              />
              <a href="tel:+917200841581" className="text-black">
                +91 72008 41581
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black text-white">
        {/* Black footer card from Figma */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1.4fr_1.4fr] items-start">
            {/* Logo + socials (left column in Figma) */}
            <div className="space-y-2 mt-5">
              <Image
                src="/trimsel-logo-white.svg"
                width={283}
                height={96}
                alt="Trimsel Softwares"
                className="h-16 w-auto"
                loading="lazy"
              />

              <div className="space-y-2">
                <div className="flex flex-wrap gap-3">
                  <nav aria-label="Social media">
                    <ul className="list-inline mt-2">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/company/trimsel/"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          aria-label="Trimsel on LinkedIn"
                        >
                          <Image
                            className="social-icon"
                            src="/linkedin-2.svg"
                            width={40}
                            height={40}
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://www.facebook.com/share/1CSq6QDAbp/"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          aria-label="Trimsel on Facebook"
                        >
                          <Image
                            className="social-icon"
                            src="/facebook-2.svg"
                            width={40}
                            height={40}
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://www.instagram.com/trimsel_softwares?igsh=bzRhN2ZwdDV3d295"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          aria-label="Trimsel on Instagram"
                        >
                          <Image
                            className="social-icon"
                            src="/instagram-2.svg"
                            width={40}
                            height={40}
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://in.pinterest.com/Trimsel_Softwares/"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          aria-label="Trimsel on Pinterest"
                        >
                          <Image
                            className="social-icon"
                            src="/pinterest.svg"
                            width={40}
                            height={40}
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* Services + Company (middle column in Figma) */}
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="text-lg font-semibold tracking-[0.15em] text-white mt-10 ml-6">
                  SERVICES
                </p>
                <ul className="mt-3 space-y-3 text-sm text-slate-400 -mr-20 -ml-2">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[#ADADAD]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold tracking-[0.15em] text-white mt-10 mr-20 ml-20">
                    COMPANY
                  </p>
                  <ul className="mt-3 space-y-1 text-slate-400 -mr-20 ml-12">
                    {companyLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-[#ADADAD]">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row inside the card (copyright) */}
          <div className="border-t border-white mt-5">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 py-6 text-center text-slate-400 sm:px-6 lg:px-8">
              <p>© {currentYear} Trimsel Softwares. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
