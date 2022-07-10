import React from 'react'
import { LIST_ACTION_VIDEO } from './action'

export interface infoArticle {
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

interface initialVideo {
  listNews: Array<any>
  infoArticle: infoArticle
  listVideoRelated: Array<infoArticle>
}

export const initialInfoArticle: infoArticle = {
  id: '',
  img: '',
  listImgDetails: [],
  desc: '',
  textDoc: '',
  timeUpdate: '',
  listVideos: [],
  tag: '',
  writer: '',
  idWriter: ''
}

const initialState: initialVideo = {
  listNews: [],
  infoArticle: initialInfoArticle,
  listVideoRelated: []
}

const videoCateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LIST_ACTION_VIDEO.GET_LIST_NEWS:
      return {
        ...state,
        listNews: action.payload.data
      }
    case LIST_ACTION_VIDEO.GET_INFO_ARTICLE:
      return {
        ...state,
        infoArticle: action.payload.data
      }
    case LIST_ACTION_VIDEO.GET_LIST_VIDEO_RELATED:
      return {
        ...state,
        listVideoRelated: action.payload.data
      }
    default:
      return state
  }
}

export default videoCateReducer
