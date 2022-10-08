import React from "react";
import { hoc } from "../../utils";
import { useModalProps } from "./modal.props";

const Modal = hoc(useModalProps, () => {
  return <p>Modal</p>;
});

export default Modal;
