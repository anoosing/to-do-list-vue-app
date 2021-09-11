import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state,
  mutations,
  actions
})
// in my vuex store file
// store.watch((state) => state.toDoList, (oldValue, newValue) => {
//   if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
//     state.actualToDoList = newValue
//   }
// })
