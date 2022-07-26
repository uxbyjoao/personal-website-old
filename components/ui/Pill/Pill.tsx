import styles from "./Pill.module.css";

type Props = {
  children: string;
};

export default function Pill({ children }: Props) {
  return <span className={styles["pill"]}>{children}</span>;
}
