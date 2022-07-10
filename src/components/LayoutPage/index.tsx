import React from 'react'
import { Switch } from 'react-router-dom'
import Homepage from '../../features/Homepage/components'
import VideoPage from '../../features/VideoPageItem'
import ViewArticle from '../Common/ViewArticle'
import PageNotFound from '../PageNotFound'
import RouteAuth from '../RouteAuth'
import RouteLayout from '../RouteLayout'

export default function LayoutFeature() {
  return (
    <Switch>
      <RouteLayout exact path="/" component={Homepage} />
      <RouteLayout path="/category/video" component={VideoPage} />
      <RouteLayout path="/article/:id/:title" component={ViewArticle} />
      <RouteAuth component={PageNotFound} />
    </Switch>
  )
}
