<!--поиск по всей странице-->
<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
  props:{
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue',event.target.value)
    }
  }
}
</script>

<style scoped>
.input{
  width: 440px;
  border: solid teal;
  border-radius: 15px;
  padding: 10px 15px;
  margin-top: 10px;
  font-size: 16px;
}
</style>