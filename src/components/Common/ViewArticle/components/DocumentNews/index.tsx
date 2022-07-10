import React from 'react'
import { Image } from 'antd'
import styles from './styles.module.scss'
import ContainerImage from '../../../ContainerImage'
import HeaderTypeRelated from '../../../HeaderTypeRelated'

export interface DocNews {
  id: string | number
  img: any
  listImgDetails?: Array<any>
  desc: string
  textDoc: string
  timeUpdate: string
  listVideos: Array<string>
  tag: string
  writer: string
  idWriter: string
}

function DocumentNews({
  id,
  img,
  listImgDetails,
  desc,
  textDoc,
  timeUpdate,
  listVideos,
  tag,
  writer,
  idWriter
}: DocNews) {
  return (
    <div className={styles.containerArticle}>
      <ContainerImage
        styles={{
          alignItems: 'top',
          width:'100%',
          height: '50rem'
        }}
        src={img}
      />
      <h2 className={styles.titleNews}>{desc}</h2>
      <div className={styles.addInfoWriter}>
        <HeaderTypeRelated tag={tag} timeUpdate={timeUpdate} />
        <p className={styles.writer}>
          by <span>{writer}</span>
        </p>
      </div>
    </div>
  )
}

export default React.memo(DocumentNews)
