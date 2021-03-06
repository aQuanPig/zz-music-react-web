import React, { memo } from 'react'
import {UseLoginWrapper} from './style'
export default memo(function MJUseLogin() {
  return (
    <UseLoginWrapper className="sprite_02">
      <p className="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a href="#/" className="sprite_02 login">用户登录</a>
    </UseLoginWrapper>
  )
})
