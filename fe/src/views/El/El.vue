<template>
  <div class="flex w-full h-full overflow-hidden max-h-screen">
    <SubMenu :topics="topicList" @subChange="handleSubChange"></SubMenu>
    <div class="flex-1 p-10">
      <!-- content-wrapper -->
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
        <div class="w-full h-full p-5 pr-2">
          <transition :enter-active-class="'animate__animated animate__fadeIn'">
            <component :is="currentMode"></component>
          </transition>
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

import { useLitenStore } from "@/stores/listen.js";
const store = useLitenStore();

import "animate.css";
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
const topicList = ref([]);
// 当前选择模式
const activeMode = ref("R");
// 当前模式对应的组件
const currentMode = shallowRef(RMode);
// 当前topic
const currentTopic = ref(topicList.value[0] || "");
// 获取数据
const fetchListenData = async () => {
  const res = await fetch("/data/words.json").then((res) => res.json());
  topicList.value = res.listen_data?.topics || [];
  store.updateAudioList(res.listen_data?.audioList);
  store.updateWordList(res?.listen_data?.wordList);
  //更新初始值
  store.updateAudio(0);
  store.updateCurrentWordList(0);
};
fetchListenData();
// 模式切换
const handleMode = ({ name, comp }) => {
  activeMode.value = name;
  currentMode.value = comp;
};
// 副标题切换
const handleSubChange = (topic, index) => {
  store.updateAudio(index);
  store.updateCurrentWordList(index);
};
</script>
<style scoped></style>
