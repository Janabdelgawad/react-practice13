import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createCard(emoTerm) {
  return (
    <Entry
      key={emoTerm.id}
      emoji={emoTerm.emoji}
      name={emoTerm.name}
      text={emoTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
