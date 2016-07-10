<style>

@import '../css/list.css';

</style>

<template>

<div>
    <div class="m-list f-fr">
        <fieldset v-for="item in data">
            <legend>
                {{ item.title + item.list.length + '个' }}
            </legend>
            <a v-for="data in item.list" @click="open(data.id)">
                <i class="u-icon" :class="[iconClass]"></i>
                <span v-text="data.title"></span>
            </a>
        </fieldset>
    </div>
    <m-default :close.sync="close" :modaldata.sync="modaldata" :opentype.sync="opentype"></m-default>
    <!-- <m-not-logged :close.sync="nloginclose"></m-not-logged> -->
</div>

</template>

<script>

import mDefault from './Modal/default.vue';
import mNotLogged from './Modal/notlogged.vue';
import PubSub from "pubsub-js";
import _ from 'underscore';

const iconClasses = {
    '/questions': 'u-icon-question',
    '/cases': 'u-icon-question',
    '/sources': 'u-icon-word',
    '/contracts': 'u-icon-word',
    '/literatures': 'u-icon-word',
}

export default {
    data() {
            return {
                opentype: '',
                modaldata: {},
                data: [],
                close: true,
                nloginclose: true,
                iconClass: ''
            }
        },
        ready() {
            let $this = this,
                effectLevels = [],
                path = this.$route.path.replace('/', '');
            PubSub.subscribe('effectLevels', (msg, data) => {
                effectLevels = data.effectLevels;
            });
            PubSub.subscribe('category_id', (msg, data) => {
                let url = `http://61.139.87.61:8880/categories/${data.category_id}/bases/${path}`;
                $this.$http.get(url)
                    .then(response => {
                        if (path == 'sources') { //法律
                            let gp = _.groupBy(response.data.items, (val) => {
                                return val.effectLevel.name;
                            });

                            let data = _.map(gp, (val, key) => {
                                let tmp = _.map(val, (v, k) => {
                                    return {
                                        id: v.id,
                                        title: v.name,
                                        url: '###'
                                    }
                                });


                                return {
                                    title: key,
                                    list: tmp
                                }
                            });
                            // console.log(_.isEmpty(data));
                            data = _.isEmpty(data) ? [{
                                title: response.data.category.name,
                                list: []
                            }] : data;
                            $this.data = data;
                        } else {
                            let data = _.map(response.data.items, (val) => {
                                return {
                                    id: val.id,
                                    title: val.name,
                                    url: '###'
                                }
                            });
                            // console.log(JSON.stringify(data));
                            $this.data = [{
                                title: response.data.category.name,
                                list: data
                            }];
                        }
                    });
            });
        },
        computed: {
            iconClass() {
                return iconClasses[this.$route.path]
            }
        },
        methods: {
            open(id) {
                let $this = this,
                    path = this.$route.path.replace('/', ''),
                    url = `http://61.139.87.61:8880/${path}/${id}`;
                // console.log(url);
                this.$http.get(url).then(response => {
                    $this.close = false;
                    $this.opentype = path;
                    // console.log(JSON.stringify(response.data));
                    $this.modaldata = response.data;
                });
            }
        },
        components: {
            mDefault,
            mNotLogged
        }
}

</script>
