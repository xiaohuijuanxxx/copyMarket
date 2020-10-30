<!-- 菜单组件 -->
<template>
  <div>
      <el-menu class="menu"
            :default-active="activeIndex"
            mode="horizontal"
            @select="handleSelect"
            background-color="pink"
            text-color="#d78ca4"
            active-text-color="red"
          >
                <el-menu-item class="menuItem" :index="index">{{navTitle}}</el-menu-item>
        </el-menu>
  </div>
</template>

<script>
export default {
  name:'Navmenu',
  props: {
      index:String,
      navTitle:String,
  },
  data () {
    return {
        activeIndex: '1',
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style  lang="less" scoped>
    .menu{
        display: flex;
    }
    .menuItem{
        flex:1;
    }
</style>
