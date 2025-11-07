import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion"
import { NextSeo } from 'next-seo';
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";
import ClientLogo from "../components/clientLogo";
import { buildServiceJsonLd } from "../lib/serviceSchema";
import { postJson } from "../lib/api";
const ContactForm = dynamic(() => import("../components/ContactForm"), { ssr: false });

export default function Digital() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  async function onSubmitForm(values) {
    try {
      await postJson("/api/newcontact", values);
      console.log("Contact request sent");
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  }

  const serviceJsonLd = buildServiceJsonLd({
    slug: "digital-marketing-company-chennai",
    serviceName: "Digital Marketing Services (Chennai)",
    serviceType: "Digital Marketing",
    description:
      "SEO, PPC, social media marketing, content marketing, and analytics for growth-focused brands.",
    offers: [
      "SEO Services in Chennai",
      "PPC (Pay-Per-Click) Campaigns",
      "Social Media Marketing",
      "LinkedIn & Instagram Marketing",
      "Content & Email Marketing",
    ],
    faq: [
      {
        question: "What is digital marketing and how can it help my business?",
        answer:
          "Digital marketing is the use of online channels like search engines, social media, and websites to promote your business. It helps build brand awareness, increase website traffic, generate qualified leads, and ultimately drive revenue.",
      },
      {
        question: "How does SEO work, and why is it important for Chennai-based businesses?",
        answer:
          "SEO (Search Engine Optimization) improves your website's visibility on Google for relevant searches. If you're a business in Chennai, SEO ensures local customers find your services when they search online — which boosts credibility and sales.",
      },
      {
        question: "Do you offer Local SEO services?",
        answer:
          "Yes, we specialize in Local SEO to help your business appear in local searches and Google Maps results. Whether you're a store, clinic, or service provider in Chennai, our Local SEO strategy can significantly increase your foot traffic and leads.",
      },
      {
        question: "What platforms do you cover under social media marketing?",
        answer:
          "We manage and optimize campaigns across Instagram, Facebook, LinkedIn, and other platforms. Our strategies include Instagram Ads, Facebook retargeting, LinkedIn lead generation, and more to increase your brand’s online engagement.",
      },
      {
        question: "How are your SEO consultants in Chennai different from others?",
        answer:
          "Our SEO consultants go beyond just keywords. We dive into technical SEO, content strategy, link-building, and analytics to deliver real, measurable growth — not just rankings. We also tailor our approach for local and niche industries.",
      },
      {
        question: "Can you help with lead generation through Google Ads or PPC?",
        answer:
          "Absolutely. As a PPC and pay-per-click advertising company, we create highly targeted ad campaigns on Google and other platforms to bring in high-quality leads within your budget. Our goal is to maximize your ROI.",
      },
      {
        question: "How do I know which digital marketing service I need?",
        answer:
          "If you're not sure where to begin, our experts will assess your current digital presence and recommend a strategy that fits your business goals — whether it’s SEO, social media management, or paid advertising.",
      },
      {
        question: "Is social media marketing effective for B2B businesses?",
        answer:
          "Yes. While B2C often uses Instagram and Facebook, B2B businesses benefit from LinkedIn marketing and targeted content strategies. We’ve helped B2B clients generate leads through educational content and professional networking ads.",
      },
      {
        question: "Do you offer content marketing as part of your services?",
        answer:
          "Yes, we do. Our content marketing strategy includes blog posts, landing pages, email campaigns, and social media content — all designed to boost SEO performance and engage your target audience.",
      },
      {
        question: "Why is Trimsel considered one of the top digital marketing agencies in Chennai?",
        answer:
          "At Trimsel, we blend creativity with data-backed strategies. Our experience across SEO, PPC, and social media combined with local market insights makes us one of the most trusted digital marketing partners for Chennai-based businesses.",
      },
    ],
    breadcrumbs: [
      { name: "Home", item: "https://www.trimsel.com/" },
      {
        name: "Digital Marketing Company Chennai",
        item: "https://www.trimsel.com/digital-marketing-company-chennai",
      },
    ],
  });

  const marketingInsights = [
    {
      title: "5 Easy Ways a Mobile App Can Grow Your Business",
      excerpt: "See how omnichannel campaigns + in-app personalization boost retention and revenue for Chennai brands.",
      href: "/blog/how-mobile-apps-grow-business",
      tag: "Growth Playbook",
    },
    {
      title: "Explore Trimsel’s Digital Growth Library",
      excerpt: "Dive into SEO, PPC, and automation articles to plan your next demand-generation sprint.",
      href: "/blog",
      tag: "Digital Insights",
    },
  ];
  return (
    <>
<NextSeo
  title="Top Digital Marketing Company in Chennai | SEO, PPC, SMM Experts"
  description="Trimsel is a digital marketing company in Chennai offering SEO, PPC, social media marketing & content strategies to boost visibility and drive results."
  canonical="https://www.trimsel.com/digital-marketing-company-chennai"
  openGraph={{
    type: "article",
    url: "https://www.trimsel.com/digital-marketing-company-chennai",
    title: "Top Digital Marketing Company in Chennai | SEO, PPC, SMM Experts",
    description:
      "Trimsel is a trusted digital marketing agency in Chennai specializing in SEO services, PPC advertising, and social media campaigns for high-growth brands.",
    locale: "en_IN",
    site_name: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/digital-homepage.webp",
        width: 1200,
        height: 630,
        alt: "Trimsel digital marketing experts collaborating in Chennai",
      },
    ],
    article: {
      section: "Digital Marketing",
      tags: [
        "Digital Marketing",
        "SEO Services",
        "PPC Campaigns",
        "Social Media Marketing",
        "Chennai",
      ],
    },
  }}
  twitter={{
    cardType: "summary_large_image",
    handle: "@TrimselSoftwares",
    site: "@TrimselSoftwares",
  }}
  additionalMetaTags={[
    { name: "robots", content: "index, follow" },
    {
      name: "twitter:title",
      content: "Digital Marketing Agency in Chennai – Trimsel",
    },
    {
      name: "twitter:description",
      content:
        "Boost visibility and qualified leads with Trimsel’s SEO, PPC, and social media experts based in Chennai.",
    },
    {
      name: "twitter:image:alt",
      content: "Trimsel digital marketing specialists planning campaigns in Chennai",
    },
  ]}
