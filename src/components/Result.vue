<style>

@import '../css/result.css';

</style>

<template>

<div class="m-search-result">
    <h1>关键词：<span class="keyword" v-text="$route.query.keyword"></span></h1>
    <ul class="result-list">
        <resultitem :model="searchData"
          :close.sync="close"
          :modaldata.sync="modaldata"
          :opentype.sync="opentype">
        </resultitem>
    </ul>
    <result-default :close.sync="close" :modaldata.sync="modaldata" :opentype.sync="opentype"></result-default>
</div>

</template>

<script>

import Vue from 'vue';
import resultDefault from './Modal/default.vue';

let strVar = '';
strVar += '<li v-for=\"item in model.items\">';
strVar += '<i class="u-icon u-icon-24 u-icon-question"></i>';
strVar += '<a @click="open(item.base,item.base_id)">{{item.name}}</a>';
strVar += '</li>';

const iconClasses = {
    '/questions': 'u-icon-question',
    '/cases': 'u-icon-question',
    '/sources': 'u-icon-word',
    '/clauses': 'u-icon-word',
    '/contracts': 'u-icon-word',
    '/literatures': 'u-icon-word',
}

// item 组件，用于实现查询结果
Vue.component('resultitem', {
    template: strVar,
    props: {
        model: Object,
        modaldata: Object,
        close: Boolean,
        opentype: String

    },
    data: function() {
        return {}
    },
    computed: {},
    methods: {
        open: function(base, base_id) {
            let $this = this;
            // base = base == 'clauses'?'sources':base;
            this.$http.get(`http://61.139.87.61:8880/${base}/${base_id}`)
                .then(response => {
                    // console.log(JSON.stringify(response.data));
                    $this.close = false;
                    $this.opentype = base;
                    $this.modaldata = response.data;
                }).catch(e=>{
                  console.error(JSON.stringify(e));
                  alert("无法获取当前数据异常");
                });
        }
    }
})

export default {
    data() {
            return {
                searchData: {},
                opentype: '',
                close: true,
                modaldata: {}
            }
        },
        components: {
            resultDefault
        },
        route: {
            data: function(transition) {
                this.$http.get(`http://61.139.87.61:8880/conditions?keyword=${this.$route.query.keyword}`)
                    .then(response => {
                        // console.log(JSON.stringify(response.data));
                        this.searchData = response.data
                    });
            }
        }
}

</script>
