<template>
    <div>        
        <h1>The User Page {{id}}</h1>
        <button class="btn btn-primary" @click="navigateHomeToHome">Go mone</button>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        methods: {
            navigateHomeToHome() {
                this.$router.push('/');
            }
        },
    }
</script>