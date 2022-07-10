import React from 'react'
import { Actor1Img } from '../../../assets'
import BlogNewsItem from './components/BlogNewsItem'
import styles from './styles.module.scss'

export interface typeCategory {
  type: string
  data: any
}

function ViewListNews({ type, data }: typeCategory) {
  return (
    <div className={styles.container}>
      {data.map((item: any, i: number) => {
        return (
          <BlogNewsItem
            key={item.id}
            id={item.id}
            type={type}
            img={item.img}
            description={item.desc}
            timeUpdate={item.timeUpdate}
          />
        )
      })}
    </div>
  )
}

export default React.memo(ViewListNews)
