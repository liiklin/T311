<style>

@import '../css/tree.css';

</style>

<template>

<ul class="m-tree f-fl">
    <item class="item" :model="treeData">
    </item>
</ul>

</template>

<script>

import Vue from 'vue';
import PubSub from "pubsub-js";
import _ from 'underscore';

let strVar = "";
strVar += "<li>";
strVar += "      <div";
strVar += "        v-show=\"isRoot\"";
// strVar += "        :class=\"{bold: isFolder}\"";
strVar += "        @click=\"toggle\"";
strVar += "        @dblclick=\"changeType\">";
strVar += "        <span v-if=\"isFolder\"><img v-if=\"open\"src=\"../src/img/square_remove.png\"><img v-else src=\"../src/img/square_add.png\"><\/span>";
strVar += "        {{model.name}}";
strVar += "      <\/div>";
strVar += "      <div v-if=\"isRoot\"><ul v-show=\"open\" v-if=\"isFolder\">";
strVar += "        <item";
strVar += "          class=\"item\"";
strVar += "          v-for=\"model in model.children\"";
strVar += "          :model=\"model\">";
strVar += "        <\/item>";
strVar += "      <\/ul><\/div>";
strVar += "      <div v-else><ul v-show=\"isFolder\">";
strVar += "        <item";
strVar += "          class=\"item\"";
strVar += "          v-for=\"model in model.children\"";
strVar += "          :model=\"model\">";
strVar += "        <\/item><\/div>";
strVar += "      <\/ul>";
strVar += "<\/li>";

// item 组件，用于做树形菜单
Vue.component('item', {
    template: strVar,
    props: {
        model: Object
    },
    data: function() {
        return {
            open: false
        }
    },
    computed: {
        isFolder: function() {
            return this.model.children &&
                this.model.children.length
        },
        isRoot: function() {
            // console.log(this.model.id > -1);
            return this.model.id > -1;
        }
    },
    methods: {
        toggle: function() {
            if (this.isFolder) {
                this.open = !this.open
            } else {
                _.each(document.querySelectorAll('ul.m-tree li div'), el => {
                    el.className = '';
                });
                event.target.className = 'active'; //激活当前状态
                PubSub.publish('category_id', {
                    category_id: this.model.id,
                    name: this.model.name
                });
            }
        },
        changeType: function() {
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
            let $this = this,
                path = this.$route.path.replace('/', '');
            this.$http.get(`http://61.139.87.61:50310/repos/${path}/categories`).then(response => {
                $this.treeData.children = response.data;
            });
        }
}

</script>
