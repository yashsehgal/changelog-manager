export type ChangelogType = {
  version: string;
  headline: string;
  releaseDate: { date: string; month: string; year: string };
  releaseNotes: {
    content: string;
    tag?: {
      id: string;
      githubURL: string;
    };
  }[];
};

export enum ChangelogReleaseNoteElementType {
  "[Feature]" = "Feature",
  "[Fix]" = "Fix",
  "[Improvement]" = "Improvement",
}
