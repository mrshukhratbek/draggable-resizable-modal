import React from 'react';
import './mask.css';

export type MaskProps = {
  prefixCls: string;
  visible?: boolean;
};

export default function Mask(props: MaskProps) {
  const { prefixCls, visible } = props;

  if (!visible) {
    return null;
  }

  return <div className={`${prefixCls}-mask drm-mask`} />;
}
