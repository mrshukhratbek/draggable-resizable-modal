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
    closable,
    onClose,
    closeIcon = '×',
    width = 550,
    height,
    style,
    top = 400,
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
    footerNode = <div className={`${prefixCls}-footer`}>{footer}</div>;
  }

  let headerNode: React.ReactNode;
  if (title) {
    headerNode = (
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-title`}>{title}</div>
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
        className={`${prefixCls}-close`}
      >
        {closeIcon}
      </button>
    );
  }

  const content = (
    <div className={`${prefixCls}-content drm-modal-content`}>
      {closer}
      {headerNode}
      <div className={`${prefixCls}-body`} style={bodyStyle}>
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
    >
      {content}
    </div>
  );
};

export default Content;
