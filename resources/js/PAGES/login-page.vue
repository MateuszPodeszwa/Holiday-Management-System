<template>

    <section class="BACKGROUND grid h-screen w-screen background_slide-ANIMATION">
        <div class="login_box-BACKGROUND box_login-ANIMATION login_box-GRID">
            <div class="ITEM_1 login_box-ITEMS"><keep-alive><mmw-logo-wide class="img-logo" /></keep-alive></div>
            <div class="ITEM_2 login_box-ITEMS">
                <span>
                    <keep-alive><p><label for="username">{{ usernameLabel }}</label></p></keep-alive>
                    <input type="email" id="username" :placeholder="usernamePlaceholder">
                </span>
                <span>
                    <p><label for="password">{{ passwordLabel }}</label></p>
                    <input type="password" id="password" :placeholder="passwordPlaceholder">
                </span>
            </div>
        </div>
        <bottom-nav-bar class="bottom_navbar"/>
    </section>

</template>

<script>
import gsap from "gsap";
import mmwLogoWide from "../COMPONENTS/mmw-logo-wide.vue";
import bottomNavBar from "../COMPONENTS/accessibility-navbar.vue"

export default {
    name: 'LoginPage',
    components: {
        mmwLogoWide,
        bottomNavBar,
    },
    data() {
        return {
            usernamePlaceholder: "mateuszpodeszwa@mainlinemenswear.co.uk",
            passwordPlaceholder: "************",
            usernameLabel: "Username",
            passwordLabel: "Password"
        };
    },
    methods: {

    },
    mounted() {
        gsap.from(
            ".box_login-ANIMATION",
            {
                boxShadow: "0px 0px 0px 0px #4DA2D4, 0px 0px 0px 0px #107CBC",
                duration: 1.25,
                ease: "back.out(1)",
                delay: 0.8225
            }
        );
        gsap.fromTo(
            ".background_slide-ANIMATION",
            {
                background: "linear-gradient(90deg, #107CBC 0%, #4DA2D4 0%)"
            },
            {
                background: "linear-gradient(90deg, #107CBC 50%, #4DA2D4 50%)",
                delay: 0.55,
                ease: "elastic.out(1,0.80)",
                duration: 0.85
            }
        );
    }
};
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
    $ColorTitle: getColor(content, textTitle)
    $LoginBoxBase: 525px
    $LoginBoxSize: (min(100vw, max($LoginBoxBase, 20vw)), min($LoginBoxBase, 100vh), 800px) // nth: 1: width, 2: height
    $BreakingPoint: externall.$MobileBreakingPoint

    // Mixin to calculate opposite shadow offset for corners
    @mixin opposite-corner-shadow-offset($offset)
        $opposite-offset: -$offset
        box-shadow: $offset $offset $SecondaryBackgroundColor, $opposite-offset $opposite-offset $MainBackgroundColor

    // Edit the background colour
    section.BACKGROUND
        background: linear-gradient(90deg, $SecondaryBackgroundColor 50%, $MainBackgroundColor 50%)
        @media (width <= $BreakingPoint)
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
        @media (width > $BreakingPoint)
            @include opposite-corner-shadow-offset(30px)

    .login_box-GRID
        display: grid
        grid-template-rows: 75px 1fr
        gap: 2.525rem
        padding: 45px
        @media (max-width: 500px)
            padding-left: 10px
            padding-right: 10px

    .login_box-ITEMS
        // background-color: darken($MainBackgroundComponentColor, 2.5)
        padding: 2.5px

    .ITEM_1
        max-width: max(80%, 100vwmin)
        justify-self: center

    .ITEM_1 > .img-logo
        // background-image: url("../../../public/images/mmw-logo-wide-high.png")
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
            color: $ColorTitle

    input[type=text]:focus
        background-color: lightblue

</style>

<style scoped lang="css">

</style>
