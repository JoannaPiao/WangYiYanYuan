/*
能发送ajax请求的函数模块
函数的返回值为promise对象
1.异步得到的不再是response，data数据（result）
2.对请求错误进行了统一的处理，外面使用时不用在处理错误
 */

import axios from 'axios'

export default function ajax (url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (method === 'GET') {
      //指定所有query参数
      promise = axios.get(url, {params: data})
    } else {
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      //请求失败 ，调用reject
      reject(error)
      //统一处理请求错误,外面使用async/await不用使用try来处理错误
      alert('请求出错', error.message)

    })
  })
}


