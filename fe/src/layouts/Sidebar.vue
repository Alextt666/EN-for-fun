<template>
  <div class="w-20 h-screen bg-gray-100 pl-1 border-r-2">
    <div>
      <img :src="AlexIcon" alt="icon" class="p-4" />
    </div>
    <div
      class="mt-4 mb-8"
      style="
        height: 1px;
        background-color: #ccc;
        margin-left: 8px;
        margin-right: 8px;
      "
    ></div>
    <div>
      <SidebarItem
        v-for="{ name, icon } in Classy"
        :key="name"
        :icon="icon"
        :class="`${name == 'update' ? 'fixed bottom-8' : ''} ${
          isActive == name ? 'bg-white' : ''
        }`"
        @click="handleActive(name)"
      ></SidebarItem>
    </div>
  </div>
</template>
<script setup>
import AlexIcon from "@/assets/alex.png";
import ElIcon from "@/assets/listen.svg";
import UpdateIcon from "@/assets/update.svg";
import SidebarItem from "@/components/SidebarItem.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const Classy = [
  { name: "el", icon: ElIcon },
  { name: "update", icon: UpdateIcon },
];
const isActive = ref("el");
const handleActive = (name) => {
  isActive.value = name;
  router.push(`/${name}`);
};
</script>
<style></style>
