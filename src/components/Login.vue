<template>
    <form>
      <input placeholder="nickname" v-model="nickname"/>
      <input placeholder="password" type="password" v-model="password"/>
      <button type="button" @click="login">登录</button>
    </form>
</template>

<script>
  export default {
    data () {
      return {
        nickname: '',
        password: ''
      }
    },
    methods: {
      async login () {
        const {nickname, password} = this
        await this.$store.dispatch('user/login', {
          type: 'User',
          data: {
            grant_type: 'password',
            nickname,
            password
          }
        })
        this.$router.push(this.$route.query.redirect)
      }
    }
  }
</script>
