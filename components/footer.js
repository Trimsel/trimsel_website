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
  { href: "/portfolio", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

const socials = [
  {
    href: "https://www.facebook.com/trimsel.softwares",
    icon: "/facebook.png",
    label: "Trimsel on Facebook",
  },
  {
    href: "https://www.instagram.com/trimsel/",
    icon: "/insta.png",
    label: "Trimsel on Instagram",
  },
  {
    href: "https://www.linkedin.com/company/trimsel/",
    icon: "/linkedin.png",
    label: "Trimsel on LinkedIn",
  },
  {
    href: "https://in.pinterest.com/trimsel/",
    icon: "/pinterest.png",
    label: "Trimsel on Pinterest",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Image
              src="/trimsel-logo-white.svg"
              width={220}
              height={72}
              alt="Trimsel Softwares"
              className="h-auto w-40"
              loading="lazy"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Contact
              </p>
              <ul className="mt-3 space-y-2 text-sm font-semibold">
                <li>
                  <a
                    href="mailto:contact@trimsel.com"
                    className="hover:text-brand transition"
                  >
                    contact@trimsel.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917200841581"
                    className="hover:text-brand transition"
                  >
                    +91 72008 41581
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Visit Us
              </p>
              <address className="mt-3 text-sm not-italic text-slate-200">
                <a
                  href="https://maps.google.com/?q=Trimsel+Softwares,+Guindy,+Chennai+600032"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="hover:text-brand transition"
                >
                  21B 5th Cross St, South Phase
                  <br />
                  Thiru VI KA Industrial Estate, Guindy
                  <br />
                  Chennai, Tamil Nadu 600032, India
                </a>
              </address>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Follow Us
              </p>
              <div className="mt-3 flex gap-3">
                {socials.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={item.label}
                    className="rounded-full border border-white/20 p-2 transition hover:border-brand hover:bg-brand/10"
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Services
            </p>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-slate-200">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Company
            </p>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-slate-200">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-slate-950/30 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Chennai, India
            </p>
            <Image
              src="/mahabalipuram.webp"
              width={300}
              height={200}
              alt="Mahabalipuram, Chennai"
              className="mt-4 w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <p className="mt-4 text-sm text-slate-200">
              Proudly building future-ready products from the heart of Tamil
              Nadu’s tech corridor.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {currentYear} Trimsel Softwares. All rights reserved.</p>
          <p className="text-xs uppercase tracking-[0.3em]">
            AI + Product Engineering • Cloud • DevOps • Digital Experience
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
