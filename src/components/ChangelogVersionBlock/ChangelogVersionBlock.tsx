import { ChangelogType } from "../../types/global";
import { Link } from "../Link";
import "./ChangelogVersionBlock.css";

export default function ChangelogVersionBlock(changelog: ChangelogType) {
  const { version, headline, releaseDate, releaseNotes } = changelog;

  const sanitizeContent = (
    content: string,
  ): { badge: string; sanitizedContent: string } => {
    if (content.includes("[Feature]")) {
      return {
        badge: "Feature",
        sanitizedContent: content.replace("[Feature]", "").trim(),
      };
    } else if (content.includes("[Fix]")) {
      return {
        badge: "Fix",
        sanitizedContent: content.replace("[Fix]", "").trim(),
      };
    } else if (content.includes("[Improvement]")) {
      return {
        badge: "Improvement",
        sanitizedContent: content.replace("[Improvement]", "").trim(),
      };
    } else {
      return {
        badge: "Unknown",
        sanitizedContent: content,
      };
    }
  };

  return (
    <section className="ChangelogVersionBlock-container">
      <header className="ChangelogVersionBlock-header">
        <VersionBadge version={version} />
        <div className="ChangelogVersionBlock-headline-releaseDate-wrapper">
          <h2 className="ChangelogVersionBlock-headline">{headline}</h2>
          <p className="ChangelogVersionBlock-releaseDate">
            {`${releaseDate.date} ${releaseDate.month}, ${releaseDate.year}`}
          </p>
        </div>
      </header>
      <div className="ChangelogVersionBlock-content">
        {releaseNotes.map(({ content, tag }, index: number) => {
          const { badge, sanitizedContent } = sanitizeContent(content);
          return (
            <div className="ChangelogVersionBlock-releaseNote" key={index}>
              <ReleaseNoteBadge releaseNoteType={badge} />
              <p className="ChangelogVersionBlock-releaseNoteContent">
                {sanitizedContent}{" "}
                <Link href={tag?.githubURL} target="_blank">
                  #{tag?.id}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function VersionBadge({ version }: { version: string }) {
  return <span className="VersionBadge-container">{version}</span>;
}

function ReleaseNoteBadge({ releaseNoteType }: { releaseNoteType: string }) {
  return <span className="ReleaseNoteBadge-container">{releaseNoteType}</span>;
}
