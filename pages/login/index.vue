<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{isLogin ? 'Sign in' : 'Sign up'}}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="!isLogin" to="/login">Have an account?</nuxt-link>
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
          </p>
          <ul class="error-messages">
            <template v-for="(msgs, field) in errors">
              <li v-for="(msg, index) in msgs" :key="index">{{field}} {{msg}}</li>
            </template>
          </ul>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.username" required/>
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="email" placeholder="Email" v-model="user.email" required/>
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="user.password" required minlength="8"/>
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">{{isLogin ? 'Sign in' : 'Sign up'}}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/api/user'
const cookie = process.client ? require('js-cookie') : undefined
export default {
  middleware: 'noAuth',
  name: 'LoginIndex',
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {} // 错误信息
    }
  },
  methods: {
    async onSubmit () {
      try {
        // 提交表单登陆
        const { data } = this.isLogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        })
        // console.log(data)
        // 保存用户的登录状态
        this.$store.commit('setUser', data.user)
        // 为了防止刷新页面数据丢失，需要将数据持久化
        cookie.set('user', data.user)
        // 跳转至首页
        this.$router.push('/')
      } catch (error) {
        // console.log('请求失败', error)
        this.errors = error.response.data.errors
      }
    }
  },
  computed: {
    isLogin () {
      return this.$route.name === 'Login'
    }
  }
}
</script>

<style scoped>
</style>
