<template>
  <div class="navbar">
    <div class="navbar_btn">

    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";

export default {
  components: {MySelect, MyButton}

}
</script>

<style scoped>
.navbar{
  height: 100px;
  background-color: red;
  display: table-row;
  align-items: center;
  padding: 0 15px;
}
</style>