import React, { useEffect, useState } from 'react'
import ArticleCard from '../ArticleCard'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import Loader from '../../../components/Loader'
import LinkButton from '../../../components/Buttons/LinkButton'
// import ContentLoader from 'react-content-loader'

import fetch from '@utils/fetch'


interface IArticleList { }

const ArticleList: React.FC<IArticleList> = observer(() => {

  const renderArticleCard = (article: any, index: number) => (
    <Link to={`/news/${article.id}`} key={index}>
      <ArticleCard subtitle={article.excerpt} imageUrl={article.imageUrl ? article.imageUrl : ''} />
    </Link>
  )

  

  useEffect(() => {

  }, [])
  

  return (
    <>
      <p className="size-veryLarge weight-black mb-30 flex-selfStart">Nos logement</p>

      {true ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-4 grid-gap-16 grid-1Mobile w-100 mt-15 weight">
            {[].map((article, index) => renderArticleCard(article, index))}
            {/* {isPending && renderContentLoader(4)} */}
          </div>
        </>
      )}
    </>
  )
})

export default ArticleList
