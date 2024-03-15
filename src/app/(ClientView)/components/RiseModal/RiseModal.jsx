"use client";
import styles from "./RiseModal.module.css";
const RiseModal = ({
  children,
  style,
  onClose,
  closeOnLeave = true,
  open,
  setOpen,
}) => {
  return (
    <>
      <div
        className={styles.backdrop}
        style={{ display: closeOnLeave ? "none" : "block" }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
          setOpen("");
        }}
        onMouseEnter={(e) => {
          e.stopPropagation();
        }}
      ></div>
      <div
        className={`${open ? styles.riseModal : styles.disappearModal} `}
        style={style}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
          setOpen("");
        }}
        onMouseEnter={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </>
  );
};

export default RiseModal;
