<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ProfilePicture from '@/Components/ProfilePicture.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import FloatingBar from "@/Components/FloatingBar.vue";
import "bootstrap-icons/font/bootstrap-icons.css";
const showingNavigationDropdown = ref(false);
</script>


<template>
        <div class="min-h-screen bg-gray-500">
            <!-- Header, The Strip-->
            <nav class="NAV-Primary-Styles">
                <!-- Primary Navigation Menu -->
                <div class="NAV-Primary-Menu">
                    <!-- Logo -->
                    <div class="NAV-Left">
                        <Link :href="route('dashboard')">
                            <ProfilePicture/>
                        </Link>
                        <div class="search-container">
                            <i class="bi bi-search search-icon"></i>
                            <input type="text" class="search-input" placeholder="Search...">
                            <span class="input-label search-button">/</span>
                        </div>

                    </div>

                    <!-- Navigation Links -->
                    <div class="NAV-Middle">
                        <Link :href="route('dashboard')">
                            <a>HOLIDAYS</a>
                        </Link>
                    </div>

                    <div class="NAV-Right">
                        <button class="bi bi-question-square-fill NAV-Icon"></button>
                        <button class="bi bi-archive-fill NAV-Icon"></button>
                        <button class="bi bi-bookmark-plus-fill NAV-Icon"></button>
<!--                        <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </NavLink>
-->
                    </div>

                </div>

            </nav>

            <!-- Page Heading -->
            <header class="bg-white shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
        </div>
</template>
<style lang="sass" scoped>
// Importing local files
@use '../../sass/abstracts' as *
@use "../../sass/base" as base
@use "../../sass/abstracts/variables" as externall

// Define local variables
$MainBackgroundColor: getColor(background, primary)
$SecondaryBackgroundColor: getColor(background, secondary)
$MainBackgroundComponentColor: getColor(backgroundComponents, BasicWindow)
$ColorTitle: getColor(content, textTitle)
$BreakingPoint: externall.$MobileBreakingPoint
$InputColor: getColor(content, inputBackground)

// Controls the ribbon of the primary navbar
.NAV-Primary-Styles
    background: $SecondaryBackgroundColor   // The Colour of the NAV
    height: 80px                            // Height of the NAV

    // Makes the things to display in the perfect centre
    display: flex
    justify-content: center
    align-items: center

// Controls the items inside the primary navbar
.NAV-Primary-Menu
    display: flex
    justify-content: space-between          // Divides the space between items equally
    width: 97%                              // Makes the margin on sides

.NAV-Left, .NAV-Middle, .NAV-Right
    // Correct items to be on the vertical centre
    display: flex
    align-items: center

.NAV-Middle
    flex-grow: 0
    transform: translateX(-65%)
    // margin-left: perfect-horizontal-center(0)
    @media (width < 900px)
        display: none
    @media (width < 1150px)
        transform: translateX(-40%)
    a
        color: lighten($ColorTitle, 100%)
        font-family: Verdana, Geneva, sans-serif
        font-weight: bold
        font-size: 1.25rem
        letter-spacing: 0.5rem

.NAV-Icon
    color: $MainBackgroundComponentColor
    width: 45px
    font-size: 2.45rem
    padding: 0

    &:nth-child(2)
        margin: 0 10px

/* Basic styling for the search container */
.search-container
    position: relative
    //margin: 10px /* Adjust the margin as needed */
    margin-left: 30px
    @media (width < 490px)
        display: none

/* Style for the search icon */
.search-icon
    position: absolute
    left: 10px /* Adjust the position as needed */
    top: 50%
    transform: translateY(-50%)
    color: $ColorTitle /* Adjust the icon color as needed */

/* Style for the search input */
.search-input
    padding: 8px
    padding-left: 35px /* Ensure space for the icon */
    border: 1px solid darken($MainBackgroundComponentColor, 40%)
    background: $MainBackgroundComponentColor
    border-radius: 4px
    width: 340px /* Adjust the width as needed */
    @media (width < 1150px)
        width: 240px

/* Style for the search button */
.search-button
    position: absolute
    right: 5px /* Adjust the position as needed */
    top: 50%
    transform: translateY(-50%)
    background-color: #4CAF50 /* Adjust the background color as needed */
    color: #fff /* Adjust the text color as needed */
    border: none
    padding: 5px 15px
    border-radius: 3px
    cursor: pointer

</style>
