<template>
  <div class="authorisation">
      <h1>Авторизация</h1>
      <div class="box">
        <div>Логин</div>
        <my-input style="margin-left: 30px"/>
      </div>
      <div class="box">
        <div>Пароль</div>
        <my-input style="margin-left: 20px"/>
      </div>
    <my-button style="width: 240px; color: white; margin-right: auto; margin-left: auto;margin-top: 60px; font-size:24px">ВОЙТИ</my-button>
    <div @click="$router.push('/registration')" style="margin-top: 10px">РЕГИСТРАЦИЯ</div>
  </div>
  <!--box{
  display: inline-flex;
  font-size: 24px;
  align-items: center;
  margin-right: 24px;
} -->
</template>

<script>

import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton, MyInput}

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