<style>

@import '../../css/modal/index.css';

</style>

<template>

<!-- 案例 -->
<div class="default-tab" v-show="opentype == 'contracts'">
  <ul class="contents">
      <div style="max-height:300px;overflow:auto;">
          <div v-html="(modaldata.content || ' ') | marked">
          </div>
      </div>
  </ul>
</div>

</template>

<script>

import marked from 'marked';

export default {
    props: {
        opentype: String,
        modaldata: Object
    },
    data() {
        return {
            index: 0
        }
    },
    filters: {
        marked: marked
    },
    methods: {
        change(index) {
                this.index = index
            },
            showNode() {
                let el = event.srcElement ? event.srcElement : event.target,
                    fieldset = el.parentNode.parentNode.childNodes[3];
                if (fieldset.style.display == 'block') {
                    fieldset.style.display = 'none';
                    el.innerHTML = '+ 展开';
                } else {
                    fieldset.style.display = 'block';
                    el.innerHTML = '- 收起';
                }
            }
    }
}

</script>
