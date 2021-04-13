<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input class="form-control" type="text" placeholder="URL of profile picture" v-model="user.image">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.username">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you" v-model="user.bio"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="user.email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="New Password" v-model="user.password" required>
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" @click="updateClick">
                Update Settings
              </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { getUser, updateUser } from '@/api/user'
export default {
  middleware: 'auth',
  name: 'Settings',
  async asyncData({ params }) {
    const { data } = await getUser()
    const { user } = data
    user.password = ''
    return {
      user
    }
  },
  methods: {
    async updateClick () {
      const { data } = await updateUser(this.user)
      // 保存用户的登录状态
      this.$store.commit('setUser', data.user)
      // 为了防止刷新页面数据丢失，需要将数据持久化
      cookie.set('user', data.user)
      this.$router.push({name: 'Profile', params: {username: data.username}})
    }
  }
}
</script>

<style scoped>

</style>