<template>
  <layout :title="title" :close.sync="close" :download="download">
    <div>
      <img src="../../img/Exclamation_64px_567431_easyicon.net.png" alt="" class="f-ib no-logged-img">
      <div class="f-ib no-logged-content">
        <p>本案例需要注册会员才能查看，如果您还不是会员，现在就可以</p>
        <a href="###" class="go-registered">免费注册</a>
      </div>
    </div>
    <p class="has-registered">如果您已经注册，请<a href="###">登陆</a>后使用</p>
  </layout>
</template>

<script>
  import Layout from './layout.vue'

  export default {
    props: {
      close: Boolean
    },
    data() {
      return {
        title: '测试',
        download: false
      }
    },
    components: {
      Layout
    }
  }
</script>

<style>
  @import '../../css/modal/index.css';
</style>
