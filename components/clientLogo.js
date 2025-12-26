// components/ClientLogo.jsx
import Image from "next/image";

const DEFAULT_SIZES = "(max-width: 768px) 45vw, 130px";

// Keep all logo metadata in one place for easy edits
const CLIENT_LOGOS = [
  // NOTE: looks like a path typo: "timsel-clients" → probably "trimsel-clients"
  {
    src: "/trimsel-clients/taxpare.png",
    width: 150,
    height: 38,
    alt: "Taxpare client logo",
  },

  {
    src: "/trimsel-clients/transparent3x.png",
    width: 150,
    height: 38,
    alt: "Megbing client logo",
    className: "client-mg",
  },
  {
    src: "/trimsel-clients/ero.png",
    width: 140,
    height: 38,
    alt: "Erover client logo",
    className: "client-ero",
  },
  {
    src: "/trimsel-clients/xaber-logo.png",
    width: 150,
    height: 38,
    alt: "Xaber client logo",
    className: "client-xaber",
  },
  {
    src: "/trimsel-clients/Logo-Main.png",
    width: 150,
    height: 43,
    alt: "Echarge client logo",
    className: "client-echg",
  },
  {
    src: "/trimsel-clients/gobuzzr.png",
    width: 130,
    height: 39,
    alt: "Gobuzzr client logo",
    className: "client-buzr",
  },
  {
    src: "/trimsel-clients/ezyhelpers-logo.png",
    width: 172,
    height: 60,
    alt: "Ezyhelpers client logo",
    className: "new-pd client-ez",
  },
  {
    src: "/trimsel-clients/celeb_gap.png",
    width: 160,
    height: 39,
    alt: "Celeb Gab client logo",
    className: "client-ez",
  },

  // TIP: rename this file to remove the space: "encompass-logo-regular-1.png"
  {
    src: "/trimsel-clients/encompass-logo-regular 1.png",
    width: 120,
    height: 74,
    alt: "Encompass client logo",
    className: "new-pd1 client-ez",
  },

  {
    src: "/trimsel-clients/fisto.png",
    width: 110,
    height: 39,
    alt: "Fisto Sports client logo",
    className: "client-ez",
  },
  {
    src: "/trimsel-clients/marc-shiparo.png",
    width: 164,
    height: 40,
    alt: "Marc-Shiparo client logo",
    className: "client-ez",
  },
  {
    src: "/trimsel-clients/wood.png",
    width: 138,
    height: 45,
    alt: "Wood Shelving client logo",
    className: "client-mg client-ez",
  },
  {
    src: "/trimsel-clients/kariot-logo.png",
    width: 110,
    height: 52,
    alt: "KarIOT client logo",
    className: "new-pd2 client-ez",
  },
  {
    src: "/trimsel-clients/progreen.png",
    width: 130,
    height: 58,
    alt: "Progreen Carpet client logo",
    className: "new-pd3 client-ez",
  },
  {
    src: "/trimsel-clients/Collision-Masters.png",
    width: 125,
    height: 70,
    alt: "Collision Masters client logo",
    className: "new-pd4 client-ez",
  },
  {
    src: "/trimsel-clients/mocile.png",
    width: 106,
    height: 106,
    alt: "Mocile client logo",
    className: "new-pd5 client-ez",
  },
  {
    src: "/trimsel-clients/progreen1.png",
    width: 138.81,
    height: 50,
    alt: "Progreen Landscape Solutions client logo",
    className: "new-pd6 client-ez",
  },
  {
    src: "/trimsel-clients/housetoproofing1.png",
    width: 148,
    height: 50,
    alt: "House Top Roofing client logo",
    className: "new-pd6 client-ez",
  },
];

const midpoint = Math.ceil(CLIENT_LOGOS.length / 2);
const FIRST_ROW_LOGOS = CLIENT_LOGOS.slice(0, midpoint);
const SECOND_ROW_LOGOS = CLIENT_LOGOS.slice(midpoint);

function LogoRow({ logos, direction = "ltr" }) {
  const animationClass =
    direction === "ltr"
      ? "animate-logo-marquee-ltr"
      : "animate-logo-marquee-rtl";

  return (
    <div className="relative w-full overflow-hidden -my-0">
      <div
        className={`flex w-[200%] items-center gap-10 ${animationClass}`}
        style={{ willChange: "transform" }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={`${logo.alt}-${idx}`}
            className={`flex items-center justify-center flex-shrink-0 ${
              logo.className || ""
            }`.trim()}
          >
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
              priority
              sizes={DEFAULT_SIZES}
              className="h-auto max-h-[70px] w-auto object-contain filter grayscale transition duration-300 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientLogo() {
  return (
    <div className="w-full -my-0">
      <LogoRow logos={FIRST_ROW_LOGOS} direction="ltr" />
      <LogoRow logos={SECOND_ROW_LOGOS} direction="rtl" />
    </div>
  );
}
