import { Image } from 'antd'
import React, { Component, ErrorInfo, ReactNode,PureComponent } from 'react'
import { ErrorPageIcon } from '../../assets'
import styles from './styles.module.scss'

interface Props {
  children: ReactNode
}

interface State {
  hasErrored: boolean
}

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error: Error): State {
    // process the error
    return { hasErrored: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className={styles.errorImageOverlay}>
          <Image preview={false} src={ErrorPageIcon} className={styles.errorImageContainer} />
          <h2 className={styles.errorImageText}>Oop ! Something went wrong</h2>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
