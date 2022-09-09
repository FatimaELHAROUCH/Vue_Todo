const DashboardPage = require('../components/Dashboar.vue')
import {shallowMount} from 'test-utils';


describe('Dashboard component unit tests', () => {
    it('renders props.username when passed', () => {
        const username = 'FATIMA'
        const wrapper = shallowMount(DashboardPage, {
            propsData: { username }
        })
        expect(wrapper.text()).toMatch(username)
    })
})


// describe('Dashboard component unit tests', () => {

//     test('is a vue instance', () => {
//         const wrapper = mount(DashboardPage, {
//             propsData: {
//                 task : {
//                     name: "username",
//                     completed:  false
//                 }
//             }
//         })
//         expect(wrapper.isVueInstance()).toBeTruthy();
//     })

    // test('renders the task name', () => {

    //     const taskName = "Task 1";
    //     const wrapper = mount(Task, {
    //         propsData: {
    //             task: { name: taskName,
    //             completed: false
    //             }
    //         }
    //     });
    //     expect(wrapper.html()).toContain(taskName);

    // });

// });


