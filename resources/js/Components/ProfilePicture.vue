<template>
    <div class="NAV-Profile_Picture">
        <div class="profile-image">
            <img src="https://source.unsplash.com/random/40x40" alt="" />
        </div>
    </div>
</template>

<style lang="sass" scoped>
@use '../../sass/abstracts' as *
.NAV-Profile_Picture
    border-radius: 50%
    overflow: hidden
    width: 45px
    height: 45px

    &:hover
        .profile-image
            border: none

.profile-image
    width: 100%
    height: 100%
    border: $AvatarBorderSize solid getColor(background, accentPrimary)  // Add a border around the image
    box-sizing: border-box  // Ensure the border doesn't affect the dimensions
    border-radius: 50%
    transition: 200ms all ease

img
    width: 100%
    height: 100%
    object-fit: cover  // Maintain the aspect ratio and cover the container
    border-radius: 50%  // Apply border-radius to the image
</style>
