"use client";

import { useEffect, useState } from "react";

import { Accordion, AccordionItem } from "@heroui/react";
import { getFrequentlyAskedQuestionsData } from "@/lib/sanity/queries";

export default function Page() {
  const [data, setData] = useState<FrequentlyAskedQuestionsType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const faqData = await getFrequentlyAskedQuestionsData();
        setData(faqData);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
          <h1 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            الأسئلة الشائعة
          </h1>
        </div>
        {/* End Title */}

        {!data || !data.questions || data.questions.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center mt-50">
            <p className="text-gray-500 dark:text-neutral-500">
              لا توجد بيانات متاحة حالياً.
            </p>
          </div>
        ) : (
          <Accordion
            defaultExpandedKeys={["0"]}
            variant="shadow"
            className="max-w-2xl mx-auto"
          >
            {data.questions.map(({ title, subtitle, description }, i) => (
              <AccordionItem
                key={i}
                title={title}
                subtitle={subtitle}
                aria-label={title}
              >
                {description}
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </main>
  );
}
