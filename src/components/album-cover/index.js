import React, { memo } from 'react'
import { getSizeImage } from "@/utils/format-utils";
import {
  AlbumCoverWrapper,
  AlbumCoverTop,
  AlbumCoverBottom
} from "./style";
export default memo(function MJAlbumCover(props) {
  const { info, size = 130, width = 153, bgp = "-845px" } = props
  return (
    <AlbumCoverWrapper>
      <AlbumCoverTop size={size} width={width} bgp={bgp}>
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="#/" className="cover sprite_covor"> </a>
      </AlbumCoverTop>
      <AlbumCoverBottom  width={width}>
        <p className="title  text-nowrap">{info.name}</p>
        <p className="writer text-nowrap">{info.artist.name}</p>
      </AlbumCoverBottom>
    </AlbumCoverWrapper>
  )
})
