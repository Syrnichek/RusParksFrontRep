<template>
  <div class="authorisation">
    <div>
      <h1>Авторизация</h1>
      <div class="box">
        <div>Логин</div> <my-input/>
      </div>
      <div class="box">
        <div>Пароль</div> <my-input/>
      </div>
    </div>
    <my-button style="width: 240px; color: white;">Войти</my-button>
  </div>
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
  font-family: "Century Gothic";
  padding-right: 24px;
}
.box{
  display: inline-flex;
  font-size: 24px;
  align-items: center;
  margin-right: 24px;
}
</style>