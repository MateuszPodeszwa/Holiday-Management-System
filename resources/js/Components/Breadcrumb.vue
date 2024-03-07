<template>
    <i v-if="route().current('dashboard')"
       class="bi bi-house-fill NAV-Icon">
    </i>
    <i v-else-if="route().current('profile.edit')"
       class="bi bi-gear-fill NAV-Icon">
    </i>
    <span class="ml-1" v-html="formattedAddress"></span>
</template>

<script>
export default {
    data() {
        return {
            baseUrl: "",
            sections: [],
            formattedAddress: "",
        };
    },
    mounted() {
        // Get the current URL
        const currentUrl = window.location.href;

        // Determine the base URL dynamically
        this.baseUrl = window.location.origin + "/";

        // Remove the base URL from the current URL
        const relativeUrl = currentUrl.replace(this.baseUrl, "");

        // Split the relative URL into sections using '/'
        this.sections = relativeUrl.split('/');

        // Make the last word bold and link to the current URL
        this.formattedAddress = this.sections.map((section, index) => {
            if (index === this.sections.length - 1) {
                // If it's the last word, make it bold and link to the current URL
                return `<a href="${this.baseUrl}${relativeUrl}"><b>${section}</b></a>`; // Replace formattedAddress with sections
            } else {
                return section;
            }
        }).join(' / ');
    },
};
</script>

<style lang="sass" scoped>
span
    text-transform: uppercase

    a
        text-decoration: none
        color: inherit

    b
        font-weight: bold
</style>
