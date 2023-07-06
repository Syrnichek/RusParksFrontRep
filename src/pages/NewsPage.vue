<template>
  <div>

    <div class="app_btns">
      <my-button @click="$router.push('/')" class="profile">Парки</my-button>
      <my-button v-if="!userId" @click="$router.push('/authorisation')" class="profile">Профиль</my-button>
      <my-button v-if="userId" @click="profileExit()" class="profile">Выйти</my-button>
    </div>

    <my-button v-if="userRole==='Admin'" @click="showModal=true" class="profile" style="float:right; ">Добавить новость</my-button>
    <add-news-modal v-if="showModal" @close="showModal=false"/>

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
import AddNewsModal from "@/components/AddNewsModal.vue";
import AddParkModal from "@/components/AddParkModal.vue";

export default {
  components:{
    AddParkModal,
      MyFilter,
      Navbar,
      MyInput,
      MySelect,
      MyButton,
      MyDialog,
      NewsList,
      AddNewsModal
  },

  data() {
    return{
      showModal:false,
      news: [ ],
      userId:null,
      userRole:'',
      dialogVisible: false,//для отображения окна
      isPostLoading: false,//для отображения загрузки постов
    }
  },

  methods: {
    profileExit(){
      localStorage.clear()
      location.reload()
    },
  },

  mounted() {
    this.userId = localStorage.getItem("userId")

    let params = new URLSearchParams();
    params.append("userId", this.userId);

    axios
        .get('http://localhost:44326/api/newsManage/GetNewsAll')
        .then(response=>this.news=response.data);

    axios
        .get('http://localhost:44326/api/userManage/RoleGet', {params: params})
        .then(response => this.userRole = response.data)
        .catch(error => this.statusCode = error.response.status)
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
