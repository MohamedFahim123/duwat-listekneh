import { cn } from "@/app/components/lib/cn";
import * as React from "react";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg";
};

export default function Section({
  as: Comp = "section",
  className,
  size = "md",
  ...props
}: SectionProps) {
  const sizes = {
    sm: "py-10 sm:py-12",
    md: "py-14 sm:py-16 lg:py-20",
    lg: "py-20 sm:py-24 lg:py-28",
  };

  return (
    <Comp
      className={cn("relative w-full", sizes[size], className)}
      {...props}
    />
  );
}
