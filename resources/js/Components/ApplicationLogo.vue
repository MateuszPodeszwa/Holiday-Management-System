<template>
    <!-- Blurred Image Component -->
    <span>
    <img
        class="lazyload blur-up"
        data-src="http://127.0.0.1:5173/public/images/mmw-logo-wide-high.png"
        data-lowsrc="http://127.0.0.1:5173/public/images/mmw-logo-wide-low.png"
        lo
        alt="Mainline Menswear Logo"
        data-sizes="auto"
    />
</span>


</template>

<script>
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/blur-up/ls.blur-up';
import lazySizes from "lazysizes";
lazySizes.cfg.blurupMode = 'auto';
export default {
    data() {
        return {

        };
    },
    methods: {

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
    object-fit: cover;
}

img {
    width: auto; max-width: 100%;
    height: 100%;
    display: block;
    aspect-ratio: auto;
    margin: 0 auto;
}
.blur-up {
    -webkit-filter: blur(3px);
    filter: blur(3px);
    transition: filter 400ms, -webkit-filter 400ms;
}

.blur-up.lazyloaded {
    -webkit-filter: blur(0);
    filter: blur(0);
}
</style>
