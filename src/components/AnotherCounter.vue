<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Incremen 50</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement 50</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import * as types from '../store/types';

    export default {
        methods: {
            ...mapActions({
                asyncIncrement: types.COUNTER_INCREMENT_ASYNC,
                asyncDecrement: types.COUNTER_DECREMENT_ASYNC
            })
        }
    }
</script>