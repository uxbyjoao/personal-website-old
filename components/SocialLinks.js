// import Icon from "./Icon";

import {
  FaBehanceSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaDribbbleSquare,
  FaLinkedin,
} from "react-icons/fa";

const links = [
  {
    component: FaTwitterSquare,
    href: "https://www.twitter.com/uxbyjoao/",
    alt: "Twitter",
  },
  {
    component: FaInstagramSquare,
    href: "https://www.instagram.com/uxbyjoao",
    alt: "Instagram",
  },
  {
    component: FaBehanceSquare,
    href: "https://www.behance.net/uxbyjoao",
    alt: "Behance",
  },
  {
    component: FaDribbbleSquare,
    href: "https://www.dribbble.com/uxbyjoao",
    alt: "Dribbble",
  },
  {
    component: FaLinkedin,
    href: "https://www.linkedin.com/in/jlfgms",
    alt: "LinkedIn",
  },
];

const SocialLink = ({ component, href, alt }) => (
  <a href={href} alt={alt} target="_blank" rel="noopener noreferrer">
    {component({
      className:
        "w-9 h-9 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9 hover:text-indigo-400 cursor-pointer",
    })}
  </a>
);

export default function SocialLinks() {
  return (
    <div className="flex space-x-1">
      {links.map((props, key) => (
        <SocialLink {...props} key={key} />
      ))}
    </div>
  );
}
