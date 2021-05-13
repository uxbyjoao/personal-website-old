import { Link as ScrollLink } from "react-scroll";

import Image from "next/image";

import SocialLinks from "../components/SocialLinks";

const SidebarLink = ({ to, offset, children }) => {
  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      activeClass="text-indigo-500"
      className="font-bold transition-colors cursor-pointer hover:text-indigo-500 "
    >
      {children}
    </ScrollLink>
  );
};

export default function Sidebar() {
  return (
    <aside className="bg-gray-50 dark:bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur md:bg-transparent md:dark:bg-transparent transition-colors border-b border-gray-900 border-opacity-5 md:border-0">
      <div className="hidden md:block relative w-8 h-8 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-60 xl:h-60 2xl:w-80 2xl:h-80">
        <Image
          src="/images/profile.jpg"
          alt="João's profile picture"
          className="rounded-xl filter grayscale hover:grayscale-0 transition-all"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-around px-5 py-5 text-xs md:flex-col md:justify-start md:px-0 md:py-0 md:space-y-2 xl:space-y-2 md:space-x-0 md:mt-8 md:text-2xl xl:text-4xl dark:text-gray-200 font-medium tracking-tight">
        {/* <SidebarLink to="projects">Projects</SidebarLink> */}
        <SidebarLink to="skills" offset={24}>
          Skills
        </SidebarLink>
        <SidebarLink to="education" offset={24}>
          Education
        </SidebarLink>
        <SidebarLink to="experience" offset={24}>
          Experience
        </SidebarLink>
        <SidebarLink to="about" offset={24}>
          About
        </SidebarLink>
      </div>
      <div className="hidden md:flex space-x-2 mt-8 text-indigo-500">
        <SocialLinks />
      </div>
    </aside>
  );
}
