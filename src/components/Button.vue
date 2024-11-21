<script setup>
// import { computed } from 'vue'

const props = defineProps({
  // 基本屬性
  variant: {
    type: String,
    default: 'solid',
    validator: (value) => ['solid', 'outline', 'ghost'].includes(value),
  },
  color: {
    type: String,
    default: 'secondary',
    validator: (value) => ['secondary', 'success'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm-m', 'md-m', 'sm-d', 'md-d'].includes(value),
  },
  url: {
    type: String,
    default: '',
  },
  // 狀態
  disabled: Boolean,
  // loading: Boolean,
  block: Boolean,
  // 其他
  className: {
    type: String,
    default: '',
  },
})

defineEmits(['click'])

// 尺寸樣式
const sizeStyles = {
  // mobile
  'sm-m': 'px-[16px] py-[8px] text-[16px] font-medium leading-[16px] tracking-[0.16px]',
  'md-m': 'px-[48px] py-[12px] text-[18px] font-bold leading-[27px]',
  // lg: 'h-12 px-8 text-lg',
  // desktop
  'sm-d': 'px-[16px] py-[8px] text-[16px] font-medium leading-[22px]',
  'md-d': 'px-[48px] py-[12px] text-[18px] font-bold leading-[27px]',
}

// 圖標間距
// const iconSpacing = computed(
//   () =>
//     ({
//       sm: 'mr-1.5',
//       md: 'mr-2',
//       lg: 'mr-2.5',
//     })[props.size],
// )

// 顏色變數
const colors = {
  // primary: {
  //   base: 'orange-400',
  //   hover: 'orange-500',
  //   text: 'orange-400',
  //   light: 'orange-50',
  // },
  secondary: {
    base: 'secondary-500',
    hover: 'secondary-600',
    text: 'secondary-500',
    light: 'secondary-50',
  },
  success: {
    base: 'success-500',
    hover: 'success-600',
    text: 'success-500',
    light: 'success-50',
  },
  // danger: {
  //   base: 'red-500',
  //   hover: 'red-600',
  //   text: 'red-500',
  //   light: 'red-50',
  // },
  // warning: {
  //   base: 'yellow-500',
  //   hover: 'yellow-600',
  //   text: 'yellow-500',
  //   light: 'yellow-50',
  // },
}

// 按鈕樣式組合
const buttonStyles = {
  solid: {
    // primary: `bg-orange-400 text-white hover:bg-orange-500 disabled:hover:bg-orange-400`,
    secondary: `bg-secondary-500 text-white border border-secondary-500 hover:bg-secondary-600 hover:border-secondary-600 disabled:hover:bg-secondary-500`,
    success: `bg-success-500 border border-success-500 text-white hover:bg-success-600 hover:border-success-600 disabled:hover:bg-success-500`,
    // danger: `bg-red-500 text-white hover:bg-red-600 disabled:hover:bg-red-500`,
    // warning: `bg-yellow-500 text-white hover:bg-yellow-600 disabled:hover:bg-yellow-500`,
  },
  outline: {
    // primary: `border border-orange-400 text-orange-400 hover:bg-orange-50 disabled:hover:bg-transparent`,
    secondary: `border border-secondary-500 text-secondary-500 hover:text-white hover:bg-secondary-500 disabled:hover:bg-transparent`,
    success: `border border-success-500 text-success-500 hover:bg-success-50 disabled:hover:bg-transparent`,
    // danger: `border border-red-500 text-red-500 hover:bg-red-50 disabled:hover:bg-transparent`,
    // warning: `border border-yellow-500 text-yellow-500 hover:bg-yellow-50 disabled:hover:bg-transparent`,
  },
  ghost: {
    // primary: `text-orange-400 hover:bg-orange-50 disabled:hover:bg-transparent`,
    secondary: `text-secondary-500 hover:bg-secondary-50 disabled:hover:bg-transparent`,
    success: `text-success-500 hover:bg-success-50 disabled:hover:bg-transparent`,
    // danger: `text-red-500 hover:bg-red-50 disabled:hover:bg-transparent`,
    // warning: `text-yellow-500 hover:bg-yellow-50 disabled:hover:bg-transparent`,
  },
}

const handleClick = (event) => {
  if (props.url) {
    window.location.href = props.url
  }
  emit('click', event)
}
</script>

<template>
  <button
    type="button"
    :class="[
      // Base styles
      // 'rounded-[46px] transition-all duration-200 tracking-[1px] inline-block',
      'rounded-[46px] inline-block text-center align-middle select-none cursor-pointer',
      'transition-colors duration-200',
      // Size variants
      sizeStyles[size],
      // Color & variant combinations
      buttonStyles[variant][color],
      // Disabled state
      disabled && 'opacity-50 cursor-not-allowed',
      // Full width option
      block && 'w-full',
      // Additional classes
      className,
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <!-- Content -->
    <slot></slot>
  </button>
</template>
