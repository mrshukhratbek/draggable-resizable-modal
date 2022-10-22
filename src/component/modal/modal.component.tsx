import './modal.css';
import React from 'react';
import Mask from './mask';
import Content from './content';
import { ModalPropTypes } from '../modal-prop-types';

export default function Modal(props: ModalPropTypes) {
  const {
    // General
    prefixCls = 'drm-modal',

    // Mask
    mask = true,

    cancelText = 'Cancel',
    footer,
    okText = 'Ok',
  } = props;

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onCancel, onClose } = props;
    if (!onCancel) {
      onClose?.(e);
    } else {
      onCancel?.(e);
    }
  };

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onOk, onClose } = props;

    if (!onOk) {
      onClose?.(e);
    } else {
      onOk?.(e);
    }
  };

  const defaultFooter =
    footer === undefined ? (
      <>
        <button className="drm-footer-btn" onClick={handleCancel}>
          {cancelText}
        </button>
        <button className="drm-footer-btn drm-footer-ok-btn" onClick={handleOk}>
          {okText}
        </button>
      </>
    ) : (
      footer
    );

  const modal = (
    <div className={`${prefixCls}-root`}>
      <Mask prefixCls={prefixCls} visible={mask} />
      <div tabIndex={-1} className={`${prefixCls}-wrapper drm-wrapper`}>
        <Content {...props} prefixCls={prefixCls} footer={defaultFooter} />
      </div>
    </div>
  );

  return modal;
}
