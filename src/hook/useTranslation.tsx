import { LanguageContext } from "../context/LanguageProvider";
import { useContext } from "react";

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context.t;
};
