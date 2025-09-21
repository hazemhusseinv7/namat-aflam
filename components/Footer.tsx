import Link from "next/link";
import Image from "next/image";

import HoverLink from "@/components/HoverLink";

import {
  FaSquareInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
  FaRegCopyright,
} from "react-icons/fa6";

const links = [
  {
    title: "إحصائيات",
    link: "/#stats",
  },
  {
    title: "أعمالنا",
    link: "/#portfolio",
  },
  {
    title: "تواصل معنا",
    link: "/#contact",
  },
];

const socialMedia = [
  {
    name: "Instagram",
    link: process.env.NEXT_PUBLIC_INSTAGRAM,
    icon: FaSquareInstagram,
  },
  {
    name: "Tiktok",
    link: process.env.NEXT_PUBLIC_TIKTOK,
    icon: FaTiktok,
  },
  {
    name: "Linkedin",
    link: process.env.NEXT_PUBLIC_LINKEDIN,
    icon: FaLinkedin,
  },
  {
    name: "Youtube",
    link: process.env.NEXT_PUBLIC_YOUTUBE,
    icon: FaYoutube,
  },
].filter((item) => item.link);

const Footer = () => {
  return (
    <footer className="pt-14 pb-10 relative">
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <Link href="/" aria-label="Home" className="mx-auto block size-fit">
          <Image
            className="w-40 lg:w-56 max-w-3/4 mx-auto"
            src="/logo/logo.svg"
            width={512}
            height={180}
            alt="Logo"
          />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <HoverLink key={index} href={link.link} label={link.title} />
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {socialMedia.map((item) => (
            <Link
              key={item.name}
              href={item.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="block text-foreground hover:text-background transition-colors duration-300"
            >
              <item.icon className="size-6" />
            </Link>
          ))}
        </div>
        <span className="text-foreground flex justify-center items-center gap-1 text-sm">
          <FaRegCopyright className="inline" />
          {new Date().getFullYear()} جميع الحقوق محفوظة.{" "}
          <Link
            href="/"
            className="hover:text-background transition-colors duration-300"
          >
            شركة فكرة نمط
          </Link>
        </span>
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
        `,
        }}
      />
    </footer>
  );
};

export default Footer;
