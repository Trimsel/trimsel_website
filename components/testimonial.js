import Carousel from "react-bootstrap/Carousel";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Kalyan Krishnamurthy",
    position: "CEO at Flipkart",
    image: "/images/client.webp",
    linkedin: "/images/bi_linkedin.png",
    feedback: "It&rsquo;s a big team and what&rsquo;s really good is that it&rsquo;s a specialized team, so that means they have to be the best at what they do. I am very happy and impressed.",
  },
  {
    name: "Sundar Pichai",
    position: "CEO at Google",
    image: "/images/client2.webp",
    linkedin: "/images/bi_linkedin.png",
    feedback: "Working with this team has been an exceptional experience. Their attention to detail and technical expertise are second to none.",
  }
];


export default function TestimonialClient() {
  const slides = [0, 1, 2];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section id="testimonials" className="my-4 py-4">
      <div className="container testimonial-container">
        <Stack direction="horizontal">
          <div className=" badge-abot-btn">
            <img
              src="/images/Rectangle-kariot.png"
              className="me-2"
              alt="design-dot"
            />
            <p> TESTIMONIALS </p>
          </div>
        </Stack>
        <div className="row py-4">
          <div className="col-lg-6 col-md-6">
            <h3 className="tst-heading">
              What Clients are Saying About Our Collaboration
            </h3>
          </div>
        </div>
        <Carousel
          className="hm-cars"
          animation="fade"
          prevIcon={
            <img
              src="/images/newarleft.png"
              width={58}
              className="previousdm-icon"
              alt="Previous"
            />
          }
          nextIcon={
            <img
              src="/images/newarrow.png"
              width={58}
              className="nextdm-icon"
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
              <div className="col-lg-6 col-md-6 mt-3">
                <Card className="dm-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <div className="cl-container">
                      <div className="row" style={{ alignItems: "center" }}>
                        <div className="col-lg-3 col-md-3 col-3">
                          <Image
                            src="/images/client.webp"
                            width={120}
                            height={120}
                            className="client-icon pb-3"
                            alt="Client Icon"
                          />
                        </div>
                        <div
                          className="col-lg-7 col-md-6 col-6"
                          style={{
                            paddingLeft: "0px",
                            paddingRight: "0px",
                          }}
                        >
                          <h3 className="dm-card-heading">
                            Kalyan Krishnamurthy,
                            <br />
                            <span className="txt">CEO at Flipkart</span>
                          </h3>
                        </div>
                        <div className="col-lg-2 col-md-3 col-3">
                          <span className="lnkimg">
                            <Image
                              src="/images/bi_linkedin.png"
                              width={30}
                              height={30}
                              alt="Linkedin Icon image"
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    <blockquote className="test-text align-middle card-row">
                      It&rsquo;s a big team and what&rsquo;s really good is that it&rsquo;s a
                      specialized team, so that means they have to be the best
                      at what they do. I am very happy and impressed.
                    </blockquote>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-6 col-md-6 mt-3">
                <Card className="dm-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <div className="cl-container">
                      <div className="row" style={{ alignItems: "center" }}>
                        <div className="col-lg-3 col-md-3 col-3">
                          <Image
                            src="/images/client.webp"
                            width={120}
                            height={120}
                            className="client-icon pb-3"
                            alt="Client Icon"
                          />
                        </div>
                        <div
                          className="col-lg-7 col-md-6 col-6"
                          style={{
                            paddingLeft: "0px",
                            paddingRight: "0px",
                          }}
                        >
                          <h3 className="dm-card-heading">
                            Kalyan Krishnamurthy,
                            <br />
                            <span className="txt">CEO at Flipkart</span>
                          </h3>
                        </div>
                        <div className="col-lg-2 col-md-3 col-3">
                          <span className="lnkimg">
                            <Image
                              src="/images/bi_linkedin.png"
                              width={30}
                              height={30}
                              alt="Linkedin Icon image"
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    <blockquote className="test-text align-middle card-row">
                      It&rsquo;s a big team and what&rsquo;s really good is that it&rsquo;s a
                      specialized team, so that means they have to be the best
                      at what they do. I am very happy and impressed.
                    </blockquote>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-6 col-md-6 mt-3">
                <Card className="dm-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <div className="cl-container">
                      <div className="row" style={{ alignItems: "center" }}>
                        <div className="col-lg-3 col-md-3 col-3">
                          <Image
                            src="/images/client.webp"
                            width={120}
                            height={120}
                            className="client-icon pb-3"
                            alt="Client Icon"
                          />
                        </div>
                        <div
                          className="col-lg-7 col-md-6 col-6"
                          style={{
                            paddingLeft: "0px",
                            paddingRight: "0px",
                          }}
                        >
                          <h3 className="dm-card-heading">
                            Kalyan Krishnamurthy,
                            <br />
                            <span className="txt">CEO at Flipkart</span>
                          </h3>
                        </div>
                        <div className="col-lg-2 col-md-3 col-3">
                          <span className="lnkimg">
                            <Image
                              src="/images/bi_linkedin.png"
                              width={30}
                              height={30}
                              alt="Linkedin Icon image"
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    <blockquote className="test-text align-middle card-row">
                      It&rsquo;s a big team and what&rsquo;s really good is that it&rsquo;s a
                      specialized team, so that means they have to be the best
                      at what they do. I am very happy and impressed.
                    </blockquote>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-6 col-md-6 mt-3">
                <Card className="dm-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <div className="cl-container">
                      <div className="row" style={{ alignItems: "center" }}>
                        <div className="col-lg-3 col-md-3 col-3">
                          <Image
                            src="/images/client.webp"
                            width={120}
                            height={120}
                            className="client-icon pb-3"
                            alt="Client Icon"
                          />
                        </div>
                        <div
                          className="col-lg-7 col-md-6 col-6"
                          style={{
                            paddingLeft: "0px",
                            paddingRight: "0px",
                          }}
                        >
                          <h3 className="dm-card-heading">
                            Kalyan Krishnamurthy,
                            <br />
                            <span className="txt">CEO at Flipkart</span>
                          </h3>
                        </div>
                        <div className="col-lg-2 col-md-3 col-3">
                          <span className="lnkimg">
                            <Image
                              src="/images/bi_linkedin.png"
                              width={30}
                              height={30}
                              alt="Linkedin Icon image"
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    <blockquote className="test-text align-middle card-row">
                      It&rsquo;s a big team and what&rsquo;s really good is that it&rsquo;s a
                      specialized team, so that means they have to be the best
                      at what they do. I am very happy and impressed.
                    </blockquote>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-6 col-md-6 mt-3">
                <Card className="dm-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <div className="cl-container">
                      <div className="row" style={{ alignItems: "center" }}>
                        <div className="col-lg-3 col-md-3 col-3">
                          <Image
                            src="/images/client.webp"
                            width={120}
                            height={120}
                            className="client-icon pb-3"
                            alt="Client Icon"
                          />
                        </div>
                        <div
                          className="col-lg-7 col-md-6 col-6"
                          style={{
                            paddingLeft: "0px",
                            paddingRight: "0px",
                          }}
                        >
                          <h3 className="dm-card-heading">
                            Kalyan Krishnamurthy,
                            <br />
                            <span className="txt">CEO at Flipkart</span>
                          </h3>
                        </div>
                        <div className="col-lg-2 col-md-3 col-3">
                          <span className="lnkimg">
                            <Image
                              src="/images/bi_linkedin.png"
                              width={30}
                              height={30}
                              alt="Linkedin Icon image"
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    <blockquote className="test-text align-middle card-row">
                      It&rsquo;s a big team and what&rsquo;s really good is that it&rsquo;s a
                      specialized team, so that means they have to be the best
                      at what they do. I am very happy and impressed.
                    </blockquote>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-6 col-md-6 mt-3">
                <Card className="dm-customize-card">
                  <Card.Body
                    style={{ paddingRight: "0px", paddingLeft: "0px" }}
                  >
                    <div className="cl-container">
                      <div className="row" style={{ alignItems: "center" }}>
                        <div className="col-lg-3 col-md-3 col-3">
                          <Image
                            src="/images/client.webp"
                            width={120}
                            height={120}
                            className="client-icon pb-3"
                            alt="Client Icon"
                          />
                        </div>
                        <div
                          className="col-lg-7 col-md-6 col-6"
                          style={{
                            paddingLeft: "0px",
                            paddingRight: "0px",
                          }}
                        >
                          <h3 className="dm-card-heading">
                            Kalyan Krishnamurthy,
                            <br />
                            <span className="txt">CEO at Flipkart</span>
                          </h3>
                        </div>
                        <div className="col-lg-2 col-md-3 col-3">
                          <span className="lnkimg">
                            <Image
                              src="/images/bi_linkedin.png"
                              width={30}
                              height={30}
                              alt="Linkedin Icon image"
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    <blockquote className="test-text align-middle card-row">
                      It&rsquo;s a big team and what&rsquo;s really good is that it&rsquo;s a
                      specialized team, so that means they have to be the best
                      at what they do. I am very happy and impressed.
                    </blockquote>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}