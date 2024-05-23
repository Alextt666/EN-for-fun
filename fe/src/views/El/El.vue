<template>
  <div class="flex w-full h-full overflow-hidden max-h-screen">
    <SubMenu :topics="topicList" @subChange="handleSubChange"></SubMenu>
    <div class="flex-1 p-10">
      <!-- wrapper -->
      <div class="bg-white w-full h-full rounded-2xl relative">
        <div
          class="h-8 flex w-36 justify-evenly items-center absolute top-5 right-5 gap-2"
        >
          <ModeItem
            v-for="item in modes"
            :key="item.name"
            :mode="item.name"
            :active-mode="activeMode"
            @click="handleMode(item)"
          ></ModeItem>
        </div>
        <div>
          <component :is="currentMode"></component>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SubMenu from "@/components/SubMenu.vue";
import ModeItem from "./ModeItem.vue";
import LMode from "./modes/LMode.vue";
import RMode from "./modes/RMode.vue";
import SMode from "./modes/SMode.vue";
import { ref, shallowRef } from "vue";
// 默认模式列表
const modes = [
  {
    name: "L",
    comp: LMode,
  },
  {
    name: "R",
    comp: RMode,
  },
  {
    name: "S",
    comp: SMode,
  },
];
// fetch数据填充 副标题区域
const topicList = ref(["Education 1", "Education 2"]);
// 当前选择模式
const activeMode = ref("L");
// 当前模式对应的组件
const currentMode = shallowRef(LMode);
// 模式切换
const handleMode = ({ name, comp }) => {
  activeMode.value = name;
  currentMode.value = comp;
  console.log(mode);
};
// 副标题切换
const handleSubChange = (topic) => {
  console.log(topic, "change to topic");
};
</script>
<style scoped></style>
