import React, { memo } from 'react'

import { hotRadios } from '@/common/local-data'
import { getSizeImage } from '@/utils/format-utils'

import { HotRadioWrapper } from './style'
import MJHeaderSmall from '@/components/theme-header-small'
export default memo(function MJHotRadio() {
  return (
    <HotRadioWrapper>
      <MJHeaderSmall title="热门主播" all={false} />
      {
        hotRadios.map((item, index) => {
          return (
            <div className="center" key={item.url}>
              <a href={item.url} className="items">
                <img src={getSizeImage(item.picUrl, 40)} className="image" alt="" />
              </a>
              <div className="info">
                <div className="author">
                  <a href={item.url} className="title">
                    {item.name}
                  </a>
                  <i className="sprite_icon2 vip"></i>
                </div>
                <div className="brief">
                  {item.position}
                </div>
              </div>
            </div>
          )
        })
      }
    </HotRadioWrapper>
  )
})
