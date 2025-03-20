import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (!localStorage.getItem("theme")) {
        setTheme(mediaQuery.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      // className=" dark:bg-gray-800"
    >
      {theme === "dark" ? <Sun size={20} className="text-white hover:text-themeBlue dark:hover:text-[#d7a407]" /> : <Moon size={20} className="text-black hover:text-[] dark:hover:text-[#d7a407]" />}
    </button>
  );
}
// import { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState(() =>
//     localStorage.getItem("theme") || "light"
//   );

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className=""
//     >
//       {theme === "dark" ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
//     </button>
//   );
// }
