import React from 'react'
import css from './Row.module.scss'
import cn from 'classnames'

function Row ({ data, changeText, changeData, setTab, curTab }) {

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
      <div className={cn(css['row__column-title-bold_text'], data && css._red, {[css._red]: data})}>
        <div className='row__column'>
          <div className='row__column-title'>
            <div className='row__column-title-bold_text _red'>
              asdasd
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Row.propTypes = {}

export default Row
