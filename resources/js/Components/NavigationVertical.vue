<script>
export default {
    data() {
        return {
            currentPosition: '80px', // Default to 80px
            lastScrollTop: 0, // Store the last scroll position
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
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Calculate the difference in scroll position since the last scroll event
            const delta = scrollTop - this.lastScrollTop || 0; // Calculate scroll delta

            // Calculate the new position based on the scroll delta
            // If scrolling down, `delta` will be positive, so subtracting it will move the position up
            // If scrolling up, `delta` will be negative, so subtracting it will move the position down
            const newPosition = parseInt(this.currentPosition) - delta; // Adjust position based on scroll delta

            // Ensure the new position stays within the range of 0 to 80 pixels
            const clampedPosition = Math.min(Math.max(0, newPosition), 80);

            // Update the current position with the clamped value
            this.currentPosition = clampedPosition + 'px'; // Ensure newPosition is within 0 and 80

            // Store the current scroll position for the next scroll event
            this.lastScrollTop = scrollTop; // Store current scroll position for next scroll event
        },

    },
};



</script>


<template>
    <div class="NAV-VERTICAL shadow">
        <div class="NAV-Elements">
            <p>
                Text hfkgfdgugu y ygy guy ug euglore
            </p>
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
        left: 0
        z-index: 21
        bottom: 0
        margin-top: auto
        position: fixed
        width: 65px!important
        height: calc(100% - v-bind(currentPosition))
        background: darken($SecondaryBackgroundColor, 15%)
        display: flex
        flex-direction: column

    div.NAV-VERTICAL > *
        padding-top: 0
        flex-grow: 1
</style>
