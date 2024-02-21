<template>
    <!-- Blurred Image Component -->
    <span class="blurred-img blurred-img-blurred" id="assign-blurred">
        <img src="../../../public/images/mmw-logo-wide-high.png" loading="lazy" @load="loaded" alt=""/>
    </span>
</template>

<script>
export default {
    data() {
        return {
            isLoaded: false,
        };
    },
    methods: {
        loaded() {
            const blurredImageDiv = document.querySelector(".blurred-img")
            const img = blurredImageDiv.querySelector("img")
            const blurredElement = document.getElementById('assign-blurred')


            setTimeout(function loaded() {
                blurredImageDiv.classList.add("loaded")
                blurredElement.classList.remove('blurred-img-blurred')
            }, 0);

            if (img.complete) {
                this.loaded()
            } else {
                img.addEventListener("load", this.loaded)
            }

        },
    },
};
</script>
//https://css-tricks.com/the-complete-guide-to-lazy-loading-images/
//https://css-tricks.com/lazy-loading-images-with-vue-js-directives-and-intersection-observer/
<style scoped>

span {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    max-width: 100%;
    height: auto;
    overflow: hidden;
}

img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 100%;
    margin: 0 auto;
}

.blurred-img {
    background-image: url("../../../public/images/mmw-logo-wide-high.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.blurred-img-blurred {
    filter: blur(3px);
}

.blurred-img::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    animation: pulse 2.5s infinite;
    background-color: white;
}

.blurred-img.loaded::before {
    animation: none;
    content: none;
}

.blurred-img img {
    opacity: 0.8;
    transition: opacity 250ms ease-in-out;
}

.blurred-img.loaded img {
    opacity: 1;
}

@keyframes pulse {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.1;
    }
    100% {
        opacity: 0;
    }
}
</style>
