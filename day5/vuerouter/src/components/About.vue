<template>
  <div class="about">
    <h2>it's about</h2>
    <h2>about</h2>
    <h3>{{ msg }}</h3>
    <h4 v-for="(item,index) in this.$route.query" :key="index">{{item}}</h4>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      msg: "xxx about is already",
    };
  },
};
</script>

<style scoped>
.about {
    width: 200px;
    height: 300px;
    border: 1px solid #924f4f;
}
</style>
