<template>
  <div class="app_btns">
    <my-button @click="$router.push('/')" class="profile">Парки</my-button>
    <my-button v-if="!userId" @click="$router.push('/authorisation')" class="profile">Профиль</my-button>
    <my-button v-if="userId" @click="profileExit()" class="profile">Выйти</my-button>
  </div>
  Средняя оценка: {{reviewAverage}}
  <div class="el" v-for="parkData in park" :key="parkData.parkid">
    <h1>{{ parkData.parkname }}</h1></div>
  <div class="images">
    <img class="A" src="@/images/smallimages/1.jpg">
    <img class="B" src="@/images/smallimages/2.jpg">
    <img class="C" src="@/images/smallimages/1.jpg">
    <img class="D" src="@/images/smallimages/2.jpg">
    <img class="E" src="@/images/smallimages/1.jpg">
  </div>
  <div class="el">
      <div v-for="parkData in park" :key="parkData.parkid">
          <strong>{{ parkData.parkname }}</strong>
          <div>{{ parkData.maintext }}</div>
          <div>{{ parkData.enterinfotext}}</div>
      </div>
  </div>
  <div class="rating-area">
    <input type="radio" id="star-5" name="rating" value="5">
    <label for="star-5" title="Оценка «5»"></label>
    <input type="radio" id="star-4" name="rating" value="4">
    <label for="star-4" title="Оценка «4»"></label>
    <input type="radio" id="star-3" name="rating" value="3">
    <label for="star-3" title="Оценка «3»"></label>
    <input type="radio" id="star-2" name="rating" value="2">
    <label for="star-2" title="Оценка «2»"></label>
    <input type="radio" id="star-1" name="rating" value="1">
    <label for="star-1" title="Оценка «1»"></label>
  </div>
  <div>
    <my-input v-model="reviewText" style="width: 450px;"/>
    <my-button  @click="ReviewAdd()" class="profile">Отзыв</my-button>
  </div>
  <div class="el">
    <div v-for="reviewData in review" :key="reviewData.reviewId">
      <div>
        Имя пользователя:{{ reviewData.userlogin }}
        Комментарий:{{ reviewData.reviewtext }}
        Оценка:{{ reviewData.reviewscore }}
        <my-button v-if="userRole==='Admin'" @click="ReviewDelete(reviewData.reviewid)" class="profile">Удалить</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";

function radioValue() {
  let array = []
  let checkboxes = document.querySelectorAll('input[type=radio]:checked')

  for (let i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value)
  }
  return array
}

export default {
  components: {MyInput, MyButton},

    data(){
        return{
          userRole:null,
          review: [],
          park: [],
          userId:null,
          reviewAverage: null,
          reviewText:'',
          dialogVisible: false,
          isPostLoading: false,
        }
    },

    methods:{
      ReviewAdd(){
        let radioVal = radioValue();
        let params = new URLSearchParams();
        let userId = this.userId
        let userLogin = localStorage.getItem("userLogin")
        let parkId = this.$route.params.parkId

        params.append("parkId", parkId);
        params.append("userId", userId);
        params.append("userLogin", userLogin);
        params.append("reviewScore", radioVal);
        params.append("reviewText", this.reviewText);

        axios
            .get('http://localhost:44326/api/reviewManage/ReviewAdd', {params: params})
            .then(response=>this.review=response.data);

        location.reload()
      },

      profileExit(){
        localStorage.clear()
        location.reload()
      },

      ReviewDelete(reviewId){
        let params = new URLSearchParams();
        params.append("reviewid", reviewId);

        axios
            .get('http://localhost:44326/api/adminManage/ReviewDelete', {params: params})
            .then(response=>this.review=response.data);

        location.reload()
      }
    },

    mounted() {
        this.userId = localStorage.getItem("userId")

        let params = new URLSearchParams();
        params.append("userId", this.userId);

        axios
            .get('http://localhost:44326/api/reviewManage/ReviewsGetAverage', {params: this.$route.params})
            .then(response=>this.reviewAverage=response.data);

        axios
            .get('http://localhost:44326/api/reviewManage/ReviewsGetByParkId', {params: this.$route.params})
            .then(response=>this.review=response.data);

        axios
            .get('http://localhost:44326/api/parkManage/GetParksById', {params: this.$route.params})
            .then(response=>this.park=response.data);

        axios
            .get('http://localhost:44326/api/userManage/RoleGet', {params: params})
            .then(response => this.userRole = response.data)
            .catch(error => this.statusCode = error.response.status)
    }
}
</script>

<style scoped>
.el{
  justify-content: center;
  align-content: start;
  width: 1300px;
  align-items: center;
  font-family: "Century Gothic";
  font-size: 14px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
img{
  border-radius: 15px;
}
.images{
  display: grid;
  justify-content: center;
  grid-template:"a a d e"
                "a a c b";
  border-radius: 15px;
  column-gap: 1%;
  row-gap: 1%;
}
.A{
  grid-area: a;
  width: 644px;
  height: 480px;
}
.B{
  grid-area: b;
  width: 310px;
  height: 230px;
}
.C{
  grid-area: c;
  width: 310px;
  height: 230px;
}
.D{
  grid-area: d;
  width: 310px;
  height: 230px;
}
.E{
  grid-area: e;
  width: 310px;
  height: 230px;
}
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
strong{
  font-size: 24px;
}
.rating-area {
  overflow: hidden;
  width: 1300px;
  margin: 20px auto;
}
.rating-area:not(:checked) > input {
  display: none;
}
.rating-area:not(:checked) > label {
  justify-content: center;
  width: 70px;
  padding: 5px;
  cursor: pointer;
  font-size: 48px;
  line-height: 32px;
  color: lightgrey;
  text-shadow: 1px 1px #bbb;
}
.rating-area:not(:checked) > label:before {
  content: '★';
}
.rating-area > input:checked ~ label {
  color: gold;
  text-shadow: 1px 1px #c60;
}
.rating-area:not(:checked) > label:hover,
.rating-area:not(:checked) > label:hover ~ label {
  color: gold;
}
.rating-area > input:checked + label:hover,
.rating-area > input:checked + label:hover ~ label,
.rating-area > input:checked ~ label:hover,
.rating-area > input:checked ~ label:hover ~ label,
.rating-area > label:hover ~ input:checked ~ label {
  color: gold;
  text-shadow: 1px 1px goldenrod;
}
.rate-area > label:active {
  position: relative;
}
</style>