<template>
    <el-container>
        <el-aside>
            <el-carousel>
                <el-carousel-item v-for="item in pictureItem" :key="item.id">
                    <a :href="item.src" target="_target">
                        <img class="asideImg" :src="item.src">
                        <p class="pictureP">{{item.title}}</p>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </el-aside>
        <el-main>
            <article-head></article-head>
        </el-main>
    </el-container>
</template>

<script>
import articleHead from 'views/firstArea/articleHead'

export default {
  name:'firstArea',
  components: {articleHead},
  data () {
    return {
        pictureItem:[
            {id:0,title:"活动一活动一活动一活动一活动一活动一",src:"http://image.chinacoop.gov.cn/data/1/images/2020/1022/16033734457111000_1280x723.jpg"},
            {id:1,title:"活动二活动二活动二活动二活动二活动二",src:"http://image.chinacoop.gov.cn/data/1/images/2020/1019/16030921791941432_1280x723.jpg"},
            {id:2,title:"活动三活动三活动三活动三活动三活动三",src:"http://image.chinacoop.gov.cn/data/1/images/2020/0930/16014590819131130_1280x722.jpg"},
            {id:3,title:"活动四活动四活动四活动四活动四活动四",src:"http://image.chinacoop.gov.cn/data/1/images/2020/0925/16010311930521000_1280x722.jpg"},
            {id:4,title:"活动五活动五活动五活动五活动五活动五",src:"http://image.chinacoop.gov.cn/data/1/images/2020/0926/16010854628241000_700x400.jpg"},
        ]
    }
  },
  methods: {

  },
}
</script>

<style lang='less' scoped>
    .el-container{
        height: 300px;
    }

    .el-main{
        padding: 0px;
        overflow: hidden;
    }

    .el-aside{
        width: 50% !important;
    }

    .asideImg{
        width: 100%;
        height: 100%;
    }

    /deep/.el-carousel__indicators--horizontal{
        left: 83%;
    }
    
    /deep/.el-carousel__button{
      width: 10px;
      border-radius: 50%;
      height: 10px;
    }

    /deep/.el-carousel__button :active{
      width: 30px;
      border-radius: 50%;
      height: 10px;
    }

    /deep/.el-tabs--border-card>.el-tabs__header{
        background-color: #f3bfca;
    }

    /deep/.el-tabs--border-card>.el-tabs__header .el-tabs__item{
        color: #d892b2;
    }

    /deep/.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{
        color: #dc4597;
    }

    .pictureP{
        padding: 10px;
        width: 100%;
        margin: 0;
        background-color: #00000073;
        position: absolute;
        top: 85%;
        color: white;
        text-align: left;
    }
</style>
