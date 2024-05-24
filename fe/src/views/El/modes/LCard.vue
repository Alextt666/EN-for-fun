<template>
  <div class="w-full border-2 h-3/4 flex justify-center items-center relative">
    <div
      class="w-1/5 h-48 border-2 shadow-xl rounded-md absolute -translate-x-96 translate-y-8 bg-white z-10 flex justify-center items-center cursor-pointer transition-all duration-700"
      @click="handlePre"
    >
      {{ props.three[0] }}
    </div>

    <div
      class="w-1/2 h-96 border-2 shadow-xl rounded-md absolute bg-white z-30 flex justify-center items-center"
    >
      <transition
        :enter-active-class="'animate__animated animate__fadeInDown'"
        :leave-active-class="'animate__animated animate__fadeOutDown'"
        mode="out-in"
      >
        <div :key="props.three[1]" class="border-2 w-full h-full">
          <div class="p-2 m-2 border-2 flex items-center">
            <div @click="toggle" class="cursor-pointer mr-8">
              <img
                class="w-8"
                :src="`${isActive ? treeIcon : YeIcon}`"
                alt="icon"
              />
            </div>
            <transition
              :enter-active-class="'animate__animated animate__fadeIn'"
              :leave-active-class="'animate__animated animate__fadeOut'"
            >
              <div class="tracking-widest font-bold" v-show="isActive">
                {{ props.three[1].en }}
              </div>
            </transition>
          </div>

          <div class="border-2">
            <input type="text">
            {{ props.three[1] }}
          </div>
        </div>
      </transition>
    </div>

    <div
      class="w-1/5 h-48 border-2 shadow-xl rounded-md absolute translate-x-96 translate-y-8 bg-white z-10 flex justify-center items-center cursor-pointer"
      @click="handleNext"
    >
      {{ props.three[2] }}
    </div>
  </div>
</template>
<script setup>
import treeIcon from "@/assets/tree.svg";
import YeIcon from "@/assets/yezi.svg";
import { ref } from "vue";
const props = defineProps(["three"]);
const emits = defineEmits(["pre", "next"]);
const isActive = ref(false);

const handlePre = () => {
  emits("pre");
};
const handleNext = () => {
  emits("next");
};

// 切换展示
const toggle = () => {
  isActive.value = !isActive.value;
};
</script>
<style></style>
