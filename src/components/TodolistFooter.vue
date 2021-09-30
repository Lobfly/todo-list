<template>
  <div id="footer">
      <div class="btn_selectall" @click="selectAllClick">{{selectAllText[selectAllType]}}</div>
      <div class="btn_delete" @click="deleteAll">清除已完成任务</div>
      <div class="total">已完成{{todosDone}} / 全部{{todosAll}}</div>
  </div>
</template>

<script>
export default {
  name: "TodolistFooter",
  props:["todosAll","todosDone","deleteAll","selectAll"],
  data(){
    return{
      selectAllType:1,
      selectAllText:["取消全选","全选"]
    }
  },
  methods:{
    selectAllClick(){
      this.selectAll(this.selectAllType)
      this.selectAllType = this.selectAllType?0:1
      console.log(this.selectAllText[this.selectAllType]) 
    }
  }
}
</script>

<style scoped>
#footer{
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
}
.btn_delete{
  background-color: rgb(218, 79, 73);
  width: 140px;
  height: 32px;
  color: #fff;
  text-align: center;
  line-height: 32px;
  border-radius: 4px;
  cursor: pointer;
}
.btn_delete:hover{
  background-color: rgb(189, 54, 47);
}
.btn_selectall{
  background-color: rgb(70, 152, 228);
  padding: 0 6px 0 6px;
  color: #fff;
  text-align: center;
  line-height: 32px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: -40px;
  width: 70px;
}
.btn_selectall:hover{
  background-color: rgb(62, 132, 197)

}
.total{
  text-align: right;
  line-height: 32px;
  width: 200px;
}
</style>