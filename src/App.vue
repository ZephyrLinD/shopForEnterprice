<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.getUser(),
    this.getCartCount()
  },
  methods: {
    getUser() {
      this.axios.get('/user').then(() => {
        // todo: 保存到VueX里面
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then(() => {
        // todo: 保存到VueX里面
      })
    }
  }
};
</script>

<style lang="scss">
  @import './assets/scss/reset.scss';
  @import './assets/scss/config.scss';
  @import './assets/scss/mixin.scss';
  @import './assets/scss/modal.scss';
  @import './assets/scss/button.scss';
  
</style>
