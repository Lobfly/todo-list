<template>
  <div id="list">
      <TodolistItem 
      v-for="(todo,index) in todos" 
      :key="todo.id" 
      :todo="todo" 
      :switchTodo="switchTodo" 
      :todoIndex="index" 
      :deleteTodo="deleteTodo">
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
    props:["todos","switchTodo","deleteTodo"]
}
</script>

<style scoped>
#list{
    width: 100%;
    margin-top: 14px;
}
</style>