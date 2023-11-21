import React, { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
