import React, { memo } from 'react'

import { headerLinks } from "@/common/local-data";

import { NavLink } from 'react-router-dom'
import { SearchOutlined } from "@ant-design/icons";
import { 
  Input
 } from "antd";
import {
  HeaderWrapper,
  HeaderLeft,
  HeaerRight
} from "./style";

export default memo(function MJAppHeader() {
  // 业务代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
      <NavLink to={item.link} exact>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>)
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  // 返回的JSX
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01"> </a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="list-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaerRight>
          <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} className="search"/>
          <button className="center">创作者中心</button>
          <div className="login">登录</div>
        </HeaerRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
