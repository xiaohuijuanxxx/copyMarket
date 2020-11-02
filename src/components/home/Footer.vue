<!-- 公共底部 -->
<template>
  <div>
    <div>
      <nav-menu>
        <nav-menu-item index="1" navTitle="联系我们"></nav-menu-item>
        <nav-menu-item index="2" navTitle="网站留言"></nav-menu-item>
        <nav-menu-item index="3" navTitle="版权声明"></nav-menu-item>
        <nav-menu-item index="4" navTitle="网站承诺"></nav-menu-item>
      </nav-menu>
    </div>
    <div class="logostyle">
      <el-row>
        <p class="fontstyle">主办：中华全国供销合作总社　承办：中华全国供销合作总社信息中心</p>
        <p class="fontstyle">京公网安备 11010602060131号　京ICP备09054041号信息网络传播视听节目许可证 (AVSP)0111623</p>
        <p class="fontstyle">提供信息请发至gxwtg@126.com</p>
      </el-row>
    </div>
  </div>
</template>

<script>
import navMenu from 'components/home/Navmenu'
import navMenuItem from 'components/home/NavmenuItem'
export default {
  name:'Footer',
  components: {navMenu,navMenuItem},
  data () {
    return {
    }
  }
}
</script>

<style  lang="less" scoped>
  .logostyle{
        height: 150px;
        background-image: url(../../assets/home/bottom.jpg);
    }
    .fontstyle{
      font-size: 15px;
      margin: 10px;
    }
</style>
