export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async call to db
    const firestore = getFirestore();
    // returns promise and should add then()
    firestore.collection('projects')
      .add({
        // ... -> project.state (title, author)
        ...project,
        authorFirstName: 'Hikmet',
        authorLastName: 'Ken',
        authorID: 12345,
        createdAt: new Date()
      })
      .then(() => { dispatch({ type: 'CREATE_PROJECT', project }) })
      .catch((err) => { dispatch({ type: 'CREATE_PROJECT_ERROR', err }) })
  }
};