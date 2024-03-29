import "./App.css";
import { Button } from "./components/Button";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export default function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        <div className="App-headerContentWrapper">
          <h1 className="App-headline">Product Release Notes</h1>
          <p className="App-description">
            Generated release notes using husky, conventional-commits and
            standard-version for automated changelog generation.
          </p>
        </div>
        <div className="App-actionWrapper">
          <Button icon={<IconBrandGithub width={16} height={16} />}>
            View source
          </Button>
          <Button
            variant="secondary"
            icon={<IconExternalLink width={16} height={16} />}
          >
            {"CHANGELOG.md"}
          </Button>
        </div>
      </header>
    </div>
  );
}
