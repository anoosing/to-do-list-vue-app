import TodoList from '@/components/TodoList'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { store } from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)
const component = shallowMount(TodoList, { store, localVue })

describe('TodoList.vue', () => {
  it('should render correct contents', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('should test actionClick method', () => {
    //Act
    component.vm.actionClick(1)

    //Assert
    expect(component.emitted('action-click')).toBeTruthy()
  })

})
