import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    newToDo: '',
    toDoList: [
      {
        title: 'Breakfast',
        status: true
      },
      {
        title: 'Lunch',
        status: false
      }
    ],
    completedToDos: 1,
    pendingToDos: 1
  },
  mutations: {
    addToDo (state) {
      if (state.newToDo && !state.toDoList.some(val => val.title === state.newToDo)) {
        state.toDoList.push({ title: state.newToDo, status: false })
        state.newToDo = ''
        state.pendingToDos++
      }
    },
    deleteToDo (state, todo) {
      state.toDoList.splice(state.toDoList.indexOf(todo), 1)
      state.completedToDos--
    },
    completeToDo (state, todo) {
      todo.status = true
      state.completedToDos++
      state.pendingToDos--
    }
  }
})
