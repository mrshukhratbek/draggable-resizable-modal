import React from 'react';
import type { GetContainer } from 'rc-util/lib/PortalWrapper';

export type ModalPropTypes = {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  bodyStyle?: Record<string, any>;
  prefixCls?: string;
  mask?: boolean;
  footer?: React.ReactNode;
  closable?: boolean;
  onClose?: (e: React.SyntheticEvent) => any;
  closeIcon?: React.ReactNode;
  getContainer?: GetContainer | false;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
  top?: string | number;
  onOk?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  cancelText?: React.ReactNode;
  okText?: React.ReactNode;
  // draggable?: boolean;
  // minimize?: boolean;
  // resizable?: boolean;
};
