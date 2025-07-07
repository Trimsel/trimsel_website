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

const PostPage = ({ serializedContent }) => {
  const { frontmatter } = serializedContent;

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Trimsel Blog</title>
        <meta
          name="description"
          content={
            frontmatter.excerpt
              ? frontmatter.excerpt
              : "Best Mobile App Development Company in Chennai"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-min.ico" />
      </Head>
      <Header />
      <div className="postPage container py-4">
        <h1 className="mb-3">{frontmatter.title}</h1>
        {frontmatter.coverImage && (
          <img
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            className="blog-detail-cover"
            style={{
              maxWidth: "100%",
              borderRadius: "16px",
              marginBottom: "2rem",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            }}
          />
        )}
        <div className="mb-4" style={{ color: "#888" }}>
          <span>{frontmatter.date}</span>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <span style={{ marginLeft: 16 }}>
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-block",
                    background: "#F5F5F5",
                    borderRadius: "6px",
                    padding: "2px 10px",
                    marginRight: "8px",
                    fontSize: "0.85em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </span>
          )}
        </div>
        <MDXRemote {...serializedContent} components={components} />
      </div>
      <Footer />
    </>
  );
};

// This function generates static paths for all blog posts
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

// This function fetches and serializes the MDX content for a given slug
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
