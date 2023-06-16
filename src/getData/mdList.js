// const jsonData = {
//   "baseUrl": "/src/mdfile",
//   "js": [
//     {
//       "name": "ceshi.md",
//       "type": "type1"
//     },
//     {
//       "name": "ceshi2.md",
//       "type": "type1"
//     }
//   ],
//   "vue": [
//     {
//       "name": "ceshi2.md",
//       "type": "type1"
//     }
//   ],
//   "note": [
//     {
//       "name": "ceshi2.md",
//       "type": "type1"
//     }
//   ]
// }

// export default jsonData

import axios from 'axios'
const serive = axios.create({
    //初始化参数
    // baseURL: '/api',
    timeOut: 10000 // 当超过多少毫秒时 认定超时
})
//请求拦截器
serive.interceptors.request.use(
    config => {
        // 在发送请求之前进行一些操作，例如添加请求头或参数
        // config.headers['Authorization'] = 'Bearer ' + getToken()
        // config.params['key'] = 'value'
        return config
      },
      error => {
        // 处理请求错误
        return Promise.reject(error)
      }
)

//相应拦截器
serive.interceptors.response.use(
    response => {
        // 在接收到响应之后进行一些操作，例如处理响应数据
        return response.data
      },
      error => {
        // 处理响应错误
        return Promise.reject(error)
      }
)

export default serive

