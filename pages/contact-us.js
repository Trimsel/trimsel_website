import Head from 'next/head'
import Headers from "../components/headers";
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Footer from '../components/footer'
import { NextSeo } from 'next-seo';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import ReCAPTCHA from "react-google-recaptcha";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";


export default function Contact() {

    const {register, handleSubmit, formState : {errors}, reset, setValue} = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [showThankYou, setShowThankYou] = useState(false);

    const handleThankYouClose = () => {
      setShowThankYou(false);
      setIsSubmitted(false);         // ✅ reset success state
      setRecaptchaToken(null);       // ✅ reset captcha
    };
    const handleThankYouShow = () => setShowThankYou(true);

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setValue('selectOption', event.target.value);
    };

    const handleCaptchaChange = (token) => {
      setRecaptchaToken(token);
    };

    async function onSubmitForm(values) {
      const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`;
    
      if (!recaptchaToken) {
        setMessage("Please verify you are not a robot.");
        return;
      }
    
      const payload = {
        ...values,
        phone,
        service: selectedOption,
        recaptchaToken,
      };
    
      try {
        await axios.post(apiUrl, payload);
        setIsSubmitted(true);
        handleThankYouShow();
        reset();
      } catch (error) {
        setMessage("Failed to send your message. Please try again.");
      }
    }

    return (
        <>
        <NextSeo
  title="Contact Trimsel | Leading Mobile App Development Company in Chennai"
  description="Get in touch with Trimsel, a top mobile app development company in Chennai. We build iOS, Android & cross-platform apps. Book your free consultation today!"
  canonical="https://www.trimsel.com/contact-us"
  openGraph={{
    type: 'website',
    url: 'https://www.trimsel.com/contact-us',
    title: 'Contact Trimsel | Leading Mobile App Development Company in Chennai',
    description: 'Contact Trimsel for mobile app development in Chennai. Let’s build your Android, iOS, or cross-platform app today!',
    images: [
      {
        url: 'https://www.trimsel.com/images/contact-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Trimsel Contact Page',
      },
    ],
    site_name: 'Trimsel',
  }}
  additionalJsonLd={[
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Trimsel - Mobile App Development Experts",
      "telephone": "+91 72008 41581",
      "description": "Trimsel is a leading mobile app development company in Chennai, providing world-class solutions for iOS, Android, and web applications.",
      "url": "https://www.trimsel.com/contact-us",
      "logo": "https://www.trimsel.com/logo.png",
      "image": "https://www.trimsel.com/images/contact-hero.jpg",
      "email": "contact@trimsel.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 72008 41581",
        "contactType": "Customer Service",
        "areaServed": "Worldwide",
        "availableLanguage": ["English"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 21-B, 5th Cross St, South Phase, Thiru Vi Ka Industrial Estate, Guindy",
        "addressLocality": "Chennai",
        "addressRegion": "TN",
        "postalCode": "600032",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Chennai",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.0827",
            "longitude": "80.2707"
          }
        },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Australia" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "Germany" },
        { "@type": "Country", "name": "France" },
        { "@type": "Country", "name": "Netherlands" },
        { "@type": "Country", "name": "Singapore" },
        { "@type": "Country", "name": "Malaysia" },
        { "@type": "Country", "name": "Kenya" },
        { "@type": "Country", "name": "South Africa" }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "13.0827",
        "longitude": "80.2707"
      },
      "hasMap": "https://www.google.com/maps/place/Trimsel/@13.0125615,80.1988776,904m",
      "sameAs": [
        "https://www.linkedin.com/company/trimsel",
        "https://www.instagram.com/trimsel_softwares/"
      ]
    }
  ]}
  additionalMetaTags={[
    {
      name: "robots",
      content: "noindex, nofollow", // ← allow Google to index the contact-us page
    },
  ]}
/>

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
          Have a project? We would love to help.
        </div>
        <p className="cntct-mozart">
          Looking for{" "}
          <Link href="/mobile-app-development-chennai">
            mobile app development
          </Link>
          ? Contact our expert developers today or email us at{" "}
          <Link href="mailto:contact@trimsel.com">
            contact@trimsel.com
          </Link>.
        </p>
      </div>
    </div>
  </div>
</section>
</section>
        <section id='contact' className='py-4 my-4'>
            <div className='container'>
                <div className='cntct-container'>
                    <h3 className='form-heading'><img src='/images/Group235.png' alt='blue image'/> Let's level up your brand, together  </h3>
                    <p className='form-para'>We guarantee to get back to you within a business day</p>
            
                <div className='row'>
                    <div className='col-lg-8 col-md-8'>
                        <form id='home-form' onSubmit={handleSubmit(onSubmitForm)}>
                        {message && <p className="form-message">{message}</p>}
                        <p className='mt-5 form-lbl-para'> I'm intrested in :</p>
                        <div className='options'>
                        <input 
                        {...register('product')}
                        type = "radio"
                        name = "selectOption"
                        value= "Product Development"
                        id   = "product"
                        checked={selectedOption === 'Product Development'}
                        onChange={handleOptionChange}
                        className='form-control'
                        placeholder='product'
                        />
                        <label htmlFor='product' className='radio-style mt-3' >Product Development</label>

                        <input 
                        {...register('mobile-app')}
                        type = "radio"
                        name = "selectOption"
                        value= "Mobile App Development"
                        id   = "mobile-app"
                        checked={selectedOption === 'Mobile App Development'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor='mobile-app' className='radio-style mt-3' >Mobile App Development</label>

                        <input 
                        {...register('cloud-devops')}
                        type = "radio"
                        name = "selectOption"
                        value= "Cloud and DevOps"
                        id   = "cloud-devops"
                        checked={selectedOption === 'Cloud and DevOps'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor='cloud-devops' className='radio-style mt-3' >Cloud & DevOps</label>
                        <input 
                        {...register('website-development')}
                        type = "radio"
                        name = "selectOption"
                        value= "Website Development"
                        id   = "website-development"
                        checked={selectedOption === 'Website Development'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor='website-development' className='mt-3 radio-style' >Website Development</label>
                        <input 
                        {...register('digital-marketing')}
                        type = "radio"
                        name = "selectOption"
                        value= "Digital Marketing"
                        id   = "digital-marketing"
                        checked={selectedOption === 'Digital Marketing'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor='digital-marketing' className='mt-3 radio-style' >Digital Marketing</label>
                        {/* <input 
                        {...register('blockchain-development')}
                        type = "radio"
                        name = "selectOption"
                        value= "Blockchain Development"
                        id   = "blockchain-development"
                        checked={selectedOption === 'Blockchain Development'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor='blockchain-development' className='mt-3 radio-style' >Block Chain Development</label> */}
                        {/* <input 
                        {...register('quality-testing')}
                        type = "radio"
                        name = "selectOption"
                        value= "Quality Engineering and Technology"
                        id   = "quality-testing"
                        checked={selectedOption === 'Quality Engineering and Technology'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor='quality-testing' className='mt-3 radio-style' >Quality Engineering & Technology</label> */}
                        <input 
                        {...register('other')}
                        type = "radio"
                        name = "selectOption"
                        value= "Other"
                        id   = "other"
                        checked={selectedOption === 'Other'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor='other' className='mt-3 radio-style' >Other</label>   
                    </div>
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
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={setPhone}
        inputProps={{
          name: 'phone',
          required: true,
          className: 'form-control popup-form',
        }}
        inputStyle={{ width: '100%' }}
      />
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
                          {...register('message')}
                          type = 'textarea'
                          name = 'message'
                          id   = 'message'
                          className='form-control lg-textarea'
                          placeholder='Describe your Project'
                          />

                        </div>
                      </div>
                      <ReCAPTCHA
  sitekey={siteKey}
  onChange={handleCaptchaChange}
  onExpired={() => setRecaptchaToken(null)}
/>
                      <div className='col-lg-12 py-3'>
                        <div className='text-right text-md-end'>
                          <input type='submit' className='sbmt-btn' disabled={!recaptchaToken}/>
                        </div>
                      </div>
                  </div>
                </form>
            </div>
            <div className='col-lg-4 col-md-4'>
                <img src='/images/Letstalk.png' className='cntct-form-bg' alt="Let's Talk - Contact Trimsel"/>
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
      <img
        src="/images/astronaut-thanking.gif"
        alt="Astronaut Thanking For Form Submit"
        className="gif-thanks"
      />
      <h2 className="thank-heading">Thank you for Contacting us!</h2>
      <p className="thank-para">
        We have received your message. We'll reach you out immediately!
      </p>
      <h6>
        <Link
          href="/"
          passHref
          style={{ textDecoration: "none" }}
          className="me-3"
        >
          <Button variant="outline-primary" className="mt-3 mb-2">
            Back To Homepage
          </Button>
        </Link>
      </h6>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-6 follow-col">
          <h4 className="contact-addrs">Follow Us:</h4>
          <Link href="https://www.facebook.com/trimsel.softwares" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src="/images/fb-icon.png" alt="Facebook Icon" />
          </Link>
          <Link href="https://www.instagram.com/trimsel/" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src="/images/insta-icon.png" alt="Instagram Icon" />
          </Link>
          <Link href="#" target="_blank">
            <img className="social-icon" src="/images/linkedin-icon.png" alt="Linkedin Icon" />
          </Link>
          <Link href="https://in.pinterest.com/trimsel/" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src="/images/pinterest-icon.png" alt="Pinterest Icon" />
          </Link>
        </div>
        <div className="col-lg-6 col-md-6 col-6">
          <div className="card thank-card">
            <img src="/images/scan.png" width={159} height={49} alt="whatsapp-icon" />
            <img src="/images/trimselqr.png" width={90} height={90} alt="Trimsel Whatsapp QR Code" className="wht-qr" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
)}
</Modal.Body>
</Modal>
{/* <section id='office-dtls'>
    <div className='container'>
        <h2 className='office-heading'>Our Offices</h2>
        <div className='row office-row'>
            <div className='col-lg-5 col-md-5 office-column'>
                <div className='card office-card'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-6'>
                            <img src='/images/iconoffice.png' />
                        </div>
                        <div className='col-lg-8 col-md-6 col-6'>
                            <h3 className='office-heading'>INDIA</h3>
                            <h4 className='office-addr'><img src = '/images/marker-icon.png' />Guindy , Chennai</h4>
                        </div>
                    </div>
                </div>
                <h3 className='office-name pt-3'>
                    <img src='/images/Rectangle116.png' /> Trimsel Softwares
                </h3>
                <p className='office-para'>
                    21B 5th Cross St, South PhaseThiru VI KA Industrial Estate,Guindy, Chennai, Tamilnadu 600032
                </p>
                <h2 className='offices-heading pt-3'>Call Us Now !</h2>
                <Link href="tel:+917200841581">(+91)-720-084-1581</Link>
            </div>
            <div className='col-lg-7 col-md-7'>
                <img src='/images/Group2529.png' className='office-map' />
            </div>
        </div>
    </div>
</section> */}
<section id="office-dtls" className="py-5">
  <div className="container">
    <h2 className="office-heading">📍 Our Global Offices</h2>

    <div className="row office-row">
      {/* Office Details */}
      <div className="col-lg-5 col-md-6 office-column">
        <div className="card office-card shadow-sm">
          <div className="row align-items-center">
            <div className="col-4 text-center">
              <img
                src="/images/iconoffice.png"
                className="office-icon"
                alt="Trimsel office icon"
                loading="lazy"
              />
            </div>
            <div className="col-8">
              <h3 className="office-heading">🇮🇳 India</h3>
              <h4 className="office-addr">
                <img
                  src="/images/marker-icon.png"
                  className="marker-icon"
                  alt="Location marker icon"
                />
                <Link
                  href="https://www.google.com/maps/place/Trimsel/@13.0125615,80.1988776,904m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a52679044415e91:0xf6d63600f08408c6!8m2!3d13.0125615!4d80.2014525"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Guindy, Chennai
                </Link>
              </h4>
            </div>
          </div>
        </div>

        {/* Office Name */}
        <h3 className="office-name pt-3">Trimsel Softwares</h3>
        <p className="office-para">
          <Link
            href="https://www.google.com/maps/place/Trimsel/@13.0125615,80.1988776,904m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a52679044415e91:0xf6d63600f08408c6!8m2!3d13.0125615!4d80.2014525"
            target="_blank"
            rel="noopener noreferrer"
          >
            21B 5th Cross St, South Phase, Thiru VI KA Industrial Estate, Guindy,
            Chennai, Tamil Nadu 600032
          </Link>
        </p>

        {/* Call Now */}
        <h3 className="office-call pt-3">📞 Call Us Now!</h3>
        <Link href="tel:+917200841581" className="office-contact">
          (+91)-720-084-1581
        </Link>
      </div>

      {/* Map Image */}
      <div className="col-lg-7 col-md-6 text-center">
        <img
          src="/images/Group2529.png"
          className="office-map img-fluid"
          alt="Map showing Trimsel Chennai Office Location"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>


{/* <section id='testimonials' className='my-4 py-4'>
        <div className='container testimonial-container'>
          <Carousel>
            <Carousel.Item>
            <div className="card test-card">
                <h2 className="test-heading align-middle mb-0">WHAT CLIENTS SAY</h2>
                <div className="row justify-content-center align-items-center card-row"> 
                    <div className="col-lg-9">
                      <blockquote className="test-text align-middle">It's a big team and what's really good is that it's a specialized team, so that means they have to be the best at what they do. I am very happy and impressed.
                      </blockquote>
                    </div>
                    <div className="col-lg-3 text-center">
                      <img src="/images/client-feed.png" width="140" height="140"/>
                        <h4 className="test-name text-center">Kalyan <br/> Krishnamurthy</h4>
                          <p className="test-comp text-center">C.E.O  of Flipkart</p>
                    </div>
                  </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="card test-card">
                <h2 className="test-heading align-middle mb-0">WHAT CLIENTS SAY</h2>
                <div className="row justify-content-center align-items-center card-row"> 
                    <div className="col-lg-9">
                      <blockquote className="test-text align-middle">It's a big team and what's really good is that it's a specialized team, so that means they have to be the best at what they do. I am very happy and impressed.
                      </blockquote>
                    </div>
                    <div className="col-lg-3 text-center">
                      <img src="/images/client-feed.png" width="140" height="140"/>
                        <h4 className="test-name text-center">Kalyan <br/> Krishnamurthy</h4>
                          <p className="test-comp text-center">C.E.O  of Flipkart</p>
                    </div>
                  </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="card test-card">
                <h2 className="test-heading align-middle mb-0">WHAT CLIENTS SAY</h2>
                <div className="row justify-content-center align-items-center card-row"> 
                    <div className="col-lg-9">
                      <blockquote className="test-text align-middle">It's a big team and what's really good is that it's a specialized team, so that means they have to be the best at what they do. I am very happy and impressed.
                      </blockquote>
                    </div>
                    <div className="col-lg-3 text-center">
                      <img src="/images/client-feed.png" width="140" height="140"/>
                        <h4 className="test-name text-center">Kalyan <br/> Krishnamurthy</h4>
                          <p className="test-comp text-center">C.E.O  of Flipkart</p>
                    </div>
                  </div>
            </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section> */}

      {/* <section id='contact-details'>
        <div className='container details-container'>
            <div className='details-bg'></div>
            <div className='row details-row'>
                <div className='col-lg-4 col-md-6'>
                    <h3 className='details-title'>
                        Got a Startup Idea?
                    </h3>
                    <p className='details-para pt-3'>
                    Let us give you our honest opinion. Book your <strong> FREE 30-Minute </strong> consultation:
                    </p>
                    <button className='abouts-btn mt-3'>Consult Our Experts <img src='/images/short-right.png' /></button>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <h4 className='details-name'>
                        Mr. Balaji Kailasundaram
                    </h4>
                    <h5 className='details-position pt-2'>
                        Co-Founder
                    </h5>
                    <p className='details-contact'>
                        Email Address: <br/> <Link href='mailto:balaji@minitzon.com'>balaji@minitzon.com</Link>
                    </p>
                    <p className='details-contact'>
                        Phone Number: <br/> <Link href='tel:+917200841581'>(+91)-720-084-1581</Link>
                    </p>
                    <p className='details-socials'>
                    <Link href='#' target="_blank"><img className='social-icon' src='/images/facebook41.png' /></Link> <Link href='#' target="_blank"><img className='social-icon' src='/images/linkedin51.png'/></Link> <Link href='#' target="_blank"><img className='social-icon' src='/images/instagram41.png'/></Link> 
                    </p>
                </div>
            </div>
        </div>
      </section> */}

     
     {/* <section id="contact-details">
  <div className="container details-container">
    <div className="details-bg"></div>
    <div className="row details-row">

      
      <div className="col-lg-4 col-md-6">
        <h3 className="details-title">Got a Startup Idea?</h3>
        <p className="details-para pt-3">
          Let’s turn your idea into reality. Book your <strong>Free 30-Minute Consultation</strong> with our cloud, mobile, or web experts today.
        </p>
        <button className="abouts-btn mt-3">
          Consult Our Experts{" "}
          <img
            src="/images/short-right.png"
            alt="Consult with Trimsel Experts"
          />
        </button>
      </div>

      
      <div className="col-lg-4 col-md-6">
        <h4 className="details-name">Mr. Balaji Kailasundaram</h4>
        <h5 className="details-position pt-2">Founder & Managing Director</h5>

        
        <p className="details-contact">
          📧 Email Address:<br />
          <Link href="mailto:contact@trimsel.com">contact@trimsel.com</Link>
        </p>

        
        <p className="details-contact">
          📞 Phone Number:<br />
          <Link href="tel:+917200841581">(+91) 72008 41581</Link>
        </p>

        
        <p className="details-socials">
          <Link href="https://www.facebook.com/TrimselTech" target="_blank">
            <img className="social-icon" src="/images/facebook41.png" alt="Trimsel on Facebook" />
          </Link>
          <Link href="https://www.linkedin.com/company/trimsel" target="_blank">
            <img className="social-icon" src="/images/linkedin51.png" alt="Trimsel on LinkedIn" />
          </Link>
          <Link href="https://www.instagram.com/trimsel" target="_blank">
            <img className="social-icon" src="/images/instagram41.png" alt="Trimsel on Instagram" />
          </Link>
        </p>
      </div>
    </div>
  </div>
</section> */}
<Footer />
</main>
</>
    )
}