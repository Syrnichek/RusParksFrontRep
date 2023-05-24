<template>
  <div>
    <div class="app_btns">
      <my-select>
      </my-select>
      <my-button @click="$router.push('/authorisation')" class="profile">Профиль</my-button>
    </div>
    <my-filter style="margin-bottom: 40px; margin-top: 40px"></my-filter>
    <my-dialog v-model:show="dialogVisible">
    </my-dialog>
  </div>
  <post-list
      :parks="parks"
      v-if="!isPostLoading"
  />
  <div v-else>Идет загрузка...</div>
  <div ref="observer" class="observer"></div>
</template>

<script>
import PostList from "@/components/ParkList.vue";
import MyDialog from "@/components/UI/MyDiolog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import Navbar from "@/App.vue";
import MyFilter from "@/components/UI/MyFilters.vue";
export default {
  components:{
    MyFilter,
    Navbar,
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostList,
  },
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
      const response = await axios.get('https://localhost:7110/api/parkManage/GetParksAll').then(response=>console.log(response));
      this.parks=response.data
    }catch (e){
      alert('Ошибка')
    } finally {
      this.isPostLoading=false;
    }//отобразить посты подгруженные с сайта
  },//не используется верхний async
  mounted() {
    axios
        .get('https://localhost:7110/api/parkManage/GetParksAll')
        .then(response=>this.parks=response.data);
  }
}
</script>

<style scoped>
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
</style>
