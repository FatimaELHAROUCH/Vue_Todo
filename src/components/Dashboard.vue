<template>

    <div class="container">

        <h2 class="text-center mt-5"> List of tasks </h2>

        <!-- inputs -->

        <div class="d-flex mt-5 ">
            <input type="text" v-model="name" placeholder="name of the task" class="form-control"/>
            <input type="text" v-model="status" placeholder="status of task" class="form-control"/>
            <input type="text" v-model="owner" placeholder="owner of the task" class="form-control"/>
            <input type="text" v-model="lastUpdated" placeholder="last updated" class="form-control"/>

            <button @click="addTask" class="btn btn-warning rounded-0">SUBMIT</button>
        </div>

        <!-- table of tasks -->
        <table class="table mt-5">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Status</th>
                    <th scope="col">Last updated</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <th scope="row">{{task.name}}</th>
                    <td>{{task.owner}}</td>
                    <td>{{task.status}}</td>
                    <td>{{task.lastUpdated}}</td>
                    <td>
                        <div @click="editTask">
                            <span class="fa fa-pen"></span>
                        </div>
                    </td>
                    <td>
                        <div @click="removeTask">
                            <span class="fa fa-trash"></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>

</template>

<script>

    export default {
        name: "DashboardPage",

        data() {
            return {
                tasks : [{name: "SLEEP", owner: "FATIMA", status: "Running", lastUpdated: "08:00:00"}],
                name: "",
                owner: "",
                status: "",
                lastUpdated: "",
                taskUpdate: false
            }
        },

        methods: {

            addTask() {
                if (!this.taskUpdate){
                    this.tasks.push({name : this.name, owner: this.owner, status: this.status, lastUpdated: this.lastUpdated});
                }
                else {
                    console.log("Task Update");
                }
            },

            editTask(index) {
                console.log("EDIT TASK", index)
                this.taskUpdate = true;
                this.tasks[index].name = this.name;

                // this.name = this.tasks[index].name;
                // this.name !== this.tasks[index].name ? this.tasks[index].name = this.name : this.tasks[index].name;
                // this.owner !== this.tasks[index].owner ? this.tasks[index].owner = this.owner : this.tasks[index].owner;
                // this.owner !== this.tasks[index].owner ? this.tasks[index].owner = this.owner : this.tasks[index].owner;
                // this.owner !== this.tasks[index].owner ? this.tasks[index].owner = this.owner : this.tasks[index].owner
            },

            removeTask(index) {
                this.tasks.splice(index, 1)
            }

            
        }

    }


</script>