<template>
  <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12" :class="{ 'w-cl' : status, 'p-l' : !status}">
    <h4>{{label}}</h4>
    <h6>Total Records: {{records}}</h6>
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <template  v-for="todo in toDoList">
            <tr :value="todo.title" :key="todo.title" v-if="todo.status === status">
              <td>{{todo.title}}</td>
              <td>
                  <button class="btn" :class="{ 'btn-success' : !todo.status, 'btn-danger' : todo.status }" v-on:click="actionClick(todo)">{{actionName}}</button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: ['label', 'records', 'status', 'actionName', 'toDoList'],
  methods: {
    actionClick (todo) {
      this.$emit('action-click', todo)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-l {
  margin-left: 0.5em;
}

.w-cl {
  width: 49.5%;
}
</style>
