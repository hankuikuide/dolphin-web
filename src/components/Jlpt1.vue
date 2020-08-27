<template>
  <div class="hot">
      <p class="hot-title">热门课堂</p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in lessions" :key="index">
          <div class="hot-swiper-content">
            <img :src="item.img " alt="">
            <div>{{item.name}}</div>
          </div>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  data() {
    return {
      images: [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg'
      ],
      lessions:[
        {
          name:'adf',
          img:'/img/1.jpg'
        },{
          name:'adf',
          img:'/img/2.jpg'
        },{
          name:'adf',
          img:'/img/3.jpg'
        },{
          name:'adf',
          img:'/img/4.jpg'
        },{
          name:'adf',
          img:'/img/1.jpg'
        },{
          name:'adf',
          img:'/img/2.jpg'
        }
      ],
      swiperOption:{
        slidesPerView:4
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
};
</script>

<style lang="scss">
.hot{
  &-title{
    width: 100%;
    height: 0.5rem;
    // padding-left: 0.2rem;
    line-height: 0.5rem;
  }
  &-swiper{
     &-content{
       width: 2rem;
       text-align: center;
       img{
         width: 2rem;
         height: 2rem;
       }
     }
  }
}

</style>

