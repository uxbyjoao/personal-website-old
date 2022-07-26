import DarkModeToggle from "@/components/ui/DarkModeToggle/DarkModeToggle";
import SeoConfig from "@/data/seo-config";
import splitbee from "@splitbee/web";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

import "./styles.css";

export default function App({ Component, pageProps }: AppProps) {
  const { isDarkMode, toggle } = useDarkMode(false);

  // Set the default theme
  useEffect(() => {
    const documentElement = document.documentElement;
    if (isDarkMode) {
      documentElement.classList.add("dark");
    } else {
      documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Start analytics
  useEffect(() => {
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    });
  }, []);

  return (
    <>
      <DefaultSeo {...SeoConfig} />
      <div className="main-container">
        <div className="content">
          <Component {...pageProps} />
          <DarkModeToggle
            isDarkMode={isDarkMode}
            handleDarkModeToggle={toggle}
          />
        </div>
      </div>
    </>
  );
}
