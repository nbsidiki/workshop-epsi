import React from 'react'
import { observer } from 'mobx-react-lite'
import { Routes, Route, useLocation } from 'react-router-dom'
import ArticleDetail from '../../../components/News/ArticleDetail'
import ArticleList from '../../../components/News/ArticleList'
import FindHomeContainer from '../../findHome/index'

interface INews { }

const News: React.FC<INews> = observer(() => {
  const { pathname } = useLocation()
  console.log(useLocation())
  return (
    <>
      <Route path={`${pathname}/:articleId`} element={<FindHomeContainer>
        <ArticleDetail />
      </FindHomeContainer>}>
      </Route>
      <Route path={`${pathname}`} element={<FindHomeContainer>
        <ArticleList />
      </FindHomeContainer>}>

      </Route>
    </>


  )
})

export default News
