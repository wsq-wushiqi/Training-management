<template>
  <header class="header">
    <div class="header-box">
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <div class="header-logo">
            企业员工培训管理
          </div>
        </el-col>
        <el-col :span="11">
          <el-row type="flex" justify="end">
            <el-dropdown>
              <div v-if="userInfo" class="header-user-name">
                <img v-if="userInfo.u_sex === '女'" height="30px" align="center" src="../image/头像 女孩.png" alt="头像">
                <img v-else height="30px" align="center" src="../image/头像 男孩.png" alt="头像">
                <span v-if="userInfo">{{userInfo.u_username}}</span>
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link to="/userInfo">个人中心</router-link>
                </el-dropdown-item>
                <el-dropdown-item divided>
                  <span style="display:block" @click="signOut()">退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
   export default {
    name: 'Header',
    data() {
      return {
        username: ''
      }
    },
    computed: {
      ...mapGetters([
        "userInfo"
      ])
      
    },
    mounted() {
    },
     methods: {
       ...mapActions([
         "logout"
       ]),
       signOut() {
         this.logout().then(res => {
           if(res.errno == 0){
             this.$router.push({ path: '/login' });
             this.$store.commit("USER_INFO", {});
           }
         })
       }
     }
  }

</script>

<style lang="postcss" scoped>
.header {
  color: #fff;
  font-size: 14px;
  background: #3a79ff;
  height: 46px;
  line-height: 46px;
  font-weight: 700;
  box-shadow: 0 2px 10px 0 rgb(0, 0, 0, 0.4);
  & .header-box{
    width: 100%;
    margin: 0 auto;
    background-color: rgb(85,118,189);
  }
  & .header-user-name {
    cursor: pointer;
    color: #fff;
  }
}
</style>
