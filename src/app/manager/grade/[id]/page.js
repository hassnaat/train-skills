"use client";
import ReactPlayer from "react-player";
import styles from "./page.module.css";
import CustomTextField from "@/app/(ClientView)/components/CustomTextField/CustomTextField";
const Grade = () => {
  return (
    <div className={styles.gradeSection}>
      <div className={styles.gradeSectionHeading}>Grade</div>
      <div className={styles.gradeVideoWrap}>
        <ReactPlayer
          url="https://youtu.be/vAbPDTQLvbM"
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.gradeCommentWrap}>
        <CustomTextField textarea={true} placeholder="Comment" />
      </div>
      <div className={styles.gradeBtns}>
        <div className={styles.gradeBtnOutlined}>Validate</div>
        <div className={styles.gradeBtnFilled}>Unvalidate</div>
      </div>
    </div>
  );
};

export default Grade;
