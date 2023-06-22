<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/UI/Navbar.vue";

export default {
  components: {Navbar}

}
</script>

<style scoped>
.app{
  padding: 20px;
  margin-left:40px;
  margin-right: 40px;
}
</style>