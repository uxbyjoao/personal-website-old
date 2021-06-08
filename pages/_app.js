import "tailwindcss/tailwind.css";

import styles from "./_app.module.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={styles["container"]}>
      <Component {...pageProps} />
    </div>
  );
}
