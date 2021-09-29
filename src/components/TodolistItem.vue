<template>
  <div class="item">
    <label>
      <input type="checkbox">
      <div class="itme_text">xxx</div>
    </label>
      
  </div>
</template>

<script>
export default {
    name:"TodolistItem",
}
</script>

<style scoped>
.item{
  height: 50px;
  border: 1px solid gray;
  border-bottom: none;
  display: flex;
}
.item:nth-last-child(1){
  border-bottom: 1px solid gray;
}
label{
  display: flex;
  cursor: pointer;
}
label>*{
  height: 100%;
}
.itme_text{
  display: flex;
  align-items: center;
  font-size: 22px;
  margin-left: 6px;
}
</style>