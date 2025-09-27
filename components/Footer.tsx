import Link from "next/link";
import Image from "next/image";

import HoverLink from "@/components/HoverLink";

import {
  FaSquareVimeo,
  FaSquareInstagram,
  FaTiktok,
  FaYoutube,
  FaRegCopyright,
} from "react-icons/fa6";

const links = [
  {
    title: "من نحن",
    link: "/#about-us",
  },
  {
    title: "لماذا نحن",
    link: "/#why-us",
  },
  {
    title: "خدماتنا",
    link: "/#services",
  },
  {
    title: "تواصل معنا",
    link: "/#contact",
  },
];

const socialMedia = [
  {
    name: "Vimeo",
    link: process.env.NEXT_PUBLIC_VIMEO,
    icon: FaSquareVimeo,
  },
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
            src="/logo/logo_colored.svg"
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
              className="block text-foreground hover:text-orange-500 transition-colors duration-300"
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
            className="hover:text-orange-500 transition-colors duration-300"
          >
            شركة فكرة نمط
          </Link>
        </span>
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%), #000000",
        }}
      />
    </footer>
  );
};

export default Footer;
