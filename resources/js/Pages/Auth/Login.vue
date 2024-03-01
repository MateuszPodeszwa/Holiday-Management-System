<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';



defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>
    <keep-alive>
        <form @submit.prevent="submit">
            <span>
              <p><InputLabel for="email" value="Email" class="label"/></p>

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full input"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </span>
            <br>
            <span class="mt-4">
                <p><InputLabel for="password" value="Password" class="label"/></p>

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full input"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </span>

            <div class="block">
                <label class="flex items-center">
                    <Checkbox class="checkbox-fix" name="remember" v-model:checked="form.remember" />
                    <span style="flex: 1" class="text-sm text-gray-600">Remember Me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Forgot your password?
                </Link>

                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </keep-alive>
    </GuestLayout>
</template>

<style lang="sass" scoped>
    // Importing local files
    @use '../../../sass/abstracts' as *
    @use "../../../sass/base" as base
    @use "../../../sass/abstracts/variables" as externall

    // Define local variables
    $ColorTitle: getColor(content, textTitle)
    $InputColor: getColor(content, inputBackground)

    input
        height: 70px
        padding-left: 20px
        box-sizing: border-box
        margin: 0
        background-color: $InputColor

    span
        flex: 0
        margin: 10px 0 0 0
        padding: 0

    label, p
        margin-bottom: 15px
        line-height: 150% /* 27px */
        color: $ColorTitle

    .checkbox-fix
        height: 25px
        margin-right: 20px
        margin-top: 10px

</style>


