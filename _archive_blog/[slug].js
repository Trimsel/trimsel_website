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
        <title>{frontmatter.title} </title>
        <meta
          name="description"
          content="Best Web Development Company in India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-min.ico" />
      </Head>
      <Header />
      <div className="postPage">
        <h1> {frontmatter.title} </h1>
        <MDXRemote {...serializedContent} components={components} />
      </div>
      <Footer />
    </>
  );
};

// export const getStaticPaths = async () => {
//   const files = fs.readdirSync(path.join("posts"));
//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.split(".")[0],
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const markdown = fs.readFileSync(
//     path.join("posts", params.slug + ".mdx"),
//     "utf-8"
//   );

//   const serializedContent = await serialize(markdown, {
//     format: "mdx",
//     parseFrontmatter: true,
//     scope: "",
//     mdxOptions: {
//       remarkPlugins: [],
//       rehypePlugins: [],
//     },
//   });

//   return {
//     props: {
//       serializedContent,
//     },
//     revalidate: 60,
//   };
// };

export default PostPage;
