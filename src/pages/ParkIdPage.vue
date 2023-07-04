<template>
  <div class="el">
      <div v-for="parkData in park" :key="parkData.parkid">
          <h1>
              {{ parkData.parkname }}
          </h1>
          <div>
              {{ parkData.maintext }}
          </div>
          <div>
              {{ parkData.enterinfotext}}
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {

    data(){
        return{
            park: [ ],
            dialogVisible: false,
            isPostLoading: false,
        }
    },

    mounted() {
        axios
            .get('https://localhost:5069/api/parkManage/GetParksById', {params: this.$route.params})
            .then(response=>this.park=response.data);
    }
}
</script>

<style scoped>
.el{
    align-content: start;
    width: 200px;
    align-items: center;
    font-family: "Century Gothic";
    font-size: 14px;
    margin-top: 20px;
}
</style>