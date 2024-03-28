import React from "react";
import { ChangelogVersionContainerType } from "../types/global";
import { cn } from "../utils/cn";
import ChangelogCategoryBadge from "./ChangelogCategoryBadge";

interface ChangelogVersionContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ChangelogVersionContainerType {}

export default function ChangelogVersionContainer({
  className,
  version,
  changes,
  ...props
}: ChangelogVersionContainerProps) {
  return (
    <div
      className={cn(
        "ChangelogVersionContainer-container relative pl-20 max-lg:pl-8",
        className
      )}
      {...props}
    >
      <ChangelogVersionTag>{version}</ChangelogVersionTag>
      <div className="ChangelogChangeContent-container py-10">
        <ul className="ChangelogList-container space-y-2">
          {changes?.map((change, _: number) => {
            return (
              <div
                key={`${change.content}_${version}_${change.category}`}
                className="flex flex-row items-center gap-2 max-md:grid"
              >
                <ChangelogCategoryBadge category={change.category}>
                  {change.category}
                </ChangelogCategoryBadge>
                <li className="font-normal text-base truncate">
                  {change.link ? (
                    <a
                      href={change.link}
                      target="_blank"
                      className="text-blue hover:underline"
                    >
                      {change.content}
                    </a>
                  ) : (
                    change.content
                  )}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function ChangelogVersionTag({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "ChangelogVersionTag-container px-3 py-1.5 rounded-md bg-blue-500 text-white text-xs absolute top-0 -left-[30px]",
        className
      )}
      {...props}
    >
      v{children}
    </span>
  );
}
