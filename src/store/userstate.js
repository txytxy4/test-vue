import { computed, reactive, ref } from "vue"
import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', {
  state: () => ({
    token:"",
    username:"",
    userpassword:""
  }),
  getters: {
    // double: (state) => state.count * 2,
  },
  actions: {
    // increment() {
    //   this.count++
    // },
    setToken(state,token){
      state.taken = token
    },
    setUsername(state,username){
      state.username = username
    },
    setUserpassword(state,userpassword){
      state.userpassword = userpassword
    }
  },
})