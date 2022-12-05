<template>
    <div>
      <h2>学生名字：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="showName">点击显示学生名</button>
    </div>
  </template>
  
  <script>
    export default {
      name:'Student',
      data(){
          return {
              name:'张三',
              age:22,
          }
      },
      methods: {
          showName(){
              alert(this.name)
          }
      },
    }
  </script>
  
  <style>
  </style>