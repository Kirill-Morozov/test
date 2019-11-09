import { combineReducers } from 'redux'
import test from './test.redux'
import getData from './test2.redux'

export default combineReducers({
  test,
  getData
})
