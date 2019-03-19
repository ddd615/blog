<template>
    <div id="show">
      <h3>博客总览</h3>
      <input type="text" size="50" v-model="search" placeholder="搜索">
       <div v-for="blog in searcher" class="blogs">
         <router-link :to="'/blog/' + blog.id" class="font">
           <h2>{{blog.theme |toupcase}}</h2>
         </router-link>
         <article>{{blog.content | data}}</article>
       </div>

    </div>
</template>

<script>
  export default {
    name: 'showBlog',
    data(){
      return{
        blogList:[],
        search:''
      }
    },
    created(){
      this.getBlog()
    },
    methods:{
      getBlog(){
        this.axios.get("https://wd1630152761xrhvzk.wilddogio.com/posts.json").then(result=>{
          return result.data
        }).then(data=>{
          var blogArray=[];
          for(let key in data){
            data[key].id=key;
            blogArray.push(data[key])
          }
          this.blogList=blogArray;
        })
      }
    },
    computed:{
      searcher:function () {
            return this.blogList.filter(blog=>{
              return blog.theme.match(this.search)
            })
      }
    },
    filters:{
      data:function (value) {
        return value.slice(0,80)+"..."
      },
      toupcase:function (value) {
        return value.toUpperCase();

      }
    }

  }
</script>

<style scoped>
  .blogs{
    padding-left: 0px;
    width: 400px;
    height: 160px;
    background-color: rgba(236,233,236,0.3);
    margin: 20px 0;
  }
.blogs li{

  margin-bottom: 20px;
  list-style: none;
  padding-left: 15px;
}
  .font{
    text-decoration: none;
  }
  .font:hover{
    color: deepskyblue;
  }
  #show{
    width: 400px;
    margin: 0 auto;
  }
</style>
