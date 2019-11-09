const initialState = {
  test: 'test'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        test: action.text
      }
    default:
      return state
  }
}
