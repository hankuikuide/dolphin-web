<template>
  <div class="home">
    <van-nav-bar class="home-title" title="首页" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <Jlpt></Jlpt>
    <Jlpt1></Jlpt1>
    <Jlpt2></Jlpt2>
  </div>
</template>

<script>
// @ is an alias to /src
import Jlpt from '@/components/Jlpt.vue'
import Jlpt1 from '@/components/Jlpt1.vue'
import Jlpt2 from '@/components/Jlpt2.vue'

export default {
  name: 'Home',
  components: {
    Jlpt,
    Jlpt1,
    Jlpt2
  }
}
</script>

<style lang="scss" scoped>
.home-title{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  // height: 3.125rem;
  line-height: 3.125rem;
  width: 100%;
  box-sizing: border-box;
  border-top: solid 1px #eeeeee;
  color: white;
  display: flex;
}

</style>