import React, { lazy, Suspense } from 'react'
import { Switch } from 'react-router-dom'
import RouteAuth from '../RouteAuth'
import RouteLayout from '../RouteLayout'
import { Spin } from 'antd'

export default function LayoutFeature() {
  const Homepage = lazy(() => import('../../features/Homepage/components'))
  const VideoPage = lazy(() => import('../../features/VideoPageItem'))
  const PageNotFound = lazy(() => import('../PageNotFound'))
  const ViewArticle = lazy(()=> import('../Common/ViewArticle'))

  return (
    <>
      <Suspense fallback={<Spin size={'large'} />}>
        <Switch>
          <RouteLayout exact path="/" component={Homepage} />
          <RouteLayout path="/category/video" component={VideoPage} />
          <RouteLayout path="/article/:id/:title" component={ViewArticle} />
          <RouteAuth component={PageNotFound} />
        </Switch>
      </Suspense>
    </>
  )
}
