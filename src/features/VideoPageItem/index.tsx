import React, { useEffect, useState } from 'react'
import axiosConfig from '../../api'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Actor1Img } from '../../assets'
import CategoryHeader from '../../components/Common/CategoryHeader'
import SortNews from '../../components/Common/SortNews'
import ViewListNews from '../../components/Common/ViewListNews'
import { LIST_ACTION_VIDEO } from './redux/action'
import { Spin } from 'antd'
import styles from './styles.module.scss'

//fake data
const dataFake = [
  {
    id: '1534818wpp',
    img: Actor1Img,
    desc: 'Fromis_9 Takes 5th Win For “Stay This Way” On “Music Core”; Performances By WINNER, VIVIZ, WJSN, And More',
    timeUpdate: '10 hours ago'
  },
  {
    id: '1544818wpa',
    img: Actor1Img,
    desc: 'fromis_9 Takes 5th Win For “Stay This Way” On “Music Core”; Performances By WINNER, VIVIZ, WJSN, And More',
    timeUpdate: '10 hours ago'
  },
  {
    id: '1534818wp6',
    img: Actor1Img,
    desc: 'fromis_9 Takes 5th Win For “Stay This Way” On “Music Core”; Performances By WINNER, VIVIZ, WJSN, And More',
    timeUpdate: '10 hours ago'
  },
  {
    id: '1534818wp4',
    img: Actor1Img,
    desc: 'fromis_9 Takes 5th Win For “Stay This Way” On “Music Core”; Performances By WINNER, VIVIZ, WJSN, And More',
    timeUpdate: '10 hours ago'
  },
  {
    id: '4534818erd',
    img: Actor1Img,
    desc: 'fromis_9 Takes 5th Win For “Stay This Way” On “Music Core”; Performances By WINNER, VIVIZ, WJSN, And More',
    timeUpdate: '10 hours ago'
  }
]

function VideoPage() {
  const dispatch = useAppDispatch()
  const dataNews = useAppSelector((state) => state.video.listNews)
  const [dataVideo, setDataVideo] = useState<Array<any>>([])

  useEffect(() => {
    const getDataNewsVideo = async () => {
      const data = await axiosConfig.get('/get-list-news-video')
      if (Array.isArray(data) && data?.length > 0) {
        await dispatch({ type: LIST_ACTION_VIDEO.GET_LIST_NEWS, data: data })
      }
    }
    // getDataNewsVideo()
  }, [])

  useEffect(() => {
    // data?.length > 0 && setDataVideo(dataNews);

    //fake data
    setDataVideo(dataFake)
  }, [dataNews])

  return (
    <div className={styles.containerVideo}>
      {dataVideo?.length > 0 ? (
        <>
          <CategoryHeader />
          <SortNews />
          <ViewListNews type="video" data={dataVideo} />
        </>
      ) : (
        <Spin tip="Loading..." size={'large'}/>
      )}
    </div>
  )
}

export default VideoPage
