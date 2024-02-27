import { defineStore } from 'pinia'

//defineStore 是返回一个函数 函数命名最好有use前缀，根据函数来进行下一步操作
export const useFromWhere = defineStore('FromFromWhere', {
  state () {
    return {
      from: ''
    }
  },
  actions: {
    setFrom (payload) {
      this.from = payload
    }
  }
})

