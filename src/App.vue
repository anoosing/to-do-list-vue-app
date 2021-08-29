<template>
  <div id="app" class="flex-column container">
    <add-todo v-on:add-to-do="$store.commit('addToDo')"></add-todo>
    <div class="flex-row list-view col-lg-12 col-md-12 col-sm-12" v-if="!actualToDoList.length">
        No pending To Do(s)
    </div>
    <div class="list-view" v-else>
      <input class="form-control" type="text" v-model="searchText" placeholder="Search to do ..." />
      <div class="list-view row">
        <div class="col">
          <todo-list actionName="Delete" label="Completed ToDo(s)" :records="completedToDos" :status="true" :toDoList="toDoList" v-on:action-click="deleteToDo"></todo-list>
        </div>
        <div class="col">
          <todo-list actionName="Complete" label="Pending ToDo(s)" :records="pendingToDos" :status="false" :toDoList="toDoList" v-on:action-click="completeToDo"></todo-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    AddTodo,
    TodoList
  },
  computed: {
    ...mapState({
      newToDo: state => state.newToDo,
      toDoList: state => state.toDoList,
      actualToDoList: state => state.actualToDoList,
      completedToDos: state => state.completedToDos,
      pendingToDos: state => state.pendingToDos,
      searchText: state => state.searchText
    }),
    searchText: {
      get () {
        return this.$store.state.searchText
      },
      set (value) {
        this.$store.commit('updateSearchText', value)
      }
    }
  },
  methods: {
    deleteToDo (todo) {
      this.$store.commit('deleteToDo', todo)
    },
    completeToDo (todo) {
      this.$store.commit('completeToDo', todo)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex-row,
.flex-column {
  display: flex;
  flex: 1;
}
.flex-row {
  flex-direction: row;
}
.flex-column {
  flex-direction: column;
}
.list-view {
  text-align: left;
  margin-top: 2em;
}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px grey;
    border-radius: 3px;
}
/* Handle */
::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 3px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: grey;
}
</style>
