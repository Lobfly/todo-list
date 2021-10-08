<template>
  <div id="list">
      <TodolistItem 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo"
      :isForbidClick="isForbidClick" >
      </TodolistItem>
  </div>
</template>

<script>
import TodolistItem from "./TodolistItem.vue"
export default {
    name:"TodolistList",
    components:{
        TodolistItem
    },
    props:["todos","isForbidClick"]
}
</script>

<style scoped>
#list{
    width: 100%;
    margin-top: 14px;
}
</style>