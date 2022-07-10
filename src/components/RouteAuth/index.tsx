import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import { clearAllStorage } from '../../utils/common'

const RouteAuth = ({ component: Component, requireAuth, ...rest }: any) => {
   return <Route {...rest} render={(props: any) => <Component {...props} />} />
}

export default RouteAuth
