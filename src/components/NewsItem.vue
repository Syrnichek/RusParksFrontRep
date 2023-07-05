<template>
  <div class="post">
    <div class="el">
      <img @click="$router.push(`/news/${news.newsid}`)" src="@/images/smallimages/1.jpg">
      <div class="maintext"><strong>{{ newsItem.newstitle}}</strong></div>
      <div>{{ newsItem.newsdate }}</div>
    </div>
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  props:{
      newsItem:{
        type: Object,
        required: true
    }
  }
}
</script>

<style scoped>
.maintext{
  font-size: 16px;
}
.post{
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  grid-template-columns: repeat(6,1fr);
  border:1px black;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  cursor: pointer;
}
.el{
  align-self: center;
  justify-self: center;
  align-content: start;
  width: 420px;
  align-items: center;
  font-family: "Century Gothic",serif;
  font-size: 16px;
  margin-top: 20px;
}
img{
  width: 420px;
  height: 280px;
  border-radius: 15px;
}
</style>