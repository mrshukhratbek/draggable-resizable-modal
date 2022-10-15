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

    onCancel,
    cancelText = 'Cancel',

    onOk,
    okText = 'Ok',
  } = props;

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onCancel } = props;
    onCancel?.(e);
  };

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onOk } = props;
    onOk?.(e);
  };

  const defaultFooter = (
    <>
      <button onClick={handleCancel}>{cancelText}</button>
      <button onClick={handleOk}>{okText}</button>
    </>
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
