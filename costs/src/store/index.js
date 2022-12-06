import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costList: [],
    page: 1,
    itemsPerPage: 5
  },
  getters: {
    getList: (state) => {
      const pageCount = state.costList.length / state.itemsPerPage
      const startIdx = (state.page - 1) * state.itemsPerPage
      const endIdx = (startIdx + state.itemsPerPage <= state.costList.length) ? startIdx + state.itemsPerPage : state.costList.length
      return state.costList.slice(startIdx, endIdx)
    }
  },
  mutations: {
    setList: (state, list) => { state.costList = list },
    setPage: (state, pageNum) => { state.page = pageNum },
    nextPage: (state) => { state.page = ++state.page },
    prevPage: (state) => { state.page-- }
  },
  actions: {
    getList({ commit }) {
      return new Promise((res) => {
        setTimeout(() => {
          commit('setList', [
            { id: 1, category: 'food', value: 100, date: '21.11.2022' },
            { id: 2, category: 'transport', value: 300, date: '21.11.2022' },
            { id: 3, category: 'transport', value: 2500, date: '21.11.2022' },
            { id: 4, category: 'food', value: 40, date: '21.11.2022' },
            { id: 5, category: 'transport', value: 200, date: '22.11.2022' },
            { id: 6, category: 'food', value: 10, date: '22.11.2022' },
            { id: 7, category: 'transport', value: 500, date: '22.11.2022' }
          ])
          res()
        }, 2000)
      }
      )
    }
  },
  modules: {
  }
})
