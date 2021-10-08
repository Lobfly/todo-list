<template>
  <div class="item" :class="isFocus">
    <label>
      <input type="checkbox" v-model="todo.isDone" @click="switchClick">
      <div class="itme_text" v-show="!todo.isEdit">{{todo.title}}</div>
      <input type="text" :value="todo.title" v-show="todo.isEdit" @keydown.enter="editComplete" ref="itemInput">
    </label>
    <div class="item_edit" @click="editClick" v-show="!todo.isEdit">编辑</div>
    <div class="item_edit" @click="editComplete" v-show="todo.isEdit">完成</div>
    <div class="item_delete" @click="deleteClick" :class="isForbidClick">删除</div>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
    name:"TodolistItem",
    props:["todo","isForbidClick"],
    data(){
      return{
        isFocus:[]
      }
    },
    methods:{
      deleteClick(){
        this.$todoBus.$emit("deleteTodo",this.todo.id)
      },
      switchClick(){
        this.$todoBus.$emit("switchTodo",this.todo.id)
      },
      editClick(){
        //添加isEdit属性
        if(this.todo.hasOwnProperty("isEdit")){
          this.todo.isEdit = true
        }else{
          this.$set(this.todo,"isEdit",true)
        }
        //发布禁止点击消息
        pubsub.publish("forbidClick",1)
        //添加item的focus样式
        this.isFocus.push("focus")
        //激活input的focus样式
        this.$nextTick(()=>{
          this.$refs.itemInput.focus()
        })
      },
      editComplete(){
        //更新todo的title为编辑后的内容
        this.todo.title = this.$refs.itemInput.value
        //设置todo的isEdit属性为false
        this.todo.isEdit = false
        //发布允许点击消息
        pubsub.publish("forbidClick",0)
        //取消item的focus样式
        this.isFocus.pop()
      }
    }
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
  /* background-color: rgb(218, 216, 216); */
  box-shadow: 0 0 10px 0.5px skyblue;
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
  line-height: 50px;
  font-size: 22px;
  margin-left: 6px;
  cursor: pointer;
  font-family : "Gill Sans", sans-serif;
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
.item:hover>.item_delete,.item:hover>.item_edit{
  opacity: 1;
}
input[type="text"]{
  margin-left: 6px;
  padding: 0;
  border: 0;
  outline: none;
  font-size: 22px;
  width: 360px;
  font-family : "Gill Sans", sans-serif;
}
.focus{
  box-shadow: 0 0 10px 0.5px skyblue;
}
.item_edit{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 42px;
  background-color: rgb(133, 207, 236);
  color: #fff;
  border-radius: 4px;
  margin: 8px 8px 8px 0;
  cursor: pointer;
  opacity: 0;
}
.item_edit:hover{
  background-color: rgb(108, 169, 194);
}

</style>