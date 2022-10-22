import React from 'react';
import type { ModalPropTypes } from '../../modal-prop-types';
import './content.css';

const Content: React.FC<ModalPropTypes> = (props: ModalPropTypes) => {
  const {
    prefixCls,
    children = <>Content</>,
    bodyStyle,
    footer,
    title,
    closable = true,
    onClose,
    closeIcon = '×',
    width = 500,
    height,
    style,
    top = 150,
  } = props;

  const contentStyle: React.CSSProperties = {};

  if (width !== undefined) {
    contentStyle.width = width;
  }
  if (height !== undefined) {
    contentStyle.height = height;
  }

  let footerNode: React.ReactNode;
  if (footer) {
    footerNode = (
      <div className={`${prefixCls}-footer drm-modal-footer`}>{footer}</div>
    );
  }

  let headerNode: React.ReactNode;
  if (title) {
    headerNode = (
      <div className={`${prefixCls}-header drm-modal-header`}>
        <div className={`${prefixCls}-title drm-modal-title`}>{title}</div>
      </div>
    );
  }

  let closer: React.ReactNode;
  if (closable) {
    closer = (
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className={`${prefixCls}-close drm-modal-close`}
      >
        {closeIcon}
      </button>
    );
  }

  const content = (
    <div className={`${prefixCls}-content drm-modal-content`} style={{ top }}>
      {closer}
      {headerNode}
      <div className={`${prefixCls}-body drm-modal-body`} style={bodyStyle}>
        {children}
      </div>
      {footerNode}
    </div>
  );

  return (
    <div
      key="dialog-element"
      role="dialog"
      aria-modal="true"
      style={{
        ...style,
        ...contentStyle,
      }}
      className={prefixCls}
    >
      {content}
    </div>
  );
};

export default Content;
