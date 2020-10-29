<!-- 展示页 -->
<template>
  <div>
    <el-container>
        <el-header>
            <header-bar></header-bar>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import headerBar from 'components/home/Header';
import footerBar from 'components/home/Header';

export default {
  name:"index",
  components:{headerBar,footerBar},
  data () {
    return {
    }
  }
}
</script>

<style  lang="less" scoped>
    .el-header{
        padding: 0px;
    }
</style>
