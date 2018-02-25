<template>
    <div>
        <h3>Edit the User</h3>
        <pre>
            {{
                users[$route.params.id]
            }}
        </pre>
        <ul>
            <li v-for="(row, index, key) in users[$route.params.id]" :key="index">
                <label for="">{{ index }}</label>
                <input type="text" v-model="users[$route.params.id][index]"> <br><br>
            </li>
        </ul>
        <router-link class="btn btn-warning" :to="{ path: '/user'}">back</router-link>
        <button class="btn btn-primary" @click='saveEditedUser($route.params.id)'>Edit</button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
    name: 'UserEdit',
    computed: {
        ...mapGetters({
            users: 'getUsers',
        }),
        ...mapActions(['saveUserEdits']),
    },
    methods: {
        saveEditedUser(id){
            console.log(this.users[id]);
            this.$store.dispatch('saveUserEdits', id);
        }
    },
}
</script>
