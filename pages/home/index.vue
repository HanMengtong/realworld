<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link class="nav-link" :class="{'active': tab === 'your_feed'}" :to="{name: 'Home', query: {tab: 'your_feed'}}" exact>Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{'active': tab === 'global_feed'}" :to="{name: 'Home', query: {tab: 'global_feed'}}" exact>Global Feed</nuxt-link>
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link class="nav-link" :class="{'active': tab === 'tag'}" :to="{name: 'Home', query: {tab: 'tag', tag: tag}}">#{{tag}}</nuxt-link>
              </li>
            </ul>
          </div>
          <List :list="articles" :total="totalPage" :page="page" :limit="limit" :tab="tab" :name="'Home'" :tag="$route.query.tag" />
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <nuxt-link :to="{name: 'Home', query: {tab: 'tag', tag: i}}" class="tag-pill tag-default" v-for="(i, idx) in tags" :key="idx">{{i}}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles, getFeedArticles, addFavorite, deleteFavorite } from "@/api/article"
import { getTags } from "@/api/tag"
import { mapState } from 'vuex'
import List from '../components/List'
export default {
  name: "HomeIndex",
  async asyncData({ query, store }) {
    const page = parseInt(query.page || 1)
    const limit = 10
    const { tag } = query
    const tab = query.tab || 'global_feed'
    const loadArticles = store.state.user && tab === 'your_feed' ? getFeedArticles : getArticles
    // 获取文章列表接口、获取tag接口没有因果关系，应同时调用
    const [ articleRes, tagRes ] = await Promise.all([
      loadArticles({
        limit: limit,
        offset: (page - 1) * limit,
        tag
      }),
      getTags()
    ])
    const { articles, articlesCount } = articleRes.data
    const { tags } = tagRes.data

    articles.forEach(article => {
      article.favoriteDisabled = false
    })

    return {
      articles,
      articlesCount,
      tags,
      limit,
      page,
      tag,
      tab
    }
  },
  watchQuery: ['page', 'tag', 'tab'], // 监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)
  computed: {
    ...mapState(['user']),
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  components: {
    List
  },
  methods: {
    async onFavorite (article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        // 添加点赞
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    }
  }
}
</script>

<style scoped></style>
