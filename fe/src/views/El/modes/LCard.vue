<template>
  <div class="w-full h-3/4 flex justify-center items-center relative">
    <div
      class="w-1/5 h-56 shadow-xl rounded-md absolute -translate-x-96 translate-y-8 bg-gray-50 z-10 flex flex-col justify-center items-center gap-4 cursor-pointer"
      @click="handlePre"
    >
      <div class="font-bold text-xl tracking-wider">
        {{ props.three[0].en }}
      </div>
      <div class="tracking-wider">{{ props.three[0].cn }}</div>
    </div>

    <div
      class="w-2/5 h-80 shadow-xl rounded-lg absolute bg-gray-50 z-30 flex justify-center items-center overflow-hidden"
    >
      <transition
        :enter-active-class="'animate__animated animate__fadeInDown'"
        :leave-active-class="'animate__animated animate__fadeOutDown'"
        mode="out-in"
        
      >
        <div :key="props.three[1]" class="w-full h-full">
          <!-- 提示区域 -->
          <div class="p-2 m-2 flex items-center">
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
          <!-- 输入区域 -->
          <div class="h-3/4 flex flex-col justify-center items-center">
            <input
              class="w-1/2 border-b-2 h-12 outline-none text-xl indent-6 bg-gray-50 tracking-wider"
              type="text"
              ref="inputArea"
              v-model="inputValue"
              v-focus
              @keyup.enter="handleEnter"
              @keyup.up="toggle"
            />
            <div class="pt-5 tracking-wider">{{ props.three[1].cn }}</div>
          </div>
        </div>
      </transition>
    </div>

    <div
      class="w-1/5 h-56 shadow-xl rounded-md absolute translate-x-96 translate-y-8 bg-gray-50 z-10 flex flex-col justify-center items-center gap-4 cursor-pointer"
      @click="handleNext"
    >
      <div class="font-bold text-xl tracking-wider">
        {{ props.three[2].en }}
      </div>
      <div class="tracking-wider">{{ props.three[2].cn }}</div>
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
const inputValue = ref("");
const inputArea = ref(null);

const handlePre = () => {
  reset();
  emits("pre");
};
const handleNext = () => {
  reset();
  emits("next");
};

// 切换展示
const toggle = () => {
  isActive.value = !isActive.value;
  inputArea.value.focus();
};

// 自定义指令
const vFocus = {
  mounted: (el) => el.focus(),
};

// reset状态
const reset = () => {
  // 重置
  inputValue.value = "";
  isActive.value = false;
};

// 确认输入
const handleEnter = () => {
  const origin = props.three[1].en.trim();
  const value = inputValue.value.trim();
  if (value === origin) {
    handleNext();
  } else {
    reset();
  }
};
</script>
<style></style>
