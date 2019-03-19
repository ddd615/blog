<template>
    <div id="edit">
      <h3>编辑博客</h3><br>
      <div v-if="flag">
        主题:<br><input type="text" v-model="blog.theme"  size="70"><br>
        内容：<br><textarea v-model="blog.content" cols="51" rows="7"></textarea><br>
        分类：<br>
        <label>Vue.js</label><input type="checkbox" value="Vue.js" v-model="blog.categist">
        <label>Angular.js</label><input type="checkbox" value="Angular.js" v-model="blog.categist">
        <label>Node.js</label><input type="checkbox" value="Node.js" v-model="blog.categist">
        <label>React.js</label> <input type="checkbox" value="React.js" v-model="blog.categist">
        <br><br>
        <label>作者：</label>
        <br>
        <select v-model="blog.author">
          <option></option>
          <option v-for="author in authors"><label>{{author}}</label></option>
        </select>

        <el-button type="danger" @click="post1(blog.theme,blog.content)">修改博客</el-button>
      </div>
      <hr>
      <label>主题：{{blog.theme}}</label><br>
      <label>内容：{{blog.content}}</label><br>
      <p>分类:</p>
      <ul>
        <li v-for="cate in blog.categist">
          {{cate}}
        </li>
      </ul>
      <label>作者：{{blog.author}}</label>
    </div>
</template>

<script>
  export default {
    name: 'editBlog',
    data(){
      return{
        id:this.$route.params.id,
        flag:true,
        blog:{

        },
        authors:["lzd","fhf","yjr"],

      }

    },
    created(){
      this.getcontent();
    },
    methods:{
      getcontent(){
        this.axios.get('https://wd1630152761xrhvzk.wilddogio.com/posts/'+this.id+".json").then(res=>{
          this.blog=res.data
        })
      },
      post1(a,b){
        if(this.blog.theme!=''&&this.blog.content!=''&&this.blog.categist!=[]&&this.blog.author!=''){
        this.axios.put('https://wd1630152761xrhvzk.wilddogio.com/posts/'+this.id+".json",this.blog).then(res=>{
          console.log(res);
          this.flag=false
        })
        }else{
          alert("不能有空")
        }
      }
    }
  }
</script>

<style scoped>
#edit{
  width: 500px;
  margin: 0 auto;
}
</style>
