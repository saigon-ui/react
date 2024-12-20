import { forwardRef } from "react";
import { TableTHeadProps, TableTHeadType } from ".";
import {
  ClassNameFuncResult,
  createElement,
  RemainingProps,
  usePropsDestructor,
  ThemeColors,
} from "../../base";

function PropsDestructor(
  next: TableTHeadProps
): [ClassNameFuncResult, RemainingProps] {
  const {
    variant,
    theme,

    // The rest
    ...rest
  } = next;

  const classNames = {} as any;

  typeof variant === "string" &&
    ThemeColors.indexOf(variant as any) > -1 &&
    (classNames[`table-${variant}`] = true);

  (theme === "light" || theme === "dark") &&
    (classNames[`table-${theme}`] = true);

  return [["", classNames], rest];
}

const THead: TableTHeadType = forwardRef<HTMLElement, TableTHeadProps>(
  (props, ref: any) => {
    const { as, className, css, style, children, remainedProps } =
      usePropsDestructor(props, PropsDestructor);

    return createElement(
      as || "thead",
      { ref, className, css, style, ...remainedProps },
      children
    );
  }
);

export default THead;
