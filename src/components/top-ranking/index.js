import React, { memo } from 'react'
import { TopRankingWrapper, TopRankingTop, TopRankingCenter } from './style'
export default memo(function MJTopRanking(props) {
  const { info } = props
  const { tracks = [] } = info
  return (
    <TopRankingWrapper>
      <TopRankingTop>
        <div className="left-top">
          <img src={info.coverImgUrl} alt="" />
          <a href="#/" className="sprite_covor"> </a>
        </div>
        <div className="right-top">
          <a href="#/">
            <h3 className="title">{info.name}</h3>
          </a>
          <div className="btn">
            <button className="play sprite_02"></button>
            <button className="add sprite_02"></button>
          </div>
        </div>
      </TopRankingTop>
      <TopRankingCenter>
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div className="item-list" key={item.id}>
                <span className="index">{index + 1}</span>
                <a href="#/" className="name text-nowrap">
                  {item.al.name}
                </a>
                <div className="icon">
                  <a href="#/" className="play sprite_02"> </a>
                  <a href="#/" className="add sprite_icon2"> </a>
                  <a href="#/" className="file-add sprite_02"> </a>
                </div>
              </div>
            )
          })
        }
      </TopRankingCenter>
      <div className="more">
        <a href="#/" className="all">查看全部{'>'}</a>
      </div>
    </TopRankingWrapper>
  )
})
