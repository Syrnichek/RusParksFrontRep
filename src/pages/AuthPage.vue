<template>
  <div class="authorisation">
      <h1>Авторизация</h1>
      <div class="box">
        <div>Логин</div>
        <my-input v-model="login" style="margin-left: 30px"/>
      </div>
      <div class="box">
        <div>Пароль</div>
        <my-input v-model="password" style="margin-left: 20px"/>
      </div>
      <div v-if="statusCode==401">
          Не верный логин/пароль
      </div>
    <my-button @click="UserLogin()" style="width: 240px; color: white; margin-right: auto; margin-left: auto;margin-top: 60px; font-size:24px; cursor: pointer">ВОЙТИ</my-button>
    <div @click="$router.push('/registration')" style="margin-top: 10px; cursor: pointer">РЕГИСТРАЦИЯ</div>
  </div>
</template>

<script>

import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";

export default {
    components: {MyButton, MyInput},

    data(){
        return{
            login: null,
            password: null,
            user:null,
            statusCode:null
        }
    },

    methods: {
        async UserLogin() {
            let params = new URLSearchParams();
            params.append("login", this.login);
            params.append("password", this.password);

            await axios
                .get('http://localhost:44326/api/userManage/UserLogin', {params: params})
                .then(response => this.user = response.data)
                .catch(error => this.statusCode = error.response.status)

            if (this.user !== null) {
                localStorage.setItem('userId', this.user.userId)
                localStorage.setItem('userLogin', this.user.userLogin)
                this.$router.push('/')
            }
        }
    }
}
</script>

<style scoped>

.authorisation{
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  font-family: "Century Gothic";
}
.box{
  width: 200px;
  align-items: center;
  font-size: 14px;
  margin-top: 20px;
  padding-right: 20px;
}
h1{
  display: flex;
}
div{
  display:flex;
  flex-direction: row;
}
</style>