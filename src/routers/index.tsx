import React, { lazy, Suspense } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import ScrollToTop from '../components/ScrollToTop'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import RouteAuth from '../components/RouteAuth'

const LayoutFeature = lazy(() => import('../components/LayoutPage'))
const PageNotFound = lazy(() => import('../components/PageNotFound'))

const AppRouter = () => {
  const history = createBrowserHistory()

  return (
    <Suspense fallback={null}>
      <ErrorBoundary>
        <Router history={history}>
          <ScrollToTop />
          <Switch>
            <Route path="/" component={LayoutFeature} />
            {/* <RouteAuth exact path="/login" component={Login} /> */}
            <RouteAuth component={PageNotFound} />
          </Switch>
        </Router>
      </ErrorBoundary>
    </Suspense>
  )
}

export default AppRouter
