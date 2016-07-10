<template>
  <div class="m-search f-fr">
    <div class="search-box">
      <img src="../img/zoom_16px_1140621_easyicon.net.png" alt="">
      <input type="text" @keyup.enter="search" v-model="value">
    </div>
    <div class="search-submit" @click="search">搜索</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      search() {
        if (this.value !== '') {
          this.$router.go({
            path: '/search',
            query: {
              keyword: this.value
            }
          })
          // this.value = '';
        } else {
          alert('请输入查询信息！')
        }
      }
    },
    ready(){
      this.value = this.$route.query.keyword || '';
    }
  }
</script>

<style>
  @import '../css/search.css';
</style>
