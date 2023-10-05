import React, { useEffect, useState } from 'react'
import ArticleCard from '../ArticleCard'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import Loader from '../../../components/Loader'
import LinkButton from '../../../components/Buttons/LinkButton'
// import ContentLoader from 'react-content-loader'

import fetch from '../../../utils/fetch'
import { toast } from 'react-toastify'


interface IArticleList { }

const ArticleList: React.FC<IArticleList> = observer(() => {

  const [data, setData] = useState([]);

  const renderArticleCard = (article: any, index: number) => (
    <Link to={`/findhome/${article.id}`} key={index}>
      <ArticleCard subtitle={article.description_chambree} imageUrl={article.photo ? article.photo : ''} />
    </Link>
  )



  useEffect(() => {
    try {
      const result: any = fetch('/chambres', 'get')
      setData(result)
    } catch (error: any) {
      toast.error(error.message)
    }

  }, [])


  return (
    <>
      <h2 className="size-veryLarge weight-black mb-30 flex justify-center">Nos logement</h2>

      {false ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-4 grid-gap-16 grid-1Mobile w-100 mt-15 weight">
            {Array.isArray(data) && data.map((article, index) => renderArticleCard(article, index))}
            {/* {isPending && renderContentLoader(4)} */}
          </div>
        </>
      )}
    </>
  )
})

export default ArticleList
