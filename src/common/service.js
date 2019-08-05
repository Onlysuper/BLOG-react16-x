import axios from 'axios'
// import {Toast} from 'antd-mobile';  

//创建axios实例
const service = axios.create({
  baseURL: "/api", // api的base_url
  timeout: 200000, // 请求超时时间
  withCredentials: true // 选项表明了是否是跨域请求
})
service.interceptors.request.use(config => {
  // Toast.loading('加载中',1)              // loading组件，显示文字加载中，自动关闭延时1s
  console.log('request go');
  return config;
}, err => {
  console.log('请求失败')
  return Promise.reject(err)
})
//拦截响应
service.interceptors.response.use(config => {
  // Toast.hide()      ss                       // 销毁Toast组件
  console.log('response get')
  return config;
}, err => {
  console.log('响应失败')
  return Promise.reject(err)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
    * code为非000000是抛错 可结合自己业务进行修改
    */
    const res = response.data;
    // console.log(res);
    if (res.code === '00') {
      // console.log("response",res)
      //  res.code = res.code
      //  res.message = res.msg
      // Toast.info(res.code+res.message, 2);
      return res.data
      // return Promise.reject('error')
    } else {
      return Promise.reject('error')
      // return response.msg
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default service