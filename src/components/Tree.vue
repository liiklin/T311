<template>
  <ul class="m-tree f-fl">
      <item
        class="item"
        :model="treeData"
        >
      </item>
  </ul>
</template>

<script>
  import Vue from 'vue';
  import PubSub from "pubsub-js";
  import _ from 'underscore';

  let strVar="";
  strVar += "<li>";
  strVar += "      <div";
  strVar += "        :class=\"{bold: isFolder}\"";
  strVar += "        @click=\"toggle\"";
  strVar += "        @dblclick=\"changeType\">";
  strVar += "        <span v-if=\"isFolder\"><img v-if=\"open\"src=\"../src/img/square_remove.png\"><img v-else src=\"../src/img/square_add.png\"><\/span>";
  strVar += "        {{model.name}}";
  strVar += "      <\/div>";
  strVar += "      <ul v-show=\"open\" v-if=\"isFolder\">";
  strVar += "        <item";
  strVar += "          class=\"item\"";
  strVar += "          v-for=\"model in model.children\"";
  strVar += "          :model=\"model\">";
  strVar += "        <\/item>";
  strVar += "      <\/ul>";
  strVar += "<\/li>";

  // item 组件，用于做树形菜单
  Vue.component('item', {
    template: strVar,
    props: {
      model: Object
    },
    data: function () {
      return {
        open: false
      }
    },
    computed: {
      isFolder: function () {
        return this.model.children &&
          this.model.children.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }else {
          _.each(document.querySelectorAll('ul.m-tree li div'),el => {
            el.className = '';
          });
          event.target.className = 'active';//激活当前状态
          PubSub.publish('category_id', {
            category_id: this.model.id
          });
        }
      },
      changeType: function () {
        if (!this.isFolder) {
          Vue.set(this.model, 'children', [])
          this.open = true
        }
      }
    }
  })

  export default {
    data() {
      return {
        treeData: {
              "id": -1,
              "parent_id": -1,
              "name": "分类",
              "children": []
            }
      }
    },
    ready() {
      // console.log(`${this.treeData}`);
      let $this = this;
      this.$http.get(`http://61.139.87.61:8880/categories`).then(response => {
        // console.log(JSON.stringify(JSON.stringify($this.treeData)+new Date().getTime()));
        let data = {
              "id": -1,
              "parent_id": -1,
              "name": "分类",
              "children": response.data
            };
        $this.treeData = data;
      });
    }
  }
</script>

<style>
  @import '../css/tree.css';
</style>
