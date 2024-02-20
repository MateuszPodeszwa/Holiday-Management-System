<template>

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
        {{ status }}
    </div>

    <section class="BACKGROUND grid h-screen w-screen background_slide-ANIMATION">
        <div class="login_box-BACKGROUND box_login-ANIMATION login_box-GRID">
            <div class="ITEM_1 login_box-ITEMS"><keep-alive><mmw-logo-wide class="img-logo" /></keep-alive></div>
            <div class="ITEM_2 login_box-ITEMS">
                <form @submit.prevent="submit">
                <span>
                    <p><label for="username">{{ usernameLabel }}</label></p>
                    <input
                        type="email"
                        id="username"
                        :placeholder="usernamePlaceholder"
                        v-model="form.email"
                        required
                        autofocus
                        autocomplete="username"
                    >
                    <InputError class="mt-2" :message="form.errors.email" />
                </span>
                <span>
                    <p><label for="password">{{ passwordLabel }}</label></p>
                    <input
                        type="password"
                        id="password"
                        :placeholder="passwordPlaceholder"
                        v-model="form.password"
                        required
                        autocomplete="current-password"
                    >
                    <InputError class="mt-2" :message="form.errors.password" />
                </span>

                <span class="block">
                    <label for="checkbox_remember" class="flex items-center"><span style="flex: 1; margin-right: 15px">Remember Me</span>
                    <Checkbox id="checkbox_remember" name="remember" style="height: 25px;" v-model:checked="form.remember" />
                    </label>
                </span>

                <div class="flex items-center justify-end mt-4">
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Forgot your password?
                    </Link>

                    <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Log in
                    </PrimaryButton>
                </div>
                </form>
            </div>
        </div>
        <bottom-nav-bar class="bottom_navbar"/>
    </section>

</template>

<script setup>
// Define types, to render content using v-if
import InputError from "@/Components/InputError.vue";
import Checkbox from "@/Components/Checkbox.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {Link} from "@inertiajs/vue3";

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

// Submit
const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};

// Form
const form = useForm({
    email: '',
    password: '',
    remember: false,
});
</script>

<script>
import gsap from "gsap";
import mmwLogoWide from "@/Components/ApplicationLogo.vue";
import bottomNavBar from "@/Components/FloatingBar.vue"
import { Head, Link, useForm } from '@inertiajs/vue3';

export default {
    name: 'LoginPage',

    // All utilised components
    components: {
        mmwLogoWide,
        bottomNavBar,
    },

    // All data and variables
    data() {
        return {
            usernamePlaceholder: "mateuszpodeszwa@mainlinemenswear.co.uk",
            passwordPlaceholder: "************",
            usernameLabel: "Username",
            passwordLabel: "Password"
        };
    },

    //Methods
    methods: {

    },

    // Execute when page is loaded, mainly animations
    mounted() {
        // LOGIN BOX TWO COLOUR BORDER
        gsap.from(
            ".box_login-ANIMATION",
            {
                boxShadow: "0px 0px 0px 0px #4DA2D4, 0px 0px 0px 0px #107CBC",
                duration: 1.25,
                ease: "back.out(1)",
                delay: 0.8225
            }
        );

        // BACKGROUND SLIDE
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
@use '../../../sass/abstracts' as *
@use "../../../sass/base" as base
@use "../../../sass/abstracts/variables" as externall

// Define local variables
$MainBackgroundColor: getColor(background, primary)
$SecondaryBackgroundColor: getColor(background, secondary)
$MainBackgroundComponentColor: getColor(backgroundComponents, BasicWindow)
$ColorTitle: getColor(content, textTitle)
$LoginBoxBase: 520px
$LoginBoxSize: (min(100vw, max($LoginBoxBase, 20vw)), min(fit-content, 100vh), $LoginBoxBase) // nth: 1: width, 2: height
$BreakingPoint: externall.$MobileBreakingPoint
$InputColor: getColor(content, inputBackground)

// Mixin to calculate opposite shadow offset for corners
@mixin opposite-corner-shadow-offset($offset)
    $opposite-offset: -$offset
    box-shadow: $offset $offset $SecondaryBackgroundColor, $opposite-offset $opposite-offset $MainBackgroundColor

section, body
    overflow: hidden
    max-height: 100vh
    scrollbar-width: none

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
    border-radius: 6px
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
    // Uncomment to see the grid boundaries
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
        padding-left: 20px
        box-sizing: border-box
        margin: 0
        background-color: $InputColor

    input:focus, input:hover, input:-webkit-autofill
        background-color: $InputColor
        border: none
        box-shadow: 0 0 0 300px $InputColor inset
        -webkit-box-shadow: 0 0 0 300px $InputColor inset

    input:checked[id="checkbox_remember"], input:-webkit-autofill[id="checkbox_remember"]
        background-color: $InputColor
        border: none
        box-shadow: none !important
        -webkit-box-shadow: none !important

    input[id="username"], input[id="password"]
        width: 100%
        height: 70px

    span
        flex: 0
        margin: 10px 0 0 0
        padding: 0

    label, p
        margin: 15px 0
        line-height: 150% /* 27px */
        color: $ColorTitle

.checkbox-fix
    padding-left: 20px

</style>

<style scoped lang="css">

</style>
