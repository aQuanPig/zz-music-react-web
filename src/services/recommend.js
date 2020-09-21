import request from './request'

// 获取轮播图数据
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

// 获取热门推荐数据
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// 获取新碟上架数据
export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

// 获取榜单数据
export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}