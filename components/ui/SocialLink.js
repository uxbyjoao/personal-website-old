import styles from "./SocialLink.module.css";

export default function SocialLink({ component, href, alt }) {
  return (
    <a href={href} alt={alt} target="_blank" rel="noopener noreferrer">
      {component({
        className: styles["social-links-icon"],
      })}
    </a>
  );
}
