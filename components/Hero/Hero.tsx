import clsx from "clsx";
import Link from "next/link";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={clsx(styles["container"], "mb-10")}>
      <h1 className="mb-10">Hello, my name is Jo&atilde;o.</h1>
      <h2 className="mb-8">
        I&apos;m a Product Designer, UX Engineer and Web Developer based in
        Berlin.
      </h2>
      <div className={styles["copy"]}>
        <p>
          Currently, I&apos;m working on digital products and developing design
          systems for diamonds e-commerce platform{" "}
          <Link href="https://www.nivoda.net/">Nivoda</Link>. Check out my{" "}
          <Link href="https://www.behance.net/uxbyjoao">Behance profile</Link>{" "}
          for some samples of my work. My CV is available on my{" "}
          <Link href="https://www.linkedin.com/in/jlfgms/">
            LinkedIn profile
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
