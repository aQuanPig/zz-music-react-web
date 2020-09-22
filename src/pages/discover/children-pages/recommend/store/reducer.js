import { Map } from 'immutable'
import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUMS,
  CHANGE_NEW_RANKING,
  CHANGE_UP_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_SELLTE_SINGER
} from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRanking: {},
  newRanking: {},
  originRanking: {},
  sellteSinger: []
})
function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners }
      return state.set("topBanners", action.topBanners)
    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends)
    case CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums)
    case CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking)
    case CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking)
    case CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking)
    case CHANGE_SELLTE_SINGER:
      return state.set("sellteSinger",action.sellteSinger)
    default:
      return state
  }
}
export default reducer