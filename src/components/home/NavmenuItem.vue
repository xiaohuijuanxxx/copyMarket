<template>
  <div class="menuItem">
      <el-menu-item :index="index">{{navTitle}}</el-menu-item>
  </div>
</template>

<script>
export default {
  name:'NavmenuItem',
  props: {
      index:String,
      navTitle:String,
  },
  data () {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang='less' scoped>
    .menuItem{
        flex:1;
    }
    .el-menu-item:focus, .el-menu-item:hover{
        background-color: #e9c4d1d1;
    }
</style>
