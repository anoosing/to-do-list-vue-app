<template>
  <div class="flex-row">
    <button class="btn btn-primary" v-on:click="!error && $emit('add-to-do')">+</button>
    <input type="text" placeholder="Add new to do ..." :class="{ 'error' : error, '' : !error }" class="form-control" :value="newToDo" @change="$emit('update:newToDo', $event.target.value)" @keyup.enter="!error && $emit('add-to-do')" />
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  props: ['newToDo'],
  data () {
    return {
      error: false
    }
  },
  watch: {
    newToDo: function (val, prevval) {
      if (val && val.length < 3) {
        this.error = true
      } else {
        this.error = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control.error:focus,
.error {
  border: 1px solid red;
  box-shadow: none
}
</style>
