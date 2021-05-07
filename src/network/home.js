import axios from "axios"
import {request} from "./request"
// export function getHomeMultidata() {
//   return axios({
//     // url:'http://123.207.32.32:8000/home/multidata'
//     url:'http://152.136.185.210:7878/api/m5/home/multidata'
//   })
// }

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getGoodslist(type,page) {
  return axios({
    url: 'http://152.136.185.210:7878/api/m5/home/data',
    params: {
      type,
      page
    }
  })
}