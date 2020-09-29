import {
  request
} from '@commonjs/utils/request'

export function getHomeMultidata(type, page) {
  return request({
    url: '/api/home/multidata',
    params: {
      type,
      page
    }
  })
}

export function getHomeData(type, page) {
  return request({
    url: '/api/home/data',
    params: {
      type,
      page
    }
  })
}
export class Multidata {
  constructor(data) {
    const multidata = []
    multidata.banners = banner(data)
    multidata.icons = icons(data)
    return multidata
  }
}

function banner(data) {
  const bannerInfo = data.data.banner.data
  const bannerBg = data.data.bannerBg.data
  let banners = bannerInfo.map((item, index, arr) => {
    let info = []
    if (!item.backgroundImage) {
      let imgType = bannerBg.find(obj => obj.cateType == item.cateType)
      info.bgImg = imgType.backgroundImage
    } else {
      info.bgImg = item.backgroundImage
    }
    info.link = item.link
    info.title = item.title
    info.label = item.label
    return info
  });
  return banners
}


function icons(data) {
  const iconsInfo = data.data.icons.data
  let icons = iconsInfo.map((item, index, arr) => {
    let info = []
    info.img = item.icon
    info.title = item.name
    info.link = item.link
    info.tagImg = item.tagUrl
    return info
  })
  return icons
}