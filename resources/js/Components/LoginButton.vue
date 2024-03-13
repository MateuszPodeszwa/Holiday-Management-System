<script setup>
defineProps({
    formEmail: {
        type: String,
    },
    formPassword: {
        type: String,
    },
    formProcessing: {
        type: Boolean,
    },
});
</script>

<template>
       <div
           v-show="formEmail && formPassword"
           class="Main"
           :class="{
                'primaryButton-Hidden': !formEmail || !formPassword,
                'primaryButton-Visible': formEmail && formPassword,
           }">
           <button class="buttonStyle">>
           </button>
       </div>
</template>

<style scoped lang="sass">
    .floating
        position: absolute
        right: 10%
        justify-self: center
        place-self: center

    div.Main
        background: #2d3748
        border-radius: 50%
        width: 8rem
        height: 8rem
        padding: 20px
        transition: all 100ms ease-in-out

        &:hover
            padding: 0
            transition: all 200ms ease-in

    .buttonStyle
        background: whitesmoke
        width: 100%
        height: 100%
        border-radius: 50%
        padding: 0
        margin: 0

    .primaryButton-Hidden
        animation: fadeOut 1s ease-in-out
        visibility: hidden

    .primaryButton-Visible
        animation: fadeIn 1s ease-in-out

    @keyframes fadeIn
        from
            opacity: 0
            visibility: hidden
        to
            opacity: 1
            visibility: visible

    @keyframes fadeOut
        from
            opacity: 1
            visibility: visible
        to
            opacity: 0
            visibility: hidden

    [class*="primaryButton"]
        color: black
</style>
