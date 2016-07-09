<style>

@import '../../css/modal/index.css';

</style>

<template>

<layout :modaldata.sync="modaldata" :close.sync="close">
    <!-- 问题 -->
    <div>
        <div class="default-tab" v-show="opentype == 'questions'">
            <ul class="btns f-cb">
                <li v-for="item in ['问题解答','参考案例','相关法规']" v-text="item" :class="[index === $index ? 'active' : '']" @click="change($index)"></li>
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
                                <div v-show="false">
                                    <fieldset v-html="(case1.content || ' ') | marked">
                                    </fieldset>
                                </div>
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
        <!-- 法律法条 -->
        <div class="default-tab" v-show="opentype == 'sources'">
            <ul class="btns f-cb">
                <li v-for="item in ['正文','相关法条','相关问题','相关案例']" v-text="item" :class="[index === $index ? 'active' : '']" @click="change($index)"></li>
            </ul>
            <ul class="contents">
                <li v-show="index === 0">
                    <div style="max-height:300px;overflow:auto;">
                        <div v-html="(modaldata.text || modaldata.template || ' ') | marked">
                        </div>
                    </div>
                </li>
                <li v-show="index === 1">
                    <div style="max-height:300px;overflow:auto;" v-if="modaldata.hasOwnProperty('clauses') && modaldata.clauses.length">
                        <ul v-for="clause in modaldata.clauses">
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
                        暂无相关法条
                    </div>
                </li>
                <li v-show="index === 2">
                    <div style="max-height:300px;overflow:auto;" v-if="modaldata.hasOwnProperty('questions') && modaldata.questions.length">
                        <ul v-for="question in modaldata.questions">
                            <li>
                                <div>
                                    <span v-text="question.name"></span>
                                    <span @click="showNode" class="m-showclick">+ 展开</span>
                                </div>
                                <fieldset v-html="(question.content || ' ') | marked" v-show="false">
                                </fieldset>
                                </br>
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        暂无相关问题
                    </div>
                </li>
                <li v-show="index === 3">
                    <div style="max-height:300px;overflow:auto;" v-if="modaldata.hasOwnProperty('cases') && modaldata.cases.length">
                        <ul v-for="case1 in modaldata.cases">
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
                        暂无相关案例
                    </div>
                </li>
            </ul>
        </div>

        <!-- 合同文献 -->
        <div class="default-tab" v-show="opentype == 'contracts' || opentype == 'literatures'">
            <ul class="contents">
                <div style="max-height:300px;overflow:auto;">
                    <div v-html="(modaldata.content || ' ') | marked">
                    </div>
                </div>
            </ul>
        </div>
    </div>
    </div>
</layout>

</template>

<script>

import marked from 'marked';
import Layout from './layout.vue';

export default {
    props: {
        close: Boolean,
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
    },
    components: {
        Layout
    }
}

</script>
