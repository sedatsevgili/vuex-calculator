<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="20">Result: {{ result }}</el-col>
            <el-col :span="4">
                <el-button type="warning" @click.native="calculate">=</el-button>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="20">
                <el-input :value="visibleValue" @keyup.native="onKeyup"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="danger" @click.native="clear" >AC</el-button>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6"><Operand value="1"></Operand></el-col>
            <el-col :span="6"><Operand value="2"></Operand></el-col>
            <el-col :span="6"><Operand value="3"></Operand></el-col>
            <el-col :span="6"><Operator value="+" action="add" v-on:operate="operate"></Operator></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6"><Operand value="4"></Operand></el-col>
            <el-col :span="6"><Operand value="5"></Operand></el-col>
            <el-col :span="6"><Operand value="6"></Operand></el-col>
            <el-col :span="6"><Operator value="-" action="subtract" v-on:operate="operate"></Operator></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6"><Operand value="7"></Operand></el-col>
            <el-col :span="6"><Operand value="8"></Operand></el-col>
            <el-col :span="6"><Operand value="9"></Operand></el-col>
            <el-col :span="6"><Operator value="X" action="multiply" v-on:operate="operate"></Operator></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">&nbsp;</el-col>
            <el-col :span="6"><Operand value="0"></Operand></el-col>
            <el-col :span="6">&nbsp;</el-col>
            <el-col :span="6"><Operator value="/" action="divide" v-on:operate="operate"></Operator></el-col>
        </el-row>
    </div>
</template>

<script>
import Operator from './Operator'
import Operand from './Operand'
import { mapState, mapActions } from 'vuex'

    export default {
        name: 'Calculator',
        components: {
            Operator,
            Operand
        },
        computed: mapState([
            'visibleValue',
            'result'
        ]),
        methods: {
            ...mapActions([
                'clear',
                'calculate',
            ]),
            operate(action) {
                this.$store.dispatch(action)
            },
            onKeyup(event) {
                let value = event.target.value
                this.$store.dispatch('setOperandValue', value)
            }
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