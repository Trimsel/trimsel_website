import fs from "fs";
import path from "path";
import Head from "next/head";
import { ArticleJsonLd } from "next-seo";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Button from "../../components/Button";
import SyntaxHighlighter from "react-syntax-highlighter";
import Header from "../../components/header";
import Footer from "../../components/footer";

const components = { Button, SyntaxHighlighter };

const HEADER_HEIGHT = 50; // adjust this if your header height is different

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.trimsel.com";

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

const absoluteUrl = (url) => {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `${siteUrl}${url.startsWith("/") ? url : `/${url}`}`;
};

const PostPage = ({ serializedContent, slug }) => {
  const { frontmatter } = serializedContent;
  const seo = frontmatter.seo || {};

  const publishedDate =
    typeof frontmatter.date === "string"
      ? frontmatter.date
      : frontmatter.date
      ? new Date(frontmatter.date).toISOString().split("T")[0]
      : "";

  const metaTitle = seo.metaTitle || `${frontmatter.title} | Trimsel Blog`;
  const metaDescription =
    seo.metaDescription ||
    frontmatter.excerpt ||
    "Insights on cloud, DevOps, AI, and software product engineering from Trimsel.";
  const canonicalUrl = seo.canonicalUrl || `${siteUrl}/blog/${slug}`;
  const ogImage = absoluteUrl(seo.ogImage || frontmatter.coverImage || frontmatter.thumbnailUrl);
  const tags = mapTags(frontmatter.tags);
  const faqEntries = Array.isArray(seo.faq)
    ? seo.faq.filter((item) => item && item.question && item.answer)
    : [];
  const allowIndexing = seo.indexing !== false;

  const jsonLd = [];

  if (faqEntries.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntries.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (seo.jsonLd) {
    try {
      const parsed = JSON.parse(seo.jsonLd);
      jsonLd.push(parsed);
    } catch (error) {
      console.warn("Invalid JSON-LD in frontmatter:", error);
    }
  }

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon-min.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="robots"
          content={allowIndexing ? "index, follow" : "noindex, nofollow"}
        />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogImage && <meta property="og:image:alt" content={frontmatter.title} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}

        {tags &&
          tags.map((tag) => (
            <meta property="article:tag" content={tag} key={`tag-${tag}`} />
          ))}
        {publishedDate && (
          <meta property="article:published_time" content={publishedDate} />
        )}

        {jsonLd.map((schema, index) => (
          <script
            key={`jsonld-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      {allowIndexing && (
        <ArticleJsonLd
          url={canonicalUrl}
          title={frontmatter.title}
          images={ogImage ? [ogImage] : []}
          datePublished={publishedDate || undefined}
          dateModified={publishedDate || undefined}
          authorName={frontmatter.author || "Trimsel"}
          publisherName="Trimsel"
          publisherLogo={`${siteUrl}/images/logo.png`}
          description={metaDescription}
        />
      )}
      <Header />
      {/* Spacer below header */}
      <div style={{ height: HEADER_HEIGHT }} />
      {/* Hero Image */}
      <div
  className="blog-post-hero-full"
  style={{
    width: "100vw",
    maxWidth: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    background: "#f8f9fb",
    padding: "24px 0",
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  {frontmatter.coverImage && (
    <img
      src={frontmatter.coverImage}
      alt={frontmatter.title}
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "480px",
        objectFit: "contain",
        display: "block",
        borderRadius: "18px",
        background: "#fff",
      }}
    />
  )}
</div>
      {/* Blog Post Content */}
      <main
        className="container blog-post-main"
        style={{ maxWidth: "800px", margin: "0 auto", paddingBottom: 40 }}
      >
        <div className="blog-post-meta" style={{ marginBottom: "1.5rem" }}>
          <span style={{
            color: "#007bff",
            fontWeight: 500,
            marginRight: "8px"
          }}>
            {frontmatter.author}
          </span>
          <span style={{ color: "#888", fontSize: "1rem", marginRight: "8px" }}>
            | {publishedDate}
          </span>
          {tags.map((tag) => (
            <span key={tag} style={{
              display: "inline-block",
              background: "#E6F0FA",
              color: "#007bff",
              borderRadius: "6px",
              padding: "2px 10px",
              marginRight: "8px",
              fontSize: "0.9em",
              fontWeight: 500
            }}>{tag}</span>
          ))}
        </div>
        <h1 className="blog-post-title" style={{
          fontSize: "2.6rem",
          fontWeight: 700,
          lineHeight: "1.2",
          marginBottom: "1.2rem"
        }}>{frontmatter.title}</h1>
        <div className="blog-post-content" style={{
          fontSize: "1.2rem",
          lineHeight: "1.7",
          color: "#2c2c2c"
        }}>
          <MDXRemote {...serializedContent} components={components} />
        </div>
        {faqEntries.length > 0 && (
          <section style={{ marginTop: "3rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {faqEntries.map((item, idx) => (
                <div
                  key={`faq-${idx}`}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "1.25rem",
                    background: "#f9fafb",
                  }}
                >
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: ".5rem" }}>
                    {item.question}
                  </h3>
                  <p style={{ margin: 0, lineHeight: 1.6 }}>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(/\.mdx?$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const markdown = fs.readFileSync(
    path.join("posts", params.slug + ".mdx"),
    "utf-8"
  );

  const serializedContent = await serialize(markdown, {
    format: "mdx",
    parseFrontmatter: true,
    scope: "",
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  const normalizedFrontmatter = {
    ...serializedContent.frontmatter,
    date: serializedContent.frontmatter?.date
      ? typeof serializedContent.frontmatter.date === "string"
        ? serializedContent.frontmatter.date
        : serializedContent.frontmatter.date.toISOString().split("T")[0]
      : "",
    tags: mapTags(serializedContent.frontmatter?.tags),
  };

  const safeSerializedContent = {
    ...serializedContent,
    frontmatter: normalizedFrontmatter,
  };

  return {
    props: {
      serializedContent: safeSerializedContent,
      slug: params.slug,
    },
    revalidate: 60,
  };
};

export default PostPage;
