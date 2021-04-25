import Image from "next/image";

import Icon from "./Icon";

const SocialIcon = (props) => (
  <Icon {...props} className="hover:text-indigo-400 cursor-pointer" />
);

export default function SocialLinks() {
  const links = [
    ["Twitter", "https://www.twitter.com/uxbyjoao/"],
    ["Instagram", "https://www.instagram.com/uxbyjoao"],
    ["Behance", "https://www.behance.net/uxbyjoao"],
    ["Dribbble", "https://www.dribbble.com/uxbyjoao"],
    ["LinkedIn", "https://www.linkedin.com/in/jlfgms"],
  ];

  return (
    <>
      {links.map(([name, href], key) => (
        <a href={href} alt={name} className="flex-grow-0" key={key}>
          <SocialIcon name={name} size={24} />
        </a>
      ))}
    </>
  );
}