/>
      <Head>
        {serviceJsonLd.map((schema, index) => (
          <script
            key={`digital-marketing-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <section className="dig-hero">
  <Header />
  <section className="hero-dig">
    <div className="container pt-3">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="title">
            <div className="title-inner">
              <div className="cafe">
                <div className="whiteLink">
                  <p className="breadcrumbs-kar">
                    <Link href="/">Home</Link>
                    <span> &#x2027; </span> Digital Marketing
                  </p>
                </div>
              </div>
              <div className="cafe">
                <div className="cafe-inner news-title">
                  <h1>Top Digital Marketing Company in Chennai, India</h1>
                </div>
              </div>
              <div className="mozart">
                <div className="mozart-inner">
                  <p className="dev-para">
                  Looking to boost your online visibility and drive targeted traffic? Trimsel is a top-rated digital marketing agency in Chennai offering result-driven services including SEO, PPC, social media marketing, Instagram ads, LinkedIn marketing, and content marketing. Our SEO experts help you rank higher on Google, grow your audience, and generate more qualified leads.
                  </p>
                </div>
              </div>
              <div className="mozarts">
                <div className="mozarts-inner">
                  <Link href="/contact-us" passHref>
                    <button className="btn btn-primary dev-btn">
                      Get a Digital Strategy Session{" "}
                      <Image
                        src="/images/material-symbols_arrow-right-alt.png"
                        alt="arrow-icon"
                        width={28}
                        height={28}
                        loading="lazy"
                      />
                    </button>
                  </Link>
                  <p className="hero-proof">
                    150+ campaigns delivered for SaaS, retail, and BFSI brands with 4.5x average ROAS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="imgrs">
            <Image
              src="/images/digitall-hero.png"
              className="Digital-hero-img"
              alt="Top Digital Marketing Company in Chennai – SEO, PPC, SMM"
              width={934}
              height={793}
              priority
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4"></div>
        <div className="col-lg-8 col-md-8">
          <div className="imgrs">
            {/* <Image
              src="/images/partnering.png"
              className="partnering-hero-img"
              alt="Trusted Digital Marketing Partner in Chennai"
              width={934}
              height={150}
            /> */}
          </div>
        </div>
      </div>
    </div>
  </section>
</section>
<section id="dig-overview">
  <div className="container web-container">
    <div className="row">
      <div className="col-lg-7 col-md-6">
        <h2 className="webdev-title pt-3">
          Leading Digital Marketing Company in Chennai – SEO, PPC & SMM Experts
        </h2>
        <p className="dig-para">
        In today’s fast-paced online world, having a great product or service isn't enough. You need visibility. That’s where digital marketing comes in. Whether you want to increase website traffic, generate quality leads, or build a loyal customer base, digital marketing plays a vital role. From <Link href="/web-development-company-chennai">SEO-friendly web experiences</Link> and social media to paid advertising and content marketing, digital strategies help businesses grow, compete, and stay relevant in a crowded digital landscape.
</p>
        <p className="dig-para">
        At Trimsel, we empower brands to grow online with powerful digital marketing strategies. As a top digital marketing company in Chennai, we specialize in Search Engine Optimization (SEO), Pay-Per-Click (PPC), Content Marketing and Social Media Marketing (SMM) to drive measurable traffic, quality leads, and higher ROI. Need help aligning channels? Our <Link href="/cloud-consulting-services">cloud consultants</Link> and <Link href="/devops-consulting-services">DevOps architects</Link> ensure your martech stack scales with every campaign while <Link href="/ai-development-company">AI engineers</Link> unlock predictive targeting.
        </p>
        <p className="dig-para">
        From T. Nagar retailers and OMR SaaS scale-ups to Ambattur manufacturers, we tailor channel mixes that reflect Chennai’s unique customer behavior. Expect hyperlocal landing pages, Tamil-and-English ad sets, and analytics dashboards that map every rupee you spend to pipeline created, supported by insights from our <Link href="/blog/how-mobile-apps-grow-business">latest growth playbooks</Link>.
        </p>
        <p className="dig-para">
        The digital landscape changes rapidly with new Google algorithms, evolving user behavior, and dynamic platforms reshaping how businesses grow online. Our SEO experts in Chennai stay ahead of these trends to keep your brand visible, competitive, and conversion-focused. Whether you're a startup or an enterprise, we help you stay on top—see our <Link href="/blog/how-mobile-apps-grow-business">latest marketing insight</Link> for a preview of the playbooks we implement.

        </p>
      </div>
      <div className="col-lg-5 col-md-6">
        <div className="card card-dig">
          <Image
            src="/images/graph.png"
            width={110}
            height={110}
            alt="SEO performance improvement graph"
          />
          <div className="card-dig-details">
            <h2>Struggling to Generate Leads via Google? Get a Free SEO Audit!</h2>

            <form id="home-form" onSubmit={handleSubmit(onSubmitForm)}>
              <div className="md-form mb-3">
                <input
                  {...register("website", {
                    required: {
                      value: true,
                      message: "Website URL is required",
                    },
                  })}
                  type="text"
                  name="website"
                  id="website"
                  className="form-control dig-form"
                  placeholder="Website URL*"
                />
              </div>
              <div className="md-form">
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone number is required",
                    },
                    minLength: {
                      value: 10,
                      message: "Enter a valid mobile number",
                    },
                    maxLength: {
                      value: 11,
                      message: "Enter a valid mobile number",
                    },
                  })}
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control dig-form mb-3"
                  placeholder="Phone Number*"
                />
                <span className="error-design pt-3">
                  {errors?.phone?.message}
                  {errors?.phone?.maxLength?.message}
                  {errors?.phone?.minLength?.message}
                </span>
              </div>
              <div className="md-form">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  type="email"
                  name="email"
                  id="email"
                  className="form-control dig-form"
                  placeholder="Email Address*"
                />
                <span className="error-design pt-3">
                  {errors?.email?.message}
                  {errors?.email?.pattern?.message}
                </span>
              </div>
              <input
                type="submit"
                className="subs-btn my-3"
                value="Submit Now"
              />
              <p className="form-disclaimer">
                By submitting, you agree to hear from Trimsel’s growth team via phone or email and acknowledge our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        <section id="dig-services">
          <div className="container dig-container">
            <Stack direction="horizontal">
              <div className=" badge-kariot-btn">
                <Image
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="Design accent dot"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                <p> WHAT WE DO </p>
              </div>
            </Stack>
            <div className="row">
              <div className="col-lg-4 col-md-6 pt-3">
                <h3 className="dig-abt-heading">Result-Driven Digital Marketing Services in Chennai</h3>
              </div>
              <div className="col-lg-4 col-md-6 pt-3">
                <p className="digi-para">
                We are a leading digital marketing agency in Chennai, offering a wide range of services to help businesses expand their online presence, drive engagement, and generate high-quality leads. Our SEO consultants in Chennai and social media marketing experts use data-driven strategies to maximize brand visibility.
                </p>
              </div>
              <div className="col-lg-4 col-md-7">
                <Button href="/contact-us" className="gif-button mt-3">
                  <Image
                    src="/images/slightly-smiling-face.gif"
                    alt="Smiling Face GIF Image"
                    className="new-smile"
                    width={48}
                    height={48}
                    loading="lazy"
                    unoptimized
                  />
                  <h6 className="smile-heading">
                    <p className=" smile-para">
                      {" "}
                      Talk to a{" "}
                      <span
                        style={{
                          color: "#01aaec",
                          fontSize: "20px",
                          fontFamily: "Gilroy-Semibold",
                        }}
                      >
                        {" "}
                        Digital{" "}
                      </span>{" "}
                    </p>
                    Marketing. Expert{" "}
                    <Image src="/images/gifbtniconarrow.png" alt="Arrow icon" width={32} height={32} loading="lazy" />
                  </h6>
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/seo-icon.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="SEO Optimization icon"
                    />
                    <h3 className="qs-card-heading">SEO Optimization</h3>
                    <p className="qsd-para">
                    Improve your website’s Google rankings with our expert SEO services in Chennai. From on-page optimization and backlink building to technical SEO audits, we drive sustainable organic growth.
                    </p>
                    <Link href="#seo-services">
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/sem-icon.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="SEM Optimization icon"
                    />
                    <h3 className="qs-card-heading">Search Engine Marketing</h3>
                    <p className="qsd-para">
                    Generate instant leads with performance-driven PPC campaigns. Our SEM team manages Google Ads, display ads, and YouTube promotions to ensure high ROI and maximum reach.
                    </p>
                    <Link href="#sem-services">
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/scl-mda.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="Social Media Development icon"
                    />
                    <h3 className="qs-card-heading">Social Media Marketing </h3>
                    <p className="qsd-para">
                    Elevate your brand’s social presence with targeted Facebook, Instagram, and LinkedIn marketing strategies. Our social media team creates compelling content and ad creatives that engage and convert.
                    </p>
                    <Link href="#smm-services">
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/content-marketing.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="Content Marketing icon"
                    />
                    <h3 className="qs-card-heading">Content Marketing </h3>
                    <p className="qsd-para">
                    Deliver meaningful engagement through our content marketing agency in Chennai. From SEO-rich blogs to compelling landing pages and videos, we help you connect with your audience at every stage of the funnel.
                    </p>
                    <Link href="#content-marketing">
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/b2b.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="B2B icon"
                    />
                    <h3 className="qs-card-heading"> B2B & B2C Marketing </h3>
                    <p className="qsd-para">
                    Whether you're targeting other businesses or consumers, we craft tailored digital marketing strategies for both B2B and B2C audiences using LinkedIn, email marketing, and platform-specific campaigns.
                    </p>
                    <Link href="#b2b-marketing">
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/b2c.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="B2C icon"
                    />
                    <h3 className="qs-card-heading"> LinkedIn Marketing </h3>
                    <p className="qsd-para">
                    Build brand authority and connect with decision-makers through LinkedIn marketing. We run sponsored campaigns, content outreach, and lead generation strategies tailored for B2B growth.
                    </p>
                    <Link href="#linkedin-marketing">
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/pay-per-click.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="Pay Per Click Icon"
                    />
                    <h3 className="qs-card-heading">Pay Per Click </h3>
                    <p className="qsd-para">
                    As a pay-per-click advertising company, we create targeted campaigns on Google Ads, Facebook Ads, and Instagram Ads to drive conversions and increase brand exposure.
                    </p>
                    <Link href="#ppc-services">
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/processatm.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="B2B icon"
                    />
                    <h3 className="qs-card-heading"> Local SEO </h3>
                    <p className="qsd-para">
                    Improve your local search visibility and rank in the Google Map Pack. We optimize Google Business Profile (GMB), local citations, and geo-targeted keywords to attract nearby customers.
                    </p>
                    <Link href="#local-seo">
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 pt-4">
                <Card className="dg-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/ico.png"
                      width={70}
                      height={70}
                      className="do-icon pb-3"
                      alt="B2C icon"
                    />
                    <h3 className="qs-card-heading">Instagram & Facebook Ads</h3>
                    <p className="qsd-para">
                    As a top social media marketing company in Chennai, we help you grow brand visibility and generate qualified leads with powerful Instagram Ads and Facebook marketing. Our experts craft tailored campaigns for maximum ROI on both platforms.
                    </p>
                    <Link href="#paid-social">
                      <Image
                        src="/images/Group2495.png"
                        width={56}
                        height={56}
                        className="do-btn-icon"
                        alt="button-icon"
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="digital-service-details" className="py-5">
          <div className="container service-details-container">
            <div className="row">
              <div className="col-lg-8">
                <h2>Chennai-first playbooks for every growth lever</h2>
                <p className="digi-para">
                  Every Trimsel engagement starts with a measurement plan and channel blueprint. Use the quick links below to explore how we tackle specific initiatives before you hop on a strategy call.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Link href="#digital-faq" className="text-link">
                  Read our most asked digital marketing FAQs →
                </Link>
              </div>
            </div>
            <div className="row pt-4 g-4">
              <div className="col-lg-6" id="seo-services">
                <h3>Enterprise & Local SEO</h3>
                <p>
                  Technical clean-ups, entity-based content, and location pages keep T. Nagar, Velachery, and OMR searches flowing into your pipeline. Expect crawl-budget fixes, Core Web Vitals tuning, and conversion-focused copy.
                </p>
                <Link href="/contact-us" className="text-link">Book a technical SEO audit →</Link>
              </div>
              <div className="col-lg-6" id="sem-services">
                <h3>Search Engine Marketing / PPC</h3>
                <p>
                  We build SKAG and Performance Max structures that protect ROAS while launching Chennai + GCC campaigns in parallel. Real-time dashboards show CPL, MER, and quality-score trends.
                </p>
                <Link href="/contact-us" className="text-link">Plan a PPC sprint →</Link>
              </div>
              <div className="col-lg-6" id="smm-services">
                <h3>Social Media & Community</h3>
                <p>
                  From Instagram reels for D2C brands to LinkedIn thought-leadership for SaaS founders, our team crafts creative, paid, and community loops that stay on-message and on-brand.
                </p>
                <Link href="/contact-us" className="text-link">See our social content calendar →</Link>
              </div>
              <div className="col-lg-6" id="content-marketing">
                <h3>Content & Email Engines</h3>
                <p>
                  We pair topic clusters with lifecycle nurture flows so every blog, case study, and drip sequence ladders up to SQLs. Copy is optimized for voice search, featured snippets, and newsletter engagement.
                </p>
                <Link href="/contact-us" className="text-link">Request a content roadmap →</Link>
              </div>
              <div className="col-lg-6" id="b2b-marketing">
                <h3>B2B + ABM Pods</h3>
                <p>
                  Multi-touch campaigns target IT corridors in Thoraipakkam, Bangalore, and Dubai with custom landing pages, enrichment workflows, and SDR-ready intent data.
                </p>
                <Link href="/contact-us" className="text-link">Unlock an ABM pilot →</Link>
              </div>
              <div className="col-lg-6" id="linkedin-marketing">
                <h3>LinkedIn Demand Gen</h3>
                <p>
                  We craft carousel ads, document posts, and conversation ads that speak to CXOs. Expect first-party audience building and CRM syncing so your sales team can react fast.
                </p>
                <Link href="/contact-us" className="text-link">Review our LinkedIn templates →</Link>
              </div>
              <div className="col-lg-6" id="ppc-services">
                <h3>Performance Creative & CRO</h3>
                <p>
                  Trimsel’s creative lab designs thumb-stopping assets, while our CRO specialists run A/B tests on hero sections, chatbots, and checkout flows for incremental revenue wins.
                </p>
                <Link href="/contact-us" className="text-link">Optimize my funnels →</Link>
              </div>
              <div className="col-lg-6" id="local-seo">
                <h3>Local SEO & Map Pack Wins</h3>
                <p>
                  We manage Google Business Profiles, call tracking, and reputation programs so Nungambakkam and Anna Nagar prospects always find you first.
                </p>
                <Link href="/contact-us" className="text-link">Request a location expansion plan →</Link>
              </div>
              <div className="col-lg-6" id="paid-social">
                <h3>Paid Social & Creator Collabs</h3>
                <p>
                  Partner with Chennai creators, deploy Advantage+ Shopping campaigns, and retarget using first-party data to squeeze more revenue from Meta and Instagram.
                </p>
                <Link href="/contact-us" className="text-link">Discuss paid social ideas →</Link>
              </div>
            </div>
          </div>
        </section>
        <section id="digital-results" className="py-5">
          <div className="container results-container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2>Proof our playbooks convert</h2>
                <ul className="result-list">
                  <li><strong>180%</strong> organic traffic lift for an OMR SaaS brand within 5 months.</li>
                  <li><strong>55%</strong> drop in cost-per-lead for a Chennai fintech after restructuring Google Ads.</li>
                  <li><strong>4.2x</strong> ROAS on Meta for a D2C fashion label using AI-generated creatives.</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="testimonial-card">
                  <p>
                    “Trimsel didn’t just run campaigns—they tied every initiative to pipeline. We now have visibility into every touchpoint from ad click to CRM opportunity.”
                  </p>
                  <h5>Shruti Natarajan</h5>
                  <p className="designation">CMO, Chennai-based HealthTech scale-up</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="digi-agency">
          <div className="container digag-container">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <h3 className="dig-agy-heading">
                  {" "}
                  Why Trimsel is the Best Digital Marketing Agency in Chennai for Growth-Driven Brands
                </h3>
                <p className="digi-para">
                We don't just "do digital marketing" — we build digital journeys that drive real business growth. We understand that behind every brand is a story, a goal, and a team striving to make an impact. That’s why our approach goes beyond campaigns and clicks.
                </p>
                <p className="digi-para">
                Our expert digital marketing team helps businesses establish a strong online presence by combining <Link href="/web-development-company-chennai" className="text-link">
  website development
</Link>, SEO optimization, and targeted marketing strategies to maximize visibility and conversions.
                </p>
                <p className="digi-para">
                Our team of <strong>SEO consultants, social media strategists, and PPC experts in Chennai</strong> work like an extension of your business — learning what sets you apart, understanding your audience, and tailoring a strategy that fits like a glove. No copy-paste tactics. No jargon. Just transparent, ROI-focused work that gets noticed.
                </p>
                <p className="digi-para">
                What makes us different? We’re a performance-obsessed team that treats your success as our own. Whether you're a startup seeking visibility or an enterprise aiming to scale, we deliver measurable results through powerful <strong>SEO, Instagram & Facebook ads, LinkedIn marketing</strong>, and conversion-optimized campaigns.
                </p>
                <p className="digi-para">
  While most digital agencies stick to conventional methods, we embrace the future. At Trimsel, we integrate the power of <strong>AI-driven analytics, machine learning algorithms, and real-time marketing automation</strong> to gain deeper insights into user behavior and optimize campaigns for precision. This means your marketing spend goes further — reaching the right people, at the right time, with the right message.
</p>
<p className="digi-para">
  Our tech-savvy approach allows us to predict search trends, analyze social sentiment, and dynamically adjust campaigns for maximum performance. Whether it's an <strong>AI-powered SEO strategy</strong>, chatbot-led lead generation, or smart A/B testing for paid ads, we bring Silicon Valley-level innovation right here to your business in Chennai.
</p>
<p className="digi-para">
          If you're looking for a digital partner — not just another agency — you've just found one.
        </p>
              </div>
              <div
                className="col-lg-4 col-md-4"
                style={{ textAlign: "center" }}
              >
                <Button className="digi-btn" variant="dark">
                See Our Proven Digital Marketing Strategy
                </Button>
                <Image
                  src="/images/mrk-strategy.png"
                  width={422}
                  height={501}
                  alt="Trimsel Digital Marketing Strategy in Chennai"
                  className="mrk-str"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="dig-leverage">
          <div className="container lev-container">
            <div className="row">
              <div className="col-lg-5 col-md-5">
                <h3 className="lev-heading">
                Struggling to Grow Online? Leverage Chennai’s Trusted Digital Marketing Experts
                </h3>
                <Link href="/contact-us" passHref>
                  <button className="btn btn-primary lev-btn">
                  Get a Digital Marketing Strategy Consultation{" "}
                    <Image src="/images/material-symbols_arrow-right-alt.png" alt="Arrow icon" width={28} height={28} loading="lazy" />
                  </button>
                </Link>
              </div>
              <div className="col-lg-7 col-md-7">
                <p className="lev-para">
                Whether you're a startup founder, small business owner, or established enterprise—
          digital marketing is the lifeline of your online growth. But if you're not seeing the 
          leads, engagement, or conversions you expect... something needs to change.
                </p>
                <ul style={{ paddingLeft: "0px" }}>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <Image
                          src="/images/check-circle.png"
                          alt="Check icon"
                          width={18}
                          height={18}
                          loading="lazy"
                        />
                      </span>
                      Is your website getting traffic but not converting into leads or sales?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <Image
                          src="/images/check-circle.png"
                          alt="Check icon"
                          width={18}
                          height={18}
                          loading="lazy"
                        />
                      </span>
                      Have your Google rankings plateaued despite investing in SEO?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <Image
                          src="/images/check-circle.png"
                          alt="Check icon"
                          width={18}
                          height={18}
                          loading="lazy"
                        />
                      </span>
                      Are your Facebook and Instagram ads burning budget without delivering ROI?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <Image
                          src="/images/check-circle.png"
                          alt="Check icon"
                          width={18}
                          height={18}
                          loading="lazy"
                        />
                      </span>
                      Does your brand lack visibility across search engines and social platforms?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <Image
                          src="/images/check-circle.png"
                          alt="Check icon"
                          width={18}
                          height={18}
                          loading="lazy"
                        />
                      </span>
                      Do you feel overwhelmed trying to manage SEO, social media, content, and ads?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <Image
                          src="/images/check-circle.png"
                          alt="Check icon"
                          width={18}
                          height={18}
                          loading="lazy"
                        />
                      </span>
                      Are your competitors outranking you and dominating your niche online?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <img
                          src="/images/check-circle.png"
                          alt="check-icon"
                          width={18}
                        />
                      </span>
                      Is your sales pipeline running dry because of inconsistent digital outreach?
                    </p>
                  </li>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <img
                          src="/images/check-circle.png"
                          alt="check-icon"
                          width={18}
                        />
                      </span>
                      Do you want to improve your lead generation but don’t know where to start?
                    </p>
                  </li>
                </ul>
                <p className="lev-para">
                If you said YES to any of these, it’s time to take action. At Trimsel, we offer 
          data-driven digital marketing services in Chennai—including SEO, Social Media 
          Marketing, PPC Advertising, and Content Marketing—to help you overcome these 
          challenges and achieve real, measurable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="qs-sec-cta">
  <div className="container">
    <Card className="dig-cta my-5">
      <Card.Body>
        <div className="row">
          <div className="col-lg-7 col-md-8 col-12">
            <Image src="/images/line.png" alt="Decorative line" width={64} height={8} loading="lazy" />
            <h2 className="cldcta-heading pt-2">
              Not Sure How to Start with Digital Marketing? Let’s Build a Strategy That Works for You.
            </h2>
            <p className="cta-description">
              Whether you're a startup or scaling business, Trimsel's digital marketing experts in Chennai are ready to help. From SEO to social media and PPC, we’ll craft a custom strategy to grow your brand online.
            </p>
            <Link href="/contact-us" passHref>
              <button className="digcta-button btn-lg btn-info mt-3">
                Let's Boost Your Business!
                <span className="icon">
                  <Image
                    src="/images/arow-white.png"
                    alt="Arrow White Icon"
                    width={28}
                    height={28}
                    loading="lazy"
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
</section>
        <section id="client" className="client-section">
        <div className="container mt-5">
          <h2 className="client-title">
            Trusted By Customers, Partners and The Industry
          </h2>
          <p className="clients-text">
            At Trimsel, there is continuous learning that happens as we work on
            various projects. We also love to update and upgrade with the latest
            innovations in the field of technology and apps.
          </p>
          <ClientLogo />
        </div>
      </section>
  <section id="digital-insights" className="home-insights py-5">
    <div className="container">
      <div className="d-flex align-items-center">
        <div className="badge-abot-btn">
          <Image src="/images/Rectangle-kariot.png" className="me-2" width={15} height={15} alt="" aria-hidden="true" loading="lazy" />
          <p> LATEST DIGITAL INSIGHTS </p>
        </div>
      </div>
      <div className="row pt-4 g-4">
        {marketingInsights.map((article) => (
          <div className="col-lg-6" key={article.title}>
            <Card className="insight-card h-100">
              <Card.Body>
                <p className="insight-tag">{article.tag}</p>
                <h3 className="insight-title">
                  <Link href={article.href}>{article.title}</Link>
                </h3>
                <p className="insight-excerpt">{article.excerpt}</p>
                <Link href={article.href} className="about-btn" aria-label={`Read ${article.title}`}>
                  Read More
                  <Image src="/images/material-symbols_arrow-right-alt.png" width={18} height={18} alt="" loading="lazy" />
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </section>

  <ContactForm heading="Want More Traffic & Leads?" subText="Talk to our growth strategists about SEO, PPC and content plans that actually drive results."/>
      <section id="digital-faq">
  <div className="container faq-container">
    <h2 className="faq-heading">Frequently Asked Questions</h2>
    <Accordion defaultActiveKey="0" flush className="py-5">

      <Accordion.Item eventKey="0" className="pb-3">
        <Accordion.Header>What is digital marketing and how can it help my business?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
          Using websites, social media, and search engines to advertise your business is known as digital marketing. It increases website traffic, creates quality leads, raises brand exposure, and eventually boosts income.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="pb-3">
        <Accordion.Header>How does SEO work, and why is it important for Chennai-based businesses?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
          SEO works by optimizing your website’s content, structure, and authority so that it ranks higher in search engine results. This makes it easier for potential customers to find you online. It's essential because it drives organic traffic, builds credibility, and helps your business grow sustainably without relying solely on paid advertising.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="pb-3">
        <Accordion.Header>Do you offer Local SEO services?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes, we specialize in Local SEO to help your business appear in local searches and Google Maps results. Whether you're a store, clinic, or service provider in Chennai, our Local SEO strategy can significantly increase your foot traffic and leads.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className="pb-3">
        <Accordion.Header>What platforms do you cover under social media marketing?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            We manage and optimize campaigns across Instagram, Facebook, LinkedIn, and other platforms. Our strategies include Instagram Ads, Facebook retargeting, LinkedIn lead generation, and more to increase your brand’s online engagement.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className="pb-3">
        <Accordion.Header>How are your SEO consultants in Chennai different from others?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Our SEO consultants go beyond just keywords. We dive into technical SEO, content strategy, link-building, and analytics to deliver real, measurable growth — not just rankings. We also tailor our approach for local and niche industries.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className="pb-3">
        <Accordion.Header>Can you help with lead generation through Google Ads or PPC?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Absolutely. As a PPC and pay-per-click advertising company, we create highly targeted ad campaigns on Google and other platforms to bring in high-quality leads within your budget. Our goal is to maximize your ROI.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6" className="pb-3">
        <Accordion.Header>How do I know which digital marketing service I need?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            If you're not sure where to begin, our experts will assess your current digital presence and recommend a strategy that fits your business goals — whether it’s SEO, social media management, or paid advertising.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7" className="pb-3">
        <Accordion.Header>Is social media marketing effective for B2B businesses?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes. While B2C often uses Instagram and Facebook, B2B businesses benefit from LinkedIn marketing and targeted content strategies. We’ve helped B2B clients generate leads through educational content and professional networking ads.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8" className="pb-3">
        <Accordion.Header>Do you offer content marketing as part of your services?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            Yes, we do. Our content marketing strategy includes blog posts, landing pages, email campaigns, and social media content — all designed to boost SEO performance and engage your target audience.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9" className="pb-3">
        <Accordion.Header>Why is Trimsel considered one of the top digital marketing agencies in Chennai?</Accordion.Header>
        <Accordion.Body>
          <p className="accordion-para">
            At Trimsel, we blend creativity with data-backed strategies. Our experience across SEO, PPC, and social media combined with local market insights makes us one of the most trusted digital marketing partners for Chennai-based businesses.
          </p>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  </div>
</section>

      {/* <ContactModal title="Need A Website To Digitialize Your Business?" /> */}
      <Footer />
    </>
  );
}
