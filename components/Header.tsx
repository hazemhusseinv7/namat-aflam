"use client";

import Image from "next/image";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
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
    { name: "من نحن", link: "/about-us", icon: RiTeamFill },
    { name: "أعمالنا", link: "/#portfolio", icon: MdVideoLibrary },
    { name: "لماذا نحن", link: "/#why-us", icon: RiQuestionnaireFill },
    { name: "خدماتنا", link: "/#services", icon: BiSolidVideoRecording },
    { name: "المدونة", link: "/blog", icon: BiSolidVideoRecording },
  ];

  const iconClasses = "text-xl text-default-500 pointer-events-none shrink-0";

  return (
    <Navbar className="max-sm:bg-transparent max-sm:backdrop-blur-none z-200">
      <NavbarContent className="w-fit !flex-none" justify="start">
        <NavbarBrand>
          <Link href="/">
            <Image src="/logo/icon_alt.svg" width={20} height={20} alt="Logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex w-full gap-4" justify="center">
        {menuItems.map(({ name, link, icon: Icon }) => (
          <NavbarItem key={name}>
            <Link color="foreground" href={link}>
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <Dropdown>
        <DropdownTrigger className="sm:hidden">
          <IoMenuOutline className="size-7" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
          {menuItems.map(({ name, link, icon: Icon }) => (
            <DropdownItem
              as={Link}
              href={link}
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
