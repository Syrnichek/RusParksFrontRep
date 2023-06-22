<template>
  <div class="post">
    <div class="el">
      <img @click="$router.push(`/park/${park.parkid}`)" src="@/images/smallimages/1.jpg">
      <div class="maintext"><strong>{{ park.parkname}}</strong></div>
      <div>Город: {{ park.parkcity }}</div>
      <div>Метро: {{ park.parkmetro }}</div>
    </div>
      <!--<my-button @click="$emit('remove', post)">Удалить</my-button>-->
      <!--<my-button @click="$router.push(`/${park.parkid}`)" :key="park.parkid">Открыть</my-button>-->
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";

export default {
  components: {MyButton},

  props:{
    park:{
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
img{
  width: 200px;
  height: 220px;
  border-radius: 15px;
}
</style>