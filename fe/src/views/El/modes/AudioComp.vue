<template>
  <audio
    class="w-96 h-12 mb-10"
    :src="store.currentAudio"
    controls
    ref="audioRef"
  ></audio>
</template>
<script setup>
import { useLitenStore } from "@/stores/listen.js";
import { watch, ref } from "vue";
const store = useLitenStore();
const audioRef = ref(null);
const props = defineProps(["isPlay"]);
watch(props, (newVal, oldVal) => {
  if (props.isPlay) {
    audioRef.value.play();
    return;
  }
  audioRef.value.pause();
});
</script>
<style></style>
