import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const cat = (await params).slug;
  return {
    title: `${cat.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${
      cat === "all" ? "web development" : cat
    } through our collection of expert blogs and tutorials`,
  };
}

const CategoryPage = async ({ params, searchParams }) => {
  const cat = (await params).slug; // Current category
  const search = searchParams.search?.toLowerCase() || ""; // Search query, converted to lowercase

  // Generate a list of all categories
  const allCategories = ["all"]; // Start with 'all'
  allBlogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });
  });

  // Sort categories alphabetically
  allCategories.sort();

  // Filter blogs based on category
  let filteredBlogs = allBlogs.filter((blog) => {
    if (cat === "all") {
      return true; // Show all blogs if category is 'all'
    }
    return blog.tags.some((tag) => slug(tag) === cat);
  });

  // Further filter blogs based on search query
  if (search) {
    filteredBlogs = filteredBlogs.filter((blog) => {
      // Match the title or content against the search query
      return (
        blog.title.toLowerCase().includes(search) ||
        blog.description.toLowerCase().includes(search)
      );
    });
  }

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{cat}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={cat} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          ))
        ) : (
          <p className="text-center col-span-full">
            No blogs found matching your search criteria.
          </p>
        )}
      </div>
    </article>
  );
};

export default CategoryPage;
