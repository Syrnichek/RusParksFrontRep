<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
    />
    <div class="app_btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      ></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"/>
    </my-dialog>
  </div>
  <!--<div class="page_wrapper">
    <div
        v-for="pageNumber in totalPages"
        :key="page"
        class="page"
        :class="{
          'current_page': page===pageNumber
        }"
        @click="changePage(pageNumber)"
    >{{pageNumber}}</div>
  </div>-->
  <post-list
      :posts="sortedAndSearchPosts"
      @remove="removePost"
      v-if="!isPostLoading"
  />
  <div v-else>Идет загрузка...</div>
  <div ref="observer" class="observer"></div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDiolog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
export default {
  components:{
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostList,
    PostForm,
  },
  data(){

    return{
      posts: [],
      dialogVisible: false,//для отображения окна
      isPostLoading: false,//для отображения загрузки постов
      selectedSort:'',//для фильтрации
      searchQuery:'',//для поиска
      sortOptions:[
        {value:'title', name:'По названию'},
        {value:'body', name:'По описанию'},
      ],
      page:1,//хранит номер страницы
      limit:10,//количество постов на одной странице
      totalPages:0,//общее количество отображаемых страниц
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible=false;
    },//создание поста
    removePost(post){
      this.posts=this.posts.filter(p=>p.id !== post.id)
    },//убрать пост
    showDialog(){
      this.dialogVisible=true;
    },//показать окно

    //changePage(pageNumber){//отслеживает нажатие страницы
    //this.page=pageNumber
    //this.fetchPosts()
    //},
    async fetchPosts(){
      try{
        this.isPostLoading=true;
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages=Math.ceil(response.headers['x-total-count']/this.limit)
        this.posts=response.data
      }catch (e){
        alert('Ошибка')
      } finally {
        this.isPostLoading=false;
      }//отобразить посты подгруженные с сайта
    },
    async loadMorePosts(){
      try{
        this.page+=1
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts',{
          params:{
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages=Math.ceil(response.headers['x-total-count']/this.limit)//считает общее количество страниц,
        //которое отобразилось
        this.posts=[...this.posts, ...response.data];
      }catch (e){
        alert('Ошибка')
      }//отобразить посты подгруженные с сайта
    }
  },
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer)=> {
      /* Content excerpted, show below функция которая отработает когда мы пересекли черту конца страницы*/
      if(entries[0].isIntersecting&&this.posts<this.totalPages){
        this.loadMorePosts()
      }
    };
    const observer = new IntersectionObserver(callback, options);//создаваевый объект
    observer.observe(this.$refs.observer)
  },
  computed:{
    sortedPosts(){
      return[...this.posts].sort((post1,post2)=>{
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])})
    },//сортировка постов по названию и описанию
    sortedAndSearchPosts(){
      return this.sortedPosts.filter(post=>post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },//поиск по постам
  },
}

</script>

<style scoped>
.app_btns{
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.page_wrapper{
  display: flex;
  margin-top: 15px;
}
.page{
  border: 1px solid black;
  padding: 10px;
}
.current_page{
  border: 2px solid red;
}
.observer{
  height: 60px;
  background: green;
}
</style>
