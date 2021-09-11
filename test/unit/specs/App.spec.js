import App from '@/App'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { store } from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)
const component = shallowMount(App, { store, localVue })

describe('App.vue', () => {
  beforeEach(() => {
    store.commit('updateNewToDo', 'te')
    store.commit('updateSearchText', '')
    global.fetch = jest.fn(() => Promise.resolve({ json: () => [{ title: 'test', completed: false }, { title: 'test1', completed: false }] }))
    store.dispatch('initToDoList')
    store.commit('addToDo')
  })
  it('should render correct contents, test only action defined and missed mutations', () => {
    global.fetch = jest.fn(() => Promise.reject({ json: () => 'error thrown' }))
    store.dispatch('initToDoList')
    store.commit('updateNewToDo', '')
    store.commit('addToDo')
    expect(component.exists()).toBeTruthy()
  })

  it('should test searchText computed', () => {
    //Act
    component.setData({ searchText: 'test' })

    //Assert
    expect(store.state.searchText).toEqual('test')
  });

  it('should test deleteToDo method', () => {
    //Arrange
    let todo = { title: 'test', completed: false }

    //Act
    component.vm.deleteToDo(todo)

    //Assert
    expect(store.state.completedToDos).toEqual(-1)
  })

  it('should test completeToDo method', () => {
    //Arrange
    let todo = { title: 'test', completed: false }

    //Act
    component.vm.completeToDo(todo)

    //Assert
    expect(todo.completed).toEqual(true)
  })

})
