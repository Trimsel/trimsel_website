import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown";

const PRIMARY_LINKS = [
  { href: "/", label: "COMPANY" },
  { href: "/services", label: "Service" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];

const SERVICE_LINKS = [
  { href: "/mobile-app-development-chennai", label: "Mobile App Development" },
  { href: "/web-development-company-chennai", label: "Web Development" },
  { href: "/digital-marketing-company-chennai", label: "Digital Marketing" },
  { href: "/ai-development-company", label: "AI Development" },
  { href: "/cloud-consulting-services", label: "Cloud Consulting" },
  { href: "/devops-consulting-services", label: "DevOps Consulting" },
];

export default function Header({ page }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isHeroPage =
    page === "mobile-app" || page === "ai-development" || page === "cloud";

  // Hero style = only when on hero page AND not scrolled
  const showHeroStyle = isHeroPage && !isScrolled;

  const showLightLogo = showHeroStyle;
  const navTextColor = showHeroStyle ? "text-white" : "text-slate-800";
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
        className={`${isScrolled
          ? "border-slate-100 bg-white/95 backdrop-blur"
          : showHeroStyle
            ? "bg-transparent"
            : "bg-white"
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
            {PRIMARY_LINKS.map((link) => {
              const isService = link.label === "Service";

              if (isService) {
                return (
                  <div key={link.href} className="group relative">
                    <div
                      className={`text-sm font-semibold uppercase tracking-[0.2em] transition flex items-center gap-2 ${navTextColor} hover:text-[#45A7C2] hover:border-[#45A7C2] hover:underline active:text-[#45A7C2] active:border-[#45A7C2] active:underline cursor-pointer`}
                    >
                      {link.label}
                      <HiOutlineChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </div>

                    {/* Dropdown Menu */}
                    <div className="invisible absolute top-full left-1/2 mt-4 w-64 -translate-x-1/2 opacity-0 shadow-xl transition-all duration-300 ease-in-out group-hover:visible group-hover:mt-2 group-hover:opacity-100">
                      <div className="h-4 w-full bg-transparent"></div> {/* Bridge to prevent closing */}
                      <div className="overflow-hidden rounded-xl bg-white p-2 ring-1 ring-slate-900/5">
                        {SERVICE_LINKS.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#45A7C2]"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-[0.2em] transition flex items-center gap-2 ${navTextColor} hover:text-[#45A7C2] hover:border-[#45A7C2] hover:underline active:text-[#45A7C2] active:border-[#45A7C2] active:underline`}
                >
                  {link.label}
                </Link>
              );
            })}

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
            className={`rounded-full border border-slate-200 p-2 transition lg:hidden ${showLightLogo ? "text-white" : "text-slate-700"
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
              {PRIMARY_LINKS.map((link) => {
                const isService = link.href === "/services";
                const isActive = router.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`text-base font-semibold transition flex items-center gap-2 text-slate-800 hover:text-[#45A7C2] hover:border-[#45A7C2] hover:underline active:text-[#45A7C2] active:border-[#45A7C2] active:underline`}
                  >
                    {link.label}
                    {isService && (
                      <HiOutlineChevronDown className="h-4 w-4" />
                    )}
                  </Link>
                );
              })}
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
