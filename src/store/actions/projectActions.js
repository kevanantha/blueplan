export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async calll to db
    dispatch({
      type: 'CREATE_PROJECT',
      project
    })
  }
}
