<template>
  <div>
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点击显示学校名</button>
  </div>
</template>

<script>
  export default {
    name:'School',
    data(){
        return {
            schoolName:'Internal',
            address:'beijing',
        }
    },
    methods: {
        showName(){
            alert(this.schoolName)
        }
    },
  }
</script>

<style>
  .demo{
    background-color: orange;
  }
</style>