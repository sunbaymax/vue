<template>

  <div class='mune'>
     <div class="hover">热门推荐</div>
    <ul>
      <li @click="bjb">笔记本电脑</li>
      <li @click="shouji">手机</li>
      <li @click="luyinji">录音机</li>
      <li  @click="dianhua">电话</li>
      <li>打印机</li>
      <li>抽湿机</li>
      <li>手电筒</li>
    </ul>
  </div>

</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.mune{
    width: 100px;
    margin-top: 40px;
      text-align: left;
}
.hover{
    height: 40px;
    line-height: 40px;
    background: #ffffff;
    border-bottom: 5px solid #f8f8f8;
}
ul{
    /* margin-top: 20px; */
}
li {
   width: 100px;
   cursor: pointer;
   height: 40px;
   line-height: 40px; 
  list-style: none;
  background: #ffffff;
  border-bottom: 5px solid #f8f8f8;
}
</style>
<script>
import Msg from './jiaohu'
export default {
  
  methods:{
     bjb:function(){
         console.log("23");
         Msg.$emit("val","1")
     },
       shouji:function(){
         console.log("235")
          Msg.$emit("val","2")
     },
       luyinji:function(){
         console.log("235")
          Msg.$emit("val","3")
     },
     dianhua:function(){
         console.log("235")
          Msg.$emit("val","4")
     },
  }

}
</script>