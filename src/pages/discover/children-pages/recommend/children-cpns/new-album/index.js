import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import MJThemeHeaderRCM from 'components/theme-header-recommend/index'
import { AlbumWrapper } from './style'
import MJAlbumCover from '@/components/album-cover'
export default memo(function MJNewAlbum() {
  // redux hook
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hook
  const pageRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <MJThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02"
          onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div className="page" key={item}>
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        return (
                          <MJAlbumCover info={iten}
                            size={100}
                            width={118}
                            key={iten.id}
                            bgp="-570px">
                          </MJAlbumCover>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
          onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
