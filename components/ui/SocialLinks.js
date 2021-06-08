import SocialLink from "./SocialLink";

import styles from "./SocialLinks.module.css";

import socialLinksList from "../../data/social";

export default function SocialLinks() {
  return (
    <div className={styles["social-links"]}>
      {socialLinksList.map((props, key) => (
        <SocialLink {...props} key={key} />
      ))}
    </div>
  );
}
