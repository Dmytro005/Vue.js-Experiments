<template>
    <div>
        <hr>
        Another Counter <br>
        <button class="btn btn-primary" @click="increment(100)">Increment with params</button>
        <button class="btn btn-primary" @click="decrement({ by: 50, duration: 2000})">Decrement with params</button>
        <br>
        <input type="text" v-model="value">
        <p>{{ value }}</p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
    export default {
      computed: {
        value: {
          get() {
            return this.$store.getters.value;
          },
          set(value) {
            this.$store.dispatch('updateValue', value);
          }
        }
      },
      methods: {
        ...mapActions([
            'increment',
            'decrement',
            'asyncIncrement',
          ]),
      }
    }
</script>