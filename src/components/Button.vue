<script setup>
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

// 顏色變數
const colors = {
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
}

// 按鈕樣式組合
const buttonStyles = {
  solid: {
    secondary: `bg-secondary-500 text-white border border-secondary-500 hover:bg-secondary-600 hover:border-secondary-600 disabled:hover:bg-secondary-500`,
    success: `bg-success-500 border border-success-500 text-white hover:bg-success-600 hover:border-success-600 disabled:hover:bg-success-500`,
  },
  outline: {
    secondary: `border border-secondary-500 text-secondary-500 hover:text-white hover:bg-secondary-500 disabled:hover:bg-transparent`,
    success: `border border-success-500 text-success-500 hover:bg-success-50 disabled:hover:bg-transparent`,
  },
  ghost: {
    secondary: `text-secondary-500 hover:bg-secondary-50 disabled:hover:bg-transparent`,
    success: `text-success-500 hover:bg-success-50 disabled:hover:bg-transparent`,
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
