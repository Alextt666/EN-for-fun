<template>
  <div class="w-full h-full">
    <AudioComp></AudioComp>
    <LCard :three="three" @pre="handlePre" @next="handleNext"></LCard>
    <Tips @click="handleTips" v-show="tips">
      <div class="w-full text-center text-gray-600 italic text-sm mt-5">
        Tips💡: ⬆ 打开提示 Enter 确认答题 轻点关闭提示
      </div>
    </Tips>
  </div>
</template>
<script setup>
import LCard from "./LCard.vue";
import AudioComp from "./AudioComp.vue";
import { useLitenStore } from "@/stores/listen.js";
import { reactive, ref, computed } from "vue";
import Tips from "@/components/Tips.vue";
const store = useLitenStore();
const point = ref(0);
const totalList = store.currentWordList;
const tips = ref(!(sessionStorage.getItem("tips") === "false") ?? true);
// 初始化
const three = computed(() => {
  return [
    ...totalList.slice(point.value - 1),
    ...totalList.slice(point.value),
    ...totalList.slice(point.value + 1),
  ];
});

const handlePre = () => {
  point.value--;
};
const handleNext = () => {
  point.value++;
};

// 关闭提示
const handleTips = () => {
  tips.value = false;
  sessionStorage.setItem("tips", false);
};
</script>
<style></style>
