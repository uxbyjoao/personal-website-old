import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [mode, setMode] = useState();

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (isDarkMode) {
      setMode("dark");
    } else {
      setMode(null);
    }
  }, []);

  return [mode, setMode];
}
