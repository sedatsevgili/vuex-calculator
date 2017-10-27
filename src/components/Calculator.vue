<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="20">
                <el-input placeholder="0"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="danger">AC</el-button>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6"><Operand value="1"></Operand></el-col>
            <el-col :span="6"><Operand value="2"></Operand></el-col>
            <el-col :span="6"><Operand value="3"></Operand></el-col>
            <el-col :span="6"><Operator value="+"></Operator></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6"><Operand value="4"></Operand></el-col>
            <el-col :span="6"><Operand value="5"></Operand></el-col>
            <el-col :span="6"><Operand value="6"></Operand></el-col>
            <el-col :span="6"><Operator value="-"></Operator></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6"><Operand value="7"></Operand></el-col>
            <el-col :span="6"><Operand value="8"></Operand></el-col>
            <el-col :span="6"><Operand value="9"></Operand></el-col>
            <el-col :span="6"><Operator value="X"></Operator></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">&nbsp;</el-col>
            <el-col :span="6"><Operand value="0"></Operand></el-col>
            <el-col :span="6">&nbsp;</el-col>
            <el-col :span="6"><Operator value="/"></Operator></el-col>
        </el-row>
    </div>
</template>

<script>
import Operator from './Operator'
import Operand from './Operand'

    export default {
        name: 'Calculator',
        components: {
            Operator,
            Operand
        }
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