import { Switchers } from "./Switchers/Switchers";

import { LogoSmall } from "./Icon/LogoSmall";
import { NavigationSimple } from "./Navigation/NavigationSimple";
import { Animate } from "./Animation/Animate";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full custom-text custom-shadow z-2 backdrop-blur-lg">
      <Animate variant="fadeIn" className="flex flex-row justify-between items-center p-4">
        {/* Logo */}
        <LogoSmall />

        {/* Navigation */}
        <NavigationSimple />

        {/* Switchers (Language, Theme) */}
        <Switchers />
      </Animate>
    </header>
  );
};
