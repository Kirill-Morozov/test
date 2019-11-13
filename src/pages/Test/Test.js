import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from 'actions/test.action'
import { Test2, Test3 } from 'actions/test2.action'
import css from './Test.module.scss'
import Row from 'components/Row/Row'

function Test (props) {
  const { test, changeText, changeData, data } = props
  const [curTab, setTab] = useState('restaurant')

  return (
    <div className={css.wrap}>
      <Row {...{ data, test, changeText, changeData, setTab, curTab }} />
    </div>
  )
}

const mapStateToProps = state => ({
  test: state.test.test,
  data: state.getData.test.text
})

const mapDispatchToProps = {
  changeText: actionCreators.changeText,
  changeData: Test2
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
