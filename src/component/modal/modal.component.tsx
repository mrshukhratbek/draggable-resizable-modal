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
  } = props;

  const modal = (
    <div className={`${prefixCls}-root`}>
      <Mask prefixCls={prefixCls} visible={mask} />
      <div tabIndex={-1} className={`${prefixCls}-wrapper drm-wrapper`}>
        <Content {...props} prefixCls={prefixCls} />
      </div>
    </div>
  );

  return modal;
}
