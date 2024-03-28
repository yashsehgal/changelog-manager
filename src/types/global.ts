export type ChangelogCategoryType =
  | "feat"
  | "fix"
  | "style"
  | "refactor"
  | "test"
  | "chore";

export type ChangelogVersionContainerType = {
  version: string;
  changes: {
    content: string;
    category: ChangelogCategoryType;
    link?: string;
  }[];
};
