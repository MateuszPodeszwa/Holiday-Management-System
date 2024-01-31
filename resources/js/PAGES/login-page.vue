<template>

    <body class="w-full h-screen">

        <div class="background-SECTION h-screen">
            <div class="w-[50%]"></div>
            <div class="w-[50%]"></div>
        </div>

        <div class="loginBox-BACKGROUND loginBox-GRID_LAYOUT">
            <div class="firsRow"><mmw-logo-wide /></div>

            <div class="secondRow">
                <input type="text" placeholder="Username">
                <input type="password" placeholder="Password">
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
    $SecondaryBackgroundColor: getColor(background, secondary)
    $MainBackgroundComponentColor: getColor(backgroundComponents, BasicWindow)

    body
        position: relative

    .background-SECTION
        background-color: #1a202c
        z-index: 0
        div:first-child
            background-color: $SecondaryBackgroundColor
            float: right
        div:nth-child(2)
            background-color: $MainBackgroundColor
            float: left
        div
            height: 100vmin

    .loginBox-BACKGROUND
        background-color: $MainBackgroundComponentColor
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        z-index: 1

    .loginBox-GRID_LAYOUT
        display: grid
        grid-template-rows: 20% 80%
        div
            width: auto
            height: auto
            z-index: 2
        .firsRow
            grid-area: top
        .secondRow
            grid-area: bottom

</style>

<style scoped lang="css">

</style>
