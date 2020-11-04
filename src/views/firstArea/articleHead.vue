<template>
    <el-tabs type="border-card" @tab-click="handleClick" v-model="activeName" ref="navTabs">
        <el-tab-pane name="用户管理">
            <span slot="label" @mouseover="mouseover">用户管理</span>
            <ul>
                <li class="textOver" v-for="item in titleList" :key="item.id"><i class="spot"></i>{{item.title}}</li>
            </ul>
        </el-tab-pane>
        <el-tab-pane name="配置管理" label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane name="角色管理" label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane name="定时任务补偿" label="定时任务补偿">定时任务补偿</el-tab-pane>
        <el-tab-pane name="更多+" label="更多+">更多+</el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    name:'articleHead',
    data() {
        return {
            activeName:"用户管理",
            titleList:[
                {id:0,title:"习近平：关于《中共中央关于制定国民经济和社会发展第十四个五年规划和二〇三五年远景目标的建议》的说明"},
                {id:1,title:"中共中央关于制定国民经济和社会发展第十四个五年规划和二〇三五年远景目标的建议"},
                {id:2,title:"解读《中共中央关于制定国民经济和社会发展第十四个五年规划和二〇三五年远景目标的建议》"},
                {id:3,title:"《中共中央关于制定国民经济和社会发展第十四个五年规划和二〇三五年远景目标的建议》单行本出版"},
                {id:4,title:"习近平：切实做好第七次全国人口普查工作"},
            ]
        };
    },
    created() {

    },
    mounted() {
        
    },
    methods: {
        handleClick(tab, event) {
            if(this.activeName ==='用户管理'){}
            if(this.activeName === '配置管理'){}
        },
        mouseover(tab, event){
            console.log("aaa");
            console.log(tab);
            console.log(event);
        }
    }
};
</script>

<style scoped lang="less">
    .el-tabs--border-card{
        background: #fae5e5;
    }

    /deep/.el-tabs__content{
        padding: 5px;
    }

    /deep/.el-tabs__item.is-top.is-active{
        background-color: #fae5e5;
    }

    /deep/.el-tabs__item.is-top:last-child{
        position: absolute;
        right: -45%;
    }

    .pStyle{
        padding: 10px;
        margin: 0px;
        position: absolute;
    }

    .textOver{
        padding: 9px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
        white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
        border-bottom: 1px dashed #ccc;//下边框用虚线显示
    }

    .spot{
        position: absolute;
        width: 5px;
        height: 5px;
        top: 45%;
        left: 0%;
        background-color: black;
    }
</style>
