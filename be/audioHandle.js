const fs = require("fs");
const folderPath = "./part1";
const fileNames = fs.readdirSync(folderPath); // 所有文件名


const newName = [
  '1-10_Finance.mp3',
  '1-11_Tourism.mp3',
  '1-12_Figures.mp3',
  '1-13_Transport.mp3',
  '1-14_Accommodation_Types.mp3',
  '1-15_Furniture_and_Facilities.mp3',
  '1-16_Diet.mp3',
  '1-17_Leisure_Life.mp3',
  '1-18_Fauna_and_Flora.mp3',
  '1-19_Plants.mp3',
  '1-1_Subject_Names.mp3',
  '1-20_Companies_and_Enterprises.mp3',
  '1-21_Crime.mp3',
  '1-22_Medical_Scenes.mp3',
  '1-23_Environment.mp3',
  '1-24_Sports.mp3',
  '1-25_Movies.mp3',
  '1-26_Architecture_and_Construction.mp3',
  '1-2_Courses.mp3',
  '1-3_Thesis_Vocabulary.mp3',
  '1-4_Library_Vocabulary.mp3',
  '1-5_Student_Types_and_Certificate_Types.mp3',
  '1-6_Publications.mp3',
  '1-7_Common_Use_Words.mp3',
  '1-8_Basic_Vocabulary_I.mp3',
  '1-9_Basic_Vocabulary_II.mp3'
  ]
fileNames.forEach((item, index) => {
  fs.renameSync(`./part1/${item}`, `./part1/${newName[index]}`);
});

console.log(fileNames);
