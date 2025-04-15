import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Link from "next/link";
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";
import Image from "next/image";
export default function CarouselComponent() {
  const slides = [1, 2, 3];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel
        className="case-carousel"
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        interval={null}
        controls={false}
        aria-label="Portfolio Case Studies Carousel"
      >
        <Carousel.Item>
          <div className="row py-5">
            <div className="col-lg-6 col-md-6">
              <Card className="case-carousel-card">
                <Card.Header className="case-carousel-header">
                <Image src="/images/Group3001.png" width={500} height={300} alt="Ezyhelpers Mobile App Screens" loading="lazy" />
                </Card.Header>
                <Card.Body className="case-carousel-body">
                  <h3 className="case-carousel-heading">Ezyhelpers</h3>
                  <p className="case-carousel-para justify-content-center">
                    Quisque a pretium nulla, at porttitor eros. Mauris pharetra
                    nisl sit amet mauris efficitur malesuada.
                  </p>
                  <Link className="case-carousel-link" href="/portfolio/ezyhelpers-case-study" >
                    Read Case Study <FaLongArrowAltRight />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-md-6">
              <Card className="case-carousel-card">
                <Card.Header className="case-carousel-header">
                <Image src="/images/Group3002.png" width={500} height={300} alt="Xaber Mobile App Screen" loading="lazy"/>
                </Card.Header>
                <Card.Body className="case-carousel-body">
                  <h3 className="case-carousel-heading">Xaber</h3>
                  <p className="case-carousel-para justify-content-center">
                    Quisque a pretium nulla, at porttitor eros. Mauris pharetra
                    nisl sit amet mauris efficitur malesuada.
                  </p>
                  <Link className="case-carousel-link" href="/portfolio/xaber-case-study">
                    Read Case Study <FaLongArrowAltRight />
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row py-5">
            <div className="col-lg-6 col-md-6">
              <Card className="case-carousel-card">
                <Card.Header className="case-carousel-header">
                  <img src="/images/kariotscreen.webp" width={500} height={300} alt="karIOT Mobile App Screens" loading="lazy"/>
                </Card.Header>
                <Card.Body className="case-carousel-body">
                  <h3 className="case-carousel-heading">KarIOT</h3>
                  <p className="case-carousel-para justify-content-center">
                    Quisque a pretium nulla, at porttitor eros. Mauris pharetra
                    nisl sit amet mauris efficitur malesuada.
                  </p>
                  <Link className="case-carousel-link" href="/portfolio/kariot-case-study">
                    Read Case Study <FaLongArrowAltRight />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-md-6">
              <Card className="case-carousel-card">
                <Card.Header className="case-carousel-header">
                  <img src="/images/Group3002.png" alt="Xaber Mobile App Screen" loading="lazy"/>
                </Card.Header>
                <Card.Body className="case-carousel-body">
                  <h3 className="case-carousel-heading">Xaber</h3>
                  <p className="case-carousel-para justify-content-center">
                    Quisque a pretium nulla, at porttitor eros. Mauris pharetra
                    nisl sit amet mauris efficitur malesuada.
                  </p>
                  <Link className="case-carousel-link" href="/portfolio/xaber-case-study">
                    Read Case Study <FaLongArrowAltRight />
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row py-5">
            <div className="col-lg-6 col-md-6">
              <Card className="case-carousel-card">
                <Card.Header className="case-carousel-header">
                  <img src="/images/kariotscreen.webp" alt="KarIOT Screen" />
                </Card.Header>
                <Card.Body className="case-carousel-body">
                  <h3 className="case-carousel-heading">KarIOT</h3>
                  <p className="case-carousel-para justify-content-center">
                    Quisque a pretium nulla, at porttitor eros. Mauris pharetra
                    nisl sit amet mauris efficitur malesuada.
                  </p>
                  <Link className="case-carousel-link" href="/portfolio/kariot-case-study">
                    Read Case Study <FaLongArrowAltRight />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-md-6">
              <Card className="case-carousel-card">
                <Card.Header className="case-carousel-header">
                  <img src="/images/Group3002.png" />
                </Card.Header>
                <Card.Body className="case-carousel-body">
                  <h3 className="case-carousel-heading">Xaber</h3>
                  <p className="case-carousel-para justify-content-center">
                    Quisque a pretium nulla, at porttitor eros. Mauris pharetra
                    nisl sit amet mauris efficitur malesuada.
                  </p>
                  <Link className="case-carousel-link" href="/portfolio/xaber-case-study">
                    Read Case Study <FaLongArrowAltRight />
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
        <ol className="carousel-indicators">
          {slides.map((slide, i) => (
            <li
              className={`carousel-indicator ${i === index ? "active" : ""}`}
              key={i}
              data-slide-to={i}
              onClick={(e) => handleSelect(i, e)}
              role="button"
              tabIndex="0"
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </ol>
      </Carousel>
    </>
  );
}
