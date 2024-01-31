<template>
    <div class="welcome-container">
        <div class="welcome-content" >
            <div><h1 :class="{ 'welcome-text-uppercase': isUppercase }" class="welcome-text">{{ welcomeMessage }}</h1></div>
            <button class="welcome-button">{{ buttonText }}</button><br>
            <button @click="toggleDarkMode" class="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-10">Click me</button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'WelcomePage',
    data() {
        return {
            welcomeMessage: "Welcome to mainline menswear holiday booking system",
            buttonText: "Explore",
            isUppercase: true,
        };
    },
    methods: {
        toggleDarkMode() {
            alert('Dark mode is on');
        }
    }
};
</script>

<style lang="sass" scoped>
// Variables
$bg-color: #4DA2D4
$text-color: #fff
$button-bg-color: #fff
$button-text-color: #4DA2D4
$isDark: false


// Styles
.welcome-container
    @if $isDark
        background-color: darken($bg-color, 40%)
    @else
        background-color: $bg-color

    height: 100vh
    display: flex
    align-items: center
    justify-content: center

    .welcome-content
        text-align: center

    .welcome-text
        color: $text-color
        font-size: 24px
        font-weight: bold


    .welcome-button
        background-color: $button-bg-color
        color: $button-text-color
        padding: 10px 20px
        border: none
        border-radius: 15px
        margin-top: 20px

    .welcome-text-uppercase
        text-transform: uppercase
</style>
