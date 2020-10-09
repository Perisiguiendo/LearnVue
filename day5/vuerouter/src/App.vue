<template>
  <div id="app">
    <!-- tag改变标签样式 -->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <!-- <router-link to="/about">关于</router-link> -->
    <router-link :to="{path: '/about', query: {name: 'xxx', sex: 'boy'}}">关于</router-link>
    <router-link :to="/user/+userId">我的</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'persiguiendo'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
