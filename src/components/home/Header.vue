<!-- 公共头部 -->
<template>
  <div>
      <div class="headerTop">
          <el-row>
              <el-col :span="8">
                  <span style="line-height:40px">中华全国供销合作总社主办</span>
                </el-col>
              <el-col :span="16">
                  <el-form 
                    :inline="true"
                    :model="userform"
                    ref='userform'
                    >
                        <el-form-item label="用户名">
                            <el-input v-model="userform.username" placeholder="请输入用户名" size="small"></el-input>
                        </el-form-item>
                         <el-form-item label="密码">
                             <el-input v-model="userform.password" placeholder="请输入密码" size="small"></el-input>
                        </el-form-item>
                  </el-form>
              </el-col>
          </el-row>
      </div>
      <div>我是头部</div>
  </div>
</template>

<script>
export default {
  name:'headerBar',
  components:{},
  data () {
    return {
        userform:{
            username:'',
            password:'',
        }
    }
  }
}
</script>

<style  lang="less" scoped>
    .headerTop{
        background-color: #F4F4F4;
        height: 40px;
        border: 1px solid #cccccc;
    }
</style>
