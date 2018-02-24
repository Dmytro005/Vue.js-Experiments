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
    export default {
        name: 'UserStart',
        data() {
            return {
                users: [
                    {
                        id: 1,
                        name: 'User 1',
                    },
                    {
                        id: 2,
                        name: 'User 2',
                    },
                    {
                        id: 3,
                        name: 'User 3',
                    },
                ],
            };
        },
        beforeRouteLeave: (to, from, next) => {
            if(prompt('Are you sure you want to leave?', 'Yes')){
                next();
            }else { 
                next(false);
            }
        }
    }
</script>