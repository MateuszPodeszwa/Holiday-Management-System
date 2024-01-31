<template>

    <section class="BACKGROUND grid h-screen w-screen">

        <div class="login_box-BACKGROUND login_box-GRID">
            <div class="ITEM_1 login_box-ITEMS"><div class="img-logo"></div></div>
            <div class="ITEM_2 login_box-ITEMS">

                <span>
                    <p><label for="username">Username</label></p>
                    <input type="email" id="username" placeholder="mateuszpodeszwa@mmw.co.uk">
                </span>
                <span>
                    <p><label for="password">Password</label></p>
                    <input type="password" id="password" placeholder="********">
                </span>


            </div>
        </div>

    </section>

</template>

<script>
import MmwLogoWide from "../COMPONENTS/mmw-logo-wide.vue";
import { ref, reactive, watch } from 'vue'
import gsap from 'gsap'

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
    @use "../../sass/abstracts/variables" as externall

    // Define local variables
    $MainBackgroundColor: getColor(background, primary)
    $SecondaryBackgroundColor: getColor(background, secondary)
    $MainBackgroundComponentColor: getColor(backgroundComponents, BasicWindow)
    $LoginBoxBase: 525px
    $LoginBoxSize: (min(100vw, max($LoginBoxBase, 20vw)), min($LoginBoxBase, 100vh), 800px) // nth: 1: width, 2: height
    $BreakingPoint: externall.$MobileBreakingPoint

    // Mixin to calculate opposite shadow offset for corners
    @mixin opposite-corner-shadow-offset($offset)
        $opposite-offset: -$offset
        box-shadow: $offset $offset $SecondaryBackgroundColor, $opposite-offset $opposite-offset $MainBackgroundColor

    // Edit the background colour
    section.BACKGROUND
        background-color: $SecondaryBackgroundColor
        background: -moz-linear-gradient(90deg, $SecondaryBackgroundColor 50%, $MainBackgroundColor 50%)
        background: -webkit-linear-gradient(90deg, $SecondaryBackgroundColor 50%, $MainBackgroundColor 50%)
        background: linear-gradient(90deg, $SecondaryBackgroundColor 50%, $MainBackgroundColor 50%)
        @media (max-width: $BreakingPoint)
            background: $MainBackgroundColor

    // Edit first element in <section>
    section > :first-child
        width: nth($LoginBoxSize, 1)
        height: nth($LoginBoxSize, 2)
        place-self: center

    // Edit all elements with login_box
    [class*="login_box"]
        overflow: hidden
        color: darken($MainBackgroundComponentColor, 80)

    // Edit BACKGROUND of login_box
    .login_box-BACKGROUND
        background-color: $MainBackgroundComponentColor
        @include opposite-corner-shadow-offset(30px)

    .login_box-GRID
        display: grid
        grid-template-rows: 75px 1fr
        gap: 2.525rem
        padding: 45px

    .login_box-ITEMS
        // background-color: darken($MainBackgroundComponentColor, 2.5)
        padding: 2.5px

    .ITEM_1 > .img-logo
        background-image: url("../../../public/images/mmw-logo-wide-high.png")
        background-size: contain
        background-position: center
        background-repeat: no-repeat
        width: 100%
        height: 100%

    .ITEM_2
        display: flex
        flex-direction: column
        margin: 0 15px

        input
            height: 70px
            padding-left: 20px
            box-sizing: border-box
            margin: 0
            background-color: #C9E0F2

        span
            flex: 0
            margin: 0 0 25px 0
            padding: 0

        label, p
            margin-bottom: 15px
            line-height: 150% /* 27px */
            letter-spacing: -0.142px
            font-family: Arial


</style>

<style scoped lang="css">

</style>
