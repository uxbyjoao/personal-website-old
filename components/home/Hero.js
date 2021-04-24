import Image from "next/image";

import SocialLinks from "../SocialLinks";

function HeroLink({ href, alt, children }) {
  return (
    <a href={href} alt={alt}>
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <div>
      <div>
        <div className="md:hidden relative w-36 h-36 sm:w-48 sm:h-48 mb-8">
          <Image
            src="/images/profile.jpg"
            alt="João's profile picture"
            className="rounded-xl filter grayscale md:hidden"
            layout="fill"
          />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl dark:text-white font-extrabold tracking-tight transition-colors">
          Hello world, my name is João.
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl mt-3 text-gray-400 tracking-tight transition-colors">
          I'm a Usability Engineer.
        </h2>
      </div>
      <div className="mt-6">
        <p className="md:text-lg lg:text-2xl dark:text-gray-100 transition-colors">
          You can check out some samples of my work on my{" "}
          <HeroLink href="#">Behance</HeroLink>,{" "}
          <HeroLink href="#">Dribble</HeroLink>, and{" "}
          <HeroLink href="#">GitHub</HeroLink> profiles.
        </p>
      </div>
      <div className="flex md:hidden space-x-2 mt-8 text-indigo-500">
        <SocialLinks />
      </div>
    </div>
  );
}
