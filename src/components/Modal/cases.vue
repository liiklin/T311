<style>

@import '../../css/modal/index.css';

</style>

<template>

<!-- 案例 -->
<div class="default-tab" v-show="opentype == 'cases'">
    <ul class="btns f-cb">
        <li v-for="item in ['案例详情','参考案例','相关法规']" v-text="item" :class="[index === $index ? 'active' : '']" @click="change($index)"></li>
    </ul>
    <ul class="contents">
        <li v-show="index === 0">
            <div style="max-height:300px;overflow:auto;">
                <div v-html="(modaldata.content || modaldata.template || ' ') | marked">
                </div>
            </div>
        </li>
        <li v-show="index === 1">
            <div style="max-height:300px;overflow:auto;" v-if="modaldata.hasOwnProperty('relations') && modaldata.relations.hasOwnProperty('cases') && modaldata.relations.cases.length">
                <ul v-for="case1 in modaldata.relations.cases">
                    <li>
                        <div>
                            <span v-text="case1.name"></span>
                            <span @click="showNode" class="m-showclick">+ 展开</span>
                        </div>
                        <fieldset v-html="(case1.content || ' ') | marked" v-show="false">
                        </fieldset>
                        </br>
                    </li>
                </ul>
            </div>
            <div v-else>
                暂无参考案例
            </div>
        </li>
        <li v-show="index === 2">
            <div style="max-height:300px;overflow:auto;" v-if="modaldata.hasOwnProperty('relations') && modaldata.relations.hasOwnProperty('clauses') && modaldata.relations.clauses.length">
                <ul v-for="clause in modaldata.relations.clauses">
                    <li>
                        <div>
                            <span v-text="clause.name"></span>
                            <span @click="showNode" class="m-showclick">+ 展开</span>
                        </div>
                        <fieldset v-html="(clause.content || ' ') | marked" v-show="false">
                        </fieldset>
                        </br>
                    </li>
                </ul>
            </div>
            <div v-else>
                暂无相关法规
            </div>
        </li>
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
