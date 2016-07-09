<template>
  <header class="g-h">
    江湖健法
    <a href="###" class="login">登陆</a>
  </header>
  <div class="f-cb">
    <breadcrumb></breadcrumb>
    <search></search>
  </div>
</template>

<script>
  import Breadcrumb from './Breadcrumb.vue'
  import Search from './Search.vue'

  export default {
    components: {
      Breadcrumb,
      Search
    }
  }
</script>

<style>
  @import '../css/header.css';
</style>
