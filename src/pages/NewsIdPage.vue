<template>
  <div class="app_btns">
    <my-button @click="$router.push('/news')" class="profile">Новости</my-button>
    <my-button v-if="!userId" @click="$router.push('/authorisation')" class="profile">Профиль</my-button>
    <my-button v-if="userId" @click="profileExit()" class="profile">{{userLogin}}</my-button>
  </div>

  <div class="el">
    <div v-for="newsData in news" :key="newsData.newsid">
      <h1>{{ newsData.newstitle }}</h1>
      <div>{{newsData.newsdate.slice(0,10)}}</div>
      <div v-for="newsData in news" :key="newsData.newsid" class="images">
        <img v-bind:src=GetImage(newsData.newsimage)>
      </div>
      <div class="text">{{ newsData.newstext }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},

  data(){
    return{
      news: [ ],
      dialogVisible: false,
      isPostLoading: false,
      userRole:null,
      userId:null,
      userLogin:null,
    }
  },
  methods:{
    GetImage(imageName){
      let path = 'http://localhost:44326/StaticFiles/images/news/' + imageName
      return path
    },
    profileExit(){
      localStorage.clear()
      location.reload()
    },
  },

  mounted() {
    this.userId = localStorage.getItem("userId")
    this.userLogin = localStorage.getItem("userLogin")

    let params = new URLSearchParams();
    params.append("userId", this.userId);
    axios
        .get('http://localhost:44326/api/newsManage/GetNewsById', {params: this.$route.params})
        .then(response=>this.news=response.data);
  }
}
</script>

<style scoped>
.el{
  justify-content: center;
  align-content: start;
  width: 1300px;
  align-items: center;
  font-family: "Century Gothic",serif;
  font-size: 16px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
img{
  width: 1300px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
}
.app_btns{
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.profile{
  margin: 0;
  font-size: 20px;
  height: 60px;
  width: 200px;
}
.images{
  display: flex;
  justify-content: center;
}
.text{
  text-indent: 25px;
  margin-top: 20px;
  text-align: justify;
}
</style>