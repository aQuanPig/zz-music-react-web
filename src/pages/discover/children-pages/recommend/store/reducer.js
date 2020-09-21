import { Map } from 'immutable'
import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND
} from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums:[]
})
function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners }
      return state.set("topBanners", action.topBanners)
    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends)
    default:
      return state
  }
}
export default reducer