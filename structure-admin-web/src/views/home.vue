<template>
  <div id="app">
    <header-bar></header-bar>
    <div class="container">
      <menu-bar ref="lefeMenu" class="sidebar-container"></menu-bar>
      <div class="right-box">
        <div class="content">
          <router-view></router-view>
        </div>
        <!-- <footer-bar></footer-bar> -->
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import headerBar from '../components/header'
  import menuBar from "../components/menu";
  import footerBar from "../components/footer";
  export default {
    data() {
      return {

      }
    },
    components: {
      headerBar,
      menuBar,
      footerBar
    }
  }
</script>

<style lang="postcss">
  html{
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    background-color: #eee !important;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }
  #app {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  a:focus,a:active{
    color: #000;
  }

  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgb(85,118,189);
  }

  *::placeholder {
    font-size: 12px;
  }

  .el-submenu .el-menu-item{
    min-width: 169px;
  }

  .container {
    height: calc(100% - 46px);
    width: 100%;
    margin: auto;
    display: flex;
  & .sidebar-container{
      transition: width 0.28s ease-out;
      width: 180px;
      overflow: auto;
      border-right: 1px solid rgb(210,226,255);
    }
  & .right-box{
      width: calc(100% - 180px);
      overflow-y: hidden;
  & .content{
      height: 100%;
      background-color: #fff;
    }
  }
  }
</style>
