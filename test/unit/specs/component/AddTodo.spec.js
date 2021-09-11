import AddTodo from '@/components/AddTodo'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { store } from '@/store'
import Vue from 'vue'

const localVue = createLocalVue()
localVue.use(Vuex)
const component = shallowMount(AddTodo, { store, localVue, data: () => ({ error: false }) })

describe('AddTodo.vue', () => {
  it('should render correct contents', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('should test todotitle method else', () => {
    //Act
    component.setData({ todotitle: 'test' })
    component.vm.todotitle = 'test'

    //Assert
    expect(component.vm.error).toEqual(false)
    expect(store.state.newToDo).toEqual('test')
  });

  it('should test todotitle method if', done => {
    //Act
    component.setData({ todotitle: 'te' })
    component.vm.todotitle = 'te'

    //Assert
    Vue.nextTick(() => {
      expect(component.vm.error).toEqual(true)
      done()
    })
  })

})
