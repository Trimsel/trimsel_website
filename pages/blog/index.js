import Link from "next/link";
import Image from "next/image";
import Badge from "react-bootstrap/Badge";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "../../components/Button";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { NextSeo } from "next-seo";

const CarouselControls = ({ onClickPrev, onClickNext }) => (
  <>
    <span className="carousel-control-prev" onClick={onClickPrev}>
      <img src="/images/circle-arrow-left.png" className="prevblg" alt="Previous blog posts" />
    </span>
    <span className="carousel-control-next" onClick={onClickNext}>
      <img src="/images/circle-arrow-right.png" className="nextblg" alt="Next blog posts" />
    </span>
  </>
);

const mapTags = (tags) => {
  if (!Array.isArray(tags)) return [];

  return tags
    .map((tag) => {
      if (typeof tag === "string") return tag;
      if (tag && typeof tag === "object") {
        if ("label" in tag && typeof tag.label === "string") return tag.label;
        if ("name" in tag && typeof tag.name === "string") return tag.name;
        if ("tag" in tag && typeof tag.tag === "string") return tag.tag;
      }
      return "";
    })
    .filter(Boolean);
};

export default function Blog({ posts }) {
  const slides = [0, 1, 2, 3, 4];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    if (index === 0) {
      setIndex(newSlicedPosts.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index === newSlicedPosts.length - 1) {
      // if we&rsquo;re on the last slide, loop back to the first slide
      setIndex(0);
    } else {
      // otherwise, go to the next slide
      setIndex(index + 1);
    }
  };

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );

  const slicedPosts = sortedPosts.slice(0, 2);
  const newSlicedPosts = sortedPosts.slice(0, 4);
  return (
    <>
      <NextSeo
        title="Trimsel Blog | Cloud, DevOps, AI & Product Engineering Insights"
        description="Read Trimsel’s latest insights on cloud adoption, DevOps automation, AI development, and custom software delivery for startups and enterprises."
        canonical="https://www.trimsel.com/blog"
        openGraph={{
          type: "article",
          url: "https://www.trimsel.com/blog",
          title: "Trimsel Blog | Cloud, DevOps, AI & Product Engineering Insights",
          description:
            "Expert articles from Trimsel’s team covering cloud consulting, DevOps, AI/ML, and digital product engineering.",
          locale: "en_IN",
          site_name: "Trimsel",
          images: [
            {
              url: "https://www.trimsel.com/images/home-hero-banner.webp",
              width: 1200,
              height: 630,
              alt: "Trimsel blog covering cloud, DevOps, and AI topics",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@TrimselSoftwares",
          site: "@TrimselSoftwares",
          title: "Trimsel Blog – Tech Insights",
          description:
            "Catch up on Trimsel’s latest articles exploring cloud, DevOps, AI, and software innovation.",
        }}
        additionalMetaTags={[{ name: "robots", content: "index, follow" }]}
      />
      <section className="blog-home">
        <Header />
        <div className="container blog-container">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <img src="/images/Group227.png" alt="" aria-hidden="true" />
            <Breadcrumb.Item active>
              {" "}
              <strong> Blogs </strong>{" "}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <h1 className="hero-title">
                Expanding Our Knowledge & Yours, One Blog At A Time
              </h1>
              <p className="hero-description">
                All the latest news and events of our creative team.
              </p>
            </div>
            <div className="col-lg-4 col-md-4">
              <button className="btn social-btn">
                <h4 className="social-title mb-3">Follow Us:</h4>
                <Link
                  href="https://www.facebook.com/trimsel.softwares"
                  target="_blank"
                >
                  <img src="/images/facebook61.png" className="social-img" alt="Follow Trimsel on Facebook" />
                </Link>
                <Link
                  href="https://www.instagram.com/trimsel/"
                  target="_blank"
                >
                  <img src="/images/instagram61.png" className="social-img" alt="Follow Trimsel on Instagram" />
                </Link>
                <Link href="https://www.linkedin.com/company/trimsel">
                  <img src="/images/linkedin71.png" className="social-img" alt="Follow Trimsel on LinkedIn" />
                </Link>
                <Link href="https://in.pinterest.com/trimsel/">
                  <img src="/images/pinterest71.png" className="social-img" alt="Follow Trimsel on Pinterest" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="blog-carousel">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <h2 className="blg-rcnt">Recent Post</h2>
              <Carousel
                animation="fade"
                interval={null}
                activeIndex={index}
                onSelect={handleSelect}
                indicators={false}
                className="blog-carousel"
              >
                {newSlicedPosts.map((post, index) => (
                  <Carousel.Item key={post.slug} className="blg-car-item">
                    <Link href={`/blog/${post.slug}`} className="dyblog">
                      <div className="image-thumb">
                        <Image
                          src={post.frontmatter.thumbnailUrl}
                          alt="thumbnail"
                          width={500}
                          height={400}
                          className="blog--car--thumb"
                        />
                      </div>
                      <div className="pt-4 new-bdg">
                        <Badge className="me-2 my-badge">
                          {" "}
                          {post.frontmatter.tags[0]}{" "}
                        </Badge>
                        <Badge className="me-2 my-badge">
                          {" "}
                          {post.frontmatter.tags[1]}{" "}
                        </Badge>
                      </div>
                      <div className="pt-2">
                        <h2 className="blog-car-title">
                          {post.frontmatter.title}
                        </h2>
                        <p className="blog-exp">{post.frontmatter.date}</p>
                      </div>
                    </Link>
                  </Carousel.Item>
                ))}
                <Carousel.Caption>
                  <CarouselControls
                    onClickPrev={handlePrev}
                    onClickNext={handleNext}
                  />
                </Carousel.Caption>
              </Carousel>
            </div>
            <div className="col-lg-5 col-md-5">
              <h3 className="catg-heading pb-3">Categories :</h3>
              <div className="row">
                {posts.map((post, index) => (
                  <div className="col-lg-6 col-md-6" key={index}>
                    <Stack direction="vertical" gap={2}>
                      <Badge className="me-2 my-cat-badge">
                        {" "}
                        {post.frontmatter.tags[0]}{" "}
                      </Badge>
                    </Stack>
                  </div>
                ))}
              </div>
              <h3 className="catg-heading pt-5">Recent Post:</h3>
              {slicedPosts.map((post, index) => (
                <div className="card blog-card" key={index}>
                  <Link href={`/blog/${post.slug}`} className="dyblog">
                    <div className="row no-gutters">
                      <div className="col-lg-5 col-md-5 py-3">
                        <Image
                          src={post.frontmatter.thumbnailUrl}
                          alt="thumbnail"
                          width={500}
                          height={400}
                          className="blog-recent"
                        />
                      </div>
                      <div className="col-lg-7 col-md-7">
                        <Badge className="me-2 my-badge mb-2 mt-4">
                          {" "}
                          {post.frontmatter.tags[0]}{" "}
                        </Badge>
                        <h5 className="blog-card-title">
                          {post.frontmatter.title}
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="blog-tabs mt-5">
        <div className="container">
          <div className="row my-5 py-5">
            {posts.map((post, index) => (
              <div className="col-lg-4 col-md-4 pb-4" key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="dyblog">
                  <div className="blog blog-card h-100">
                    <div className="image-thumb">
                      <Image
                        src={post.frontmatter.thumbnailUrl}
                        alt="thumbnail"
                        width={500}
                        height={400}
                        className="blog-thumb"
                      />
                    </div>
                    <div className="pt-4 new-bdg">
                      <Badge className="me-2 my-badge">
                        {" "}
                        {post.frontmatter.tags[0]}{" "}
                      </Badge>
                      <Badge className="me-2 my-badge">
                        {" "}
                        {post.frontmatter.tags[1]}{" "}
                      </Badge>
                    </div>
                    <div className="pt-1">
                      <h2 className="blog-title">{post.frontmatter.title}</h2>
                      <p className="blog-exp">{post.frontmatter.date}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blg-sec-cta">
        <div className="container">
          <Card className="port-blog-cta my-5">
            <Card.Body>
              <div className="row">
                <div className="col-lg-7 col-md-7 col-12">
                  <h2 className="blgcta-heading pt-2">
                    We Create Digital Products That Help Unlock Opportunities &
                    Embrace Innovation.
                  </h2>
                  <Link href="/contact-us" passHref>
                    <button className="blgcta-btn mt-3">
                      {" "}
                      Let&rsquo;s Discuss Your Project{" "}
                      <img src="/images/material-symbols_arrow-right-alt.png" alt="" aria-hidden="true" />{" "}
                    </button>
                  </Link>
                </div>
                <div className="col-lg-5 col-md-5">
                  <Image
                    src="/images/blog-cta.png"
                    width={454}
                    height={474}
                    alt="Chat with our expert "
                    className="blgcta-image"
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);
    const normalizedFrontmatter = {
      ...data,
      date: data?.date
        ? typeof data.date === "string"
          ? data.date
          : data.date.toISOString().split("T")[0]
        : "",
      tags: mapTags(data?.tags),
    };

    return {
      frontmatter: normalizedFrontmatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: { posts },
    revalidate: 60,
  };
};
