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
      start: "Sep 2019",
      end: "Present",
    },
    description:
      "At NE2, I'm tasked with designing software applications for brokering energy products, both for the web and mobile platforms. I am also responsible for the creation and maintenance of their design system. This means making sure that the NE2 brand is consistent across every touchpoint, from legal documents to software experiences.",
  },
  {
    title: "UX/UI Designer, Web Developer",
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
  },
];

const ExperienceItem = ({ entry }) => (
  <div className="text-gray-700 dark:text-white transition-colors">
    <div className="flex items-center space-x-3 text-sm dark:text-gray-500 italic">
      <span>
        {entry.date.start} ― {entry.date.end}
      </span>
      <span>•</span>
      <span>{entry.type}</span>
    </div>
    <h4 className="text-3xl font-bold">{entry.title}</h4>
    <h5 className="text-xl">{entry.organization}</h5>
    <div className="flex items-center space-x-2 mt-1">
      <img src={`/images/flag-${entry.location.flag}.svg`} />
      <span>{entry.location.full}</span>
      {entry.location.remote && (
        <span className="text-xs dark:bg-gray-800 dark:text-gray-400 px-2 py-1 rounded font-medium">
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
      <div className="space-y-12">
        {experienceList.map((entry, key) => (
          <ExperienceItem className="bg-red-500" entry={entry} key={key} />
        ))}
      </div>
    </ScrollElement>
  );
}
