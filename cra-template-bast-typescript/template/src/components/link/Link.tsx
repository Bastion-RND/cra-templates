import { FC } from "react";
import styles from "./Link.module.scss";

const Link: FC<{href: string, title: string}> = ({href, title}) => (
    <a
      className={styles.Link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
);

export default Link;
