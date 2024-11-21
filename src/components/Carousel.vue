<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules'
import IconArrowDownLeft from './icons/IconArrowDownLeft.vue'
import IconArrowDownRight from './icons/IconArrowDownRight.vue'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = ref([
  { image: 'https://placehold.co/300x250', title: 'Slide 1' },
  { image: 'https://placehold.co/300x250', title: 'Slide 2' },
  { image: 'https://placehold.co/300x250', title: 'Slide 3' },
  { image: 'https://placehold.co/300x250', title: 'Slide 4' },
  { image: 'https://placehold.co/300x250', title: 'Slide 5' },
])

const onSwiper = (swiper) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}
</script>

<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :cardsEffect="{
      slideShadows: false,
      // rotate: false,
      perSlideOffset: 6, // 調整卡片間的偏移距離
      // perSlideRotate: 0, // 設為 0 取消旋轉效果
    }"
    :modules="[EffectCards, Navigation, Pagination]"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :pagination="{ clickable: true }"
    class="md:w-[768px] w-[327px]"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      v-for="(slide, index) in slides"
      :key="index"
      class="bg-white rounded-[12px] md:rounded-[24px]"
    >
      <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover rounded-lg" />
    </swiper-slide>
    <!-- Custom Navigation Buttons -->
    <div class="swiper-button-prev" slot="button-prev">
      <IconArrowDownLeft />
    </div>
    <div class="swiper-button-next" slot="button-next">
      <IconArrowDownRight />
    </div>
  </swiper>
</template>

<style>
.swiper {
}

.swiper-slide {
  @apply h-[184px] md:h-[432px];
}

.swiper-button-next,
.swiper-button-prev {
  @apply w-[36px] h-[36px] md:w-[48px] md:h-[48px] flex items-center justify-center  backdrop-blur-sm rounded-full
         hover:bg-white/70 transition-all duration-200;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  @apply hidden;
}

.swiper-pagination-bullet {
  @apply w-[8px] md:w-[32px] h-[8px] rounded-[4px] bg-white opacity-60;
}

.swiper-pagination-bullet-active {
  @apply bg-white opacity-100;
}
</style>
