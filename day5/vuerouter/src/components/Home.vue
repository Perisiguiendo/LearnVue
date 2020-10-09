<template>
  <div class="home">
    <h2>it's home</h2>
    <h2>home</h2>
    <h3>{{ msg }}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "xxx home is already",
    };
  },
};
</script>

<style scoped>
.home {
    width: 200px;
    height: 300px;
    border: 1px solid #924f4f;
}
</style>
