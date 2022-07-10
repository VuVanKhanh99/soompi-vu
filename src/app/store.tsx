import React from 'react'
import { combineReducers } from 'redux'
import { configureStore,ThunkAction,Action } from '@reduxjs/toolkit'
import videoCateReducer from '../features/VideoPageItem/redux/reducer'

export const combineReducer = combineReducers({
  video: videoCateReducer
})

export const storeApp = configureStore({
  reducer: combineReducer
})

export type AppDispatch = typeof storeApp.dispatch
export type RootState = ReturnType<typeof storeApp.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>