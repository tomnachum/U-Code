import React, { useState, useEffect } from "react";

export default function SpotCheck3() {
  const [likesCounter, setLikesCounter] = useState(0);
  useEffect(() => {
    document.title = `You have ${likesCounter} likes`;
  });

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        <p>My shoobi doobi post</p>
        <button onClick={() => setLikesCounter(likesCounter + 1)}>Like</button>
      </div>
    </div>
  );
}
