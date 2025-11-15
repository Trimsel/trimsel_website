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
const tagPillClasses =
  "inline-flex items-center rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand";

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <section className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-slate-50 py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {frontmatter.coverImage && (
            <img
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              className="w-full max-h-[480px] rounded-3xl border border-white bg-white object-contain shadow-2xl"
            />
          )}
        </div>
      </section>

      {/* Blog Post Content */}
      <main className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="border-b border-slate-100 pb-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            {frontmatter.author && (
              <span className="font-semibold uppercase tracking-[0.3em] text-brand">
                {frontmatter.author}
              </span>
            )}
            {publishedDate && (
              <span className="text-slate-400">&middot; {publishedDate}</span>
            )}
            {tags.map((tag) => (
              <span key={tag} className={tagPillClasses}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            {frontmatter.title}
          </h1>
        </div>

        <div className="blog-post-content max-w-none space-y-6 pt-8 text-lg leading-relaxed text-slate-700">
          <MDXRemote {...serializedContent} components={components} />
        </div>

        {faqEntries.length > 0 && (
          <section className="mt-12 space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqEntries.map((item, idx) => (
                <article
                  key={`faq-${idx}`}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-base text-slate-600">{item.answer}</p>
                </article>
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
