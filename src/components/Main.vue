<template>
  <div class="content">
<el-container>
  <el-aside width="200px"><vLeftMenu></vLeftMenu></el-aside>
  <el-container>
    <el-header> <vheader></vheader></el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>



  </div>
</template>

<script>
import Header from "./Header";
import LeftMenu from "./LeftMenu";

// import Jiao from './jiaohu.js'
export default {
  components: {
   vheader:Header,
    vLeftMenu:LeftMenu
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
   position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {

    background: rgb(84, 92, 100);
  color: rgb(84, 92, 100);
  text-align: center;

 
  min-height:100vh;

}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
