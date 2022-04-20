export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async call to db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;
    // returns promise and should add then()
    firestore.collection('projects')
      .add({
        // ... -> project.state (title, author)
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authorID,
        createdAt: new Date()
      })
      .then(() => { dispatch({ type: 'CREATE_PROJECT', project }) })
      .catch((err) => { dispatch({ type: 'CREATE_PROJECT_ERROR', err }) })
  }
};