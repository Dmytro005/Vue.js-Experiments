<template>
    <h3>Edit the User</h3>
</template>
<script>
export default {
  beforeRouteEnter: (to, from, next) => {
            if (false) { 
                next();
            } else {
                next(false);
            }
        }
}
</script>
