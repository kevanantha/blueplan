export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async calll to db
    dispatch({
      type: 'CREATE_PROJECT',
      project
    })
  }
}
