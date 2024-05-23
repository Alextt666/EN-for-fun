<template>
  <div class="border-2 w-full h-full overflow-scroll alex-scrollbar" ref="wordContext">
    <audio class="w-96 h-12" :src="tempAudio" controls></audio>
    <div
     
      class="p-4 mt-4 grid grid-cols-2 justify-center items-center"
    >
      <div class="flex flex-col">
        <p
          class="h-24 flex justify-center items-center text-xl"
          v-for="item in wordList"
        >
          Listetranse
        </p>
      </div>
      <div class="flex flex-col">
        <p
          class="h-24 flex justify-start pl-10 items-center text-xl"
          v-for="item in wordList"
        >
          Chinese
        </p>
      </div>
    </div>
    <div
      class="fixed bottom-20 right-28 text-2xl hover:-translate-y-2 cursor-pointer transition-all duration-300"
      @click="handleBackTop"
    >
      🚀
    </div>
  </div>
</template>
<script setup>
import tempAudio from "@/assets/audio/part1/1_1_subject.mp3"; // 后续改由接口返回

import { ref } from "vue";
const wordContext = ref(null); // 内容上下文
const wordList = ref(100); // 词汇列表 后续由接口返回
const handleBackTop = () => {
  wordContext.value.scrollTo({
    top:0,
    behavior: "smooth",
  })
};
</script>
<style scoped>
.alex-scrollbar::-webkit-scrollbar {
  width: 5px; /* Webkit */
}

.alex-scrollbar::-webkit-scrollbar-thumb {
  background: #c2c1c1; /* Webkit */
}
</style>
