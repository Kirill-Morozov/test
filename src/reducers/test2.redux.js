const initialState = {
  test: {
    text: 'asd'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        test: action.data
      }
    default:
      return state
  }
}
