<template>
    <VuePreloader
        class="VuePreloader"
        style="height: 100%"
        transition-type="fade-up"
        :loading-speed="0"
        :transition-speed="400"
        @loading-is-over="loadingIsOver"
        @transition-is-over="transitionIsOver"
    ></VuePreloader>

    <section class="BACKGROUND grid h-screen w-screen background_slide-ANIMATION">
        <div class="login_box-BACKGROUND box_login-ANIMATION login_box-GRID">
            <div class="ITEM_1 login_box-ITEMS"><mmw-logo-wide class="img-logo" /></div>
            <div class="ITEM_2 login_box-ITEMS">
                <form @submit.prevent="submit">
                <span>
                    <p><label for="username">{{ loginFormData.usernameLabel }}</label></p>
                    <input
                        type="email"
                        id="username"
                        @keyup.enter="focusOnPassword"
                        :placeholder="loginFormData.usernamePlaceholder"
                        v-model="form.email"
                        required
                        autofocus
                        autocomplete="username"
                    >
                </span>
                <span>
                    <p><label for="password">{{ loginFormData.passwordLabel }}</label></p>
                    <input
                        type="password"
                        id="password"
                        :placeholder="loginFormData.passwordPlaceholder"
                        v-model="form.password"
                        @keyup.enter="submit"
                        ref="passwordInput"
                        required
                        autocomplete="current-password"
                    >
                </span>

<!--                <span class="block">
                    <label for="checkbox_remember" class="flex items-center"><span style="flex: 1; margin-right: 15px">Remember Me</span>
                    <Checkbox id="checkbox_remember" name="remember" style="height: 25px;" v-model:checked="form.remember" />
                    </label>
                </span>
-->
                <br>
                <br>
<!--                <div class="flex items-center justify-end mt-4">
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
-->
                </form>
                <transition-group name="button-scale" id="button_scale">
                    <PrimaryButton
                        v-show="form.email && form.password"
                        @click="submit"
                        class="ms-4"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        :v-model="form.submit"
                    >
                        Log in
                    </PrimaryButton>
                </transition-group>

            </div>
        </div>
        <bottom-nav-bar v-if="shouldShowElement()" style="overflow: hidden" class="bottom_navbar" />
        <transition-group>
            <div v-if="status" class="mb-4 font-medium text-sm text-green-600">{{ status }}</div>
            <InputError class="mt-2 animation_error card" :message="form.errors.email" />
            <InputError class="mt-2 animation_error card" :message="form.errors.password" />
        </transition-group>
    </section>

</template>


