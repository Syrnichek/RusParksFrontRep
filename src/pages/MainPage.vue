<template>
  <div>
    Добрый день {{userLogin}}

    <div class="app_btns">
      <my-select @onChangeParkCity="selectedParkCity=$event"/>
      <my-button v-if="!userId" @click="$router.push('/authorisation')" class="profile">Профиль</my-button>
      <my-button v-if="userId" @click="profileExit()" class="profile">Выйти</my-button>
    </div>

    <my-button v-if="userRole==='Admin'" @click="showModal=true" class="profile" style="float:right; ">Добавить парк</my-button>
    <add-park-modal v-if="showModal" @close="showModal=false"/>

    <my-filter :parks="parks"
               @onChangeParkType="selectedParkId=$event"
               style="margin-bottom: 40px;
               margin-top: 40px"
    />
    <my-dialog v-model:show="dialogVisible"/>

  </div>

  <park-list
      :parks="filteredParks"
      v-if="!isPostLoading"
  />
  <div v-else>Идет загрузка...</div>
  <div ref="observer" class="observer"></div>
</template>

<script>
import ParkList from "@/components/ParkList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import Navbar from "@/App.vue";
import MyFilter from "@/components/UI/MyFilters.vue";
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
        ParkList,
    },

    data(){
      return{
        showModal:false,
        userId:null,
        userRole:'',
        userLogin:null,
        selectedParkId: null,
        selectedParkCity: null,
        parks: [ ],
        dialogVisible: false,//для отображения окна
        isPostLoading: false,//для отображения загрузки постов
      }
    },

    computed:{
      filteredParks(){
        let parks = this.parks

        if(this.selectedParkId) {
          parks = parks.filter(parks => parks.typeid.includes(this.selectedParkId))
        }

        if(this.selectedParkCity) {
          parks = parks.filter(parks => parks.parkcity === this.selectedParkCity)
        }

        return parks
      }
    },

    methods:{
      profileExit(){
        localStorage.clear()
        location.reload()
      },

      parkAdd(){

      }
    },

    mounted() {
      this.userId = localStorage.getItem("userId")
      this.userLogin = localStorage.getItem("userLogin")

      let params = new URLSearchParams();
      params.append("userId", this.userId);

      axios
          .get('http://localhost:44326/api/parkManage/GetParksAll')
          .then(response => this.parks = response.data);

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
