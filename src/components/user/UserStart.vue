<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link v-for="(user, key) in users" :key="key" :to='"user/"+user.id' > {{user.name}}</router-link>
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
        beforeRouteLeave: (to, from, next) => {
            if(prompt('Are you sure you want to leave?', 'Yes')){
                next();
            }else { 
                next(false);
            }
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