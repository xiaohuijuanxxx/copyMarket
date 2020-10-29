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
            <el-form-item label="" v-model="searchform.search">
                <el-input></el-input>
            </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
export default {
  name:'headerBar',
  components:{},
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
