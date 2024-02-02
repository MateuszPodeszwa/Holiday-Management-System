<template>
    <!-- Blurred Image Component -->
    <div class="blurred-img">
        <img src="../../../public/images/highres.jpg" loading="lazy" @load="loaded" />
    </div>
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
            function loaded() {
                blurredImageDiv.classList.add("loaded")
            }

            if (img.complete) {
                loaded()
            } else {
                img.addEventListener("load", loaded)
            }
        },
    },
};
</script>

<style scoped>
.blurred-img {
    background-image: url("../../../public/images/lowres.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
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
    opacity: 0;
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
