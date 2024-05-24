import { defineStore } from "pinia";
import { concatUrl } from "@/utils/audioUrl.js";
export const useLitenStore = defineStore("listen", {
  state: () => ({
    currentAudio: "",
    currentWordList: [],
    audioList: [],
    wordList: [],
  }),
  actions: {
    updateAudio(index) {
      const baseAudioURL = this.audioList[index];
      this.currentAudio = concatUrl(baseAudioURL);
    },
    updateAudioList(list) {
      this.audioList.length = 0;
      this.audioList = list;
    },
    updateWordList(list) {
      this.wordList.length = 0;
      this.wordList = list;
    },
    updateCurrentWordList(index) {
      this.currentWordList.length = 0;
      if (this.wordList.length > index) {
        const tempArr =
          this.wordList[index].length > 0 ? this.wordList[index] : [];
        tempArr.forEach((item) => {
          this.currentWordList.push(item);
        });
        return;
      }
      return;
    },
  },
});
