import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSellteSingerAction } from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'

import { SellteSingerWrapper } from './style'
import MJHeaderSmall from '@/components/theme-header-small'

export default memo(function MJSellteSinger() {
  // redux hook
  const dispatch = useDispatch()
  const { sellteSinger } = useSelector(state => ({
    sellteSinger: state.getIn(["recommend", "sellteSinger"])
  }))
  // other hook

  useEffect(() => {
    dispatch(getSellteSingerAction(5))
  }, [dispatch])
  return (
    <SellteSingerWrapper>
      <MJHeaderSmall title="入驻歌手" all={true} />
      <div className="singer-list">
        {
          sellteSinger.map((item, index) => {
            return (
              <a href="#/" className="items" key={item.id}>
                <img className="image" src={getSizeImage(item.picUrl, 62)} alt="" />
                <div className="info">
                  <div className="title">
                    {item.name}
                  </div>
                  <div className="name">
                    {item.name}
                  </div>
                </div>
              </a>
            )
          })
        }
      </div>
    </SellteSingerWrapper>
  )
})
