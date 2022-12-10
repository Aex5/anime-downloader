import React from "react";

export default function Recomend({ key, title, thumbnail }) {
  return (
    <div>
      <div key={key}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
