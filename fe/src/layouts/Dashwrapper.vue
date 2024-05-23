<template>
  <div class="flex-1 bg-gray-100">
    <router-view #default="{ Component, route }">
      <transition :enter-active-class="`${route.meta.transition}`">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
<script setup>
import "animate.css";
</script>
<style></style>
