<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <!-- 文章标题 -->
        <h1>{{article.title}}</h1>
        <ArticleMeta :article="article" @click="articleClick"></ArticleMeta>
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <!-- 文章正文内容 -->
        <div class="col-md-12" v-html="article.body"></div>
        <ul class="tag-list">
          <li class="tag-default tag-pill tag-outline" v-for="(i, index) in article.tagList" :key="index" >{{i}}</li>
        </ul>
      </div>
      <hr />
      <div class="article-actions">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <ArticleMeta :article="article" @click="articleClick"/>
        </div>
      </div>
      <div v-if="!user" class="article-actions">
        <nuxt-link to="/login">Sign in</nuxt-link> or <nuxt-link to="/register">Sign up</nuxt-link> to add comments on this article.
      </div>
      <div class="row" v-if="user">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <ArticleComment :article="article" :user="user"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, deleteArticle, addFavorite, deleteFavorite } from '@/api/article'
import { followUser, unFollowUser } from '@/api/profile'
import MarkdownIt from 'markdown-it'
import ArticleMeta from './components/articleMeta'
import ArticleComment from './components/articleComment'
import { mapState } from 'vuex'
export default {
  name: "Article",
  async asyncData({ params }) {
    const { data } = await getArticle(params.slug)
    const { article } = data
    const md = new MarkdownIt()
    article.body = md.render(article.body)
    return {
      article
    }
  },
  head () {
    return {
      title: `${this.article.title} - Realworld`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.article.description}`
        }
      ]
    }
  },
  components: {
    ArticleMeta,
    ArticleComment
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async articleClick (val) {
      console.log(val)
      if (val.type === 1) {
        if (this.article.author.following) {
          await unFollowUser(val.data)
        } else {
          await followUser(val.data)
        }
        this.article.author.following = !this.article.author.following
      } else if (val.type === 2) {
        if (this.article.favorited) {
          await deleteFavorite(val.data)
          this.article.favoritesCount --
        } else {
          await addFavorite(val.data)
          this.article.favoritesCount ++
        }
        this.article.favorited = !this.article.favorited
      } else if (val.type === 3) {
        await deleteArticle(val.data)
        this.$router.push({name: 'Home', query: {tab: 'your_feed'}})
      }
    }
  }
}
</script>

<style scoped>
</style>