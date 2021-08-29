<template>
  <div class="flex-row">
    <button class="btn btn-primary" v-on:click="!error && $emit('add-to-do')">+</button>
    <input type="text" placeholder="Add new to do ..." :class="{ 'error' : error, '' : !error }" class="form-control" v-model="todotitle" @keyup.enter="!error && $emit('add-to-do')" />
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data () {
    return {
      error: false
    }
  },
  computed: {
    todotitle: {
      get () {
        return this.$store.state.newToDo
      },
      set (value) {
        this.$store.commit('updateNewToDo', value)
      }
    }
  },
  watch: {
    todotitle: function (val, prevval) {
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
