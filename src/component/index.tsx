import "modal.css";
import React from "react";

export interface ModalProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  draggable?: boolean;
  minimize?: boolean;
  resizable?: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
  const modal = <div className="modal-rc"></div>;

  return <>Modal</>;
};

export default Modal;
