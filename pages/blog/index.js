import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useMemo, useState } from "react";
import { NextSeo } from "next-seo";

const socialLinks = [
  {
    href: "https://www.facebook.com/trimsel.softwares",
    label: "Facebook",
    icon: "/images/facebook61.png",
  },
  {
    href: "https://www.instagram.com/trimsel/",
    label: "Instagram",
    icon: "/images/instagram61.png",
  },
  {
    href: "https://www.linkedin.com/company/trimsel",
    label: "LinkedIn",
    icon: "/images/linkedin71.png",
  },
  {
    href: "https://in.pinterest.com/trimsel/",
    label: "Pinterest",
    icon: "/images/pinterest71.png",
  },
];

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
  const [index, setIndex] = useState(0);

  const sortedPosts = useMemo(
    () =>
      [...posts].sort(
        (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      ),
    [posts]
  );

  const sliderPosts = sortedPosts.slice(0, 4);
  const recentPosts = sortedPosts.slice(0, 2);
  const categoryTags = useMemo(
    () =>
      Array.from(
        new Set(
          posts.flatMap((post) => post.frontmatter?.tags ?? [])
        )
      ).filter(Boolean),
    [posts]
  );

  const sliderLength = sliderPosts.length;
  const activeIndex = sliderLength ? Math.min(index, sliderLength - 1) : 0;

  const handlePrev = () => {
    if (sliderLength <= 1) return;
    setIndex((prev) => (prev === 0 ? sliderLength - 1 : prev - 1));
  };

  const handleNext = () => {
    if (sliderLength <= 1) return;
    setIndex((prev) => (prev === sliderLength - 1 ? 0 : prev + 1));
  };

  const tagPillClasses =
    "inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600";

  return (
    <>
      <NextSeo
        title="Trimsel Blog | Cloud, DevOps, AI & Product Engineering Insights"
        description="Read Trimsel's latest insights on cloud adoption, DevOps automation, AI development, and custom software delivery for startups and enterprises."
        canonical="https://www.trimsel.com/blog"
        openGraph={{
          type: "article",
          url: "https://www.trimsel.com/blog",
          title:
            "Trimsel Blog | Cloud, DevOps, AI & Product Engineering Insights",
          description:
            "Expert articles from Trimsel's team covering cloud consulting, DevOps, AI/ML, and digital product engineering.",
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
            "Catch up on Trimsel's latest articles exploring cloud, DevOps, AI, and software innovation.",
        }}
        additionalMetaTags={[{ name: "robots", content: "index, follow" }]}
      />

      <main className="bg-white text-slate-900">
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <Header />
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-3 text-white/30">/</span>
              Blog
            </p>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.7fr,1fr]">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.5em] text-brand">
                    Insights
                  </p>
                  <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                    Expanding Our Knowledge & Yours, One Blog At A Time
                  </h1>
                </div>
                <p className="text-lg text-white/80">
                  All the latest news, playbooks, and experiments from Trimsel&apos;s
                  product engineers, strategists, and growth partners.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner">
                <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-white/80">
                  Follow us
                </h2>
                <p className="mt-2 text-sm text-white/70">
                  Tap into the channels where we share prototypes, behind the
                  scenes learnings, and weekly prompts.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map(({ href, label, icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow Trimsel on ${label}`}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-2 transition hover:-translate-y-1 hover:bg-white/20"
                    >
                      <Image src={icon} width={32} height={32} alt={label} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.5fr,1fr]">
              <div className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Recent posts
                  </h2>
                  {sliderLength > 0 && (
                    <p className="text-sm font-semibold text-slate-500">
                      {String(activeIndex + 1).padStart(2, "0")} / {" "}
                      {String(sliderLength).padStart(2, "0")}
                    </p>
                  )}
                </div>
                {sliderLength > 0 ? (
                  <div className="relative mt-6">
                    <div className="overflow-hidden rounded-2xl">
                      <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                      >
                        {sliderPosts.map((post) => (
                          <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block w-full flex-shrink-0"
                          >
                            <article className="flex h-full flex-col">
                              <div className="overflow-hidden rounded-2xl bg-slate-100">
                                <Image
                                  src={post.frontmatter.thumbnailUrl}
                                  alt={post.frontmatter.title}
                                  width={640}
                                  height={420}
                                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                                />
                              </div>
                              <div className="mt-6 flex flex-wrap gap-2">
                                {post.frontmatter.tags.slice(0, 2).map((tag) => (
                                  <span key={`${post.slug}-tag-${tag}`} className={tagPillClasses}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-4 space-y-2">
                                <h3 className="text-2xl font-semibold text-slate-900">
                                  {post.frontmatter.title}
                                </h3>
                                <p className="text-sm text-slate-500">
                                  {post.frontmatter.date}
                                </p>
                              </div>
                            </article>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {sliderLength > 1 && (
                      <div className="pointer-events-none absolute inset-y-0 flex items-center justify-between px-2">
                        <button
                          type="button"
                          onClick={handlePrev}
                          aria-label="Show previous blog post"
                          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-lg transition hover:-translate-x-0.5 hover:text-brand"
                        >
                          <Image
                            src="/images/circle-arrow-left.png"
                            width={32}
                            height={32}
                            alt="Previous blog posts"
                          />
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          aria-label="Show next blog post"
                          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-lg transition hover:translate-x-0.5 hover:text-brand"
                        >
                          <Image
                            src="/images/circle-arrow-right.png"
                            width={32}
                            height={32}
                            alt="Next blog posts"
                          />
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="mt-6 text-sm text-slate-500">
                    New insights are on the way. Check back soon for fresh posts.
                  </p>
                )}
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-xl">
                <h3 className="text-lg font-semibold text-slate-900">
                  Categories
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {categoryTags.length > 0 ? (
                    categoryTags.map((tag) => (
                      <span key={tag} className={tagPillClasses}>
                        {tag}
                      </span>
                    ))
                  ) : (
                    <p className="col-span-2 text-sm text-slate-500">
                      No categories yet.
                    </p>
                  )}
                </div>
                <h3 className="mt-8 text-lg font-semibold text-slate-900">
                  Recent posts
                </h3>
                <div className="mt-4 space-y-4">
                  {recentPosts.length > 0 ? (
                    recentPosts.map((post) => (
                      <Link
                        key={`recent-${post.slug}`}
                        href={`/blog/${post.slug}`}
                        className="flex gap-4 rounded-2xl border border-slate-100 p-4 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                      >
                        <div className="relative h-24 w-28 overflow-hidden rounded-xl bg-slate-100">
                          <Image
                            src={post.frontmatter.thumbnailUrl}
                            alt={post.frontmatter.title}
                            fill
                            sizes="112px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex flex-wrap gap-2">
                            {post.frontmatter.tags.slice(0, 1).map((tag) => (
                              <span key={`${post.slug}-recent-${tag}`} className={tagPillClasses}>
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="mt-2 text-sm font-semibold text-slate-900">
                            {post.frontmatter.title}
                          </p>
                          <span className="mt-auto text-xs text-slate-500">
                            {post.frontmatter.date}
                          </span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-slate-500">No recent posts yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-brand">
                Library
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Dive into our latest analysis, walkthroughs, and playbooks
              </h2>
              <p className="text-base text-slate-500">
                Every article is written with builders in mind so you can ship,
                automate, and de-risk faster.
              </p>
            </div>
            {sortedPosts.length > 0 ? (
              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {sortedPosts.map((post) => (
                  <Link
                    key={`grid-${post.slug}`}
                    href={`/blog/${post.slug}`}
                    className="group block h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl"
                  >
                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src={post.frontmatter.thumbnailUrl}
                        alt={post.frontmatter.title}
                        width={640}
                        height={420}
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.frontmatter.tags.slice(0, 2).map((tag) => (
                        <span key={`${post.slug}-grid-${tag}`} className={tagPillClasses}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                      {post.frontmatter.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      {post.frontmatter.date}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="mt-8 text-center text-sm text-slate-500">
                No blog posts available right now.
              </p>
            )}
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1 space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.5em] text-brand">
                  Build with trimsel
                </p>
                <h2 className="text-3xl font-semibold leading-tight">
                  We create digital products that help unlock opportunities and
                  embrace innovation.
                </h2>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
                >
                  Let&apos;s discuss your project
                  <Image
                    src="/images/material-symbols_arrow-right-alt.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex justify-center lg:w-[40%]">
                <Image
                  src="/images/blog-cta.png"
                  width={454}
                  height={474}
                  alt="Chat with our expert"
                  className="w-full max-w-sm"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
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
