import logo from "./assets/img/logo.svg";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src={logo} className={styles.Logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <a
            className={styles.Link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>,
          <a
            className={styles.Link}
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </a>,
          <a
            className={styles.Link}
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sass
          </a>
        </p>
        <a
          className={styles.Link}
          href="https://bast.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bastion
        </a>
      </header>
    </div>
  );
}

export default App;
