<template>
  <div class="filters">
    <div class="block">
      <img @click="$router.push(`/news`)" src="@/images/Новости.svg" alt="Новости">
      <div>Новости</div>
    </div>
    <div class="block">
      <img @click="GetParksByType(1)" src="@/images/кубики.svg" alt="Для детей">
      <div>Для детей</div>
    </div>
    <div class="block">
      <img @click="GetParksByType(2)"  src="@/images/знак%20фото%20зоны%202.svg" alt="Фотоместо">
      <div>Фотоместо</div>
    </div>
    <div class="block">
      <img @click="GetParksByType(3)" src="@/images/знак%20животных.svg" alt="Животные">
      <div>Животные</div>
    </div>
    <div class="block">
      <img @click="GetParksByType(4)" src="@/images/фудкорт.svg" alt="Фудкорт">
      <div>Фудкорт</div>
    </div>
    <div class="block">
      <img @click="GetParksByType(5)" src="@/images/знак%20барбекю.svg" alt="Мангал">
      <div>Мангал</div>
    </div>
    <div class="block">
      <img @click="GetParksByType(6)" src="@/images/Дерево.svg" alt="Отдых">
      <div>Отдых</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    props:{
        parks: {
            park: Array,
            required: true,
        }
    },

    name:'my-filter',

    methods: {
        GetParksByType(id){
            this.$emit("onChangeParkType", id)
        }
    }
}

</script>

<style scoped>
.filters{
  display: grid;
  grid-template-columns: repeat(12,1fr);
  align-content: start;
  justify-content: flex-start;
  font-size: 14px;
  font-family: "Century Gothic";
  margin-left: auto;
  width:760px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}
.block{
  align-self: center;
  margin-right: 24px;
  margin-left: auto;
  width: 88px;
  align-items: center;
}
img{
  height: 50px;
  width: 50px;
  margin-bottom: 4px;
}
div{
  display: flex;
  flex-direction: column;
}
</style>