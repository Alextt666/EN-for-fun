<template>
  <div class="w-full h-full overflow-hidden">
    <AudioComp></AudioComp>
    <div
      ref="wordContext"
      class="w-full h-5/6 overflow-scroll mt-4 grid grid-cols-2 justify-center items-center alex-scrollbar"
    >
      <div class="flex flex-col">
        <p
          class="h-24 flex justify-center items-center text-xl"
          v-for="(item,index) in store.currentWordList"
          :key="index"
          v-lazy="item.en"
        >
        </p>
      </div>
      <div class="flex flex-col">
        <p
          class="h-24 flex justify-start pl-10 items-center text-xl"
          v-for="(item,index) in store.currentWordList"
          :key="index"
          v-lazy="item.cn"
        >
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
import AudioComp from "./AudioComp.vue";
import { useLitenStore } from "@/stores/listen.js";
const store = useLitenStore();

import { ref } from "vue";
const wordContext = ref(null); // 内容上下文
const handleBackTop = () => {
  wordContext.value.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// lazy
const vLazy = async (el, binding) => {
  const observer = new IntersectionObserver((entry) => {
    if (entry[0].intersectionRatio > 0) {
      el.innerText = binding.value;
      observer.unobserve(el);
    }
  });
  observer.observe(el);
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
