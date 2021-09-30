<template>
  <div class="item">
    <label>
      <input type="checkbox" v-model="todo.isDone" @click="switchTodo(todo)">
      <div class="itme_text">{{todo.title}}</div>
    </label>
    <div class="item_delete" @click="deleteTodo(todoIndex)">删除</div>
  </div>
</template>

<script>
export default {
    name:"TodolistItem",
    props:["todo","switchTodo","todoIndex","deleteTodo"],
}
</script>

<style scoped>
.item{
  height: 50px;
  border: 1px solid gray;
  border-bottom: none;
  display: flex;
}
.item:hover{
  background-color: rgb(218, 216, 216);
}
.item:nth-last-child(1){
  border-bottom: 1px solid gray;
}
label{
  display: flex;
  width: 100%;
}
label>*{
  height: 100%;
}
.itme_text{
  display: flex;
  align-items: center;
  font-size: 22px;
  margin-left: 6px;
  cursor: pointer;
}
.item_delete{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 42px;
  background-color: rgb(218, 79, 73);
  color: #fff;
  border-radius: 4px;
  margin: 8px 8px 8px 0;
  cursor: pointer;
  opacity: 0;
}
.item_delete:hover{
  background-color: rgb(189, 54, 47);
}
/* 还能这样玩？？ */
.item:hover>.item_delete{
  opacity: 1;
}
</style>