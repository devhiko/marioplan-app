const initState = {
  projects: [
    { id: 1, title: 'project title 1', content: 'project content 1' },
    { id: 2, title: 'project title 2', content: 'project content 2' },
    { id: 3, title: 'project title 3', content: 'project content 3' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('project created', action.project)
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('error when creating project', action.err)
      return state;
    default:
      return state;
  }
}

export default projectReducer;