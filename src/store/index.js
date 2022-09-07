import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

// store
export default new Vuex.Store({

    state: {

        allTasks : [
            {name: "Learn Vue", owner: "FATIMA", status: "To do", lastUpdated: "09:00:00", todo: true, progress: false, done: false, progressRate:0},
            {name: "Learn Jest", owner: "FATIMA", status: "In Progress", lastUpdated: "12:00:00", todo: false, progress: true, done: false, progressRate:10},
            {name: "Learn VueX", owner: "FATIMA", status: "To do", lastUpdated: "09:00:00", todo: true, progress: false, done: false, progressRate:20},
            {name: "Learn Vue-Router", owner: "FATIMA", status: "Done", lastUpdated: "12:00:00", todo: false, progress: false, done: true, progressRate:0},
            {name: "Learn TypeScript", owner: "FATIMA", status: "To do", lastUpdated: "09:00:00", todo: true, progress: false, done: false, progressRate:0},
            {name: "Learn Java", owner: "FATIMA", status: "In Progress", lastUpdated: "12:00:00", todo: false, progress: true, done: false, progressRate:0}
        ]
    },

    getters: {

        getAllTasks : function(state) {
            return state.allTasks;
        }
        
    },

    mutations: {

        ADD_TASK: (state, payload) => {
            state.allTasks.push(payload)
        },

        UPDATE_TASK: (state, payload) => {
           (state.allTasks).splice(payload.index, 1, payload.task);
        }

    },

    actions: {

        addTaskAction: ({ commit }, payload) => {
            commit("ADD_TASK", payload)
        },

        updateTaskAction: ({ commit }, payload) => {
            commit("UPDATE_TASK", payload)
        }
    },

    modules: {

    }
})
