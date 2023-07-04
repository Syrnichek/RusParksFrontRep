<template>
  <div class="authorisation">
    <h1>Регистрация</h1>
    <div class="box">
      <div>Логин</div>
      <my-input v-model="login" style="margin-left: 30px"/>
    </div>
    <div class="box">
      <div>Пароль</div>
      <my-input v-model="password" style="margin-left: 20px"/>
    </div>
    <div class="box">
      <div>Email</div>
      <my-input v-model="email" style="margin-left: 35px"/>
    </div>
    <div v-if="statusCode==425">
      Такой пользователь уже существует
    </div>
    <div v-else-if="statusCode==400">
      Введите корректные данные
    </div>
    <my-button @click="UserReg()" style="width: 340px; color: white; margin-right: auto; margin-left: auto;margin-top: 60px; font-size:24px">Зарегистрироваться</my-button>
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
      login: '',
      password: '',
      email: '',
      user:null,
      statusCode:null
    }
  },

  methods: {
    async UserReg() {
      let params = new URLSearchParams();
      params.append("login", this.login);
      params.append("password", this.password);
      params.append("email", this.email);

      await axios
          .get('https://localhost:5069/api/userManage/UserReg', {params: params})
          .then(response => this.user = response.data)
          .catch(error => this.statusCode = error.response.status)

      if (this.user !== null) {
        this.$router.push('/authorisation')
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