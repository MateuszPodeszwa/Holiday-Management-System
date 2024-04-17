<script>
import Breadcrumb from "@/Components/Breadcrumb.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import { Head } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Link} from "@inertiajs/vue3";
import CalendarSystem from "@/Components/CalendarSystem.vue";

export default {
    name: 'Dashboard',
    components: {

        Breadcrumb,
        DropdownLink,
        AuthenticatedLayout,
        Head,
        Link,
        CalendarSystem,
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

        <div class="bg-col-main">
                    <div class="text-gray-900">You're logged in!</div>
                    <i class="fa-solid fa-square-q"></i>
        </div>
        <CalendarSystem />
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
$pageBackground: getColor(background, pageBackground)

div.bg-col-main
    background: $pageBackground
</style>