<script>
import InputError from "@/Components/InputError.vue";
import Checkbox from "@/Components/Checkbox.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { VuePreloader } from 'vue-preloader';
import '/node_modules/vue-preloader/dist/style.css'
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
        InputError,
        Checkbox,
        PrimaryButton,
        VuePreloader,
    },

    props: {
        canResetPassword: {
            type: Boolean,
        },
        status: {
            type: String,
        },
    },

    // All data and variables
    data() {
        return {
            loginFormData: {
                usernamePlaceholder: "mateusz.podeszwa",
                passwordPlaceholder: "************",
                usernameLabel: "Username",
                passwordLabel: "Password",
            },
            isWindowWideEnough: true,
            isWindowTallEnough: true,
            form: useForm({
                email: '',
                password: '',
                remember: false,
            }),
            styleVariables: {
                primary: '#4DA2D4',
                secondary: '#107CBC',
            },
            defaultEmailDomain: '@mainlinemenswear.co.uk',
        };
    },

    watch: {
    },

    //Methods
    methods: {
        handleResize() {
            // Update the data properties based on the window size or any other conditions
            this.isWindowWideEnough = window.innerWidth > 940; // Adjust the width threshold as needed
            this.isWindowTallEnough = window.innerHeight > 650; // Adjust the height threshold as needed
        },
        shouldShowElement() {
            // Return the condition based on the reactive data properties
            return this.isWindowWideEnough && this.isWindowTallEnough;
        },
        focusOnPassword() {
            // Programmatically focus on the password input fields
            this.$refs.passwordInput.focus();
        },
        submit() {
            // Check if the entered email already contains "@gmail.com"
            if (!this.form.email.includes(this.defaultEmailDomain)) {
                // If not, concatenate the entered username with '@gmail.com'
                const fullEmail = this.form.email + this.defaultEmailDomain;

                // Update the email field with the full email
                this.form.email = fullEmail;
            }

            // Now you can proceed with the validation and submission
            this.form.post(route('login'), {
                onFinish: () => this.form.reset('password'),
            });
        },
        transitionIsOver(el) {
            //const docStyle = getComputedStyle(document.documentElement);
            gsap.to(".box_login-ANIMATION", {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    delay: 0,
                    ease: "power3.inOut",
                });
            gsap.to(
                ".box_login-ANIMATION",
                {
                    boxShadow: `-30px -30px ${this.styleVariables.primary}, 30px 30px ${this.styleVariables.secondary}`,
                    duration: 1,
                    ease: "back.out(1)",
                    delay: 0.75,
                }
            );
            gsap.to(
                ".background_slide-ANIMATION",
                {
                    background: `linear-gradient(90deg, ${this.styleVariables.secondary} 50%, ${this.styleVariables.primary} 50%)`,
                    delay: 0.45,
                    ease: "elastic.out(1,0.80)",
                    duration: 1,
                }
            );
            gsap.to(
                ".bottom_navbar",
                {
                    delay: 1,
                    duration: 1,
                    translateY: 0,
                    ease: "elastic.out(0.4,0.55)",
                }
            );
        },

    },

    computed: {
    },

    // Execute when page is loaded, mainly animations
    mounted() {
        // Call the method on window resize
        window.addEventListener('resize', this.handleResize);
        // Call the method initially
        this.handleResize();

        // First animation
        gsap.to(
            ".box_login-ANIMATION",
            {
                opacity: 0,
                scale: 0.8,
                duration: 0,
                delay: 0,
            }
        )

        // Second animation with a delay
        gsap.to(
            ".box_login-ANIMATION",
            {
                boxShadow: `0px 0px ${this.styleVariables.primary}, 0px 0px ${this.styleVariables.secondary}`,
            }
        );

        gsap.to(
            ".background_slide-ANIMATION",
            {
                background: `linear-gradient(90deg, ${this.styleVariables.secondary} 0%, ${this.styleVariables.primary} 0%)`,
            }
        );

        gsap.to(
            ".bottom_navbar",
            {
                translateY: +200,
            }
        );

    },
    beforeDestroy() {
        window.addEventListener('resize', this.checkScreenSize);
        // Remove the event listener to avoid memory leaks
        window.removeEventListener('resize', this.handleResize);
    },
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

.error_message, .animation_error
    position: absolute
    padding: 20px
    min-height: fit-content
    width: 360px
    background-color: indianred
    top: 60px
    justify-self: center
    margin: 0
    flex-shrink: 0
    transition: transform 1s ease


// Mixin to calculate opposite shadow offset for corners
@mixin opposite-corner-shadow-offset($offset)
    $opposite-offset: -$offset
    box-shadow: $offset $offset $SecondaryBackgroundColor, $opposite-offset $opposite-offset $MainBackgroundColor
    // If you're looking to update the colour scheme, you need to do it in JS as well. Edit GSAP animations.

*
    overflow: hidden !important

.VuePreloader
    background-color: darken($MainBackgroundColor, 30%) !important
    color: $ColorTitle !important

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
    border-radius: 0
    @media (width > $BreakingPoint)
        @include opposite-corner-shadow-offset(30px)
        border-radius: 6px

.login_box-GRID
    display: grid
    grid-template-rows: 75px 1fr
    gap: 2.525rem
    padding: 45px

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

@media only screen and (max-width: 480px)
    section, body
        overflow: auto
        max-height: 100vh
        scrollbar-width: auto
    section > :first-child
        width: 100%
        height: 100%
        place-self: center
    [class*="login_box"]
        overflow: auto
    .login_box-GRID
        display: block
        padding-left: 10px
        padding-right: 10px
    .login_box-ITEMS
        padding: 25.5px 0
    .ITEM_1
        max-width: 100%
        padding: 0 40px
        @media (width < 340px)
            padding: 0
    .ITEM_1 > .img-logo
        width: 100%
        height: auto
        @media (width < 200px)
            display: none !important
            visibility: hidden !important
    .ITEM_2
        display: inline
        margin: 0

</style>

<style scoped lang="css">

</style>
