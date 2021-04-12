<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <!-- 文章标题 -->
        <h1>{{article.title}}</h1>
        <ArticleMeta :article="article"></ArticleMeta>
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
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <ArticleComment :article="article"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle } from '@/api/article'
import MarkdownIt from 'markdown-it'
import ArticleMeta from './components/articleMeta'
import ArticleComment from './components/articleComment'
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
  }
}
</script>

<style scoped>
</style>