<template>
  <div id="app">
    <div class="nav">
      <router-link to="/"><el-button round class="btn">首页</el-button></router-link>
      <router-link to="/show" class="font"><el-button round class="btn">博客</el-button></router-link>
      <router-link to="/addBlog" class="font"><el-button round class="btn">写博客</el-button></router-link>
    </div>
    <div class="logo">

    </div>
    <div class="content">
      <div class="neirong">
    <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import addBlog from './components/addBlog'
  import showBlog from './components/showBlog'
  export default {
  name: 'App',
  components: {addBlog,showBlog
  }
}
</script>

<style>
 html body{
   background: url("http://attach.bbs.miui.com/forum/201812/17/212119wrssrn7rabrclr6f.jpg") center no-repeat;
   margin: 0;
   padding: 0;
  }
.nav{
  width: 100%;
  height: 60px;
  background-color: #c80032;
  line-height: 60px;
  text-align: center;
}
  #app{
    margin: 0 auto;
    position: relative;

    /*background-size: 1349px 905px;*/


  }
  .content{
    margin: 0 auto;
    width: 1349px;




  }
  .neirong{
    margin: 0 auto;
  }
  .logo{
    width: 100px;
    height: 100px;

    position:absolute ;
    top:0;
    left: 70px;
    background: url("http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180720/df1d23cbfffb417f99f0e92031c41e64.jpeg") no-repeat;
    background-size: 100px 100px;
  }
  .btn{

    opacity: 0.5;

  }
  .btn:hover{
    opacity: 1;
  }
</style>
