<template>
    <div>

        <div class="container">

            <nav>
                <router-link to="/dashboard">Back to dashboard</router-link> |
                <router-link to="/login">Logout</router-link>
            </nav>

            <h2 class="text-center mt-5"> Add a new task </h2>

            <!-- inputs -->

            <form class="taskForm">
                <div class="form-group row mt-5">
                    <label for="nameInput" class="col-sm-2 col-form-label"> Name </label>
                    <div class="col">
                        <input type="text" v-model="name"   id= "nameInput"    placeholder="Name of the task" class="form-control"/>
                    </div>
                </div>

                <div class="form-group row mt-5">
                    <label for="statusInput" class="col-sm-2 col-form-label"> Status </label>
                    <div class="col">
                        <input type="text" v-model="status" readonly="true"  id= "statusInput" placeholder="Status of task" class="form-control"/>
                    </div>
                </div>
                
                <div class="form-group row mt-5">
                    <label for="ownerInput" class="col-sm-2 col-form-label"> Owner </label>
                    <div class="col">
                        <input type="text" id= "ownerInput" v-model="owner"          placeholder="Owner of the task" class="form-control"/>
                    </div>
                </div>
                <div class="form-group row mt-5">
                    <label for="lastUpdateInput" class="col-sm-2 col-form-label"> Created At </label>
                    <div class="col">
                        <input type="text" id= "lastUpdateInput"  readonly="true" v-model="lastUpdated"    placeholder="Created At" class="form-control"/>
                    </div>
                </div>

                <button v-on:click="addTask" class="btn btn-info rounded-0 mt-5 mb-5">SUBMIT</button>
            </form>
            
        </div>
    </div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "AddTaskForm",
    data() {
        return {
            name: "",
            owner: "",
            lastUpdated: new Date(),
            status : "To Do", 
            progressRate:20

        }
    },


    methods: {

        ...mapActions(["addTaskAction"]),

        addTask() {
            this.addTaskAction({name : this.name, owner: this.owner, status: this.status, lastUpdated: this.lastUpdated, progress: this.progress, todo: true, done: false, progressRate:0})
           
            this.$router.push({name :'dashboard'});
          
            // else if (this.name || this.owner || this.status || this.lastUpdated) {
            //     this.allTasks.splice(this.taskIndex, 1, {"name" : this.name, "status" : this.status, "owner" : this.owner, "lastUpdated" : this.lastUpdated});
            // }
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

    .taskForm {
        width: 500px;
        margin: auto;
    }
</style>