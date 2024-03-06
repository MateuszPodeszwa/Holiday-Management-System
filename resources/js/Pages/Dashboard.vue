<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import DropdownLink from "@/Components/DropdownLink.vue";
import Breadcrumb from "@/Components/Breadcrumb.vue";
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <div class="NAV-SUB-Left_side"><Breadcrumb></Breadcrumb></div>
            <div class="NAV-SUB-Right_side">sup2</div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">You're logged in!</div>
                        <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                        <DropdownLink :href="route('logout')" method="post" as="button">
                            Log Out
                        </DropdownLink>
                    <i class="fa-solid fa-square-q"></i>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
