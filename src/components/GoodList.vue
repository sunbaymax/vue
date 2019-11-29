<template>

  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
         <img v-bind:src="item.img"/>
         <p>{{item.desc}}</p>
      </li>
     
    </ul>
  </div>

</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
}


ul li {
   width: 200px;
   height: 200px;
   float: left;
   cursor: pointer;
 
  list-style: none;
 
 
}
li img{
   width: 180px;
   height: 180px;
 
 
 
}
</style>
<script>
import axios from "axios"
export default {
  data(){
    goodId:''
        //var _this=this;
       // var url = "../../static/json/diannao.json";
            var obj=this;
      var url='';
      if(obj.goodId==1){
        url='../../static/json/diannao.json'
      }else if(obj.goodId==2){
         url='../../static/json/shouji.json'
      }else{
         url='../../static/json/diannao.json'
      }
       axios.get(url).then(function(result) {
          console.log(result.data);
          obj.list = result.data;
        });
        return{
          list:[]
        }
  },
  methods:{
    
  },
  components:{

  },
  props:{
    goodId:Number
  },
  watch:{
    goodId(){
      var obj=this;
      var url='';
      if(obj.goodId==1){
        url='../../static/json/diannao.json'
      }else if(obj.goodId==2){
         url='../../static/json/shouji.json'
      }else{
          url='../../static/json/diannao.json'
      }
       axios.get(url).then(function(result) {
          console.log(result.data);
          obj.list = result.data;
        });
        return{
          list:[]
        }
    }
  }


}
</script>