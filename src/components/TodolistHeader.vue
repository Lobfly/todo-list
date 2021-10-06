<template>
  <div id="header">
      <input type="text" placeholder="输入任务名称，按回车添加" v-model="title" @keydown.enter="addTodo">
  </div>
</template>

<script>
import {nanoid} from "nanoid"
export default {
    name:'TodolistHeader',
    data(){
        return{
            title:""
        }
    },
    methods:{
        addTodo(e){
            //校验数据
            if(this.title.trim()== "") return  //这里的trim()和v-model.trim的效果一样
            //包装数据
            const newTodo = {
                id:nanoid(),
                title:this.title,
                isDone:false
            }
            //通知App组件去添加一个newTodo对象
            this.$emit("pushTodo",newTodo)
            this.title=""  //按完回车后清空
        }
    }
}
</script>

<style scoped>
#header{
    width: 100%;
    height: 50px;
}
input{
    width: 100%;
    height: 50px;
    background:none;  
	outline:none;  
	border:none;
    font-size: 20px;
    text-align: center;
    border: 2px solid gray;
    border-radius: 4px;
    box-sizing: border-box;
}
input:focus{
    /* 设置四个边框都有阴影 第一第二参数为0 */
    box-shadow: 0 0 8px 0.5px skyblue;
    border: 2px solid skyblue;
}
</style>