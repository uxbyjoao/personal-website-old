import Head from "next/head";

import Sidebar from "../components/Sidebar";

import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import Education from "../components/home/Education";
import Experience from "../components/home/Experience";
import About from "../components/home/About";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>UX Designer &amp; Usability Engineer | João Gomes</title>
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
      <div className="grid grid-cols-12 gap-4 mb-24">
        <div className="col-start-3 col-span-3 mt-20">
          <div className="sticky top-12">
            <Sidebar />
          </div>
        </div>
        <div className="col-start-6 col-span-5 mt-20">
          <Hero />
          <div className="prose">
            <Skills />
            <Education />
            <Experience />
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
