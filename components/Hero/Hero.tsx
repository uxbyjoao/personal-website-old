import SiteLink from "@/components/ui/SiteLink/SiteLink";
import clsx from "clsx";

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
          Currently, I&apos;m working as a Senior UX Designer for UK-based
          diamonds e-commerce platform{" "}
          <SiteLink
            trackingEvent="Click on Current Job"
            href="https://www.nivoda.net/"
          >
            Nivoda
          </SiteLink>
          , where I&apos;m designing digital products and developing design
          systems. Check out my{" "}
          <SiteLink
            trackingEvent="Click on Behance"
            href="https://www.behance.net/uxbyjoao"
          >
            Behance profile
          </SiteLink>{" "}
          for some samples of my work. My CV is available on my{" "}
          <SiteLink
            trackingEvent="Click on LinkedIn"
            href="https://www.linkedin.com/in/jlfgms/"
          >
            LinkedIn profile
          </SiteLink>
          .
        </p>
      </div>
    </section>
  );
}
