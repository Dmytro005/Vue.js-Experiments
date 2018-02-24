<template>
    <div>
        <router-link active-class='active' class="nav-item nav-link" to="/user/10">User - 10</router-link>
        <router-link active-class='active' class="nav-item nav-link" to="/user/20">User - 20</router-link>
        <h1>The User Page {{id}}</h1>
        <button class="btn btn-primary" @click="navigateHomeToHome">Go mone</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
            };
        },
        methods: {
            navigateHomeToHome() {
                this.$router.push('/');
            }
        },
        watch: {
            '$route'(to, from) {
                this.id = to.params.id;
            },
        },
    }
</script>