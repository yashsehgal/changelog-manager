import React, { forwardRef } from "react";
import "./Button.css";

type ButtonVariantType = "primary" | "secondary";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  icon?: React.ReactNode;
}

const ButtonVariantStyle: Record<ButtonVariantType, string> = {
  primary: "Button-primary",
  secondary: "Button-secondary",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, icon = null, variant = "primary", ...args }, ref) => {
    return (
      <button
        ref={ref}
        className={`Button ${ButtonVariantStyle[variant]}`}
        {...args}
      >
        {icon || <></>}
        {args.children}
      </button>
    );
  },
);
