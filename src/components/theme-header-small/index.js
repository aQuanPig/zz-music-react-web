import React, { memo } from 'react'
import { HeaderSmallWrapper } from './style'
export default memo(function MJHeaderSmall(props) {
  const { title, all } = props
  return (
    <HeaderSmallWrapper>
      <h3 className="all">
        <p className="singer">{title}</p>
        <a href="#/">{all ? '查看全部>' : null}</a>
      </h3>
    </HeaderSmallWrapper>
  )
})
