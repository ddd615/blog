<template>
    <div id="single">
     <h1 style="text-align: center">{{blog.theme}}</h1>
      <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{blog.content}}</article>
      <p>作者：{{blog.author}}</p>
      <p>分类:</p>
      <ul>
        <li v-for="cate in blog.categist">
          {{cate}}
        </li>
      </ul>
      <i class="el-icon-delete" @click="open2"  ></i>
      <router-link :to="'/edit/'+id" class="font"><i class="el-icon-edit"></i></router-link>
    </div>
</template>

<script>
  export default {
    name: 'singleBlog',
    data(){
      return{
        id: this.$route.params.id,
        blog: {}
      }
    },
    methods:{
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.delete('https://wd1630152761xrhvzk.wilddogio.com/posts/'+this.id+".json").then(response=>{
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.$router.push({path:'/'})
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      detele(){
        this.axios.delete('https://wd1630152761xrhvzk.wilddogio.com/posts/'+this.id+".json").then(response=>{
          this.$router.push({path:'/'})
        })
      }
    },
    created () {
      this.axios.get('https://wd1630152761xrhvzk.wilddogio.com/posts/'+this.id+".json").then(res=>{
           this.blog=res.data

      })
    }

  }
</script>

<style scoped>
#single{
  background-color: rgba(236,233,236,0.3);
  width: 400px;
  margin: 20px auto;
}
   i{

    color: black;
    opacity: 0.3;
     width: 30px;
     height: 30px;
     position: relative;
     right: -180px;
     top: -10px;
     font-size: 25px;
   }
   i:hover{
    opacity: 0.8;
  }
  ul li{
    list-style: none;
  }
</style>
