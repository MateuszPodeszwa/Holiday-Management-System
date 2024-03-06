<!-- resources/js/components/Breadcrumb.vue -->
<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" v-for="(item, index) in breadcrumbs" :key="index">
                <router-link :to="{ path: item.path }">{{ item.label }}</router-link>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            breadcrumbs: [],
        };
    },
    watch: {
        $route(to) {
            this.updateBreadcrumbs();
        },
    },
    created() {
        this.updateBreadcrumbs();
    },
    methods: {
        updateBreadcrumbs() {
            const matchedRoutes = this.$route.matched;
            this.breadcrumbs = matchedRoutes.map(route => ({
                label: route.meta.breadcrumb || route.name,
                path: route.path,
            }));
        },
    },
};
</script>

<style lang="sass" scoped>
/* Add your breadcrumb styling here */
</style>
