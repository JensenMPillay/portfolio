import { useTranslation } from "next-i18next";
import { useState } from "react";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";
import HomeButton from "./Navbar/HomeButton";
import MenuButton from "./Navbar/MenuButton";
import MobileMenu from "./Navbar/MobileMenu";
import SideNavLink from "./Navbar/SideNavLink";
import SocialIcons from "./Navbar/SocialIcons";
import SwitchButtons from "./Navbar/SwitchButtons";
import SwitchLangButton from "./Navbar/SwitchLangButton";
import SwitchThemeButton from "./Navbar/SwitchThemeButton";

const Navbar = () => {
  // Content
  const { t } = useTranslation("common");

  const { skills, about, projects } = t("titles", { returnObjects: true });

  const { mode, setMode } = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute z-10 flex w-full items-center bg-transparent px-32 py-8 font-medium dark:bg-transparent dark:text-light lg:px-16 md:px-12 sm:px-8">
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
      <SwitchButtons>
        <SwitchLangButton />
        <SwitchThemeButton mode={mode} setMode={setMode} />
      </SwitchButtons>

      {/* Social Icons  */}
      <SocialIcons />

      {/* SideBar NavLinks Desktop Screen */}
      <SideNavLink
        href="/skills"
        title={skills}
        className="sticky mx-auto"
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
        }}
      />
      <SideNavLink
        href="/about"
        title={about}
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
        href="projects"
        title={projects}
        className="right-0 top-1/2 rotate-90"
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
