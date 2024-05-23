<template>
  <div class="flex w-full h-full overflow-hidden max-h-screen">
    <SubMenu></SubMenu>
    <div class="flex-1 p-10">
      <!-- wrapper -->
      <div class="bg-white w-full h-full rounded-2xl relative">
        <div
          class="h-8 flex w-36 justify-evenly items-center absolute top-5 right-5 gap-2"
        >
          <ModeItem
            v-for="item in modes"
            :key="item"
            :mode="item"
            :active-mode="activeMode"
            @click="handleMode(item)"
          ></ModeItem>
        </div>
        <div>content</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SubMenu from "@/components/SubMenu.vue";
import ModeItem from "./ModeItem.vue";
import { ref } from "vue";
const modes = ["L", "R", "S"];
const activeMode = ref("L");
const handleMode = (mode) => {
  activeMode.value = mode;
  console.log(mode);
};
</script>
<style scoped></style>
