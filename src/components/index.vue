<template>
    <div class="shouye">
      <div class="lunbo">
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item v-for="item in images" :key="item.id">
            <img :src="item.view" alt="mao">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="tuijian">

      </div>
    </div>
</template>

<script>
  export default {
    name: 'index.vue',
    data(){
      return{
        images:[{id:0,view:require("../assets/1.jpeg")},
          {id:1,view:require("../assets/20171012094937654.gif")},
          {id:2,view:require("../assets/3.jpeg")},
          {id:3,view:require("../assets/2.jpeg")}]
      }
    }
  }
</script>

<style scoped>
  /*.el-carousel__item h3 {*/
    /*color: #475669;*/
    /*font-size: 14px;*/
    /*opacity: 0.75;*/
    /*line-height: 200px;*/
    /*margin: 0;*/
  /*}*/

  .el-carousel__item:nth-child(2n) {
    background-color: black;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
    width: 100%;
    height:100% ;
  }
  .shouye{
    margin: 20px auto;
  }
</style>
