import React from 'react'

interface IHeaderSelector {
  imageSrc: string
  title: string
  subtitle: string
  className?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

const FilterContainer: React.FC<IHeaderSelector> = ({ imageSrc, title, subtitle, className, children, footer }) => {
  return (
    <div className={`card mt-10Mobile ${className}`}>
      <div className="card-row flex-directionRow p-30 p-15Mobile">
        <img src={imageSrc} className="hidden-sm hidden-xs" />
        <div className="ml-20 pt-5">
          <div className="fc-primary-primary mb-8 mb-8Mobile weight-medium size-large">{title}</div>
          <div className="weight-medium">{subtitle}</div>
        </div>
      </div>

      <div className="card-row p-25 p-10Mobile flex flex-directionColumnMobile flex-justifyCenterMobile flex-alignStartMobile">
        {children}
      </div>

      {footer && <div className="card-row p-25 p-10Mobile">{footer}</div>}
    </div>
  )
}

export default FilterContainer
