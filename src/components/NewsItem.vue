<template>
  <div class="post">
    <div class="el">
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
  data(){
  },
  components: {MyButton},
  props:{
    park:{
      type: Object,
      required: true
    }
  },
  async fetchPosts(){
    try{
      this.isPostLoading=true;
      const response = await axios.get('https://localhost:7110/api/parkManage/GetParksById'+'?'+{
        params:{
          id: this.park.parkid
        }
      });
      this.parks=response.data
    }catch (e){
      alert('Ошибка')
    } finally {
      this.isPostLoading=false;
    }//отобразить посты подгруженные с сайта
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