<script>
export default {
    name: 'LoginPage',
    data() {
        return {

        };
    },
    methods: {
        goToLoginPage() {
            // Use Vue Router to navigate to the 'LoginPage'
            this.$router.push({ name: 'WelcomePage' })}
    }
};
</script>

<template>
    <router-link :to="{ name: 'WelcomePage' }">Go to Main</router-link>
    <button class="custom-button" id="loginButton" @click="goToLoginPage">Go to Login Page</button>

</template>

<style scoped lang="sass">

</style>

<style scoped lang="css">
.custom-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    background-color: #3498db; /* Blue background color */
    color: #fff; /* White text color */
    border: none; /* Remove border */
    border-radius: 5px; /* Rounded corners */
    transition: background-color 0.3s; /* Smooth transition on hover */

    /* Hover effect */
    &:hover {
        background-color: #2980b9; /* Darker blue on hover */
    }
}
</style>
