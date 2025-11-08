import Headers from "../components/headers";
import Link from 'next/link'
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel'
import { useForm, Controller } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Footer from '../components/footer'
import { NextSeo } from 'next-seo';
import Head from "next/head";
import { postJson } from "../lib/api";
// import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
// import ReCAPTCHA from "react-google-recaptcha";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";
import dynamic from 'next/dynamic';

const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });

const CONTACT_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.trimsel.com/#local",
    "name": "Trimsel - AI Digital Transformation Experts",
    "url": "https://www.trimsel.com/",
    "logo": "https://www.trimsel.com/logo.png",
    "image": "https://www.trimsel.com/images/contact-hero.jpg",
    "email": "contact@trimsel.com",
    "telephone": "+91 72008 41581",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 21-B, 5th Cross St, South Phase, Thiru Vi Ka Industrial Estate, Guindy",
      "addressLocality": "Chennai",
      "addressRegion": "TN",
      "postalCode": "600032",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }],
    "hasMap": "https://www.google.com/maps/place/Trimsel/",
    "sameAs": [
      "https://www.linkedin.com/company/trimsel",
      "https://www.instagram.com/trimsel_softwares/",
      "https://in.pinterest.com/trimsel/"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 72008 41581",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91 72008 41581",
        "contactType": "AI consulting",
        "contactOption": ["HearingImpairedSupported"],
        "areaServed": ["IN","AE","SG","US"],
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91 72008 41581",
        "contactType": "sales",
        "contactOption": ["TollFree","WhatsApp"],
        "areaServed": ["IN","AE","US"],
        "availableLanguage": ["English"]
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.trimsel.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://www.trimsel.com/contact-us"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How soon will Trimsel respond to a contact request?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI delivery team responds to every enquiry within one business day and usually schedules discovery calls within 48 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Which digital transformation services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We design and build AI copilots, mobile apps, cloud-native platforms, and automation workflows tailored to modernize your business processes."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sign NDAs before sharing project details?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We are happy to sign a mutual NDA before discussing sensitive information and we can use Trimsel’s template or yours."
        }
      }
    ]
  }
];


