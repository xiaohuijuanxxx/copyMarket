<!-- 展示页 -->
<template>
  <div>
    <el-container>
        <el-header>
            <header-bar></header-bar>
        </el-header>
        <el-main class="mainContion" :style="{minHeight:height+'px'}">
          <picture-change></picture-change>
          <new-title></new-title>
          <first-area></first-area>
        </el-main>
        <el-footer>
          <footer-bar></footer-bar>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
import headerBar from 'components/home/Header';
import footerBar from 'components/home/Footer';
import pictureChange from 'components/home/PictureChange';
import newTitle from 'components/home/NewTitle';
import firstArea from 'views/firstArea/firstArea';

export default {
  name:"index",
  components:{headerBar,footerBar,pictureChange,newTitle,firstArea},
  data () {
    return {
      height:'0',
    }
  },
  mounted(){
    //动态设置内容高度，让footer始终居底部,header的高度是250
    this.height = document.documentElement.clientHeight-250;
    //监听浏览器窗口变化
    window.onresize = ()=>{this.height = document.documentElement.clientHeight-250}
  }
}
</script>

<style  lang="less" scoped>
    .el-header{
        padding: 0px;
        height: 250px !important;
    }
    .el-footer{
        height: 215px !important;
        padding: 0px;
    }
    .el-main{
      min-height: calc(100vh - 300px);
      padding: 10px;
    }
    .mainContion{
      width: 80%;
      margin-left: 10%;
    }
    
</style>
