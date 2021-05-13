import { Element as ScrollElement } from "react-scroll";

import Heading from "../Heading";
import Prose from "../Prose";

const experienceList = [
  {
    title: "UX/UI Designer",
    organization: "NE2 Group",
    type: "Contract",
    location: {
      full: "Calgary, Alberta, Canada",
      remote: true,
      flag: "canada",
    },
    date: {
      start: "2019",
      end: "Present",
    },
    description:
      "At NE2, I'm tasked with designing software applications for brokering energy products, both for the web and mobile platforms. I am also responsible for the creation and maintenance of their design system. This means making sure that the NE2 brand is consistent across every touchpoint, from legal documents to software experiences.",
  },
  {
    title: "UX/UI Designer, Graphic Designer, Web Developer",
    organization: "Freelance",
    type: "Part-Time",
    location: {
      full: "Fortaleza, Ceará, Brazil",
      remote: false,
      flag: "brazil",
    },
    date: {
      start: "2014",
      end: "2019",
    },
    description:
      "During this time, I mainly focused on finishing my degree, studying web development and preparing for coming to Germany. As a freelancer, I had the opportunity of working for some amazing clients such as the Dragão do Mar Cultural Center in Fortaleza, Arte Produções, the Mapar Group, and iClub, designing and developing websites, applications and print media.",
  },
  {
    title: "Web & Graphic Designer",
    organization: "Convertte Web Intelligence",
    type: "Full-Time",
    location: {
      full: "Fortaleza, Ceará, Brazil",
      remote: false,
      flag: "brazil",
    },
    date: {
      start: "2012",
      end: "2014",
    },
    description:
      "Convertte is one of the biggest Digital Marketing agencies in the state of Ceará. I was responsible for digital products design and design work in general for renowned clients in Fortaleza such as Mercadinhos São Luiz, DeVry, Yozenn, Shopping Pátio Dom Luis, Couro & Cia., CDT Incorporações, among many others.",
  },
  {
    title: "Web & Graphic Designer",
    organization: "Reimagine Comunicação",
    type: "Full-Time",
    location: {
      full: "Fortaleza, Ceará, Brazil",
      remote: false,
      flag: "brazil",
    },
    date: {
      start: "2012",
      end: "2012",
    },
    description:
      "I worked for Reimagine only for a few months, and was eventually recruited by Convertte. There, I was mostly responsible for designing print ads for their various clients.",
  },
  {
    title: "Art Director",
    organization: "Paz Comunicação Estratégica",
    type: "Contract",
    location: {
      full: "São Paulo, São Paulo, Brazil",
      remote: true,
      flag: "brazil",
    },
    date: {
      start: "2008",
      end: "2008",
    },
    description:
      "This was a 3-month contract I signed with Paz for creating for Patrícia Saboya's campaign for mayor of Fortaleza, Brazil. I was responsible for myriad designs ranging from print to TV ads, as well as a hotsite designed and developed by me using WordPress. This was my first ever professional foray into web design.",
  },
  {
    title: "Art Director",
    organization: "Ágil Publicidade",
    type: "Internship",
    location: {
      full: "Fortaleza, Ceará, Brazil",
      remote: false,
      flag: "brazil",
    },
    date: {
      start: "2007",
      end: "2008",
    },
    description:
      "During my internship, I was able to hone my skills with Adobe's suite of applications, as well as creative skills in general. I had the opportunity of designing print ads for magazines and newspapers, as well as branding for myriad clients in Fortaleza.",
  },
];

const ExperienceItem = ({ entry }) => (
  <div className="text-gray-700 dark:text-white transition-colors">
    <div className="flex items-center space-x-3 text-sm text-gray-400 italic">
      <span>
        {entry.date.start} ― {entry.date.end}
      </span>
      <span>•</span>
      <span>{entry.type}</span>
    </div>
    <div className="mb-3">
      <h4 className="text-4xl mb-1 font-bold text-gray-900 dark:text-white">
        {entry.title}
      </h4>
      <h5 className="text-xl text-gray-400 dark:text-gray-300">
        {entry.organization}
      </h5>
    </div>
    <div className="flex items-center space-x-2 mt-1">
      <img src={`/images/flag-${entry.location.flag}.svg`} />
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {entry.location.full}
      </span>
      {entry.location.remote && (
        <span className="text-xs bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400 px-2 py-1 rounded font-medium">
          Remote
        </span>
      )}
    </div>
    <div className="mt-3">
      <Prose>{entry.description}</Prose>
    </div>
  </div>
);

export default function Experience() {
  return (
    <ScrollElement name="experience" className="pt-24">
      <Heading>Past Work Experience</Heading>
      <div className="grid grid-flow-row gap-20">
        {experienceList.map((entry, key) => (
          <ExperienceItem className="bg-red-500" entry={entry} key={key} />
        ))}
      </div>
    </ScrollElement>
  );
}
