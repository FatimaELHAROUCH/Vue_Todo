<template>

<div class="container">

    <img class="logo" src="../assets/logo-teams-RH-1.jpg"/>

    <h2> Login </h2>

    <div class="register">

        <input type="text" v-model="email"      class="form-control"   placeholder="Enter your email address"/>
        <input type="text" v-model="password"   class="form-control"   placeholder="Enter your password"/>

        <button @click="login" type="submit" class="register">Login</button>

        <p>
            <router-link to="signUp">Sign Up</router-link>
        </p>


    </div>

</div>

</template>

<script>

const { required, minLength, email } = require('vuelidate/lib/validators')
import axios from "axios";

export default {
    name: 'loginPage',
    data() {
        return {
            email : '',
            password: ''
        }

    },

    validations: {
        email: {
            required,
            email,
            minLength: minLength(4)
        },
        password: {
            required,
            minLength: minLength(6)
        }
    },


    methods : {

        increment() {
            this.counter ++;
        }, 

        decrement() {
            this.counter --;
        },
        

        async login() {
            
            console.log("LOGGED IN");
            let response = await axios.get("http://localhost:3000/users?email="+this.email+"&password="+this.password);
            if (response.data.length !== 0 && response.status === 200){
                console.log("Authentication succeeded", response.data);
                localStorage.setItem('user', JSON.stringify(response.data))
                this.$router.push({name :'dashboard'});
            }
            else {
                console.log("Authentication failed", response.data);
            }
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

