<template>

<div class="container">

    <img class="logo" src="../assets/logo-teams-RH-1.jpg"/>

    <h2> Login </h2>

    <div class="register">

        <input type="text" class="form-control" placeholder="Enter your email address"/>
        <input type="text" class="form-control" placeholder="Enter your password"/>

        <button @click="login" type="submit" class="register">Login</button>
        <p>
            <router-link to="signUp">Sign Up</router-link>
        </p>


    </div>

</div>

</template>

<script>

    export default {
        name: 'loginPage',
        data() {
            return {
                email : '',
                password: ''
            }

        },

        methods : {
            async login() {
                console.log("LOGGED IN");
                this.$router.push({name: 'dashboard'})
            }
        }
    }

</script>
<style>
    .register input  {
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        border: 2px solid;
    }

    .register button {
        width: 300px;
        height: 40px;
        border: 2px solid;
        background: skyblue;
        color: #ffff;
        cursor: pointer;
    }

    .logo {
        width : 100px;
    }
</style>

