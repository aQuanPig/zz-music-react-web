import React, { memo } from 'react'

import { ThemeHeaderWrapper } from "./style";


const MJThemeHeaderRCM = memo(function(props) {
  const { title, keywords } = props
  return (
    <ThemeHeaderWrapper className="sprite_02">
      <div className="left">
        <p className="title">{title}</p>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="#/" className="link">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="#/">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </ThemeHeaderWrapper>
  )
})

MJThemeHeaderRCM.defaultProps = {
  keywords: []
}
export default MJThemeHeaderRCM