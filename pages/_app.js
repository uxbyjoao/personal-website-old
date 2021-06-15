import useDarkMode from "../hooks/useDarkMode";

import DarkModeToggle from "../components/ui/DarkModeToggle";

import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useDarkMode();

  const containerClassName = (mode) => (mode === "dark" ? darkMode : "");

  const handleDarkModeToggle = () =>
    darkMode === "dark" ? setDarkMode(null) : setDarkMode("dark");

  return (
    <div className={containerClassName(darkMode)}>
      <Component {...pageProps} />
      <DarkModeToggle
        currentMode={darkMode}
        handleDarkModeToggle={handleDarkModeToggle}
      />
    </div>
  );
}
