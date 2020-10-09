<template>
  <div class="news">
    <ul>
      <li>1新闻</li>
      <li>2新闻</li>
      <li>3新闻</li>
      <li>4新闻</li>
      <li>{{news}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeNews',
  data() {
    return {
      news: 'hello, news is coming'
    }
  }
}
</script>

<style>

</style>
