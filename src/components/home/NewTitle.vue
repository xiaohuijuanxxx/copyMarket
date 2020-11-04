<template>
  <div class="newTitle">
      <h1><a :href="title.href" target="_blank">{{title.titleName}}</a></h1>
      <p><a :href="title.href" target="_blank">{{title.contain}}</a></p>
  </div>
</template>

<script>
export default {
  name:'NewTitle',
  data () {
    return {
        title:{
            titleName:"总社召开党组会传达学习党的十九届五中全会精神",
            contain:"总社理事会主任、党组副书记喻红秋主持会议并提出要求",
            href:"http://www.chinacoop.gov.cn/news.html?aid=1693337"
        },
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang='less' scoped>
    .newTitle{
        height: 110px;

        h1{
            a{
                text-decoration:none;
                color:#dc4597;
            }
        }

        p{
            a{
                font-size:17px;
                color:#cc3a77;
                text-decoration:none;
                /* cursor: pointer; */
            }
        }
    }
</style>
