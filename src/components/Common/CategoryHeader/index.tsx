import React from 'react'
import { Image } from 'antd'
import { TopicDaily } from '../../../assets'
import styles from './styles.module.scss'

function CategoryHeader() {
  return <Image preview={false} className={styles.imgTopic} src={TopicDaily} />
}

export default React.memo(CategoryHeader)
