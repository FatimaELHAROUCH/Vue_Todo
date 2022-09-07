<template>

    <div class="container">

        <img class="logo" src="../assets/logo-teams-RH-1.jpg"/>

        <h2> Sign Up </h2>

        <div class="container register">

            <input type="text" v-model="name"       placeholder="Enter your name"           class="form-control"/>
            <input type="text" v-model="email"      placeholder="Enter your email address"  class="form-control"/>
            <input type="text" v-model="password"   placeholder="Enter your password"       class="form-control"/>

            <button type="submit" v-on:click="signUp">Sign Up</button>

            <p>
                <router-link to="login"> Login </router-link>
            </p>

        </div>
    </div>

</template>

<script>

import axios from "axios";

export default {

    name: 'SignUp',
    data(){
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods : {

        async signUp (){
            
            let response = await axios.post("http://localhost:3000/users", {
                email: this.email,
                name: this.name,
                password : this.password
            });

            console.log("Sign Up", response);

            if (response.status === 201) {
                console.log("User Successfully signed up", this.name)
                localStorage.setItem ('user', JSON.stringify(response.data))
                this.$router.push({name: 'dashboard'})
            }
        },

        isPasswordAllowed(password) {
            return password.length > 0 && /\d/.test(password) && /\D/.test(password);
        }
  
    }
}
</script>