import axios from 'axios'

export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})
// 通过插件机智获取到上下文对象（query、params、req、res、app、store...）
// 插件导出函数必须作为default成员
export default ({store}) => {
    // 添加请求拦截器
    request.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        // 任何请求都要经过请求拦截器
        // 可以在请求拦截器中做一些公共的业务处理，例如统一设置token
        const { user } = store.state
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }
        return config
    }, function (error) {
        // 对请求错误做些什么
        // 请求失败
        return Promise.reject(error)
    })
    request.interceptors.response.use(function (response) {
        return response
    }, function (error) {
        // 对请求错误做些什么
        // 请求失败
        return Promise.reject(error)
    })
}
