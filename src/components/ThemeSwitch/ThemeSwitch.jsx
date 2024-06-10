// "use client";
// // based on https://mujeebkhan1831.medium.com/how-to-implement-darkmode-in-react-using-tailwind-css-3c47d009209a
// import { useState } from "react";

// const ThemeSwitch = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("dark");
//   };

//   return (
//     <>
//       <button onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
//     </>
//   );
// };

// export default ThemeSwitch;

/** */
"use client";
import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  //   const darkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    applyTheme();
  });

  const toggleTheme = () => {
    setIsDarkMode(() => !isDarkMode);
  };

  const applyTheme = () => {
    isDarkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark");
  };

  return (
    <div>
      <button className="btn" onClick={toggleTheme}>
        {isDarkMode ? "To Light Mode" : "To Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeSwitch;
