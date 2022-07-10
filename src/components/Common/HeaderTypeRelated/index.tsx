import React from 'react'
import style from './styles.module.scss'

export interface HeaderTypeRelated {
  tag: string
  timeUpdate: string
}
function HeaderTypeRelated({ tag, timeUpdate }: HeaderTypeRelated) {
  return (
    <div className={style.topBar}>
      <div className={style.tagNewsRelated}>{tag}</div>
      <div className={style.timeView}>{timeUpdate}</div>
    </div>
  )
}

export default HeaderTypeRelated
