<!-- 展示页 -->
<template>
  <div>
    <el-container>
        <el-header>
            <header-bar></header-bar>
        </el-header>
        <el-main>
          <picture-change></picture-change>
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

export default {
  name:"index",
  components:{headerBar,footerBar,pictureChange},
  data () {
    return {
    }
  }
}
</script>

<style  lang="less" scoped>
    .el-header{
        padding: 0px;
        height: 250px !important;
    }
    .el-footer{
        height: auto;
        padding: 0px;
    }
    .el-main{
      min-height: calc(100vh - 200px);
      padding: 10px;
    }
    
</style>
