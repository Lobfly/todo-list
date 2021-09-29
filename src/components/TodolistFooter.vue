<template>
  <div id="footer">
      <div class="btn">清除已完成任务</div>
  </div>
</template>

<script>
export default {
name: "TodolistFooter"
}
</script>

<style>
#footer{
    margin-top: 14px;
}
.btn{
    background-color: rgb(218, 79, 73);
    width: 140px;
    height: 32px;
    color: #fff;
    text-align: center;
    line-height: 32px;
    border-radius: 4px;
    cursor: pointer;
}
.btn:hover{
    background-color: rgb(189, 54, 47);
}
</style>