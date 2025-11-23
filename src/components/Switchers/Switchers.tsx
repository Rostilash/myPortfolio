import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Switchers = () => {
  return (
    <div className="flex-center flex-row gap-2">
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  );
};
