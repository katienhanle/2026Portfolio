import type { ReactNode } from "react";

declare module "react" {
  type ViewTransitionClassOrMap = string | Record<string, string>;

  export const ViewTransition: (props: {
    name?: string;
    className?: string;
    share?: ViewTransitionClassOrMap;
    enter?: ViewTransitionClassOrMap;
    exit?: ViewTransitionClassOrMap;
    update?: ViewTransitionClassOrMap;
    layout?: ViewTransitionClassOrMap;
    default?: ViewTransitionClassOrMap;
    children?: ReactNode;
  }) => ReactNode;
}
