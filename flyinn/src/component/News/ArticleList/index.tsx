import React, { useEffect, useState } from 'react'
import { useStore } from '@stores/index'
import ArticleCard from '../ArticleCard'
import { IArticleModel } from '@stores/news/store'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useActionState from '@hooks/useActionState'
import Loader from '@components/Loader'
import useService from '@hooks/useService'
import xml2js from 'xml2js'
import LinkButton from '@components/Buttons/LinkButton'
// import ContentLoader from 'react-content-loader'

import fetch from '@utils/fetch'


interface IArticleList { }

const ArticleList: React.FC<IArticleList> = observer(() => {
  const { news: newsStore } = useStore()

  const { pending: fetchArticlesPending } = useActionState(newsStore.fetchArticlesState)

  const { service: terreNetService, data: terreNetData } = useService<any>()

  const onFetchTerreNetNews = () => {
    terreNetService(async () => {
      const result = await fetch(`${process.env.API_URL}/terre-net/actus`, 'get')
      return result
    })
  }

  const renderArticleCard = (article: IArticleModel, index: number) => (
    <Link to={`/news/${article.id}`} key={index}>
      <ArticleCard subtitle={article.excerpt} imageUrl={article.imageUrl ? article.imageUrl : ''} />
    </Link>
  )

  const terreNetLink = 'https://www.terre-net.fr/obs_actu'

  const renderTerreNetArticleCard = (item: any) => {
    try {

      const title = item.contenu.titre.p._text
      const image = item.fichiers.fichier[0] ? item.fichiers.fichier[0].nom._text : item.fichiers.fichier.nom._text
      const link = item.canonical._text

      return (
        <div
          key={item._attributes.id}
          style={{
            height: 60,
            width: '100%',
            border: 'solid 1px #F3F6FF',
            display: 'flex',
            boxShadow: '0 8px 5px -5px rgba(229, 235, 255, 0.9)',
            borderRadius: 5
          }}
        >
          <a href={link} target="_blank" style={{ display: 'flex' }}>
            <img
              style={{
                height: '100%',
                width: 70,
                objectFit: 'cover',
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5
              }}
              src={image}
            />
            <div
              style={{
                flexGrow: 1,
                flexShrink: 1,
                textOverflow: 'ellipsis',
                maxWidth: '100%',
                overflow: 'hidden',
                padding: 5,
                paddingLeft: 10
              }}
            >
              <div
                style={{
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  fontSize: '1.5rem',
                  fontWeight: 400
                }}
              >
                {title}
              </div>
            </div>
          </a>
        </div>
      )
    } catch (err) {
      return null
    }
  }

  useEffect(() => {
    newsStore.fetchHomeArticles(1)
    onFetchTerreNetNews()
  }, [])
  

  return (
    <>
      <p className="size-veryLarge weight-black mb-30 flex-selfStart">Nos dernières actualités</p>

      {fetchArticlesPending ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-4 grid-gap-16 grid-1Mobile w-100">
            {newsStore.twoFirstArticles.map((article, index) => renderArticleCard(article, index))}
            {/* {isPending && renderContentLoader(2)} */}
            <div className="cardArticle-weatherBlock p-30 p-20Mobile mb-20Mobile">
              <div className="mb-10" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="weight-medium" style={{ fontSize: '2rem' }}>
                  Terre et net
                </div>

                <div>
                  <a href={terreNetLink} target="_blank" style={{ paddingRight: 10, display: 'block' }}>
                    <LinkButton text="Aller sur Terre Net" className="" isAnimated />
                  </a>
                </div>
              </div>

              <div
                className=""
                style={{ height: 216, display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}
              >
                {terreNetData &&
                  terreNetData.Articles &&
                  terreNetData.Articles.Article.slice(0, 3).map(item => {


                    return renderTerreNetArticleCard(item)
                  })}
              </div>
            </div>
          </div>

          <div className="grid grid-4 grid-gap-16 grid-1Mobile w-100 mt-15 weight">
            {newsStore.allArticlesExceptFirstTwo.map((article, index) => renderArticleCard(article, index))}
            {/* {isPending && renderContentLoader(4)} */}
          </div>
        </>
      )}
    </>
  )
})

export default ArticleList
