import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

interface ILink {
  label: string
  path: string
}

interface ILinkGrid {
  links: ILink[]
}

const LinkGrid: React.FC<ILinkGrid> = ({ links }) => {
  return (
    <div className="linkGrid grid grid-2 grid-1Mobile">
      {links.map((link, index) => (
        <div className="linkGridItem" key={index}>
          <Link to={link.path}>
            <div className="linkContent">
              {link.label}{' '}
              <i className={`fc-deep-orange-primary icon-short-arrow-next mr-10 mr-10Mobile size-large`}></i>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default LinkGrid
