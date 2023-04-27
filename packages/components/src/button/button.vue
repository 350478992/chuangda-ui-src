// button.vue
<template>
  <button class="cd-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';
defineOptions({ name: 'cd-button' });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`cd-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
