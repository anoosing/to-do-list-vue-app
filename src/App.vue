<template>
  <div id="app" class="flex-column container">
    <add-todo :newToDo.sync="newToDo" v-on:add-to-do="addToDo"></add-todo>
    <div class="flex-row list-view col-lg-12 col-md-12 col-sm-12" v-if="!toDoList.length">
        No pending To Do(s)
    </div>
    <div class="flex-row list-view col-lg-12 col-md-12 col-sm-12" v-else>
      <todo-list actionName="Delete" label="Completed ToDo(s)" :records="completedToDos" :status="true" :toDoList="toDoList" v-on:action-click="deleteToDo">
      </todo-list>
      <todo-list actionName="Complete" label="Pending ToDo(s)" :records="pendingToDos" :status="false" :toDoList="toDoList" v-on:action-click="completeToDo">
      </todo-list>
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    AddTodo,
    TodoList
  },
  data () {
    return {
      newToDo: '',
      completedToDos: 1,
      pendingToDos: 1,
      toDoList: [
        {
          title: 'Breakfast',
          status: true
        },
        {
          title: 'Lunch',
          status: false
        }
      ]
    }
  },
  methods: {
    addToDo () {
      if (this.newToDo && !this.toDoList.some(val => val.title === this.newToDo)) {
        this.toDoList.push({ title: this.newToDo, status: false })
        this.newToDo = ''
        this.pendingToDos++
      }
    },
    deleteToDo (todo) {
      this.toDoList.splice(this.toDoList.indexOf(todo), 1)
      this.completedToDos--
    },
    completeToDo (todo) {
      todo.status = true
      this.completedToDos++
      this.pendingToDos--
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
</style>
