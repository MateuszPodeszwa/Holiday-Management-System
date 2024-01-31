<template>
    <div :class="{ 'dark-mode': darkMode }" class="welcome-container">
        <div class="welcome-content">
            <div>
                <h1 :class="{ 'welcome-text': !darkMode, 'welcome-text-dark': darkMode }">
                    {{ welcomeMessage }}
                </h1>
            </div>
            <button :class="{ 'dark-button': darkMode }" class="welcome-button">{{ buttonText }}</button>
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
            darkMode: false, // Set this variable to true or false as needed
        };
    },
};
</script>

<style lang="sass" scoped>
// Variables
$bg-color-light: #4DA2D4
$text-color-light: #fff
$button-bg-color-light: #fff
$button-text-color-light: #4DA2D4

$bg-color-dark: #1f1f1f
$text-color-dark: #fff
$button-bg-color-dark: #333
$button-text-color-dark: #fff

// Styles
.welcome-container
    height: 100vh
    display: flex
    align-items: center
    justify-content: center

.welcome-content
    text-align: center

.welcome-text
    font-size: 24px
    font-weight: bold

.welcome-text-dark
    // Dark mode text styles
    font-size: 26px
    color: $text-color-dark

.welcome-button
    padding: 10px 20px
    border: none
    border-radius: 15px
    margin-top: 20px

// Light mode styles
.welcome-container.dark-mode
    background-color: $bg-color-dark

.welcome-text-dark-mode
    // Dark mode text styles
    font-size: 26px
    color: $text-color-dark

.welcome-button.dark-mode
    background-color: $button-bg-color-dark
    color: $button-text-color-dark
</style>
