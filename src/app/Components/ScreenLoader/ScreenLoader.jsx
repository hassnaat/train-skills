import React from "react";
import styles from "./ScreenLoader.module.css";
const ScreenLoader = () => {
  return (
    <div className={styles.screenLoaderWrap}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default ScreenLoader;
