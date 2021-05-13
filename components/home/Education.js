import { Element as ScrollElement } from "react-scroll";

import Heading from "../Heading";

function InstitutionNameWithFlag({ country, children }) {
  return (
    <div className="flex items-center space-x-2">
      <img src={`/images/flag-${country}.svg`} alt={`${country} flag`} />
      <p className="text-sm font-medium text-gray-600 dark:text-white transition-colors">
        {children}
      </p>
    </div>
  );
}

function InstitutionHeading({ children }) {
  return (
    <h4 className="mb-1 text-gray-900 dark:text-gray-50 font-bold text-4xl xl:text-5xl">
      {children}
    </h4>
  );
}

export default function Education() {
  return (
    <ScrollElement name="education" className="pt-24">
      <Heading>My Education</Heading>
      <div>
        <InstitutionHeading>M. Sc. Usability Engineering</InstitutionHeading>
        <InstitutionNameWithFlag country="germany">
          2021 &#8213; Hochschule Rhein-Waal
          <span className="ml-4 font-normal italic text-gray-400">
            Pending Thesis
          </span>
        </InstitutionNameWithFlag>
      </div>
      <div className="mt-6">
        <InstitutionHeading>B. A. Communication Science</InstitutionHeading>
        <InstitutionNameWithFlag country="brazil">
          2016 &#8213; Universidade de Fortaleza (UNIFOR)
        </InstitutionNameWithFlag>
      </div>
    </ScrollElement>
  );
}
