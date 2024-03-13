<script>
export default {
    data() {
        return {
            isSticky: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Check if the user has scrolled down the page
            if (window.scrollY > 0) {
                this.isSticky = true;
            } else {
                this.isSticky = false;
            }
        }
    }
}
</script>


<template>
    <div class="NAV-VERTICAL shadow" :class="{ 'sticky': isSticky }">
        ds
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
        top: 80px
        z-index: 21
        position: fixed
        width: 70px
        height: 100%
        background: darken($SecondaryBackgroundColor, 15%)

    .sticky
        top: auto
        position: sticky
</style>
