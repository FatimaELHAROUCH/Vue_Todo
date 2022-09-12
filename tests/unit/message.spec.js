import { shallowMount } from '@vue/test-utils'
import Message from '@/components/message.vue'

describe('Message.vue', () => {
  it('renders props.msg when passed', () => {
    const title = 'new title'
    const wrapper = shallowMount(Message, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})


describe('Message is  a vue instance', () => {

  test('is a vue instance', () => {
      const title = 'new title'
      const wrapper = shallowMount(Message, {
        propsData: { title }
      })
      //expect(wrapper.isVueInstance()).toBeTruthy();
      expect(wrapper.vm).toBeTruthy();
  })
})
