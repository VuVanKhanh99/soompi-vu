import React, { CSSProperties } from 'react'
import HeaderTypeRelated from '../HeaderTypeRelated'
import style from './styles.module.scss'

export interface HeaderTag {
  styles?: CSSProperties
  className?: string
  tag: string
  timeUpdate: string
  titleBar: string
}

function HeaderTag({ styles, className, tag, timeUpdate, titleBar }: HeaderTag) {
  return (
    <div style={styles} className={`${className} ${style.titleSection}`}>
      <HeaderTypeRelated tag={tag} timeUpdate={timeUpdate} />
      <div className={style.titleSidebar}>{titleBar}</div>
    </div>
  )
}

export default React.memo(HeaderTag)
