<template>

    <div class="container">

        <h2> Sign Up </h2>

        <div class="container">

            <input type="text" v-model="name" placeholder="Enter your name" class="form-control"/>
            <input type="text" v-model="email" placeholder="Enter your email address" class="form-control"/>
            <input type="text" v-model="password" placeholder="Enter your password" class="form-control"/>

            <button type="submit" v-on:click="signUp">Sign Up</button>
        </div>
    </div>

</template>

<script>

    export default {

        name: 'SignUp',
        data(){
            return {
                name: '',
                email: '',
                password: ''
            }
        }
    }
</script>