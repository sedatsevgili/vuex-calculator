<template>
    <el-button type="primary" @click.native="clicked">{{ value }}</el-button>
</template>

<script>
    export default {
        name: 'Operator',
        props: ['value', 'action'],
        methods: {
            clicked() {
                this.$emit('operate', this.action)
            }
        }
    }
</script>