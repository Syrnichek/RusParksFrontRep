<template>
  <div class="filters">
    <div class="block">
      <img src="@/images/Новости.svg" alt="Новости">
      <div>Новости</div>
    </div>
    <div class="block">
      <img src="@/images/кубики.svg" alt="Для детей">
      <div>Для детей</div>
    </div>
    <div class="block">
      <img src="@/images/знак%20фото%20зоны%202.svg" alt="Фотоместо">
      <div>Фотоместо</div>
    </div>
    <div class="block">
      <img src="@/images/знак%20животных.svg" alt="Животные">
      <div>Животные</div>
    </div>
    <div class="block">
      <img src="@/images/фудкорт.svg" alt="Фудкорт">
      <div>Фудкорт</div>
    </div>
    <div class="block">
      <img src="@/images/знак%20барбекю.svg" alt="Мангал">
      <div>Мангал</div>
    </div>
    <div class="block">
      <img src="@/images/Дерево.svg" alt="Отдых">
      <div>Отдых</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'my-filter',
}
</script>

<style scoped>
.filters{
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-family: "Century Gothic";
  align-items: center;
  margin-left: auto;
}
.block{
  align-self: center;
  margin-right: 24px;
  margin-left: auto;
}
img{
  height: 50px;
  width: 50px;
  margin-bottom: 4px;
}
</style>