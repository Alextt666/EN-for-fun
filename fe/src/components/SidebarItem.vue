<template>
  <div
    :class="`p-3 flex items-center justify-center m-2 cursor-pointer rounded-md`"
  >
    <img :src="icon" alt="" />
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["icon"]);
const { icon } = props;
</script>
<style></style>
