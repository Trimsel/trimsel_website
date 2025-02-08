import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Headers from "../components/headers";
import Footer from "../components/footer";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselComponent from "../components/carouselComponent";
import ClientLogo from "../components/clientLogo";
import ContactForm from "../components/ContactForm";
import ContactModal from "../components/ContactModal";

function Blockchain() {
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
  const slides = [0, 1, 2];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Head>
        <title>Blockchain Development </title>
        <meta
          name="description"
          content="Best Blockchain Development Company in India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-min.ico" />
      </Head>
      <main>
        <section id="block-hero">
          <Headers />
          <section className="hero-dev">
            <div className="container pt-3">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="title">
                    <div className="title-inner">
                      <div className="cafe">
                        <div className="whiteLink">
                          <p className="breadcrumbs-kar">
                            <Link href="/" className="whiteLink">
                              Home
                            </Link>{" "}
                            <span> &#x2027; </span>{" "}
                            <Link href="#" className="whiteLink">
                              Services
                            </Link>{" "}
                            <span> &#x2027; </span> Blockchain Development
                          </p>
                        </div>
                      </div>
                      <div className="cafe">
                        <div className="cafe-inner news-title">
                          <h1 className="block-title">
                            Secure And Scalable Blockchain Technology
                          </h1>
                        </div>
                      </div>
                      <div className="mozart">
                        <div className="mozart-inner">
                          <p className="block-para whiteLink">
                            End-to-end cryptocurrency development services in
                            your business processes with the best blockchain
                            development company Minitzon takes your company into
                            the future with advanced and reliable solutions.
                          </p>
                        </div>
                      </div>
                      <div className="mozarts">
                        <div className="mozarts-inner">
                          <button className="btn btn-primary dev-btn">
                            Get Started Today{" "}
                            <img
                              src="/images/material-symbols_arrow-right-alt.png"
                              alt="arrow-icon"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="imgrs">
                    <Image
                      src="/images/blockchain-hero.png"
                      className="block-hero-img"
                      alt="Blockchain-Hero-Image"
                      width={646}
                      height={651}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section id="block-about">
          <div className="container web-container">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <Stack direction="horizontal">
                  <div className=" badge-kariot-btn">
                    <img
                      src="/images/Rectangle-kariot.png"
                      className="me-2"
                      alt="design-dot"
                    />
                    <p> REDEFINE YOUR BUSINESS </p>
                  </div>
                </Stack>
                <h2 className="blockdev-title pt-3">
                  Leading Blockchain Development Company in India
                </h2>
                <p className="web-abt-para pb-3">
                  Blockchain technology is revolutionizing businesses globally
                  by bringing decentralized, immutable, and transparent ledgers
                  into organizations. Minitzon is one of the trusted blockchain
                  software development companies in India that cater to your
                  unique needs with smart solutions. We are a team of technical
                  experts with creative minds who can introduce your company to
                  blockchain technology as a secure, decentralized solution and
                  for business automation.
                </p>
                <p className="web-abt-para pb-3">
                  Minitzon blockchain development company offers end-to-end
                  solutions from smart contracts to cryptocurrency development
                  services. Our tech maestros and consultants specialize in
                  helping you establish a decentralized ecosystem for your brand
                  to give you a competitive edge in the market.
                </p>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className=" card card-block">
                  <div className="card-block-details">
                    <h5 className="pb-3">START YOUR PROJECT</h5>
                    <h2 className="card-block-heading">
                      Connect To Blockchain Consultants
                    </h2>
                    <p className="card-det-para">
                      Minitzon provides blockchain consultancy on any specifics
                      and helps you decide on your custom engineering needs.
                      Tell us about your challenge and we’ll get back to you for
                      a discussion.
                    </p>
                    <form id="home-form" onSubmit={handleSubmit(onSubmitForm)}>
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
                          className="form-control web-form"
                          placeholder="Enter Email Address"
                        />
                        <span className="error-design pt-3">
                          {errors?.email?.message}
                          {errors?.email?.pattern?.message}
                        </span>
                      </div>
                      <input
                        type="submit"
                        className="block-btn my-3"
                        value="Book A Free Consultation"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="block-service">
          <div className="container test-container">
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
              <div className="col-lg-6 col-md-6 col-12">
                <h3 className="block-ser-heading pt-4">
                  Our Powerful Suite Of Blockchain Development Tech Stark
                </h3>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <p className="blkser-para pt-4">
                  Revamp your business with Our blockchain app developers can
                  convert your ideas into practical applications that
                  decentralise your organisation with innovation, skill, and
                  years of experience.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 pt-3">
                <Card className="qs-customize-card h-100">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/blockchain-icon.png"
                      width={76}
                      height={76}
                      className="do-icon pb-3"
                      alt="Blockchain Development icon"
                    />
                    <h3 className="qs-card-heading">
                      {" "}
                      Full Blockchain Development
                    </h3>
                    <p className="qsd-para">
                      Minitzon, one of the top blockchain development companies
                      in India, offers end-to-end Blockchain software
                      Development services that are robust and reliable. We are
                      enablers that help you achieve transparency best-in-class
                      full-stack blockchain developer experts.
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
              <div className="col-lg-4 col-md-6 pt-3">
                <Card className="qs-customize-card h-100">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/blockchainapp-icon.png"
                      width={76}
                      height={76}
                      className="do-icon pb-3"
                      alt="Blockchain App Integration Icon"
                    />
                    <h3 className="qs-card-heading">
                      Blockchain App Integration
                    </h3>
                    <p className="qsd-para">
                      Minitzon, one of the top blockchain development companies
                      in India, offers end-to-end Blockchain software
                      Development services that are robust and reliable. We are
                      enablers that help you achieve transparency best-in-class
                      full-stack blockchain developer experts.
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
              <div className="col-lg-4 col-md-6 pt-3">
                <Card className="qs-customize-card h-100">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/decentralised-icon.png"
                      width={76}
                      height={76}
                      className="do-icon pb-3"
                      alt="Decentralised Application Development Icon"
                    />
                    <h3 className="qs-card-heading">
                      Decentralised Application Development{" "}
                    </h3>
                    <p className="qsd-para">
                      Minitzon, one of the top blockchain development companies
                      in India, offers end-to-end Blockchain software
                      Development services that are robust and reliable. We are
                      enablers that help you achieve transparency best-in-class
                      full-stack blockchain developer experts.
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
              <div className="col-lg-4 col-md-6 pt-3">
                <Card className="qs-customize-card h-100">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/private-icon.png"
                      width={76}
                      height={76}
                      className="do-icon pb-3"
                      alt="Private Blockchain Icon"
                    />
                    <h3 className="qs-card-heading">Private Blockchain </h3>
                    <p className="qsd-para">
                      Minitzon, one of the top blockchain development companies
                      in India, offers end-to-end Blockchain software
                      Development services that are robust and reliable. We are
                      enablers that help you achieve transparency best-in-class
                      full-stack blockchain developer experts.
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
              <div className="col-lg-4 col-md-6 pt-3">
                <Card className="qs-customize-card h-100">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/deorg-icon.png"
                      width={76}
                      height={76}
                      className="do-icon pb-3"
                      alt="Decentralised Organization icon"
                    />
                    <h3 className="qs-card-heading">
                      {" "}
                      Decentralised Organization{" "}
                    </h3>
                    <p className="qsd-para">
                      Minitzon, one of the top blockchain development companies
                      in India, offers end-to-end Blockchain software
                      Development services that are robust and reliable. We are
                      enablers that help you achieve transparency best-in-class
                      full-stack blockchain developer experts.
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
              <div className="col-lg-4 col-md-6 pt-3">
                <Card className="qs-customize-card h-100">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/wallets-icon.png"
                      width={76}
                      height={76}
                      className="do-icon pb-3"
                      alt="Blockchain Wallets Icon"
                    />
                    <h3 className="qs-card-heading"> Blockchain Wallets </h3>
                    <p className="qsd-para">
                      Minitzon, one of the top blockchain development companies
                      in India, offers end-to-end Blockchain software
                      Development services that are robust and reliable. We are
                      enablers that help you achieve transparency best-in-class
                      full-stack blockchain developer experts.
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
              <div className="col-lg-4 col-md-6 pt-3">
                <Card className="qs-customize-card h-100">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/smart-icon.png"
                      width={76}
                      height={76}
                      className="do-icon pb-3"
                      alt="Smart Contracts icon"
                    />
                    <h3 className="qs-card-heading"> Smart Contracts </h3>
                    <p className="qsd-para">
                      Minitzon, one of the top blockchain development companies
                      in India, offers end-to-end Blockchain software
                      Development services that are robust and reliable. We are
                      enablers that help you achieve transparency best-in-class
                      full-stack blockchain developer experts.
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
              <div className="col-lg-4 col-md-6 pt-3">
                <Card className="qs-customize-card h-100">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/nft-icon.png"
                      width={76}
                      height={76}
                      className="do-icon pb-3"
                      alt="NFT Development Icon"
                    />
                    <h3 className="qs-card-heading"> NFT Development </h3>
                    <p className="qsd-para">
                      Minitzon, one of the top blockchain development companies
                      in India, offers end-to-end Blockchain software
                      Development services that are robust and reliable. We are
                      enablers that help you achieve transparency best-in-class
                      full-stack blockchain developer experts.
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
        <section id="block-sec-cta">
          <div className="container">
            <Card className="blockchain-cta my-5">
              <Card.Body>
                <div className="row">
                  <div className="col-lg-7 col-md-7 col-12">
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
                    <h2 className="blockcta-heading pt-2">
                      Why us for Enterprise Blockchain Solutions?
                    </h2>
                    <p className="blockcta-para">
                      In this digitalized environment to sustain in the market,
                      one should be open towards new technology in the first
                      place. We stay ahead when it comes to blockchain
                      development services. Our blockchain services include the
                      deployment of both Public and Permission blockchain
                      structures.
                    </p>
                    <Link href="/contact-us" passHref>
                      <button className="blockcta-btn mt-3">
                        Let's Talk{" "}
                        <img
                          src="/images/material-symbols_arrow-right-alt.png"
                          alt="arrow-icon"
                        />
                      </button>
                    </Link>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <Image
                      src="/images/blockchain1stcta.png"
                      width={640}
                      height={660}
                      alt="Blockchain Cryptocoin Icon "
                      className="blockcta-image"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </section>
        <section id="block-features">
          <div className="container source-container">
            <div className="heading">
              <h2 className="gradient-text">FEATURES OF BLOCKCHAIN</h2>
            </div>
            <div className="row features-card-row">
              <div className="col-lg-3 col-md-6">
                <Card className="source-card mt-3 h-100">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/cryptocurrency-icon.png"
                      width={60}
                      height={60}
                      className="do-icon pb-3"
                      alt="Cryptocurrency Icon"
                    />
                    <h3 className="source-card-heading">
                      Cryptographically Secured
                    </h3>
                    <p className="source-para">
                      Cryptocurrency development services involve digital
                      signatures which makes the contracts more secure and
                      immutable.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 col-md-6">
                <Card className="source-card mt-3 h-100">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/blockchain-distribution.png"
                      width={60}
                      height={60}
                      className="do-icon pb-3"
                      alt="Blockchain Distribution Icon"
                    />
                    <h3 className="source-card-heading">Distributed</h3>
                    <p className="source-para">
                      Blockchain technology allows everyone on the chain to view
                      the transactions and data with authenticity, security and
                      transparency.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 col-md-6">
                <Card className="source-card mt-3 h-100">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/decentralized-icon.png"
                      width={60}
                      height={60}
                      className="do-icon pb-3"
                      alt="Decentralized-Icon"
                    />
                    <h3 className="source-card-heading">Decentralised</h3>
                    <p className="source-para">
                      The ledger system is decentralized in a blockchain
                      allowing everyone on the network to participate in the
                      information between the nodes.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 col-md-6">
                <Card className="source-card mt-3 h-100">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <Image
                      src="/images/shared.png"
                      width={60}
                      height={60}
                      className="do-icon pb-3"
                      alt="Shared-Nodes-Icon"
                    />
                    <h3 className="source-card-heading">Shared</h3>
                    <p className="source-para">
                      The data and transactions are shared with a large network
                      making it more reliable.
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="block-growth">
          <div className="container growth-container">
            <div className="row">
              <div className="col-lg-8 col-md-7">
                <h2 className="blockgrowth-title pt-3">
                  How Blockchain Development Company Can Help Your Business
                  Grow?
                </h2>
                <p className="blockgrowth-para">
                  Take your business to the next level by harnessing solutions
                  by Minitzon, India’s top Blockchain app development company
                </p>
              </div>
              <div className="col-md-5 col-lg-4">
                <Link href="/contact-us" style={{ textDecoration: "none" }}>
                  <Button className="blockgif-button mt-3">
                    <img
                      src="/images/slightly-smiling-face.gif"
                      alt="Smiling Face GIF Image"
                      className="new-smile"
                    />
                    <h6 className="smile-heading">
                      <p className=" smile-para"> Talk to a </p>
                      Blockchain Expert{" "}
                      <img src="/images/gifbtniconarrow.png" alt="arrow-icon" />
                    </h6>
                  </Button>
                </Link>
              </div>
            </div>
            <Carousel
              className="block-car"
              animation="fade"
              prevIcon={
                <img
                  src="/images/chevron-right-icon.png"
                  className="previous-icon"
                  alt="Previous"
                />
              }
              nextIcon={
                <img
                  src="/images/chevron-left.png"
                  className="next-icon"
                  alt="Next"
                />
              }
              interval={null}
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
            >
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-3 col-md-3 mt-3">
                    <Card className="carel-card h-100">
                      <Image
                        src="/images/guarantee-security.png"
                        width={40}
                        height={40}
                        alt="Guarentee Security"
                        className="mb-2"
                      />
                      <h4 className="block-caros-heading">
                        Guarentee Security
                      </h4>
                      <p className="carel-para">
                        Minitzon blockchain development company uses
                        blockchain’s distributed ledger technology that allows
                        every member.
                      </p>
                    </Card>
                  </div>
                  <div className="col-lg-3 col-md-3 mt-3">
                    <Card className="carel-card h-100">
                      <Image
                        src="/images/decen-icon.png"
                        width={40}
                        height={40}
                        alt="Decentralised Organisation"
                        className="mb-2"
                      />
                      <h4 className="block-caros-heading">
                        Decentralised Organisation
                      </h4>
                      <p className="carel-para">
                        Minitzon blockchain development company uses
                        blockchain’s distributed ledger technology that allows
                        every member.
                      </p>
                    </Card>
                  </div>
                  <div className="col-lg-3 col-md-3 mt-3">
                    <Card className="carel-card h-100">
                      <Image
                        src="/images/transaction-icon.png"
                        width={40}
                        height={40}
                        alt="Transaction Icon"
                        className="mb-2"
                      />
                      <h4 className="block-caros-heading">Quick Transaction</h4>
                      <p className="carel-para">
                        Minitzon blockchain development company uses
                        blockchain’s distributed ledger technology that allows
                        every member.
                      </p>
                    </Card>
                  </div>
                  <div className="col-lg-3 col-md-3 mt-3">
                    <Card className="carel-card h-100">
                      <Image
                        src="/images/magnifier-icon.png"
                        width={40}
                        height={40}
                        alt="Transparency Icon"
                        className="mb-2"
                      />
                      <h4 className="block-caros-heading">Transparency</h4>
                      <p className="carel-para">
                        Minitzon blockchain development company uses
                        blockchain’s distributed ledger technology that allows
                        every member.
                      </p>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-3 col-md-3 mt-3">
                    <Card className="carel-card h-100">
                      <Image
                        src="/images/guarantee-security.png"
                        width={40}
                        height={40}
                        alt="Guarentee Security"
                        className="mb-2"
                      />
                      <h4 className="block-caros-heading">
                        Guarentee Security
                      </h4>
                      <p className="carel-para">
                        Minitzon blockchain development company uses
                        blockchain’s distributed ledger technology that allows
                        every member.
                      </p>
                    </Card>
                  </div>
                  <div className="col-lg-3 col-md-3 mt-3">
                    <Card className="carel-card h-100">
                      <Image
                        src="/images/decen-icon.png"
                        width={40}
                        height={40}
                        alt="Decentralised Organisation"
                        className="mb-2"
                      />
                      <h4 className="block-caros-heading">
                        Decentralised Organisation
                      </h4>
                      <p className="carel-para">
                        Minitzon blockchain development company uses
                        blockchain’s distributed ledger technology that allows
                        every member.
                      </p>
                    </Card>
                  </div>
                  <div className="col-lg-3 col-md-3 mt-3">
                    <Card className="carel-card h-100">
                      <Image
                        src="/images/transaction-icon.png"
                        width={40}
                        height={40}
                        alt="Transaction Icon"
                        className="mb-2"
                      />
                      <h4 className="block-caros-heading">Quick Transaction</h4>
                      <p className="carel-para">
                        Minitzon blockchain development company uses
                        blockchain’s distributed ledger technology that allows
                        every member.
                      </p>
                    </Card>
                  </div>
                  <div className="col-lg-3 col-md-3 mt-3">
                    <Card className="carel-card h-100">
                      <Image
                        src="/images/magnifier-icon.png"
                        width={40}
                        height={40}
                        alt="Transparency Icon"
                        className="mb-2"
                      />
                      <h4 className="block-caros-heading">Transparency</h4>
                      <p className="carel-para">
                        Minitzon blockchain development company uses
                        blockchain’s distributed ledger technology that allows
                        every member.
                      </p>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-3 col-md-3 mt-3">
                    <Card className="carel-card h-100">
                      <Image
                        src="/images/guarantee-security.png"
                        width={40}
                        height={40}
                        alt="Guarentee Security"
                        className="mb-2"
                      />
                      <h4 className="block-caros-heading">
                        Guarentee Security
                      </h4>
                      <p className="carel-para">
                        Minitzon blockchain development company uses
                        blockchain’s distributed ledger technology that allows
                        every member.
                      </p>
                    </Card>
                  </div>
                  <div className="col-lg-3 col-md-3 mt-3">
                    <Card className="carel-card h-100">
                      <Image
                        src="/images/decen-icon.png"
                        width={40}
                        height={40}
                        alt="Decentralised Organisation"
                        className="mb-2"
                      />
                      <h4 className="block-caros-heading">
                        Decentralised Organisation
                      </h4>
                      <p className="carel-para">
                        Minitzon blockchain development company uses
                        blockchain’s distributed ledger technology that allows
                        every member.
                      </p>
                    </Card>
                  </div>
                  <div className="col-lg-3 col-md-3 mt-3">
                    <Card className="carel-card h-100">
                      <Image
                        src="/images/transaction-icon.png"
                        width={40}
                        height={40}
                        alt="Transaction Icon"
                        className="mb-2"
                      />
                      <h4 className="block-caros-heading">Quick Transaction</h4>
                      <p className="carel-para">
                        Minitzon blockchain development company uses
                        blockchain’s distributed ledger technology that allows
                        every member.
                      </p>
                    </Card>
                  </div>
                  <div className="col-lg-3 col-md-3 mt-3">
                    <Card className="carel-card h-100">
                      <Image
                        src="/images/magnifier-icon.png"
                        width={40}
                        height={40}
                        alt="Transparency Icon"
                        className="mb-2"
                      />
                      <h4 className="block-caros-heading">Transparency</h4>
                      <p className="carel-para">
                        Minitzon blockchain development company uses
                        blockchain’s distributed ledger technology that allows
                        every member.
                      </p>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
        <section id="block-choose">
          <div className="container block-choose-container">
            <div className="row">
              <div className="col-lg-8 col-md-9">
                <h3 className="choose-block-heading">
                  Why Choose Our Blockchain Development Services?
                </h3>
                <p className="choose-block-para">
                  Accurate data-driven consultation to develop and implement
                  your blockchain development and blockchain solutions company
                  projects with ease.
                </p>
                <p className="choose-block-para">
                  We harness scalability with niche expertise through our
                  time-tested development process. Our Blockchain app
                  development services a well-known blockchain solutions company
                  offer data-driven solutions to match your business needs,
                  whether you’re a startup or an enterprise. We help you secure
                  and validate ownership of your digital assets and decentralize
                  your network to manage your data with smart contracts. Our
                  custom blockchain app development solutions fit businesses
                  searching for optimum scalability in fintech, e-commerce,
                  gaming, financial institutions, IoT, education, retail,
                  health, and much more.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="block-tools">
          <div className="container devtool-container">
            <div className="row">
              <div className="col-lg-7 col-md-7">
                <h3 className="block-tools-heading">
                  Blockchain App Development Technology Stack
                </h3>
              </div>
              <div className="col-lg-5 col-md-5">
                <p className="block-tools-para">
                  We offer Custom Blockchain development service with scalable
                  and tested technologies to deliver excellence.
                </p>
              </div>
            </div>
            <Row className="pt-3">
              <Col lg={6} md={6} className="pt-5">
                <h5 className="tool-cat-heading pb-2">Cloud Platforms</h5>
                <div className="tools-img-container pb-5">
                  <img
                    src="/images/coud-tools/aws.png"
                    className=" mbl-tools pb-3"
                    alt="aws-cloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/googlecloud.png"
                    className=" mbl-tools pb-3 ps-1"
                    alt="google-cloud-tools-image"
                  />
                  <img
                    src="/images/coud-tools/azure.png"
                    className=" mbl-tools pb-3 ps-1"
                    alt="azure-cloud-tools-image"
                  />
                </div>

                <h5 className="tool-cat-heading pb-2">
                  Configuration Management
                </h5>
                <div className="tools-img-container pb-5">
                  <img
                    src="/images/coud-tools/puppet.png"
                    className=" mbl-tools pb-3"
                    alt="puppet-cloud-tools-images"
                  />
                  <img
                    src="/images/coud-tools/terraform.png"
                    className=" mbl-tools pb-3 ps-1"
                    alt="terraform-cloud-tools-image"
                  />
                  <img
                    src="/images/coud-tools/ansible.png"
                    className=" mbl-tools pd-right pb-3 ps-1"
                    alt="ansible-cloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/cfengine.png"
                    className=" mbl-tools pb-3"
                    alt="cfengine-cloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/chef.png"
                    className=" mbl-tools pb-3 ps-1"
                    alt="chef-cloud-tool-image"
                  />
                </div>

                <h5 className="tool-cat-heading pb-2">
                  Performance & Security
                </h5>
                <div className="tools-img-container">
                  <img
                    src="/images/coud-tools/owasp.png"
                    className=" mbl-tools pb-3"
                    alt="owasp-cloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/locust.png"
                    className=" mbl-tools pb-3 ps-1"
                    alt="locust-cloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/jmeter.png"
                    className=" mbl-tools pd-right pb-3 ps-1"
                    alt="jmeter-cloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/sonar.png"
                    className=" mbl-tools pb-3"
                    alt="sonarcube-cloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/blaze.png"
                    className=" mbl-tools pb-3 ps-1"
                    alt="blaze-cloud-tool-image"
                  />
                </div>
              </Col>
              <Col lg={6} md={6} className="pt-5">
                <h5 className="tool-cat-heading pb-2">
                  Microservices & Architecture Management
                </h5>
                <div className="tools-img-container pb-5">
                  <img
                    src="/images/coud-tools/aws.png"
                    className=" mbl-tools pb-3"
                    alt="aws-cloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/googlecloud.png"
                    className=" mbl-tools pb-3 ps-1"
                    alt="googlecloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/azure.png"
                    className=" mbl-tools pb-3 ps-1"
                    alt="azure-cloud-tool"
                  />
                </div>

                <h5 className="tool-cat-heading pb-2">Build Automation</h5>
                <div className="tools-img-container pb-5">
                  <img
                    src="/images/coud-tools/puppet.png"
                    className=" mbl-tools pb-3"
                    alt="puppet-cloud-tool"
                  />
                  <img
                    src="/images/coud-tools/terraform.png"
                    className=" mbl-tools pb-3 ps-1"
                    alt="terraform-cloud-tool"
                  />
                  <img
                    src="/images/coud-tools/ansible.png"
                    className=" mbl-tools pd-right pb-3 ps-1"
                    alt="ansible-cloud-tool"
                  />
                  <img
                    src="/images/coud-tools/cfengine.png"
                    className=" mbl-tools pb-3"
                    alt="cfengine-cloud-tool"
                  />
                  <img
                    src="/images/coud-tools/chef.png"
                    className=" mbl-tools pb-3 ps-1"
                    alt="chef-cloud-tool-image"
                  />
                </div>

                <h5 className="tool-cat-heading pb-2">Alerting & Monitoring</h5>
                <div className="tools-img-container">
                  <img
                    src="/images/coud-tools/owasp.png"
                    className=" mbl-tools pb-3"
                    alt="owasp-cloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/locust.png"
                    className=" mbl-tools pb-3 ps-1"
                    alt="locust-cloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/jmeter.png"
                    className=" mbl-tools pd-right pb-3 ps-1"
                    alt="jmeter-cloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/sonar.png"
                    className=" mbl-tools pb-3"
                    alt="sonarcube-cloud-tool-image"
                  />
                  <img
                    src="/images/coud-tools/blaze.png"
                    className=" mbl-tools pb-3 ps-1"
                    alt="blaze-cloud-tool-image"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section id="recent-web-work">
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
        <section id="block-sec-cta">
          <div className="container">
            <Card className="blockchain-second-cta my-5">
              <Card.Body>
                <div className="row">
                  <div className="col-lg-7 col-md-7 col-12">
                    <Stack direction="horizontal">
                      <div className=" badge-kariot-btn">
                        <img
                          src="/images/Rectangle-kariot.png"
                          className="me-2"
                          alt="design-dot"
                        />
                        <p> GET INTO TOUCH </p>
                      </div>
                    </Stack>
                    <h2 className="blockcta-heading pt-2">
                      Tap into the potential of Decentralised Ecosystems with
                      Minitzon
                    </h2>
                    <Link href="/contact-us" passHref>
                      <button className="blockcta-btn mt-3">
                        Get Started{" "}
                        <img
                          src="/images/material-symbols_arrow-right-alt.png"
                          alt="arrow-icon"
                        />
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
            <Stack direction="horizontal" className="mb-3">
              <div className=" badge-kariot-btn">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p> OUR CLIENTS </p>
              </div>
            </Stack>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h4 className="client-block-title">
                  We're a Trusted Growth Partner
                </h4>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="clients-block-text">
                  At Minitzon, there is continuous learning that happens as we
                  work on various projects. We also love to update and upgrade
                  with the latest innovations in the field of technology and
                  apps.
                </p>
              </div>
            </div>
            <ClientLogo />
          </div>
        </section>

        <ContactForm />

        <section id="blog" className="py-5">
          <div className="container blog-container">
            <div className="row py-3">
              <Stack direction="horizontal">
                <div className=" badge-abot-btn">
                  <img
                    src="/images/Rectangle-kariot.png"
                    className="me-2"
                    alt="design-dot"
                  />
                  <p>
                    {" "}
                    <b> OUR BLOGS </b>{" "}
                  </p>
                </div>
              </Stack>
              <div className="col-lg-5 col-md-5 py-4">
                <h2 className="contacts-heading">
                  Read Our Latest Blogs and News
                </h2>
              </div>
              <div className="col-lg-7 col-md-7 py-4">
                <p className="blog-para">
                  At Minitzon, there is continuous learning that happens as we
                  work on various projects. We also love to update and upgrade
                  with the latest innovations in the field of technology and
                  apps.
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="card blog-card">
                  <div className="row no-gutters">
                    <div className="col-lg-5 col-md-5 py-3">
                      <img
                        className="card-img"
                        src="/images/blog-img.png"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <Button className="card-badge mb-2">
                        <strong>Development</strong>
                      </Button>
                      <h5 className="blog-card-title">
                        Top 10 Mobile App Development Frameworks in 2023
                      </h5>
                      <p className="blog-card-para">
                        We've entered on age where our lives are...{" "}
                        <Link href="#">Read More</Link>
                      </p>
                    </div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col-lg-5 col-md-5 py-3">
                      <img
                        className="card-img"
                        src="/images/blogs-img.png"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-7 col-md-7 py-3">
                      <Button className="card-badge mb-2">
                        {" "}
                        <strong> Development </strong>
                      </Button>
                      <h5 className="blog-card-title">
                        Top 10 Mobile App Development Frameworks in 2023
                      </h5>
                      <p className="blog-card-para">
                        We've entered on age where our lives are...{" "}
                        <Link href="#">Read More</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card blog-card">
                  <div className="card-image">
                    <img className="blog-image" src="/images/blog-image.png" />
                  </div>
                  <div className="card-content">
                    <Button className="card-badge my-2">
                      {" "}
                      <strong> Development </strong>{" "}
                    </Button>
                    <h5 className="blogs-card-title">
                      How hybrid app development can help you build custom apps
                    </h5>
                    <p className="blog-card-para">
                      Digitization has taken over every industry and business
                      aspect. The pandemic only fuelled our shift tower...
                      <Link href="#">Read More</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                    Minitzon mobile app development company in Chennai has a
                    team of experienced developers with an in-depth knowledge of
                    frameworks and mobile technologies. They have the capacity
                    to meet demands on time without compromising on the quality
                    and functionalities. We are a recognised mobile app
                    development company in India for our robust apps and
                    cost-effective services.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="pb-3">
                <Accordion.Header>
                  How Much Does It Cost To Build A Mobile App?
                </Accordion.Header>
                <Accordion.Body>
                  <p className="accordion-para">
                    Minitzon mobile app development company in Chennai has a
                    team of experienced developers with an in-depth knowledge of
                    frameworks and mobile technologies. They have the capacity
                    to meet demands on time without compromising on the quality
                    and functionalities. We are a recognised mobile app
                    development company in India for our robust apps and
                    cost-effective services.
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
                    Minitzon mobile app development company in Chennai has a
                    team of experienced developers with an in-depth knowledge of
                    frameworks and mobile technologies. They have the capacity
                    to meet demands on time without compromising on the quality
                    and functionalities. We are a recognised mobile app
                    development company in India for our robust apps and
                    cost-effective services.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="pb-3">
                <Accordion.Header>
                  Why Should I Choose A Mobile Application Development Company
                  In India?
                </Accordion.Header>
                <Accordion.Body>
                  <p className="accordion-para">
                    Minitzon mobile app development company in Chennai has a
                    team of experienced developers with an in-depth knowledge of
                    frameworks and mobile technologies. They have the capacity
                    to meet demands on time without compromising on the quality
                    and functionalities. We are a recognised mobile app
                    development company in India for our robust apps and
                    cost-effective services.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="pb-3">
                <Accordion.Header>
                  How Long Does It Take To Build An App?
                </Accordion.Header>
                <Accordion.Body>
                  <p className="accordion-para">
                    Minitzon mobile app development company in Chennai has a
                    team of experienced developers with an in-depth knowledge of
                    frameworks and mobile technologies. They have the capacity
                    to meet demands on time without compromising on the quality
                    and functionalities. We are a recognised mobile app
                    development company in India for our robust apps and
                    cost-effective services.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
        <ContactModal title="Need A Blockchain App? Contact Us" />      
        <Footer />
      </main>
    </>
  );
}

export default Blockchain;
