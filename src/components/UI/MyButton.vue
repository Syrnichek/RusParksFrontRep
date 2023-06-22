<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
button {
  align-self: flex-end;
  padding: 10px 15px;
  background-color: #98CD80;
  border-radius: 15px;
  border: 0 #98CD80;
  font-family: "Century Gothic";
  font-size: 14px;
  width: 240px;
  height: auto;
}
</style>