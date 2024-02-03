import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  // For Verifying User Navigator Preference
  const preferDarkQuery = "(prefer-color-scheme: dark)";

  // Mode
  const [mode, setMode] = useState<string>("light");

  useEffect(() => {
    // Verify User Navigator Preference
    const mediaQuery = window.matchMedia(preferDarkQuery);

    // Get Theme Website Setting for User
    const userPref = window.localStorage.getItem("theme");

    // Handle Change Theme
    const handleChangeTheme = () => {
      // If Already User Preference for Website
      if (userPref) {
        let check: string = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        // If User Navigator Preference
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChangeTheme();

    // Listener User Navigator
    mediaQuery.addEventListener("change", handleChangeTheme);

    return () => {
      mediaQuery.removeEventListener("change", handleChangeTheme);
    };
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem("theme", mode);
      if (mode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [mode]);

  return { mode, setMode };
};

export default useThemeSwitcher;
