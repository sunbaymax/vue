<template>
  <div class="container">
      <div class="left" >
        <Menu></Menu>
      </div>
      <div class="right">
          <div class="banner">
              <img src="https://about.canva.com/wp-content/uploads/sites/3/2019/04/201904%E7%94%B7%E8%A3%85%E7%94%B5%E5%95%86banner%E8%AE%BE%E8%AE%A1%E6%A8%A1%E6%9D%BF8.jpg"/>
          </div>
          <!-- <div> <img src="../assets/diannao1.jpg" alt=""></div> -->
        <div>
            <Content>
              
            </Content>
        </div> 
      </div>    
  </div>
   

    

</template>

<script>
import Menu from './Menu'
import Content from './Content'

// import Jiao from './jiaohu.js'
export default {
 components:{

        Menu,
        Content

        }, 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
 margin: 0;
 padding: 0;
}
.container{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    background: f8f8f8;
}
.left{
  width: 100px;
  height: 500px;
  float: left;
  margin-right: 10px;
  /* background:red; */
}
.right{
  width: 1000px;
  height: 500px;
  float: right;
  margin-left: 10px;
}
.right .banner{
    width: 1000px;
    height: 300px;
}
.banner img{
    width: 1000px;
    height: 260px;
    margin-top: 20px
}
</style>
