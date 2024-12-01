import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import siteMetadata from "@/src/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) return {};

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  const imageList = blog.image
    ? Array.isArray(blog.image)
      ? blog.image
      : [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
    : [siteMetadata.socialBanner];

  const ogImages = imageList.map((img) => ({
    url: img.startsWith("http") ? img : siteMetadata.siteUrl + img,
  }));

  const authors = blog.author ? [blog.author] : [siteMetadata.author];

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `${siteMetadata.siteUrl}/${params.slug}`,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    notFound();
  }

  const imageList = blog.image
    ? Array.isArray(blog.image)
      ? blog.image
      : [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
    : [siteMetadata.socialBanner];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog.author || siteMetadata.author,
        url: siteMetadata.twitter,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div className="absolute inset-0 bg-dark/60 dark:bg-dark/40" />
          <Image
            src={blog.image.filePath.replace("../public", "")}
            alt={blog.title}
            width={blog.image.width || 1200}
            height={blog.image.height || 630}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <Tag
              name={blog.tags?.[0] || "General"}
              link={`/categories/${slug(blog.tags?.[0] || "general")}`}
              className="px-6 text-sm py-2"
            />
            <h1 className="mt-6 text-2xl md:text-3xl lg:text-5xl font-semibold text-light capitalize">
              {blog.title}
            </h1>
          </div>
        </div>
        <BlogDetails blog={blog} slug={params.slug} />
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-4">
            <details
              className="border border-dark dark:border-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold cursor-pointer">
                Table Of Content
              </summary>
              <ul className="mt-4 text-base">
                {blog.toc.map((heading) => (
                  <li key={heading.slug} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      className={`pl-${heading.level === "three" ? 4 : 0}`}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <RenderMdx blog={blog} />
          </div>
        </div>
      </article>
    </>
  );
}
