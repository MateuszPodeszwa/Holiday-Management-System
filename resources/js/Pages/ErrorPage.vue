<template>
    <div class="error-page">
        <h1>Your screen size is not supported</h1>
        <p>Please resize your screen or use a device with a larger display.</p>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage',
};
</script>

<style scoped>
.error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
}

h1 {
    font-size: 2em;
    margin-bottom: 10px;
    color: #ff6347; /* Tomato color */
}

p {
    font-size: 1.2em;
}
</style>
