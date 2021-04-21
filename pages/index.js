import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import Education from "../components/home/Education";
import Experience from "../components/home/Experience";
import About from "../components/home/About";

export default function IndexPage() {
  return (
    <div>
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <About />
    </div>
  );
}
