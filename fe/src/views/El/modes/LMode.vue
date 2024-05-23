<template>
  <div class="border-2 w-full h-full">
    <audio class="w-96 h-12 " :src="tempAudio" controls></audio>
  </div>
</template>
<script setup>
import tempAudio from "@/assets/audio/1.mp3"; // 后续改由接口返回
</script>
<style></style>
