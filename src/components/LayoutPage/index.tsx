import React, { lazy, Suspense } from 'react'
import { Switch, useRouteMatch, Route } from 'react-router-dom'
//import Homepage from '../../features/Homepage/components'
import VideoPage from '../../features/VideoPageItem'
import ViewArticle from '../Common/ViewArticle'
//import PageNotFound from '../PageNotFound'
import RouteAuth from '../RouteAuth'
import RouteLayout from '../RouteLayout'
import ScrollToTop from '../ScrollToTop'
import { Spin } from 'antd'

export default function LayoutFeature() {
  const Homepage = lazy(() => import('../../features/Homepage/components'))
  const VideoPage = lazy(() => import('../../features/VideoPageItem'))
  const PageNotFound = lazy(() => import('../PageNotFound'))
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
