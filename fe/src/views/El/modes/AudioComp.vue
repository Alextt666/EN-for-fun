<template>
  <audio class="w-96 h-12 mb-10" :src="store.currentAudio" controls></audio>
</template>
<script  setup>
import { useLitenStore } from "@/stores/listen.js";
const store = useLitenStore();

</script>
<style>
 
</style>
