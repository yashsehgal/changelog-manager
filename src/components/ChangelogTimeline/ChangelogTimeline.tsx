import { useEffect, useState } from "react";
import Changelog from "../../docs/changelog.json";
import { ChangelogType } from "../../types/global";
import ChangelogVersionBlock from "../ChangelogVersionBlock/ChangelogVersionBlock";
import "./ChangelogTimeline.css";

export default function ChangelogTimeline() {
  const [changelog, setChangelog] = useState<ChangelogType[]>([]);

  // Load changelog data on initial render
  useEffect(() => setChangelog(Changelog), []);

  return (
    <div className="ChangelogTimeline-container">
      {changelog.map((item: ChangelogType, index: number) => {
        return <ChangelogVersionBlock key={index} {...item} />;
      })}
    </div>
  );
}
