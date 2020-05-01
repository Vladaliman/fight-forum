import React from "react";

export default function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-sumary">
      <span className="card-title">{project.title}</span>
      <p>Vladimir vs Conor</p>
      <p className="grey-text">9. September 2012</p>
    </div>
  );
}
