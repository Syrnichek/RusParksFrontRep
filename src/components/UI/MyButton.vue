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
  font-family: "Century Gothic",serif;
  font-size: 14px;
  width: 240px;
  height: auto;
  cursor: pointer;
}
button:hover{
  background: radial-gradient(#98CD80, #70A76E);
  color: #F7F9FB;
}
button:active{
  background-color: #70A76E;
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0,0,0,0.24);

}
</style>