<script setup>
import SearchBar from '@/components/SearchBar.vue'
import IconHamburgerOpen from '../icons/IconHamburgerOpen.vue'
import IconHamburgerClose from '../icons/IconHamburgerClose.vue'
import Button from '@/components/Button.vue'

import { ref, onMounted, onUnmounted } from 'vue'
const isMenuExpanded = ref(false)
const isMenuFixed = ref(false)
const isSearchExpanded = ref(false)
const lastScrollY = ref(0)

const props = defineProps({
  // 其他
  className: {
    type: String,
    default: '',
  },
})

const toggleMenu = () => {
  isMenuExpanded.value = !isMenuExpanded.value
}

// 設定

const handleScroll = () => {
  const currentScrollY = window.scrollY

  // 判斷滾動方向
  if (currentScrollY > lastScrollY.value) {
    // 向下滾動：顯示 Header A
    isSearchExpanded.value = false
  } else {
    // 向上滾動：顯示 Header B
    isSearchExpanded.value = true
    isMenuExpanded.value = false
  }

  isMenuFixed.value = currentScrollY > 274

  // 更新上次滾動位置
  lastScrollY.value = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="bg-white w-full"
    :class="[className, isMenuFixed ? 'fixed top-0 left-0 z-10' : '']"
  >
    <div class="border-b border-[#DDD] h-[60px] flex items-center bg-white relative">
      <div class="px-[18px] w-full">
        <div v-if="!isSearchExpanded" class="flex justify-between">
          <!-- Logo -->
          <div class="flex items-center gap-x-[12px] md:gap-x-[24px] mr-auto">
            <a class="flex items-center" href="#" @click.prevent="toggleMenu">
              <span class="w-[24px] h-[24px] inline-block">
                <IconHamburgerClose v-if="isMenuExpanded" />
                <IconHamburgerOpen v-else />
              </span>
            </a>
            <div>
              <img src="https://placehold.co/136x29?text=Logo" alt="" />
            </div>
          </div>
          <div class="flex items-center">
            <Button variant="outline" size="sm-m">登入</Button>
          </div>
        </div>
        <!-- Search -->
        <div v-else>
          <SearchBar></SearchBar>
        </div>
      </div>
      <div
        class="w-full h-[707px] bg-[#F7F7F7] flex flex-col md:flex-row items-center md:justify-center justify-start absolute left-0 top-[60px] z-50"
        v-if="isMenuExpanded"
      >
        <div class="pt-[16px]">
          <img class="rounded-[12px]" src="https://placehold.co/192x48?text=banner" alt="" />
        </div>
        <div class="flex items-center justify-center text-[64px] pt-[117px]">MENU</div>
      </div>
    </div>
  </header>
</template>
