<template>
  <div
    class="w-1/6 lg:p-4 lg:pt-10 xl:p-10 text-center font-bold border-r-2 overflow-scroll alex-scrollbar"
  >
    <div class="font-bold lg:text-md xl:text-xl">⭐Topic🚀</div>
    <ul class="mt-8 flex flex-col justify-center items-center">
      <li
        :class="`bg-white m-2 p-2 w-full h-10 rounded-md cursor-pointer hover:scale-110 shadow-md transition-all duration-150 ${
          activeItem == item ? 'shadow-purple-200' : ''
        }`"
        v-for="item in 26"
        @click="handleActiveTopic(item)"
      >
        Education {{ item }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";

const activeItem = ref(1);
const handleActiveTopic = (item) => {
  activeItem.value = item;
  console.log(item);
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
