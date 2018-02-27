<template>
    <p>Double counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.getters.doubleCounter;
            }
        }
    }
</script>