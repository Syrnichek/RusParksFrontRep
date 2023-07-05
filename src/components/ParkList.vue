<template>
  <div v-if="parks.length>0">
    <transition-group name="post-list">
      <park-item
          v-for="park in parks"
          :park="park"
          :key="park.parkid"/>
    </transition-group>
  </div>
  <h2 v-else>Парков нет</h2>
</template>

<script>
import ParkItem from "@/components/ParkItem.vue";
export default {
  components: {ParkItem},
  props:{
    parks: {
      park: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.post-list{
  display: inline;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active{
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to{
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move{
  transition: transform 0.4s ease-out;
}
</style>