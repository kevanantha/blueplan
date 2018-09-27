import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="project-details container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Amet error eum cum repudiandae assumenda Eaque earum id perspiciatis</p>
        </div>
        <div class="card-action grey lighten-4 grey-text">
          <div>Posted by Kevin Anantha</div>
          <div>2nd Sep, 2018, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;
