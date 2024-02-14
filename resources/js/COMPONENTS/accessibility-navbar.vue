<template>
    <div class="Main">
            <div
                class="ub-menu-content flex items-center justify-center"
            >
                <a href="#" @click="toggleSubmenu" class="content_link flex-grow text-center">{{ accessibilityExpand }}</a>

                <transition-group name="sub-menu-animation">
                    <a v-if="showSubmenu === false" href="#" class="content_link flex-grow text-left">>></a>
                    <a :class="{ 'selected': selectedOption === 1 }" v-if="showSubmenu === false" @click="selectOption(1);" href="#" class="content_link flex-grow text-center">Option 1</a>
                    <a :class="{ 'selected': selectedOption === 2 }" v-if="showSubmenu === false" @click="selectOption(2);" href="#" class="content_link flex-grow text-center">Option 2</a>
                    <a :class="{ 'selected': selectedOption === 3 }" v-if="showSubmenu === false" @click="selectOption(3);" href="#" class="content_link flex-grow text-center">Option 3</a>
                    <a :class="{ 'selected': selectedOption === 4 }" v-if="showSubmenu === false" @click="selectOption(4);" href="#" class="content_link flex-grow text-center">Option 4</a>
                </transition-group>
                <transition-group name="sub-menu-animation">
                    <a :class="{ 'selected': selectedOption === 5 }" v-if="showSubmenu === true" @click="selectOption(5);" href="#" class="content_link flex-grow text-left">Option 5</a>
                    <a :class="{ 'selected': selectedOption === 6 }" v-if="showSubmenu === true" @click="selectOption(6);" href="#" class="content_link flex-grow text-left">Option 6</a>
                    <a :class="{ 'selected': selectedOption === 7 }" v-if="showSubmenu === true" @click="selectOption(7);" href="#" class="content_link flex-grow text-left">Option 7</a>
                    <a :class="{ 'selected': selectedOption === 8 }" v-if="showSubmenu === true" @click="selectOption(8);" href="#" class="content_link flex-grow text-left">Option 8</a>
                    <a v-if="showSubmenu === true" href="#" class="content_link flex-grow text-left">>></a>
                    <a v-if="showSubmenu === true" href="#" class="content_link flex-grow text-center">...</a>
                </transition-group>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedOption: null,
            showSubmenu: false,
            accessibilityExpand: "Accessibility Options",
        };
    },
    methods: {
        selectOption(option) {
            this.selectedOption = this.selectedOption === option ? null : option;
        },
        toggleSubmenu() {
            this.showSubmenu = !this.showSubmenu;
        },
    },
};
</script>

<style scoped lang="sass">

    $WidthBar: 70%
    $MaxHeightBar: 80px
    $BackColBar: whitesmoke
    $BottomPaddingBar: 10px
    $BorderRadiusBar: 4px
    $PaddingDefaultBar: 25px

    *
        overflow: hidden
    div.Main
        width: $WidthBar
        max-height: $MaxHeightBar
        min-height: 20px
        background-color: $BackColBar
        bottom: $BottomPaddingBar
        border-radius: $BorderRadiusBar
        justify-self: center
        margin: 0
        padding: $PaddingDefaultBar
        position: absolute
        flex-shrink: 0
        a
            // font-size: 20px
            font-style: normal
            font-weight: 700
            line-height: 150%

    .selected
        color: blue

    .sub-menu-animation-enter-active, .sub-menu-animation-leave-active
        // transition: all 1s ease
</style>
