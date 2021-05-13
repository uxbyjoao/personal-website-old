import Image from "next/image";

import SocialLinks from "../SocialLinks";

function HeroLink({ href, alt, children }) {
  return (
    <a
      href={href}
      alt={alt}
      className="text-indigo-500 underline hover:text-indigo-400 transition-colors font-medium"
    >
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <div className="text-center md:text-left">
      <div>
        <div className="m-auto md:hidden relative w-44 h-44 sm:w-60 sm:h-60 mb-8">
          <Image
            src="/images/profile.jpg"
            alt="João's profile picture"
            className="rounded-xl filter grayscale"
            layout="fill"
          />
        </div>
        <h1 className="text-5xl md:text-7xl xl:text-8xl dark:text-white font-extrabold tracking-tight transition-colors text-gray-900">
          Hello world, my name is João.
        </h1>
        <h2 className="text-3xl xl:text-4xl mt-3 text-gray-400 tracking-tight transition-colors">
          I'm a Usability Engineer.
        </h2>
      </div>
      <div className="mt-6">
        <p className="md:text-lg lg:text-2xl dark:text-gray-100 transition-colors">
          You can check out some samples of my work on my{" "}
          <HeroLink href="https://www.behance.net/uxbyjoao">Behance</HeroLink>,{" "}
          <HeroLink href="https://www.dribbble.com/uxbyjoao">Dribbble</HeroLink>
          , and <HeroLink href="https://github.com/uxbyjoao">GitHub</HeroLink>{" "}
          profiles.
        </p>
      </div>
      <div className="inline-flex md:hidden space-x-2 mt-8 text-indigo-500">
        <SocialLinks />
      </div>
    </div>
  );
}
