<template>
  <div id="app">
    <TodolistHeader :pushTodo="pushTodo"></TodolistHeader>
    <TodolistList :todos="todos" :switchTodo="switchTodo" :deleteTodo="deleteTodo"></TodolistList>
    <TodolistFooter :todosAll="todosAll" :todosDone="todosDone" :deleteAll="deleteAll" :selectAll="selectAll"></TodolistFooter>
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
  },
  data(){
    return{
      todos:[
          {id:"001",title:"study",isDone:true},
          {id:"002",title:"game",isDone:true},
          {id:"003",title:"eat",isDone:false},
      ]
    }
  },
  computed:{
    todosAll(){
      return this.todos.length
    },
    todosDone(){
      return this.todos.filter((todo)=>{
        return todo.isDone
      }).length
    }
  },
  methods:{
    pushTodo(todo){
      this.todos.push(todo)
    },
    switchTodo(todo){
      todo.isDone=!todo.isDone
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    deleteAll(){
      this.todos = this.todos.filter((todo)=>{
        if(!todo.isDone) return 1
      })
    },
    selectAll(type){
      this.todos.forEach(todo=>{
        if(type){
          if(!todo.isDone) todo.isDone=!todo.isDone
        }else{
          if(todo.isDone) todo.isDone=!todo.isDone
        }
      })
    }
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
