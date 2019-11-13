import axios from 'axios'

export const actionCreators = {
  changeText: payload => (dispatch, getState) => {
    dispatch({
      type: 'GET_DATA_START', payload: {
        isAjax: true,
        data: {}
      }
    })

    axios.get('/').then(res => {
      dispatch({
        type: 'GET_DATA_END', payload: {
          isAjax: false,
          data: res
        }
      })
    })
  }
}
