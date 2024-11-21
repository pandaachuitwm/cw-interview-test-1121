<script setup>
import axios from 'axios'
import IconPlay from '@/components/icons/IconPlay.vue'
import Button from '@/components/Button.vue'

import { ref, onMounted } from 'vue'

const sources = ref([])
const loading = ref(false)
const error = ref(null)

const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const API_URL = `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}&country=ca`

const fetchSources = async () => {
  loading.value = true
  error.value = null

  try {
    const response = await axios.get(API_URL)
    sources.value = response.data.sources
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to fetch news sources'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchSources()
})
</script>
<template>
  <div
    v-if="sources.length"
    class="mt-[16px] md:mt-[116px] md:mr-[45px] md:ml-[96px] md:w-[412px] w-[327px]"
  >
    <div class="flex gap-[12px] text-[14px] mb-[12px]">
      <!-- tag -->
      <span class="inline-flex items-center bg-black/60 rounded-[12px] text-white px-[8px]"
        ><IconPlay></IconPlay>影音</span
      >
      <!-- hashtag -->
      <ul class="flex gap-[12px] text-[#B38E5B]">
        <li>#不分癌</li>
        <li>#常見治療問題</li>
        <li class="md:hidden">#常見問題</li>
      </ul>
    </div>
    <h2 class="text-[32px] font-bold leading-[48px] md:mb-[96px] mb-[48px] line-clamp-4">
      {{ sources[0].description }}
    </h2>
    <div class="flex justify-center">
      <Button :url="sources[0].url" variant="outline" size="md-d">立即閱讀</Button>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
