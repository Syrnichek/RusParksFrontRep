<template>
  <div>
    Добрый день {{userLogin}}
    <div class="app_btns">
      <my-select @onChangeParkCity="selectedParkCity=$event"/>
      <my-button v-show="!userId" @click="$router.push('/authorisation')" class="profile">Профиль</my-button>
    </div>
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

export default {
    components:{
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
        userId:null,
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

    mounted() {
      this.userId = localStorage.getItem("userId")
      this.userLogin = localStorage.getItem("userLogin")
      axios
          .get('https://localhost:44326/api/parkManage/GetParksAll')
          .then(response => this.parks = response.data);
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
