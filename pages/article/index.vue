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
      </div>
      <hr />
      <div class="article-actions">
        <ArticleMeta :article="article" />
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
import { getArticle, addFavorite, deleteFavorite } from '@/api/article'
import { followUser, unFollowUser } from '@/api/user'
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
      if (val.type === 2) {
        // 文章点赞
        if (this.article.favorited) {
          await deleteFavorite(val.data)
          this.article.favoritesCount --
        } else {
          await addFavorite(val.data)
          this.article.favoritesCount ++
        }
        this.article.favorited = !this.article.favorited
      }
    }
  }
}
</script>

<style scoped>
</style>