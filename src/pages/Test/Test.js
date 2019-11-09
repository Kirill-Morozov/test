import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeText } from 'actions/test.action'
import { Test2 } from 'actions/test2.action'
import css from './Test.module.scss'

function Test (props) {
  const { test, changeText, changeData, data } = props
  const [curTab, setTab] = useState('restaurant')

  return (
    <div className={css.wrap}>
      <header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aliquam asperiores assumenda distinctio
          eligendi error, ex explicabo facilis in incidunt magnam, minima nostrum pariatur perferendis quaerat quibusdam
          ratione voluptates?
        </p>
      </header>
      <section>
        <div onClick={() => {
          changeText('asd')
          setTab('test')
          changeData({ text: 'zxczxczxsad' })
        }}>
          {data}->{curTab}
        </div>
        <input type='text' onChange={event => {
          console.log('event', event.target.value)
          changeText(event.target.value)
        }} />
      </section>
      <footer>
        asdasd
      </footer>
    </div>
  )
}

const mapStateToProps = state => ({
  test: state.test.test,
  data: state.getData.test.text
})

const mapDispatchToProps = {
  changeText: changeText,
  changeData: Test2
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
