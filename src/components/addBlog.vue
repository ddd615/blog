<template>
    <div id="add">
      <h3 >写博客</h3>
      <div v-if="flag" class="write">
      主题:<br><input type="text" v-model="blog.theme"  size="50" class="bc"><br>
      内容：<br><textarea v-model="blog.content" cols="51" rows="7" class="bc"></textarea><br>
      分类：<br>
      <label>Vue.js</label><input type="checkbox" value="Vue.js" v-model="blog.categist" class="bc">
      <label>Angular.js</label><input type="checkbox" value="Angular.js" v-model="blog.categist" class="bc">
      <label>Node.js</label><input type="checkbox" value="Node.js" v-model="blog.categist" class="bc">
      <label>React.js</label> <input type="checkbox" value="React.js" v-model="blog.categist" class="bc">
      <br><br>
      <label>作者：</label>
      <br>
      <select v-model="blog.author" class="bc">
        <option class="bc"></option>
        <option v-for="author in authors" class="bc">{{author}}</option>
      </select>

        <el-button type="danger" @click="open2">添加博客</el-button>
      </div>
      <hr>
      <label>主题：{{blog.theme}}</label><br>
      <label>内容：{{blog.content}}</label><br>

      类别：<label v-for="item in blog.categist">{{item}}&nbsp;&nbsp;</label><br>
      <label>作者：{{blog.author}}</label>
    </div>
</template>

<script>
  export default {
    name: 'addBlog',
    data() {
      return{
        blog:{
          theme:'',
          content:'',
          categist:[],
          author:''
        },
        authors:["lzd","fhf","yjr"],
        flag:true
      }
    },
    methods:{
      open2() {
        this.$confirm(' 是否添加继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if(this.blog.theme!=''&&this.blog.content!=''&&this.blog.categist!=[]&&this.blog.author!='') {
            this.axios.post('https://wd1630152761xrhvzk.wilddogio.com/posts.json', this.blog).then(res => {
              console.log(res);
              this.flag = false;
               this.$message({
                 type: 'success',
                 message: '添加成功!'
               })
            })
          }else {
            alert("不能有空")
          }
         ;
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消添加'
          });
        });
      },

      }

  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
select{
  width: 390px;
}
  .bc{
    background-color:rgba(255,255,255,0.3);
    border: none;
  }
  #add{
    width: 400px;
    margin: 0 auto;
  }
.write{
  margin: 20px auto;
}
</style>
