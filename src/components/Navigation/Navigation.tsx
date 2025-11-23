import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";

export const Navigation = () => {
  const langContext = useContext(LanguageContext);
  if (!langContext) return null;
  const { t } = langContext;

  return (
    <nav className="space-x-2 font-light">
      <NavLink to="#head" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
        {t.home}
      </NavLink>
      <NavLink to="#about" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
        {t.about}
      </NavLink>
      <NavLink to="#my_works" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
        {t.my_works}
      </NavLink>
      <NavLink to="#contacts" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
        {t.contacts}
      </NavLink>
    </nav>
  );
};
