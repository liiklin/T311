<style>

@import '../../css/modal/index.css';

</style>

<template>

<div class="m-modal" v-show="!close">
    <h1 class="default-title f-cb">
      {{ modaldata.title }}
      <span @click="closeFn">关闭</span>
      <span v-if="download == 'contracts'" @click="downloadfile">下载</span>
    </h1>
    <slot></slot>
</div>

</template>

<script>

export default {
    props: {
        modaldata: Object,
        close: Boolean
    },
    computed: {
        download() {
            return this.$route.path.replace('/', '');
        }
    },
    methods: {
        closeFn() {
                this.close = true
            },
            downloadfile() {
                let basePath = 'http://61.139.87.61:50310/repos',
                    type = this.$route.path.replace('/', ''),
                    downloadUrl = `${basePath}/${type}/documents/${this.modaldata.id}/download`;
                window.open(downloadUrl);
            }
    }
}

</script>
