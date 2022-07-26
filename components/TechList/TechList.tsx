import Pill from "@/components/ui/Pill/Pill";
import clsx from "clsx";

import styles from "./TechList.module.css";

type Props = {
  className: string;
  techList: string[];
};

export default function TechList({ techList, className }: Props) {
  return (
    <ul className={clsx(className, styles["container"])}>
      {techList.map((tech, index) => (
        <Pill key={index}>{tech}</Pill>
      ))}
    </ul>
  );
}
