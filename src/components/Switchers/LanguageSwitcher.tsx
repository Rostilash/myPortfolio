import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import "./Language.css";

export const LanguageSwitcher = () => {
  const langContext = useContext(LanguageContext);
  if (!langContext) return null;

  const { language, toggleLanguage } = langContext;

  const text = language === "uk" ? "en" : "uk";

  return (
    <div className="switch-language-wrapper">
      <input className="tgl tgl-flip" id="switch-yeah-nope" type="checkbox" onClick={toggleLanguage} />
      <label className="tgl-btn" data-tg-off={text} data-tg-on={text} htmlFor="switch-yeah-nope"></label>
    </div>
  );
};
