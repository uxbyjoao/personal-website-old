import useDarkMode from "../hooks/useDarkMode";

import DarkModeToggle from "../components/ui/DarkModeToggle";

import "tailwindcss/tailwind.css";
import styles from "./_app.module.css";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useDarkMode();

  const containerClassName = (mode) => (mode === "dark" ? darkMode : "");

  const handleDarkModeToggle = (event) =>
    darkMode === "dark" ? setDarkMode(null) : setDarkMode("dark");

  return (
    <div className={containerClassName(darkMode)}>
      <Component {...pageProps} />
      <DarkModeToggle handleDarkModeToggle={handleDarkModeToggle} />
    </div>
  );
}
