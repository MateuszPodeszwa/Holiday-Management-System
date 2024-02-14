<template>
    <Transition name="fade"><LoadingPage v-if="isScreenSizeSupported && isLoading" /></Transition>
    <Transition name="fade-2"><router-view v-if="isScreenSizeSupported && (isLoading === false)"
    /></Transition>
    <UnsupportedScreenSize v-if="isScreenSizeSupported === false" />
</template>
<script>
import WelcomePage from './PAGES/welcome-page.vue'
import UnsupportedScreenSize from './PAGES/errorPage-screenSize.vue'
import LoadingPage from "./PAGES/loading-page.vue";
import {watch} from "vue";
export  default {
    components: {
        WelcomePage,
        UnsupportedScreenSize,
        LoadingPage,
    },
    name: 'App',
    data() {
        return {
            isScreenSizeSupported: true,
            isLoading: true,
        };
    },
    created() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    destroyed() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 250);
    },
    methods: {
        checkScreenSize() {
            const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            this.isScreenSizeSupported = screenWidth >= 320 && screenHeight >= 530;
        },
    },
    beforeRouteEnter(to, from, next) {
        // Enable loading state before entering a route
        next(vm => {
            vm.isLoading = true; //set to true
        });
    },
    beforeRouteLeave(to, from, next) {
        // Simulate an asynchronous task (e.g., fetching data)
        setTimeout(() => {
            // Disable loading state after loading is complete
            next(vm => {
                vm.isLoading = false;
            });
        }, 100); // Adjust the timeout duration as needed
    },
};
</script>
<style lang="sass">
body
    background: #4DA2D4
.fade-enter-active,
.fade-leave-active
    transition: all 2s ease

.fade-enter-from,
.fade-leave-to
    opacity: 0
    transform: scale(70%)

.fade-2-enter-active,
.fade-2-leave-active
    transition: all 0.5s ease-in-out

.fade-2-enter-from,
.fade-2-leave-to
    opacity: 0.8
    transform: scale(90%)

</style>
