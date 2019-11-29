<template>
    <div>
        <input type="text" v-model="tubo"  v-on:keyup.13="add"/><button @click="add">+添加</button><button @click="search">查看</button>
         <br>
          <br>
         <hr>
         <h4>未选择</h4>
         <ul>
             <li v-for="(item,index) in list" :key="index">
                <div v-if="item.check==false">
                     <input type="checkbox"  @change="change(index)" /> {{item.title}}----<button @click="del(index)">删除</button>
                </div> 
              
             </li>
         </ul>
          <br>
          <br>
          <hr>
         <h4>已选择</h4>
           <ul>
             <li v-for="(item,index) in list" :key="index" >
                <div  v-if="item.check==true"> 
               <input type="checkbox"  @change="change(index)"/> {{item.title}}----<button @click="del(index)">删除</button>
                </div>
             </li>
         </ul>
         
    </div>
   
</template>
<style scoped>
  ul li{
      list-style: none;
  }
</style>
<script>
export default {
    data(){
        return{
              tubo:'',
              list:[
                 {
                      "title":'122',
                      "check":false
                 },
                 {
                      "title":'666',
                      "check":true
                 }
              ]
        }
    },
    methods:{
        add(){
            //alert(this.tubo);
            if(this.tubo!=""){
               
              this.list.push({
                  "title":this.tubo,
                  "check":false
              });
              this.tubo=''
            }
           
        },
        del(key){
            //alert(key);
            this.list.splice(key,1)
        },
        change(index){
          this.list[index].check=!this.list[index].check;
        },
        search(){
            console.log(this.list)
        }

    }
}
</script>