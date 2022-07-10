import Axios, { AxiosResponse } from 'axios'
import { notification } from 'antd'

const handleNoInternet = (): void => {
  notification.error({
    message: 'Error',
    description: 'Have no internet'
  })
}
const handleServerTimeOut = (): void => {
  notification.error({
    message: 'Error',
    description: 'Timeout server'
  })
}
const handleGeneralError = (message: string): void => {
  notification.error({
    message: 'Error',
    description: message
  })
}

const handleBadRequestError = (message: string): void => {
  notification.error({
    message: 'Error',
    description: message
  })
}

const handleIntenalServerError = (): void => {
  notification.error({
    message: 'Error',
    description: 'Internal server error'
  })
}

const axiosConfig = Axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT
})

{
  /*
    .
    .
    .
    handle token
    .
    .
    .
    */
}

axiosConfig.interceptors.response.use(
  (response: any) => {
    const statusCode = response.status
    if (statusCode === 200) {
      //handle
      return response.data
    }
    return response.data
  },
  async (error: any) => {
    console.error('http request error: ', error)
    if (error.message === 'Network Error' || error.message === 'Network request failed') {
      handleNoInternet()
      return
    }
    if (error.message.startsWith('timeout')) handleServerTimeOut()

    let statusCode = error.response ? error.response.status : 989
    const message = error.response ? error.response.data.message : ''
    const code = error.response ? error.response.data.code : ''
    const url = error.response ? error.response.config.url : ''
    const originalRequest = error.response ? error.config : {}
    // if (APIs.BACKGROUND_TASK().indexOf(url) > -1) {
    //   return
    // }
    // if (isIgnoreError(url)) {
    //   return
    // }

    switch (statusCode) {
      case 400:
        // if (url.indexOf(APIs.RE_AUTHENTICATE) > -1) {
        //   return false
        // }
        // handleBadRequestError(message)
        break
      case 401:
        //  const res = await handleTokenExpired(originalRequest)
        //   console.log('token expired: ', res)
        //   return Promise.resolve(res)
        break
      case 404:
        // if () {
        //   break
        // }
        handleGeneralError(message)
        break
      case 500:
        switch (
          code
          //
        ) {
        }
        break
      case 501:
      case 502:
        //  handleIntenalServerError()
        break
      case 504:
        handleServerTimeOut()
        break
      case 989:
        console.log('cancel http')
        // source = axios.CancelToken.source()
        break
      default:
        handleGeneralError(message)
        break
    }
    return Promise.reject(error)
  }
)

export default axiosConfig