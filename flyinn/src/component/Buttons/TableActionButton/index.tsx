import React from 'react'
import './styles.scss'

interface ITableActionButton {
  icon: string
  onClick: () => void
}

const TableActionButton: React.FC<ITableActionButton> = ({ icon, onClick }) => {
  return (
    <div className="tableActionButton" onClick={onClick}>
      <i className={`icon icon-${icon}`} />
    </div>
  )
}

export default TableActionButton
