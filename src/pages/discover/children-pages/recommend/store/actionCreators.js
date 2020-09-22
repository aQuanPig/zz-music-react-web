import * as actionTypes from './constants'
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getSellteSinger
} from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecmmendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
})

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})
const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

const changeSellteSingerAction = (res) => ({
  type:actionTypes.CHANGE_SELLTE_SINGER,
  sellteSinger:res.artists
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecmmendAction(res))
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res))
          break;
        case 2:
          dispatch(changeNewRankingAction(res))
          break;
        case 3:
          dispatch(changeOriginRankingAction(res))
          break;
        default:
          break;
      }
    })
  }
}

export const getSellteSingerAction = (limit) => {
  return dispatch => {
    getSellteSinger(limit).then(res=>{
      dispatch(changeSellteSingerAction(res))
    })
  }
}