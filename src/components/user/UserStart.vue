<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link v-for="(user, key) in users" :to='{name: "userEdit", params: {id: key} }' :key="key"> {{user.name}}</router-link>
        </ul>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    import { mapActions } from "vuex";

    export default {
        name: 'UserStart',
        data() {
            return {
            };
        },
        computed: {
            ...mapGetters({
                users: 'getUsers',
            }),
            ...mapActions(['loadUser'])
        },
        created(){
            this.$store.dispatch('loadUser');
        }
    }
</script>