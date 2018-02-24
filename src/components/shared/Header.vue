<template>
  <ul class="nav nav-pills">
    <router-link active-class='active' class="nav-item nav-link" to="/" exact>Home</router-link>
    <router-link active-class='active' class="nav-item nav-link" to="/user">User</router-link>
  </ul>
</template>
<script>
  export default {
    name: 'Header',
  }
</script>
<style scoped>
.active {
  transition: 250ms all;
  background-color: var(--primary);
  color: white;
  transform: scale(0.8);
}
</style>
