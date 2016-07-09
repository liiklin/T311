<template>
  <div class="m-modal" v-show="!close">
    <h1 class="default-title f-cb">
      {{ modaldata.name }}
      <span @click="closeFn">关闭</span>
      <span v-if="download" @click="downloadfile">下载</span>
    </h1>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      modaldata:Object,
      close: Boolean,
      download: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      closeFn() {
        this.close = true
      },
      downloadfile(){
        let basePath = 'http://61.139.87.61:8880',
            type = this.$route.path.replace('/',''),
            downloadUrl = `${basePath}/${type}/${this.modaldata.id}/download`;
        window.open(downloadUrl);
      }
    }
  }
</script>

<style>
  @import '../../css/modal/index.css';
</style>
