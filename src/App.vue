<template>
  <div id="app">
    <TodolistHeader @pushTodo="pushTodo" :isForbidClick="isForbidClick"></TodolistHeader>
    <TodolistList :todos="todos" :deleteTodo="deleteTodo" :isForbidClick="isForbidClick"></TodolistList>
    <TodolistFooter :todosAll="todosAll" :todosDone="todosDone" @deleteAll="deleteAll" @selectAll="selectAll" :isForbidClick="isForbidClick"></TodolistFooter>
  </div>
</template>

<script>
import TodolistHeader from "./components/TodolistHeader.vue"
import TodolistList from "./components/TodolistList.vue"
import TodolistFooter from "./components/TodolistFooter.vue"
import pubsub from "pubsub-js"
import Vue from 'vue'
export default {
  name: 'App',
  components: {
    TodolistHeader,
    TodolistList,
    TodolistFooter
  },
  data(){
    return{
      todos:[],
      isForbidClick:[]
    }
  },
  computed:{
    //todosAll和todosDone分别计算所有和已完成的数量
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
    deleteAll(){
      this.todos = this.todos.filter((todo)=>{
        if(!todo.isDone) return 1
      })
    },
    selectAll(type){
      this.todos.forEach(todo=>{
        if(type){
          todo.isDone = true
        }else{
          todo.isDone = false
        }
      })
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(){
        localStorage.setItem("todos",JSON.stringify(this.todos))
      }
    }
  },
  created(){
    //读取localStorage里的todos数据，添加到data里的todos
    const todosArr = JSON.parse(localStorage.getItem("todos"))
    if(todosArr) {
        todosArr.forEach((item)=>{
        this.todos.push(item)
    })
    }

    //订阅禁止点击事件消息
    pubsub.subscribe("forbidClick",(msgName,staus)=>{
      if(staus) this.isForbidClick.push("forbindClick")
      else this.isForbidClick.pop()
      })
  },
  mounted(){
      this.$todoBus.$on("switchTodo",id=>{
        this.todos.forEach((todo,index)=>{
          if(todo.id == id){
            this.todos.isDone = !this.todos.isDone
            return 
          }
        })
      })
      this.$todoBus.$on("deleteTodo",id=>{
        this.todos.forEach((todo,index)=>{
          if(todo.id == id){
            this.todos.splice(index,1)
            return 
          }
        })
      })
  },
  beforeDestroy(){
      this.$todoBus.$off("switchTodo")
      this.$todoBus.$off("deleteTodo")
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
.forbindClick{
  pointer-events: none;
}
</style>
