import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    newToDo: '',
    searchText: '',
    toDoList: [],
    actualToDoList: [],
    completedToDos: 0,
    pendingToDos: 0
  },
  mutations: {
    addToDo (state) {
      if (state.newToDo && !state.toDoList.some(val => val.title === state.newToDo)) {
        state.toDoList.unshift({ title: state.newToDo, completed: false })
        state.actualToDoList.unshift({ title: state.newToDo, completed: false })
        state.newToDo = ''
        state.pendingToDos++
      }
    },
    deleteToDo (state, todo) {
      state.toDoList.splice(state.toDoList.indexOf(todo), 1)
      state.actualToDoList.splice(state.toDoList.indexOf(todo), 1)
      state.completedToDos--
    },
    completeToDo (state, todo) {
      todo.completed = true
      state.completedToDos++
      state.pendingToDos--
    },
    updateNewToDo (state, val) {
      state.newToDo = val
    },
    updateSearchText (state, val) {
      state.searchText = val
      if (state.searchText) {
        state.toDoList = state.actualToDoList.filter(val => val.title.toLowerCase().indexOf(state.searchText.toLowerCase()) !== -1)
      } else {
        state.toDoList = JSON.parse(JSON.stringify(state.actualToDoList))
      }
      state.completedToDos = state.toDoList.filter(todo => todo.completed).length
      state.pendingToDos = state.toDoList.length - state.completedToDos
    },
    updateToDoList (state, val) {
      state.toDoList = val
      state.actualToDoList = JSON.parse(JSON.stringify(state.toDoList))
      state.completedToDos = state.toDoList.filter(todo => todo.completed).length
      state.pendingToDos = state.toDoList.length - state.completedToDos
    }
  },
  actions: {
    async initToDoList ({ commit }) {
      commit(
        'updateToDoList',
        await fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(json => json)
          .catch(error => console.error(error))
      )
    }
  }
})
// in my vuex store file
// store.watch((state) => state.toDoList, (oldValue, newValue) => {
//   if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
//     state.actualToDoList = newValue
//   }
// })
