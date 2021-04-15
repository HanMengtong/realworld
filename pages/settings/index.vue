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
                <input class="form-control form-control-lg" type="password" placeholder="New Password" v-model="user.password">
              </fieldset>
              <div class="clearfix">
                <button class="btn btn-lg btn-primary pull-xs-right" type="button" :disabled="btnDisabled" @click="updateClick">
                  Update Settings
                </button>
              </div>
              <hr>
              <button class="btn btn-outline-danger" @click="logout">
                Or click here to logout.
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
const cookie = process.client ? require('js-cookie') : undefined
export default {
  middleware: 'auth',
  name: 'Settings',
  async asyncData () {
    const { data } = await getUser()
    const { user } = data
    return {
      user
    }
  },
  data () {
    return {
      btnDisabled: false
    }
  },
  methods: {
    async updateClick () {
      this.btnDisabled = true
      const user = {user: this.user}
      const { data } = await updateUser(user)
      if (data.user) {
        // 将修改的数据更新到store中
        this.$store.commit('setUser', data.user)
        // 为了防止刷新页面数据丢失，需要将数据持久化
        cookie.set('user', data.user)
        // 跳转至首页
        this.$router.push({name: 'Profile', params: {username: data.user.username}})
      }
    },
    logout () {
      // 删除用户数据
      this.$store.commit('removeUser')
      cookie.remove('user')
      // 跳转至首页
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.clearfix:after {
  display: block;
  clear: both;
  content: '';
}
</style>