<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="20">Text Input</el-col>
            <el-col :span="4">AC</el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">1</el-col>
            <el-col :span="6">2</el-col>
            <el-col :span="6">3</el-col>
            <el-col :span="6">+</el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">4</el-col>
            <el-col :span="6">5</el-col>
            <el-col :span="6">6</el-col>
            <el-col :span="6">-</el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">7</el-col>
            <el-col :span="6">8</el-col>
            <el-col :span="6">9</el-col>
            <el-col :span="6">*</el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">&nbsp;</el-col>
            <el-col :span="6">0</el-col>
            <el-col :span="6">&nbsp;</el-col>
            <el-col :span="6">/</el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Calculator'
    }
</script>

<style>
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>