export default function Contact() {

    const {register, handleSubmit, formState : {errors}, reset, control} = useForm({
      defaultValues: {
        mobile: "",
      },
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const [showThankYou, setShowThankYou] = useState(false);

    const handleThankYouClose = () => {
      setShowThankYou(false);
      setIsSubmitted(false);         // ✅ reset success state
      setRecaptchaToken("");       // ✅ reset captcha
    };
    const handleThankYouShow = () => setShowThankYou(true);

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const handleCaptchaChange = (token) => {
      setRecaptchaToken(token);
    };

    async function onSubmitForm(values) {
      if (!recaptchaToken) {
        setMessage("Please verify you are not a robot.");
        return;
      }
    
      const { mobile, ...restValues } = values;
      const payload = {
        ...restValues,
        phone: mobile,
        mobile,
        recaptchaToken,
      };

      setMessage("");
    
      try {
        await postJson("/api/contact", payload);
        setIsSubmitted(true);
        handleThankYouShow();
        reset();
        setRecaptchaToken("");
      } catch (error) {
        setMessage("Failed to send your message. Please try again.");
      }
    }

    return (
        <>
        <NextSeo
  title="Contact Trimsel | AI-Powered Digital Transformation & App Development"
  description="Talk to Trimsel’s Chennai team about AI-driven digital transformation, mobile apps, and cloud products. Book a strategy call to modernize your business."
  canonical="https://www.trimsel.com/contact-us"
  openGraph={{
    type: 'website',
    url: 'https://www.trimsel.com/contact-us',
    title: 'Contact Trimsel | AI-Powered Digital Transformation & App Development',
    description: 'Connect with Trimsel to plan AI-fuelled digital transformation, Android/iOS builds, or cloud-native programs.',
    locale: 'en_IN',
    site_name: 'Trimsel',
    images: [
      {
        url: 'https://www.trimsel.com/images/contact-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Trimsel Chennai office contact hero image',
      },
    ],
  }}
  twitter={{
    cardType: "summary_large_image",
    handle: "@TrimselSoftwares",
    site: "@TrimselSoftwares",
  }}
  additionalMetaTags={[
    {
      name: "twitter:title",
      content: "Contact Trimsel’s Digital Transformation Specialists",
    },
    {
      name: "twitter:description",
      content:
        "Book a consultation with Trimsel’s Chennai software team for AI, digital transformation, mobile, web, cloud, or automation projects.",
    },
    {
      name: "twitter:image:alt",
      content: "Trimsel Chennai office contact hero image",
    },
  ]}
/>
        <Head>
          {CONTACT_JSON_LD.map((schema, index) => (
            <script
              key={`contact-schema-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))}
        </Head>
        <main>
        
        <section className='hero-cntct'>
        <Headers />        
            <div className='overlay'></div>
            <section className="hero">
  <div className="container pt-3">
    <div id="apps">
      <div className="titles">
        <div className="whiteLink">
          <p className="breadcrumbs">
            <Link href="/">Home</Link> <span> &#x2027; </span> Contact Us
          </p>
        </div>
        <div className="cafes-inner col-lg-9 cntct-cafe">
          <h1 style={{ color: "#fff" }}>
          Contact Trimsel’s AI Digital Transformation Team
          </h1>
        </div>
        <p className="cntct-mozart">
          Looking for{" "}
          <Link href="/mobile-app-development-chennai" style={{ color: "orange" }}>
            AI-driven mobile app development
          </Link>{" "}
          or{" "}
          <Link href="/cloud-consulting-services" style={{ color: "orange" }}>
            cloud modernization
          </Link>
          ? Talk to our architects about automation, copilots, or a modernization sprint, or email{" "}
          <Link href="mailto:contact@trimsel.com" style={{ color: "orange" }}>
            contact@trimsel.com
          </Link>.
        </p>
        <p className="cntct-mozart">
          We blend strategy, design, engineering, and responsible AI so enterprises in Chennai and worldwide can accelerate digital transformation safely. Expect a response in under one business day and see how our <Link href="/devops-consulting-services" style={{ color: "orange" }}>DevOps</Link> and <Link href="/digital-marketing-company-chennai" style={{ color: "orange" }}>growth</Link> teams stay aligned with every engagement.
        </p>
      </div>
    </div>
  </div>
</section>
</section>
        <section className="contact-intro py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <h2>Why brands contact Trimsel</h2>
                <p>
                  Whether you need to launch a new SaaS product, migrate legacy workloads to the cloud, or infuse AI copilots into your workflows, our consultants craft roadmaps that balance velocity with governance. Every engagement starts with a discovery call where we align on outcomes, data readiness, and success metrics so your investment in digital transformation compounds over time.
                </p>
                <p>
                  Share a brief below and we will assemble the right specialists—solution architects, UX strategists, AI engineers, and DevSecOps—to guide you from proof of concept to scalable adoption.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id='contact' className='py-4 my-4'>
            <div className='container'>
                <div className='cntct-container'>
                    <h3 className='form-heading'><Image src='/images/Group235.png' alt='' role='presentation' aria-hidden='true' width={32} height={32} /> Let's level up your brand, together  </h3>
                    <p className='form-para'>We confirm receipt instantly and schedule discovery calls within 24 hours.</p>
                    <ul className="form-benefits">
                      <li>🔒 Optional NDA before project details</li>
                      <li>📅 Tailored roadmap covering AI, cloud, or DevOps</li>
                      <li>📊 Access to recent case studies & success metrics</li>
                    </ul>
            
                <div className='row'>
                    <div className='col-lg-8 col-md-10'>
                        <form id='home-form' onSubmit={handleSubmit(onSubmitForm)}>
                        {message && <p className="form-message">{message}</p>}
                    <div className='row py-3'>
                    <div className='col-lg-6 py-3'>
                      <div className='md-form ps-3'>
                        <label htmlFor='name' className='labels'>
                          <h5>Full Name *</h5>
                        </label>
                        <input 
                        {...register('name', {required : {
                          value : true,
                          message : "Your name is required",
                        },
                      })}
                      type = 'text'
                      id ='name'
                      name ='name'
                      className='form-control'
                      placeholder='Enter your Full Name'
                      />
                      <span className='error-design pt-3'>
                        {errors?.name?.message}
                      </span>
                      </div>
                    </div>
                    <div className="col-lg-6 py-3">
  <div className="md-form pe-3">
    <label htmlFor="phone" className="labels">
      <h5>Mobile Number *</h5>
    </label>
    <div className="phone-input-container">
    <Controller
      name="mobile"
      control={control}
      rules={{ required: "Mobile number is required" }}
      render={({ field }) => (
        <PhoneInput
          country={'in'}
          enableSearch={true}
          value={field.value}
          onChange={(phone) => field.onChange(phone)}
          inputProps={{
            name: 'mobile',
            required: true,
            id: 'phone',
            'aria-label': 'Mobile number',
          }}
          inputStyle={{
            width: '100%',
            height: '58px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            paddingLeft: '45px',
          }}
          containerStyle={{ width: '100%' }}
        />
      )}
    />
{errors?.mobile && (
  <span className="error-design pt-3">{errors.mobile.message}</span>
)}

    </div>
  </div>
</div>
                      <div className='col-lg-6 py-3'>
                        <div className='md-form ps-3'>
                          <label htmlFor='email' className='labels'>
                            <h5>Email *</h5>
                          </label>
                          <input 
                          {...register('email', {required : {
                            value : true,
                            message : "Email id is required",
                          },
                          pattern : {
                            value : /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                            message : "Enter a valid email address"
                          },
                        })}
                        type = "email"
                        name = 'email'
                        id   = 'email'
                        className='form-control'
                        placeholder='example@gmail.com'
                        />
                        <span className='error-design pt-3'>
                          {errors?.email?.message}
                          {errors?.email?.pattern?.message}
                        </span>
                        </div>
                      </div>
                      {/* <div className='col-lg-6 py-3'>
                        <div className='md-form ps-3'>
                          <label htmlFor='skype' className='labels'>
                            <h5>Skype ID</h5>
                          </label>
                          <input 
                          {...register('skype')}
                          type = 'text'
                          name = 'skype'
                          id   = 'skype'
                          className= 'form-control'
                          placeholder='Enter your skype id'
                          />
                        </div>
                      </div> */}
                      <div className='col-lg-12 py-3'>
                        <div className='md-form ps-3'>

                          <label htmlFor='company' className='labels'>
                            <h5>Company</h5>
                          </label>
                          <input 
                          {...register('company')}
                          type = 'text'
                          name = 'company'
                          id   = 'company'
                          className='form-control'
                          placeholder = 'Tech, Marketing, Agency'
                          />
                        </div>
                      </div>
                      
                      <div className='col-lg-12 py-3'>
                        <div className='md-form ps-3'>

                          <label htmlFor = 'message' className='labels'>
                            <h5>Your Message</h5>
                          </label>
                          <textarea
  {...register('message', {
    required: {
      value: true,
      message: 'Please describe your project',
    }
  })}
  name="message"
  id="message"
  className="form-control lg-textarea"
  placeholder="Describe your Project"
/>
<span className="error-design pt-3">{errors?.message?.message}</span>

                        </div>
                      </div>
                      <ReCAPTCHA
  sitekey={siteKey}
  onChange={handleCaptchaChange}
  onExpired={() => setRecaptchaToken(null)}
/>
                      <div className='col-lg-12 py-3'>
                        <div className='text-right text-md-end'>
                          <input type='submit' className='sbmt-btn' value='Book a Digital Transformation Call' disabled={!recaptchaToken}/>
                        </div>
                      </div>
                  </div>
                </form>
            </div>
            <div className='col-lg-4 col-md-6'>
                <Image
                  src='/images/Letstalk.png'
                  className='cntct-form-bg'
                  alt="Let's Talk - Contact Trimsel"
                  width={400}
                  height={400}
                  loading="lazy"
                />
            </div>
        </div>
        </div>
    </div>
</section>
<Modal show={showThankYou} onHide={handleThankYouClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="contact-body text-center px-4">
    {isSubmitted && (
  <div className="thank-you fade-in">
    <div className="container thank-container">
      <Image
        src="/images/astronaut-thanking.gif"
        alt="Astronaut Thanking For Form Submit"
        className="gif-thanks"
        width={300}
        height={300}
      />
      <h2 className="thank-heading">Thank you for Contacting us!</h2>
      <p className="thank-para">
        We have received your message. We'll reach you out immediately!
      </p>
      <div className="thank-links">
        <Link
          href="/cloud-consulting-services"
          style={{ textDecoration: "none" }}
          className="me-3"
          aria-label="View Trimsel cloud consulting services"
        >
          <Button variant="outline-primary" className="mt-3 mb-2">
            Explore Cloud Services
          </Button>
        </Link>
        <Link
          href="/blog/how-mobile-apps-grow-business"
          style={{ textDecoration: "none" }}
          className="me-3"
          aria-label="Read Trimsel insights"
        >
          <Button variant="outline-secondary" className="mt-3 mb-2">
            Read Our Latest Insight
          </Button>
        </Link>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-6 follow-col">
          <h4 className="contact-addrs">Follow Us:</h4>
          <Link href="https://www.facebook.com/trimsel.softwares" target="_blank" rel="noopener noreferrer">
            <Image className="social-icon" src="/images/fb-icon.png" alt="Facebook Icon" width={32} height={32} loading="lazy" />
          </Link>
          <Link href="https://www.instagram.com/trimsel/" target="_blank" rel="noopener noreferrer">
            <Image className="social-icon" src="/images/insta-icon.png" alt="Instagram Icon" width={32} height={32} loading="lazy" />
          </Link>
          <Link href="https://www.linkedin.com/company/trimsel" target="_blank" rel="noopener noreferrer">
            <Image className="social-icon" src="/images/linkedin-icon.png" alt="LinkedIn Icon" width={32} height={32} loading="lazy" />
          </Link>
          <Link href="https://in.pinterest.com/trimsel/" target="_blank" rel="noopener noreferrer">
            <Image className="social-icon" src="/images/pinterest-icon.png" alt="Pinterest Icon" width={32} height={32} loading="lazy" />
          </Link>
        </div>
        <div className="col-lg-6 col-md-6 col-6">
          <div className="card thank-card">
            <Image src="/images/scan.png" width={159} height={49} alt="whatsapp-icon" loading="lazy" />
            <Image src="/images/trimselqr.png" width={90} height={90} alt="Trimsel Whatsapp QR Code" className="wht-qr" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
)}
</Modal.Body>
</Modal>
<section id="office-dtls" className="py-5">
  <div className="container">
    <h2 className="office-heading">📍 Our Global Offices</h2>

    <div className="row office-row">
      {/* Office Details */}
      <div className="col-lg-5 col-md-6 office-column">
        <div className="card office-card shadow-sm">
          <div className="row align-items-center">
            <div className="col-4 text-center">
              <Image
                src="/images/iconoffice.png"
                className="office-icon"
                alt="Trimsel office icon"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
            <div className="col-8">
              <h3 className="office-heading">🇮🇳 India</h3>
              <h4 className="office-addr">
                {/* <img
                  src="/images/marker-icon.png"
                  className="marker-icon"
                  alt="Location marker icon"
                /> */}
                {/* <Link
                  href="https://maps.google.com/?q=Trimsel+Softwares,+Guindy,+Chennai+600032"
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  aria-label="Open Trimsel location on Google Maps"
                >
                  Guindy, Chennai
                </Link> */}
              </h4>
            </div>
          </div>
        </div>

        {/* Office Name */}
        <h3 className="office-name pt-3">Trimsel Softwares</h3>
        <p className="office-para">
          <Link
            href="https://maps.google.com/?q=Trimsel+Softwares,+Guindy,+Chennai+600032"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Trimsel location on Google Maps"
          >
            21B 5th Cross St, South Phase, Thiru VI KA Industrial Estate, Guindy,
            Chennai, Tamil Nadu 600032
          </Link>
        </p>

        {/* Call Now */}
        <h3 className="office-call pt-3">📞 Call Us Now!</h3>
        <Link href="tel:+917200841581" className="office-contact" aria-label="Call Trimsel Softwares Chennai">
          (+91)-720-084-1581
        </Link>
      </div>

      {/* Interactive Map */}
      <div className="col-lg-7 col-md-6">
        <div
          className="office-map"
          aria-label="Interactive map showing Trimsel Chennai office"
          style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.335511318364!2d80.20822167602537!3d13.007958213127026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52673c1c44b25b%3A0xc9a77bdb8ad623f1!2sTrimsel%20Softwares!5e0!3m2!1sen!2sin!4v1699363200000!5m2!1sen!2sin"
            title="Trimsel Softwares map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contact-insights" className="home-insights py-5">
  <div className="container">
    <div className="d-flex align-items-center">
      <div className="badge-abot-btn">
        <Image src="/images/Rectangle-kariot.png" className="me-2" width={15} height={15} alt="" aria-hidden="true" loading="lazy" />
        <p> LATEST INSIGHTS </p>
      </div>
    </div>
    <div className="row pt-4 g-4">
      {[{title: "5 Easy Ways a Mobile App Can Grow Your Business", excerpt: "Understand the product and GTM frameworks we bring to strategy calls.", href: "/blog/how-mobile-apps-grow-business", tag: "Growth Playbook"}, {title: "Explore Trimsel’s Cloud & AI Guides", excerpt: "Browse more articles on DevOps, automation, and digital transformation to prepare for our chat.", href: "/blog", tag: "Digital Insights"}].map((article) => (
        <div className="col-lg-6 col-md-6 col-12" key={article.title}>
          <Card className="insight-card h-100">
            <Card.Body>
              <p className="insight-tag">{article.tag}</p>
              <h3 className="insight-title">
                <Link href={article.href}>{article.title}</Link>
              </h3>
              <p className="insight-excerpt">{article.excerpt}</p>
              <Link href={article.href} className="insight-link" aria-label={`Read ${article.title}`}>
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

<section className="contact-faq py-5">
  <div className="container">
    <h2>Contact & Digital Transformation FAQs</h2>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <h3>How fast will you reply?</h3>
        <p>We confirm receipt instantly and a strategist follows up within one business day to schedule your discovery call.</p>
      </div>
      <div className="col-lg-4 col-md-6">
        <h3>What AI services can I discuss?</h3>
        <p>Bring us your ideas for AI copilots, predictive dashboards, automation workflows, or full-stack app modernization—our team bridges strategy and delivery.</p>
      </div>
      <div className="col-lg-4 col-md-6">
        <h3>Is my data protected?</h3>
        <p>Yes. We work under NDA, follow secure SDLC practices, and can deploy to private cloud or on-prem per your compliance needs.</p>
      </div>
    </div>
  </div>
</section>

<Footer />
</main>
</>
    )
}
