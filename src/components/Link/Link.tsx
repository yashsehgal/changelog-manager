import React, { forwardRef } from "react";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, ...args }, ref) => {
    return <a ref={ref} className="Link" {...args} />;
  },
);

Link.displayName = "Link";
