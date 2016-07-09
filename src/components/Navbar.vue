<template>
  <ul class="m-navbar">
    <li v-link="{ path: '/questions', activeClass: 'active' }"><a>问题</a></li>
    <li v-link="{ path: '/cases', activeClass: 'active' }"><a>案例</a></li>
    <li v-link="{ path: '/sources', activeClass: 'active' }"><a>法律</a></li>
    <li v-link="{ path: '/contracts', activeClass: 'active' }"><a>合同</a></li>
    <li v-link="{ path: '/literatures', activeClass: 'active' }"><a>文献</a></li>
  </ul>
</template>

<script>
  export default {
  }
</script>

<style>
  @import '../css/navbar.css';
</style>
