import React from "react";
import { cn } from "../utils/cn";
import { ChangelogVersionContainerType } from "../types/global";
import ChangelogVersionContainer from "./ChangelogVersionContainer";

interface ChangelogContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  changelog: ChangelogVersionContainerType[];
}

export default function ChangelogContainer({
  className,
  changelog,
  ...props
}: ChangelogContainerProps) {
  return (
    <div
      className={cn(
        "ChangelogContainer-container border-l border-gray-200 py-24 relative",
        className
      )}
      {...props}
    >
      <div className="absolute w-[40px] bg-gradient-to-b from-white h-[160px] top-0 -left-[20px]" />
      <div className="absolute w-[40px] bg-gradient-to-t from-white h-[160px] bottom-0 -left-[20px]" />
      {changelog.map((log: ChangelogVersionContainerType, index: number) => {
        return <ChangelogVersionContainer key={index} {...log} />;
      })}
    </div>
  );
}
