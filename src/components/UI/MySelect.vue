<template>
  <select :value="selectedCity" @change="GetParksByCity">
    <option disabled value="">Город</option>
    <option value="Москва">Москва</option>
    <option value="Санкт-Петербург">Санкт-Петербург</option>
    <option value="Сочи">Сочи</option>
    <option value="Кисловодск">Кисловодск</option>
    <option value="Валдай">Валдай</option>
    <option value="Омск">Омск</option>
    <option value="Калининград">Калининград</option>
  </select>
</template>

<script>
export default {
    name:'my-select',

    data(){
        return {selectedCity: ''}
    },

    props:{
        modelValue: [String, Number],
        options:{
            type: Array,
            default: ()=>[]
        }
    },

    methods:{
        GetParksByCity(e){
          this.$emit("onChangeParkCity", this.selectedCity = e.target.value)
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
  border: 0px;
  font-family: "Century Gothic",serif;
  font-size: 20px;
  color: black;
  cursor: pointer;
}
select:hover{
  color: #F7F9FB;
  background: #70A76E;
}
select:focus{
  outline: 0;
}
</style>