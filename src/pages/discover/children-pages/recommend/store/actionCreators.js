import * as actionTypes from './constants'
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums
} from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

const changeHotRecmmendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})
export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecmmendAction(res))
    })
  }
}
const changeNewAlbumAction = (res) => {
  type:actionTypes.CHANGE_NEW_ALBUMS,
  
}
export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res=>{
      dispatch(changeNewAlbumAction(res))
    })
  }
}