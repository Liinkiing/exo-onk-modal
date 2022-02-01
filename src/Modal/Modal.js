import React, { useState } from "react";
import styles from "./Modal.module.css";
import classnames from "classnames";

export default function Modal({}) {
  const [withLeftButton, setWithLeftButton] = useState(false);

  const handleClick = () => {
    setWithLeftButton((x) => !x);
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {withLeftButton && <button onClick={handleClick}>{"<"}</button>}
        <span className={styles.title}>Title</span>
        <button onClick={handleClick}>X</button>
      </header>
      <div className={classnames(styles.content)}>
        <img src={"https://via.placeholder.com/150"} alt="" />
        <span className={styles.subtitle}>
          Lorem mollit sint velit in do qui
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <footer className={styles.footer}>
        <button className={styles["btn-primary"]}>Label</button>
        <button className={styles["btn-secondary"]}>Label</button>
      </footer>
    </div>
  );
}
