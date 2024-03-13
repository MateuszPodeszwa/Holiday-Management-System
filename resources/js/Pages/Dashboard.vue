<script>
import Breadcrumb from "@/Components/Breadcrumb.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import { Head } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Link} from "@inertiajs/vue3";

export default {
    name: 'Dashboard',
    components: {

        Breadcrumb,
        DropdownLink,
        AuthenticatedLayout,
        Head,
        Link,
    }
}
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <div class="NAV-SUB-Right_side">
                <Link :href="route('profile.edit')"><button class="SUB-NAV-Button">Settings</button></Link>
                <Link :href="route('logout')" method="post"><button class="SUB-NAV-Button">Logout</button></Link>
            </div>
        </template>

        <div class="py-12 bg-white">
                    <div class="p-6 text-gray-900">You're logged in!</div>
                        <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                        <DropdownLink :href="route('logout')" method="post" as="button">
                            Log Out
                        </DropdownLink>
                    <i class="fa-solid fa-square-q"></i>
        </div>
    </AuthenticatedLayout>
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
</style>
