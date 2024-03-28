import React from "react";
import { cn } from "../utils/cn";
import { ChangelogCategoryType } from "../types/global";

interface ChangelogCategoryBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  category: ChangelogCategoryType;
}

export default function ChangelogCategoryBadge({
  className,
  category,
  children,
  ...props
}: ChangelogCategoryBadgeProps) {
  return (
    <div
      className={cn(
        "ChangelogCategoryBadge-container uppercase w-[80px] h-fit rounded-md text-center py-1 text-xs bg-purple-500 text-white border-2 border-purple-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
