import { shallowMount } from '@vue/test-utils'
import SignUp from '@/components/SignUp.vue'

describe('SignUp Component unit tests', () => {

    test('is a vue instance', () => {
        const wrapper = shallowMount(SignUp, {
            props: {
                msg : 'hello world'
            }
        })  
        expect(wrapper.find(SignUp).vm);
    })
})

// describe('SignUp.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'Test Jest'
//     const wrapper = shallowMount(SignUp, {
//         props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
