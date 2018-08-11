let initialState = {
  projectsList: [],
  status: 'BUSY',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS_REQUEST':
      return {
        ...state,
        status: 'BUSY',
      }

    case 'FETCH_PROJECTS_SUCCESS':
      return {
        ...state,
        status: 'READY',
        projectsList: action.payload,
      }

    default:
      return state
  }
}
