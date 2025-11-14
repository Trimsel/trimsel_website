import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { HiArrowNarrowRight } from "@react-icons/all-files/hi/HiArrowNarrowRight";
import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown";

const PRIMARY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/blog", label: "Blog" },
];

const SERVICE_CARDS = [
  {
    title: "Mobile App Development",
    description:
      "Design, build, and scale intuitive mobile experiences for iOS, Android, and cross-platform users.",
    href: "/mobile-app-development-chennai",
    icon: "/images/menu-mobile-icon.png",
  },
  {
    title: "DevOps Consulting",
    description:
      "Automate deployments, boost reliability, and streamline releases with Kubernetes, Docker, and CI/CD.",
    href: "/devops-consulting-services",
    icon: "/images/menu-devops-icon.png",
  },
  {
    title: "Web Development",
    description:
      "Create responsive, SEO-ready, and scalable web applications tailored to your next growth milestone.",
    href: "/web-development-company-chennai",
    icon: "/images/menu-web-icon.png",
  },
  {
    title: "AI & ML Development",
    description:
      "Build custom copilots, chatbots, and ML models that automate workflows and unlock intelligent experiences.",
    href: "/ai-development-company",
    icon: "/images/menu-qa-icon.png",
  },
  {
    title: "Cloud Consulting",
    description:
      "Modernize infrastructure with secure, cost-optimized architectures on AWS, Azure, and Google Cloud.",
    href: "/cloud-consulting-services",
    icon: "/images/menu-cloud-icon.png",
  },
];

const MenuCard = ({ item }) => (
  <Link
    href={item.href}
    className="group relative flex gap-4 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-brand/30"
  >
    <Image src={item.icon} alt={item.title} width={40} height={40} />
    <div className="space-y-1">
      <p className="flex items-center gap-2 text-base font-semibold text-slate-900">
        {item.title}
        <HiArrowNarrowRight className="text-brand opacity-0 transition group-hover:opacity-100" />
      </p>
      <p className="text-sm text-slate-500">{item.description}</p>
    </div>
  </Link>
);

export default function Header({ page }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  const isDarkHero = page === "mobile-app";
  const showLightLogo = isDarkHero && !isScrolled;
  const navTextColor = showLightLogo ? "text-white" : "text-slate-800";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition duration-300">
      <div
        className={`${
          isScrolled ? "border-slate-100 bg-white/95 backdrop-blur" : "bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={showLightLogo ? "/trimsel-logo-white.svg" : "/trimsel-logo.svg"}
              alt="Trimsel logo"
              width={160}
              height={44}
              priority
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-end gap-10 lg:flex">
            {PRIMARY_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-[0.2em] transition hover:text-brand ${navTextColor}`}
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsMegaOpen(true)}
              onMouseLeave={() => setIsMegaOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                  navTextColor
                }`}
                onClick={() => setIsMegaOpen((prev) => !prev)}
              >
                Services <HiOutlineChevronDown className="h-4 w-4" />
              </button>
              {isMegaOpen && (
                <div className="absolute right-0 top-12 w-[720px] rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/10">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {SERVICE_CARDS.map((card) => (
                      <MenuCard key={card.href} item={card} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className="rounded-full bg-brand px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand/90"
            >
              Contact Us
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className={`rounded-full border border-slate-200 p-2 transition lg:hidden ${
              showLightLogo ? "text-white" : "text-slate-700"
            }`}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="flex-1 bg-slate-900/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          <div className="flex h-full w-80 flex-col gap-6 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <Image
                src="/trimsel-logo.svg"
                alt="Trimsel logo"
                width={140}
                height={40}
              />
              <button
                type="button"
                onClick={closeMobileMenu}
                className="rounded-full border border-slate-200 p-2 text-slate-700"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-4 border-b border-slate-100 pb-4">
              {PRIMARY_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block text-base font-semibold text-slate-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Services
              </p>
              <div className="mt-3 space-y-3">
                {SERVICE_CARDS.map((card) => (
                  <MenuCard key={`mobile-${card.href}`} item={card} />
                ))}
              </div>
            </div>

            <Link
              href="/contact-us"
              onClick={closeMobileMenu}
              className="mt-auto rounded-2xl bg-brand px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-brand/40 transition hover:bg-brand-dark"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
