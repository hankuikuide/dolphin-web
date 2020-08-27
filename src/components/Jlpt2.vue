<template>
  <div class="hot">
    <p class="hot-title">所有课堂</p>
    <van-grid direction="horizontal" :column-num="3">
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <p class="hot-title">真题练习</p>
    <van-grid :border="false" :column-num="3" :gutter="10">
      <van-grid-item v-for="(item, index) in lessions" :key="index">
        <van-image :src="item.img" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>

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
      ]
    };
  },
  components: {
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

