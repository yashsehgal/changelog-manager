import {
  ChangelogReleaseNoteElementType,
  ChangelogType,
} from "../../types/global";
import "./ChangelogVersionBlock.css";

export default function ChangelogVersionBlock(changelog: ChangelogType) {
  const { version, headline, releaseDate, releaseNotes } = changelog;
  return <section className="ChangelogVersionBlock-container"></section>;
}

function VersionBadge({ version }: { version: string }) {
  return <span className="VersionBadge-container">{version}</span>;
}

function ReleaseNoteBadge({
  releaseNoteType,
}: {
  releaseNoteType: ChangelogReleaseNoteElementType;
}) {
  return <span className="ReleaseNoteBadge-container">{releaseNoteType}</span>;
}
