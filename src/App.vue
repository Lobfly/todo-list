<template>
  <div id="app">
    <TodolistHeader></TodolistHeader>
    <TodolistList></TodolistList>
    <TodolistFooter></TodolistFooter>
  </div>
</template>

<script>
import TodolistHeader from "./components/TodolistHeader.vue"
import TodolistList from "./components/TodolistList.vue"
import TodolistFooter from "./components/TodolistFooter.vue"
export default {
  name: 'App',
  components: {
    TodolistHeader,
    TodolistList,
    TodolistFooter
  }
}
</script>

<style>
body{
  display: flex;
  justify-content: center;
}
#app{
  width: 500px;
  /* height: 600px; */
  border:1px solid gray;
  border-radius: 4px;
  padding: 12px;
  box-sizing: border-box;
}
</style>
