<template>
  <div>
    <div class="app_btns">
      <my-button @click="$router.push('/authorisation')" class="profile">Профиль</my-button>
    </div>
    <my-dialog v-model:show="dialogVisible"/>
  </div>
  <news-list
      :news="news"
      v-if="!isPostLoading"
  />
  <div v-else>Идет загрузка...</div>
  <div ref="observer" class="observer"></div>
</template>

<script>
import NewsList from "@/components/NewsList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
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
      NewsList,
  },

  data() {
    return{
      news: [ ],
      dialogVisible: false,//для отображения окна
      isPostLoading: false,//для отображения загрузки постов
    }
  },

  methods: {
  },

  mounted() {
    axios
        .get('https://localhost:44326/api/newsManage/GetNewsAll')
        .then(response=>this.news=response.data);
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
