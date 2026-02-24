import { cn } from "@/app/components/lib/cn";
import * as React from "react";

type ContainerProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Container({
  as: Comp = "div",
  className,
  size = "xl",
  ...props
}: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
  };

  return (
    <Comp
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
