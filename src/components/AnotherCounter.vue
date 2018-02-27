<template>
    <div>
        <hr>
        Another Counter <br>
        <button class="btn btn-primary" @click="increment(100)">Increment with params</button>
        <button class="btn btn-primary" @click="decrement({ by: 50, duration: 2000})">Decrement with params</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
    export default {
        methods: {
          ...mapActions([
              'increment',
              'decrement',
              'asyncIncrement',
            ]),
        }
    }
</script>