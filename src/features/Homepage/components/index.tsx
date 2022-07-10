import React from 'react'
import { Image } from 'antd'
import { UptempoIcon } from '../../../assets'
import styles from './styles.module.scss'

function Homepage() {
  
  const ViewImage = () => {
    return (
      <div>
        <Image preview={false} src={UptempoIcon} />
      </div>
    )
  }

  return (
    <div className={styles.containerHomepage}>
      <ViewImage />
    </div>
  )
}

export default Homepage
