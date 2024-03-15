"use client";
import ReactPlayer from "react-player";
import styles from "./mastery.module.css";
const page = () => {
  return (
    <div className={styles.masterySection}>
      <div className={styles.masterySectionHeading}>Dive Into Mastery 1</div>
      <div className={styles.masteryVideoWrap}>
        <ReactPlayer
          url="https://youtu.be/vAbPDTQLvbM"
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.masteryDescription}>
        Watch videos, read descriptions, and master new skills with our mastery
        content. Validate your progress and take control of your martial arts
        training.
      </div>
      <div className={styles.masteryBtns}>
        <div className={styles.masteryBtnOutlined}>Validate Mastery</div>
        <div className={styles.masteryBtnFilled}>Unvalidate Mastery</div>
      </div>
    </div>
  );
};

export default page;
