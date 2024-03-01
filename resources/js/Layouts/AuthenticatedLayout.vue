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
    <div>
        <div class="min-h-screen bg-gray-500">
            <!-- Header, The Strip-->
            <nav class="NAV-Primary-Styles">
                <!-- Primary Navigation Menu -->
                <div class="NAV-Primary-Menu">
                    <!-- Logo -->
                    <div class="NAV-Left">
                        <Link :href="route('dashboard')">
                            <ApplicationLogo style="max-width: 140px" class="block h-9 fill-current text-gray-800"/>
                        </Link>
                    </div>

                    <!-- Navigation Links -->
                    <div class="NAV-Middle">
                        <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </NavLink>
                    </div>

                    <div class="NAV-Right">
                        <ProfilePicture>
                            O
                        </ProfilePicture>
                    </div>

                </div>

                <!-- Responsive Navigation Menu -->
                <div
                    :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
                    class="sm:hidden"
                >
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">
                                {{ $page.props.auth.user.name }}
                            </div>
                            <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')"> Profile </ResponsiveNavLink>
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
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
$LoginBoxBase: 520px
$LoginBoxSize: (min(100vw, max($LoginBoxBase, 20vw)), min(fit-content, 100vh), $LoginBoxBase) // nth: 1: width, 2: height
$BreakingPoint: externall.$MobileBreakingPoint
$InputColor: getColor(content, inputBackground)

// Controls the ribbon of the primary navbar
.NAV-Primary-Styles
    background: $SecondaryBackgroundColor
    height: 80px
    display: flex
    justify-content: space-between

// Controls the items inside the primary navbar
.NAV-Primary-Menu
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    align-items: center
    padding: 1rem

.NAV-Left, .NAV-Middle, .NAV-Right
    display: flex
    align-items: center
    justify-content: center
    flex-direction: row
    position: absolute

.NAV-Right
    right: 20px

.NAV-Left
    left: 20px

.NAV-Middle
    left: 50%
    right: 50%

</style>
