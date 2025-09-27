import Image from "next/image";

import { Tilt } from "@/components/motion-primitives/tilt";

const Services = () => {
  const services = [
    {
      title: "مقاطع ترويجية",
      description: "إعلانات تُعرض كأنها مشاهد افتتاحية لفيلم",
      img: "/services/img-1.svg",
    },
    {
      title: "تصوير فوتوغرافي",
      description: "صور بإضاءة وعمق يجعلها تصلح كملصق سينمائي",
      img: "/services/img-2.svg",
    },
    {
      title: "محتوى سوشيال ميديا",
      description: "لقطات قصيرة… مثل التريلر، تخطف الانتباه في ثوانٍ",
      img: "/services/img-3.svg",
    },
    {
      title: "إدارة الحملات الترويجية",
      description: "نكتب السيناريو التسويقي ونُخرج العرض الرقمي",
      img: "/services/img-4.svg",
    },
  ];

  return (
    <section id="services" className="relative">
      <div className="flex flex-col justify-center items-center gap-40 px-4 pb-40">
        <h2 className="after:from-background after:to-foreground relative max-w-[12ch] text-4xl lg:text-8xl uppercase leading-tight opacity-70 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
          خدماتنا
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {services.map((service) => (
            <Tilt rotationFactor={8} isRevese key={service.title}>
              <div
                style={{
                  borderRadius: "12px",
                }}
                className="flex max-w-[500px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
              >
                <div className="size-full bg-zinc-800">
                  <Image
                    src={service.img}
                    width={500}
                    height={500}
                    alt={service.title}
                    className="size-full object-cover -mt-16 lg:-mt-20"
                  />
                </div>
                <div className="px-4 pt-4 pb-8">
                  <h3 className="text-xl leading-snug text-zinc-950 dark:text-zinc-50">
                    {service.title}
                  </h3>
                  <p className="font-light text-md text-zinc-700 dark:text-zinc-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
