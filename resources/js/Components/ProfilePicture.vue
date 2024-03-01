<template>
    <div class="NAV-Profile_Picture">
        <div class="profile-image">
            <img src="https://source.unsplash.com/random/40x40" alt="" />
        </div>
    </div>
</template>

<style lang="sass" scoped>
.NAV-Profile_Picture
    border-radius: 50%
    overflow: hidden
    width: 45px
    height: 45px

.profile-image
    width: 100%
    height: 100%
    border: 5px solid white  // Add a border around the image
    box-sizing: border-box  // Ensure the border doesn't affect the dimensions
    border-radius: 50%

img
    width: 100%
    height: 100%
    object-fit: cover  // Maintain the aspect ratio and cover the container
    border-radius: 50%  // Apply border-radius to the image
</style>
