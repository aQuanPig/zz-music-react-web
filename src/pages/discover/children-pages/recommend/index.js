import React, { memo } from 'react'

import MJTopBanner from './children-cpns/top-banner'
import MJHotRecommend from './children-cpns/hot-recommend'
import MJNewAlbum from './children-cpns/new-album'
import MJRanking from './children-cpns/ranking'
import MJUseLogin from './children-cpns/use-login'
import MJSellteSinger from './children-cpns/sellte-singer'
import MJHotRadio from './children-cpns/hot-radio'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'


function MJRecommend(props) {

  return (
    <RecommendWrapper>
      <MJTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <MJHotRecommend />
          <MJNewAlbum />
          <MJRanking />
        </RecommendLeft>
        <RecommendRight>
          <MJUseLogin />
          <MJSellteSinger />
          <MJHotRadio />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}
export default memo(MJRecommend)


// function MJRecommend(props) {
//   const { getBanners,topBanners } = props
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])


//   return (
//     <div>
//       MJRecommend
//       <h2>{topBanners.length}</h2>
//     </div>
//   )
// }
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(memo(MJRecommend))
