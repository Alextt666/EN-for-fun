<template>
  <div class="w-full border-2 h-3/4 flex justify-center items-center relative">
    <div
      class="w-1/5 h-48 border-2 shadow-xl rounded-md absolute -translate-x-96 translate-y-8 bg-white z-10 flex justify-center items-center cursor-pointer"
      @click="handlePre"
    >
      {{ props.three[0] }}
    </div>
    <div
      class="w-1/2 h-96 border-2 shadow-xl rounded-md absolute bg-white z-30 flex justify-center items-center"
    >
      {{ props.three[1] }}
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
const props = defineProps(["three"]);
const emits = defineEmits(["pre", "next"]);
const handlePre = () => {
  emits("pre");
};
const handleNext = () => {
  emits("next");
};
</script>
<style></style>
