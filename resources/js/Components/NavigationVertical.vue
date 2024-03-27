<script>
import { gsap } from 'gsap';

export default {
    data() {
        return {
            currentPosition: '80px', // Default to 80px
            lastScrollTop: 0, // Store the last scroll position
            isMenuExpanded: false,
            menuWidth: 65, // Initial width of the menu
            expandValue: 350,
            animationDuration: '1s',
        };
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Get the current scroll position
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

            // Calculate the scroll distance since the last scroll event
            const scrollDelta = scrollTop - this.lastScrollTop;

            // If scrolling down
            if (scrollDelta > 0 && parseInt(this.currentPosition) > 0) {
                // Decrease currentPosition by the scroll distance, but ensure it doesn't go below 0
                this.currentPosition = Math.max(0, parseInt(this.currentPosition) - scrollDelta) + 'px';
            }
            // If scrolling up and within 80 pixels or fewer from the top of the page
            else if (scrollDelta < 0 && scrollTop <= 80) { // Should be 80
                // Increase currentPosition by 1 pixel, but ensure it doesn't exceed 80px
                this.currentPosition = Math.min(80, parseInt(this.currentPosition) - scrollDelta) + 'px';
            }

            // Store the current scroll position for the next scroll event
            this.lastScrollTop = scrollTop; // Store current scroll position for next scroll event
        },
        expandMenu () {
            // Toggle the isMenuExpanded flag
            this.isMenuExpanded = !this.isMenuExpanded;

            // Define the target width based on the expanded state
            const targetWidth = this.isMenuExpanded ? this.expandValue : 65;

            // Animate the menu width change using GSAP
            gsap.to(this.$refs.menu,
                {
                    width: targetWidth,
                    duration: .01, // Must be .01 - Duration controlled in CSS
                    delay: 0,
                });

        },
    },


};


</script>


<template>
    <div class="NAV-VERTICAL shadow" :style="{ width: menuWidth + 'px' }" ref="menu" :class="{'addShadow' : isMenuExpanded}">
        <div class="NAV-Elements">
            <div v-show="!isMenuExpanded">
                <button class="bi bi-list" @click="expandMenu"></button>
                <p class="pt-4">
                    The menu is not brrr
                </p>
            </div>
            <div v-show="isMenuExpanded">
                <div class="Elements-Expanded">
                    <div class="Elements-Col-1">
                        <p class="mainline">Mainline</p>
                        <p class="menswear">Menswear</p>
                    </div>
                    <div class="Elements-Col-2">
                        <p>Collapse</p>
                        <button class="bi bi-list" @click="expandMenu"></button>
                    </div>
                </div>
                <p class="pt-4">
                    The menu goes brrr
                </p>
            </div>
        </div>
    </div>
</template>

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
    $InputColor: getColor(content, inputBackground)
    $pageBackground: getColor(background, pageBackground)

    div.NAV-VERTICAL
        // Position the sidebar
        left: 0         // Ensure it is on the left
        bottom: 0       // Ensure it places the bottom place
        z-index: 1      // Must be 1, must be lower than <nav> and higher than header

        padding-top: v-bind(currentPosition)    // DON'T TOUCH
        position: fixed                         // Makes it stay on scroll
        height: 100vh                           // Take 100vh, don't change. It covers the gaps on scroll.

        // Decorative
        background: darken($SecondaryBackgroundColor, 15%)
        display: flex
        flex-direction: column
        overflow-y: hidden // Hide the overflow

        transition: width 200ms ease-in-out
        animation-delay: 0s

        & > * // Makes the any first element inside NAV-VERTICAL
            padding: 0
            flex-grow: 1

    .addShadow
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.5)

    div.NAV-Elements > :first-child button
        color: white
        font-size: 45px
        width: 100% // Set to 100% if wish to have it in the middle
        transform: translateY(-2.5px)
        height: 60px

    div.NAV-Elements > div div.Elements-Expanded
        display: grid
        grid-template-columns: repeat(2, 1fr)
        justify-items: start
        height: externall.$MainSubmenuWidth
        border-bottom: 1.5px solid rgb(255, 255, 255, 0.3)
        position: relative

        & *
            align-self: center
            color: white

        .Elements-Col-2
            grid-column: 2 / 3
            display: flex
            justify-self: right
            button
                transform: translateY(+1.5px)
            p
                font-size: small
                text-decoration: underline
                padding: 0 4px

        .Elements-Col-1
            grid-column: 1 / 2
            padding-left: 20px

            p.mainline
                transform: translateY(+4px)
                font-size: 1.5rem * 0.8
                font-weight: bolder

            p.menswear
                transform: translateY(-4px)
                font-size: .9rem * 0.8
                font-weight: 400
</style>
