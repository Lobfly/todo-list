<template>
  <div id="header">
      <input type="text" placeholder="请输入你的任务名称，按回车确认">
  </div>
</template>

<script>
export default {
    name:'TodolistHeader',

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