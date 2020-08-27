<template>
  <div id="app">

    <router-view/>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="like-o">收藏</van-tabbar-item>
      <van-tabbar-item icon="music-o">音乐</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/about">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style lang="scss">

</style>
