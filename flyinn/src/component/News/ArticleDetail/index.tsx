import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '@stores/index'
import { observer } from 'mobx-react-lite'
import BreadCrumbs from '@components/BreadCrumbs'
import './styles.scss'
import useActionState from '@hooks/useActionState'
import Loader from '@components/Loader'

interface IArticleDetail {}

const ArticleDetail: React.FC<IArticleDetail> = observer(() => {
  const { news: newsStore } = useStore()
  let { articleId } = useParams()

  useEffect(() => {
    newsStore.fetchArticleById(parseInt(articleId as string))
  }, [])

  const { pending } = useActionState(newsStore.fetchArticleByIdState)

  const article = newsStore.articleById

  return (
    <>
      {pending && <Loader />}
      {!pending && article && (
        <div className="card article">
          <div className="article-header">
            <div className="article-headerImage mb-5">
              <img src={article.imageUrl} />
            </div>

            <BreadCrumbs
              schema={[
                {
                  name: 'Accueil',
                  linkPath: '../news'
                },
                {
                  name: article.title
                }
              ]}
            />

            {/* <ul className="article-headerNav">
              {renderPaginationButton(false, pagination.previousId)}
              {renderPaginationButton(true, pagination.nextId)}
            </ul> */}
          </div>
          <div className="article-body ckEdited">
            <h1 className="size-veryLarge mb-30">{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      )}
    </>
  )
})

export default ArticleDetail
