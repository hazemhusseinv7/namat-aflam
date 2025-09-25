import PillNav from "@/components/PillNav";

const Header = () => {
  return (
    <header className="relative">
      <PillNav
        logo="/logo/icon_alt.svg"
        logoAlt="Logo"
        items={[
          { label: "من نحن", href: "/#about-us" },
          { label: "لماذا نحن", href: "/#why-us" },
          { label: "أعمالنا", href: "/#portfolio" },
          { label: "خدماتنا", href: "/#services" },
          { label: "تواصل معنا", href: "/#contact-us" },
        ]}
        // activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </header>
  );
};

export default Header;
