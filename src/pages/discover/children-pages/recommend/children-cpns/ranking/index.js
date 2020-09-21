import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTopListAction } from '../../store/actionCreators'

import MJThemeHeaderRCM from 'components/theme-header-recommend/index'
import { RankingWrapper } from "./style";
import MJTopRanking from '@/components/top-ranking'

export default memo(function MJRanking() {
  //redux hook
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }))


  // other hook
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])
  return (
    <RankingWrapper>
      <MJThemeHeaderRCM title="榜单" />
      <div className="tops">
        <MJTopRanking info={upRanking} />
        <MJTopRanking info={newRanking} />
        <MJTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
