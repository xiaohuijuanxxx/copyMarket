<!-- 公共头部 -->
<template>
  <div>
      <div class="headerTop">
          <el-row>
              <el-col :span="8">
                  <span class="titlestyle">中华全国供销合作总社主办</span>
                </el-col>
              <el-col :span="16">
                  <el-form 
                    :inline="true"
                    :model="userform"
                    ref='userform'
                    >
                        <el-form-item label="用户名">
                            <el-input v-model="userform.username" placeholder="请输入用户名" size="small" prefix-icon="el-icon-user-solid"></el-input>
                        </el-form-item>
                         <el-form-item label="密码">
                             <el-input v-model="userform.password" placeholder="请输入密码" size="small" prefix-icon="el-icon-lock"></el-input>
                        </el-form-item>
                        <el-form-item><el-checkbox v-model="userform.checked">安全登录</el-checkbox></el-form-item>
                        <el-form-item><el-button size="small">登录</el-button></el-form-item>
                        <el-form-item><el-button size="small">重置</el-button></el-form-item>
                  </el-form>
              </el-col>
          </el-row>
      </div>
      <div class="logostyle">
          <el-form
            :inline="true"
            :model="searchform"
            ref='searchform'
          >
            <el-form-item label="">
                <el-input v-model="searchform.search" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-button type="primary" icon="el-icon-search"></el-button>
          </el-form>
      </div>
      <nav-menu>
          <nav-menu-item index="1" navTitle="首页"></nav-menu-item>
          <nav-menu-item index="2" navTitle="总社概况"></nav-menu-item>
          <nav-menu-item index="3" navTitle="信息发布"></nav-menu-item>
          <nav-menu-item index="4" navTitle="政策法规"></nav-menu-item>
          <nav-menu-item index="5" navTitle="政策法规"></nav-menu-item>
          <nav-menu-item index="6" navTitle="文件通知"></nav-menu-item>
          <nav-menu-item index="7" navTitle="数据统计"></nav-menu-item>
          <nav-menu-item index="8" navTitle="媒体关注"></nav-menu-item>
      </nav-menu>
  </div>
</template>

<script>
import navMenu from 'components/home/Navmenu'
import navMenuItem from 'components/home/NavmenuItem'
export default {
  name:'Header',
  components:{navMenu,navMenuItem},
  data () {
    return {
        searchform:{
            search:'',
        },
        userform:{
            username:'',
            password:'',
            checked:true,
        }
    }
  },
  methods: {
      search(){
          
      },
      
  }
}
</script>

<style  lang="less" scoped>
    .titlestyle{
        line-height:40px;
        font-size:14px;
    }
    .logostyle{
        height: 150px;
        background-image: url(../../assets/home/logo.jpg);
    }
    .headerTop{
        background-color: #F4F4F4;
        height: 40px;
        border: 1px solid #cccccc;
    }
</style>
