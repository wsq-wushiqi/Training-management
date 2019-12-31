"use strict";
// 引入vue和axios
import Vue from "vue";
import axios from "axios";
import router from '../router'

import {
    serveUrl,
    getConfig,
    postConfig,
  } from "./config";

// 继承vue的原型方法
Vue.prototype.axios = axios;

// 开发环境调试用户信息
// axios.interceptors.request.use(config => {
//     if (process.env.NODE_ENV === 'development') {
//       config.headers["cust_num"] = "7000374810";
//     }
//     return config;
// });

axios.interceptors.response.use(
  response => {
    let data = response.data;
    if (!data.data) {
      //   登陆成功的回调地址
      return data;
    } else {
      return data;
    }
  },
  error => ({
    code: -1,
    msg: "网络异常"
  })
);

export default {
  // API请求example
  getUserInfo: params => {
    return axios.post("/home/user/queryuser", params);
  },
  login: params => {
    return axios.post("/home/user/login", params);
  },
  logout: params => {
    return axios.post("/home/user/logout", params);
  },
  addWeekly: params => {
    return axios.post("/home/weekly/addWeekly", params);
  },
  test: params => {
    return axios.get("/home/weekly/test", params);
  },
  // 获取员工信息表
  infoList: params => {
    return axios.get("/home/infoManage/infoList", params);
  },
  // 新增员工信息
  addInfo: params => {
    return axios.get("/home/infoManage/addInfo", params);
  },
  // 删除信息
  delInfo: params => {
    return axios.post('/home/infoManage/delInfo', params);
  },
  // 修改信息
  updateInfo: params => {
    return axios.post('/home/infoManage/updateInfo', params);
  },
  // 查询
  queryInfo: params => {
    return axios.post('/home/infoManage/queryInfo', params);
  },
  // 获取个人信息
  myUserInfo: params => {
    return axios.post('/home/userInfo/getUserInfo', params)
  },
  // 修改密码
  changePwd: params => {
    return axios.post('/home/userInfo/changePwd', params)
  },
  // 重置密码
  resetPwd: params => {
    return axios.post('/home/userInfo/resetPwd', params)
  }

  /**
   * API demo
   *
   * getAPI: (params) => {
   *    getConfig.params = params.params
   *    return axios.get('xxxx.do', getConfig)
   * }
   *
   * postAPI: (params) => {
   *     return axios.post('xxxx.do', params, postConfig)
   * }
   */

}
