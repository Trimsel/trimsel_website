// components/ClientLogo.jsx
import Image from "next/image";

const DEFAULT_SIZES = "(max-width: 768px) 45vw, 130px";

// Keep all logo metadata in one place for easy edits
const CLIENT_LOGOS = [
  // NOTE: looks like a path typo: "timsel-clients" → probably "trimsel-clients"
  { src: "/trimsel-clients/taxpare.png", width: 130, height: 31.1, alt: "Taxpare client logo" },

  { src: "/trimsel-clients/transparent3x.png", width: 130, height: 33.35, alt: "Megbing client logo", className: "client-mg" },
  { src: "/trimsel-clients/ero.png", width: 120, height: 36.48, alt: "Erover client logo", className: "client-ero" },
  { src: "/trimsel-clients/xaber-logo.png", width: 130, height: 35.54, alt: "Xaber client logo", className: "client-xaber" },
  { src: "/trimsel-clients/Logo-Main.png", width: 120, height: 39.37, alt: "Echarge client logo", className: "client-echg" },
  { src: "/trimsel-clients/gobuzzr.png", width: 93.17, height: 39, alt: "Gobuzzr client logo", className: "client-buzr" },
  { src: "/trimsel-clients/ezyhelpers-logo.png", width: 172, height: 54, alt: "Ezyhelpers client logo", className: "new-pd client-ez" },
  { src: "/trimsel-clients/celeb_gap.png", width: 160, height: 34.29, alt: "Celeb Gab client logo", className: "client-ez" },

  // TIP: rename this file to remove the space: "encompass-logo-regular-1.png"
  { src: "/trimsel-clients/encompass-logo-regular 1.png", width: 120, height: 72.14, alt: "Encompass client logo", className: "new-pd1 client-ez" },

  { src: "/trimsel-clients/fisto.png", width: 110, height: 37.07, alt: "Fisto Sports client logo", className: "client-ez" },
  { src: "/trimsel-clients/marc-shiparo.png", width: 164, height: 38.64, alt: "Marc-Shiparo client logo", className: "client-ez" },
  { src: "/trimsel-clients/wood.png", width: 138, height: 42.71, alt: "Wood Shelving client logo", className: "client-mg client-ez" },
  { src: "/trimsel-clients/kariot-logo.png", width: 110, height: 52, alt: "KarIOT client logo", className: "new-pd2 client-ez" },
  { src: "/trimsel-clients/progreen.png", width: 130, height: 53.18, alt: "Progreen Carpet client logo", className: "new-pd3 client-ez" },
  { src: "/trimsel-clients/Collision-Masters.png", width: 125, height: 70, alt: "Collision Masters client logo", className: "new-pd4 client-ez" },
  { src: "/trimsel-clients/mocile.png", width: 106, height: 106, alt: "Mocile client logo", className: "new-pd5 client-ez" },
  { src: "/trimsel-clients/progreen1.png", width: 138.81, height: 50, alt: "Progreen Landscape Solutions client logo", className: "new-pd6 client-ez" },
  { src: "/trimsel-clients/housetoproofing1.png", width: 148, height: 50, alt: "House Top Roofing client logo", className: "new-pd6 client-ez" },
];

export default function ClientLogo() {
  return (
    <div className="client-row grid grid-cols-2 gap-4 pt-3 text-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {CLIENT_LOGOS.map((logo, idx) => (
        <div key={`${logo.alt}-${idx}`} className={`client-col ${logo.className || ""}`.trim()}>
          <div className="client-bg flex items-center justify-center rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-inner">
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
              loading="lazy"
              sizes={DEFAULT_SIZES}
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
