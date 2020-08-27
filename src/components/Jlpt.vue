<template>
  <div class="carousel">
      <van-swipe :autoplay="3000">
        <van-swipe-item class="carousel-item" v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

export default {
  data() {
    return {
      images: [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg'
      ],
    };
  },
};
</script>

<style lang="scss">
.carousel {
  height: 4rem;
  &-item{
    img{
      height: 4rem;
      width: 100%;
    }
    
  }
}

</style>

