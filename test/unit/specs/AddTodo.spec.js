import Vue from 'vue'
import AddTodo from '@/components/AddTodo'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import { store } from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)
const component = shallowMount(AddTodo, { store, localVue, data: () => ({ error: true }) })

describe('AddTodo.vue', () => {
  it('should render correct contents', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('should test todotitle method', () => {
    component.setData({ todotitle: 'test' });
    spyOn(component.vm.$store, 'commit');
    component.vm.todotitle = 'test'
    console.log(JSON.stringify(component))
    expect(component.vm.$store.commit).toHaveBeenCalled()
    // expect(component.store.state.newToDo).toBe('test');
  });

})
