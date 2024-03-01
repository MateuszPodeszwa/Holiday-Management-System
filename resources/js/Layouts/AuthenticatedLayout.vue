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
                    </div>

                    <!-- Navigation Links -->
                    <div class="NAV-Middle">
                        <Link :href="route('dashboard')">
                            <a>HOLIDAYS</a>
                        </Link>
                    </div>

                    <div class="NAV-Right">
                        <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </NavLink>
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
    width: 95%                             // Ensure the menu takes up the full width

.NAV-Left, .NAV-Middle, .NAV-Right
    // Correct items to be on the vertical centre
    display: flex
    align-items: center

.NAV-Middle
    flex-grow: 0


</style>
