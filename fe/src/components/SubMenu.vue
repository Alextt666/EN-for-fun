<template>
  <div
    class="w-1/6 lg:p-4 lg:pt-10 xl:p-10 text-center font-bold border-r-2 overflow-scroll alex-scrollbar"
  >
    <div class="font-bold lg:text-md xl:text-xl">⭐Topic🚀</div>
    <ul class="mt-8 flex flex-col justify-center items-center">
      <li
        :class="`bg-white m-2 p-2 w-full h-10 rounded-md cursor-pointer hover:scale-110 shadow-md transition-all duration-150 ${
          activeItem == index ? 'shadow-purple-200' : ''
        }`"
        v-for="(item, index) in topics"
        :key="item"
        @click="handleActiveTopic(item, index)"
      >
        {{ item?.length > 20 ? item.slice(0, 20) + "..." : item}}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from "vue";
const props = defineProps(["topics"]);
const emits = defineEmits(["subChange"]);
// 默认主题1
const activeItem = ref(0);
// 切换当前主题
const handleActiveTopic = (item, index) => {
  activeItem.value = index;
  emits("subChange", item,index);
};
</script>
<style scoped>
.alex-scrollbar::-webkit-scrollbar {
  width: 1px; /* Webkit */
}

.alex-scrollbar::-webkit-scrollbar-thumb {
  background: #c2c1c1; /* Webkit */
}
</style>
