import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import CarouselComponent from "../components/carouselComponent";
import ClientLogo from "../components/clientLogo";
import Accordion from "react-bootstrap/Accordion"
import ContactModal from "../components/ContactModal";

export default function Digital() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/newcontact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Head>
        <title>#1 Digital Marketing Agency in India </title>
        <meta
          name="description"
          content="Best Web Development Company in India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-min.ico" />
      </Head>
      <main>
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
                            <Link href="/">Home</Link> <span> &#x2027; </span>{" "}
                            <Link href="#">Services</Link>{" "}
                            <span> &#x2027; </span> Digital Marketing
                          </p>
                        </div>
                      </div>
                      <div className="cafe">
                        <div className="cafe-inner news-title">
                          Best Digital Marketing Agency In Chennai , India
                        </div>
                      </div>
                      <div className="mozart">
                        <div className="mozart-inner">
                          <p className="dev-para">
                            Effective digital marketing services India help your
                            brand grow in India and around the globe. It helps
                            establish your brand and gain the trust of your
                            customers. An online presence allows you to grow
                            your business 24x7.
                          </p>
                        </div>
                      </div>
                      <div className="mozarts">
                        <div className="mozarts-inner">
                          <Link href="/contact-us" passHref>
                            <button className="btn btn-primary dev-btn">
                              Get Started Today{" "}
                              <img
                                src="/images/material-symbols_arrow-right-alt.png"
                                alt="arrow-icon"
                              />
                            </button>
                          </Link>
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
                      alt="Digital-Marketing-Hero-Image"
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
                    <Image
                      src="/images/partnering.png"
                      className="partnering-hero-img"
                      alt="Partnering-Details-Image"
                      width={934}
                      height={150}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section id="dig-about">
          <div className="container web-container">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <h2 className="webdev-title pt-3">
                  Digital Marketing Company In Chennai, India
                </h2>
                <p className="dig-para">
                  We, the best digital marketing company in India here to help
                  you build your brand’s online presence and provide you with
                  great returns on your investment.
                </p>
                <p className="dig-para">
                  The world of digital marketing changes rapidly. There are new
                  technologies, algorithmic changes, and new features to adapt
                  to ensure your brand continues to grow. As a business, you
                  already have a lot on your plate; that is why a digital
                  marketing agency can help you. At Minitzon, we foster a
                  passionate team that loves building brands and staying updated
                  with the latest trends. We pride ourselves on providing
                  multi-channel digital marketing services in Chennai at
                  affordable rates.
                </p>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className=" card card-dig">
                  <Image
                    src="/images/graph.png"
                    width={110}
                    height={110}
                    alt="digital marketing graph"
                  />
                  <div className="card-dig-details">
                    <h2>Know why your website is not RANKING!!!</h2>

                    <form id="home-form" onSubmit={handleSubmit(onSubmitForm)}>
                      <div className="md-form mb-3">
                        <input
                          {...register("website", {
                            required: {
                              value: true,
                              message: "Website Url is required",
                            },
                          })}
                          type="text"
                          name="website"
                          id="email"
                          className="form-control dig-form"
                          placeholder="Website URL*"
                        />
                      </div>
                      <div className="md-form">
                        <input
                          {...register("phone", {
                            required: {
                              value: true,
                              message: "Your phone number is required",
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
                              message: "Email id is required",
                            },
                            pattern: {
                              value:
                                /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="dig-about">
          <div className="container dig-container">
            <Stack direction="horizontal">
              <div className=" badge-kariot-btn">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p> WHAT WE DO </p>
              </div>
            </Stack>
            <div className="row">
              <div className="col-lg-4 col-md-6 pt-3">
                <h3 className="dig-abt-heading">Our Spezialized Services</h3>
              </div>
              <div className="col-lg-4 col-md-6 pt-3">
                <p className="digi-para">
                  We are a digital marketing agency, provide a plethora of
                  services that help businesses grow their online presence.
                </p>
              </div>
              <div className="col-lg-4 col-md-7">
                <Button href="/contact-us" className="gif-button mt-3">
                  <img
                    src="/images/slightly-smiling-face.gif"
                    alt="Smiling Face GIF Image"
                    className="new-smile"
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
                    <img src="/images/gifbtniconarrow.png" alt="arrow-icon" />
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
                      One of our digital marketing services India is to ensure
                      your brand is visible to the right audience at the right
                      time. Our SEO services focus on on-page and off-page
                      optimization.
                    </p>
                    <Link href="#" passHref>
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
                      We specialise in search engine marketing that helps brands
                      get a wider reach through paid advertising. Our team at
                      Minitzon identifies appropriate keywords & demographics.
                    </p>
                    <Link href="#" passHref>
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
                      Social media has helped brands of all sizes reach their
                      target audience and engage them through interactive
                      content. We provide customized social media services that
                      include research.
                    </p>
                    <Link href="#" passHref>
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
                      Content is essential to any business to help it
                      communicate with its audience. As a digital marketing
                      company in Chennai, we focus on the creation, management
                      and distribution of content.
                    </p>
                    <Link href="#" passHref>
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
                    <h3 className="qs-card-heading"> B2B Marketing </h3>
                    <p className="qsd-para">
                      We at Minitzon help businesses adopt B2B marketing
                      strategies that help them generate leads to expand their
                      business and open opportunities for people to collaborate.
                      We focus on data, create sales pipelines.
                    </p>
                    <Link href="#" passHref>
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
                    <h3 className="qs-card-heading"> B2C Marketing </h3>
                    <p className="qsd-para">
                      We adopt several data-driven strategies to help brands
                      reach the right customer and drive engagement. We help
                      brands create interactive experiences and create
                      informative content that helps customers.
                    </p>
                    <Link href="#" passHref>
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
                      Every click matters. That’s why we convert clicks to sales
                      by creating powerful adverts and optimizing the campaigns
                      to their maximum potential.
                    </p>
                    <Link href="#" passHref>
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
                    <h3 className="qs-card-heading"> Marketing Automation </h3>
                    <p className="qsd-para">
                      We help brands set up end-to-end marketing automation
                      services to streamline their marketing funnel to leads and
                      enhance customer experience.
                    </p>
                    <Link href="#" passHref>
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
                    <h3 className="qs-card-heading">Initial Coin Offering </h3>
                    <p className="qsd-para">
                      We are one of the few digital marketing company in India
                      that specialises in ICO marketing. We help cryptocurrency
                      startups promote their ICO.
                    </p>
                    <Link href="#" passHref>
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

        <section id="digi-agency">
          <div className="container digag-container">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <h3 className="dig-agy-heading">
                  {" "}
                  Here's Why Minitzon Is The Best Digital Marketing agency in
                  Chennai, India
                </h3>
                <p className="digi-para">
                  Our team experts will help you to go online, where a business
                  will need a mix of well-designed and well-developed website
                  and the right marketing strategy as both help gain superior
                  visibility there.
                </p>
                <p className="digi-para">
                  Minitzon have a thorough understanding of the digital market
                  as it knows all those steps and activities that deliver online
                  visibility benefits to websites or businesses. Our team first
                  analyze a business, its websites, its target audience and its
                  goals and based on that, come up with a suitable marketing
                  strategy. We devise a plan to boost a website’s presence
                  across channels on the internet.
                </p>
                <p className="digi-para">
                  We focus on both organic and paid traffic for better results.
                  Rankaze agency leverage SEO, PPC and digital ads to help
                  businesses reach to more users and convey to them their brand
                  messages.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-4"
                style={{ textAlign: "center" }}
              >
                <Button className="digi-btn" variant="dark">
                  Our Marketing <br /> Strategy
                </Button>
                <Image
                  src="/images/mrk-strategy.png"
                  width={422}
                  height={501}
                  alt="Marketing Strategy"
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
                  It's Time to Leverage Our Digital Marketing Services in
                  Chennai to Fuel Your Business Growth.
                </h3>
                <Link href="#" passHref>
                  <button className="btn btn-primary lev-btn">
                    Find Out More{" "}
                    <img src="/images/material-symbols_arrow-right-alt.png" />
                  </button>
                </Link>
              </div>
              <div className="col-lg-7 col-md-7">
                <p className="lev-para">
                  At some point in their business, every entrepreneur or CEO
                  contemplates the need for a digital marketing agency in India.
                  Here are some quick questions to help you decide if your
                  business requires a digital marketing company in India to
                  expand your business -
                </p>
                <ul style={{ paddingLeft: "0px" }}>
                  <li className="li-lev">
                    <p className="lev-list">
                      <span className="me-2">
                        <img
                          src="/images/check-circle.png"
                          alt="check-icon"
                          width={18}
                        />
                      </span>
                      Are you unsure how to leverage technology and digital
                      media for your business?
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
                      Are you facing a marketing slowdown?
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
                      Are you unable to manage leads and establish a proper
                      sales funnel?
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
                      Are you facing a decrease in business enquiries?
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
                      Are you falling short of time to concentrate on marketing?
                    </p>
                  </li>
                </ul>
                <p className="lev-para">
                  If you’ve answered YES to even one of the above questions,
                  then you require a digital marketing agency in India. At
                  Minitzon, we use various technologies and online marketing
                  strategies to help your business achieve its marketing goals.
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
                    <img src="/images/line.png" />
                    <h2 className="cldcta-heading pt-2">
                      You want to improve your business processes using the
                      digital marketing, but you're not sure how to handle it
                      right?
                    </h2>
                    <button className="digcta-button btn-lg btn-info mt-3">
                      Contact Us
                      <span className="icon">
                        {" "}
                        <img
                          src="/images/arow-white.png"
                          alt="Arrow White Icon"
                        />{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </section>
        <section id="recents-works">
          <div className="container new-ds">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <h2 className="case-heading">CASE STUDIES</h2>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="casecarousel-para">
                  In 6 years we have completed more than 200 individual projects
                  to develop modern websites, web and mobile applications for
                  clients from all over the world.
                </p>
              </div>
              <div className="col-lg-3 col-md-3">
                <button className="about-btn">
                  View All Cases{" "}
                  <img src="/images/material-symbols_arrow-right-alt.png" />
                </button>
              </div>
            </div>
            <CarouselComponent />
          </div>
        </section>
        <section id="client" className="client-section">
        <div className="container mt-5">
          <h2 className="client-title">
            Trusted By Customers, Partners and The Industry
          </h2>
          <p className="clients-text">
            At Minitzon, there is continuous learning that happens as we work on
            various projects. We also love to update and upgrade with the latest
            innovations in the field of technology and apps.
          </p>
          <ClientLogo />
        </div>
      </section>
      <section id="faq">
        <div className="container faq-container">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0" flush className="py-5">
            <Accordion.Item eventKey="0" className="pb-3">
              <Accordion.Header>
                Why Choose Minitzon For Mobile App Development in India?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                  Minitzon mobile app development company in Chennai has a team
                  of experienced developers with an in-depth knowledge of
                  frameworks and mobile technologies. They have the capacity to
                  meet demands on time without compromising on the quality and
                  functionalities. We are a recognised mobile app development
                  company in India for our robust apps and cost-effective
                  services.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="pb-3">
              <Accordion.Header>
                How Much Does It Cost To Build A Mobile App?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                  Minitzon mobile app development company in Chennai has a team
                  of experienced developers with an in-depth knowledge of
                  frameworks and mobile technologies. They have the capacity to
                  meet demands on time without compromising on the quality and
                  functionalities. We are a recognised mobile app development
                  company in India for our robust apps and cost-effective
                  services.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="pb-3">
              <Accordion.Header>
                What Things To Consider When Hiring A Mobile App Development
                Company?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                  Minitzon mobile app development company in Chennai has a team
                  of experienced developers with an in-depth knowledge of
                  frameworks and mobile technologies. They have the capacity to
                  meet demands on time without compromising on the quality and
                  functionalities. We are a recognised mobile app development
                  company in India for our robust apps and cost-effective
                  services.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="pb-3">
              <Accordion.Header>
                Why Should I Choose A Mobile Application Development Company In
                India?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                  Minitzon mobile app development company in Chennai has a team
                  of experienced developers with an in-depth knowledge of
                  frameworks and mobile technologies. They have the capacity to
                  meet demands on time without compromising on the quality and
                  functionalities. We are a recognised mobile app development
                  company in India for our robust apps and cost-effective
                  services.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="pb-3">
              <Accordion.Header>
                How Long Does It Take To Build An App?
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-para">
                  Minitzon mobile app development company in Chennai has a team
                  of experienced developers with an in-depth knowledge of
                  frameworks and mobile technologies. They have the capacity to
                  meet demands on time without compromising on the quality and
                  functionalities. We are a recognised mobile app development
                  company in India for our robust apps and cost-effective
                  services.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      <ContactModal title="Need To Boost Your Business Digitally? Contact Us" />
      <Footer />
      </main>
    </>
  );
}
