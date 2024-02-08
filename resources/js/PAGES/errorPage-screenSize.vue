<template>
    <div class="error-page">
        <div class="error-content">
            <h1>Error: Screen Size Not Supported</h1>
            <p>Please use a larger screen to view this content.</p>
            <br />

            <!-- Display current screen width and height -->
            <p>Current Screen Width: <b>{{ screenWidth }}px</b></p>
            <p>Current Screen Height: <b>{{ screenHeight }}px</b></p>
            <hr/>

            <!-- Display minimum required width and height -->
            <p>Minimum Screen Width: <b>{{ minWidth }}px</b></p>
            <p>Minimum Screen Height: <b>{{ minHeight }}px</b></p>
            <hr/>

            <!-- Calculate and display required resize amounts -->
            <p>Resize needed in X-axis: <b>{{ resizeX }}px</b></p>
            <p>Resize needed in Y-axis: <b>{{ resizeY }}px</b></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "UnsupportedScreenSize",
    data() {
        return {
            screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            screenHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            minWidth: 320,
            minHeight: 530,
            resizeX: Math.max(0, this.minWidth - this.screenWidth),
            resizeY: Math.max(0, this.minHeight - this.screenHeight),
        };
    },
    mounted() {
        window.addEventListener('resize', this.updateScreenInfo);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateScreenInfo);
    },
    methods: {
        updateScreenInfo() {
            this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            this.screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            // Recalculate resize amounts on window resize
            this.resizeX = Math.max(0, this.minWidth - this.screenWidth);
            this.resizeY = Math.max(0, this.minHeight - this.screenHeight);
        },
    },
}
</script>

<style scoped>
/* Styles for the error page go here */

.error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: #f7f7f7; /* Light background color */
}

.error-content {
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff; /* White background color */
}

h1 {
    color: #ff6347; /* Tomato red for the heading */
}

p {
    color: #333; /* Dark gray for the text */
    margin: 2px 0px;
}

hr {
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>
