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

                <button v-on:submit.prevent="addTask" class="btn btn-info rounded-0 mt-5 mb-5">SUBMIT</button>

                
            </form>

        </div>
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "AddTask",
    data() {
        return {
            allTasks : [],
            tasks : [],
            name: "",
            owner: "",
            lastUpdated: "",
            taskUpdated: null,
            count: 0,
            progressRate:20

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
        console.log("mounted");
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