import Loading from "@/components/Loading";

import { getTermsAndConditionsData } from "@/lib/sanity/queries";

import { HiOutlineDocumentText } from "react-icons/hi2";

export default async function Page() {
  const data = await getTermsAndConditionsData();

  return (
    <main className="min-h-screen">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
          <h1 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            الشروط والأحكام
          </h1>
        </div>
        {/* End Title */}

        {!data || !data.sections || data.sections.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center mt-50">
            <p className="text-gray-500 dark:text-neutral-500">
              لا توجد بيانات متاحة حالياً.
            </p>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-neutral-700">
            {data.sections.map(({ title, description }, i) => (
              <div key={i} className="py-8 first:pt-0 last:pb-0">
                <div className="flex gap-x-5">
                  <HiOutlineDocumentText className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500" />

                  <div className="grow">
                    <span className="md:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      {title}
                    </span>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
