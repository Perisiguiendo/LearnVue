<template>
  <div>
      <h2>user</h2>
      <h3>user 界面</h3>
      <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
    name: 'User',
    computed: {
      userId(){
        return this.$route.params.userId;
      }
    }
}
</script>

<style>

</style>
