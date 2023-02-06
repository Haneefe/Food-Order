import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
const BackDrop = () => {
  <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modal")
      )}
      {/* <BackDrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
    </React.Fragment>
  );
};

export default Modal;
