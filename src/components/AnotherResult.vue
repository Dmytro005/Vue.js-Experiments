<template>
  <div>
      <p>Another Counter is: {{ doubleCounter }}</p>
      <p>Another String counter is: {{ stringCounter }}</p>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

    export default {
        computed: {
          ...mapGetters([
              'doubleCounter',
              'stringCounter',
          ]),
        },
    }
</script>