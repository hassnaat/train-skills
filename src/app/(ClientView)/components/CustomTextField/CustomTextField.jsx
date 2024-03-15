"use client";
import { useState } from "react";
import styles from "./CustomTextField.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const CustomTextField = ({
  type,
  icon,
  placeholder,
  onChange,
  errorMessage,
  infoText,
  textarea,
  style,
  fieldWrapperStyle,
  fieldStyle,
  fieldClassName,
  value,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    if (!textarea) {
      setInputType(inputType === "password" ? "text" : "password");
    }
  };

  const valueProp = value !== undefined ? { value } : {};

  return (
    <div className={styles.textFieldWrapper} style={style}>
      <div className={styles.inputWrapper} style={fieldWrapperStyle}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {!textarea ? (
          <input
            style={fieldStyle}
            className={`${styles.textField} ${fieldClassName}`}
            type={inputType}
            placeholder={placeholder}
            onChange={onChange}
            {...valueProp}
            {...props}
          />
        ) : (
          <textarea
            style={fieldStyle}
            className={`${styles.textField} ${styles.textarea}`}
            placeholder={placeholder}
            onChange={onChange}
            {...valueProp}
            {...props}
          ></textarea>
        )}
        {type === "password" && !textarea && (
          <span
            className={styles.togglePassword}
            onClick={togglePasswordVisibility}
          >
            {inputType === "password" ? (
              <VisibilityIcon style={{ color: "grey" }} />
            ) : (
              <VisibilityOffIcon style={{ color: "grey" }} />
            )}
          </span>
        )}
      </div>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      {infoText && <div className={styles.info}>{infoText}</div>}
    </div>
  );
};

export default CustomTextField;
