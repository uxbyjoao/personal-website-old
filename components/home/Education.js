import { Element as ScrollElement } from "react-scroll";

import Heading from "../Heading";

const educationList = [
  {
    title: "M. Sc. Usability Engineering",
    institution: "Hochschule Rhein-Waal",
    year: "2021",
    flag: "germany",
    pending: true,
  },
  {
    title: "B. A. Communication Sciences",
    institution: "Universidade de Fortaleza (UNIFOR)",
    year: "2016",
    flag: "brazil",
    pending: false,
  },
];

const EducationItem = ({ entry }) => (
  <div>
    <h4 className="mb-1 text-gray-900 dark:text-gray-50 font-bold text-4xl xl:text-5xl">
      {entry.title}
    </h4>
    <div className="flex items-center space-x-3">
      <img src={`/images/flag-${entry.flag}.svg`} alt={`${entry.flag} flag`} />
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {entry.year}
      </span>
      <span className="text-sm font-medium text-gray-600 dark:text-white transition-colors">
        {entry.institution}
      </span>
    </div>
  </div>
);

export default function Education() {
  return (
    <ScrollElement name="education" className="pt-24">
      <Heading>My Education</Heading>
      <div className="grid grid-flow-row gap-14">
        {educationList.map((entry, key) => (
          <EducationItem entry={entry} key={key} />
        ))}
      </div>
    </ScrollElement>
  );
}
