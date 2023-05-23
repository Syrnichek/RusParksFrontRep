<!--Компонент для выпадающего списка-->
<template>
  <select :value="modelValue" @change="changeOptions">
    <option disabled value="">Город</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name:'my-select',
  props:{
    modelValue: [String, Number],
    options:{
      type: Array,
      default: ()=>[]
    }
  },
  methods:{
    changeOptions(event){
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
select{
  background-color: #98CD80;
  height: 60px;
  width: 200px;
  border-radius: 15px;
  border: 0;
  font-family: "Century Gothic";
  font-size: 20px;
}
</style>