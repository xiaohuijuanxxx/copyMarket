<!-- 菜单组件 -->
<template>
  <div>
      <el-menu class="menu"
            :default-active="activeIndex"
            mode="horizontal"
            @select="handleSelect"
            text-color="#d78ca4"
            active-text-color="red"
          >
            <slot></slot>
        </el-menu>
  </div>
</template>

<script>
export default {
  name:'Navmenu',
  data () {
    return {
        activeIndex: '',
    }
  },
  methods: {
      handleSelect(key, keyPath) {
       /*  console.log(key, keyPath); */
      }
  }
}
</script>

<style  lang="less" scoped>
    .menu{
      display: flex;
      background-color:pink;
    }
    .el-menu.el-menu--horizontal {
        border-bottom: solid 1px #eaafb9;
    }
</style>
