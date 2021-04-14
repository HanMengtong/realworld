<template>
    <div class="profile-page">
        <div class="user-info">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-10 offset-md-1">
                        <img :src="profile.image" class="user-img" />
                        <h4>{{profile.username}}</h4>
                        <p>{{profile.bio}}</p>
                        <button v-if="profile.username !== user.username" type="button" class="btn btn-sm btn-outline-secondary action-btn" :class="{'active': profile.following}" @click="followAuthor"><i class="ion-plus-round"></i>&nbsp;Follow {{profile.username}}</button>
                        <nuxt-link v-if="profile.username === user.username" class="btn btn-sm btn-outline-secondary action-btn" :to="{name: 'Settings', params: {username: profile.username}}">
                            <i class="ion-gear-a"></i> Edit Profile Settings
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-10 offset-md-1">
                    <div class="articles-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li class="nav-item">
                                <nuxt-link class="nav-link" :class="{'active': JSON.stringify(tab) === 'undefined'}" :to="{name: 'Profile', params: {username: profile.username}}" exact>My Articles</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link class="nav-link" :class="{'active': JSON.stringify(tab) === 'favorited'}" :to="{name: 'Profile', params: {username: profile.username, tab: 'favorited'}}" exact>Favorited Articles</nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="article-preview" v-for="i in articles" :key="i.slug">
                        <div class="article-meta">
                            <nuxt-link :to="{ name: 'Profile', params: { username: i.author.username } }">
                                <img :src="i.author.image" />
                            </nuxt-link>
                            <div class="info">
                                <nuxt-link :to="{ name: 'Profile', params: { username: i.author.username } }" class="author">{{i.author.username}}</nuxt-link>
                                <span class="date">{{i.createdAt | date('MMM DD, YYYY')}}</span>
                            </div>
                            <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{'active': i.favorited}" type="button"><i class="ion-heart" :disabled="i.favoriteDisabled"></i> {{i.favoritesCount}}</button>
                        </div>
                        <nuxt-link :to="{ name: 'Article', params: { slug: i.slug } }" class="preview-link">
                            <h1>{{i.title}}</h1>
                            <p>{{i.description}}</p>
                            <span>Read more...</span>
                            <ul class="tag-list">
                                <li class="tag-default tag-pill tag-outline" v-for="(i, index) in i.tagList" :key="index">{{i}}</li>
                            </ul>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getProfile, followUser, unFollowUser } from '@/api/profile'
import { getArticles } from '@/api/article'
import { mapState } from 'vuex'
export default {
    middleware: 'auth',
    name: 'UserProfile',
    async asyncData({params}) {
        console.log(params)
        const page = parseInt(params.page || 1)
        const limit = 10
        const { username, tab } = params
        console.log(username, JSON.stringify(tab))
        const [ articleRes, profileRes ] = await Promise.all([
            getArticles({
                limit: limit,
                offset: (page - 1) * limit,
                author: JSON.stringify(tab) === 'undefined' ? '' : username,
                favorited: JSON.stringify(tab) === 'favorited' ? username : ''
            }),
            getProfile(params.username)
        ])
        const { articles, articlesCount } = articleRes.data
        const { profile } = profileRes.data

        articles.forEach(article => {
            article.favoriteDisabled = false
        })

        return {
            articles,
            articlesCount,
            limit,
            page,
            tab,
            profile
        }
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        async followAuthor () {
            const username = this.profile.username
            if (this.profile.following) {
                await unFollowUser(username)
            } else {
                await followUser(username)
            }
            this.profile.following = !this.profile.following
        }
    }
}
</script>

<style scoped>

</style>