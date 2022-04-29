import { FC } from "react";

import logo from "../../../assets/img/logo.svg";

import Link from "../../Link/Link";

import styles from "./Demo.module.scss";


const Demo: FC = () => (
  <div className={styles.Demo}>
    <header className={styles.Header}>
      <img src={logo} className={styles.Logo} alt="logo" />
      <p>
        Edit <code>src/components/routing/Demo/index.tsx</code> and save to reload.
      </p>
      <ul className={styles.Stack}>
        <li>
          <Link href="https://reactjs.org" title="React" />
        </li>
        <li>
          <Link href="https://www.typescriptlang.org" title="TypeScript" />
        </li>
        <li>
          <Link href="https://sass-lang.com" title="Sass" />
        </li>
        <li>
          <Link href="https://reactrouter.com/" title="React Router" />
        </li>
      </ul>
      <Link href="https://bast.ru" title="Bastion" />
    </header>
  </div>
);

export default Demo;
