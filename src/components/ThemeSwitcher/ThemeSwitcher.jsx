"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ThemeSwitcher = ({ darkClassName }) => {
  // Check the user's preferred color scheme
  // const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkMode, setIsDarkMode] = useState();

  useEffect(() => {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // console.log("setting preferred");
    setIsDarkMode(darkTheme);
  }, []);

  useEffect(() => {
    // console.log("useEffect");
    const applyTheme = () => {
      isDarkMode
        ? document.documentElement.classList.add(darkClassName)
        : document.documentElement.classList.remove(darkClassName);
    };
    applyTheme();
  }, [isDarkMode, darkClassName]);

  const toggleTheme = () => {
    setIsDarkMode(() => !isDarkMode);
  };

  return (
    <div>
      <button
        data-testid="themeSwitcherButton"
        className="bg-white/90 hover:bg-white-500/90 px-2.5 py-2 mt-2 rounded-full text-base mx-2 dark:bg-zinc-800/90 dark:hover:bg-zinc-600/90 border-2 border-solid border-purple-800 dark:border-purple-300"
        onClick={toggleTheme}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

ThemeSwitcher.defaultProps = {
  darkClassName: "dark",
};

export default ThemeSwitcher;
