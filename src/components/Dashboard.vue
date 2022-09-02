<template>
    <div>

        <div class="container">

            <h2 class="text-center mt-5"> Tasks Dashboard </h2>

            <!-- inputs -->
            <form>
                <div class="row">
                    <div class="col">
                        <input type="text" v-model="name"           placeholder="Name of the task" class="form-control"/>
                    </div>
                    <div class="col">
                        <input type="text" v-model="status"         placeholder="Status of task" class="form-control"/>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                        <input type="text" v-model="owner"          placeholder="Owner of the task" class="form-control"/>
                    </div>
                    <div class="col">
                        <input type="text" v-model="lastUpdated"    placeholder="Last updated" class="form-control"/>
                    </div>
                </div>
                <button v-on:click.prevent="addTask" class="btn btn-info rounded-0 mt-5 mb-5">SUBMIT</button>
            </form>

            <!-- <input type="text" v-model="filter" placeholder="Enter your filter here"/> -->

            <!-- table of tasks -->
            <table class="table mt-5">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Status</th>
                        <th scope="col">Last updated</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Change Status</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(task, index) in tasks" :key="index">
                        <th scope="row">{{task.name}}</th>
                        <td>{{task.owner}}</td>
                        <td>
                            {{task.status}}
                        </td>
                        <td>{{task.lastUpdated}}</td>
                        <td>
                            <div style="cursor: pointer;" @click.prevent="editTask(index)">
                                <span class="fa fa-pen"></span>
                            </div>
                        </td>
                        <td>
                            <div style="cursor: pointer;" @click="changeStatus(index)">
                                <div v-show = "task.done">
                                    <span class="fa-solid fa-clipboard-list"></span>
                                </div>
                                <div v-show = "task.todo">
                                    <span class="fa-solid fa-person-drowning"></span>
                                </div>
                                <div v-show = "task.progress"> 
                                    <span  class="fa-solid fa-circle-check"></span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="cursor: pointer;" @click="removeTask(index)">
                                <span class="fa fa-trash"></span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "DashboardPage",
        data() {
            return {
                allTasks : [],
                tasks : [],
                name: "",
                owner: "",
                lastUpdated: "",
                taskUpdated: null,
                count: 0,
                progressRate:20,
                filter: ''

            }
        },


        watch: {
            filter(status) {
                console.log("status")
                this.tasks = this.allTasks.filter(el => el.status.includes(status));
            }
        },

        computed: {

            ...mapGetters(["getCount", "getAllTasks"]),

            status: function () {
                console.log("status computing");
                return this.count ==  2 ? "Completed" : this.count ===  0 ? "To do" : "In progress";
            }
        },

        mounted() {
            console.log("CREATED");
            this.tasks = this.getAllTasks;
        },

        methods: {

            ...mapActions(["updateCount", "updateAllTasks"]),

            addTask() {

                if (!this.taskUpdated){
                    this.updateAllTasks({name : this.name, owner: this.owner, status: this.status, lastUpdated: this.lastUpdated, progress: this.progress, todo: true, done: false, progressRate:0})
                    return true;
                }

                else if (this.name || this.owner || this.status || this.lastUpdated) {
                    this.allTasks.splice(this.taskIndex, 1, {"name" : this.name, "status" : this.status, "owner" : this.owner, "lastUpdated" : this.lastUpdated});
                }
            },

            editTask(index) {
                // fill the inputs with the selected tasks values
                // update the task Updated value 
                this.taskUpdated = true;
                this.name = this.tasks[index].name;
                this.owner = this.tasks[index].owner;
                this.status = this.tasks[index].status;
                this.lastUpdated = this.tasks[index].lastUpdated;
            },

            removeTask(index) {
                this.tasks.splice(index, 1)
            },

            changeStatus(index) {
                this.tasks[index].todo = false;
                this.tasks[index].progress = false;
                this.tasks[index].done = false;
                this.count === 2 ? this.count = 0 : this.count += 1;
                this.tasks[index].status = this.count ===  2 ? "Completed" : this.count ===  0 ? "To do" : "In progress";
                if (this.count === 0) this.tasks[index].todo = true;
                else if (this.count === 1) this.tasks[index].progress = true;
                else this.tasks[index].done = true;
            }
        }
    }


</script>

<style>
    .center {
        margin: auto;
        position: relative;
        width: 100%;       
    }
</style>