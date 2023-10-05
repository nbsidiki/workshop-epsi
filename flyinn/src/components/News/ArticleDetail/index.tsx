import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import './styles.scss'
import Loader from '../../../components/Loader'

interface IArticleDetail {}

const ArticleDetail: React.FC<IArticleDetail> = observer(() => {
  let { articleId } = useParams()

  useEffect(() => {
  }, [])


  const article: any = []

  return (
    <>
      {false && <Loader />}
      {!true && article && (
        <div className="card article">
          <div className="article-header">
            <div className="article-headerImage mb-5">
              <img src={article.imageUrl} />
            </div>

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
