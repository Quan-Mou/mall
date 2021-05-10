import { request } from "./request"
import axios from "axios"

// export function getDetail(id) {
//   return request({
//     // url: 'http://152.136.185.210:7878/api/m5/detail',
//     url: '/detail',
//     params: {
//       id
//     }
//   })
// }


export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}