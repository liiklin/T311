<style>

@import '../../css/modal/index.css';

</style>

<template>

<layout :modaldata.sync="modaldata" :close.sync="close">
    <!-- 问题 -->
    <Questions :modaldata.sync="modaldata" :opentype.sync="opentype">
    </Questions>
    <!-- 案例 -->
    <Cases :modaldata.sync="modaldata" :opentype.sync="opentype">
    </Cases>
    <!-- 法律 -->
    <Laws :modaldata.sync="modaldata" :opentype.sync="opentype">
    </Laws>
    <!-- 合同 -->
    <Contracts :modaldata.sync="modaldata" :opentype.sync="opentype">
    </Contracts>
    <!-- 文献 -->
    <Literatures :modaldata.sync="modaldata" :opentype.sync="opentype">
    </Literatures>
</layout>

</template>

<script>

import Layout from './layout.vue';
import Questions from './questions.vue';
import Cases from './cases.vue';
import Laws from './laws.vue';
import Contracts from './contracts.vue';
import Literatures from './literatures.vue';

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
    components: {
        Layout,
        Questions,
        Cases,
        Laws,
        Contracts,
        Literatures
    }
}

</script>
