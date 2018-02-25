<template>
    <div>
        <h3>Some User Details</h3>
        {{ $route.params.id }}
        <router-link :to="{ name: 'userEdit', params: { id: $route.params.id}}">Edit</router-link>
    </div>
</template>
<script>
    export default {
    }
</script>