import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from 'actions/todo.action'
import css from './Test.module.scss'
import Row from 'components/Row/Row'

function Todo (props) {
  const { getData, todoData, todoData: { isAjax, isEmpty, data } } = props

  useEffect(() => {
    getData()
  }, [])

  console.log('todoData', todoData)

  if (isAjax || isEmpty) {
    return <div className={css.wrap}>пусто</div>
  }

  return (
    <div className={css.wrap}>
      <div className={css.top}>
        <h1>Список задач</h1>
        <button>Добавить</button>
      </div>
      <div className={css.table}>
        {
          data.map((item, key) => {
            return <Row
              {...item}
              className={css.item}
              deleteRow={(id) => {
                console.log('удаление', id)
              }}
              editRow={(id) => {
                console.log('редактирование', id)
              }}
              key={key} />
          })
        }
      </div>
      <input type='text' />
      <button type={'submit'}>Кнопка</button>
    </div>
  )
}

const mapStateToProps = state => ({
  todoData: state.todoData
})

const mapDispatchToProps = {
  getData: actionCreators.getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
