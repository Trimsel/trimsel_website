type AreaServed = { type: "Place" | "Country"; name: string };

export type FaqEntry = {
  question: string;
  answer: string;
};

export type BreadcrumbEntry = {
  name: string;
  item: string;
};

export type ServiceSchemaConfig = {
  slug: string; // without leading slash
  serviceName: string;
  serviceType: string;
  description: string;
  offers: string[];
  areaServed?: AreaServed[];
  faq?: FaqEntry[];
  breadcrumbs: BreadcrumbEntry[];
};

const SITE_ORG_ID = "https://www.trimsel.com/#org";

function buildAreaServed(areaServed?: AreaServed[]) {
  if (!areaServed?.length) return [
    { "@type": "Place", name: "Chennai" },
    { "@type": "Country", name: "India" },
  ];

  return areaServed.map((area) => ({ "@type": area.type, name: area.name }));
}

function buildOffers(offers: string[]) {
  return offers.map((offer) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: offer },
  }));
}

export function buildServiceJsonLd(config: ServiceSchemaConfig) {
  const baseUrl = `https://www.trimsel.com/${config.slug}`.replace(/\/+/g, "/");
  const serviceId = `${baseUrl}#service`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,
    name: config.serviceName,
    serviceType: config.serviceType,
    description: config.description,
    provider: { "@id": SITE_ORG_ID },
    areaServed: buildAreaServed(config.areaServed),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${config.serviceName} Services`,
      itemListElement: buildOffers(config.offers),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}#breadcrumbs`,
    itemListElement: config.breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };

  const faqSchema = config.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${baseUrl}#faq`,
        mainEntity: config.faq.map((entry) => ({
          "@type": "Question",
          name: entry.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: entry.answer,
          },
        })),
      }
    : null;

  return faqSchema ? [serviceSchema, breadcrumbSchema, faqSchema] : [serviceSchema, breadcrumbSchema];
}
