import Image from "next/image";

import SidebarLink from "./SidebarLink";
import SocialLinks from "./SocialLinks";

import styles from "./Sidebar.module.css";
import profilePic from "../../public/images/profile.jpg";

export default function Sidebar() {
  return (
    <aside className={styles["sidebar-container"]}>
      <div className={styles["profile-picture-container"]}>
        <Image
          src={profilePic}
          alt="João's profile picture"
          className={styles["profile-picture-image"]}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <nav className={styles["navigation-container"]}>
        <SidebarLink to="skills" offset={24}>
          Skills
        </SidebarLink>
        <SidebarLink to="education" offset={24}>
          Education
        </SidebarLink>
        <SidebarLink to="experience" offset={24}>
          Experience
        </SidebarLink>
        <SidebarLink to="about" offset={24}>
          About
        </SidebarLink>
      </nav>
      <div className={styles["social-links-container"]}>
        <SocialLinks />
      </div>
    </aside>
  );
}
