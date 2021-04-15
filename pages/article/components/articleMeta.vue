<template>
  <div class="article-meta">
        <nuxt-link :to="{name: 'Profile', query: {username: article.author.username}}"><img :src="article.author.image" /></nuxt-link>
        <div class="info">
            <nuxt-link :to="{name: 'Profile', query: {username: article.author.username}}" class="author">{{article.author.username}}</nuxt-link>
            <span class="date">{{article.createdAt | date('MMM DD, YYYY')}}</span>
        </div>
        <button class="btn btn-sm btn-outline-secondary" :class="{'active': article.author.following}" @click="articleClick(1)">
            <i class="ion-plus-round"></i>&nbsp; Follow {{article.author.username}} <span class="counter"></span>
        </button>
        &nbsp;&nbsp;
        <button class="btn btn-sm btn-outline-primary" :class="{'active': article.favorited}" @click="articleClick(2)">
            <i class="ion-heart"></i>&nbsp; Favorite Post <span class="counter">({{article.favoritesCount}})</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ArticleMeta',
    props: {
        article: {
            type: Object,
            require: true
        }
    },
    methods: {
        articleClick (type) {
            let val = {
                type: type,
                data: ''
            }
            if (type === 1) {
                // 关注作者
                val.data = this.article.author.username
            } else if (type === 2) {
                // 文章点赞
                val.data = this.article.slug
            }
            this.$emit('click', val)
        }
    }
}
</script>

<style>

</style>