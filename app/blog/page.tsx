"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { Pagination } from "@heroui/react";

import Loading from "@/components/Loading";

import { getBlogPosts } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

import { GoChevronLeft } from "react-icons/go";

const POSTS_PER_PAGE = 6;

export default function Page() {
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await getBlogPosts();
        setAllPosts(posts || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setAllPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(startIndex, endIndex);

  return (
    <main>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        {/* Title */}
        <div className="relative flex w-full flex-col items-center justify-center pt-10 sm:pt-20 pb-32">
          <h1 className="after:from-background after:to-foreground relative max-w-[12ch] text-4xl lg:text-8xl uppercase leading-tight opacity-70 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
            المدونة
          </h1>
        </div>
        {/* End Title */}
        {loading ? (
          <Loading id="portfolio" className="min-h-120 lg:min-h-170" />
        ) : !allPosts || allPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-neutral-400">
              لا توجد مقالات متاحة حالياً
            </p>
          </div>
        ) : (
          <>
            {(() => {
              return (
                <div className="space-y-10">
                  {/* Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentPosts.map(({ _id, title, slug, mainImage }) => (
                      // Card
                      <Link
                        className="group bg-gray-200/70 hover:bg-gray-300/70 focus:outline-hidden focus:bg-gray-100 rounded-xl p-5 transition dark:bg-white/5 dark:hover:bg-white/20 dark:focus:bg-white/10"
                        href={`/blog/${slug.current}`}
                        key={_id}
                      >
                        <div className="aspect-[16/10]">
                          <Image
                            className="size-full object-cover rounded-xl"
                            width={400}
                            height={250}
                            src={urlFor(mainImage).width(400).height(250).url()}
                            alt={title}
                          />
                        </div>
                        <span className="block mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                          {title}
                        </span>
                        <div className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                          اقرأ المزيد
                          <GoChevronLeft className="shrink-0 size-4 transition ease-in-out group-hover:-translate-x-1 group-focus:translate-x-1" />
                        </div>
                      </Link>
                      // End Card
                    ))}
                  </div>
                  {/* End Grid */}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center">
                      <Pagination
                        page={currentPage}
                        total={totalPages}
                        showControls
                        showShadow
                        color="primary"
                        size="lg"
                        classNames={{
                          prev: "rotate-180",
                          next: "rotate-180",
                        }}
                        onChange={setCurrentPage}
                      />
                    </div>
                  )}
                  {/* End Pagination */}
                </div>
              );
            })()}
          </>
        )}
      </div>
      {/* End Card Blog */}
    </main>
  );
}
