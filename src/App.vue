<script setup>
import Header from './components/header/Header.vue'
import MobileHeader from './components/header/MobileHeader.vue'
import Navbar from './components/Navbar.vue'
import HeroBanner from './components/HeroBanner.vue'
import Carousel from './components/Carousel.vue'
import NewsInfo from './components/NewsInfo.vue'
</script>

<template>
  <!-- banner -->
  <HeroBanner />
  <Navbar />
  <!-- desktop header -->
  <Header className="hidden md:flex" />
  <!-- mobile header -->
  <MobileHeader className="md:hidden" />

  <main class="xl:container">
    <div class="flex flex-col md:flex-row-reverse mx-auto md:justify-end items-center">
      <!-- carousel -->
      <div class="md:mt-[64px] mt-[32px]">
        <Carousel />
      </div>
      <!-- info -->
      <NewsInfo />
    </div>

    <div class="h-[2000px] bg-[#D9D9D9] mx-[24px] mt-[72px]"></div>
  </main>
</template>

<style scoped></style>
