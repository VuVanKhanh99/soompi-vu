import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import axiosConfig from '../../../../../api'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { Actor1Img, Actor2Img, Actor3Img, Actor4Img } from '../../../../../assets'
import { LIST_ACTION_VIDEO } from '../../../../../features/VideoPageItem/redux/action'
import { infoArticle } from '../../../../../features/VideoPageItem/redux/reducer'
import ContainerImage from '../../../ContainerImage'
import HeaderTag from '../../../HeaderTag'
import styles from './styles.module.scss'

interface IDNews {
  id: string | number
}

const data = [
  {
    id: '1534818wpp',
    img: Actor2Img,
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
  },
  {
    id: '1534818wpp',
    img: Actor3Img,
    listImgDetails: [],
    desc: 'Lee Sang Yeob Doesn’t Hesitate To Protect Seo Ye Ji From A Sudden Attack In “Eve”',
    textDoc: '',
    timeUpdate: '10 hours ago',
    listVideos: [
      'https://www.youtube.com/watch?v=WtbBITFW8oY&ab_channel=MBCkpop',
      'https://www.youtube.com/watch?v=Zkbdv_0BhMI&ab_channel=MBCkpop'
    ],
    tag: 'DRAMA PREVIEW',
    writer: 'L.Kim',
    idWriter: '2782hdu63'
  },
  {
    id: '1534818wpp',
    img: Actor4Img,
    listImgDetails: [],
    desc: 'Watch: Seo Hyun Jin And Hwang In Yeop Are Serious When Filming But Know How To Have Fun Behind The Scenes Of “Why Her?”',
    textDoc: '',
    timeUpdate: '10 hours ago',
    listVideos: [
      'https://www.youtube.com/watch?v=WtbBITFW8oY&ab_channel=MBCkpop',
      'https://www.youtube.com/watch?v=Zkbdv_0BhMI&ab_channel=MBCkpop'
    ],
    tag: 'DRAMA PREVIEW',
    writer: 'L.Kim',
    idWriter: '2782hdu63'
  },
  {
    id: '1534818wpp',
    img: Actor2Img,
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
  },
  {
    id: '1534818wpp',
    img: Actor1Img,
    listImgDetails: [],
    desc: 'Lee Sang Yeob Doesn’t Hesitate To Protect Seo Ye Ji From A Sudden Attack In “Eve”',
    textDoc: '',
    timeUpdate: '10 hours ago',
    listVideos: [
      'https://www.youtube.com/watch?v=WtbBITFW8oY&ab_channel=MBCkpop',
      'https://www.youtube.com/watch?v=Zkbdv_0BhMI&ab_channel=MBCkpop'
    ],
    tag: 'DRAMA PREVIEW',
    writer: 'L.Kim',
    idWriter: '2782hdu63'
  }
]

function LeftViewNews({ id }: IDNews) {
  const dispatch = useAppDispatch()
  const listVideoRelated = useAppSelector((state) => state.video.listVideoRelated)
  const [listVideoNews, setListVideoNews] = useState<Array<infoArticle>>()

  useEffect(() => {
    const getListNewsRelated = async () => {
      const data = await axiosConfig.get(`/get-list-video-related/${id}`)
      if (Array.isArray(data) && data?.length > 0) {
        await dispatch({ type: LIST_ACTION_VIDEO.GET_LIST_VIDEO_RELATED, data: data })
      }
    }

    //getListNewsRelated()
  }, [])

  useEffect(() => {
    //listVideoRelated?.length > 0 && setListVideoNews(listVideoRelated)

    //fake data
    setListVideoNews(data)
  }, [listVideoRelated])

  return (
    <div className={styles.sideBarArticle}>
      {listVideoNews ? (
        <>
          <h2 className={`${styles.sectionTitle} ${styles.uppercase}`}>related</h2>
          <div className={styles.listArticle}>
            {data.map((item: any, i: number) => (
              <div key={i} className={styles.thumbnailWrapper}>
                <ContainerImage
                  src={item?.img}
                  styles={{
                    width: '18.5rem',
                    height: '12rem',
                    backgroundSize: 'cover',
                  }}
                />
                <HeaderTag tag={item?.tag} timeUpdate={item?.timeUpdate} titleBar={item?.desc} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <Spin size={'large'} />
      )}
    </div>
  )
}

export default React.memo(LeftViewNews)
