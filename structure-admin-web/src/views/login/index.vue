<script src="../../router/index.js"></script>
<template>
  <div id="login">
    <div class="loginHeader">
      <h1>{{systemName}}</h1>
    </div>
    <div class="login-container">
      <div class="content_box">
        <div class="content_box_form">
          <h1>登&nbsp;&nbsp;录</h1>
          <p class="form_content" >
            <el-input placeholder="用户名" v-model="username" prefix-icon="el-icon-user" />
          </p>
          <p class="form_content" >
            <el-input :type="passwordType" placeholder="密码" prefix-icon="el-icon-lock" @keyup.enter="submit" v-model="password" >
              <i slot="suffix" style="width: 20px; margin-top: 11px;" :title="pwdTitle" :class="passwordType === 'password' ? 'el-icon-more' : 'el-icon-view'" @click="showPwd" />
            </el-input>
          </p>
          <button class="loginBtn" @click="submit">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'login',
    data() {
      return {
        username: "",
        password: "",
        passwordType: 'password',
        pwdTitle: '查看密码'
      };
    },
    computed: {
      ...mapGetters([
        'systemName'
      ])
    },
    methods: {
      ...mapActions([
        "login"
      ]),
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
          this.pwdTitle = "隐藏密码"
        } else {
          this.passwordType = 'password'
          this.pwdTitle = "显示密码"
        }
      },
      submit(){
        var username =  this.username;
        var password = this.password;
        var param = {
          username : username,
          password : password
        }
        if(username && password){
          this.login(param).then(res => {
            if(res.errno == 0 ){
              this.$message.success(res.errmsg|| '登陆成功');
              this.$router.push({ path: '/userInfo' });
            }else{
              this.$message.error(res.errmsg|| '服务开小差');
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .loginHeader {
    height: 50px;
    padding: 14px 0 14px 10%;
  }
  .login-container {
    width: 100%;
    height: calc(100vh - 78px);
    background-position: 100% 100%;
    background-image: url('../../image/金属.jpg');
    background-repeat:no-repeat;
    float: right;
  }
  .content_box {
    width: 100%;
    height: 100%;
    padding: 10% 0px;
    box-sizing: border-box;
    float: right;
    text-align: center;
  }
  .content_box_img_bg{
    position:absolute;
  }
  .content_box_form {
    box-sizing: border-box;
    display: inline-block;
    width: 370px;
    height: 350px;
    vertical-align: top;
    text-align: center;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 0 30px rgb(84, 84, 94);
  }
  .clear {
    clear: both;
  }
  h1 {
    list-style-type: none;
    font-family: PingFangSC-Regular;
    font-size: 20px;
    color: #000000;
    letter-spacing: 10px;
  }
  .form_content {
    width: 100%;
    height: 36px;
    border: 1px solid #ddd6db;
    border-radius: 5px;
    margin: 30px 0;
    position: relative;
    padding: 0;
    text-align: left;
  }
  .form_content input {
    width: 88%;
    height: 34px;
    margin: 0 6px;
    position: absolute;
    outline: none;
    border: none;
  }
  input:focus::-webkit-input-placeholder {
    color: transparent;
  }
  .form_content img {
    width: 16px;
    height: 16px;
    display: inline-block;
    margin: 8px 4px;
  }
  .phoneYZ {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-top: 20px;
  }
  .dxyz {
    width: 50%;
    display: block;
    float: left;
  }
  .dxyz img {
    vertical-align: middle;
  }
  .dxyz a {
    text-decoration: none;
    color: #4f5870;
  }
  .forget {
    display: block;
    width: 30%;
    float: right;
  }
  .forget a {
    text-decoration: none;
    color: #5375F1;
    font-size: 14px;
  }
  .loginBtn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    background-color: #4764c0;
    color: #ffffff;
    border: none;
    cursor:pointer;
  }
  .registerBtn {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    margin-top: 30px;
    color: #4f5870;
  }
  .registerBtn a {
    text-decoration: none;
    color:#5375F1;
  }
  .showUserTips {
    display: block;
    width: 100%;
    border: 1px solid red;
    float: left;
    margin-top: -20px;
    z-index: 1000;
  }
  .border {
    border: 1px solid #55aaff;
  }
  .footer {
    width: 100%;
    text-align: center;
  }
  .footer ul {
    list-style-type: none;
    margin: 50px auto 20px auto;
    width: 430px;
    text-align: center;
  }
  .footer ul li {
    float: left;
  }
  .footer ul li {
    text-decoration: none;
    font-family: PingFang-SC-Medium;
    font-size: 16px;
    color: #22366d;
    letter-spacing: 0;
    border-right: 1px solid #000000;
    border-left: 1px solid #000000;
    width: 84px;
    display: inline-block;
    font-weight: 700;
  }
  .footer ul li a {
    text-decoration: none;
  }
  .footer ul li:nth-last-of-type(1) {
    border-right: none;
  }
  .footer ul li:nth-of-type(1) {
    border-left: none;
  }
  .footerBottom {
    width: 375px;
    height: 48px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #22366d;
    letter-spacing: 0;
    line-height: 24px;
    margin: 16px auto 42px auto;
  }
  .errorTip{
    font-size: 14px;
    color:#ed4747;
  }
  .viewPassword{
    position: absolute;
    cursor: pointer;
    right: 10px;
    top: 10px;
  }
  .colorViewPassword{
    position: absolute;
    cursor: pointer;
    right: 10px;
    top: 10px;
    color:#5579ee;
  }
</style>
