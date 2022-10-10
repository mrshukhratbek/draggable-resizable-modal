import "./modal.css";
import React from "react";
import Mask from "./mask";
import Content from "./content";

export interface ModalProps {
  open?: boolean;
  mask?: boolean;
  prefixCls: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { mask, prefixCls } = props;

  const modal = (
    <div className={`${prefixCls}-root`}>
      <Mask prefixCls={prefixCls} visible={mask} />
      <div className={`${prefixCls}-wrapper drm-wrapper`}>
        <Content />
      </div>
    </div>
  );

  return modal;
};

export default Modal;
