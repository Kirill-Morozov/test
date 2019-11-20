import {
  GET_DATA_START,
  GET_DATA_END,
  GET_DATA_ERROR
} from 'constants/TODO'

const initialState = {
  isAjax: false,
  isError: false,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_START:
      return {
        ...state,
        isAjax: true,
        data: []
      }
    case GET_DATA_END:
      return {
        ...state,
        isAjax: false,
        data: action.payload
      }
    case GET_DATA_ERROR:
      return {
        isError: true,
        isAjax: false,
        data: []
      }
    default:
      return state
  }
}
