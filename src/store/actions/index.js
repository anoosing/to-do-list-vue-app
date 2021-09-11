export default {
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
