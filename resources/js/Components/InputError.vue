<script setup>
defineProps({
    message: {
        type: String,
    },
});
</script>

<template>
    <span v-show="message">
        <span class="text-sm text-red-600">
            {{ message }}
        </span>
    </span>
</template>
