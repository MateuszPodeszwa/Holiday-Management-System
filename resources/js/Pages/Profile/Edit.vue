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

</script>
<script>
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';

export default {
    components: {
        UpdatePasswordForm
    },
    data() {
        return {
            receivedVariable: '',
            displayFormStatus: false,
        };
    },
    methods:{
        handleEvent(errors) {
            this.receivedVariable = Object.values(errors)[0];

            // Iterate through the properties of the object

            // for (const key in errors) {
            //     // Check if the property value is not empty
            //     if (errors[key]) {
            //         // If the property value is an array, concatenate each element separately
            //         if (Array.isArray(errors[key])) {
            //             errors[key].forEach((item) => {
            //                 if (item) {
            //                     // Concatenate the non-empty item to receivedVariable with a line break
            //                     this.receivedVariable += item + ' ';
            //                 }
            //             });
            //         } else {
            //             // Concatenate the non-empty property value to receivedVariable with a line break
            //             this.receivedVariable += errors[key] + ' ';
            //         }
            //     }
            // }
        },
        isFormSuccessful(isFormSubmitted){
            this.displayFormStatus = isFormSubmitted;
            return isFormSubmitted;
        },
    },
    mounted() {

    },
}
</script>
<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <div class="NAV-SUB-Right_side">
                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                ><p v-if="receivedVariable" class="error_message disable-scroll"><InputError :message="receivedVariable"/></p></Transition>
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
                        @form-errors="handleEvent"
                        @if-success="isFormSuccessful"
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
