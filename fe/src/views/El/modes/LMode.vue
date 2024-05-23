<template>
  <div class="w-full h-full">
    <audio class="w-96 h-12" :src="store.currentAudio" controls></audio>
    <div>
      {{ store.currentAudio }}
    </div>
  </div>
</template>
<script setup>
import { useLitenStore } from "@/stores/listen.js";
const store = useLitenStore();
</script>
<style></style>
