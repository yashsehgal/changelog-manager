import { useEffect, useState } from "react";
import { ChangelogVersionContainerType } from "./types/global";
import { ChangelogData } from "./data/changelog";
import ChangelogContainer from "./components/ChangelogContainer";

export default function App() {
  const [changelog, setChangelog] = useState<ChangelogVersionContainerType[]>(
    []
  );

  useEffect(() => {
    const updatedChangelog = ChangelogData.map((log) => ({
      version: log.version,
      changes: log.changes.map((change) => ({
        ...change,
      })),
    }));
    setChangelog(updatedChangelog.reverse());
  }, []);

  return (
    <div className="App-container my-12 mx-24 max-md:mx-12 transition-all">
      <h1 className="leading-snug tracking-tighter font-medium text-6xl max-lg:text-4xl">
        Internal Release Notes
      </h1>
      <p className="tracking-tight text-xl text-gray-400 max-lg:text-base max-lg:w-[32ch] max-lg:mt-2">
        Automate release notes for internal teams and updates sharing.
      </p>
      <div className="Changelog-wrapper mt-6 max-lg:mt-4">
        <ChangelogContainer changelog={changelog} />
      </div>
    </div>
  );
}
