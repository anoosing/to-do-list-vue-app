import Vue from 'vue'
import TodoList from '@/components/TodoList'
import { shallowMount } from '@vue/test-utils'

describe('TodoList.vue', () => {
  const wrapper = shallowMount(TodoList)
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TodoList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('div h6').textContent).toContain('Total Records:')
  })
  it('should test actionClick method', () => {
    spyOn(wrapper.vm, '$emit')
    wrapper.vm.actionClick(1)
    expect(wrapper.vm.$emit).toHaveBeenCalled()
  })
})
