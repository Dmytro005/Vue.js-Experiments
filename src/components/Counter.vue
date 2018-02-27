<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment 100</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement 50</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import * as types from '../store/types';

    export default {
        methods: {
            ...mapActions({
                increment: types.COUNTER_INCREMENT,
                decrement: types.COUNTER_DECREMENT
            })
        }
    }
</script>