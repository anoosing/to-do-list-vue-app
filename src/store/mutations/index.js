export default {
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
}
