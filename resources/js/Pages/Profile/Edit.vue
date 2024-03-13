<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import {Head, Link} from '@inertiajs/vue3';
import Breadcrumb from "@/Components/Breadcrumb.vue";
import InputError from "@/Components/InputError.vue";
import { defineEmits } from 'vue';
import {compileString} from "sass";

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

// Initialize variable to hold form errors
let formErrors = {};

// Function to handle form errors when emitted by UpdateProfileInformationForm
const handleFormErrors = (event) => {
    formErrors = event.detail;
}

// Listen for form-errors event dispatched by UpdateProfileInformationForm
window.addEventListener('form-errors', handleFormErrors);
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <div class="NAV-SUB-Right_side">
<!--                Display error here-->
                <InputError class="error_message" :message="formErrors" />
                <Link :href="route('dashboard')"><button class="SUB-NAV-Button">Dashboard</button></Link>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdateProfileInformationForm
                        :must-verify-email="mustVerifyEmail"
                        :status="status"
                        class="max-w-xl"
                    />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdatePasswordForm
                        class="max-w-xl"
                    />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <DeleteUserForm class="max-w-xl" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style lang="sass" scoped>
@use "../../../sass/components/SubmenuButtonComponent" as subMenu
</style>
