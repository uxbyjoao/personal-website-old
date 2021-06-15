import Image from "next/image";

import SocialLinks from "../ui/SocialLinks";
import HeroLink from "./HeroLink";

import styles from "./Hero.module.css";
import profilePic from "../../public/images/profile.jpg";

export default function Hero() {
  return (
    <div className={styles["container"]}>
      <div>
        <div className={styles["profile-pic-container"]}>
          <Image
            src={profilePic}
            alt="João's profile picture"
            className={styles["profile-pic"]}
            layout="fill"
            placeholder="blur"
          />
        </div>
        <h1 className={styles["heading"]}>Hello world, my name is João.</h1>
        <h2 className={styles["subheading"]}>I&apos;m a Usability Engineer.</h2>
      </div>
      <p className={styles["links"]}>
        You can check out some samples of my work on my{" "}
        <HeroLink href="https://www.behance.net/uxbyjoao">Behance</HeroLink>,{" "}
        <HeroLink href="https://www.dribbble.com/uxbyjoao">Dribbble</HeroLink>,
        and <HeroLink href="https://github.com/uxbyjoao">GitHub</HeroLink>{" "}
        profiles.
      </p>
      <div className={styles["social-links-container"]}>
        <SocialLinks />
      </div>
    </div>
  );
}
