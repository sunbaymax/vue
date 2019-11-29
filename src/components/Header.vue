<template>
  <div class="header">
    <div class="headerleft"></div>
    <div class="headerright">
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
         
            <i class="">{{obj.admin_user}}</i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>-->
            <el-dropdown-item>公司名称:{{obj.admin_realname}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="personcenter">
        <!-- <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> -->
           <el-avatar size="medium" shape="circle" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
           <router-link to="/">注销</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
      return{
           obj:{}
      }
    },
  methods: {
    say() {
      console.log(this.message);
    }
  },
  mounted: function() {
   var obj=JSON.parse(window.sessionStorage.getItem('items'));
   console.log(obj);
   this.obj=obj
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 60px;
  background: rgb(84, 92, 100);
  display: flex;
}
.headerleft {
  flex: auto;
  height: 60px;
}
.headerright {
  display: flex;
}
.headerright .personcenter {
  width: 160px;
  height: 60px;
  /* background: #dddddd; */
  display: flex;
  justify-content: start;
  align-items: center;

  margin-left: 30px;
}
.headerright a {
  color: #ffffff;
  margin-left: 30px;
  text-decoration: none;
}

.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
  /* font-family:"黑体" */
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>