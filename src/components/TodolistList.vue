<template>
  <div id="list">
      <TodolistItem></TodolistItem>
      <TodolistItem></TodolistItem>
      <TodolistItem></TodolistItem>

  </div>
</template>

<script>
import TodolistItem from "./TodolistItem.vue"
export default {
    name:"TodolistList",
    components:{
        TodolistItem
    }
}
</script>

<style scoped>
#list{
    width: 100%;
    margin-top: 14px;
}
</style>