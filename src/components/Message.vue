<template>
<div id="message">
  <div class="fabu">
    <el-form ref="form" :model="form" label-width="50px" >

      大侠留名：<el-input v-model="form.name" placeholder="一位不愿透漏姓名的小可爱" class="by"></el-input>
      评论内容：
      <el-input type="textarea" v-model="form.msg"  class="by"></el-input>
      <el-button type="primary" @click="onSubmit" class="btn1 ">发布</el-button>
    </el-form>
  </div>
  <div class="liulang">
    <div v-for="item in list" :key="item._id" class="liuyan">
      <div class="content1">
        <article>{{item.content}}</article>
      </div>
      <div class="content2">
      <span>{{item.time}}</span>
      <span>署名：{{item.author}}</span>
      <i class="el-icon-delete" @click="open2(item._id)"  ></i>
      </div>
    </div>
  </div>

</div>
</template>

<script>
  export default {
    name: 'Message',
    data () {
      return {
        form: {
          msg: '',
          name: '',
        },
        list: [],
      }
    },
    mounted () {
      this.axios.get('http://47.106.233.65:3000/newslist.html').then(result => {
        this.list = result.data
      })
    },
    methods: {
      onSubmit () {
        this.axios.post('http://47.106.233.65:3000/save_add.html', this.form).then(result => {
          this.axios.get('http://47.106.233.65:3000/newslist.html').then(result => {
            this.list = result.data
        });
        });
        this.$message('发布成功');

      },
      open2 (a) {
        this.$confirm('此操作将永久删除该评论, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.get('http://47.106.233.65:3000/del_news.html?id=' + a).then(response => {
            this.axios.get('http://47.106.233.65:3000/newslist.html').then(result => {
              this.list = result.data;
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
            })

          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style scoped>
.fabu{
  width: 400px;
  margin: 20px auto;
  overflow: hidden;


}
.by{
  -webkit-box-shadow: 10px 10px 20px #000;
  -moz-box-shadow:10px 10px 20px  #000;
  box-shadow: 10px 10px 20px  #000;
}
  .liulang{
    width: 400px;
    min-height: 300px;
    margin: 10px auto;
  }
  .liuyan{
    width: 400px;
    min-height: 100px;
    border: 1px solid #8c939d;
    background-color: #443fff;
    margin-top: 10px;
    position: relative;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    box-shadow: 10px 10px 30px black;
  }
  .liuyan span{
    font-size: 12px;

  }
  .liuyan span:nth-child(1){
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .liuyan span:nth-child(2){
    position: absolute;
    bottom: 25px;
    right: 10px;
  }
  .liuyan i{
    font-size: 20px;
    position: absolute;
    left: 20px;
  }
  .content2{
    width: 100%;
    height: 30px;
    position: relative;
    bottom: -16px;
  }
  .content1{
    width: 380px;
    margin: 0 auto;
    min-height: 50px;
    /*border: 1px solid #8c939d;*/
    word-wrap: break-word;word-break: break-all;overflow: hidden;
    position: relative;
    bottom: -5px;
    background-color: white;
  }
  .btn1{
    float: right;

  }
</style>
