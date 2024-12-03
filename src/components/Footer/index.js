"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Footer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname()
  
  const cat = pathname.startsWith("/categories/")
  ? pathname.split("/categories/")[1]
  : "all";

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/categories/${cat}?search=${encodeURIComponent(searchQuery)}`);
    }
    setSearchQuery("")
  };

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      {/* Heading and Description */}
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Search for Topics | Guides | Inspiration
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Explore our collection of stories and guides tailored for digital
        nomads and travel enthusiasts.
      </p>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded"
      >
        <input
          type="text"
          placeholder="Search topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark dark:text-light focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />
        <button
          type="submit"
          className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        >
          Search
        </button>
      </form>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center items-center mt-8 space-x-4 text-sm sm:text-base">
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms-and-services" className="hover:underline">
          Terms & Services
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2023 Nomadology. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          Sitemap
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <span  className="underline" target="_blank">
            Houair Eddrief
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
