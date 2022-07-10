import React from 'react'
import styles from './styles.module.scss'
import { Image } from 'antd'
import { Icon404 } from '../../assets'
import { Link } from 'react-router-dom'

function PageNotFound() {
  const urlHomepage = '/'

  return (
    <div className={styles.container}>
      <Image preview={false} src={Icon404} className={styles.errorImage} />
      <Link className={styles.textBackHome} to={urlHomepage}>
        Back to Home
      </Link>
    </div>
  )
}

export default PageNotFound
