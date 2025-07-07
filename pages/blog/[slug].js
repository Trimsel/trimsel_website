import fs from "fs";
import path from "path";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Button from "../../components/Button";
import SyntaxHighlighter from "react-syntax-highlighter";
import Header from "../../components/header";
import Footer from "../../components/footer";

const components = { Button, SyntaxHighlighter };

const HEADER_HEIGHT = 50; // adjust this if your header height is different

const PostPage = ({ serializedContent }) => {
  const { frontmatter } = serializedContent;

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Trimsel Blog</title>
        <meta
          name="description"
          content={frontmatter.excerpt || "Best Mobile App Development Company in Chennai"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-min.ico" />
      </Head>
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
            | {frontmatter.date}
          </span>
          {frontmatter.tags && frontmatter.tags.map((tag) => (
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

  return {
    props: {
      serializedContent,
    },
    revalidate: 60,
  };
};

export default PostPage;
