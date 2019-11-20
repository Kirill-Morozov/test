import axios from 'axios'
import {
  GET_DATA_START,
  GET_DATA_END,
  GET_DATA_ERROR
} from 'constants/TODO'

export const actionCreators = {
  getData: payload => (dispatch, getState) => {
    dispatch({
      type: GET_DATA_START
    })

    axios.get('https://test.megapolis-it.ru/api/list').then(res => {
      console.log('res', res)
      if (res.status === 200) {
        dispatch({
          type: GET_DATA_END, payload: res.data.data
        })
      } else {
        dispatch({
          type: GET_DATA_ERROR
        })
      }
    })
  },
  deleteRow: payload => (dispatch, getState) => {
    dispatch({
      type: 'DELETE_START'
    })
  },
  editRow: payload => (dispatch, getState) => {
    dispatch({
      type: 'EDIT_START'
    })
  },
  createRow: payload => (dispatch, getState) => {
    dispatch({
      type: 'CREATE_START'
    })
  }
}
