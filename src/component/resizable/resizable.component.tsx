import React from "react";
import { Resizable as ReResizable } from "re-resizable";

export interface ResizableProps {
  children?: React.ReactNode;
  defaultSize: {
    width: number;
    height: number;
  };
}

export const Resizable: React.FC<ResizableProps> = (props) => {
  const { children, defaultSize } = props;

  return <ReResizable defaultSize={defaultSize}>{children}</ReResizable>;
};
