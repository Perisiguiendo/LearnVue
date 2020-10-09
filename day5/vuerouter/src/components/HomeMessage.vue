<template>
  <div>
    <ul>
      <li>1消息</li>
      <li>2消息</li>
      <li>3消息</li>
      <li>4消息</li>
      <li>{{message}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeMessage',
  data() {
    return {
      message: 'hello, message is coming'
    }
  }
}
</script>

<style>

</style>
