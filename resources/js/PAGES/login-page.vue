<template>

    <body class="w-full h-full">
        <div class="flex items-center justify-center h-screen">
            <div class="loginBox-BACKGROUND p-8 w-[300px] h-[300px]">
                <!-- Logo -->
                <mmw-logo-wide />
                <input type="text" class="w-full" placeholder="Username">
                <input type="password" class="w-full" placeholder="Password">
            </div>
        </div>

    </body>

</template>

<script>
import MmwLogoWide from "../COMPONENTS/mmw-logo-wide.vue";

export default {
    name: 'LoginPage',
    components: {MmwLogoWide},
    data() {
        return {

        };
    },
    methods: {

    }
};

import mmwLogoWide from '../COMPONENTS/mmw-logo-wide.vue';
</script>

<style scoped lang="sass">
// Importing local files
@use '../../sass/abstracts' as *
@use "../../sass/base" as base

// Define local variables
$MainBackgroundColor: getColor(background, primary)
$MainBackgroundComponentColor: getColor(backgroundComponents, BasicWindow)

body
    background-color: $MainBackgroundColor

    .loginBox-BACKGROUND
        background-color: $MainBackgroundComponentColor
</style>

<style scoped lang="css">

</style>
