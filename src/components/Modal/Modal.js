import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const Modal = (props) => {
  const animationTiming = {
    enter: 300,
    exit: 1000,
  };
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter:'',
        enterActive:'ModalOpen',
        exit:'',
        exitActive:'ModalClosed'
      }}
    >
      <div className={"Modal"}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};
export default Modal;
