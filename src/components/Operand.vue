<template>
    <el-button>{{ value }}</el-button>
</template>

<script>
    export default {
        name: 'Operand',
        props: [
            'value'
        ]
    }
</script>