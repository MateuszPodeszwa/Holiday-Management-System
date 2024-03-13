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
import Breadcrumb from "@/Components/Breadcrumb.vue";
import NavigationVertical from "@/Components/NavigationVertical.vue";
const showingNavigationDropdown = ref(false);
const appNameDashboard = import.meta.env.VITE_APP_NAME_FULL || "MAINLINE"
</script>


<template>
        <div class="min-h-screen gb-col-main">
            <!-- Header, The Strip-->
            <nav class="NAV-Primary-Styles" style="z-index: -1 !important;">
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
                            <a>{{ appNameDashboard }}</a>
                        </Link>
                    </div>

                    <div class="NAV-Right">
                        <button class="bi bi-question-square-fill NAV-Icon"></button>
                        <button class="bi bi-archive-fill NAV-Icon"></button>
                        <button class="bi bi-bookmark-plus-fill NAV-Icon"></button>
<!--                    <NavLink :href="route('dashboard')" :active="route().current('dashboard')">-->
<!--                        Dashboard-->
<!--                    </NavLink>-->
                    </div>

                </div>

            </nav>

            <!-- Page Heading -->
            <header class="shadow NAV-SUB" v-if="$slots.header">
                <div>
                    <span class="NAV-SUB-Left_side">
                        <breadcrumb />
                    </span>
                    <slot name="header" />
                </div>
            </header>

            <NavigationVertical>

            </NavigationVertical>

            <!-- Page Content -->
            <main class="p-4 max-h-full max-w-full">
                <slot class="max-h-full max-w-full" />
            </main>
        </div>
</template>
<style lang="sass" scoped>
    // Importing local files
    @use '../../sass/abstracts' as *
    @use "../../sass/base" as base
    @use "../../sass/abstracts/variables" as externall
    @use "../../sass/components/SubmenuButtonComponent" as subMenu

    // Define local variables
    $MainBackgroundColor: getColor(background, primary)
    $SecondaryBackgroundColor: getColor(background, secondary)
    $MainBackgroundComponentColor: getColor(backgroundComponents, BasicWindow)
    $ColorTitle: getColor(content, textTitle)
    $InputColor: getColor(content, inputBackground)
    $pageBackground: getColor(background, pageBackground)

    div.gb-col-main
        background: $pageBackground

    // Controls the ribbon of the primary navbar
    .NAV-Primary-Styles
        background: $SecondaryBackgroundColor           // The Colour of the NAV
        height: externall.$MainNDashboardNavbarHeight   // Height of the NAV

        // Makes the things to display in the perfect centre
        display: flex
        justify-content: center
        align-items: center
        z-index: 30 !important

    // Controls the items inside the primary navbar
    .NAV-Primary-Menu
        display: flex
        justify-content: space-between                                  // Divides the space between items equally
        width:  calc(100% - externall.$DashboardNavbarSideMargins)      // Makes the margin on sides

    .NAV-Left, .NAV-Middle, .NAV-Right
        // Correct items to be on the vertical centre
        display: flex
        align-items: center

    .NAV-Middle
        flex-grow: 0
        transform: translateX(-50%)
        // margin-left: perfect-horizontal-center(0)

        @media (width < 900px)
            display: none
        @media (width < 1150px)
            transform: translateX(-20%)

        a
            color: lighten($ColorTitle, 100%)
            font-family: Verdana, Geneva, sans-serif
            font-weight: bold
            font-size: 1.25rem
            letter-spacing: 0.5rem

    .NAV-Icon
        color: $MainBackgroundComponentColor
        width: fit-content
        min-width: 45px
        font-size: externall.$NavigationIconSize
        padding: 0
        transition: all 200ms ease

        &:nth-child(2)
            margin: 0 20px

        &:hover
            color: lighten($ColorTitle, 90%)
            font-size: calc(externall.$NavigationIconSize + 15%)
            animation: jump 100ms infinite alternate ease
            padding-bottom: 10px

    @keyframes jump
        0%
            transform: rotate(2deg)
        100%
            transform: rotate(-2deg)

    /* Basic styling for the search container */
    .search-container
        position: relative
        //margin: 10px /* Adjust the margin as needed */
        margin-left: externall.$SearchBarSpacing
        @media (width < 580px)
            display: none

    /* Style for the search icon */
    .search-icon
        position: absolute
        left: 10px
        top: 50%
        transform: translateY(-50%)
        color: $ColorTitle /* Adjust the icon color as needed */

    /* Style for the search input */
    .search-input
        padding: 8px 8px 8px 35px
        /* Ensure space for the icon */
        background: $MainBackgroundComponentColor
        border-radius: externall.$BorderRadius - 2px
        width: externall.$SearchBarWidth
        @media (width < 1150px)
            width: 240px

    /* Style for the search button */
    .search-button
        $fitContent: 2.5px
        position: absolute
        right: 3.65px + $fitContent /* Adjust the position as needed */
        top: 50%
        transform: translateY(-50%)
        background-color: $InputColor /* Adjust the background color as needed */
        color: lighten($ColorTitle, 0) /* Adjust the text color as needed */
        border: none
        padding: $fitContent 15px
        border-radius: externall.$BorderRadius / 2

        &:hover
            cursor: pointer

    .NAV-SUB
        height: 60px
        background: $MainBackgroundComponentColor
        top: 0
        z-index: 20
        position: sticky

        div
            font-size: 14px
            width: 100%
            height: 100%
            display: grid
            place-items: center start
            grid-template-columns: 1fr 1fr
            padding: 0 35px 0 externall.$DashboardNavbarSideMargins + externall.$SearchBarSpacing - 7px // Was + 15
            @media (width < 580px)
                padding: 0 externall.$DashboardNavbarSideMargins - 30px

    .ccs
        height: 100vh
</style>
