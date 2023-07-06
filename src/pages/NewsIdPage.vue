<template>
  <div class="el">
    <div v-for="newsData in news" :key="newsData.newsid" class="images">
      <img v-bind:src=GetImage(newsData.newsimage)>
    </div>
    <div v-for="newsData in news" :key="newsData.newsid">
      <h1>{{ newsData.newstitle }}</h1>
      <div>{{newsData.newsdate}}</div>
      <div>{{newsData.newsimage}}</div>
      <div>{{ newsData.newstext }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {

  data(){
    return{
      news: [ ],
      dialogVisible: false,
      isPostLoading: false,
    }
  },
  methods:{
    GetImage(imageName){
      let path = 'http://localhost:44326/StaticFiles/images/news/' + imageName
      return path
    }
  },

  mounted() {
    axios
        .get('http://localhost:44326/api/newsManage/GetNewsById', {params: this.$route.params})
        .then(response=>this.news=response.data);
  }
}
</script>

<style scoped>
.el{
  align-content: start;
  width: 200px;
  align-items: center;
  font-family: "Century Gothic",serif;
  font-size: 14px;
  margin-top: 20px;
}
</style>