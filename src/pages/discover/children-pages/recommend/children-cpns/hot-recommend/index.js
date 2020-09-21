import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getHotRecommendAction } from '../../store/actionCreators';

import {
  HotRecommendWrapper
} from "./style";
import MJThemeHeaderRCM from 'components/theme-header-recommend'
import MJSongsCover from 'components/songs-cover'

export default memo(function MJHotRecommend() {
  // redux hook
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch()

  //other hook
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])
  return (
    <HotRecommendWrapper>
      <MJThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
      <div className="recommendList">
        {
          hotRecommends.map((item, index) => {
            return (
              <MJSongsCover info={item} key={item.id} />
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
