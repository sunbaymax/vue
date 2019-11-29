<template>
<div class="sky">
  <div class="login">
    <div class="content">
      <h3>登录</h3>
      <div>
        <el-input placeholder="请输入用户名" v-model="name" clearable class="input_style"></el-input>
        <span v-if="error.name" class="err-msg">{{error.name}}</span>
      </div>
      <div>
        <el-input placeholder="请输入密码" v-model="pwd" show-password class="input_style"></el-input>
        <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
      </div>
      <div>
        <el-button type="primary" @click="login" class="login_style">登录</el-button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
      pwd: "",
      error: {
        name: "",
        pwd: ""
      }
    };
  },
  methods: {
    login() {
      if (this.name != "" && this.name.length > 0) {
        if (this.pwd != "" && this.pwd.length > 0) {
          let that = this;
          this.axios
            .post(
              "http://www.ccsc58.com/json/04_00_tb_admin_return.php",
              this.qs.stringify({
                admin_permit: "zjly8888",
                UserP: "w",
                admin_user: this.name,
                admin_pass: this.pwd
              }),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(
              function(res) {
                console.log(res.data);
             if (res.data.code == "10000") {
                  window.sessionStorage.setItem(
                    "items",
                    JSON.stringify(res.data.resultCode)
                  );

                  this.$message({
                    message: "登录成功",
                    type: "success"
                  });

                  that.$router.push({ path: "/Main" });
                } else {
                  this.$message.error(res.data.msg);
                }
   

                //控制台打印请求成功时返回的数据
                //bind(this)可以不用
              }.bind(this)
            )
            .catch(
              function(err) {
                console.log(2);
                if (err.response) {
                  this.$message.error(err.response.message);
                  console.log(err.response);
                  //控制台打印错误返回的内容
                }
                //bind(this)可以不用
              }.bind(this)
            );
        } else {
          this.$message.error("密码不能为空！");
        }
      } else {
        this.$message.error("用户名不能为空！");
      }
    }
  }
};
</script>

<style scoped>


.sky  {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: url("../assets/images/bg.jpg") no-repeat;
  background-position: center center;
  /* 背景图不平铺 */
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed; /*此条属性必须设置否则可能无效*/
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
}
.login {
  /* padding: 50px 100px; */
  padding: 25px 100px 50px;
  box-sizing: border-box;
  margin-top: 200px;
  width: 500px;
  margin: 200px auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  /* opacity: 0.8;
  filter: alpha(opacity=80); */
  border-radius: 15px;
  
}
.content {
  opacity: 1;
}
.input_style {
  width: 260px;
  margin-bottom: 15px;
}
.login_style {
  width: 260px;
}
</style>
