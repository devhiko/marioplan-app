import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
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
// FIXME: ERROROROOAR HERE project is undefined ?!
// TODO: rewrite here and refactor component for using hooks
const mapStateToProps = (state, ownProps) => {
  // this line returns undefined
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);