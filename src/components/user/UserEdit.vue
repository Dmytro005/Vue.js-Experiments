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
        <router-link class="btn btn-warning" :to="{ name: 'userEdit', params: { id: $route.params.id}}">Edit</router-link>

    </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
    name: 'UserEdit',
    computed: {
        ...mapGetters({
            users: 'getUsers',
        })
    }
}
</script>
