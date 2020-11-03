<template>
  <div class="pictureBorder">
      <el-carousel height="180px">
        <el-carousel-item v-for="item in pictureList" :key="item.id">
          <img :src="item.src">
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
  name:'PictureChange',
  data () {
    return {
      currentIndex:0,//轮播图的图片索引
      pictureList:[
        {id:"1",src:"https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"},
        {id:"2",src:"https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg"},
        {id:"3",src:"https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"},
      ],//存放图片地址
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang='less' scoped>
    .pictureBorder{
        height: 180px;
        border: 2px solid darksalmon;
    }
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
    /deep/.el-carousel__button{
      width: 10px;
      border-radius: 50%;
      height: 10px;
    }

</style>
