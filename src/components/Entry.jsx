import React from "react";

function Entry(emo) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {emo.emoji}
        </span>
        <span>{emo.name}</span>
      </dt>
      <dd>{emo.description}</dd>
    </div>
  );
}

export default Entry;
