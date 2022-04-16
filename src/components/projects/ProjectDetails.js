import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus nulla non quod qui sit nostrum facilis voluptate. Voluptate laboriosam eum vero consequatur porro. Sunt facere quia laboriosam quis dolorem totam.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By: Hikmet</div>
          <div>16 Apr, 16:00</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;