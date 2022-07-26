import Hero from "@/components/Hero/Hero";
import TechList from "@/components/TechList/TechList";
import techList from "@/data/techList";

export default function IndexPage() {
  return (
    <>
      <Hero />
      <TechList techList={techList} className="mt-5" />
    </>
  );
}
