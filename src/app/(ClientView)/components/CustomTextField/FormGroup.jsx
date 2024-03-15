import React from "react";
import CustomTextField from "./CustomTextField";
import styles from "./CustomTextField.module.css"; // Make sure to create this CSS module file

const FormGroup = ({ label, required, ...props }) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.requiredIndicator}>*</span>}
      </label>
      <CustomTextField {...props} />
    </div>
  );
};

export default FormGroup;
