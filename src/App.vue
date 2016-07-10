<template>
  <div id="app" class="g-c">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Container from './components/Container.vue';
  import PubSub from "pubsub-js";

  export default {
    replace: false,
    components: {
      vHeader: Header,
      vContainer: Container
    },
    ready:function(){
      this.$http.get(`http://61.139.87.61:8880/effectLevels`)
      .then(response => {
        PubSub.publish('effectLevels', {
          effectLevels: response.data
        });
      });
    }
  }
</script>

<style>
  @import 'css/lib/reset.css';
  @import 'css/lib/function.css';
  @import 'css/index.css';
</style>
