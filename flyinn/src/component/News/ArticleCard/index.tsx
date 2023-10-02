import React from 'react'
import './styles.scss'
import LinkButton from '@components/Buttons/LinkButton'

interface IArticleCard {
  subtitle: string
  imageUrl: string
  linkButton?: boolean
  mini?: boolean
}

const ArticleCard: React.FC<IArticleCard> = ({ subtitle, imageUrl, linkButton = true, mini = false }) => {
  return (
    <div className={`card cardArticle ${mini ? 'mini' : ''}`}>
      <img className="cardArticle-img" src={imageUrl} />
      <div className="cardArticle-infos">
        <div className="cardArticle-infos-text" dangerouslySetInnerHTML={{ __html: `<div>${subtitle}</p>` }} />
        {linkButton && <LinkButton text="Voir l'article" className="cardArticle-infos-link" isAnimated />}
      </div>
    </div>
  )
}

export default ArticleCard
