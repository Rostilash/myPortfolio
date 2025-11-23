import { useState, createContext, type ReactNode } from "react";
import { translations, type Language } from "../utils/translations";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (typeof translations)["uk"];
}

export const LanguageContext = createContext<LanguageContextProps | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "uk" : "en"));
  };

  return <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>{children}</LanguageContext.Provider>;
};
