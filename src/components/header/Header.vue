<script setup>
import SearchBar from '@/components/SearchBar.vue'
import IconHamburgerOpen from '../icons/IconHamburgerOpen.vue'
import IconHamburgerClose from '../icons/IconHamburgerClose.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'
const isMenuExpanded = ref(false)

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
</script>

<template>
  <header
    class="border-b border-[#DDD] h-[92px] flex items-center justify-between relative"
    :class="className"
  >
    <div class="xl:container flex justify-between xl:px-[96px] md:px-[6%]">
      <div class="flex items-center gap-x-[24px]">
        <a class="menu-button" href="#" @click.prevent="toggleMenu">
          <IconHamburgerClose v-if="isMenuExpanded" />
          <IconHamburgerOpen v-else />
        </a>
        <div>
          <img src="https://placehold.co/200x48?text=Logo" alt="" />
        </div>
        <div class="hidden md:block">
          <img class="rounded-[12px]" src="https://placehold.co/192x48?text=banner" alt="" />
        </div>
      </div>
      <SearchBar className="" placeholder="請輸入關鍵字"></SearchBar>
      <div class="flex items-center">
        <span class="mr-[16px]">會員限定</span>
        <Button class="mr-[8px]" variant="outline" size="sm-d">登入</Button>
        <Button size="sm-d">加入會員</Button>
      </div>
    </div>
    <div
      class="h-[707px] w-full bg-[#F7F7F7] flex items-center justify-center text-[64px] absolute left-0 top-[92px] z-50"
      v-if="isMenuExpanded"
    >
      MENU
    </div>
  </header>
</template>
