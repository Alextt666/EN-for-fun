<template>
  <div class="w-full h-full" @keyup.down="handleRandom" @keyup="handlePause">
    <AudioComp :isPlay="isPlay"></AudioComp>
    <div>
      <div class="font-bold text-sm tracking-wider pl-4">
        <span >To:</span>
        <span class="tracking-wide text-xs">
          {{ totalList.length || "" }} /
        </span>
        <input
          class="text-xs"
          type="number"
          style="outline: none; width: 30px; border-radius: 5px"
          v-model="point"
        />
      </div>
    </div>
    <LCard :three="three" @pre="handlePre" @next="handleNext"></LCard>
    <Tips @click="handleTips" v-show="tips">
      <div class="w-full text-center text-gray-600 italic text-sm mt-5">
        Tips💡: ⬆ 打开提示 Enter 确认答题 ⬇洗牌乱序 轻点关闭提示
      </div>
    </Tips>
  </div>
</template>
<script setup>
import LCard from "./LCard.vue";
import AudioComp from "./AudioComp.vue";
import { useLitenStore } from "@/stores/listen.js";
import { reactive, ref, computed, toRef, toRaw } from "vue";
import Tips from "@/components/Tips.vue";
const store = useLitenStore();
const point = ref(0);
const isPlay = ref(false);
const totalList = toRef(store.currentWordList);
const tips = ref(!(sessionStorage.getItem("tips") === "false") ?? true);
// 初始化
const three = computed(() => {
  return [
    ...totalList.value.slice(point.value - 1),
    ...totalList.value.slice(point.value),
    ...totalList.value.slice(point.value + 1),
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

// shuffle
const handleRandom = (e) => {
  function shuffleArray(arr) {
    const array = Array.from(arr);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  totalList.value = shuffleArray(toRaw(totalList.value));
  console.log(totalList.value, "totalList");
};

// handlePause
const handlePause = (e) => {
  if (e.keyCode === 37) {
    isPlay.value = false;
  }
  if (e.keyCode === 39) {
    isPlay.value = true;
  }
};
</script>
<style></style>
