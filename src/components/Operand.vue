<template>
    <el-button @click.native="appendNumber(value)">{{ value }}</el-button>
</template>

<script>
import {mapActions} from 'vuex'

    export default {
        name: 'Operand',
        props: [
            'value'
        ],
        methods: mapActions([
            'appendNumber'
        ])
    }
</script>