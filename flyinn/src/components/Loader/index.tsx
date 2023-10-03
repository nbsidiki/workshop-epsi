import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import './styles.scss'

interface ILoader {
  className?: string
  color?: string
}

const Loader: React.FC<ILoader> = ({ className = '', color = '#2E3748' }) => {
  return (
    <div className={`loaderContainer ${className}`}>
      <ThreeDots color={color} height={50} width={50} />
    </div>
  )
}

export default Loader
