<template>

    <div>

        <div class="container">

            <nav>
                <router-link to="/addTask">Add task</router-link> |
                <router-link to="/login">Logout</router-link>
            </nav>

            <h2 class="text-center mt-5"> List of tasks </h2>

            <input style="float:left" type="text" v-model="filter" placeholder="Enter your status filter here"/>

            <!-- table of tasks -->
            <table class="table mt-5">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Status</th>
                        <th scope="col">Created at</th>
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

            <form v-if="update" type="submit" >
                
                <div class="form-group row mt-5">
                    <div class="col">
                        <input type="text" v-model="name"   id= "nameInput"    placeholder="Name of the task" class="form-control"/>
                    </div>

                    <div class="col">
                        <input type="text" v-model="status" readonly="true"  id= "statusInput"      placeholder="Status of task" class="form-control"/>
                    </div>

                    <div class="col">
                        <input type="text" id= "ownerInput" v-model="owner"       placeholder="Owner of the task" class="form-control"/>
                    </div>

                    <div class="col">
                        <input type="text" id= "lastUpdateInput"  readonly="true" v-model="lastUpdated"    placeholder="Created At" class="form-control"/>
                    </div>


                </div>
                <button v-on:click.prevent="updateTask()" :disabled="!taskUpdated && !isChanged" class="btn btn-info rounded-0 mt-3 mb-5" style="width:100px">UPDATE</button>

            </form>


        </div>
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import { required } from 'vuelidate';

    export default {
        name: "DashboardPage",
        props : ["username"],
        data() {
            return {
                allTasks : [],
                tasks : [],
                name: "",
                owner: "",
                status: '',
                lastUpdated: "",
                taskUpdated: false,
                filter: '',
                isChanged: false,
                taskIndex: null,
                update : false,
            }
        },
        // validations() {
        //     return {
        //         name: { 
        //             required 
        //         },
        //         owner: {
        //             required
        //         }
        //     }
        // },
        watch: {
            filter(status) {
                this.tasks = this.allTasks.filter(el => el.status.includes(status));
            },

            name: function(newValue, oldValue) {
                // If "name" ever changes.
                if (oldValue !== newValue && oldValue !== "" && newValue !== "") {
                    this.isChanged = true;
                }
            },

            owner: function(newValue, oldValue) {
                // If "name" ever changes.
                if (oldValue !== newValue && oldValue !== "" && newValue !== "") {
                    this.isChanged = true;
                }
            }
        },   

        computed: {

            ...mapGetters(["getAllTasks"])

        },

        mounted() {
            console.log("dashboard of tasks is created");
            this.allTasks = this.getAllTasks;
            this.tasks = this.getAllTasks;
        },

        methods: {

            ...mapActions([ "updateTaskAction"]),

            updateTask() {
                this.taskUpdated = true;
                let todo = this.status === "To do" ? true : false;
                let progress = this.status === "In Progress" ? true : false
                let done = this.status === "Done" || this.status === "In review" ? true : false
                if (this.isChanged) {
                    this.updateTaskAction({
                        index : this.taskIndex,
                        task : {"name" : this.name, "owner" : this.owner, "status" : this.status, "lastUpdated" : this.lastUpdated, todo: todo, progress: progress, done: done}
                    })
                }

                this.resetForm();
            },

            editTask(index) {
                // fill the inputs with the selected tasks values
                // update the task Updated value 
                this.name = this.tasks[index].name;
                this.owner = this.tasks[index].owner;
                this.status = this.tasks[index].status;
                this.lastUpdated = this.tasks[index].lastUpdated;
                this.taskIndex = index;
                this.update = true;
            },

            removeTask(index) {
                this.tasks.splice(index, 1)
            },

            changeStatus(index) {

                if (this.tasks[index].status  !== "In review") {
                    this.tasks[index].todo = false;
                    this.tasks[index].progress = false;
                    this.tasks[index].done = false;
                    this.tasks[index].status = this.tasks[index].status ===  "To do" ? "In progress" : this.tasks[index].status ===  "In progress" ? "Completed" : "In review";
                }
                
                if (this.tasks[index].status ===  "to do") this.tasks[index].todo = true;
                else if (this.tasks[index].status ===  "In progress") this.tasks[index].progress = true;
                else this.tasks[index].done = true;
            },

            resetForm() {
                this.name = "";
                this.owner = "";
                this.status = "";
                this.lastUpdated = "";
                this.taskUpdated = false;
                this.isChanged = false;
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

    .buttonUpdate{

    }
</style>