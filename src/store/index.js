import Vue from "vue"
import Vuex from "vuex"
import { deepClone } from "../utils/deepclone"

Vue.use(Vuex)
let store = new Vuex.Store({
  // 1. state
  state: {
    userInfo: {
      userId: "guojingyu.js",
      name: "郭靖宇"
    }
  },

  // // 2. getters
  getters: {
    getUserInfo(state) {
      return state.userInfo
    }
  },
  // 3. actions
  // 通常跟api接口打交道
  actions: {
    setUserInfo({ commit, state }, userInfo) {
      // 跟后台打交道
      // 调用mutaions里面的方法
      state //占位，防止eslint报错
      console.log(userInfo)
      commit("setUserInfo", userInfo)
    }
  },
  // 4. mutations
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = deepClone(userInfo)
    }
  }
})

export default store
