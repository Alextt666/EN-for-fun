<template>
  <div
    :class="`cursor-pointer font-bold w-10 text-center rounded-md shadow-md bg-gray-100 ${
      activeMode == mode ? 'shadow-purple-200' : ''
    }`"
  >
    {{ mode }}
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["mode","activeMode"]);

</script>
<style></style>
