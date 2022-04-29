import { FC } from "react";

import logo from "./assets/img/logo.svg";
import styles from "./App.module.scss";
import Link from "./components/Link/Link";

const App: FC = () => (
  <div className={styles.App}>
    <header className={styles.Header}>
      <img src={logo} className={styles.Logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <p>
        <Link href="https://reactjs.org" title="React" />,
        <Link href="https://www.typescriptlang.org" title="TypeScript" />,
        <Link href="https://sass-lang.com" title="Sass" />,
      </p>
      <Link href="https://bast.ru" title="Bastion" />
    </header>
  </div>
);

export default App;
