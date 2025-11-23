import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import "./Theme.css";

export const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { toggleTheme } = themeContext;

  return (
    <div className="switch-wrapper">
      <label className="switch" htmlFor="switch-sun-moon">
        <input type="checkbox" id="switch-sun-moon" onClick={toggleTheme} />
        <span className="slider"></span>
      </label>
    </div>
  );
};
