<template>
  <div class="w-full h-full">
    <AudioComp></AudioComp>
    <LCard :three="three" @pre="handlePre" @next="handleNext"></LCard>
  </div>
</template>
<script setup>
import LCard from "./LCard.vue";
import AudioComp from "./AudioComp.vue";
import { useLitenStore } from "@/stores/listen.js";
import { reactive, ref, computed } from "vue";
const store = useLitenStore();
const point = ref(0);
const totalList = store.currentWordList;
// 初始化
const three = computed(() => {
  return [
    ...totalList.slice(point.value - 1),
    ...totalList.slice(point.value),
    ...totalList.slice(point.value + 1),
  ];
});

const handlePre = () => {
  point.value --;
};
const handleNext = () => {
  point.value ++;
};
</script>
<style></style>
