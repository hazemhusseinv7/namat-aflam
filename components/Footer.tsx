import Link from "next/link";
import Image from "next/image";

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
    <footer className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="Home" className="mx-auto block size-fit">
          <Image
            className="w-40 lg:w-56 max-w-3/4 mx-auto"
            src="/logo/logo.svg"
            width={224}
            height={224}
            alt="Logo"
          />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="text-muted-foreground block hover:text-primary transition-colors duration-300"
            >
              <span>{link.title}</span>
            </Link>
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
              className="block text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <item.icon className="size-6" />
            </Link>
          ))}
        </div>
        <span className="text-muted-foreground flex justify-center items-center gap-1 text-sm">
          <FaRegCopyright className="inline" />
          {new Date().getFullYear()} جميع الحقوق محفوظة.{" "}
          <Link
            href="/"
            className="hover:text-primary transition-colors duration-300"
          >
            شركة فكرة نمط
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
