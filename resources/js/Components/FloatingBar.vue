<template>
    <div @mouseleave="toggleVisibilityOff()" @mouseenter="toggleVisibilityOn()" class="Main" :class="{ 'Main-off': isMenuHidden === true }">
        <div
            class="sub-menu-content flex items-center justify-center"
            :class="{ 'sub-menu-content-off': isMenuHidden === true }"
        >
            <a href="#" @click="toggleSubmenu" class="content_link flex-grow text-center">{{ accessibilityExpand }}</a>

            <transition-group name="sub-menu-animation">
                <a v-if="showSubmenu === false" href="#" class="content_link flex-grow text-left">>></a>
                <a v-if="showSubmenu === false" @click="selectOption(2);" href="#" class="content_link flex-grow text-center">
                    <span :class="{ 'selected': selectedOption === 2 }">Option 2</span></a>
                <a v-if="showSubmenu === false" @click="selectOption(3);" href="#" class="content_link flex-grow text-center">
                    <span :class="{ 'selected': selectedOption === 3 }">Option 3</span></a>
                <a v-if="showSubmenu === false" @click="selectOption(4);" href="#" class="content_link flex-grow text-center">
                    <span :class="{ 'selected': selectedOption === 4 }">Option 4</span></a>
            </transition-group>
            <transition-group name="sub-menu-animation">
                <a v-if="showSubmenu === true" @click="selectOption(6);" href="#" class="content_link flex-grow text-left">
                    <span :class="{ 'selected': selectedOption === 6 }">Option 6</span></a>
                <a v-if="showSubmenu === true" @click="selectOption(5);" href="#" class="content_link flex-grow text-left">
                    <span :class="{ 'selected': selectedOption === 5 }">Option 5</span></a>
                <a v-if="showSubmenu === true" @click="selectOption(7);" href="#" class="content_link flex-grow text-left">
                    <span :class="{ 'selected': selectedOption === 7 }">Option 7</span></a>
                <a v-if="showSubmenu === true" @click="selectOption(8);" href="#" class="content_link flex-grow text-left">
                    <span :class="{ 'selected': selectedOption === 8 }">Option 8</span></a>
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
            selectedOption: 0,
            showSubmenu: false,
            accessibilityExpand: "Accessibility Options",
            isMenuHidden: true,
        };
    },
    methods: {
        selectOption(option) {
            this.selectedOption = this.selectedOption === option ? 0 : option;
            if (this.selectedOption > 0)
                this.toggleVisibilityOn()
        },
        toggleSubmenu() {
            this.showSubmenu = !this.showSubmenu;
        },
        toggleVisibilityOn() {
            this.isMenuHidden = false;
        },
        toggleVisibilityOff() {
            if (!this.selectedOption > 0)
                this.isMenuHidden = true;
        },
    },
};
</script>

<style scoped lang="sass">
@use "../../sass/abstracts/variables" as externall
@use '../../sass/abstracts' as *
@use "../../sass/base" as base


$WidthBar: 70%
$MaxHeightBar: 80px
$BackColBar: getColor(backgroundComponents, BasicWindow)
$FontColor: getColor(content, textTitle)
$FontOnHover: getColor(content, textHover)
$FontSelected: getColor(content, textActive)
$BottomPaddingBar: 5px
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
    transition: padding 0.1s ease
    a
        // font-size: 20px
        font-style: normal
        font-weight: 700
        line-height: 100%
        color: $FontColor
        span:hover
            color: $FontOnHover

.selected
    color: $FontSelected

.sub-menu-content-off
    display: none
div.Main-off
    padding: 0
    height: 10px
    animation-delay: 250ms
    transition: padding 0.1s ease
</style>
