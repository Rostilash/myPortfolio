import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Link } from "react-scroll";

export const NavigationSimple = () => {
  const langContext = useContext(LanguageContext);
  if (!langContext) return null;
  const { t } = langContext;

  const links = [
    { name: "home", value: t.h.home, duration: 2000 },
    { name: "about", value: t.h.about, duration: 2000 },
    { name: "my_works", value: t.h.my_works, duration: 1000 },
    { name: "contacts", value: t.h.contacts, duration: 1000 },
  ];

  return (
    <nav className="space-x-4 font-light custom-text py-2 px-4 hidden md:block">
      {/* Links from react-scroll */}
      {links.map((link) => (
        <Link key={link.name} to={link.name} smooth={true} duration={link.duration} className="cursor-pointer hover:text-blue-300 text-xl">
          {link.value}
        </Link>
      ))}
    </nav>
  );
};
