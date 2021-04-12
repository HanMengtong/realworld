<template>
  <div>
    <form class="card comment-form" v-if="user">
      <div class="card-block">
        <textarea class="form-control" placeholder="Write a comment..." rows="3" v-model="commentBody"></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click="addCommentFn">Post Comment</button>
      </div>
    </form>
    <div class="card" v-for="i in comments" :key="i.id">
      <div class="card-block">
        <p class="card-text">{{i.body}}</p>
      </div>
      <div class="card-footer">
        <nuxt-link :to="{ name: 'Profile', params: { username: i.author.username } }" class="comment-author">
          <img :src="i.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{ name: 'Profile', params: { username: i.author.username } }" class="comment-author">{{i.author.username}}</nuxt-link>
        <span class="date-posted">{{i.createdAt | date('MMM DD, YYYY')}}</span>
        <span class="mod-options" v-if="i.author.username === user.username">
            <i class="ion-trash-a" @click="deleteCommentFn(i)"></i>
        </span>
      </div>
    </div>
    <p v-if="comments.length === 0" class="noData">暂无评论，期待留下第一条精彩的评论</p>
  </div>
</template>

<script>
import { getComments, addComment, deleteComment } from '@/api/article'
import { mapState } from 'vuex'
export default {
    name: 'ArticleComment',
    props: {
        article: {
            type: Object,
            require: true
        }
    },
    data () {
        return {
            comments: [],
            commentBody: ''
        }
    },
    async mounted () {
        await this.getCommentsFn()
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        async getCommentsFn () {
            const { data } = await getComments(this.article.slug)
            this.comments = data.comments
        },
        async addCommentFn () {
            const params = {
                slug: this.article.slug,
                body: {
                    comment: {
                        body: this.commentBody
                    }
                }
            }
            await addComment(params)
        },
        async deleteCommentFn (data) {
            const params = {
                slug: this.article.slug,
                id: data.id
            }
            await deleteComment(params)
            this.getCommentsFn()
        }
    }
}
</script>

<style scoped>
.noData {
    text-align: center;
    font-size: 12px;
    color: #999;
    margin-top: 30px;
}
</style>
