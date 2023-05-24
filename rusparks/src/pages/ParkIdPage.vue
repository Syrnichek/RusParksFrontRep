<!--Не работает пока что-->
<template>
  <div>
    <h1>{{$route.park.parkname}}</h1>
    <div>{{ $route.park.maintext }}</div>
    <div> {{ $route.park.enterinfotext}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {

data(){
  return{
    parks: [ ],
    dialogVisible: false,//для отображения окна
    isPostLoading: false,//для отображения загрузки постов
  }
},
methods: {

},//показать окно
async fetchPosts(){
  try{
    this.isPostLoading=true;
    const response = await axios.get('https://localhost:7110/api/parkManage/GetParksById'+{
      params:{
        id: this.$route.params
      }
    });
    this.parks=response.data
  }catch (e){
    alert('Ошибка')
  } finally {
    this.isPostLoading=false;
  }//отобразить посты подгруженные с сайта
},
mounted() {
}
}
</script>

<style scoped>

</style>