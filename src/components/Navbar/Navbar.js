import React, { useState } from "react";
import Logo from "./Logo";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import SideNavLink from "./SideNavLink";
import SwitchThemeButton from "./SwitchThemeButton";
import SocialIcons from "./SocialIcons";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative z-10 flex w-full items-center justify-between bg-light px-32 py-8 font-medium dark:bg-dark dark:text-light lg:px-16 md:px-12 sm:px-8">
      {/* Hamburger Menu  */}
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* Navlinks Tablet & Mobile Screen  */}
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* Logo  */}
      <div className="absolute left-1/2 top-2 mt-2 -translate-x-1/2">
        <Logo />
      </div>

      {/* SwitchMode Button  */}
      <SwitchThemeButton mode={mode} setMode={setMode} />

      {/* Social Icons  */}
      <SocialIcons />

      {/* SideBar NavLinks Desktop Screen */}
      <SideNavLink href="/about" title="About" className="top-1/3 mr-[10px]" />
      <SideNavLink href="/projects" title="Projects" className="top-2/3" />
    </header>
  );
};

export default Navbar;
