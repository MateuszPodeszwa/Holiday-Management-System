<template>
    <!-- Blurred Image Component -->
    <div class="blurred-img blurred-img-blurred" id="assign-blurred">
        <img src="../../../public/images/mmw-logo-wide-high.png" loading="lazy" @load="loaded" alt=""/>
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
            const blurredElement = document.getElementById('assign-blurred')


            setTimeout(function loaded() {
                blurredImageDiv.classList.add("loaded")
                blurredElement.classList.remove('blurred-img-blurred')
            }, 5);

            if (img.complete) {
                this.loaded()
            } else {
                img.addEventListener("load", this.loaded)
            }

        },
    },
};
</script>

<style scoped>
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
    opacity: 0;
    transition: opacity 550ms ease-in-out;
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
