import React from "react";
import { ComponentType } from "react";

export const hoc = function <SP, HP>(
  hook: (props: Partial<SP>) => HP,
  Component: ComponentType<HP & SP>,
  displayName?: string
) {
  Component.displayName = displayName;
  const Result: any = (props: SP) => (
    <Component {...(hook(props) || ({} as any))} {...props} />
  );

  Result.Original = Component;
  Result.hook = hook;

  return Result as ComponentType<Partial<HP> & Partial<SP>> & {
    Original: ComponentType<HP & SP>;
    hook: typeof hook;
  };
};
