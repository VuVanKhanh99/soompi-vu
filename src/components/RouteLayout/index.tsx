import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import { clearAllStorage } from '../../utils/common'
import Navbar from '../Navbar'

const RouteLayout = ({ component: Component, requireAuth, ...rest }: any) => {
  // const userInfoState = useAppSelector((state: any) => state.auth.userInfo)
  // const token = storage.getToken()
  const location = useLocation()

  //check permission
  // if(requireAuth && userInfoState?.username){
  //   //check permission session
  //   //return <Redirect to={{ pathname: '/not-found' }} />
  // }

  // if ((requireAuth && !token) || (requireAuth && !userInfoState.username)) {
  //   clearAllStorage()
  //   return <Redirect to={{ pathname: '/login' }} />
  // }

  return (
    <Route
      {...rest}
      render={(props: any) => (
        <div style={{ paddingBottom: '10rem' }}>
          <Navbar />
          <Component {...props} />
        </div>
      )}
    />
  )
}

export default RouteLayout
