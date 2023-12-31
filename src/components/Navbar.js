import React, { useState } from "react";
import Logo from "./Navbar/Logo";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";
import SideNavLink from "./Navbar/SideNavLink";
import SwitchThemeButton from "./Navbar/SwitchThemeButton";
import SocialIcons from "./Navbar/SocialIcons";
import MenuButton from "./Navbar/MenuButton";
import MobileMenu from "./Navbar/MobileMenu";
import HomeButton from "./Navbar/HomeButton";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative z-10 flex w-full items-center bg-transparent px-32 py-8 font-medium dark:bg-transparent dark:text-light lg:px-16 md:px-12 sm:px-8">
      {/* Home Menu  */}
      <HomeButton />

      {/* Hamburger Menu  */}
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* Navlinks Tablet & Mobile Screen  */}
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* Logo  */}
      {/* <div className="fixed left-1/2 top-2 mt-2 -translate-x-1/2">
        <Logo />
      </div> */}

      {/* SwitchMode Button  */}
      <SwitchThemeButton mode={mode} setMode={setMode} />

      {/* Social Icons  */}
      <SocialIcons />

      {/* SideBar NavLinks Desktop Screen */}
      <SideNavLink
        href="/skills"
        title="Skills"
        className="left-[47%] top-0 mt-4 -translate-x-1/2"
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
        }}
      />
      <SideNavLink
        href="/about"
        title="About"
        className="left-0 top-1/2 -rotate-90"
        initial={{
          x: -100,
          rotate: -90,
        }}
        animate={{
          x: 0,
          rotate: -90,
        }}
      />
      <SideNavLink
        href="/projects"
        title="Projects"
        className="right-0 top-1/2 -mr-2 rotate-90"
        initial={{
          x: 100,
          rotate: 90,
        }}
        animate={{
          x: 0,
          rotate: 90,
        }}
      />
    </header>
  );
};

export default Navbar;
