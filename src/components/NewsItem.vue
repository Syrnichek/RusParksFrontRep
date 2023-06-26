<template>
  <div class="post">
    <div class="el">
      <div class="maintext"><strong>{{ newsItem.newstitle}}</strong></div>
      <div>Город: {{ newsItem.newstext }}</div>
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
  justify-content: flex-start;
  grid-template-columns: repeat(6,1fr);
  width: 200px;
  border:1px black;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
}
.el{
  align-content: start;
  width: 200px;
  align-items: center;
  font-family: "Century Gothic";
  font-size: 14px;
  margin-top: 20px;
}
</style>