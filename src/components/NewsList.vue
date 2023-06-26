<template>
  <div v-if="news.length>0">
    <transition-group name="post-list">
      <news-item
          v-for="newsItem in news"
          :newsItem="newsItem"
          :key="newsItem.newsid"/>
    </transition-group>
  </div>
  <h2 v-else>Постов нет</h2>
</template>

<script>
import NewsItem from "@/components/NewsItem.vue";
export default {
  components: {NewsItem},
  props:{
      news: {
        newsItem: Array,
        required: true,
      }
  }
}
</script>

<style scoped>
.post-list{
  display: inline-flex;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active{
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to{
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move{
  transition: transform 0.4s ease;
}
</style>