import { Link as ScrollLink } from "react-scroll";

import styles from "./SidebarLink.module.css";

export default function SidebarLink({ to, offset, children }) {
  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      activeClass={styles["sidebar-link-active"]}
      className={styles["sidebar-link"]}
    >
      {children}
    </ScrollLink>
  );
}
