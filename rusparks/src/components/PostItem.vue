<template>
  <div class="post">
    <div>
      <div>{{ park.id }}</div>
    <div><strong>Название: </strong> {{ park.parkname}}</div>
    <div><strong>Описание: </strong> {{ park.id }}</div>
    </div>
    <div class="postBtn">
      <!--<my-button @click="$emit('remove', post)">Удалить</my-button>-->
      <my-button @click="$router.push(`/user/${park.id}`)">Открыть</my-button>
    </div>
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  props:{
    park:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post{
  padding: 15px;
  border: 0;
  margin-top: 15px;
  display: grid;
  align-items: center;
  justify-content: space-between;
}
.postBtn{
  display: flex;
}
</style>