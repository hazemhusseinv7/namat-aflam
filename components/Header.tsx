"use client";

import Image from "next/image";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

import { IoMenuOutline } from "react-icons/io5";
import { RiTeamFill, RiQuestionnaireFill } from "react-icons/ri";
import { MdVideoLibrary } from "react-icons/md";
import { BiSolidVideoRecording } from "react-icons/bi";

const Header = () => {
  const menuItems = [
    { name: "من نحن", href: "/about-us", icon: RiTeamFill },
    { name: "أعمالنا", href: "/#portfolio", icon: MdVideoLibrary },
    { name: "لماذا نحن", href: "/#why-us", icon: RiQuestionnaireFill },
    { name: "خدماتنا", href: "/#services", icon: BiSolidVideoRecording },
  ];

  const iconClasses = "text-xl text-default-500 pointer-events-none shrink-0";

  return (
    <Navbar className="z-200">
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image src="/logo/icon_alt.svg" width={20} height={20} alt="Logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link color="foreground" href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/#contact-us" variant="flat">
            تواصل معنا
          </Button>
        </NavbarItem>
      </NavbarContent>
      <Dropdown>
        <DropdownTrigger className="sm:hidden">
          <IoMenuOutline className="size-7" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
          {menuItems.map(({ name, href, icon: Icon }) => (
            <DropdownItem
              as={Link}
              href={href}
              key={name}
              startContent={<Icon className={iconClasses} />}
            >
              {name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
};

export default Header;
