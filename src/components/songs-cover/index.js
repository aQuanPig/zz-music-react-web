import React, { memo } from 'react'
import {
  getCount,
  getSizeImage
} from "@/utils/format-utils";

import {
  SongsCoverWrapper,
  SongsCoverTop,
  SongsCoverBottom
} from './style'
const MJSongsCover = memo(function (props) {
  const { info } = props
  return (
    <SongsCoverWrapper>
      <SongsCoverTop>
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="songs-info">
            <span className="num">
              <i className="sprite_icon erji"></i>
              <span>{getCount(info.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </SongsCoverTop>
      <SongsCoverBottom>
        <p className="text-nowrap title">{info.name}</p>
        <p className="text-nowrap writer">
          <span className="by">by</span>
          {info.copywriter || info.creator.nickname}
        </p>
      </SongsCoverBottom>
    </SongsCoverWrapper>
  )
})
MJSongsCover.defaultProps = {
  info: {}
}
export default MJSongsCover
