import { Element as ScrollElement } from "react-scroll";

import Heading from "../Heading";
import Prose from "../Prose";

const skillList = [
  {
    name: "Figma",
    level: "Expert",
    icon: "figma",
    description:
      "Figma is my main tool and I have been using it since 2018. It has replaced Sketch as my go-to software for design. I have clocked in over 2800 hours in Figma in the last two years alone, creating everything from high-fidelity prototypes to design systems.",
  },
  {
    name: "Adobe Creative Suite",
    level: "Expert",
    icon: "adobe",
    description:
      "My background is in graphic design - hence, I am highly proficient with the Adobe application suite. Using Photoshop, Illustrator, InDesign, and even Lightroom (I'm a hobbyist photographer as well) is second nature to me. In fact, I started my UX career designing websites in Photoshop for an advertising agency back in 2012.",
  },
  {
    name: "Framer",
    level: "Intermediate",
    icon: "framer",
    description:
      "Framer is a tool that I've been learning in order to create higher fidelity prototypes and microinteractions. What has drawn me to it is the fact that one can use React and JavaScript to create components and control the prototypes with more precision.",
  },
  {
    name: "Front-End Development",
    level: "Basic to Intermediate",
    icon: "web",
    description:
      "Around 2017, I took the leap and started to teach myself actual front-end development in my spare time. Since then, I have acquired what I would say is enough development knowledge to be dangerous as a designer. In my current job, I am ocasionally given the oportunity to code, and have coded static sites and application prototypes. I know my way around React, Vue.js, Firebase, and will even risk dabbling with the back-end using Node when I'm feeling daring. This website, for example, was developed using Next.js and TailwindCSS.",
  },
  {
    name: "Arduino",
    level: "Basic",
    icon: "arduino",
    description:
      "One of the things I'm most interested in is the Internet of Things, and as such, I have taught myself how to use the Arduino platform to develop simple projects, at a very basic level.",
  },
];

const languagesList = [
  {
    name: "Portuguese",
    level: "Native",
    flag: "brazil",
  },
  {
    name: "English",
    level: "Fluent",
    certification: "TOEFL 116",
    flag: "uk",
  },
  {
    name: "German",
    level: "Basic",
    certification: "A2.2",
    flag: "germany",
  },
];

const SkillItem = ({ entry }) => (
  <div>
    <div className="flex items-center space-x-2 mb-2">
      <img
        src={`/images/skill-${entry.icon}.svg`}
        alt={`${entry.name}'s logo`}
      />
      <h4 className="text-xl xl:text-2xl font-semibold text-gray-900 dark:text-white transition-colors">
        {entry.name}
      </h4>
    </div>
    <Prose>
      <div className="inline-flex">
        <span className="text-gray-900 dark:text-white font-medium">
          {entry.level}
        </span>
        <span className="mx-2">•</span>
      </div>
      {entry.description}
    </Prose>
  </div>
);

const LanguageItem = ({ entry }) => (
  <div className="flex items-center space-x-2 text-lg">
    <img src={`/images/flag-${entry.flag}.svg`} />
    <h4 className="flex items-center space-x-2">
      <span className="font-bold text-gray-900 dark:text-white">
        {entry.name}
      </span>
      <span className="text-gray-500">•</span>
      <span className="text-gray-500">{entry.level}</span>
      {entry.certification && (
        <span className="text-xs bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400 px-2 py-1 rounded font-medium">
          {entry.certification}
        </span>
      )}
    </h4>
  </div>
);

export default function Skills() {
  return (
    <ScrollElement name="skills" className="pt-24">
      <Heading>My Skills</Heading>
      <div className="grid grid-flow-row gap-14">
        {skillList.map((entry, key) => (
          <SkillItem entry={entry} key={key} />
        ))}
      </div>
      <div className="mt-14 space-y-2">
        {languagesList.map((entry, key) => (
          <LanguageItem entry={entry} key={key} />
        ))}
      </div>
    </ScrollElement>
  );
}
