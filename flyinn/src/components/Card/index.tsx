import React from 'react'

interface IProps {
  title?: string
  children: JSX.Element
  button?: JSX.Element
  className?:string
}

const Card: React.FC<IProps> = ({className, children, title, button }) => {
  return (
      <div className={`vsm:p-3 sm:p-3 card ${className}`}>
        <div className='cardHeader flex justify-between'>
          {title &&
            <p className="font-medium">{title}</p>
          }
          {button}
        </div>
        {children}
      </div>
      
  )

}

export default Card
