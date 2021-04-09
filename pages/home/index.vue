<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">HLOG</h1>
        <p>A place to share your technology.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>
          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link
                :to="{
                  name: 'Profile',
                  params: { username: article.author.username },
                }"
                ><img :src="article.author.image"
              /></nuxt-link>
              <div class="info">
                <nuxt-link
                  :to="{
                    name: 'Profile',
                    params: { username: article.author.username },
                  }"
                  class="author"
                  >{{ article.author.username }}</nuxt-link
                >
                <span class="date">{{ article.createdAt }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{ name: 'Article', params: { slug: article.slug } }"
              class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
          <nav>
            <ul class="pagination">
                <li class="page-item" :class="{'active': i === page}" v-for="i in totalPage" :key="i">
                    <nuxt-link class="page-link" :to="{name: 'Home', query: {page: i}}">{{i}}</nuxt-link>
                </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <a href="" class="tag-pill tag-default" v-for="(i, idx) in tags" :key="idx">{{i}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles } from "@/api/article"
import { getTags } from "@/api/tag"
export default {
  name: "HomeIndex",
  async asyncData({ query }) {
    const page = parseInt(query.page || 1)
    const limit = 10
    // 获取文章列表接口、获取tag接口没有因果关系，应同时调用
    const [ articleRes, tagRes ] = await Promise.all([
      getArticles({
        limit: limit,
        offset: (page - 1) * limit
      }),
      getTags()
    ])
    const { articles, articlesCount } = articleRes.data
    const { tags } = tagRes.data
    return {
      articles,
      articlesCount,
      tags,
      limit,
      page
    }
  },
  watchQuery: ['page'], // 监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)
  computed: {
      totalPage () {
        return Math.ceil(this.articlesCount / this.limit)
      }
  }
}
</script>

<style scoped></style>
