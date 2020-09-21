import React, { memo, useEffect } from 'react'


import { getNewAlbumAction } from '../../store/actionCreators'

import MJThemeHeaderRCM from 'components/theme-header-recommend/index'
import { useDispatch } from 'react-redux'
export default memo(function MJNewAlbum() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  return (
    <div>
      <MJThemeHeaderRCM title="新碟上架" />
    </div>
  )
})
