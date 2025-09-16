import PillNav from "@/components/PillNav";

const Header = () => {
  return (
    <header className="relative">
      <PillNav
        logo="/logo/icon_alt.svg"
        logoAlt="Logo"
        items={[
          { label: "الرئيسية", href: "/" },
          { label: "إحصائيات", href: "/#stats" },
          { label: "أعمالنا", href: "/#portfolio" },
          { label: "تواصل معنا", href: "/#contact" },
        ]}
        activeHref="/"
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
