import React from 'react'
import css from './Row.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'

function Row (props) {
  const { deleteRow, editRow, id, title, className } = props
  return (
    <div className={cn(css.wrap, className)}>
      {title}
      <div>
        <button
          onClick={() => {
            editRow(id)
          }}>
          Редактировать
        </button>
        <button
          onClick={() => {
            deleteRow(id)
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  )
}

Row.propTypes = {
  deleteRow: PropTypes.func,
  editRow: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
  className: PropTypes.string
}

export default Row
