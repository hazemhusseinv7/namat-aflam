import Link from "next/link";
import Image from "next/image";

import { getBlogPosts } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

import { GoChevronLeft } from "react-icons/go";

export default async function Page() {
  const posts = await getBlogPosts();

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
        {!posts || posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-neutral-400">
              لا توجد مقالات متاحة حالياً
            </p>
          </div>
        ) : (
          // Grid
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(({ _id, title, slug, mainImage }) => (
              // Card
              <Link
                className="group hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10"
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
          // End Grid
        )}
      </div>
      {/* End Card Blog */}
    </main>
  );
}
