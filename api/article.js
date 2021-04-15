import { request } from '@/plugins/request'

// 获取公共文章列表
export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}

// 获取关注的文章列表
export const getFeedArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        // headers: {
        //     // 数据格式：Token+空格+token数据
        //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU0NjkwLCJ1c2VybmFtZSI6ImN1MDUyNSIsImV4cCI6MTYyMzMxNjI1Mn0.yEmcicrg5CBtkCOtYGNb2bNnh6SYzDk0_xßa7YkGqecA`
        // },
        params
    })
}

// 添加点赞
export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`
    })
}

// 取消点赞
export const deleteFavorite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`
    })
}

// 发表文章
export const publishArticle = data => {
    return request({
        method: 'POST',
        url: '/api/articles',
        data
    })
}

// 获取文章详情
export const getArticle = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`
    })
}

// 编辑文章
export const editArticle = params => {
    return request({
        method: 'PUT',
        url: `/api/articles/${params.slug}`,
        data: params.data
    })
}

// 删除文章
export const deleteArticle = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}`
    })
}

// 获取文章评论
export const getComments = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`
    })
}

// 添加文章评论
export const addComment = params => {
    return request({
        method: 'POST',
        url: `/api/articles/${params.slug}/comments`,
        data: params.body
    })
}

// 删除文章评论
export const deleteComment = params => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${params.slug}/comments/${params.id}`
    })
}

