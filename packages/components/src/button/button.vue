// button.vue
<template>
  <button class="sw-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import './style/index.less'
import { computed } from 'vue'
defineOptions({ name: 'sw-button' })
type ButtonProps = {
  type?: string
}
const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
  return { [`sw-button--${buttonProps.type}`]: buttonProps.type }
})
</script>
