<template>
  <div class="post">
    <div class="el">
      <img @click="$router.push(`/park/${park.parkid}`)" v-bind:src=GetImage(park.smallimage)>
      <div class="maintext"><strong>{{ park.parkname}}</strong></div>
      <div>Город: {{ park.parkcity }}</div>
      <div>Метро: {{ park.parkmetro }}</div>
    </div>
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default
{
    components: {MyButton},
    props:{
      park:{
        type: Object,
        required: true
      }
    },

    methods:{
      GetImage(imageName){
        let path = 'http://localhost:44326/StaticFiles/images/small/' + imageName
        return path
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
  cursor: pointer;
}
.el{
  align-content: start;
  width: 200px;
  align-items: center;
  font-family: "Century Gothic";
  font-size: 16px;
  margin-top: 20px;
}
img{
  width: 200px;
  height: 220px;
  border-radius: 15px;
}
</style>