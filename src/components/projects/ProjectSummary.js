import React from 'react'

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-3 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted By: Hikmet</p>
        <p className="grey-text">16 Apr, 16:00</p>
      </div>
    </div>
  );
}

export default ProjectSummary;