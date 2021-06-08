import Head from "next/head";

import Sidebar from "../components/ui/Sidebar";
import Footer from "../components/ui/Footer";

import Hero from "../components/home/Hero";
// import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Education from "../components/home/Education";
import Experience from "../components/home/Experience";
import About from "../components/home/About";

import styles from "./index.module.css";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>UX Designer & Usability Engineer | João Gomes</title>
        <meta
          name="title"
          content="UX Designer & Usability Engineer | João Gomes"
        />
        <meta
          name="description"
          content="M. Sc. Usability Engineering, born in Brazil, based in Germany."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uxbyjoao.me/" />
        <meta
          property="og:title"
          content="UX Designer & Usability Engineer | João Gomes"
        />
        <meta
          property="og:description"
          content="M. Sc. Usability Engineering, born in Brazil, based in Germany."
        />
        <meta property="og:image" content="/images/social-mast.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://uxbyjoao.me/" />
        <meta
          property="twitter:title"
          content="UX Designer & Usability Engineer | João Gomes"
        />
        <meta
          property="twitter:description"
          content="M. Sc. Usability Engineering, born in Brazil, based in Germany."
        />
        <meta property="twitter:image" content="/images/social-mast.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className={styles["container"]}>
        <div className={styles["sidebar-outer-container"]}>
          <div className={styles["sidebar-inner-container"]}>
            <Sidebar />
          </div>
        </div>
        <div className={styles["content-container"]}>
          <Hero />
          <div>
            {/* <Projects /> */}
            <Skills />
            <Education />
            <Experience />
            <About />
          </div>
          <div className={styles["footer-container"]}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
