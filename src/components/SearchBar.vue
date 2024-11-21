<script setup>
import IconSearch from './icons/IconSearch.vue'
import IconArrowDown from './icons/IconArrowDown.vue'
import Button from '@/components/Button.vue'

import { ref } from 'vue'
const isFocus = ref(false)

const props = defineProps({
  className: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="py-[10px] flex md:block">
    <div
      class="relative inline-flex items-center bg-white rounded-[32px] border border-[#DDD] md:w-[400px] w-full h-[40px] md:py-[4px]"
      :class="[isFocus ? '' : 'w-[230px] mr-auto']"
    >
      <div class="relative inline-flex items-center">
        <!-- Dropdown button -->
        <button
          class="flex items-center gap-[8px] pl-[16px] pr-[8px] hover:bg-gray-50 rounded-l-full border-r border-[#DDD]"
        >
          <span class="text-[16px] min-w-[65px] text-left leading-4">全部</span>
          <IconArrowDown />
        </button>

        <!-- Divider -->
        <div class="w-px h-6 bg-gray-200"></div>

        <!-- Search input -->
        <input
          type="text"
          :placeholder="placeholder"
          class="leading-4 flex-1 pl-[8px] bg-transparent outline-none text-gray-500 placeholder-gray-400 text-[16px] md:w-full transition-all duration-100"
          :class="[isFocus ? 'max-w-[180px] ' : 'max-w-[80px] md:max-w-full']"
          @focus="isFocus = true"
          @blur="isFocus = false"
        />
      </div>

      <!-- Search button -->
      <button class="pr-[12px] hover:bg-gray-50 rounded-r-full ml-auto">
        <IconSearch />
      </button>
    </div>
    <Button
      class="md:hidden"
      v-if="!isFocus"
      color="success"
      class-name="w-[88px] px-[8px]"
      size="sm-m"
      >加入line</Button
    >
  </div>
</template>

<style scoped>
.isMobileFocus {
}
</style>
