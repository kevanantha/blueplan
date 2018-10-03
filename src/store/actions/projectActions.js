export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async calll to db
    const db = getFirestore();
    db.collection('projects').add({
      ...project,
      authorFirstName: 'Kevin',
      authorLastName: 'Anantha',
      authorId: 123456789,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT', err})
    })
  }
}
