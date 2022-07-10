import React from 'react'
import styles from './styles.module.scss'
import { Image } from 'antd'
import { titleCategory } from '../../../../../configs'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { getTitleArticle } from '../../../../../utils/common'

interface BlogNewInput {
  id: string | number
  type: string
  img: string
  description: string
  timeUpdate: string
}

function BlogNewsItem({ id, type, img, description, timeUpdate }: BlogNewInput) {
  const history = useHistory()

  const moveToArticle = async () => {
    const path = 'article/' + id + '/' + getTitleArticle(type, description)

    await history.push('/')
    await history.push(`${path}`)
  }

  return (
    <div className={styles.containerNews}>
      <Image preview={false} src={img} className={styles.imgActor} onClick={moveToArticle} />
      <div className={styles.bottomView}>
        <p className={styles.titleNews} onClick={moveToArticle}>
          {getTitleArticle(type, description)}
        </p>
        <p className={styles.timeView}>{timeUpdate}</p>
      </div>
    </div>
  )
}

export default React.memo(BlogNewsItem)
