import request from '@/utils/request'

// 用户登录
export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}