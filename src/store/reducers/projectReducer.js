const initState = {
  projects: [
    { id: '1', title: 'title 1', content: 'content 1 blah blah' },
    { id: '2', title: 'title 2', content: 'content 2 blah blah' },
    { id: '3', title: 'title 3', content: 'content 3 blah blah' }
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer;
