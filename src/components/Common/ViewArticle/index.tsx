import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import axiosConfig from '../../../api'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { AppDispatch } from '../../../app/store'
import { Actor1Img } from '../../../assets'
import { LIST_ACTION_VIDEO } from '../../../features/VideoPageItem/redux/action'
import { infoArticle, initialInfoArticle } from '../../../features/VideoPageItem/redux/reducer'
import DocumentNews from './components/DocumentNews'
import LeftViewNews from './components/LeftViewNews'
import styles from './styles.module.scss'

const data = {
  id: '1534818wpp',
  img: Actor1Img,
  listImgDetails: [],
  desc: 'Fromis_9 Takes 5th Win For “Stay This Way” On “Music Core”; Performances By WINNER, VIVIZ, WJSN, And More',
  textDoc: '',
  timeUpdate: '10 hours ago',
  listVideos: [
    'https://www.youtube.com/watch?v=WtbBITFW8oY&ab_channel=MBCkpop',
    'https://www.youtube.com/watch?v=Zkbdv_0BhMI&ab_channel=MBCkpop'
  ],
  tag: 'TV/FILM',
  writer: 'L.Kim',
  idWriter: '2782hdu63'
}

function ViewArticle() {
  const match = useRouteMatch()
  const dispatch = useAppDispatch()
  const dataNews = useAppSelector((state) => state.video.infoArticle)
  const [infoNews, setInfoNews] = useState<infoArticle>(initialInfoArticle)
  const [titleNews, setTitleNews] = useState<string>()

  useEffect(() => {
    window.scrollTo(0, 0)
    const dataGet = JSON.stringify(match.params)
    const dataLocation = JSON.parse(dataGet)
    dataLocation?.title && setTitleNews(dataLocation.title)
    const getInfoArticle = async () => {
      const data = await axiosConfig.get(`/get-info-video-news/${dataLocation?.id}`)
      if (Array.isArray(data) && data?.length > 0) {
        await dispatch({ type: LIST_ACTION_VIDEO.GET_INFO_ARTICLE, data: data })
      }
    }

    //getInfoArticle()
  }, [])

  useEffect(() => {
    // Object.keys(dataNews)?.length > 0 && setInfoNews(dataNews)

    //fake data
    Object.keys(data)?.length > 0 && setInfoNews(data)
  }, [dataNews])

  return (
    <div className={styles.containerVideoNews}>
      {infoNews?.id ? (
        <>
          <DocumentNews
            id={data?.id}
            img={data?.img}
            listImgDetails={data?.listImgDetails}
            desc={titleNews ?? data?.desc}
            textDoc={data?.textDoc}
            timeUpdate={data?.timeUpdate}
            listVideos={data?.listVideos}
            tag={data?.tag}
            writer={data?.writer}
            idWriter={data?.idWriter}
          />
          <LeftViewNews id={data?.id} />
        </>
      ) : (
        <Spin tip="Loading..." size={'large'} />
      )}
    </div>
  )
}

export default ViewArticle
